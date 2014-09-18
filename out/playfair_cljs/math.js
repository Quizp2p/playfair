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
playfair_cljs.math.atan = (function atan(tan_val){return Math.atan(tan_val);
});
playfair_cljs.math.PI = Math.PI;
playfair_cljs.math.distance_formula = (function distance_formula(p__9684,p__9685){var vec__9688 = p__9684;var x1 = cljs.core.nth.call(null,vec__9688,0,null);var y1 = cljs.core.nth.call(null,vec__9688,1,null);var vec__9689 = p__9685;var x2 = cljs.core.nth.call(null,vec__9689,0,null);var y2 = cljs.core.nth.call(null,vec__9689,1,null);return playfair_cljs.math.sqrt.call(null,(playfair_cljs.math.pow.call(null,(x2 - x1),2) + playfair_cljs.math.pow.call(null,(y2 - y1),2)));
});
playfair_cljs.math.midpoint_formula = (function midpoint_formula(p__9690,p__9691){var vec__9694 = p__9690;var x1 = cljs.core.nth.call(null,vec__9694,0,null);var y1 = cljs.core.nth.call(null,vec__9694,1,null);var vec__9695 = p__9691;var x2 = cljs.core.nth.call(null,vec__9695,0,null);var y2 = cljs.core.nth.call(null,vec__9695,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x1 + x2) / 2),((y1 + y2) / 2)], null);
});
playfair_cljs.math.map_midpoint_formula = (function map_midpoint_formula(p1,p2){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1) + new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p2)) / 2),new cljs.core.Keyword(null,"y","y",1013904363),((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1) + new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p2)) / 2)], null);
});
playfair_cljs.math.rad__GT__deg = (function rad__GT__deg(rad){return (57.2957795 * rad);
});
playfair_cljs.math.abs = (function abs(numb){if((numb < 0))
{return (- numb);
} else
{return numb;
}
});

//# sourceMappingURL=math.js.map