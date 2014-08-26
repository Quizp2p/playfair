(ns playfair-cljs.shapes
  (:require [playfair-cljs.debug :as debug]
            [playfair-cljs.math :as math]
            [cljs.reader :as reader]))

(def canvas-size [500 500])

(defn get-pos-key [shape-name]
   (shape-name {:rect [:x :y]
                :path [:x :y]
                :line [:x1 :y1 :x2 :y2]
                :circle [:cx :cy]}) )

(def rect-nodes [:bottom-right-node
                 :middle-right-node
                 :top-right-node
                 :bottom-center-node
                 :middle-center-node
                 :top-center-node
                 :bottom-left-node
                 :middle-left-node
                 :top-left-node])

(def circle-nodes [:top-node
                   :center-node
                   :bottom-node
                   :right-node
                   :left-node])

(def line-nodes [:first-point
                 :middle-point
                 :last-point])

(defn check-snap [thing]
  (or (= thing :canvas) (if (and (vector? thing) (> (count thing) 0)) (some (fn [x] (= x (thing 0))) [:rect :path :line :circle]) false)))


(defn make-renderable [{:keys [rect circle line path]}]
  (vec (flatten (conj [] rect circle line path))) )

(defn rotate-point-around-point [[origin-x origin-y] [x y] rotate-val]
  (let [rotate-angle (* rotate-val (* 2 math/PI))
        r (math/distance-formula [origin-x origin-y] [x y])
        current-angle (if (> y origin-y) (math/acos (/ (- x origin-x) r))
                        (- (* 2 math/PI) (math/acos (/ (- x origin-x) r))))
        new-angle (+ rotate-angle current-angle)]
    (if (and (= origin-x x ) (= origin-y y))
      [x y]
      [(+ origin-x (* r (math/cos new-angle))) (+ origin-y (* r (math/sin new-angle)))])))


(defn get-rect-node-points [{:keys [x y width height]}]
     {:bottom-right-node {:x (+ x width), :y (+ y height)},
      :middle-right-node {:x (+ x width), :y (+ y (/ height 2))},
      :top-right-node {:x (+ x width), :y y},
      :bottom-center-node {:x (+ x (/ width 2)), :y (+ y height)},
      :middle-center-node {:x (+ x (/ width 2)), :y (+ y (/ height 2))},
      :top-center-node {:x (+ x (/ width 2)), :y y},
      :bottom-left-node {:x x, :y (+ y height)},
      :middle-left-node {:x x, :y (+ y (/ height 2))},
      :top-left-node {:x x, :y y}})

(defn get-line-node-points [{:keys [x1 y1 x2 y2]}]
  {:first-point {:x x1, :y y1},
   :middle-point {:x (/ (+ x1 x2) 2), :y (/ (+ y1 y2) 2)},
   :last-point {:x x2, :y y2}})

(defn get-circle-node-points [{:keys [cx cy r]}]
  {:top-node {:x cx, :y (- cy r)},
   :center-node {:x cx, :y cy},
   :bottom-node {:x cx, :y (+ cy r)},
   :right-node {:x (+ cx r), :y cy},
   :left-node {:x (- cx r), :y cy}})


(defn attrs-to-nodes [shape-key pos-attrs]
    ;;(debug/log shape-key)
    (shape-key {:rect (get-rect-node-points pos-attrs),
                :circle (get-circle-node-points pos-attrs),
                :line (get-line-node-points pos-attrs)}))

(defn nodes-to-attrs [shape-key node-map]
  (cond
   (= shape-key :rect) (let [{:keys [top-left-node bottom-right-node]} node-map]
                         {:x (:x top-left-node) :y (:y top-left-node) :height (- (:y bottom-right-node) (:y top-left-node)) :width (- (:x bottom-right-node) (:x top-left-node))})
   (= shape-key :circle) (let [{:keys [center-node top-node]} node-map]
                           {:cx (:x center-node) :cy (:y center-node) :r (math/distance-formula [(:x top-node) (:y top-node)] [(:x center-node) (:y center-node)])})
   (= shape-key :line) (let [{:keys [first-point last-point]} node-map]
                         {:x1 (:x first-point) :y1 (:y first-point) :x2 (:x last-point) :y2 (:y last-point)})
   (= shape-key :path) {:d (reduce (fn [accum [p-type x y]]
                                    (str accum (if (= accum "") "" " ") p-type " " x " " y)) "" node-map)}))


