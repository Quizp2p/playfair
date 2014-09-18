(ns playfair-cljs.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events]
            [cljs.core.async :refer [put! chan <!]]
            [playfair-cljs.components.canvas :as canvas]
            [playfair-cljs.components.keypress :as keylistener]
            [playfair-cljs.appstate :as state]
            [playfair-cljs.components.step :as step]
            [playfair-cljs.components.commands :as commands]
            [playfair-cljs.shapes :as shapes]
            [playfair-cljs.debug :as debug]
            [playfair-cljs.math :as bmath]
            [playfair-cljs.components.data :as data]
            [playfair-cljs.components.canvasEvents :as ca]
            [playfair-cljs.general :as g]))

(enable-console-print!)



(defn add-shape-events [r-shapes]
  (map (fn [shape]
         (assoc-in shape [:visual-attrs :onMouseDown] (fn [e]
                                                        ;;(.log js/console e)
                                                        nil))) r-shapes))




(defn render-app [steps owner]
  ;;(debug/log (:active-steps steps))
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
                     (apply dom/table nil (om/build-all data/render-data (:data steps)))
                     (dom/p #js {:className "center"} "Steps")
                     (apply dom/div nil (om/build-all step/render-step app-state)))
              (dom/div #js {:className "canvas"}
                    (dom/div #js {:id "mainCanvas"}
                     (dom/p #js {:className "center"} (shapes/get-last-state (last app-state) :text))
                       (let [last-state (-> app-state last shapes/get-last-state)
                             second-last-state (-> app-state g/safe-pop last shapes/get-last-state)]
                         (apply dom/svg #js {:onMouseMove #(put! shapes/canvas-chan {:e-type :mouseMove, :e (.-nativeEvent %), :reciever :canvas, :second-last-state second-last-state})
                                             :onMouseDown #(put! shapes/canvas-chan {:e-type :mouseDown, :e (.-nativeEvent %), :reciever :canvas, :second-last-state second-last-state})
                                             :onMouseUp #(put! shapes/canvas-chan {:e-type :mouseUp, :e (.-nativeEvent %), :reciever :canvas, :second-last-state second-last-state})
                                             :width (shapes/canvas-size 0)
                                             :height (shapes/canvas-size 1)
                                             :id "bigCanvas"}
                                (om/build-all canvas/render-canvas (-> last-state (shapes/check-nodes (:key-state steps))))))))
              (dom/div #js {:className "commands"}
                      (apply dom/ul nil
                             (om/build-all commands/render-commands (map (fn [key-vec] (conj key-vec (:key-state steps))) commands/command-list))))
               (dom/div nil (om/build keylistener/key-listener-component steps))
               (dom/div nil (om/build ca/canvas-events steps)))))))




(om/root
  render-app
  state/app-state
  {:target (. js/document (getElementById "app"))
   :shared {:keychan keylistener/key-chan
            :canchan shapes/canvas-chan}})

(def big-c-pos
  (let [rect (.getBoundingClientRect (.getElementById js/document "bigCanvas"))]
    [(.-left rect) (.-top rect)]))




(events/listen js/document "keydown" #(put! keylistener/key-chan [:keydown %]))
(events/listen js/document "keyup" #(put! keylistener/key-chan  [:keyup %] ))
