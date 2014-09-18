(ns playfair-cljs.components.canvas-events
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [playfair-cljs.debug :as debug]
            [playfair-cljs.shapes :as shapes]
            [playfair-cljs.math :as bmath]
            [playfair-cljs.appstate :as state]
            [playfair-cljs.general :as g]))


(def canvas-chan (chan))

(defn get-target-xy [dom-node]
  (let [target-rect (.getBoundingClientRect (.-srcElement dom-node))]
    [(.-left target-rect) (.-top target-rect)]))


(defn inside-circle? [[x y] [cx cy] r]
  (and (and (< x (+ cx r))
            (> x (- cx r)))
       (and (< y (+ cy r))
            (> y (- cy r)))))

(defn get-rotate-val [[origin-x origin-y] [c-m-x c-m-y] [m-d-x m-d-y]]
  (let [original-radius (bmath/distance-formula [origin-x origin-y] [m-d-x m-d-y])
        new-radius (bmath/distance-formula [origin-x origin-y] [c-m-x c-m-y])
        original-angle (bmath/abs (- (bmath/acos (/ (- m-d-x origin-x) original-radius)) (if (> (- m-d-y origin-y) 0) (* (.-PI js/Math) 2) 0)))
        new-angle (bmath/abs (- (bmath/acos (/ (- c-m-x origin-x) new-radius)) (if (> (- c-m-y origin-y) 0) (* (.-PI js/Math) 2) 0)))]
        (/ (- original-angle new-angle) (* 2 (.-PI js/Math)))))


(defn check-snap
  ([[m-x m-y] state] (check-snap [m-x m-y] state nil))
  ([[m-x m-y] state lookup?]
  (let [state (if lookup? (assoc state (lookup? 0) (g/dissoc-vec ((lookup? 0) state) (lookup? 1))) state)]
  (filter (fn [x] (vector? x))
          (reduce concat (reduce concat
                  (map (fn [[s-name s-vec]]
                                       (map-indexed (fn [ind shape]
                                                      (map (fn [[node {:keys [x y]}]]
                                                               (if (inside-circle? [m-x m-y] [x y] node-radius)
                                                                 [node [s-name ind]] nil)) (:position-attrs shape))) s-vec)) state)))))))



(defn cleanse-draw [draw-map]
  (-> draw-map (dissoc :diffX) (dissoc :diffY) (dissoc :to-node) (dissoc :to-shape)))


