(ns playfair-cljs.general
  (:require [playfair-cljs.debug :as debug]))

(defn multi-assoc [reciever & assoc-pairs]
  (reduce (fn [rec [look-up value]]
            (assoc rec look-up value)) reciever assoc-pairs))






(defn multi-assoc-in [reciever & assoc-pairs]
  (reduce (fn [rec [look-up value]]
            (assoc-in rec look-up value)) reciever assoc-pairs))


(defn dissoc-vec [vect index]
            (if (= (- (count vect) 1) index)
              (pop vect)
              (vec (concat (subvec vect 0 index) (subvec vect (+ index 1) (count vect))))))

(defn safe-pop [v]
   (if (empty? v)
     []
     (pop v)))

(defn conj-in [x lookup-vec added-val]
  (assoc-in x lookup-vec (conj (get-in x lookup-vec)
                               added-val)))
