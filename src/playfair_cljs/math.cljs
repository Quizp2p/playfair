(ns playfair-cljs.math
  (:require [playfair-cljs.debug :as debug]))


(defn sqrt [x]
  (.sqrt js/Math x))

(defn pow [base exp]
  (.pow js/Math base exp))

(defn sin [rad]
  (.sin js/Math rad))

(defn round [numb dec-places]
  (/ (.round js/Math (* numb (pow 10 dec-places)))  (pow 10 dec-places)))


(defn cos [rad]
  (.cos js/Math rad))

(defn acos [cos-val]
  (.acos js/Math cos-val))

(defn asin [sin-val]
  (.asin js/Math sin-val))

(defn atan [tan-val]
  (.atan js/Math tan-val))

(def PI (.-PI js/Math))

(defn distance-formula [[x1 y1] [x2 y2]]
  (sqrt (+ (pow (- x2 x1) 2) (pow (- y2 y1) 2))))

(defn midpoint-formula [[x1 y1] [x2 y2]]
  [(/ (+ x1 x2) 2) (/ (+ y1 y2) 2)])

(defn map-midpoint-formula [p1 p2]
  {:x (/ (+ (:x p1) (:x p2)) 2) :y (/ (+ (:y p1) (:y p2)) 2)})


(defn rad->-deg [rad]
  (* 57.2957795 rad))

(defn abs [numb]
  (if (< numb 0)
    (- numb)
    numb))
