(ns playfair-cljs.components.commands
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn render-commands [{:keys [commandName keypress className]} owner]
  (reify
    om/IRender
    (render [this]
            (dom/li #js {:className className :id commandName} (str commandName " - " keypress)))))