(defn canvas-event-handler [app-state {:keys [e-type e reciever] :as event-data}]
  (let [bounded-rect (.getBoundingClientRect (.getElementById js/document "bigCanvas"))
        [target-x target-y] [(.-left bounded-rect) (.-top bounded-rect)]]
  (cond
     (= e-type :mouseMove) (do
                             (swap! state/gui-state (fn [gui-state]
                                                        (assoc gui-state :canvas-m-pos [(- (.-clientX e) target-x)
                                                                                        (- (.-clientY e) target-y)])))
                             (let [{:keys [mouse-down? canvas-m-pos in-progress? mouse-down-pos]} @state/gui-state
                                     [c-m-x c-m-y] canvas-m-pos
                                     [m-d-x m-d-y] mouse-down-pos]
                                 (cond
                                  (some #(= in-progress? %) [:line :path :rect :circle]) (let [snapped-list (check-snap canvas-m-pos (:second-last-state event-data))]
                                                                                             (if (empty? snapped-list)
                                                                                               (om/transact! app-state :steps (fn [steps] (conj (safe-pop steps)
                                                                                                                                                (multi-assoc (cleanse-draw (last steps)) [:diffX (- c-m-x m-d-x)]
                                                                                                                                                                                         [:diffY (- c-m-y m-d-y)]))))
                                                                                               (om/transact! app-state :steps (fn [steps] (conj (safe-pop steps)
                                                                                                                                                (multi-assoc (cleanse-draw (last steps)) [:to-node ((first snapped-list) 0)]
                                                                                                                                                                                         [:to-shape ((first snapped-list) 1)]))))))
                                  (= in-progress? :move) (om/transact! app-state :steps (fn [steps] (conj (safe-pop steps)
                                                                                                          (let [snapped-list (check-snap canvas-m-pos (get-last-cs @state/app-state) (:shape-lookup (last steps)))]
                                                                                                            (if (empty? snapped-list)
                                                                                                              (multi-assoc (cleanse-draw (last steps))  [:diffX (- c-m-x m-d-x)]
                                                                                                                                                        [:diffY (- c-m-y m-d-y)])
                                                                                                                (multi-assoc (cleanse-draw (last steps)) [:to-node ((first snapped-list) 0)]
                                                                                                                                                         [:to-shape ((first snapped-list) 1)]))))))
                                  (= in-progress? :rotate) (om/transact! app-state :steps (fn [steps]
                                                                                             (let [[s-name s-index] (:shape-lookup (last steps))
                                                                                                   from-node ((:node (last steps)) (:position-attrs ((s-name (get-last-cs @state/app-state)) s-index)))
                                                                                                   debug (debug/log steps)]
                                                                                               (conj (safe-pop steps) (assoc (last steps) :rotate-val (get-rotate-val [(:x from-node) (:y from-node)] [c-m-x c-m-y] [m-d-x m-d-y]))))))
                                  (= in-progress? :scale) (om/transact! app-state :steps (fn [steps] (let [[s-name s-index] (:shape-lookup (last steps))
                                                                                                     from-node ((shapes/get-opposite-node (:node (last steps))) (:position-attrs ((s-name (get-last-cs @state/app-state)) s-index)))
                                                                                                     original-dist (bmath/distance-formula [(:x from-node) (:y from-node)] [m-d-x m-d-y])
                                                                                                     new-dist (bmath/distance-formula [(:x from-node) (:y from-node)] [c-m-x c-m-y])]
                                                                                                     (conj (safe-pop steps) (assoc (last steps) :scale-val (/ new-dist original-dist)))))))))

     (= e-type :mouseDown) (do (swap! state/gui-state (fn [gui-state] (multi-assoc gui-state [:mouse-down-pos [(- (.-clientX e) target-x) (- (.-clientY e) target-y)]]
                                                                                             [:mouse-down? true])))
                               (om/transact! app-state (fn [as] (assoc as :active-steps [(count (:steps as)) (count (:steps as))])))
                               (let [{:keys [mouse-down? canvas-m-pos in-progress?]} @state/gui-state
                                     [c-m-x c-m-y] canvas-m-pos]
                                    (cond
                                       (and (some #(= % (:key-state @state/app-state)) [:line :path :rect :circle]) (= reciever :canvas))
                                            (do
                                              (let [snapped-list (check-snap canvas-m-pos (get-last-cs @state/app-state))]
                                                (om/transact! app-state :steps (fn [steps] (conj steps (shapes/make-draw (:key-state @state/app-state) (if (empty? snapped-list)
                                                                                                                                                         [c-m-x c-m-y]
                                                                                                                                                         [((first snapped-list) 0) ((first snapped-list) 1)])  [1 1])))))
                                             (swap! state/gui-state (fn [gs] (assoc gs :in-progress? (:key-state @state/app-state)))))
                                       (and (= :move (:key-state @state/app-state)) (= reciever :node))
                                            (do
                                            (om/transact! app-state :steps #(conj % (shapes/make-move (:from-node event-data) (:shape-lookup event-data) 0 0)))
                                            (swap! state/gui-state (fn [gs] (assoc gs :in-progress? :move))))
                                       (and (= :rotate (:key-state @state/app-state)) (= reciever :node))
                                            (do
                                              (om/transact! app-state :steps #(conj % (shapes/make-rotate (:shape-lookup event-data) (shapes/get-opposite-node (:from-node event-data)) 0)))
                                              (swap! state/gui-state (fn [gs] (assoc gs :in-progress? :rotate))))
                                       (and (= :scale (:key-state @state/app-state)) (= reciever :node))
                                            (do
                                              (om/transact! app-state :steps #(conj % (shapes/make-scale (:shape-lookup event-data) (:from-node event-data) 1)))
                                              (swap! state/gui-state (fn [gs] (assoc gs :in-progress? :scale))))
                                       (and (= :path (:key-state @state/app-state)) (= reciever :canvas))
                                            (do
                                              (om/transact! app-state :steps #(conj % (shapes/make-path-start c-m-x c-m-y nil nil)))
                                              (swap! state/gui-state (fn [gs] (assoc gs :in-progress? :path)))))))

     (= e-type :mouseUp) (swap! state/gui-state (fn [gui-state]
                                                  (do
                                                    (multi-assoc gui-state [:mouse-down? false] [:in-progress? false] [:in-progress? false])
                                                    (om/transact! app-state :key-state (fn [ks] :select))))))))


(defn canvas-events [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [keychan (om/get-shared owner :canchan)]
        (go
          (while true
            (let [[v ch] (alts! [keychan])]
              (when (= ch keychan)
                (do (canvas-event-handler app v))))))))

    om/IRender
    (render [this]
      (dom/div nil ""))))
