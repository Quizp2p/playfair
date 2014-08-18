(ns playfair-cljs.components.canvas
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [playfair-cljs.shapes :as shapes]
            [playfair-cljs.debug :as debug]))


(defn create-node-rest [{:keys [position-attrs active]}]
   (:circle (reduce (fn [accum [node-name node-pos]]
              (let [handle-node-map (shapes/attrs-to-nodes :circle {:cx (:x node-pos) :cy (:y node-pos) :r 3})
                    center-node (:center-node handle-node-map)
                    right-node (:right-node handle-node-map)]
                    ((:func (shapes/make-draw :circle [(:x node-pos) (:y node-pos)] [2 0] (if active
                                                                                                    {:className "shapeGuide" :fill "blue" :stroke "blue"}
                                                                                                    {:className "shapeGuide" :fill "#ffb440" :stroke "#ffb440"}) {:centered true})) accum))) {:circle [], :text []} position-attrs)))
;;This will break.
(defn create-node-path [[shape-name shape-map]]
         (let [node-points (:position-attrs shape-map)]
               (if (= (count node-points) 1)
                    {}
                    (reduce (fn [accum path-point]
                              (let [attrs {:cx (:x path-point) :cy (:y path-point) :r 3}
                                    [vec1 vec2] (shapes/attrs-to-vectors :circle attrs)]
                                (dissoc ((:func (shapes/make-draw :circle vec1 vec2 (if (:active shape-map)
                                                                         {:fill "blue" :stroke "blue"}
                                                                         {:fill "#ffb440" :stroke "#ffb440"})) accum)) :text))) {:circle [], :text []} node-points))))
(defn create-node [shape-map]
  (if (= (keyword (:name shape-map)) :path)
    (create-node-path shape-map)
    (create-node-rest shape-map)))


(defn create-nodes [canvas-state]
  (reduce (fn [accum shape-map]
              (conj accum shape-map (create-node shape-map))) [] canvas-state))


;;We have pre stream [steps]
;;Stream: {:rect [] ....}
;;Out stream: [{:name :position-attrs} {...} {...} ...]
;;These 3 things should have different names.


(defn render-canvas [{:keys [shape-name position-attrs visual-attrs] :as shape} owner]
  (let [shape-attrs (clj->js (conj (shapes/nodes-to-attrs shape-name position-attrs) visual-attrs))]
    (reify om/IRender
      (render [this]
           (shape-name {:rect (dom/rect shape-attrs nil)
                        :circle (dom/circle shape-attrs nil)
                        :line (dom/line shape-attrs nil)
                        :path (dom/path shape-attrs nil)})))))






