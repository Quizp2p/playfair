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


(defn scale-line [node-name shape scale-val]
  (let [node-points (attrs-to-nodes :line (:position-attrs shape))
        {:keys [x1 y1 x2 y2]} (:position-attrs shape)
        new-attrs (cond
                     (and (>= x1 x2) (>= y1 y2))  (if (= node-name :first-point) (scale-rect :bottom-right-node shape scale-val) (scale-rect :top-left-node shape scale-val))
                     (and (<= x1 x2) (>= y1 y2))  (if (= node-name :first-point) (scale-rect :bottom-left-node shape scale-val) (scale-rect :top-right-node shape scale-val))
                     (and (>= x1 x2) (<= y1 y2))  (if (= node-name :first-point) (scale-rect :top-right-node shape scale-val) (scale-rect :bottom-left-node shape scale-val))
                     (and (<= x1 x2) (<= y1 y2))  (if (= node-name :first-point) (scale-rect :top-left-node shape scale-val) (scale-rect :bottom-right-node shape scale-val)))]
    (attrs-to-nodes (:shape-name shape) new-attrs)))





(defn contain-str [string lookup]
  (>= (.indexOf string lookup) 0))





;;Text Functions
(defn draw-text
  ([s-name shape-key p1 diffs] (draw-text s-name shape-key p1 diffs [:none :none] [:none :none] {}) )
  ([s-name shape-key [x y] [diffX diffY] [from-snap-node from-snap-name] [to-snap-node to-snap-name] options]
  (let [shape (name s-name)

        attrs (vectors-to-attrs shape-key [x y] [(+ x diffX) (+ y diffY)])

        gen-text (str "Draw " (name s-name))

        dec-places 1

        convert-path-attrs (fn [p-attrs]
                            (let [[x y] (vec (.split (.slice (:d p-attrs) 1) " "))]
                              {:x x, :y y}))

        rest-end-text (fn [horz vert]
                        (if (keyword? to-snap-node)
                        (str " to " (name to-snap-name) "'s " (name to-snap-node))
                        (str (math/round horz dec-places) "px horizontally " (math/round vert dec-places) "px vertically")))
        position-text (fn [x y]
                        (if (keyword? from-snap-node)
                          (str " at " (name from-snap-name) "'s " (name from-snap-node))
                          (str " from (" (math/round x dec-places) ", " (math/round y dec-places) ") " )))]
  (str gen-text (position-text x y) (rest-end-text diffX diffY)))))


(defn move-text [moved-shape-key diffX diffY]
  (str "Move " (name moved-shape-key) " " diffX "px horizontally " diffY "px vertically"))

(defn scale-text [shape-key selected-node scale-val]
  (str "Scale "  shape-key " around "  shape-key "'s " (name (get-opposite-node selected-node)) " by " scale-val))


(defn rotate-text [shape-key selected-node rotate-val]
  (str "Rotate " (name shape-key) " around " (name shape-key) "'s " (name (get-opposite-node selected-node)) " by " rotate-val))

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

;;Text still broken. To fix the text I need to know the position of a snapped node.
;;I think this can only be done by completely reorganizing the way function flows throught the program
;;This is a strange hack. There is a better way than that let statement.



(defn center-vector [[x y] [diffX diffY]]
  [[(+ x  diffX) (+ y diffY)] [(- x diffX) (- y diffY)]])


(def canvas-nodes
  (get-rect-node-points {:x 0 :y 0 :width (canvas-size 0) :height (canvas-size 1)}))

canvas-nodes


(defn make-draw
  ([shape-key p1 diffs] (make-draw shape-key p1 diffs {}))
  ([shape-key p1 diffs vis-attrs] (make-draw shape-key p1 diffs vis-attrs {}))
  ([shape-key [x y] [diffX diffY] vis-attrs options]
     {:func-name :make-draw
      :arguments [shape-key [x y] [diffX diffY] vis-attrs options]
      :func (let []
           (fn [canvas-state]
                     (let [check-snapped (fn [s-node? s-name?]
                                           (if (vector? s-name?)
                                            (let [[s-key s-index] s-name?]
                                              (let [{:keys [x y]} (s-node? (:position-attrs ((s-key canvas-state) s-index)))]
                                                [x y]))
                                            (if (= s-name? :canvas)
                                               (let [{:keys [x y]} (s-node? canvas-nodes)]
                                                 [x y])
                                               [s-node? s-name?])))
                           [new-x new-y] (check-snapped x y)
                           [new-diffX new-diffY] (let [[x2 y2] (check-snapped diffX diffY)]
                                                   (if (keyword? diffX)
                                                     [(if (:vertically options) 0 (- x2 new-x))
                                                      (if (:horizontally options) 0 (- y2 new-y))]
                                                     [x2 y2]))
                           ;;debug (debug/log canvas-state)
                           pos-attrs (if (:centered options)
                                     (let
                                       [[[c-x1 c-y1] [c-x2 c-y2]] (center-vector [new-x new-y] [new-diffX new-diffY])]
                                       (vector-to-nodes shape-key [c-x1 c-y1] [c-x2 c-y2]))
                                     (vector-to-nodes shape-key [new-x new-y] [(+ new-x new-diffX) (+ new-y new-diffY)]))]
                   (assoc canvas-state shape-key (conj (shape-key canvas-state)
                                                       {:shape-name  shape-key,
                                                        :position-attrs pos-attrs,
                                                        :visual-attrs (conj {:fill "#1F1E1D", :className "shape" , :stroke "#1F1E1D", :strokeWidth 3} (if (map? vis-attrs)
                                                                                                                                          vis-attrs
                                                                                                                                          {:className "guide" :stroke "#225E79" :fill "#3BA3D0" :strokeWidth 2}))
                                                   :active (:active options)})
                                        :text (conj (:text canvas-state) (draw-text (keyword (str (name shape-key) (count (shape-key canvas-state)))) shape-key [new-x new-y] [new-diffX new-diffY] [x (if (vector? y)
                                                                                                                                                                                                         (let [[s-key s-index] y]
                                                                                                                                                                                                           (str s-key s-index))
                                                                                                                                                                                                           y)]
                                                                                                                                                                                                     [diffX (if (vector? diffY)
                                                                                                                                                                                                                (let [[s-key s-index] diffY]
                                                                                                                                                                                                                          (str s-key s-index))
                                                                                                                                                                                                                  diffY)] options)))))
          )
        :self make-draw}))



