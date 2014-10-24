(ns playfair-cljs.components.keypress
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [playfair-cljs.debug :as debug]
            [playfair-cljs.asCompiler :as asc]
            [playfair-cljs.shapeData :as s-data]))

(def key-chan (chan))

(def key-codes
  {:x 88
   :a 65
   :r 82
   :c 67
   :u 85
   :p 80
   :v 86
   :s 83
   :e 69
   :d 68
   :l 76
   :i 73
   :g 71
   :k 75
   :z 90
   :up 38
   :down 40
   :left 37
   :right 39
   :delete 8})

(defn check-bounds [numb inc-or-dec steps]
  (if (= inc-or-dec "inc")
    (if (= numb (- (asc/count-all-steps steps) 1))
        numb
        (inc numb))
    (if (= numb 0)
        numb
        (dec numb))))


(defn check-bounds-for [[outer-ind loop-ind inner-ind] inc-or-dec times loop-size steps]
  (let [new-ind (if (= inc-or-dec "inc") (inc inner-ind) (dec inner-ind))]
    (if (= inc-or-dec "inc")
      (if (= (inc inner-ind) loop-size)
        (if (= (inc loop-ind) times)
          (if (= (inc outer-ind) (count steps)) [outer-ind loop-ind inner-ind] (inc outer-ind))
          [outer-ind (inc loop-ind) 0])
        [outer-ind loop-ind (inc inner-ind)])
      (if (= (dec inner-ind) -1)
        (if (= (dec loop-ind) -1)
          outer-ind
          [outer-ind (dec loop-ind) (dec loop-size)])
        [outer-ind loop-ind (dec inner-ind)]))))



(defn check-step [current-numb inc-or-dec steps]
  (let [current-step (steps (if (number? current-numb) current-numb (current-numb 0)))]
    (if (= (:step-name current-step) :for)
      (if (number? current-numb)
        (if (= inc-or-dec "inc")
          [current-numb 0 0]
          (check-bounds current-numb inc-or-dec steps))
        (check-bounds-for current-numb inc-or-dec (:times current-step) (count (:for-steps current-step)) steps) )
      (check-bounds current-numb inc-or-dec steps))))

(defn check-max-active-steps [[a-s1 a-s2] steps]
  [(if (= (- (count steps) 1) a-s1) (- (count steps) 2) a-s1), (if (= (- (count steps) 1) a-s2) (- (count steps) 2) a-s2)])

(defn multi-assoc [reciever & assoc-pairs]
  (reduce (fn [rec [look-up value]]
            (assoc rec look-up value)) reciever assoc-pairs))


(defn handle-key-event [app [press-type event]]
  (let [keyCode (.-keyCode event)
        metaKey (.-metaKey event)
        shiftKey (.-shiftKey event)
        ctrlKey (.-ctrlKey event)]
    (if (= press-type :keyup)
      (om/transact! app :key-state (fn [_] :select))
      (cond
        (= (:x key-codes) keyCode) (om/transact! app :key-state (fn [_] :line))
        (= (:a key-codes) keyCode) (om/transact! app :key-state (fn [_] :path))
        (= (:r key-codes) keyCode) (om/transact! app :key-state (fn [_] :rect))
        (= (:c key-codes) keyCode) (om/transact! app :key-state (fn [_] :circle))
        (= (:u key-codes) keyCode) (om/transact! app :key-state (fn [_] :magnet))
        (= (:p key-codes) keyCode) (om/transact! app :key-state (fn [_] :picture))
        (= (:v key-codes) keyCode) (om/transact! app :key-state (fn [_] :move))
        (= (:s key-codes) keyCode) (om/transact! app :key-state (fn [_] :scale))
        (= (:e key-codes) keyCode) (om/transact! app :key-state (fn [_] :rotate))
        (= (:d key-codes) keyCode) (om/transact! app :key-state (fn [_] :duplicate))
        (= (:l key-codes) keyCode) (om/transact! app (fn [{:keys [steps active-steps] :as app-state}]
                                                           (let [[s1 s2] active-steps
                                                                 head (subvec steps 0 s1)
                                                                 looped (subvec steps s1 (+ s2 1))
                                                                 tail (subvec steps (+ s2 1) (count steps))]
                                                             (assoc app-state :steps (vec (concat head [(s-data/make-for 20 looped)] tail)) :active-steps [[s1 0 0] [s1 0 0]]) )))
        (= (:i key-codes) keyCode) (om/transact! app :key-state (fn [_] :if))
        (= (:g key-codes) keyCode) (om/transact! app :key-state (fn [_] :guide))
        (= (:k key-codes) keyCode) (om/transact! app :key-state (fn [_] :clip))
        (= (:up key-codes) keyCode) (om/transact! app (fn [{:keys [steps active-steps step-direction] :as app-state}]
                                                        (let [[s1 s2] active-steps]
                                                          (if shiftKey
                                                              (if (= step-direction "up")
                                                                (assoc app-state :active-steps [(check-step s1 "dec" steps) s2])
                                                                (if (= s1 s2)
                                                                    (multi-assoc app-state [:active-steps [(check-step s1 "dec" steps) s2]] [:step-direction "up"])
                                                                    (assoc app-state :active-steps [s1 (check-step s2 "dec" steps)])))
                                                              (multi-assoc app-state [:active-steps [(check-step s2 "dec" steps) (check-step s2 "dec" steps)]] [:step-direction "up"])
                                                              ))))
        (= (:down key-codes) keyCode) (om/transact! app (fn [{:keys [steps active-steps step-direction] :as app-state}]
                                                           (let [[s1 s2] active-steps]
                                                              (if shiftKey
                                                                (if (= step-direction "down")
                                                                  (assoc app-state :active-steps [s1 (check-step s2 "inc" steps)])
                                                                  (if (= s1 s2)
                                                                    (multi-assoc app-state [:active-steps [s1 (check-step s2 "inc" steps)]] [:step-direction "down"])
                                                                    (assoc app-state :active-steps [(check-step s1 "inc" steps) s2])))
                                                                (multi-assoc app-state [:active-steps [(check-step s1 "inc" steps) (check-step s1 "inc" steps)]] [:step-direction "down"])))))

       (and (= (:z key-codes) keyCode) metaKey) (om/transact! app (fn [{:keys [active-steps steps] :as as}]
                                                                         (assoc as :steps (pop steps) :active-steps (check-max-active-steps active-steps steps))))

       ;;(= (:delete key-codes) keyCode) (om/transact! app (fn [{:keys [steps active-steps] :as as}]
       ;;                                                    (update-in as [:steps] (fn [steps]
       ;;                                                                             (vec (concat (subvec steps 0 (active-steps 0)) (subvec steps (+ (active-steps 1) 1) (count steps)))) ))))
       ))))


(defn key-listener-component [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [keychan (om/get-shared owner :keychan)]
        (go
          (while true
            (let [[v ch] (alts! [keychan])]
              (when (= ch keychan)
                (do
                  (handle-key-event app v))))))))

    om/IRender
    (render [this]
      (dom/div nil ""))))
