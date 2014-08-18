(ns that-new
  (:require [playfair-cljs.debug :as debug]
            [playfair-cljs.math :as math]
            [cljs.reader :as reader]
            [playfair-cljs.shapes :as shapes]))


;; Pre-Appstate
;; Draw: {:step-name :draw, :shape :shape-key, :x 23, :y 2, :diffX 9, :diffY 5}
;; If there is snapping - {:from-node :node, :from-shape [:shape-key index], :to-shape [...], :to-node :node}
;; Additional Options:
;; :guide true,
;; :centered true,
;; :horizontally true,
;; :vertically true

;; Move {}

[(shapes/make-draw :circle [:middle-center-node :canvas] [:top-center-node :canvas] :guide {:centered true})
                              (shapes/make-scale [:circle 0] :top-node .86)
                              (shapes/make-draw :circle [:middle-left-node :canvas] [16 0] :guide {:centered true})
                              (shapes/make-draw :line [:center-node [:circle 0]] [:right-node [:circle 0]])
                              (shapes/make-for 4 [(shapes/make-rotate [:line 0] :first-point 0.02)
                                                   (shapes/make-draw :line [:last-point [:line 0]] [:right-node [:circle 0]] {} {:vertically true})
                                                   (shapes/make-move [:line 1] :last-point [:center-node [:circle 1]])
                                                   (shapes/make-move [:circle 1] 6 0)
                              ])
                      ]




(defn make-draw [shape-key [x y] [diffX diffY] options-vec]
  (conj {:step-name :draw,
         :shape shape-key}
        (zipmap (if (keyword? x)
                  [:from-node :from-shape]
                  [:x :y]) [x y])
        (zipmap (if (keyword? diffX)
                  [:to-node :to-shape]
                  [:diffX :diffY]) [diffX diffY])
        (zipmap options-vec (repeat (count options-vec) true))))


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
  {:shape-lookup shape-lookup,
   :node node,
   :rotate-val rotate-val})


(defn make-move [shape-lookup diffX diffY]
  (conj {:shape-lookup shape-lookup}
        (zipmap (if (keyword? diffX)
                    [:from-node]
                    [:diffX]) [diffX])
        (if (vector? diffY)
            {:to-node (diffY 0) :to-shape (diffY 1)}
            {:diffY diffY})))

(defn conj-in [x lookup-vec added-val]
  (assoc-in x lookup-vec (conj (get-in x lookup-vec)
                               added-val)))

(conj-in cs [:rect] {:tommy "tom"})

(defn make-draw-cs [canvas-state {:keys [shape-lookup from-node from-shape x y to-node to-shape diffX diffY] :as draw-map}]
              (let [{:keys [x y]} (if from-node
                                  (let [[from-shape-key from-shape-index] from-shape]
                                    (get-in canvas-state [from-shape-key from-shape-index :position-attrs from-node]))
                                  {:x x :y y})
                    {:keys [diffX diffY]} (if to-node
                                    (let [[to-shape-key to-shape-index] to-shape
                                          to-point (get-in canvas-state [to-shape-key to-shape-index :position-attrs to-node])]
                                      {:x (if (:horizontally draw-map)
                                            0
                                            (- (:x to-point) x)),
                                       :y (if (:vertically draw-map)
                                            0
                                            (- (:y to-point) y))}))
                    pos-attrs (if (:centered draw-map)
                                (vector-to-nodes [(+ x  diffX) (+ y diffY)] [(- x diffX) (- y diffY)])
                                (vector-to-nodes [x y] [(+ x diffX) (+ y diffY)]))]

                (conj-in canvas-state [shape-lookup] {:shape-name  shape-key,
                                                        :position-attrs pos-attrs,
                                                        :visual-attrs (conj {:fill "#1F1E1D", :className "shape", :stroke "#1F1E1D", :strokeWidth 3}
                                                                            (if (:guide draw-map)
                                                                                (:vis-attrs draw-map)
                                                                                {:className "guide" :stroke "#225E79" :fill "#3BA3D0" :strokeWidth 2}))
                                                        :active (:active draw-map)})))

(def cs {:rect [] :circle []
         :path [] :line []})


;;This is breaking because of canvas.
(make-draw-cs cs (make-draw :circle [:middle-center-node :canvas] [:top-center-node :canvas] [:guide :centered]))



(def pre-app-state [(make-draw :circle [:middle-center-node :canvas] [:top-center-node :canvas] [:guide :centered])
                    (make-scale [:circle 0] :top-node .86)
                    (make-draw :circle [:middle-left-node :canvas] [16 0] [:guide :centered])
                    (make-draw :line [:center-node [:circle 0]] [:right-node [:circle 0]])
                    (make-for 4 [(make-rotate [:line 0] :first-point 0.02)
                                 (make-draw :line [:last-point [:line 0]] [:right-node [:circle 0]] [:vertically])
                                 (make-move [:line 1] :last-point [:center-node [:circle 1]])
                                 (make-move [:circle 1] 6 0)
                                ])])