(defn extend-path [path-index new-attrs p-type]
 {:func-name :extend-path
  :arguments [path-index new-attrs p-type]
  :func (fn [canvas-state]
           (let [line-arr (:position-attrs ((:path canvas-state) path-index))
                 point (if (= p-type :line) {:type "L" :x (:x new-attrs) :y (:y new-attrs)}
                                            {:type "C" :x1 (:x1 new-attrs) :y1 (:y1 new-attrs) :x2 (:x2 new-attrs) :y2 (:y2 new-attrs) :x (:x new-attrs) :y (:y new-attrs)})
                 last-point (last (:position-attrs ((:path canvas-state) path-index) ))
                 canvas-with-ext-p (assoc-in canvas-state [:path path-index :position-attrs]  (conj line-arr point))]
             (assoc canvas-with-ext-p :text (conj (:text canvas-with-ext-p) (extend-path-text p-type (str :path path-index) new-attrs (:x last-point) (:y last-point))))))
  :self extend-path})


;;Adjust Functions
;;There is some construct that will help here. polymorphism or whatever?

;;Start here and go down.

(defn make-move [[shape-key index] diffX diffY]
  {:func-name :make-move
   :arguments [[shape-key index] diffX diffY]
   :func (let [moved-node-key diffX
              [snapped-node-key [snapped-shape-key snapped-shape-index]] (if (keyword? diffX) diffY [nil [nil nil]])]
      (fn [canvas-state]
               (let [{:keys [position-attrs shape-name]} ((shape-key canvas-state) index)
                     moved-node-pos (if (keyword? diffX) (moved-node-key position-attrs)
                                      nil)
                     snapped-shape-pos (if (keyword? diffX)
                                         (snapped-node-key (:position-attrs ((snapped-shape-key canvas-state) snapped-shape-index)))
                                         nil)
                     diffX (if (keyword? snapped-shape-key)
                             (- (:x snapped-shape-pos) (:x moved-node-pos))
                             diffX)
                     diffY (if (keyword? snapped-shape-key)
                             (- (:y snapped-shape-pos) (:y moved-node-pos))
                             diffY)
                     shape-pos-attrs (nodes-to-attrs shape-name position-attrs)
                     positions (reduce conj (map (fn [pos-attr]
                                                     (cond (> (.indexOf (str pos-attr) "x") 0) {pos-attr (+ (pos-attr shape-pos-attrs) diffX)}
                                                           (> (.indexOf (str pos-attr) "y") 0) {pos-attr (+ (pos-attr shape-pos-attrs) diffY)})) (get-pos-key shape-name)))
                     moved-canvas-state (assoc-in canvas-state [shape-key index :position-attrs] (attrs-to-nodes shape-key (conj shape-pos-attrs positions)))]
                     (assoc moved-canvas-state :text (conj (:text moved-canvas-state) (move-text (str shape-key index) diffX diffY))))))
   :self make-move})

(defn make-scale [[shape-key index] selected-node scale-val]
  {:func-name :make-scale
   :arguments [[shape-key index] selected-node scale-val]
   :func (fn [canvas-state]
             (let [{:keys [shape-name] :as shape} (assoc-in ((shape-key canvas-state) index) [:position-attrs] (nodes-to-attrs shape-key (:position-attrs ((shape-key canvas-state) index))))
                   scaled-canvas-state (shape-name {:rect (assoc-in canvas-state [shape-key index :position-attrs] (scale-rect selected-node shape scale-val))
                                                    :circle (assoc-in canvas-state [shape-key index :position-attrs] (scale-circle selected-node shape scale-val))
                                                    :line (assoc-in canvas-state [shape-key index :position-attrs] (scale-line selected-node shape scale-val))})
                   ;;debug (debug/log scaled-canvas-state)
                   ]

               (assoc scaled-canvas-state :text (conj (:text scaled-canvas-state) (scale-text (str shape-key index) selected-node scale-val))) ))
   :self make-scale})