(defn vector-to-nodes [shape-key [x1 y1] [x2 y2]]
  (cond
   (= shape-key :rect) (attrs-to-nodes shape-key {:x (min x1 x2) :y (min y1 y2) :height (Math/abs (- y1 y2)) :width (Math/abs (- x1 x2))})
   (= shape-key :circle) (let [mid-point (math/midpoint-formula [x1 y1] [x2 y2])
                               top-node (rotate-point-around-point [(mid-point 0) (mid-point 1)] [x1 y1] .25)
                               bottom-node (rotate-point-around-point [(mid-point 0) (mid-point 1)] [x2 y2] .25)]
                           {:top-node {:x (top-node 0) :y (top-node 1)}
                            :center-node {:x (mid-point 0) :y (mid-point 1)}
                            :bottom-node {:x (bottom-node 0) :y (bottom-node 1)}
                            :left-node {:x x1 :y y1}
                            :right-node {:x x2 :y y2}})
   (= shape-key :line) (attrs-to-nodes shape-key {:x1 x1 :y1 y1 :x2 x2 :y2 y2})
   (= shape-key :path) [{:type "M" :x x1 :y y1}]))

(defn attrs-to-vectors [shape-key attrs]
  (let [vector-nodes (cond
                      (= :rect shape-key) [:top-left-node :bottom-right-node]
                      (= :circle shape-key) [:left-node :right-node]
                      (= :line shape-key) [:first-point :last-point])
        nodes (attrs-to-nodes shape-key attrs)
        p1 ((vector-nodes 0) nodes)
        p2 ((vector-nodes 1) nodes)]
     [[(:x p1) (:y p1)] [(:x p2) (:y p2)]]))

(defn vectors-to-attrs [shape-key [x1 y1] [x2 y2]]
  (nodes-to-attrs shape-key (vector-to-nodes shape-key [x1 y1] [x2 y2])))


(defn get-opposite-node [node-key]
     (node-key {:bottom-right-node :top-left-node,
                :middle-right-node :middle-left-node,
                :top-right-node :bottom-left-node,
                :bottom-center-node :top-center-node,
                :top-center-node :bottom-center-node,
                :bottom-left-node :top-right-node,
                :middle-left-node :middle-right-node,
                :top-left-node :bottom-right-node,
                :first-point :last-point,
                :last-point :first-point,
                :top-node :bottom-node,
                :bottom-node :top-node,
                :right-node :left-node,
                :left-node :right-node}))


;;Scale Functions

(defn scale-rect [node-name shape scale-val]
  (let [old-x (:x (:position-attrs shape))
        old-y (:y (:position-attrs shape))
        new-width (* scale-val (:width (:position-attrs shape)))
        new-height (* scale-val (:height (:position-attrs shape)))
        opp-node (get-opposite-node node-name)
        opp-node-pos (opp-node (attrs-to-nodes :rect (:position-attrs shape)))
        new-attrs (cond
                     (= opp-node :top-left-node) {:x old-x, :y old-y, :width new-width, :height new-height}
                     (= opp-node :middle-left-node) {:x old-x, :y old-y, :width new-width, :height (:height (:position-attrs shape))}
                     (= opp-node :bottom-left-node) {:x old-x, :y (- (:y opp-node-pos) new-height), :height new-height, :width new-width}
                     (= opp-node :top-right-node) {:x old-x, :y (+ (:y opp-node-pos) new-height), :width new-width, :height new-height}
                     (= opp-node :middle-right-node) {:x (- (:x opp-node-pos) new-width), :y old-y, :width new-width, :height (:height (:position-attrs shape))}
                     (= opp-node :bottom-right-node) {:x (- (:x opp-node-pos) new-width), :y (- (:y opp-node-pos) new-height), :width new-width, :height new-height}
                     (= opp-node :top-center-node) {:x old-x, :y (+ (:y opp-node-pos) new-height), :width (:width (:position-attrs shape)), :height new-height}
                     (= opp-node :bottom-center-node) {:x old-x, :y (- (:y opp-node-pos) new-height), :width (:width (:position-attrs shape)), :height new-height})]
    (attrs-to-nodes (:shape-name shape) new-attrs)))

