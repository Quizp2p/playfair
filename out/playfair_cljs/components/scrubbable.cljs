(ns playfair-cljs.components.scrubbable
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [playfair-cljs.channels :as channels]
            [playfair-cljs.appstate :as state]
            [cljs.core.async :refer [put! chan <!]]
            [playfair-cljs.debug :as debug]
            [playfair-cljs.asCompiler :as asc]
            [playfair-cljs.csCompiler :as csc]))


(defn global-event-handler [app-state {:keys [e-type e] :as e-data}]

  (cond
     (= e-type :mouseDown) (let [[a-s1 a-s2] (:active-steps @state/app-state)]
                             (swap! state/gui-state (fn [gui-state] (assoc gui-state :scrub-click-pos [(.-clientX e) (.-clientY e)]
                                                                                   :scrub-step-key (:step-key e-data)
                                                                                   :scrub-start-val (get-in @state/app-state (if (number? a-s2)
                                                                                                                               [:steps a-s2 (:step-key e-data)]
                                                                                                                               [:steps (a-s2 0) :for-steps (a-s2 2) (:step-key e-data)]))))))
     (and (= e-type :mouseMove) (:scrub-click-pos @state/gui-state))
                                     (om/transact! app-state (fn [{:keys [steps active-steps] :as app-state}]
                                                                 (let [{:keys [scrub-click-pos scrub-step-key scrub-start-val]} @state/gui-state
                                                                       sensitivity 1
                                                                       [as-1 as-2] active-steps
                                                                       scrubbed-step (get-in steps (if (number? as-2) [as-2] [(as-2 0) :for-steps (as-2 2)]))
                                                                       decimal (cond
                                                                                (= (:step-name scrubbed-step) :rotate) .01
                                                                                (= (:step-name scrubbed-step) :scale) .01
                                                                                :else 1)]
                                                                   (assoc-in app-state (if (number? (active-steps 1))
                                                                                                    [:steps as-2 scrub-step-key]
                                                                                                    [:steps (as-2 0) :for-steps (as-2 2) scrub-step-key])  (+ scrub-start-val (* (quot (- (.-clientX e) (scrub-click-pos 0)) sensitivity) decimal)  )))))
     (and (= e-type :mouseUp) (:scrub-click-pos @state/gui-state)) (swap! state/gui-state (fn [gui-state] (assoc gui-state :scrub-click-pos nil)))))


(defn global-events [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [keychan (om/get-shared owner :globalchan)]
        (go
          (while true
            (let [[v ch] (alts! [keychan])]
              (when (= ch keychan)
                (do (global-event-handler app v))))))))

    om/IRender
    (render [this]
      (dom/div nil ""))))

(defn make-span [{:keys [value step-key]}]
  (dom/span #js {:className "scrubber" :onMouseDown #(put! channels/global-chan {:e-type :mouseDown, :e (.-nativeEvent %), :reciever :global, :step-key step-key})
                                   :onMouseUp #(put! channels/global-chan {:e-type :mouseUp, :e (.-nativeEvent %), :reciever :global})} value))

(defn make-scrub-text [step]
  (reduce (fn [accum s]
            (if (map? s)
              (conj accum (make-span s))
              (conj accum (dom/span nil s)))) [] (csc/get-text (assoc step :scrub? true))))


(defn get-scrub-step [[a-s1 a-s2] steps]
  (if (number? a-s2)
    (steps a-s2)
    ((:for-steps (steps (a-s2 0))) (a-s2 2))))

(defn make-scrub [{:keys [steps active-steps] :as as} owner]
  (reify om/IRender
      (render [this]
              (if (> (count steps) 0)
                (apply dom/p #js {:className "center"} (make-scrub-text (get-scrub-step active-steps steps)))
                (dom/p #js {:className "center"} "Welcome to playfair, get drawing!")))))





