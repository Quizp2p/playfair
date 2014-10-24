(ns playfair-cljs.csCompiler
  (:require [playfair-cljs.math :as math]
            [playfair-cljs.shapeData :as s-data]
            [playfair-cljs.appstate :as state]
            [playfair-cljs.shapeDataConversion :as sdc]
            [playfair-cljs.general :as g]
            [cljs.core.async :refer [put! chan <!]]
            [playfair-cljs.channels :as channels]
            [playfair-cljs.debug :as debug]))


(def node-radius 5)

(defn make-node [x y vis-attrs shape-lookup from-node]
  {:shape-name :circle
   :position-attrs (sdc/attrs-to-nodes :circle {:cx x :cy y :r node-radius})
   :visual-attrs (assoc vis-attrs :onMouseDown #(put! channels/canvas-chan {:e-type :mouseDown, :e (.-nativeEvent %), :reciever :node, :shape-lookup shape-lookup :from-node from-node}))
   :active nil})

(defn add-nodes [shape vis-attr shape-lookup]
   (conj (map-indexed (fn [index pos-attr]
                        (if (= (:shape-name shape) :path)
                          (let [[p-type x y] pos-attr]
                            (make-node x y vis-attr shape-lookup index))
                          (let [[node-name {:keys [x y]}] pos-attr]
                            (make-node x y vis-attr shape-lookup node-name)))) (:position-attrs shape)) shape))

(defn check-nodes [cs key-state]
  (reduce concat (reduce concat (map (fn [[shape-name shape-vec]]
                                          (map-indexed (fn [index shape]
                                                         (if (and (= :select key-state) (not (:in-progress? @state/gui-state)))
                                                                 (if (:active shape)
                                                                     (add-nodes shape s-data/regular-node-vis [shape-name index])
                                                                     (list shape))
                                                                 (if (:active shape)
                                                                     (add-nodes shape s-data/active-node-vis [shape-name index])
                                                                     (add-nodes shape s-data/snap-node-vis [shape-name index])))) shape-vec)) cs))))






;;Scale Functions
(defn scale-rect [node-name shape scale-val]
  (let [old-x (:x (:position-attrs shape))
        old-y (:y (:position-attrs shape))
        new-width (* scale-val (:width (:position-attrs shape)))
        new-height (* scale-val (:height (:position-attrs shape)))
        opp-node (sdc/get-opposite-node node-name)
        opp-node-pos (opp-node (sdc/attrs-to-nodes :rect (:position-attrs shape)))
        new-attrs (cond
                     (= opp-node :top-left-node) {:x old-x, :y old-y, :width new-width, :height new-height}
                     (= opp-node :middle-left-node) {:x old-x, :y old-y, :width new-width, :height (:height (:position-attrs shape))}
                     (= opp-node :bottom-left-node) {:x old-x, :y (- (:y opp-node-pos) new-height), :height new-height, :width new-width}
                     (= opp-node :top-right-node) {:x old-x, :y (+ (:y opp-node-pos) new-height), :width new-width, :height new-height}
                     (= opp-node :middle-right-node) {:x (- (:x opp-node-pos) new-width), :y old-y, :width new-width, :height (:height (:position-attrs shape))}
                     (= opp-node :bottom-right-node) {:x (- (:x opp-node-pos) new-width), :y (- (:y opp-node-pos) new-height), :width new-width, :height new-height}
                     (= opp-node :top-center-node) {:x old-x, :y (+ (:y opp-node-pos) new-height), :width (:width (:position-attrs shape)), :height new-height}
                     (= opp-node :bottom-center-node) {:x old-x, :y (- (:y opp-node-pos) new-height), :width (:width (:position-attrs shape)), :height new-height})]
    (sdc/attrs-to-nodes (:shape-name shape) new-attrs)))

(defn scale-circle [node-name shape scale-val]
    (sdc/attrs-to-nodes (:shape-name shape) {:cx (:cx (:position-attrs shape)), :cy (:cy (:position-attrs shape)), :r (* scale-val (:r (:position-attrs shape)))}))


(defn scale-line [clicked-node {:keys [position-attrs] } scale-val]
  (let [around-p ((sdc/get-opposite-node clicked-node) position-attrs)
        opp-p (clicked-node position-attrs)
        s-diffX (* (- (:x around-p) (:x opp-p)) scale-val)
        s-diffY (* (- (:y around-p) (:y opp-p)) scale-val)
        s-opp-p {:x (- (:x around-p) s-diffX) :y (- (:y around-p) s-diffY)}]
    {(sdc/get-opposite-node clicked-node) around-p, clicked-node s-opp-p, :middle-point (math/map-midpoint-formula around-p s-opp-p)}))


(defn glomp-line [pos-attrs perc]
  (:last-point (scale-line :last-point
                  {:position-attrs pos-attrs} perc)))

(defn vec-glomp-line [[x1 y1] [x2 y2] perc]
  (glomp-line
   (sdc/attrs-to-nodes :line {:x1 x1, :y1, y1, :x2 x2, :y2 y2}) perc))

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
   (cond
          (= :rect s-key) (let [{:keys [top-left-node top-right-node
                              bottom-right-node bottom-left-node]} pos-attrs
                      points-vec (map (fn [{:keys [x y]}] [x y]) [top-left-node top-right-node
                                                                  bottom-right-node bottom-left-node])]
                     (segment-glomper (make-seg-vecs points-vec) g-val))
          (= :line s-key) (glomp-line pos-attrs g-val)
          (= :path s-key) (segment-glomper (make-seg-vecs (map (fn [[t x y]] [x y]) pos-attrs)) g-val)
          (= :circle s-key) (let [r (:r (sdc/nodes-to-attrs :circle pos-attrs))
                        radian (* (* math/PI 2) g-val)]
                    {:x (* (math/cos radian) r) :y (* (math/sin radian) r)})))