(defn make-rotate [[shape-key index] selected-node rotate-val]
            {:func-name :make-rotate
             :arguments [[shape-key index] selected-node rotate-val]
             :func (fn [canvas-state]
                   (let [rotated-canvas-state (assoc-in canvas-state [shape-key index :position-attrs] (reduce (fn [accum [node-name node-pos]]
                                                                                                           (let [shape-pos (:position-attrs ((shape-key canvas-state) index))
                                                                                                                 [new-x new-y] (rotate-point-around-point [(:x (selected-node shape-pos)) (:y (selected-node shape-pos))]
                                                                                                                                                         [(:x  node-pos) (:y node-pos)] rotate-val)]
                                                                                                           (assoc accum node-name {:x new-x :y new-y}))) {} (vec (:position-attrs ((shape-key canvas-state) index) ))))]
                     (assoc rotated-canvas-state :text (conj (:text rotated-canvas-state) (rotate-text (str shape-key index) selected-node rotate-val)))))
             :self make-rotate})


;;Input format [:new-arg arg-num]

(defn replace-args [{:keys [arguments self]} & replace-vecs]
  (apply self (reduce (fn [args [index new-val]]
                  (assoc args index new-val)) arguments replace-vecs)))

;;If both the creation, and alteration of a shape are in for loop. The alteration will need updating
;; Ideas:
;; Hava an array in the loop that captures the keys of shapes made in the loop. Then each other action checks its against it.
;; What if they are put into a map? That would be more efficient

;;Make draw and make draw vec need to be combined.

;;Damn son if this works I'm proud.

;;Works beter with actual recursion because I will need to change the funcmaps

;;I must learn regular expressions.

(defn cljs-join [string]
  (reduce (fn [joined c]
          (str joined c)) "" string))


(defn split-str-at [string func]
              (loop [[first-char & rest-chars] (seq string)
                     split-strs ""]
                  (if (func first-char)
                    [split-strs (str first-char (cljs-join rest-chars))]
                    (if rest-chars
                      (recur rest-chars (str split-strs first-char))
                      [split-strs ""]))))


(defn for-state-maker [func-maps state all-state]
  (loop [evaled-func-maps func-maps
         loop-state state
         inner-draws {:rect [],
                      :path [],
                      :circle [],
                      :line []}
         new-func-maps []
         all-states-vec all-state]
      (if evaled-func-maps
       (let [{:keys [func func-name arguments] :as func-map} (first evaled-func-maps)]
          (if (or (= func-name :make-draw)
                  (= func-name :make-draw-vec))
                  (let
                    [shape-name (arguments 0)
                     shape-index (count (shape-name loop-state))
                     new-state (func loop-state)]
                      (recur (next evaled-func-maps) new-state
                             (assoc inner-draws shape-name (conj (shape-name inner-draws) shape-index))
                             (conj new-func-maps func-map)
                             (conj all-states-vec new-state)))

                  (let [[[adjusted-shape-key adjusted-shape-index]] arguments]
                   (if (> (count (filterv (fn [a]
                                  (= a adjusted-shape-index)) (adjusted-shape-key inner-draws))) 0)
                    (let [replaced-func-map (replace-args func-map [0 [adjusted-shape-key (inc adjusted-shape-index)]])
                          new-state (func loop-state)]
                                               (recur (next evaled-func-maps)
                                                      new-state
                                                      inner-draws
                                                      (conj new-func-maps replaced-func-map)
                                                      (conj all-states-vec new-state)))
                    (recur (next evaled-func-maps)
                           (func loop-state)
                           inner-draws
                           (conj new-func-maps func-map)
                           (conj all-states-vec (func loop-state)))))))

        {:loop-state loop-state, :func-maps new-func-maps, :all-states all-states-vec})))


(defn make-for ([times func-maps] (make-for times func-maps (- (* (count func-maps) times) 1)))
  ([times func-maps all-index] {:func-name :make-for
                            :arguments [times func-maps]
                            :func  (fn [canvas-state]
                                       (loop [state canvas-state
                                              loops times
                                              inner-func-maps func-maps
                                              all-states-outer []]
                                         (if (<= loops 0)
                                           (all-states-outer all-index)
                                           (let [{:keys [loop-state func-maps all-states]} (for-state-maker inner-func-maps state all-states-outer)]
                                             (recur loop-state (dec loops) func-maps all-states)))))}))



;;State makers only job is to take what its got and make the statement.
;;The func maps provides will be garunteed good...

(defn make-duplicate [selected-node diffX diffY]
  (fn [canvas-state]
    canvas-state))







