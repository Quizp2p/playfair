(ns playfair-cljs.components.canvas
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [playfair-cljs.shapes :as shapes]
            [playfair-cljs.debug :as debug]))


(def canvas-size [500 500])

(defn create-node-rest [[shape-name shape-map]]
  (let [node-points (:position-attrs shape-map)]
    (reduce (fn [accum [node-name node-pos]]
              (let [handle-node-map (shapes/attrs-to-nodes :circle {:cx (:x node-pos) :cy (:y node-pos) :r 3})
                    left-node (:left-node handle-node-map)
                    right-node (:right-node handle-node-map)]
                  (dissoc ((shapes/make-draw :circle [(:x left-node) (:y left-node)] [(:x right-node) (:y right-node)] (if (:active shape-map)
                                                                                                                           {:fill "blue" :stroke "blue"}
                                                                                                                           {:fill "#ffb440" :stroke "#ffb440"})) accum) :text) )) {} node-points)))

(defn create-node-path [[shape-name shape-map]]
         (let [node-points (:position-attrs shape-map)]
               (if (= (count node-points) 1)
                    {}
                    (reduce (fn [accum path-point]
                              (let [attrs {:cx (:x path-point) :cy (:y path-point) :r 3}
                                    [vec1 vec2] (shapes/attrs-to-vectors :circle attrs)]
                                (debug/log [vec1 vec2])
                                (dissoc ((shapes/make-draw :circle vec1 vec2 (if (:active shape-map)
                                                                         {:fill "blue" :stroke "blue"}
                                                                         {:fill "#ffb440" :stroke "#ffb440"})) accum) :text))) {} node-points))))
(defn create-node [[shape-name shape-map]]
  (if (= (keyword (:name shape-map)) :path)
    (create-node-path [shape-name shape-map])
    (create-node-rest [shape-name shape-map])))


(defn create-nodes [canvas-state]
  (reduce (fn [accum shape]
              (conj accum (create-node shape))) {} canvas-state))


(defn state-maker [accum step]
        (step accum))

;;Use for instaed of reduce
;; Here I seem to need to know the number of args - for for - I need t
(defn get-canvas-state
  ([app-state] (get-canvas-state app-state (count (:steps app-state))))
  ([app-state num-steps]
   (let [canvas-state (reduce state-maker {} (subvec (:steps app-state) 0 num-steps) )
         keyState (:key-state app-state)
         new-canvas-state (if (or (= :move keyState) (= :draw keyState))
                             (conj canvas-state (create-nodes (dissoc canvas-state :text)))
                             canvas-state)]
         (reduce (fn [accum [shape-name shape-map]]
                   (if (shapes/contain-str (name shape-name) "path")
                     (conj accum (if (= (count (:position-attrs shape-map)) 1)
                                   (shapes/line-point-func (:x ((:position-attrs shape-map) 0)) (:y ((:position-attrs shape-map) 0)))
                                   {shape-name shape-map}))
                     (conj accum {shape-name shape-map}))) {} new-canvas-state)
     )))




(defn render-canvas [shape owner]
  (let [[shape-name shape-map] shape
        shape-attrs (clj->js (conj (shapes/nodes-to-attrs (keyword (:name shape-map)) (:position-attrs shape-map))  (:visual-attrs shape-map)))]
    (reify om/IRender
    (render [this]
     (cond (= (:name shape-map) "rect") (dom/rect shape-attrs nil)
           (= (:name shape-map) "circle") (dom/circle shape-attrs nil)
           (= (:name shape-map) "line") (dom/line shape-attrs nil)
           (= (:name shape-map) "path") (dom/path shape-attrs nil))))))
