// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.math');
goog.require('cljs.core');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.debug');
playfair_cljs.math.sqrt = (function sqrt(x){return Math.sqrt(x);
});
playfair_cljs.math.pow = (function pow(base,exp){return Math.pow(base,exp);
});
playfair_cljs.math.sin = (function sin(rad){return Math.sin(rad);
});
playfair_cljs.math.round = (function round(numb,dec_places){return (Math.round((numb * playfair_cljs.math.pow.call(null,10,dec_places))) / playfair_cljs.math.pow.call(null,10,dec_places));
});
playfair_cljs.math.cos = (function cos(rad){return Math.cos(rad);
});
playfair_cljs.math.acos = (function acos(cos_val){return Math.acos(cos_val);
});
playfair_cljs.math.asin = (function asin(sin_val){return Math.asin(sin_val);
});
playfair_cljs.math.PI = Math.PI;
playfair_cljs.math.distance_formula = (function distance_formula(p__11139,p__11140){var vec__11143 = p__11139;var x1 = cljs.core.nth.call(null,vec__11143,0,null);var y1 = cljs.core.nth.call(null,vec__11143,1,null);var vec__11144 = p__11140;var x2 = cljs.core.nth.call(null,vec__11144,0,null);var y2 = cljs.core.nth.call(null,vec__11144,1,null);return playfair_cljs.math.sqrt.call(null,(playfair_cljs.math.pow.call(null,(x2 - x1),2) + playfair_cljs.math.pow.call(null,(y2 - y1),2)));
});
playfair_cljs.math.midpoint_formula = (function midpoint_formula(p__11145,p__11146){var vec__11149 = p__11145;var x1 = cljs.core.nth.call(null,vec__11149,0,null);var y1 = cljs.core.nth.call(null,vec__11149,1,null);var vec__11150 = p__11146;var x2 = cljs.core.nth.call(null,vec__11150,0,null);var y2 = cljs.core.nth.call(null,vec__11150,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x1 + x2) / 2),((y1 + y2) / 2)], null);
});

//# sourceMappingURL=math.js.map