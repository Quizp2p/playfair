(ns playfair-cljs.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [playfair-cljs.components.canvas :as canvas]
            [playfair-cljs.appstate :as state]
            [playfair-cljs.components.step :as step]
            [playfair-cljs.components.commands :as commands]
            [playfair-cljs.shapes :as shapes]
            [playfair-cljs.debug :as debug]))

(enable-console-print!)


(defn get-last-state
  ([ls] (get-last-state ls false))
  ([ls text?]
   (if ls
     (let [index (if text? 1 0)]
     (if (map? ls)
      ((:final-step ls) index)
      (ls index)))
      (if text?
        ""
        shapes/cs))))

(defn render-data [[key-name value] owner]
  (reify
    om/IRender
    (render [this]
            (dom/tr #js {:className "dataRow"}
                (dom/td #js {:className "variable"} (name key-name))
                (dom/td #js {:className "right"} (pr-str value))))))

(defn render-app [steps owner]
  (reify
    om/IRender
    (render [this]
            (let [app-state (shapes/steps-to-app-state steps)]
            (dom/div nil
              (dom/div #js {:className "screens"}
                       (dom/svg #js {:width 100 :height 100})
                       (dom/button #js {:id "screenButton"} "+"))
              (dom/div #js {:className "steps"}
                     (dom/p #js {:className "center"} "Data")
                     (apply dom/table nil (om/build-all render-data (:data steps)))
                     (dom/p #js {:className "center"} "Steps")
                     (apply dom/div nil (om/build-all step/render-step app-state)))
              (dom/div #js {:className "canvas"}
                    (dom/div #js {:id "mainCanvas"}
                     (dom/p #js {:className "center"} (get-last-state (last app-state) :text))
                     (apply dom/svg #js {:width (shapes/canvas-size 0) :height (shapes/canvas-size 1)}
                            (om/build-all canvas/render-canvas (shapes/make-renderable (get-last-state (last app-state)))))))
              (dom/div #js {:className "commands"}
                      (apply dom/ul nil
                             (om/build-all commands/render-commands (:commands steps)))))))))




(om/root
  render-app
  state/app-state
  {:target (. js/document (getElementById "app"))})