(defn scale-circle [node-name shape scale-val]
    (attrs-to-nodes (:shape-name shape) {:cx (:cx (:position-attrs shape)), :cy (:cy (:position-attrs shape)), :r (* scale-val (:r (:position-attrs shape)))}))


(defn scale-line [clicked-node {:keys [position-attrs] } scale-val]
  (let [around-p ((get-opposite-node clicked-node) position-attrs)
        opp-p (clicked-node position-attrs)
        s-diffX (* (- (:x around-p) (:x opp-p)) scale-val)
        s-diffY (* (- (:y around-p) (:y opp-p)) scale-val)
        s-opp-p {:x (- (:x around-p) s-diffX) :y (- (:y around-p) s-diffY)}]
    {(get-opposite-node clicked-node) around-p, clicked-node s-opp-p, :middle-point (math/map-midpoint-formula around-p s-opp-p)}))








(defn contain-str [string lookup]
  (>= (.indexOf string lookup) 0))

(defn extend-path-text [p-type shape-name attrs orig-x orig-y]
  (str "Extend " (name shape-name) " with " (if (= p-type :line) (str "line " (- orig-x (:x attrs)) "px horizontally " (- orig-y (:y attrs)) "px vertically") "curve")))


(defn canvas-state-to-nodes [canvas-state [shape-key index]]
  (let [{:keys [shape-name position-attrs]} ((shape-key canvas-state) index)]
          (attrs-to-nodes shape-name position-attrs)))


(defn line-point-func [x y]
     (let [cross-size 5
           point (vector-to-nodes :path [x y] [0 0])
           p-x (:x (point 0))
           p-y (:y (point 0))]
                               [{:shape-name "line",
                                 :position-attrs {:first-point {:x (+ p-x cross-size) :y  (+ p-y cross-size)}  :middle-point {:x p-x :y p-y} :last-point {:x (- p-x cross-size) :y (- p-y cross-size)}}
                                 :visual-attrs {:stroke "blue" :strokeWidth 2}
                                 :active false}
                                {:shape-name "line",
                                 :position-attrs {:first-point {:x (- p-x cross-size) :y (+ p-y cross-size)}  :middle-point {:x p-x :y p-y} :last-point {:x (+ p-x cross-size) :y (- p-y cross-size)}}
                                 :visual-attrs {:stroke "blue" :strokeWidth 2}
                                 :active false}]))


(defn get-snap-name [snap-vec]
  (if (keyword? snap-vec)
    (name snap-vec)
    (str (name (snap-vec 0)) (snap-vec 1))))

(defn center-vector [[x y] [diffX diffY]]
  [[(+ x  diffX) (+ y diffY)] [(- x diffX) (- y diffY)]])



(def canvas-nodes
  (get-rect-node-points {:x 0 :y 0 :width (canvas-size 0) :height (canvas-size 1)}))


(def shape-keys [:rect :path :circle :line])

(defn glomp-line [pos-attrs perc]
  (:last-point (scale-line :last-point
                  {:position-attrs pos-attrs} perc)))

(defn vec-glomp-line [[x1 y1] [x2 y2] perc]
  (glomp-line
   (attrs-to-nodes :line {:x1 x1, :y1, y1, :x2 x2, :y2 y2}) perc))

(defn get-length [seg-vecs]
  (reduce (fn [mag [p1 p2]]
            (+ mag (math/distance-formula p1 p2))) 0 seg-vecs))

(defn make-seg-vecs [points-vec]
  (let [f (first points-vec)
        l (last points-vec)]
   (vec (map vec (partition 2
             (reduce (fn [accum point]
               (if (or (= point f) (= point l))
                 (conj accum point)
                 (conj accum point point))) [] points-vec))))))


