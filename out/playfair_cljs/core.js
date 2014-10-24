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
goog.require('playfair_cljs.components.scrubbable');
goog.require('om.dom');
goog.require('playfair_cljs.components.canvasEvents');
goog.require('om.core');
goog.require('playfair_cljs.appstate');
goog.require('playfair_cljs.components.canvasEvents');
goog.require('om.core');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.components.scrubbable');
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
playfair_cljs.core.render_app = (function render_app(app_state,owner){if(typeof playfair_cljs.core.t9921 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.core.t9921 = (function (owner,app_state,render_app,meta9922){
this.owner = owner;
this.app_state = app_state;
this.render_app = render_app;
this.meta9922 = meta9922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.core.t9921.cljs$lang$type = true;
playfair_cljs.core.t9921.cljs$lang$ctorStr = "playfair-cljs.core/t9921";
playfair_cljs.core.t9921.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.core/t9921");
});
playfair_cljs.core.t9921.prototype.om$core$IRender$ = true;
playfair_cljs.core.t9921.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var steps = playfair_cljs.asCompiler.app_state_to_steps.call(null,self__.app_state);return React.DOM.div({"className": "proper-height"},React.DOM.div({"className": "container-around"},React.DOM.div({"className": "left-panel"},React.DOM.p({"className": "center"},"Steps"),cljs.core.apply.call(null,om.dom.div,{"className": "steps"},om.core.build_all.call(null,playfair_cljs.components.step.render_step,steps))),React.DOM.div(null,React.DOM.div({"id": "mainCanvas"},om.core.build.call(null,playfair_cljs.components.scrubbable.make_scrub,self__.app_state),(function (){var last_state = playfair_cljs.asCompiler.get_last_state.call(null,cljs.core.last.call(null,steps));var second_last_state = playfair_cljs.asCompiler.get_last_state.call(null,cljs.core.last.call(null,playfair_cljs.general.safe_pop.call(null,steps)));return cljs.core.apply.call(null,om.dom.svg,{"id": "bigCanvas", "height": playfair_cljs.shapeData.canvas_size.call(null,1), "width": playfair_cljs.shapeData.canvas_size.call(null,0), "onMouseUp": (function (p1__9917_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.canvas_chan,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154),new cljs.core.Keyword(null,"e","e",1013904343),p1__9917_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"second-last-state","second-last-state",4343999749),second_last_state], null));
}), "onMouseDown": (function (p1__9916_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.canvas_chan,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777),new cljs.core.Keyword(null,"e","e",1013904343),p1__9916_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"second-last-state","second-last-state",4343999749),second_last_state], null));
}), "onMouseMove": (function (p1__9915_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.canvas_chan,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856),new cljs.core.Keyword(null,"e","e",1013904343),p1__9915_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"second-last-state","second-last-state",4343999749),second_last_state], null));
})},om.core.build_all.call(null,playfair_cljs.components.canvas.render_canvas,playfair_cljs.csCompiler.check_nodes.call(null,last_state,new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(self__.app_state))));
})())),React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,playfair_cljs.components.commands.render_command_section,cljs.core.map.call(null,(function (key_vec){return cljs.core.conj.call(null,key_vec,new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(self__.app_state));
}),playfair_cljs.components.commands.command_list))))),React.DOM.div(null,om.core.build.call(null,playfair_cljs.components.keypress.key_listener_component,self__.app_state)),React.DOM.div(null,om.core.build.call(null,playfair_cljs.components.canvasEvents.canvas_events,self__.app_state)),React.DOM.div(null,om.core.build.call(null,playfair_cljs.components.scrubbable.global_events,self__.app_state)));
});
playfair_cljs.core.t9921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9923){var self__ = this;
var _9923__$1 = this;return self__.meta9922;
});
playfair_cljs.core.t9921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9923,meta9922__$1){var self__ = this;
var _9923__$1 = this;return (new playfair_cljs.core.t9921(self__.owner,self__.app_state,self__.render_app,meta9922__$1));
});
playfair_cljs.core.__GT_t9921 = (function __GT_t9921(owner__$1,app_state__$1,render_app__$1,meta9922){return (new playfair_cljs.core.t9921(owner__$1,app_state__$1,render_app__$1,meta9922));
});
}
return (new playfair_cljs.core.t9921(owner,app_state,render_app,null));
});
om.core.root.call(null,playfair_cljs.core.render_app,playfair_cljs.appstate.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keychan","keychan",4493860259),playfair_cljs.components.keypress.key_chan,new cljs.core.Keyword(null,"canchan","canchan",1564122772),playfair_cljs.channels.canvas_chan,new cljs.core.Keyword(null,"globalchan","globalchan",4450549991),playfair_cljs.channels.global_chan], null)], null));
playfair_cljs.core.big_c_pos = (function (){var rect = document.getElementById("bigCanvas").getBoundingClientRect();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect.left,rect.top], null);
})();
goog.events.listen(document,"keydown",(function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,playfair_cljs.components.keypress.key_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",4493897459),e], null));
}));
goog.events.listen(document,"keyup",(function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,playfair_cljs.components.keypress.key_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyup","keyup",1115849900),e], null));
}));
goog.events.listen(document,"mousemove",(function (p1__9924_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.global_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856),new cljs.core.Keyword(null,"e","e",1013904343),p1__9924_SHARP_], null));
}));
goog.events.listen(document,"mouseup",(function (p1__9925_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.global_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154),new cljs.core.Keyword(null,"e","e",1013904343),p1__9925_SHARP_], null));
}));

//# sourceMappingURL=core.js.map