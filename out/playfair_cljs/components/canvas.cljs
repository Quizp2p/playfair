(ns playfair-cljs.components.canvas
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [playfair-cljs.shapeData :as s-data]
            [playfair-cljs.csCompiler :as csc]
            [playfair-cljs.debug :as debug]
            [playfair-cljs.shapeDataConversion :as sdc]))


;;We have pre stream [steps]
;;Stream: {:rect [] ....}
;;Out stream: [{:name :position-attrs} {...} {...} ...]
;;These 3 things should have different names.
(defn make-x [position-attrs]
  (let [[p-type x y] (position-attrs 0)
        vis-attrs s-data/guide-shape-visual
        size 5
        m-line (fn [flip]
                 {:shape-name :line
                  :position-attrs {:first-point {:x (apply (if flip - +) [x size]) :y (- y size)}
                                   :middle-point {:x x :y y}
                                   :last-point {:x (apply (if flip + -) [x size]) :y (+ y size)}}
                  :visual-attrs vis-attrs})]
    [(m-line nil) (m-line true)]))


(defn render-canvas [{:keys [shape-name position-attrs visual-attrs] :as shape} owner]
  (let [shape-attrs (clj->js (conj (sdc/nodes-to-attrs shape-name position-attrs) visual-attrs))]
    (reify om/IRender
      (render [this]
           (if (and (= shape-name :path) (= (count position-attrs) 1))
             (apply dom/g nil (om/build-all render-canvas (make-x position-attrs)))
             (shape-name {:rect (dom/rect shape-attrs nil)
                        :circle (dom/circle shape-attrs nil)
                        :line (dom/line shape-attrs nil)
                        :path (dom/path shape-attrs nil)}))))))






