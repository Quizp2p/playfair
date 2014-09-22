// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('playfair_cljs.components.step');
goog.require('playfair_cljs.components.canvas');
goog.require('playfair_cljs.math');
goog.require('playfair_cljs.components.keypress');
goog.require('playfair_cljs.asCompiler');
goog.require('playfair_cljs.components.step');
goog.require('goog.events');
goog.require('playfair_cljs.csCompiler');
goog.require('playfair_cljs.general');
goog.require('playfair_cljs.channels');
goog.require('playfair_cljs.components.data');
goog.require('om.dom');
goog.require('playfair_cljs.components.canvasEvents');
goog.require('om.core');
goog.require('playfair_cljs.appstate');
goog.require('playfair_cljs.components.canvasEvents');
goog.require('om.core');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.components.keypress');
goog.require('playfair_cljs.asCompiler');
goog.require('playfair_cljs.csCompiler');
goog.require('playfair_cljs.components.commands');
goog.require('playfair_cljs.components.data');
goog.require('playfair_cljs.general');
goog.require('playfair_cljs.components.canvas');
goog.require('om.dom');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.appstate');
goog.require('playfair_cljs.math');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('playfair_cljs.channels');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.components.commands');
goog.require('playfair_cljs.debug');
cljs.core.enable_console_print_BANG_.call(null);
playfair_cljs.core.add_shape_events = (function add_shape_events(r_shapes){return cljs.core.map.call(null,(function (shape){return cljs.core.assoc_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visual-attrs","visual-attrs",1512932167),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442)], null),(function (e){return null;
}));
}),r_shapes);
});
playfair_cljs.core.render_app = (function render_app(steps,owner){playfair_cljs.debug.log.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(steps));
if(typeof playfair_cljs.core.t11654 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.core.t11654 = (function (owner,steps,render_app,meta11655){
this.owner = owner;
this.steps = steps;
this.render_app = render_app;
this.meta11655 = meta11655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.core.t11654.cljs$lang$type = true;
playfair_cljs.core.t11654.cljs$lang$ctorStr = "playfair-cljs.core/t11654";
playfair_cljs.core.t11654.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.core/t11654");
});
playfair_cljs.core.t11654.prototype.om$core$IRender$ = true;
playfair_cljs.core.t11654.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var app_state = playfair_cljs.asCompiler.steps_to_app_state.call(null,self__.steps);playfair_cljs.debug.log.call(null,self__.steps);
return React.DOM.div(null,React.DOM.div({"className": "screens"},React.DOM.svg({"height": 100, "width": 100}),React.DOM.button({"id": "screenButton"},"+")),React.DOM.div({"className": "steps"},React.DOM.p({"className": "center"},"Data"),cljs.core.apply.call(null,om.dom.table,null,om.core.build_all.call(null,playfair_cljs.components.data.render_data,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(self__.steps))),React.DOM.p({"className": "center"},"Steps"),cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,playfair_cljs.components.step.render_step,app_state))),React.DOM.div({"className": "canvas"},React.DOM.div({"id": "mainCanvas"},React.DOM.p({"className": "center"},playfair_cljs.asCompiler.get_last_state.call(null,cljs.core.last.call(null,app_state),new cljs.core.Keyword(null,"text","text",1017460895))),(function (){var last_state = playfair_cljs.asCompiler.get_last_state.call(null,cljs.core.last.call(null,app_state));var second_last_state = playfair_cljs.asCompiler.get_last_state.call(null,cljs.core.last.call(null,playfair_cljs.general.safe_pop.call(null,app_state)));return cljs.core.apply.call(null,om.dom.svg,{"id": "bigCanvas", "height": playfair_cljs.shapeData.canvas_size.call(null,1), "width": playfair_cljs.shapeData.canvas_size.call(null,0), "onMouseUp": (function (p1__11650_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.canvas_chan,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154),new cljs.core.Keyword(null,"e","e",1013904343),p1__11650_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"second-last-state","second-last-state",4343999749),second_last_state], null));
}), "onMouseDown": (function (p1__11649_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.canvas_chan,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777),new cljs.core.Keyword(null,"e","e",1013904343),p1__11649_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"second-last-state","second-last-state",4343999749),second_last_state], null));
}), "onMouseMove": (function (p1__11648_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.canvas_chan,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856),new cljs.core.Keyword(null,"e","e",1013904343),p1__11648_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"second-last-state","second-last-state",4343999749),second_last_state], null));
})},om.core.build_all.call(null,playfair_cljs.components.canvas.render_canvas,playfair_cljs.csCompiler.check_nodes.call(null,last_state,new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(self__.steps))));
})())),React.DOM.div({"className": "commands"},cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,playfair_cljs.components.commands.render_commands,cljs.core.map.call(null,(function (key_vec){return cljs.core.conj.call(null,key_vec,new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(self__.steps));
}),playfair_cljs.components.commands.command_list)))),React.DOM.div(null,om.core.build.call(null,playfair_cljs.components.keypress.key_listener_component,self__.steps)),React.DOM.div(null,om.core.build.call(null,playfair_cljs.components.canvasEvents.canvas_events,self__.steps)));
});
playfair_cljs.core.t11654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11656){var self__ = this;
var _11656__$1 = this;return self__.meta11655;
});
playfair_cljs.core.t11654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11656,meta11655__$1){var self__ = this;
var _11656__$1 = this;return (new playfair_cljs.core.t11654(self__.owner,self__.steps,self__.render_app,meta11655__$1));
});
playfair_cljs.core.__GT_t11654 = (function __GT_t11654(owner__$1,steps__$1,render_app__$1,meta11655){return (new playfair_cljs.core.t11654(owner__$1,steps__$1,render_app__$1,meta11655));
});
}
return (new playfair_cljs.core.t11654(owner,steps,render_app,null));
});
om.core.root.call(null,playfair_cljs.core.render_app,playfair_cljs.appstate.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keychan","keychan",4493860259),playfair_cljs.components.keypress.key_chan,new cljs.core.Keyword(null,"canchan","canchan",1564122772),playfair_cljs.channels.canvas_chan], null)], null));
playfair_cljs.core.big_c_pos = (function (){var rect = document.getElementById("bigCanvas").getBoundingClientRect();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect.left,rect.top], null);
})();
goog.events.listen(document,"keydown",(function (p1__11657_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.components.keypress.key_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",4493897459),p1__11657_SHARP_], null));
}));
goog.events.listen(document,"keyup",(function (p1__11658_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.components.keypress.key_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),p1__11658_SHARP_], null));
}));

//# sourceMappingURL=core.js.map