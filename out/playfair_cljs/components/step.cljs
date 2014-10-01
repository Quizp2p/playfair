(ns playfair-cljs.components.step
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [playfair-cljs.debug :as debug]
            [playfair-cljs.components.canvas :as canvas]
            [playfair-cljs.appstate :as state]
            [playfair-cljs.asCompiler :as asc]
            [playfair-cljs.shapeData :as s-data]))

(defn render-step [step owner]
  (reify om/IRender
    (render [this]
                (if (map? step)
                      (let [{:keys [steps text active?]} step]
                        (dom/div #js {:className "largeContainer"}
                          (dom/p #js {:className (if active? "activeSpecialText" "specialText") } text)
                          (apply dom/div nil (om/build-all render-step steps))))
                      (let [[cs text active?] step]
                       (dom/div #js {:className (if active? "activeStepContainer" "stepContainer") }
                        (dom/p #js {:className "stepText"} text)
                        (apply dom/svg #js {:width (/ (s-data/canvas-size 0) 6) :height (/ (s-data/canvas-size 1) 6) :viewBox (str "0 0 " (s-data/canvas-size 0) " " (s-data/canvas-size 1))  :className "stepSVG"}
                                 (om/build-all canvas/render-canvas (asc/make-renderable cs)))))))))


;; Couple ifs.
