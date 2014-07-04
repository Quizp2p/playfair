(ns playfair-cljs.shapes
  (:require [playfair-cljs.debug :as debug]
            [playfair-cljs.math :as math]))

(defn get-pos-key [shape-name]
  (cond
   (= shape-name "rect") [:x :y]
   (= shape-name "path") [:x :y]
   (= shape-name "line") [:x1 :y1 :x2 :y2]
   (= shape-name "circle") [:cx :cy]))

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
   (= shape-key :path) {:d (reduce (fn [accum point]
                                    (str accum (if (= accum "") "" " ") (:type point)
                                         (if (or (= (:type point) "L") (= (:type point) "M"))
                                          (str (:x point) " " (:y point))
                                          (str " " (:x1 point) " " (:y1 point) ", "
                                                   (:x2 point) " " (:y2 point) ", "
                                                   (:x point) " " (:y point))))) "" node-map)}))


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
    (attrs-to-nodes (keyword (:name shape)) new-attrs)))

(defn scale-circle [node-name shape scale-val]
    (attrs-to-nodes (keyword (:name shape)) {:cx (:cx (:position-attrs shape)), :cy (:cy (:position-attrs shape)), :r (* scale-val (:r (:position-attrs shape)))}))


(defn scale-line [node-name shape scale-val]
  (let [node-points (attrs-to-nodes :line (:position-attrs shape))
        {:keys [x1 y1 x2 y2]} (:position-attrs shape)
        new-attrs (cond
                     (and (>= x1 x2) (>= y1 y2))  (if (= node-name :first-point) (scale-rect :bottom-right-node shape scale-val) (scale-rect :top-left-node shape scale-val))
                     (and (<= x1 x2) (>= y1 y2))  (if (= node-name :first-point) (scale-rect :bottom-left-node shape scale-val) (scale-rect :top-right-node shape scale-val))
                     (and (>= x1 x2) (<= y1 y2))  (if (= node-name :first-point) (scale-rect :top-right-node shape scale-val) (scale-rect :bottom-left-node shape scale-val))
                     (and (<= x1 x2) (<= y1 y2))  (if (= node-name :first-point) (scale-rect :top-left-node shape scale-val) (scale-rect :bottom-right-node shape scale-val)))]
    (attrs-to-nodes (keyword (:name shape)) new-attrs)))





(defn contain-str [string lookup]
  (>= (.indexOf string lookup) 0))


;;Text Functions
(defn draw-text
  ([s-name attrs] (draw-text s-name attrs [:none :none] [:none :none]) )
  ([s-name attrs [from-snap-node from-snap-name] [to-snap-node to-snap-name]]
  (let [shape (name s-name)

        gen-text (str "Draw " (name s-name))

        dec-places 1

        convert-path-attrs (fn [p-attrs]
                            (let [[x y] (vec (.split (.slice (:d p-attrs) 1) " "))]
                              {:x x, :y y}))

        rest-end-text (fn [horz vert]
                        (if (keyword? to-snap-node)
                        (str "to " to-snap-name "'s " to-snap-node)
                        (str (math/round horz dec-places) "px horizontally " (math/round vert dec-places) "px vertically")))
        position-text (fn [attrs x-key y-key]
                        (if (keyword? from-snap-node)
                          (str " at " (name from-snap-name) "'s " (name from-snap-node))
                          (str " from (" (math/round (x-key attrs) dec-places) ", " (math/round (y-key attrs) dec-places) ") " )))]
  (cond
   (contain-str shape "circle") (str gen-text (position-text attrs :cx :cy) (if (keyword? to-snap-node)
                                                                                (str "to " to-snap-name "'s " to-snap-node)
                                                                                (str "with a radius of " (math/round (:r attrs) dec-places) "px")))
   (contain-str shape "line") (str gen-text (position-text attrs :x1 :y1) (rest-end-text (Math/abs (- (:x1 attrs) (:x2 attrs))) (Math/abs (- (:y1 attrs) (:y2 attrs)))))
   (contain-str shape "rect") (str gen-text (position-text attrs :x :y) (rest-end-text (:width attrs) (:height attrs)))
   (contain-str shape "path") (str "Start path" (position-text (convert-path-attrs attrs) :x :y))))))


(defn move-text [moved-shape-key diffX diffY]
  (str "Move " (name moved-shape-key) " " diffX "px horizontally " diffY "px vertically"))

(defn scale-text [shape-key selected-node scale-val]
  (str "Scale " (name shape-key) " around " (name shape-key) "'s " (name (get-opposite-node selected-node)) " by " scale-val))

