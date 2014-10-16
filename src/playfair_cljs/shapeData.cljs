(ns playfair-cljs.shapeData
  (:require
   [playfair-cljs.shapeDataConversion :as sdc]
   [cljs.core.async :refer [put! chan <!]]))


(def default-shape-visual
  {:fill "#1F1E1D", :style {:opacity 0.6}, :stroke "#1F1E1D", :strokeWidth 3})

(def guide-shape-visual
  {:stroke "#225E79" :fill "#3BA3D0" :strokeWidth 2})

(def regular-node-vis
  {:stroke "#225E79" :fill "gray" :strokeWidth 2})

(def active-node-vis
  {:stroke "#225E79" :fill "blue" :strokeWidth 2})

(def snap-node-vis
  {:stroke "#225E79" :fill "#FFD035" :strokeWidth 2})


(def canvas-size [600 480])

(def canvas-nodes
  (sdc/get-rect-node-points {:x 0 :y 0 :width (canvas-size 0) :height (canvas-size 1)}))

(defn check-snap [thing]
  (or (= thing :canvas) (if (and (vector? thing) (> (count thing) 0)) (some (fn [x] (= x (thing 0))) [:rect :path :line :circle]) false)))

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

(defn make-move [from-node shape-lookup diffX diffY]
  (conj {:step-name :move
         :from-node from-node
         :shape-lookup shape-lookup}
        (zipmap (if (check-snap diffY)
                    [:from-node]
                    [:diffX]) [diffX])
        (if (check-snap diffY)
            {:to-node (diffY 0) :to-shape (diffY 1)}
            {:diffY diffY})))

(defn make-path-start [x y options-vec vis-attrs]
  (conj {:step-name :path-start
         :shape :path}
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


(defn line-point-func [x y]
     (let [cross-size 5
           point (sdc/vector-to-nodes :path [x y] [0 0])
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
