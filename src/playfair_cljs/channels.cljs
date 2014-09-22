(ns playfair-cljs.channels
  (:require
   [cljs.core.async :refer [put! chan <!]]))

(def canvas-chan (chan))

