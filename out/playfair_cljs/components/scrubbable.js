// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.scrubbable');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('playfair_cljs.asCompiler');
goog.require('playfair_cljs.csCompiler');
goog.require('playfair_cljs.channels');
goog.require('om.dom');
goog.require('om.core');
goog.require('playfair_cljs.appstate');
goog.require('om.core');
goog.require('playfair_cljs.asCompiler');
goog.require('playfair_cljs.csCompiler');
goog.require('om.dom');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.appstate');
goog.require('cljs.core.async');
goog.require('playfair_cljs.channels');
goog.require('playfair_cljs.debug');
playfair_cljs.components.scrubbable.global_event_handler = (function global_event_handler(app_state,p__9999){var map__10005 = p__9999;var map__10005__$1 = ((cljs.core.seq_QMARK_.call(null,map__10005))?cljs.core.apply.call(null,cljs.core.hash_map,map__10005):map__10005);var e_data = map__10005__$1;var e = cljs.core.get.call(null,map__10005__$1,new cljs.core.Keyword(null,"e","e",1013904343));var e_type = cljs.core.get.call(null,map__10005__$1,new cljs.core.Keyword(null,"e-type","e-type",3950582548));if(cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777)))
{var vec__10006 = new cljs.core.Keyword(null,"active-steps","active-steps",1350401298).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state));var a_s1 = cljs.core.nth.call(null,vec__10006,0,null);var a_s2 = cljs.core.nth.call(null,vec__10006,1,null);return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gui_state){return cljs.core.assoc.call(null,gui_state,new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null),new cljs.core.Keyword(null,"scrub-step-key","scrub-step-key",1385563438),new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data),new cljs.core.Keyword(null,"scrub-start-val","scrub-start-val",516386954),cljs.core.get_in.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state),((typeof a_s2 === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),a_s2,new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),a_s2.call(null,0),new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),a_s2.call(null,2),new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data)], null))));
}));
} else
{if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856));if(and__3429__auto__)
{return new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.gui_state));
} else
{return and__3429__auto__;
}
})()))
{return om.core.transact_BANG_.call(null,app_state,(function (p__10007){var map__10008 = p__10007;var map__10008__$1 = ((cljs.core.seq_QMARK_.call(null,map__10008))?cljs.core.apply.call(null,cljs.core.hash_map,map__10008):map__10008);var app_state__$1 = map__10008__$1;var active_steps = cljs.core.get.call(null,map__10008__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__10008__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var map__10009 = cljs.core.deref.call(null,playfair_cljs.appstate.gui_state);var map__10009__$1 = ((cljs.core.seq_QMARK_.call(null,map__10009))?cljs.core.apply.call(null,cljs.core.hash_map,map__10009):map__10009);var scrub_start_val = cljs.core.get.call(null,map__10009__$1,new cljs.core.Keyword(null,"scrub-start-val","scrub-start-val",516386954));var scrub_step_key = cljs.core.get.call(null,map__10009__$1,new cljs.core.Keyword(null,"scrub-step-key","scrub-step-key",1385563438));var scrub_click_pos = cljs.core.get.call(null,map__10009__$1,new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371));var sensitivity = 1;return cljs.core.assoc_in.call(null,app_state__$1,((typeof active_steps.call(null,1) === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),active_steps.call(null,1),scrub_step_key], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),active_steps.call(null,1).call(null,0),new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),active_steps.call(null,1).call(null,2),scrub_step_key], null)),(scrub_start_val + cljs.core.quot.call(null,(e.clientX - scrub_click_pos.call(null,0)),sensitivity)));
}));
} else
{if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154));if(and__3429__auto__)
{return new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.gui_state));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gui_state){return cljs.core.assoc.call(null,gui_state,new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371),null);
}));
} else
{return null;
}
}
}
});
playfair_cljs.components.scrubbable.global_events = (function global_events(app,owner){if(typeof playfair_cljs.components.scrubbable.t10056 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.scrubbable.t10056 = (function (owner,app,global_events,meta10057){
this.owner = owner;
this.app = app;
this.global_events = global_events;
this.meta10057 = meta10057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.scrubbable.t10056.cljs$lang$type = true;
playfair_cljs.components.scrubbable.t10056.cljs$lang$ctorStr = "playfair-cljs.components.scrubbable/t10056";
playfair_cljs.components.scrubbable.t10056.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.scrubbable/t10056");
});
playfair_cljs.components.scrubbable.t10056.prototype.om$core$IRender$ = true;
playfair_cljs.components.scrubbable.t10056.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,"");
});
playfair_cljs.components.scrubbable.t10056.prototype.om$core$IWillMount$ = true;
playfair_cljs.components.scrubbable.t10056.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var keychan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"globalchan","globalchan",4450549991));var c__6080__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6081__auto__ = (function (){var switch__6010__auto__ = (function (state_10081){var state_val_10082 = (state_10081[1]);if((state_val_10082 === 1))
{var state_10081__$1 = state_10081;var statearr_10083_10102 = state_10081__$1;(statearr_10083_10102[2] = null);
(statearr_10083_10102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10082 === 2))
{var state_10081__$1 = state_10081;if(true)
{var statearr_10084_10103 = state_10081__$1;(statearr_10084_10103[1] = 4);
} else
{var statearr_10085_10104 = state_10081__$1;(statearr_10085_10104[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10082 === 3))
{var inst_10079 = (state_10081[2]);var state_10081__$1 = state_10081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10081__$1,inst_10079);
} else
{if((state_val_10082 === 4))
{var inst_10062 = [keychan];var inst_10063 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10062,null));var state_10081__$1 = state_10081;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10081__$1,7,inst_10063);
} else
{if((state_val_10082 === 5))
{var state_10081__$1 = state_10081;var statearr_10086_10105 = state_10081__$1;(statearr_10086_10105[2] = null);
(statearr_10086_10105[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10082 === 6))
{var inst_10077 = (state_10081[2]);var state_10081__$1 = state_10081;var statearr_10087_10106 = state_10081__$1;(statearr_10087_10106[2] = inst_10077);
(statearr_10087_10106[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10082 === 7))
{var inst_10065 = (state_10081[2]);var inst_10066 = cljs.core.nth.call(null,inst_10065,0,null);var inst_10067 = cljs.core.nth.call(null,inst_10065,1,null);var inst_10068 = cljs.core._EQ_.call(null,inst_10067,keychan);var state_10081__$1 = (function (){var statearr_10088 = state_10081;(statearr_10088[7] = inst_10066);
return statearr_10088;
})();if(inst_10068)
{var statearr_10089_10107 = state_10081__$1;(statearr_10089_10107[1] = 8);
} else
{var statearr_10090_10108 = state_10081__$1;(statearr_10090_10108[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10082 === 8))
{var inst_10066 = (state_10081[7]);var inst_10070 = playfair_cljs.components.scrubbable.global_event_handler.call(null,self__.app,inst_10066);var state_10081__$1 = state_10081;var statearr_10091_10109 = state_10081__$1;(statearr_10091_10109[2] = inst_10070);
(statearr_10091_10109[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10082 === 9))
{var state_10081__$1 = state_10081;var statearr_10092_10110 = state_10081__$1;(statearr_10092_10110[2] = null);
(statearr_10092_10110[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10082 === 10))
{var inst_10073 = (state_10081[2]);var state_10081__$1 = (function (){var statearr_10093 = state_10081;(statearr_10093[8] = inst_10073);
return statearr_10093;
})();var statearr_10094_10111 = state_10081__$1;(statearr_10094_10111[2] = null);
(statearr_10094_10111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6010__auto__){
return (function() {
var state_machine__6011__auto__ = null;
var state_machine__6011__auto____0 = (function (){var statearr_10098 = [null,null,null,null,null,null,null,null,null];(statearr_10098[0] = state_machine__6011__auto__);
(statearr_10098[1] = 1);
return statearr_10098;
});
var state_machine__6011__auto____1 = (function (state_10081){while(true){
var ret_value__6012__auto__ = (function (){try{while(true){
var result__6013__auto__ = switch__6010__auto__.call(null,state_10081);if(cljs.core.keyword_identical_QMARK_.call(null,result__6013__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6013__auto__;
}
break;
}
}catch (e10099){if((e10099 instanceof Object))
{var ex__6014__auto__ = e10099;var statearr_10100_10112 = state_10081;(statearr_10100_10112[5] = ex__6014__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10081);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6012__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10113 = state_10081;
state_10081 = G__10113;
continue;
}
} else
{return ret_value__6012__auto__;
}
break;
}
});
state_machine__6011__auto__ = function(state_10081){
switch(arguments.length){
case 0:
return state_machine__6011__auto____0.call(this);
case 1:
return state_machine__6011__auto____1.call(this,state_10081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6011__auto____0;
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6011__auto____1;
return state_machine__6011__auto__;
})()
;})(switch__6010__auto__))
})();var state__6082__auto__ = (function (){var statearr_10101 = f__6081__auto__.call(null);(statearr_10101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6080__auto__);
return statearr_10101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6082__auto__);
}));
return c__6080__auto__;
});
playfair_cljs.components.scrubbable.t10056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10058){var self__ = this;
var _10058__$1 = this;return self__.meta10057;
});
playfair_cljs.components.scrubbable.t10056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10058,meta10057__$1){var self__ = this;
var _10058__$1 = this;return (new playfair_cljs.components.scrubbable.t10056(self__.owner,self__.app,self__.global_events,meta10057__$1));
});
playfair_cljs.components.scrubbable.__GT_t10056 = (function __GT_t10056(owner__$1,app__$1,global_events__$1,meta10057){return (new playfair_cljs.components.scrubbable.t10056(owner__$1,app__$1,global_events__$1,meta10057));
});
}
return (new playfair_cljs.components.scrubbable.t10056(owner,app,global_events,null));
});
playfair_cljs.components.scrubbable.make_span = (function make_span(p__10116){var map__10118 = p__10116;var map__10118__$1 = ((cljs.core.seq_QMARK_.call(null,map__10118))?cljs.core.apply.call(null,cljs.core.hash_map,map__10118):map__10118);var step_key = cljs.core.get.call(null,map__10118__$1,new cljs.core.Keyword(null,"step-key","step-key",2441267024));var value = cljs.core.get.call(null,map__10118__$1,new cljs.core.Keyword(null,"value","value",1125876963));return React.DOM.span({"onMouseUp": (function (p1__10115_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.global_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154),new cljs.core.Keyword(null,"e","e",1013904343),p1__10115_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"global","global",4065851157)], null));
}), "onMouseDown": (function (p1__10114_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.global_chan,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777),new cljs.core.Keyword(null,"e","e",1013904343),p1__10114_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"global","global",4065851157),new cljs.core.Keyword(null,"step-key","step-key",2441267024),step_key], null));
}), "className": "scrubber"},value);
});
playfair_cljs.components.scrubbable.make_scrub_text = (function make_scrub_text(step){return cljs.core.reduce.call(null,(function (accum,s){if(cljs.core.map_QMARK_.call(null,s))
{return cljs.core.conj.call(null,accum,playfair_cljs.components.scrubbable.make_span.call(null,s));
} else
{return cljs.core.conj.call(null,accum,React.DOM.span(null,s));
}
}),cljs.core.PersistentVector.EMPTY,playfair_cljs.csCompiler.get_text.call(null,cljs.core.assoc.call(null,step,new cljs.core.Keyword(null,"scrub?","scrub?",4401196898),true)));
});
playfair_cljs.components.scrubbable.get_scrub_step = (function get_scrub_step(p__10119,steps){var vec__10121 = p__10119;var a_s1 = cljs.core.nth.call(null,vec__10121,0,null);var a_s2 = cljs.core.nth.call(null,vec__10121,1,null);if(typeof a_s2 === 'number')
{return steps.call(null,a_s2);
} else
{return new cljs.core.Keyword(null,"for-steps","for-steps",1009839253).cljs$core$IFn$_invoke$arity$1(steps.call(null,a_s2.call(null,0))).call(null,a_s2.call(null,2));
}
});
playfair_cljs.components.scrubbable.make_scrub = (function make_scrub(p__10122,owner){var map__10127 = p__10122;var map__10127__$1 = ((cljs.core.seq_QMARK_.call(null,map__10127))?cljs.core.apply.call(null,cljs.core.hash_map,map__10127):map__10127);var as = map__10127__$1;var active_steps = cljs.core.get.call(null,map__10127__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__10127__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));if(typeof playfair_cljs.components.scrubbable.t10128 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.scrubbable.t10128 = (function (steps,active_steps,as,map__10127,owner,p__10122,make_scrub,meta10129){
this.steps = steps;
this.active_steps = active_steps;
this.as = as;
this.map__10127 = map__10127;
this.owner = owner;
this.p__10122 = p__10122;
this.make_scrub = make_scrub;
this.meta10129 = meta10129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.scrubbable.t10128.cljs$lang$type = true;
playfair_cljs.components.scrubbable.t10128.cljs$lang$ctorStr = "playfair-cljs.components.scrubbable/t10128";
playfair_cljs.components.scrubbable.t10128.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.scrubbable/t10128");
});
playfair_cljs.components.scrubbable.t10128.prototype.om$core$IRender$ = true;
playfair_cljs.components.scrubbable.t10128.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.steps) > 0))
{return cljs.core.apply.call(null,om.dom.p,{"className": "center"},playfair_cljs.components.scrubbable.make_scrub_text.call(null,playfair_cljs.components.scrubbable.get_scrub_step.call(null,self__.active_steps,self__.steps)));
} else
{return React.DOM.p({"className": "center"},"Welcome to playfair, get drawing!");
}
});
playfair_cljs.components.scrubbable.t10128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10130){var self__ = this;
var _10130__$1 = this;return self__.meta10129;
});
playfair_cljs.components.scrubbable.t10128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10130,meta10129__$1){var self__ = this;
var _10130__$1 = this;return (new playfair_cljs.components.scrubbable.t10128(self__.steps,self__.active_steps,self__.as,self__.map__10127,self__.owner,self__.p__10122,self__.make_scrub,meta10129__$1));
});
playfair_cljs.components.scrubbable.__GT_t10128 = (function __GT_t10128(steps__$1,active_steps__$1,as__$1,map__10127__$2,owner__$1,p__10122__$1,make_scrub__$1,meta10129){return (new playfair_cljs.components.scrubbable.t10128(steps__$1,active_steps__$1,as__$1,map__10127__$2,owner__$1,p__10122__$1,make_scrub__$1,meta10129));
});
}
return (new playfair_cljs.components.scrubbable.t10128(steps,active_steps,as,map__10127__$1,owner,p__10122,make_scrub,null));
});

//# sourceMappingURL=scrubbable.js.map