(defn segment-glomper [seg-vecs g-val]
  (let [length (get-length seg-vecs)]
    (loop [s-vecs seg-vecs
         g-v g-val
         t-dist 0]
      (let [[p1 p2] (first seg-vecs)
            new-t-dist (+ t-dist (math/distance-formula p1 p2))]
        (if (> new-t-dist (* g-v length))
          (let [new-g-val (- (/ t-dist length) g-val)]
            (if (> new-g-val 0)
              (vec-glomp-line p1 p2 new-g-val)
              {:x (p1 0) :y (p1 1)}))
          (recur (next s-vecs) g-v new-t-dist))))))



(defn glomp [s-key pos-attrs g-val]
  (s-key {:rect (let [{:keys [top-left-node top-right-node
                              bottom-right-node bottom-left-node]} pos-attrs
                      points-vec (map (fn [{:keys [x y]}] [x y]) [top-left-node top-right-node
                                                                  bottom-right-node bottom-left-node])]
                     (segment-glomper (make-seg-vecs points-vec) g-val))
          :line (glomp-line pos-attrs g-val)
          :path (segment-glomper (make-seg-vecs (map (fn [[t x y]] [x y]) pos-attrs)) g-val)
          :circle (let [r (:r (nodes-to-attrs :circle pos-attrs))
                        radian (* (* math/PI 2) g-val)]
                    {:x (* (math/cos radian) r) :y (* (math/sin radian) r)})}))

(defn snap [cs node s-lookup]
 (let [{:keys [x y]} (cond
                       (number? node) 0
                       (= :canvas s-lookup) (node canvas-nodes)
                       :else (let [[s-key s-index] s-lookup]
                               (get-in cs [s-key s-index :position-attrs node])))]
   [x y]))

(defn make-draw
  ([shape-key [x y] [diffX diffY]] (make-draw shape-key [x y] [diffX diffY] nil))
  ([shape-key [x y] [diffX diffY] options-vec]
  (conj {:step-name :draw,
         :shape shape-key}
        (zipmap (if (check-snap y)
                  [:from-node :from-shape]
                  [:x :y]) [x y])
        (zipmap (if (check-snap diffY)
                  [:to-node :to-shape]
                  [:diffX :diffY]) [diffX diffY])
        (if options-vec
          (zipmap options-vec (repeat (count options-vec) true))
          nil))))


(defn make-scale [shape-lookup node scale-val]
  {:step-name :scale,
   :shape-lookup shape-lookup,
   :node node,
   :scale-val scale-val})

(defn make-for [times steps-vec]
  {:step-name :for,
   :times times,
   :for-steps steps-vec})

(defn make-rotate [shape-lookup node rotate-val]
  {:step-name :rotate
   :shape-lookup shape-lookup,
   :node node,
   :rotate-val rotate-val})

(defn make-move [shape-lookup diffX diffY]
  (conj {:step-name :move
         :shape-lookup shape-lookup}
        (zipmap (if (check-snap diffY)
                    [:from-node]
                    [:diffX]) [diffX])
        (if (check-snap diffY)
            {:to-node (diffY 0) :to-shape (diffY 1)}
            {:diffY diffY})))

(defn make-path-start [x y options-vec vis-attrs]
  (conj {:step-name :path-start}
        (if (check-snap y)
          {:from-node x, :from-shape y}
          {:x x, :y y})
        (if options-vec
          (zipmap options-vec (repeat (count options-vec) true))
          nil)
        (if vis-attrs
          {:vis-attrs vis-attrs}
          nil)))

(defn make-path-extend [path-index p-type n-x n-y]
 (conj {:step-name :path-extend
       :path-index path-index
       :p-type p-type}
   (if (check-snap n-y)
     {:to-shape n-y
      :to-node n-x}
     {:x n-x
      :y n-y})))

(defn conj-in [x lookup-vec added-val]
  (assoc-in x lookup-vec (conj (get-in x lookup-vec)
                               added-val)))

(def default-shape-visual
  {:fill "#1F1E1D", :className "shape", :stroke "#1F1E1D", :strokeWidth 3})

