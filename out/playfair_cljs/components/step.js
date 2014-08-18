// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.step');
goog.require('cljs.core');
goog.require('playfair_cljs.components.canvas');
goog.require('playfair_cljs.shapes');
goog.require('om.dom');
goog.require('om.core');
goog.require('playfair_cljs.appstate');
goog.require('om.core');
goog.require('playfair_cljs.shapes');
goog.require('playfair_cljs.components.canvas');
goog.require('om.dom');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.appstate');
goog.require('playfair_cljs.debug');
playfair_cljs.components.step.render_step = (function render_step(step,owner){if(typeof playfair_cljs.components.step.t50352 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.step.t50352 = (function (owner,step,render_step,meta50353){
this.owner = owner;
this.step = step;
this.render_step = render_step;
this.meta50353 = meta50353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.step.t50352.cljs$lang$type = true;
playfair_cljs.components.step.t50352.cljs$lang$ctorStr = "playfair-cljs.components.step/t50352";
playfair_cljs.components.step.t50352.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.step/t50352");
});
playfair_cljs.components.step.t50352.prototype.om$core$IRender$ = true;
playfair_cljs.components.step.t50352.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.map_QMARK_.call(null,self__.step))
{var map__50355 = self__.step;var map__50355__$1 = ((cljs.core.seq_QMARK_.call(null,map__50355))?cljs.core.apply.call(null,cljs.core.hash_map,map__50355):map__50355);var text = cljs.core.get.call(null,map__50355__$1,new cljs.core.Keyword(null,"text","text",1017460895));var steps = cljs.core.get.call(null,map__50355__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));return React.DOM.div({"className": "largeContainer"},React.DOM.p({"className": "specialText"},text),cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,self__.render_step,steps)));
} else
{var vec__50356 = self__.step;var cs = cljs.core.nth.call(null,vec__50356,0,null);var text = cljs.core.nth.call(null,vec__50356,1,null);var active_QMARK_ = cljs.core.nth.call(null,vec__50356,2,null);return React.DOM.div({"className": (cljs.core.truth_(active_QMARK_)?"activeStepContainer":"stepContainer")},React.DOM.p({"className": "stepText"},text),cljs.core.apply.call(null,om.dom.svg,{"className": "stepSVG", "viewBox": [cljs.core.str("0 0 "),cljs.core.str(playfair_cljs.shapes.canvas_size.call(null,0)),cljs.core.str(" "),cljs.core.str(playfair_cljs.shapes.canvas_size.call(null,1))].join(''), "height": 100, "width": 100},om.core.build_all.call(null,playfair_cljs.components.canvas.render_canvas,playfair_cljs.shapes.make_renderable.call(null,cs))));
}
});
playfair_cljs.components.step.t50352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50354){var self__ = this;
var _50354__$1 = this;return self__.meta50353;
});
playfair_cljs.components.step.t50352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50354,meta50353__$1){var self__ = this;
var _50354__$1 = this;return (new playfair_cljs.components.step.t50352(self__.owner,self__.step,self__.render_step,meta50353__$1));
});
playfair_cljs.components.step.__GT_t50352 = (function __GT_t50352(owner__$1,step__$1,render_step__$1,meta50353){return (new playfair_cljs.components.step.t50352(owner__$1,step__$1,render_step__$1,meta50353));
});
}
return (new playfair_cljs.components.step.t50352(owner,step,render_step,null));
});

//# sourceMappingURL=step.js.map