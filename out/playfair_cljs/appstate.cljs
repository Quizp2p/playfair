(ns playfair-cljs.appstate
  (:require [playfair-cljs.shapes :as shapes]))

;;Specify snap with [shape node]
;;Call it snap with :snap.

;;Make sure snapping works
;;Get snapping text right (Text should probably change to accomadate snapping.)


;;What does make draw do to lookup a snap?

(def app-state (atom {:steps [(shapes/make-draw :circle [:middle-center-node :canvas] [:top-center-node :canvas] :guide {:centered true})
                              (shapes/make-scale [:circle 0] :top-node .86)
                              (shapes/make-draw :circle [:middle-left-node :canvas] [16 0] :guide {:centered true})
                              (shapes/make-draw :line [:center-node [:circle 0]] [:right-node [:circle 0]])
                              (shapes/make-for 100 [(shapes/make-rotate [:line 0] :first-point 0.02)
                                                   (shapes/make-draw :line [:last-point [:line 0]] [:right-node [:circle 0]] {} {:vertically true})
                                                   (shapes/make-move [:line 1] :last-point [:center-node [:circle 1]])
                                                   (shapes/make-move [:circle 1] 6 0)
                              ])
                      ]

                      :commands [{:commandName "line" :keypress "x" :className "regular"}
                                 {:commandName "path" :keypress "a" :className "regular"}
                                 {:commandName "rect" :keypress "r" :className "regular"}
                                 {:commandName "circle" :keypress "c" :className "regular"}
                                 {:commandName "magnet" :keypress "u" :className "regular"}
                                 {:commandName "picture" :keypress "p" :className "regular"}
                                 {:commandName "move" :keypress "v" :className "regular"}
                                 {:commandName "scale" :keypress "s" :className "regular"}
                                 {:commandName "rotate" :keypress "e" :className "regular"}
                                 {:commandName "duplicate" :keypress "d" :className "regular"}
                                 {:commandName "loop" :keypress "l" :className "regular"}
                                 {:commandName "if" :keypress "i" :className "regular"}
                                 {:commandName "guide" :keypress "g" :className "regular"}
                                 {:commandName "clip" :keypress "k" :className "regular"}]

                      :key-state :select

                      :global {}

                      :data {}}))

