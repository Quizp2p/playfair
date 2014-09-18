(ns playfair-cljs.components.data
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [playfair-cljs.debug :as debug]))

(defn render-data [[key-name value] owner]
  (reify
    om/IRender
    (render [this]
            (dom/tr #js {:className "dataRow"}
                (dom/td #js {:className "variable"} (name key-name))
                (dom/td #js {:className "right"} (pr-str value))))))

