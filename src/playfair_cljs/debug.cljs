(ns playfair-cljs.debug)

(defn log [str]
  (.log js/console (pr-str str)))
