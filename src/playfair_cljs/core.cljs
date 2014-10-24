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
            [playfair-cljs.asCompiler :as asc]
            [playfair-cljs.debug :as debug]
            [playfair-cljs.math :as bmath]
            [playfair-cljs.components.data :as data]
            [playfair-cljs.components.canvasEvents :as ca]
            [playfair-cljs.general :as g]
            [playfair-cljs.shapeData :as s-data]
            [playfair-cljs.csCompiler :as csc]
            [playfair-cljs.channels :as channels]
            [playfair-cljs.components.scrubbable :as scrub]))

(enable-console-print!)



(defn add-shape-events [r-shapes]
  (map (fn [shape]
         (assoc-in shape [:visual-attrs :onMouseDown] (fn [e]
                                                        nil))) r-shapes))


(defn render-app [app-state owner]
  (reify
    om/IRender
    (render [this]
            (let [steps (asc/app-state-to-steps app-state)]
            (dom/div #js {:className "proper-height"}

                     ;;(dom/div #js {:className "container"}
                     ;;  (dom/svg #js {:width (/ (s-data/canvas-size 0) 6) :height (/ (s-data/canvas-size 1) 6)})
                     ;;  (dom/button #js {:id "screenButton"} "+"))

            (dom/div #js {:className "container-around"}

             (dom/div #js {:className "left-panel"}
                    ;; (dom/p #js {:className "center"} "Data")
                    ;; (apply dom/table nil (om/build-all data/render-data (:data app-state)))
                     (dom/p #js {:className "center"} "Steps")
                     (apply dom/div #js {:className "steps"} (om/build-all step/render-step steps)))
              (dom/div nil
                    (dom/div #js {:id "mainCanvas"}
                     (om/build scrub/make-scrub app-state)
                       (let [last-state (-> steps last asc/get-last-state)
                             second-last-state (-> steps g/safe-pop last asc/get-last-state)]
                         (apply dom/svg #js {:onMouseMove #(put! channels/canvas-chan {:e-type :mouseMove, :e (.-nativeEvent %), :reciever :canvas, :second-last-state second-last-state})
                                             :onMouseDown #(put! channels/canvas-chan {:e-type :mouseDown, :e (.-nativeEvent %), :reciever :canvas, :second-last-state second-last-state})
                                             :onMouseUp #(put! channels/canvas-chan {:e-type :mouseUp, :e (.-nativeEvent %), :reciever :canvas, :second-last-state second-last-state})
                                             :width (s-data/canvas-size 0)
                                             :height (s-data/canvas-size 1)
                                             :id "bigCanvas"}
                                (om/build-all canvas/render-canvas (-> last-state (csc/check-nodes (:key-state app-state))))))))
              (dom/div nil
                      (apply dom/div nil
                             (om/build-all commands/render-command-section (map (fn [key-vec] (conj key-vec (:key-state app-state))) commands/command-list)))))

               (dom/div nil (om/build keylistener/key-listener-component app-state))
               (dom/div nil (om/build ca/canvas-events app-state))
               (dom/div nil (om/build scrub/global-events app-state)))))))




(om/root
  render-app
  state/app-state
  {:target (. js/document (getElementById "app"))
   :shared {:keychan keylistener/key-chan
            :canchan channels/canvas-chan
            :globalchan channels/global-chan}})

(def big-c-pos
  (let [rect (.getBoundingClientRect (.getElementById js/document "bigCanvas"))]
    [(.-left rect) (.-top rect)]))



;; e.preventDefault();
(events/listen js/document "keydown" (fn [e]
                                       (do
                                         (.preventDefault e)
                                         (put! keylistener/key-chan [:keydown e]))))

(events/listen js/document "keyup" (fn [e]
                                       (do
                                         (.preventDefault e)
                                         (put! keylistener/key-chan [:keyup e]))))
(events/listen js/document "mousemove" #(put! channels/global-chan  {:e-type :mouseMove, :e %}))
(events/listen js/document "mouseup" #(put! channels/global-chan  {:e-type :mouseUp, :e %}))