(defn rotate-text [shape-key selected-node rotate-val]
  (str "Rotate " (name shape-key) " around " (name shape-key) "'s " (name (get-opposite-node selected-node)) " by " rotate-val))

(defn extend-path-text [p-type shape-name attrs orig-x orig-y]
  (str "Extend " (name shape-name) " with " (if (= p-type :line) (str "line " (- orig-x (:x attrs)) "px horizontally " (- orig-y (:y attrs)) "px vertically") "curve")))



;;Draw Functions
;;I think the function idea is wrong. Actually I don't think it changes that much.


(def make-name
  (let [counter  {:rect (atom -1), :circle (atom -1), :path (atom -1), :line (atom -1)}]
    {:get-count (fn [shape-key] (keyword (str (name shape-key) @(shape-key counter)))), :inc-count (fn [shape-key] (swap! (shape-key counter) inc))}))

(defn canvas-state-to-nodes [canvas-state shape-key]
  (attrs-to-nodes (keyword (:name (shape-key canvas-state))) (:position-attrs (shape-key canvas-state))))


(defn line-point-func [x y]
     (let [cross-size 5
           point (vector-to-nodes :path [x y] [0 0])
           p-x (:x (point 0))
           p-y (:y (point 0))]
                               {:path-marker0 {:name "line",
                                               :position-attrs {:first-point {:x (+ p-x cross-size) :y  (+ p-y cross-size)}  :middle-point {:x p-x :y p-y} :last-point {:x (- p-x cross-size) :y (- p-y cross-size)}}
                                               :visual-attrs {:stroke "blue" :strokeWidth 2}
                                               :active false}
                                :path-marker1 {:name "line",
                                               :position-attrs {:first-point {:x (- p-x cross-size) :y (+ p-y cross-size)}  :middle-point {:x p-x :y p-y} :last-point {:x (+ p-x cross-size) :y (- p-y cross-size)}}
                                               :visual-attrs {:stroke "blue" :strokeWidth 2}
                                               :active false}}))

;;Text still broken. To fix the text I need to know the position of a snapped node.
;;I think this can only be done by completely reorganizing the way function flows throught the program
;;This is a strange hack. There is a better way than that let statement.
(defn make-draw
  ([shape-key p1] (make-draw shape-key p1 p1 {}))
  ([shape-key p1 p2] (make-draw shape-key p1 p2 {}))
  ([shape-key p1 p2 vis-attrs] (make-draw shape-key p1 p2 vis-attrs false))
  ([shape-key [x1 y1] [x2 y2] vis-attrs active]
    ((:inc-count make-name) shape-key)
    (let [s-name ((:get-count make-name) shape-key)]
         (fn [canvas-state]
                 (let [from-snap-node x1
                       from-snap-name y1
                       to-snap-node x2
                       to-snap-name y2
                       x1 (if (keyword? from-snap-name)
                            (:x (from-snap-node (:position-attrs (from-snap-name canvas-state))))
                            x1)
                       y1 (if (keyword? from-snap-name)
                            (:y (from-snap-node (:position-attrs (from-snap-name canvas-state))))
                            y1)
                       x2 (if (keyword? to-snap-name)
                            (:x (to-snap-node (:position-attrs (to-snap-name canvas-state))))
                            x2)
                       y2 (if (keyword? to-snap-name)
                            (:y (to-snap-node (:position-attrs (to-snap-name canvas-state))))
                            y2)
                       pos-attrs (vector-to-nodes shape-key [x1 y1] [x2 y2])]
                 (assoc canvas-state s-name {:name (name shape-key),
                                              :position-attrs pos-attrs,
                                              :visual-attrs (conj {:fill "#1F1E1D", :className "shape" , :stroke "#1F1E1D", :strokeWidth 3} (if (map? vis-attrs)
                                                                                                                                        vis-attrs
                                                                                                                                        {:className "guide" :stroke "#225E79" :fill "#3BA3D0" :strokeWidth 2}))
                                              :active active}
                                      :text (conj (if (:text canvas-state) (:text canvas-state) []) (draw-text s-name (nodes-to-attrs shape-key (vector-to-nodes shape-key [x1 y1] [x2 y2])) [from-snap-node from-snap-name] [to-snap-node to-snap-name])))))
        )))


