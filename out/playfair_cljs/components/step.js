// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.step');
goog.require('cljs.core');
goog.require('playfair_cljs.components.canvas');
goog.require('om.dom');
goog.require('om.core');
goog.require('playfair_cljs.appstate');
goog.require('om.core');
goog.require('playfair_cljs.components.canvas');
goog.require('om.dom');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.appstate');
goog.require('playfair_cljs.debug');
playfair_cljs.components.step.render_step = (function render_step(step_num,owner){if(typeof playfair_cljs.components.step.t11006 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.step.t11006 = (function (owner,step_num,render_step,meta11007){
this.owner = owner;
this.step_num = step_num;
this.render_step = render_step;
this.meta11007 = meta11007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.step.t11006.cljs$lang$type = true;
playfair_cljs.components.step.t11006.cljs$lang$ctorStr = "playfair-cljs.components.step/t11006";
playfair_cljs.components.step.t11006.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.step/t11006");
});
playfair_cljs.components.step.t11006.prototype.om$core$IRender$ = true;
playfair_cljs.components.step.t11006.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var canvas_state = playfair_cljs.components.canvas.get_canvas_state.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state),(self__.step_num + 1));return React.DOM.div({"className": "stepContainer"},React.DOM.p({"className": "stepText"},cljs.core.last.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(canvas_state))),cljs.core.apply.call(null,om.dom.svg,{"className": "stepSVG", "viewBox": [cljs.core.str("0 0 "),cljs.core.str(playfair_cljs.components.canvas.canvas_size.call(null,0)),cljs.core.str(" "),cljs.core.str(playfair_cljs.components.canvas.canvas_size.call(null,1))].join(''), "height": 100, "width": 100},om.core.build_all.call(null,playfair_cljs.components.canvas.render_canvas,cljs.core.vec.call(null,cljs.core.dissoc.call(null,canvas_state,new cljs.core.Keyword(null,"text","text",1017460895))))));
});
playfair_cljs.components.step.t11006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11008){var self__ = this;
var _11008__$1 = this;return self__.meta11007;
});
playfair_cljs.components.step.t11006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11008,meta11007__$1){var self__ = this;
var _11008__$1 = this;return (new playfair_cljs.components.step.t11006(self__.owner,self__.step_num,self__.render_step,meta11007__$1));
});
playfair_cljs.components.step.__GT_t11006 = (function __GT_t11006(owner__$1,step_num__$1,render_step__$1,meta11007){return (new playfair_cljs.components.step.t11006(owner__$1,step_num__$1,render_step__$1,meta11007));
});
}
return (new playfair_cljs.components.step.t11006(owner,step_num,render_step,null));
});

//# sourceMappingURL=step.js.map