(defn snap [cs node s-lookup]
 (let [{:keys [x y]} (cond
                       (= :canvas s-lookup) (if (vector? node)
                                              (glomp :rect s-data/canvas-nodes (node 1) )
                                              (node s-data/canvas-nodes))
                       (vector? node) (glomp (s-lookup 0) (get-in cs [(s-lookup 0) (s-lookup 1) :position-attrs]) (node 1))

                       :else (let [[s-key s-index] s-lookup
                                   node-pos (get-in cs [s-key s-index :position-attrs node])]
                               (if (number? node)
                                 {:x (node-pos 1) :y (node-pos 2)}
                                 node-pos)))]
   [x y]))

(defn get-snap-name [snap-vec]
  (if (keyword? snap-vec)
    (name snap-vec)
    (str (name (snap-vec 0)) (snap-vec 1))))


(defmulti get-cs-fn :step-name)


(defmethod get-cs-fn :draw [{:keys [shape from-node from-shape x y to-node to-shape diffX diffY] :as draw-map}]
            (fn [canvas-state]
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
                                (sdc/vector-to-nodes shape [(+ x  diffX) (+ y diffY)] [(- x diffX) (- y diffY)])
                                (sdc/vector-to-nodes shape [x y] [(+ x diffX) (+ y diffY)]))]

                (g/conj-in canvas-state [shape] {:shape-name  shape,
                                               :position-attrs pos-attrs,
                                               :visual-attrs (conj s-data/default-shape-visual
                                                                            (if (:guide draw-map)
                                                                                s-data/guide-shape-visual
                                                                                (:vis-attrs draw-map)))
                                               :active (:active draw-map)}))))




(defmethod get-cs-fn :path-start [{:keys [step-name x y from-node from-shape vis-attrs] :as s-path}]
            (fn [canvas-state]
               (g/conj-in canvas-state [:path] {:shape-name :path,
                                             :position-attrs (if from-shape (let [[s-key s-index] from-shape
                                                                                  snap-point (get-in canvas-state [s-key s-index :position-attrs from-node])]
                                                                             [["M" (:x snap-point) (:y snap-point)]])
                                                                             [["M" x y]])
                                             :visual-attrs (conj (if (:guide s-path)
                                                                     s-data/guide-shape-visual
                                                                     s-data/default-shape-visual) vis-attrs)
                                             :active (:active s-path)})))

