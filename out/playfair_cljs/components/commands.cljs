(ns playfair-cljs.components.commands
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [playfair-cljs.appstate :as state]
            [playfair-cljs.debug :as debug]))

(def command-list
  [["Draw"
   [["line" "x"]
   ["path" "a"]
   ["rect" "r"]
   ["circle" "c"]
   ;;["magnet" "u"]
   ;;["picture" "p"]
   ]]

   ["Adjust"
    [["move" "v"]
     ["scale" "s"]
     ["rotate" "e" ]
     ;;["duplicate" "d"]
    ]]

   ["Flow"
    [["loop" "l"]
   ;;["if" "i"]
   ;;["guide" "g"]
   ;;["clip" "k"]
    ]]

   ])



(defn render-command [[commandName keypress key-state] owner]
  (reify
    om/IRender
    (render [this]
            (dom/li #js {:className (if (= (name key-state) commandName)
                                        "keypress"
                                        "regular") :id commandName} (str commandName " - " keypress)))))

(defn render-command-section [[section-name commands key-state] owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil
             (dom/p #js {:className "center bold"} section-name)
             (apply dom/ul nil (om/build-all render-command (map (fn [key-vec] (conj key-vec key-state)) commands)))))))


