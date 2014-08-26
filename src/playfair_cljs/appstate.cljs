(ns playfair-cljs.appstate
  (:require [playfair-cljs.shapes :as shapes]))

(def app-state (atom {:active-steps [0 0]

                      :steps [(shapes/make-draw :line [:middle-center-node :canvas] [:middle-right-node :canvas] [:horizontally :guide])
                              (shapes/make-scale [:line 0] :last-point .553)
                              (shapes/make-path-start :last-point [:line 0] [] {:fill "#FD3C69"})
                              (shapes/make-for 5 [(shapes/make-rotate [:line 0] :first-point :points)
                                                  (shapes/make-path-extend 0 "L" :last-point [:line 0])])]

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
                                 {:commandName "if" :keypress "i" :className "keypress"}
                                 {:commandName "guide" :keypress "g" :className "regular"}
                                 {:commandName "clip" :keypress "k" :className "regular"}]

                      :key-state :select

                      :data {:points .2}}))
