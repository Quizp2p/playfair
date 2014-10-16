(ns playfair-cljs.components.canvasEvents
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [playfair-cljs.debug :as debug]
            [playfair-cljs.math :as bmath]
            [playfair-cljs.appstate :as state]
            [playfair-cljs.general :as g]
            [playfair-cljs.shapeData :as s-data]
            [playfair-cljs.asCompiler :as asc]
            [playfair-cljs.csCompiler :as csc]
            [playfair-cljs.shapeDataConversion :as sdc]))


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

;;~~~~ DREAM MACRO ~~~~
;;
;; cond-let
;;
;; (cond-let
;;   (= test 2) [[lal lala] test])
;;   (= test 3) [{:keys [ x y]} text]
;; (body of the let))
;;
;;~~~~ END OF DREAM MACRO ~~~~

(defn check-snap-at-point [[s-name s-ind] [m-x m-y]]
  (fn [n-ind node]
    (if (= (count node) 2)
    (let [[node-name {:keys [x y]}] node]
      (if (inside-circle? [m-x m-y] [x y] csc/node-radius)
          [node-name [s-name s-ind]]
          nil))
    (let [[p-type x y] node]
      (if (inside-circle? [m-x m-y] [x y] csc/node-radius)
          [n-ind [s-name s-ind]]
          nil)))))



(defn check-snap
  ([[m-x m-y] state] (check-snap [m-x m-y] state nil))
  ([[m-x m-y] state lookup?]
  (let [state (if lookup? (assoc state (lookup? 0) (g/dissoc-vec ((lookup? 0) state) (lookup? 1))) state)]
  (filter (fn [x] (vector? x))
          (reduce concat (reduce concat
                  (map (fn [[s-name s-vec]]
                                  (map-indexed (fn [ind shape]
                                                  (map-indexed (check-snap-at-point [s-name ind] [m-x m-y]) (:position-attrs shape))) s-vec)) state)))))))


(defn check-path-start [[m-x m-y] state]
  (check-snap [m-x m-y] (dissoc state :rect :circle :line)))

(defn check-snap-at-mouse [[c-m-x c-m-y] snap-app-state]
  (let [snapped-list (check-snap [c-m-x c-m-y] snap-app-state)]
    (if (empty? snapped-list)
         [c-m-x c-m-y]
         [((first snapped-list) 0) ((first snapped-list) 1)])))

(defn cleanse-draw [draw-map]
  (-> draw-map (dissoc :diffX) (dissoc :diffY) (dissoc :to-node) (dissoc :to-shape)))

;;For mouse down something allways gets conj'd with steps. the

