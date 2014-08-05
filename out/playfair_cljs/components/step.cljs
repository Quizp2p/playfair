(ns playfair-cljs.components.step
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [playfair-cljs.debug :as debug]
            [playfair-cljs.components.canvas :as canvas]
            [playfair-cljs.appstate :as state]
            [playfair-cljs.shapes :as shapes]))

(defn render-step [step-num owner]
  (reify om/IRender
    (render [this]
            (let [canvas-state (canvas/get-canvas-state @state/app-state (+ step-num 1))]
              (dom/div #js {:className "stepContainer"}
                    (dom/p #js {:className "stepText"} (last (:text canvas-state)))
                    (apply dom/svg #js {:width 100 :height 100 :viewBox (str "0 0 " (shapes/canvas-size 0) " " (shapes/canvas-size 1))  :className "stepSVG"}
                           (om/build-all canvas/render-canvas (:state canvas-state))))))))


