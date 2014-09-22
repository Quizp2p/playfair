(ns playfair-cljs.asCompiler
  (:require [playfair-cljs.csCompiler :as csc]))

(def cs {:rect [] :circle []
         :path [] :line []})

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

(defn check-for-step [loop-ind canvas-state]
  (let [cs-with-count (get-cs-count canvas-state)]
    (fn [{:keys [step-name] :as step}]
      (reduce (fn [alt-step l-var]
                  (if (l-var alt-step)
                      (let [[s-name s-ind] (l-var alt-step)]
                                      (if (<= (s-name cs-with-count) s-ind)
                                        (assoc alt-step l-var [s-name (+ s-ind loop-ind)])
                                        alt-step)) alt-step)) step (step-name shape-lookup-vars)))))

(defn unwrap-for-step [{:keys [times for-steps]} canvas-state]
  (let [expanded-f-steps (vec (repeat times for-steps))]
    (vec (map-indexed (fn [loop-ind for-loop]
                   (vec (map (check-for-step loop-ind canvas-state) for-loop))) expanded-f-steps))))

(def step-func-dictionary {:draw [csc/make-draw-cs csc/draw-text]
                           :scale [csc/make-scale-cs csc/scale-text]
                           :rotate [csc/make-rotate-cs csc/rotate-text]
                           :move [csc/make-move-cs csc/move-text]
                           :for [nil csc/for-text]
                           :path-start [csc/start-path-cs csc/path-start-text]
                           :path-extend [csc/extend-path-cs csc/path-extend-text]})

(defn add-active-for [for-steps pre-for-index check-index]
         (loop [cs-steps for-steps,
                index pre-for-index,
                processed-cs-steps [],
                active-section 0]
           (if cs-steps
             (let [{:keys [inner-cs-steps inner-index active-section]} (reduce (fn [{:keys [inner-index inner-cs-steps active-section]} cs-step]
                                                                           {:inner-index (inc inner-index)
                                                                             :inner-cs-steps (conj inner-cs-steps (conj cs-step (check-index inner-index)))
                                                                             :active-section (if (check-index inner-index)
                                                                                                 (.floor js/Math (/ (- inner-index pre-for-index) (count (first for-steps))))
                                                                                                 active-section)})
                                                                         {:inner-index index :inner-cs-steps [] :active-section active-section}
                                                                         (first cs-steps))]
             (recur (next cs-steps) inner-index (conj processed-cs-steps inner-cs-steps) active-section))
             {:processed-cs-steps (processed-cs-steps active-section) :index index :final-step (last (last processed-cs-steps))})))




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

(defn for-state-maker [exp-for-steps data cs]
  (loop [cs cs
         loops exp-for-steps
         state []
         loop-index 0]
    (if loops
      (let [inner-l-s (reduce (fn [accum {:keys [step-name] :as step}]
                                (let [[state-maker text-maker] (step-name step-func-dictionary)
                                      data-checked-step (check-data step data loop-index)
                                      last-cs (if (= (count accum) 0) cs ((last accum) 0))]
                                  (conj accum [(state-maker last-cs data-checked-step) (text-maker step)]))) [] (first loops))]
        (recur ((last inner-l-s) 0) (next loops) (conj state inner-l-s) (inc loop-index)))
      state)))

(defn steps-to-app-state [{:keys [steps active-steps data]}]
  (let [func-lookup step-func-dictionary
        active-step-range (range (active-steps 0) (inc (active-steps 1)))]
    (:app-state (reduce (fn [{:keys [app-state canvas-state index]} {:keys [step-name] :as step}]
                            (let [[state-maker text-maker] (step-name func-lookup)
                                  check-index (fn [dex] (some (fn [x] (= dex x)) active-step-range))]
                                  (if (= step-name :for)
                                      (let [checked-step (check-data step data)
                                            unwrap-steps (unwrap-for-step checked-step canvas-state)
                                            state (for-state-maker unwrap-steps data canvas-state)
                                            {:keys [processed-cs-steps index final-step]} (add-active-for state index check-index)]
                                         {:app-state (conj app-state {:name :for :steps processed-cs-steps :text (text-maker step) :final-step final-step})
                                          :canvas-state (first final-step)
                                          :index (inc index)})
                                      (let [state (state-maker canvas-state (check-data step data)) ]
                                       {:app-state (conj app-state [state (text-maker step) (check-index index)])
                                       :canvas-state state
                                       :index (inc index)}) ))) {:app-state [] :canvas-state cs :index 0} steps))))


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
  (-> app-state steps-to-app-state last get-last-state))

(defn make-renderable [{:keys [rect circle line path]}]
  (vec (flatten (conj [] rect circle line path))))
