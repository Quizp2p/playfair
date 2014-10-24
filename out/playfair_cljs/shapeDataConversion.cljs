(ns playfair-cljs.shapeDataConversion
  (:require [playfair-cljs.math :as math]))


(def shape-keys [:rect :path :circle :line])



(defn get-pos-key [shape-name]
   (shape-name {:rect [:x :y]
                :path [:x :y]
                :line [:x1 :y1 :x2 :y2]
                :circle [:cx :cy]}))

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


(defn rotate-point-around-point [[origin-x origin-y] [x y] rotate-val]
  (let [rotate-angle (* rotate-val (* 2 math/PI))
        r (math/distance-formula [origin-x origin-y] [x y])
        current-angle (if (> y origin-y) (math/acos (/ (- x origin-x) r))
                        (- (* 2 math/PI) (math/acos (/ (- x origin-x) r))))
        new-angle (+ rotate-angle current-angle)]
    (if (and (= origin-x x ) (= origin-y y))
      [x y]
      [(+ origin-x (* r (math/cos new-angle))) (+ origin-y (* r (math/sin new-angle)))])))

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
