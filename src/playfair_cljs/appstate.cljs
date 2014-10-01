(ns playfair-cljs.appstate)


(def app-state (atom {:active-steps [0 0]

                      :step-direction "up"

                      :steps []

                      :key-state :select

                      :data {:under-construction ""}}))


(def gui-state (atom {:mouse-down? false
                      :mouse-down-pos [0 0]
                      :canvas-m-pos [0 0]
                      :scrub-click-pos nil
                      :in-progress? false}))

;;Path extend doesn't do variable lookup for some reason. Because it is not in the dictionart. needs to be able to distinguish between node, and variable lookup.

