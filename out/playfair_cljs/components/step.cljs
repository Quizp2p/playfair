(ns playfair-cljs.components.step
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [playfair-cljs.debug :as debug]
            [playfair-cljs.components.canvas :as canvas]
            [playfair-cljs.appstate :as state]
            [playfair-cljs.shapes :as shapes]))

(defn render-step [step owner]
  (reify om/IRender
    (render [this]
                (if (map? step)
                      (let [{:keys [steps text]} step]
                        (dom/div #js {:className "largeContainer"}
                          (dom/p #js {:className "specialText"} text)
                          (apply dom/div nil (om/build-all render-step steps))))
                      (let [[cs text active?] step]
                       (dom/div #js {:className (if active? "activeStepContainer" "stepContainer") }
                        (dom/p #js {:className "stepText"} text)
                        (apply dom/svg #js {:width 100 :height 100 :viewBox (str "0 0 " (shapes/canvas-size 0) " " (shapes/canvas-size 1))  :className "stepSVG"}
                                 (om/build-all canvas/render-canvas (shapes/make-renderable cs)))))))))


;; Couple ifs.