(defn extend-path [path-key new-attrs p-type]
 (fn [canvas-state]
           (let [line-arr (:position-attrs (path-key canvas-state))
                 point (if (= p-type :line) {:type "L" :x (:x new-attrs) :y (:y new-attrs)}
                                            {:type "C" :x1 (:x1 new-attrs) :y1 (:y1 new-attrs) :x2 (:x2 new-attrs) :y2 (:y2 new-attrs) :x (:x new-attrs) :y (:y new-attrs)})
                 last-point (last (:position-attrs (path-key canvas-state)))
                 canvas-with-ext-p (assoc-in canvas-state [path-key :position-attrs]  (conj line-arr point))]
             (assoc canvas-with-ext-p :text (conj (:text canvas-with-ext-p) (extend-path-text p-type path-key new-attrs (:x last-point) (:y last-point)))))))


;;Adjust Functions
;;There is some construct that will help here. polymorphism or whatever?
(defn make-move [moved-shape-key diffX diffY]
  (let [moved-node-key diffX
        [snapped-shape-key snapped-node-key] (if (keyword? diffX) diffY [nil nil])]
  (fn [canvas-state]
             (let [shape (moved-shape-key canvas-state)
                   moved-node-pos (if (keyword? diffX) (moved-node-key (:position-attrs shape))
                                    nil)
                   snapped-shape-pos (if (keyword? diffX)
                                       (snapped-node-key (:position-attrs (snapped-shape-key canvas-state)))
                                       nil)
                   diffX (if (keyword? snapped-shape-key)
                           (- (:x snapped-shape-pos) (:x moved-node-pos))
                           diffX)
                   diffY (if (keyword? snapped-shape-key)
                           (- (:y snapped-shape-pos) (:y moved-node-pos))
                           diffY)
                   shape-pos-attrs (nodes-to-attrs (keyword (:name shape)) (:position-attrs shape))
                   positions (reduce conj (map (fn [pos-attr]
                                                   (cond (> (.indexOf (str pos-attr) "x") 0) {pos-attr (+ (pos-attr shape-pos-attrs) diffX)}
                                                         (> (.indexOf (str pos-attr) "y") 0) {pos-attr (+ (pos-attr shape-pos-attrs) diffY)})) (get-pos-key (:name shape))))
                   moved-canvas-state (assoc-in canvas-state [moved-shape-key :position-attrs] (attrs-to-nodes (keyword (:name shape)) (conj shape-pos-attrs positions)))]
                   (assoc moved-canvas-state :text (conj (:text moved-canvas-state) (move-text moved-shape-key diffX diffY)))))))



(defn make-scale [shape-key selected-node scale-val]
  (fn [canvas-state]
             (let [shape (assoc-in (shape-key canvas-state) [:position-attrs] (nodes-to-attrs (keyword (:name (shape-key canvas-state))) (:position-attrs (shape-key canvas-state))))
                   scaled-canvas-state (cond
                                          (= (:name shape) "rect") (assoc-in canvas-state [shape-key :position-attrs] (scale-rect selected-node shape scale-val))
                                          (= (:name shape) "circle") (assoc-in canvas-state [shape-key :position-attrs] (scale-circle selected-node shape scale-val))
                                          (= (:name shape) "line") (assoc-in canvas-state [shape-key :position-attrs] (scale-line selected-node shape scale-val)))]
             (assoc scaled-canvas-state :text (conj (:text scaled-canvas-state) (scale-text shape-key selected-node scale-val))))))





(defn make-rotate [shape-key selected-node rotate-val]
            (fn [canvas-state]
                   (let [rotated-canvas-state (assoc-in canvas-state [shape-key :position-attrs] (assoc (reduce (fn [accum [node-name node-pos]]
                                                                                                           (let [shape-pos (:position-attrs (shape-key canvas-state))
                                                                                                                 [new-x new-y] (rotate-point-around-point [(:x (selected-node shape-pos)) (:y (selected-node shape-pos))]
                                                                                                                                                         [(:x  node-pos) (:y node-pos)] rotate-val)]
                                                                                                           (assoc accum node-name {:x new-x :y new-y}))) {} (vec (:position-attrs (shape-key canvas-state))))))]
                     (assoc rotated-canvas-state :text (conj (:text rotated-canvas-state) (rotate-text shape-key selected-node rotate-val))))))

(defn make-for [times funcs]
  (fn [canvas-state]
     (loop [state canvas-state
            loops times]
       (if (< loops 0)
         state
         (recur (reduce (fn [canvas-state func]
                          ((func) canvas-state)) state funcs) (dec loops))))))

(defn make-duplicate [selected-node diffX diffY]
  (fn [canvas-state]
    canvas-state))