(defn mouse-down-action [app-state new-step in-progress]
  (do
    (om/transact! app-state (fn [as] (assoc as :steps (conj (:steps as) new-step)
                                               :active-steps [(count (:steps as)) (count (:steps as))])))
    (swap! state/gui-state (fn [gs] (assoc gs :in-progress? in-progress)))))

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
                                  (some #(= in-progress? %) [:line :rect :circle]) (let [snapped-list (check-snap canvas-m-pos (:second-last-state event-data))]
                                                                                             (if (empty? snapped-list)
                                                                                               (om/transact! app-state :steps (fn [steps] (conj (g/safe-pop steps)
                                                                                                                                                (g/multi-assoc (cleanse-draw (last steps)) [:diffX (- c-m-x m-d-x)]
                                                                                                                                                                                         [:diffY (- c-m-y m-d-y)]))))
                                                                                               (om/transact! app-state :steps (fn [steps] (conj (g/safe-pop steps)
                                                                                                                                                (g/multi-assoc (cleanse-draw (last steps)) [:to-node ((first snapped-list) 0)]
                                                                                                                                                                                         [:to-shape ((first snapped-list) 1)]))))))
                                  (= in-progress? :move) (om/transact! app-state :steps (fn [steps] (conj (g/safe-pop steps)
                                                                                                          (let [snapped-list (check-snap canvas-m-pos (asc/get-last-cs @state/app-state) (:shape-lookup (last steps)))]
                                                                                                            (if (empty? snapped-list)
                                                                                                              (g/multi-assoc (cleanse-draw (last steps))  [:diffX (- c-m-x m-d-x)]
                                                                                                                                                        [:diffY (- c-m-y m-d-y)])
                                                                                                                (g/multi-assoc (cleanse-draw (last steps)) [:to-node ((first snapped-list) 0)]
                                                                                                                                                         [:to-shape ((first snapped-list) 1)]))))))
                                  (= in-progress? :rotate) (om/transact! app-state :steps (fn [steps]
                                                                                             (let [[s-name s-index] (:shape-lookup (last steps))
                                                                                                   from-node ((:node (last steps)) (:position-attrs ((s-name (asc/get-last-cs @state/app-state)) s-index)))]
                                                                                               (conj (g/safe-pop steps) (assoc (last steps) :rotate-val (get-rotate-val [(:x from-node) (:y from-node)] [c-m-x c-m-y] [m-d-x m-d-y]))))))
                                  (= in-progress? :scale) (om/transact! app-state :steps (fn [steps] (let [[s-name s-index] (:shape-lookup (last steps))
                                                                                                     from-node ((sdc/get-opposite-node (:node (last steps))) (:position-attrs ((s-name (asc/get-last-cs @state/app-state)) s-index)))
                                                                                                     original-dist (bmath/distance-formula [(:x from-node) (:y from-node)] [m-d-x m-d-y])
                                                                                                     new-dist (bmath/distance-formula [(:x from-node) (:y from-node)] [c-m-x c-m-y])]
                                                                                                     (conj (g/safe-pop steps) (assoc (last steps) :scale-val (/ new-dist original-dist))))))
                                  (= in-progress? :path) (debug/log "WOW you are dragging a path")

                                  (= in-progress? :path-extend) (om/transact! app-state :steps (fn [steps]
                                                                                                 (let [snapped-list (check-snap canvas-m-pos (asc/get-last-cs @state/app-state) [:path (:path-index (last steps))] )]

                                                                                                     (conj (g/safe-pop steps) (if (empty? snapped-list)
                                                                                                                                  (assoc (dissoc (last steps) :to-node :to-shape) :x c-m-x :y c-m-y)
                                                                                                                                  (assoc (dissoc (last steps) :x :y) :to-node ((first snapped-list) 0) :to-shape ((first snapped-list) 1))))))))))

     (= e-type :mouseDown) (do (swap! state/gui-state (fn [gui-state] (g/multi-assoc gui-state [:mouse-down-pos [(- (.-clientX e) target-x) (- (.-clientY e) target-y)]]
                                                                                             [:mouse-down? true])))
                               (let [{:keys [mouse-down? canvas-m-pos in-progress?]} @state/gui-state
                                     [c-m-x c-m-y] canvas-m-pos]
                                    (cond
                                       (and (some #(= % (:key-state @state/app-state)) [:line :rect :circle]) (= reciever :canvas)) (mouse-down-action app-state (s-data/make-draw (:key-state @state/app-state)
                                                                                                                                                                                    (check-snap-at-mouse canvas-m-pos (asc/get-last-cs @state/app-state))
                                                                                                                                                                                    [1 1])
                                                                                                                                                                  (:key-state @state/app-state))

                                       (and (= :move (:key-state @state/app-state)) (= reciever :node)) (mouse-down-action app-state (s-data/make-move (:from-node event-data) (:shape-lookup event-data) 0 0) :move)

                                       (and (= :rotate (:key-state @state/app-state)) (= reciever :node)) (mouse-down-action app-state (s-data/make-rotate (:shape-lookup event-data) (sdc/get-opposite-node (:from-node event-data)) 0) :rotate)

                                       (and (= :scale (:key-state @state/app-state)) (= reciever :node)) (mouse-down-action app-state (s-data/make-scale (:shape-lookup event-data) (:from-node event-data) 1) :scale)

                                       (and (= :path (:key-state @state/app-state)) (= reciever :canvas)) (let [p-start (check-path-start [c-m-x c-m-y] (asc/get-last-cs @state/app-state))]
                                                                                                                 (mouse-down-action app-state (if (> (count p-start) 0)
                                                                                                                                                  (s-data/make-path-extend (((first p-start) 1) 1) "L" c-m-x c-m-y)
                                                                                                                                                  (let [[s-x s-y] (check-snap-at-mouse canvas-m-pos (asc/get-last-cs @state/app-state))]
                                                                                                                                                    (s-data/make-path-start s-x s-y nil nil)))
                                                                                                                                              (if (> (count p-start) 0)
                                                                                                                                                  :path-extend
                                                                                                                                                  :path))))))

     (= e-type :mouseUp) (do (swap! state/gui-state (fn [gui-state]
                                                    (g/multi-assoc gui-state [:mouse-down? false] [:in-progress? false] [:in-progress? false])))
                             (om/transact! app-state :key-state (fn [ks] :select))))))



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




