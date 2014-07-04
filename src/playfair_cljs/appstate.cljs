(ns playfair-cljs.appstate
  (:require [playfair-cljs.shapes :as shapes]))

;;Specify snap with [shape node]
;;Call it snap with :snap.

;;Make sure snapping works
;;Get snapping text right (Text should probably change to accomadate snapping.)

(def app-state (atom {:steps [(shapes/make-draw :circle [80 90] [90 90])
                              (shapes/make-for 30 [(partial shapes/make-move :circle0 10 10)
                                                   (partial shapes/make-draw :rect [:center-node :circle0] [10 10])
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

                      :key-state :select}))

