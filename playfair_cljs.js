goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../playfair_cljs/debug.js", ['playfair_cljs.debug'], ['cljs.core']);
goog.addDependency("../playfair_cljs/math.js", ['playfair_cljs.math'], ['cljs.core', 'playfair_cljs.debug']);
goog.addDependency("../playfair_cljs/shapes.js", ['playfair_cljs.shapes'], ['playfair_cljs.math', 'cljs.core', 'playfair_cljs.debug']);
goog.addDependency("../om/dom.js", ['om.dom'], ['cljs.core']);
goog.addDependency("../om/core.js", ['om.core'], ['cljs.core', 'om.dom']);
goog.addDependency("../playfair_cljs/components/canvas.js", ['playfair_cljs.components.canvas'], ['cljs.core', 'om.core', 'playfair_cljs.shapes', 'om.dom', 'playfair_cljs.debug']);
goog.addDependency("../playfair_cljs/appstate.js", ['playfair_cljs.appstate'], ['cljs.core', 'playfair_cljs.shapes']);
goog.addDependency("../playfair_cljs/components/step.js", ['playfair_cljs.components.step'], ['playfair_cljs.components.canvas', 'cljs.core', 'om.core', 'om.dom', 'playfair_cljs.debug', 'playfair_cljs.appstate']);
goog.addDependency("../playfair_cljs/components/commands.js", ['playfair_cljs.components.commands'], ['cljs.core', 'om.core', 'om.dom']);
goog.addDependency("../playfair_cljs/core.js", ['playfair_cljs.core'], ['playfair_cljs.components.canvas', 'cljs.core', 'playfair_cljs.components.step', 'om.core', 'om.dom', 'playfair_cljs.appstate', 'playfair_cljs.components.commands']);