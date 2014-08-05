// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.core');
goog.require('cljs.core');
goog.require('playfair_cljs.components.step');
goog.require('playfair_cljs.components.canvas');
goog.require('playfair_cljs.components.step');
goog.require('playfair_cljs.shapes');
goog.require('om.dom');
goog.require('om.core');
goog.require('playfair_cljs.appstate');
goog.require('om.core');
goog.require('playfair_cljs.shapes');
goog.require('playfair_cljs.components.commands');
goog.require('playfair_cljs.components.canvas');
goog.require('om.dom');
goog.require('playfair_cljs.appstate');
goog.require('playfair_cljs.components.commands');
cljs.core.enable_console_print_BANG_.call(null);
playfair_cljs.core.render_app = (function render_app(app_state,owner){if(typeof playfair_cljs.core.t6817 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.core.t6817 = (function (owner,app_state,render_app,meta6818){
this.owner = owner;
this.app_state = app_state;
this.render_app = render_app;
this.meta6818 = meta6818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.core.t6817.cljs$lang$type = true;
playfair_cljs.core.t6817.cljs$lang$ctorStr = "playfair-cljs.core/t6817";
playfair_cljs.core.t6817.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.core/t6817");
});
playfair_cljs.core.t6817.prototype.om$core$IRender$ = true;
playfair_cljs.core.t6817.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.div({"className": "screens"},React.DOM.svg({"height": 100, "width": 100}),React.DOM.button({"id": "screenButton"},"+")),React.DOM.div({"className": "steps"},cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,playfair_cljs.components.step.render_step,cljs.core.vec.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(self__.app_state))))))),React.DOM.div({"className": "canvas"},React.DOM.div({"id": "mainCanvas"},cljs.core.apply.call(null,om.dom.svg,{"height": playfair_cljs.shapes.canvas_size.call(null,1), "width": playfair_cljs.shapes.canvas_size.call(null,0)},om.core.build_all.call(null,playfair_cljs.components.canvas.render_canvas,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.canvas.get_canvas_state.call(null,self__.app_state)))))),React.DOM.div({"className": "commands"},cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,playfair_cljs.components.commands.render_commands,new cljs.core.Keyword(null,"commands","commands",4706336250).cljs$core$IFn$_invoke$arity$1(self__.app_state)))));
});
playfair_cljs.core.t6817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6819){var self__ = this;
var _6819__$1 = this;return self__.meta6818;
});
playfair_cljs.core.t6817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6819,meta6818__$1){var self__ = this;
var _6819__$1 = this;return (new playfair_cljs.core.t6817(self__.owner,self__.app_state,self__.render_app,meta6818__$1));
});
playfair_cljs.core.__GT_t6817 = (function __GT_t6817(owner__$1,app_state__$1,render_app__$1,meta6818){return (new playfair_cljs.core.t6817(owner__$1,app_state__$1,render_app__$1,meta6818));
});
}
return (new playfair_cljs.core.t6817(owner,app_state,render_app,null));
});
om.core.root.call(null,playfair_cljs.core.render_app,playfair_cljs.appstate.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));
playfair_cljs.components.canvas.state_maker.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)));
new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.canvas.get_canvas_state.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state)));
new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.canvas.get_canvas_state.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state)));

//# sourceMappingURL=core.js.map