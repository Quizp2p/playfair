(ns playfair-cljs.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [playfair-cljs.components.canvas :as canvas]
            [playfair-cljs.appstate :as state]
            [playfair-cljs.components.step :as step]
            [playfair-cljs.components.commands :as commands]))

(enable-console-print!)


(defn render-app [app-state owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil
              (dom/div #js {:className "screens"}
                       (dom/svg #js {:width 100 :height 100})
                       (dom/button #js {:id "screenButton"} "+"))
              (dom/div #js {:className "steps"}
                     (apply dom/div nil (om/build-all step/render-step (vec (range (count (:steps app-state)))))))
              (dom/div #js {:className "canvas"}
                    (dom/div #js {:id "mainCanvas"}
                     (apply dom/svg #js {:width (canvas/canvas-size 0) :height (canvas/canvas-size 1)} (om/build-all canvas/render-canvas (vec (dissoc (canvas/get-canvas-state app-state) :text))))))
              (dom/div #js {:className "commands"}
                       (apply dom/ul nil (om/build-all commands/render-commands (:commands app-state))))))))




(om/root
  render-app
  state/app-state
  {:target (. js/document (getElementById "app"))})