(def guide-shape-visual
  {:className "guide" :stroke "#225E79" :fill "#3BA3D0" :strokeWidth 2})

(defn make-draw-cs [canvas-state {:keys [shape from-node from-shape x y to-node to-shape diffX diffY] :as draw-map}]
              (let [[x y] (if from-node
                                  (snap canvas-state from-node from-shape)
                                  [x y])
                    [diffX diffY] (let [[d-X d-Y] (if to-node
                                                  (let [[x2 y2] (snap canvas-state to-node to-shape)]
                                                    [(- x2 x) (- y2 y)])
                                                      [diffX diffY])]
                                    (cond
                                       (:horizontally draw-map) [d-X 0]
                                       (:vertically draw-map) [0 d-Y]
                                       :else [d-X d-Y]))
                    pos-attrs (if (:centered draw-map)
                                (vector-to-nodes shape [(+ x  diffX) (+ y diffY)] [(- x diffX) (- y diffY)])
                                (vector-to-nodes shape [x y] [(+ x diffX) (+ y diffY)]))]

                (conj-in canvas-state [shape] {:shape-name  shape,
                                               :position-attrs pos-attrs,
                                               :visual-attrs (conj default-shape-visual
                                                                            (if (:guide draw-map)
                                                                                guide-shape-visual
                                                                                (:vis-attrs draw-map)))
                                               :active (:active draw-map)})))


(defn start-path-cs [canvas-state {:keys [step-name x y from-node from-shape vis-attrs] :as s-path}]
               (conj-in canvas-state [:path] {:shape-name :path,
                                             :position-attrs (if from-shape (let [[s-key s-index] from-shape
                                                                                  snap-point (get-in canvas-state [s-key s-index :position-attrs from-node])]
                                                                             [["M" (:x snap-point) (:y snap-point)]])
                                                                             [["M" x y]])
                                             :visual-attrs (conj (if (:guide s-path)
                                                                     guide-shape-visual
                                                                     default-shape-visual) vis-attrs)
                                             :active (:active s-path)}))

(defn extend-path-cs [canvas-state {:keys [path-index p-type x y to-shape to-node]}]

  (conj-in canvas-state [:path path-index :position-attrs] (if to-shape
                                                             (let [[shape-key shape-index] to-shape
                                                                   s-point (get-in canvas-state [shape-key shape-index :position-attrs to-node])]
                                                               [p-type (:x s-point) (:y s-point)])
                                                             [p-type x y])))


(defn draw-text [{:keys [shape from-node from-shape x y to-node to-shape diffX diffY]}]
  (let [dec-places 1]
  (str "Draw " (name shape)
               (if from-node
                  (str " at " (get-snap-name from-shape) "'s " (name from-node) " ")
                  (str " from (" (math/round x dec-places) ", " (math/round y dec-places) ") " ))
               (if to-node
                  (str "to " (get-snap-name to-shape) "'s " (name to-node))
                  (str (math/round diffX dec-places) "px horizontally " (math/round diffY dec-places) "px vertically")))))


(defn make-scale-cs [canvas-state {:keys [step-name shape-lookup node scale-val]}]
      (let [[shape-key shape-index] shape-lookup
            shape-map ((shape-key canvas-state) shape-index)
            {:keys [shape-name] :as shape} (assoc-in shape-map [:position-attrs] (nodes-to-attrs shape-key (:position-attrs shape-map)))
                   ;;debug (debug/log scaled-canvas-state)
                   ]
                   (shape-name {:rect (assoc-in canvas-state [shape-key shape-index :position-attrs] (scale-rect node shape scale-val))
                                :circle (assoc-in canvas-state [shape-key shape-index :position-attrs] (scale-circle node shape scale-val))
                                :line (assoc-in canvas-state [shape-key shape-index :position-attrs] (scale-line node shape-map scale-val))})))

(defn scale-text [{:keys [step-name shape-lookup node scale-val]}]
  (let [[shape-key shape-index] shape-lookup]
    (str "Scale " (get-snap-name [shape-key shape-index]) " around "  (get-snap-name [shape-key shape-index]) "'s "
         (name (get-opposite-node node)) " by " scale-val)))


