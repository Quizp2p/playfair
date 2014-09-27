// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.step');
goog.require('cljs.core');
goog.require('playfair_cljs.components.canvas');
goog.require('playfair_cljs.asCompiler');
goog.require('om.dom');
goog.require('om.core');
goog.require('playfair_cljs.appstate');
goog.require('om.core');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.asCompiler');
goog.require('playfair_cljs.components.canvas');
goog.require('om.dom');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.appstate');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.debug');
playfair_cljs.components.step.render_step = (function render_step(step,owner){if(typeof playfair_cljs.components.step.t11258 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.step.t11258 = (function (owner,step,render_step,meta11259){
this.owner = owner;
this.step = step;
this.render_step = render_step;
this.meta11259 = meta11259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.step.t11258.cljs$lang$type = true;
playfair_cljs.components.step.t11258.cljs$lang$ctorStr = "playfair-cljs.components.step/t11258";
playfair_cljs.components.step.t11258.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.step/t11258");
});
playfair_cljs.components.step.t11258.prototype.om$core$IRender$ = true;
playfair_cljs.components.step.t11258.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.map_QMARK_.call(null,self__.step))
{var map__11261 = self__.step;var map__11261__$1 = ((cljs.core.seq_QMARK_.call(null,map__11261))?cljs.core.apply.call(null,cljs.core.hash_map,map__11261):map__11261);var active_QMARK_ = cljs.core.get.call(null,map__11261__$1,new cljs.core.Keyword(null,"active?","active?",4147074411));var text = cljs.core.get.call(null,map__11261__$1,new cljs.core.Keyword(null,"text","text",1017460895));var steps = cljs.core.get.call(null,map__11261__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));return React.DOM.div({"className": "largeContainer"},React.DOM.p({"className": "specialText"},text),cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,self__.render_step,steps)));
} else
{var vec__11262 = self__.step;var cs = cljs.core.nth.call(null,vec__11262,0,null);var text = cljs.core.nth.call(null,vec__11262,1,null);var active_QMARK_ = cljs.core.nth.call(null,vec__11262,2,null);return React.DOM.div({"className": (cljs.core.truth_(active_QMARK_)?"activeStepContainer":"stepContainer")},React.DOM.p({"className": "stepText"},text),cljs.core.apply.call(null,om.dom.svg,{"className": "stepSVG", "viewBox": [cljs.core.str("0 0 "),cljs.core.str(playfair_cljs.shapeData.canvas_size.call(null,0)),cljs.core.str(" "),cljs.core.str(playfair_cljs.shapeData.canvas_size.call(null,1))].join(''), "height": 100, "width": 100},om.core.build_all.call(null,playfair_cljs.components.canvas.render_canvas,playfair_cljs.asCompiler.make_renderable.call(null,cs))));
}
});
playfair_cljs.components.step.t11258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11260){var self__ = this;
var _11260__$1 = this;return self__.meta11259;
});
playfair_cljs.components.step.t11258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11260,meta11259__$1){var self__ = this;
var _11260__$1 = this;return (new playfair_cljs.components.step.t11258(self__.owner,self__.step,self__.render_step,meta11259__$1));
});
playfair_cljs.components.step.__GT_t11258 = (function __GT_t11258(owner__$1,step__$1,render_step__$1,meta11259){return (new playfair_cljs.components.step.t11258(owner__$1,step__$1,render_step__$1,meta11259));
});
}
return (new playfair_cljs.components.step.t11258(owner,step,render_step,null));
});

//# sourceMappingURL=step.js.map