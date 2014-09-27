(ns playfair-cljs.asCompiler
  (:require [playfair-cljs.csCompiler :as csc]
            [playfair-cljs.debug :as debug]
            [playfair-cljs.shapeData :as s-data]))

(def cs {:rect [] :circle []
         :path [] :line []})


;;TO DO
;;write active checker
;;rewrite app state func

(defn count-all-steps [steps]
 (reduce (fn [accum {:keys [step-name] :as step}]
           (if (= step-name :for)
               (+ accum (* (count (:for-steps step)) (:times step)) )
               (+ accum 1))) 0 steps))


(def shape-lookup-vars {:draw [:from-shape :to-shape]
                        :scale [:shape-lookup]
                        :move [:shape-lookup :to-shape]
                        :rotate [:shape-lookup]
                        :path-start [:x :y]
                        :path-extend [:x :y]})

(defn get-cs-count [cs]
  (reduce (fn [accum [s-key s-vec]]
          (assoc accum s-key (count s-vec))) {} cs))


(defn check-for-step [loop-ind s-count f-s-count]
  (fn [{:keys [step-name] :as step}]
    (reduce (fn [step lookup-var]
              (if (lookup-var step)
                (let [[s-name s-ind] (lookup-var step)]
                  (if (<= (s-name s-count) s-ind)
                              (assoc step lookup-var [s-name (+ s-ind (* loop-ind (s-name f-s-count)))])
                              step))
                step)) step (step-name shape-lookup-vars))))

(defn get-shape-count [steps]
  (reduce (fn [s-count {:keys [shape]}]
            (if shape
              (update-in s-count [shape] inc)
              s-count)) {:rect 0 :line 0 :path 0 :circle 0} steps))


(def test-for-step {:step-name :for, :times 3, :for-steps [{:step-name :draw, :shape :line, :x 317, :y 402, :to-node :middle-point, :to-shape [:line 0]}
                                                          {:step-name :draw, :shape :line, :x 382, :y 240, :to-node :middle-point, :to-shape [:line 1]}
                                                          {:step-name :scale, :shape-lookup [:line 0], :node :last-point, :scale-val 0.8988448264715291}]})



(defn unwrap-for-step [{:keys [times for-steps]} shape-count]
  (let [expanded-f-steps (vec (repeat times for-steps))]
    (vec (reduce concat (map-indexed (fn [loop-ind for-loop]
                           (map (check-for-step loop-ind shape-count (get-shape-count for-steps)) for-loop)) expanded-f-steps)))))


(def data-variables {:rotate [:rotate-val]
                     :draw [:x :y :diffX :diffY]
                     :scale [:scale-val]
                     :for [:times]
                     :move [:diffX :diffY]
                     :path-start [:x :y]
                     :path-extend [:x :y]})

(defn check-data
 ([step-map data] (check-data step-map data 0))
 ([step-map data loop-index]
  (let [data-vars ((:step-name step-map) data-variables)]
     (reduce (fn [new-step-map [step-key step-val]]
               (assoc new-step-map step-key (if (and (some (fn [d-val] (= step-key d-val)) data-vars) (keyword? step-val))
                                              (if (vector? (step-val data))
                                                ((step-val data) loop-index)
                                                (step-val data))
                                              step-val))) {} step-map))))



(defn check-active [active-steps ind]
    (if (or (nil? active-steps) (vector? (active-steps 0)))
      nil
      (let [[s1 s2] active-steps]
        (some #(= % ind) (range s1 (+ s2 1))))))


;;Steps and app state naming is all backwards
(defn check-for-data [u-w-steps data loop-size]
  (map-indexed (fn [i step] (check-data step data (quot i loop-size))) u-w-steps))

(defn get-for-cs [old-cs steps [a-s1 a-s2] ind data]
 (let [{:keys [for-steps times] :as f-step} (steps ind)
       get-loop-ind #(+ (* (% 1) (count for-steps)) (% 2))
       un-w-steps (check-for-data (unwrap-for-step (check-data f-step data) (get-shape-count (subvec steps 0 ind)))
                                  data
                                  (count for-steps))
       for-cs (app-state-to-steps {:steps un-w-steps :active-steps (if (number? a-s1) nil [(get-loop-ind a-s1) (get-loop-ind a-s2)]) :data data} old-cs)]
   {:name :for
    :steps (if (number? a-s2)  (subvec for-cs 0 (count for-steps))
                               (subvec for-cs (* (a-s2 1) (count for-steps)) (* (+ (a-s2 1) 1) (count for-steps))))
    :text (csc/get-text f-step)
    :final-step (last for-cs) :active? (check-active [a-s1 a-s2] ind) :all-active? nil}))


(defn app-state-to-steps
  ([as] (app-state-to-steps as cs))
  ([{:keys [steps active-steps data]} cs]
    (loop [l-steps steps
           canvas-state cs
           app-state []
           ind 0]
      (if (seq l-steps)
        (if (= (:step-name (first l-steps)) :for)
          (let [for-cs (get-for-cs canvas-state steps active-steps ind data)]
            (recur (next l-steps) ((:final-step for-cs) 0) (conj app-state for-cs) (inc ind)))
          (let [new-cs ((csc/get-cs-fn (check-data (first l-steps) data)) canvas-state)]
            (recur (next l-steps) new-cs (conj app-state [new-cs
                                                        (csc/get-text (first l-steps))
                                                        (check-active active-steps ind)]) (inc ind))))
        app-state))))


(defn get-last-state
  ([ls] (get-last-state ls false))
  ([ls text?]
   (if ls
     (let [index (if text? 1 0)]
     (if (map? ls)
      ((:final-step ls) index)
      (ls index)))
      (if text?
        ""
        cs))))

(defn get-last-cs [app-state]
  (-> app-state app-state-to-steps last get-last-state))

(defn make-renderable [{:keys [rect circle line path]}]
  (vec (flatten (conj [] rect circle line path))))



