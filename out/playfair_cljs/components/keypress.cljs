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
   :up 38
   :down 40
   :left 37
   :right 39})

(defn check-bounds [numb inc-or-dec steps]
  (debug/log (asc/count-all-steps steps))
  (if (= inc-or-dec "inc")
    (if (= numb (- (asc/count-all-steps steps) 1))
        numb
        (inc numb))
    (if (= numb 0)
        numb
        (dec numb))))

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
                                                                 tail (subvec steps (+ s2 1) (count steps))
                                                                 log (debug/log (vec (concat head (s-data/make-for 5 looped) tail)))]
                                                             (assoc app-state :steps (vec (concat head [(s-data/make-for 20 looped)] tail))))))
        (= (:i key-codes) keyCode) (om/transact! app :key-state (fn [_] :if))
        (= (:g key-codes) keyCode) (om/transact! app :key-state (fn [_] :guide))
        (= (:k key-codes) keyCode) (om/transact! app :key-state (fn [_] :clip))
        (= (:up key-codes) keyCode) (om/transact! app (fn [{:keys [steps active-steps step-direction] :as app-state}]
                                                        (let [[s1 s2] active-steps]
                                                          (if shiftKey
                                                              (if (= step-direction "up")
                                                                (assoc app-state :active-steps [(check-bounds s1 "dec" steps) s2])
                                                                (if (= s1 s2)
                                                                    (multi-assoc app-state [:active-steps [(check-bounds s1 "dec" steps) s2]] [:step-direction "up"])
                                                                    (assoc app-state :active-steps [s1 (check-bounds s2 "dec" steps)])))
                                                              (multi-assoc app-state [:active-steps [(check-bounds s2 "dec" steps) (check-bounds s2 "dec" steps)]] [:step-direction "up"])
                                                              ))))
        (= (:down key-codes) keyCode) (om/transact! app (fn [{:keys [steps active-steps step-direction] :as app-state}]
                                                           (let [[s1 s2] active-steps]
                                                              (if shiftKey
                                                                (if (= step-direction "down")
                                                                  (assoc app-state :active-steps [s1 (check-bounds s2 "inc" steps)])
                                                                  (if (= s1 s2)
                                                                    (multi-assoc app-state [:active-steps [s1 (check-bounds s2 "inc" steps)]] [:step-direction "down"])
                                                                    (assoc app-state :active-steps [(check-bounds s1 "inc" steps) s2])))
                                                                (multi-assoc app-state [:active-steps [(check-bounds s1 "inc" steps) (check-bounds s1 "inc" steps)]] [:step-direction "down"]))
                                                             )))))))


(defn key-listener-component [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [keychan (om/get-shared owner :keychan)]
        (go
          (while true
            (let [[v ch] (alts! [keychan])]
              (when (= ch keychan)
                (do (handle-key-event app v))))))))

    om/IRender
    (render [this]
      (dom/div nil ""))))