(defmethod get-cs-fn :path-extend [{:keys [path-index p-type x y to-shape to-node]}]
  (fn [canvas-state]
    (g/conj-in canvas-state [:path path-index :position-attrs] (if to-node
                                                                     (let [[x y] (snap canvas-state to-node to-shape)]
                                                                           [p-type x y])
                                                                     [p-type x y]))))




;;Should have if right or top or whatever only scale the x.
(defmethod get-cs-fn :scale [{:keys [step-name shape-lookup node scale-val]}]
    (fn [canvas-state]
      (let [[shape-key shape-index] shape-lookup
            {:keys [position-attrs]} ((shape-key canvas-state) shape-index)
            around-node (sdc/get-opposite-node node)
            around-x    (:x (around-node position-attrs))
            around-y    (:y (around-node position-attrs))]
            (assoc-in canvas-state [shape-key shape-index :position-attrs]
                                     (into (hash-map)
                                             (map (fn [[n-name {:keys [x y]}]]
                                                        [n-name (if (= n-name around-node)
                                                                      {:x x :y y}
                                                                      {:x (if (some #(= % around-node) [:top-center-node :bottom-center-node])
                                                                            x
                                                                            (+ around-x (* scale-val (- x around-x))))
                                                                       :y (if (some #(= % around-node) [:middle-right-node :middle-left-node])
                                                                            y
                                                                            (+ around-y (* scale-val (- y around-y))))})]) position-attrs))))))



(defmethod get-cs-fn :rotate [{:keys [shape-lookup node rotate-val]}]
      (fn [canvas-state]
        (let [[shape-key index] shape-lookup
              rotated-canvas-state (assoc-in canvas-state [shape-key index :position-attrs]
                                             (reduce (fn [accum [node-name node-pos]]
                                                     (let [shape-pos (:position-attrs ((shape-key canvas-state) index))
                                                           [new-x new-y] (sdc/rotate-point-around-point [(:x (node shape-pos)) (:y (node shape-pos))]
                                                                                                    [(:x  node-pos) (:y node-pos)] rotate-val)]
                                                    (assoc accum node-name {:x new-x :y new-y}))) {} (vec (get-in canvas-state [shape-key index :position-attrs]))))]
                     rotated-canvas-state)))



(defmethod get-cs-fn :move [{:keys [shape-lookup from-node to-node to-shape diffX diffY]}]
  (fn [canvas-state]
    (let [[shape-key index] shape-lookup

          {:keys [position-attrs shape-name]} ((shape-key canvas-state) index)

          [diffX diffY] (if to-node
                            (let [moved-node-pos (from-node position-attrs)
                                  [to-shape-key to-index] to-shape
                                  snapped-shape-pos (to-node (:position-attrs ((to-shape-key canvas-state) to-index)))]
                                 [(- (:x snapped-shape-pos) (:x moved-node-pos))
                                  (- (:y snapped-shape-pos) (:y moved-node-pos))])
                                 [diffX diffY])

          positions (into (hash-map) (map (fn [[n-name {:keys [x y]}]]
                                                    [n-name {:x (+ x diffX) :y (+ y diffY)}]) position-attrs))]
      (assoc-in canvas-state [shape-key index :position-attrs] positions))))


(defmethod get-cs-fn :for [step]
  (fn [cs] cs))



;;------------------TEXT-----------------------

(defn s-lookup-txt [s-lookup]
  (if (= :canvas s-lookup)
    "canvas"
    (str (name (s-lookup 0))  (s-lookup 1))))

(defmulti get-text :step-name)

(defn print-node [node]
  (if (keyword? node)
    (name node)
    (str "point " node)))

(defmethod get-text :draw
  [{:keys [shape from-node from-shape x y to-node to-shape diffX diffY scrub?]}]
  (let [dec-places 1
        text (concat ["Draw " (name shape)]
                                (if from-node
                                  [" at " (get-snap-name from-shape) "'s " (print-node from-node) " "]
                                  [" from (" (if scrub? {:value (math/round x dec-places) :step-key :x} (math/round x dec-places))
                                ", " (if scrub? {:value (math/round y dec-places) :step-key :y} (math/round y dec-places)) ") "])
                                (if to-node
                                  ["to " (get-snap-name to-shape) "'s " (print-node to-node)]
                                  [(if scrub? {:value (math/round diffX dec-places) :step-key :diffX} (math/round diffX dec-places))
                                  "px horizontally "
                                  (if scrub? {:value (math/round diffY dec-places) :step-key :diffY} (math/round diffY dec-places))
                                  "px vertically"]))]
  (if scrub? text (reduce str text))))

(defmethod get-text :move
  [{:keys [shape-lookup from-node to-node to-shape diffX diffY scrub?]}]
  (let [text (concat ["Move " (get-snap-name shape-lookup)]
               (if diffX
                    [" " (if scrub? {:value diffX :step-key :diffX} diffX)  "px horizontally " (if scrub? {:value diffY :step-key :diffY} diffY) "px vertically"]
                    ["'s " (name from-node) " to " (get-snap-name to-shape) "'s " (name to-node)]))]
    (if scrub? text (reduce str text))))


(defmethod get-text :rotate
  [{:keys [shape-lookup node rotate-val scrub?]}]
  (let [[shape-key index] shape-lookup
        add-text-data (fn [r-val] ["Rotate " (get-snap-name [shape-key index])
                                     " around " (get-snap-name [shape-key index])
                                     "'s " (name (sdc/get-opposite-node node)) " by " r-val])
        rotate-val (math/round rotate-val 2)]

  (if scrub?
      (add-text-data {:value rotate-val :step-key :rotate-val})
      (reduce str (add-text-data rotate-val)))))


(defmethod get-text :path-start
  [{:keys [x y from-shape from-node scrub?]}]
     (let [text (concat ["Start path "] (if from-shape  ["at " (name (from-shape 0)) (from-shape 1) "'s " from-node]
                                             [(if scrub? {:value x :step-key :x} x) "px horizontally " (if scrub? {:value y :step-key :y} y) "px vertically"]))]
      (if scrub? text (reduce str text))))



(defmethod get-text :path-extend
  [{:keys [path-index p-type x y to-node to-shape scrub?]}]
    (let [p-t-lookup {"L" "line"
                      "H" "horizontal line"
                      "V" "vertical line"
                      "C" "cubic Bézier"}
          text (concat ["Extend path" path-index  " with " (get p-t-lookup p-type) " "]
                       (cond
                         to-shape  [" to " (s-lookup-txt to-shape) "'s " (name to-node)]
                         :else [(if scrub? {:value x :step-key :x} x) "px horizontally " (if scrub? {:value y :step-key :y} y) "px vertically"]))]
      (if scrub? text (reduce str text))))

(defmethod get-text :scale
  [{:keys [step-name shape-lookup node scale-val scrub?]}]
    (let [[shape-key shape-index] shape-lookup
          scale-val (math/round scale-val 2)
          text ["Scale " (get-snap-name [shape-key shape-index]) " around "  (get-snap-name [shape-key shape-index]) "'s "
                 (name (sdc/get-opposite-node node)) " by " (if scrub? {:value scale-val :step-key :scale-val} scale-val)]]
       (if scrub?
         text
         (reduce str text))))

(defmethod get-text :for
 [{:keys [times for-steps scrub?]}]
  (if scrub?
    ["Repeat from 1 to " {:value (+ times 1) :step-key :times}]
    (str "Repeat from 1 to " (+ times 1))))





