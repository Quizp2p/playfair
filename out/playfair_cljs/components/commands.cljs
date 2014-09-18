(ns playfair-cljs.components.commands
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [playfair-cljs.appstate :as state]
            [playfair-cljs.debug :as debug]))

(def command-list
  [["line" "x"]
   ["path" "a"]
   ["rect" "r"]
   ["circle" "c"]
   ["magnet" "u"]
   ["picture" "p"]
   ["move" "v"]
   ["scale" "s"]
   ["rotate" "e" ]
   ["duplicate" "d"]
   ["loop" "l"]
   ["if" "i"]
   ["guide" "g"]
   ["clip" "k"]])

(defn render-commands [[commandName keypress key-state] owner]
  (reify
    om/IRender
    (render [this]
            (dom/li #js {:className (if (= (name key-state) commandName)
                                        "keypress"
                                        "regular") :id commandName} (str commandName " - " keypress)))))