(defn make-rotate-cs [canvas-state {:keys [shape-lookup node rotate-val]}]
        (let [[shape-key index] shape-lookup
              rotated-canvas-state (assoc-in canvas-state [shape-key index :position-attrs]
                                             (reduce (fn [accum [node-name node-pos]]
                                                     (let [shape-pos (:position-attrs ((shape-key canvas-state) index))
                                                           [new-x new-y] (rotate-point-around-point [(:x (node shape-pos)) (:y (node shape-pos))]
                                                                                                    [(:x  node-pos) (:y node-pos)] rotate-val)]
                                                    (assoc accum node-name {:x new-x :y new-y}))) {} (vec (get-in canvas-state [shape-key index :position-attrs]))))]
                     rotated-canvas-state))

(defn rotate-text [{:keys [shape-lookup node rotate-val]}]
  (let [[shape-key index] shape-lookup]
    (str "Rotate " (get-snap-name [shape-key index])
         " around " (get-snap-name [shape-key index] ) "'s " (name (get-opposite-node node)) " by " rotate-val)))


(defn path-start-text [{:keys [x y from-shape from-node]}]
    (str "Start path " (if from-shape (str "at " (name (from-shape 0)) (from-shape 1) "'s " from-node) (str x "px horizontally " y "px vertically"))))



(defn path-extend-text [{:keys [path-index p-type x y to-shape to-node]}]
  (let [p-t-lookup {"L" "line"
                    "H" "horizontal line"
                    "V" "vertical line"
                    "C" "cubic Bézier"}]
    (str "Extend path" path-index  " with " (get p-t-lookup p-type) (if to-shape (str " to " (name (to-shape 0)) (to-shape 1) "'s " (name to-node) )
                                                                             (str x "px horizontally " y "px vertically")))))

(defn make-move-cs [canvas-state {:keys [shape-lookup from-node to-node to-shape diffX diffY]}]
  (let [[shape-key index] shape-lookup
        {:keys [position-attrs shape-name]} ((shape-key canvas-state) index)
                     [diffX diffY] (if to-node
                                     (let [moved-node-pos (from-node position-attrs)
                                           [to-shape-key to-index] to-shape
                                           snapped-shape-pos (to-node (:position-attrs ((to-shape-key canvas-state) to-index)))]
                                       [(- (:x snapped-shape-pos) (:x moved-node-pos))
                                        (- (:y snapped-shape-pos) (:y moved-node-pos))])
                                       [diffX diffY])
                     shape-pos-attrs (nodes-to-attrs shape-name position-attrs)
                     positions (reduce conj (map (fn [pos-attr]
                                                     (cond (> (.indexOf (str pos-attr) "x") 0) {pos-attr (+ (pos-attr shape-pos-attrs) diffX)}
                                                           (> (.indexOf (str pos-attr) "y") 0) {pos-attr (+ (pos-attr shape-pos-attrs) diffY)})) (get-pos-key shape-name)))]
    (assoc-in canvas-state [shape-key index :position-attrs] (attrs-to-nodes shape-key (conj shape-pos-attrs positions)))))


(defn move-text [{:keys [shape-lookup from-node to-node to-shape diffX diffY]}]
    (str "Move " (get-snap-name shape-lookup) (if diffX
                                                       (str " " diffX "px horizontally " diffY "px vertically")
                                                       (str "'s " (name from-node) " to " (get-snap-name to-shape) "'s " (name to-node)))))



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



(defn for-text [{:keys [times for-steps]}]
  (str "Repeat from 1 to " (+ times 1)))


(def cs {:rect [] :circle []
         :path [] :line []})


(def step-func-dictionary {:draw [make-draw-cs draw-text]
                           :scale [make-scale-cs scale-text]
                           :rotate [make-rotate-cs rotate-text]
                           :move [make-move-cs move-text]
                           :for [nil for-text]
                           :path-start [start-path-cs path-start-text]
                           :path-extend [extend-path-cs path-extend-text]})

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





