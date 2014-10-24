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
playfair_cljs.components.scrubbable.global_event_handler = (function global_event_handler(app_state,p__10060){var map__10067 = p__10060;var map__10067__$1 = ((cljs.core.seq_QMARK_.call(null,map__10067))?cljs.core.apply.call(null,cljs.core.hash_map,map__10067):map__10067);var e_data = map__10067__$1;var e = cljs.core.get.call(null,map__10067__$1,new cljs.core.Keyword(null,"e","e",1013904343));var e_type = cljs.core.get.call(null,map__10067__$1,new cljs.core.Keyword(null,"e-type","e-type",3950582548));if(cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777)))
{var vec__10068 = new cljs.core.Keyword(null,"active-steps","active-steps",1350401298).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state));var a_s1 = cljs.core.nth.call(null,vec__10068,0,null);var a_s2 = cljs.core.nth.call(null,vec__10068,1,null);return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gui_state){return cljs.core.assoc.call(null,gui_state,new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null),new cljs.core.Keyword(null,"scrub-step-key","scrub-step-key",1385563438),new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data),new cljs.core.Keyword(null,"scrub-start-val","scrub-start-val",516386954),cljs.core.get_in.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state),((typeof a_s2 === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),a_s2,new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),a_s2.call(null,0),new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),a_s2.call(null,2),new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data)], null))));
}));
} else
{if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856));if(and__3429__auto__)
{return new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.gui_state));
} else
{return and__3429__auto__;
}
})()))
{return om.core.transact_BANG_.call(null,app_state,(function (p__10069){var map__10070 = p__10069;var map__10070__$1 = ((cljs.core.seq_QMARK_.call(null,map__10070))?cljs.core.apply.call(null,cljs.core.hash_map,map__10070):map__10070);var app_state__$1 = map__10070__$1;var active_steps = cljs.core.get.call(null,map__10070__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__10070__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var map__10071 = cljs.core.deref.call(null,playfair_cljs.appstate.gui_state);var map__10071__$1 = ((cljs.core.seq_QMARK_.call(null,map__10071))?cljs.core.apply.call(null,cljs.core.hash_map,map__10071):map__10071);var scrub_start_val = cljs.core.get.call(null,map__10071__$1,new cljs.core.Keyword(null,"scrub-start-val","scrub-start-val",516386954));var scrub_step_key = cljs.core.get.call(null,map__10071__$1,new cljs.core.Keyword(null,"scrub-step-key","scrub-step-key",1385563438));var scrub_click_pos = cljs.core.get.call(null,map__10071__$1,new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371));var sensitivity = 1;var vec__10072 = active_steps;var as_1 = cljs.core.nth.call(null,vec__10072,0,null);var as_2 = cljs.core.nth.call(null,vec__10072,1,null);var scrubbed_step = cljs.core.get_in.call(null,steps,((typeof as_2 === 'number')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [as_2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [as_2.call(null,0),new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),as_2.call(null,2)], null)));var decimal = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"step-name","step-name",2312562782).cljs$core$IFn$_invoke$arity$1(scrubbed_step),new cljs.core.Keyword(null,"rotate","rotate",4383690957)))?.01:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"step-name","step-name",2312562782).cljs$core$IFn$_invoke$arity$1(scrubbed_step),new cljs.core.Keyword(null,"scale","scale",1123155132)))?.01:((new cljs.core.Keyword(null,"else","else",1017020587))?1:null)));return cljs.core.assoc_in.call(null,app_state__$1,((typeof active_steps.call(null,1) === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),as_2,scrub_step_key], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),as_2.call(null,0),new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),as_2.call(null,2),scrub_step_key], null)),(scrub_start_val + (cljs.core.quot.call(null,(e.clientX - scrub_click_pos.call(null,0)),sensitivity) * decimal)));
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
playfair_cljs.components.scrubbable.global_events = (function global_events(app,owner){if(typeof playfair_cljs.components.scrubbable.t10119 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.scrubbable.t10119 = (function (owner,app,global_events,meta10120){
this.owner = owner;
this.app = app;
this.global_events = global_events;
this.meta10120 = meta10120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.scrubbable.t10119.cljs$lang$type = true;
playfair_cljs.components.scrubbable.t10119.cljs$lang$ctorStr = "playfair-cljs.components.scrubbable/t10119";
playfair_cljs.components.scrubbable.t10119.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.scrubbable/t10119");
});
playfair_cljs.components.scrubbable.t10119.prototype.om$core$IRender$ = true;
playfair_cljs.components.scrubbable.t10119.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,"");
});
playfair_cljs.components.scrubbable.t10119.prototype.om$core$IWillMount$ = true;
playfair_cljs.components.scrubbable.t10119.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var keychan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"globalchan","globalchan",4450549991));var c__6080__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6081__auto__ = (function (){var switch__6010__auto__ = (function (state_10144){var state_val_10145 = (state_10144[1]);if((state_val_10145 === 1))
{var state_10144__$1 = state_10144;var statearr_10146_10165 = state_10144__$1;(statearr_10146_10165[2] = null);
(statearr_10146_10165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 2))
{var state_10144__$1 = state_10144;if(true)
{var statearr_10147_10166 = state_10144__$1;(statearr_10147_10166[1] = 4);
} else
{var statearr_10148_10167 = state_10144__$1;(statearr_10148_10167[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 3))
{var inst_10142 = (state_10144[2]);var state_10144__$1 = state_10144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10144__$1,inst_10142);
} else
{if((state_val_10145 === 4))
{var inst_10125 = [keychan];var inst_10126 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10125,null));var state_10144__$1 = state_10144;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10144__$1,7,inst_10126);
} else
{if((state_val_10145 === 5))
{var state_10144__$1 = state_10144;var statearr_10149_10168 = state_10144__$1;(statearr_10149_10168[2] = null);
(statearr_10149_10168[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 6))
{var inst_10140 = (state_10144[2]);var state_10144__$1 = state_10144;var statearr_10150_10169 = state_10144__$1;(statearr_10150_10169[2] = inst_10140);
(statearr_10150_10169[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 7))
{var inst_10128 = (state_10144[2]);var inst_10129 = cljs.core.nth.call(null,inst_10128,0,null);var inst_10130 = cljs.core.nth.call(null,inst_10128,1,null);var inst_10131 = cljs.core._EQ_.call(null,inst_10130,keychan);var state_10144__$1 = (function (){var statearr_10151 = state_10144;(statearr_10151[7] = inst_10129);
return statearr_10151;
})();if(inst_10131)
{var statearr_10152_10170 = state_10144__$1;(statearr_10152_10170[1] = 8);
} else
{var statearr_10153_10171 = state_10144__$1;(statearr_10153_10171[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 8))
{var inst_10129 = (state_10144[7]);var inst_10133 = playfair_cljs.components.scrubbable.global_event_handler.call(null,self__.app,inst_10129);var state_10144__$1 = state_10144;var statearr_10154_10172 = state_10144__$1;(statearr_10154_10172[2] = inst_10133);
(statearr_10154_10172[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 9))
{var state_10144__$1 = state_10144;var statearr_10155_10173 = state_10144__$1;(statearr_10155_10173[2] = null);
(statearr_10155_10173[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 10))
{var inst_10136 = (state_10144[2]);var state_10144__$1 = (function (){var statearr_10156 = state_10144;(statearr_10156[8] = inst_10136);
return statearr_10156;
})();var statearr_10157_10174 = state_10144__$1;(statearr_10157_10174[2] = null);
(statearr_10157_10174[1] = 2);
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
var state_machine__6011__auto____0 = (function (){var statearr_10161 = [null,null,null,null,null,null,null,null,null];(statearr_10161[0] = state_machine__6011__auto__);
(statearr_10161[1] = 1);
return statearr_10161;
});
var state_machine__6011__auto____1 = (function (state_10144){while(true){
var ret_value__6012__auto__ = (function (){try{while(true){
var result__6013__auto__ = switch__6010__auto__.call(null,state_10144);if(cljs.core.keyword_identical_QMARK_.call(null,result__6013__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6013__auto__;
}
break;
}
}catch (e10162){if((e10162 instanceof Object))
{var ex__6014__auto__ = e10162;var statearr_10163_10175 = state_10144;(statearr_10163_10175[5] = ex__6014__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10144);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10162;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6012__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10176 = state_10144;
state_10144 = G__10176;
continue;
}
} else
{return ret_value__6012__auto__;
}
break;
}
});
state_machine__6011__auto__ = function(state_10144){
switch(arguments.length){
case 0:
return state_machine__6011__auto____0.call(this);
case 1:
return state_machine__6011__auto____1.call(this,state_10144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6011__auto____0;
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6011__auto____1;
return state_machine__6011__auto__;
})()
;})(switch__6010__auto__))
})();var state__6082__auto__ = (function (){var statearr_10164 = f__6081__auto__.call(null);(statearr_10164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6080__auto__);
return statearr_10164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6082__auto__);
}));
return c__6080__auto__;
});
playfair_cljs.components.scrubbable.t10119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10121){var self__ = this;
var _10121__$1 = this;return self__.meta10120;
});
playfair_cljs.components.scrubbable.t10119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10121,meta10120__$1){var self__ = this;
var _10121__$1 = this;return (new playfair_cljs.components.scrubbable.t10119(self__.owner,self__.app,self__.global_events,meta10120__$1));
});
playfair_cljs.components.scrubbable.__GT_t10119 = (function __GT_t10119(owner__$1,app__$1,global_events__$1,meta10120){return (new playfair_cljs.components.scrubbable.t10119(owner__$1,app__$1,global_events__$1,meta10120));
});
}
return (new playfair_cljs.components.scrubbable.t10119(owner,app,global_events,null));
});
playfair_cljs.components.scrubbable.make_span = (function make_span(p__10179){var map__10181 = p__10179;var map__10181__$1 = ((cljs.core.seq_QMARK_.call(null,map__10181))?cljs.core.apply.call(null,cljs.core.hash_map,map__10181):map__10181);var step_key = cljs.core.get.call(null,map__10181__$1,new cljs.core.Keyword(null,"step-key","step-key",2441267024));var value = cljs.core.get.call(null,map__10181__$1,new cljs.core.Keyword(null,"value","value",1125876963));return React.DOM.span({"onMouseUp": (function (p1__10178_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.global_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154),new cljs.core.Keyword(null,"e","e",1013904343),p1__10178_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"global","global",4065851157)], null));
}), "onMouseDown": (function (p1__10177_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.global_chan,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777),new cljs.core.Keyword(null,"e","e",1013904343),p1__10177_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"global","global",4065851157),new cljs.core.Keyword(null,"step-key","step-key",2441267024),step_key], null));
}), "className": "scrubber"},value);
});
playfair_cljs.components.scrubbable.make_scrub_text = (function make_scrub_text(step){return cljs.core.reduce.call(null,(function (accum,s){if(cljs.core.map_QMARK_.call(null,s))
{return cljs.core.conj.call(null,accum,playfair_cljs.components.scrubbable.make_span.call(null,s));
} else
{return cljs.core.conj.call(null,accum,React.DOM.span(null,s));
}
}),cljs.core.PersistentVector.EMPTY,playfair_cljs.csCompiler.get_text.call(null,cljs.core.assoc.call(null,step,new cljs.core.Keyword(null,"scrub?","scrub?",4401196898),true)));
});
playfair_cljs.components.scrubbable.get_scrub_step = (function get_scrub_step(p__10182,steps){var vec__10184 = p__10182;var a_s1 = cljs.core.nth.call(null,vec__10184,0,null);var a_s2 = cljs.core.nth.call(null,vec__10184,1,null);if(typeof a_s2 === 'number')
{return steps.call(null,a_s2);
} else
{return new cljs.core.Keyword(null,"for-steps","for-steps",1009839253).cljs$core$IFn$_invoke$arity$1(steps.call(null,a_s2.call(null,0))).call(null,a_s2.call(null,2));
}
});
playfair_cljs.components.scrubbable.make_scrub = (function make_scrub(p__10185,owner){var map__10190 = p__10185;var map__10190__$1 = ((cljs.core.seq_QMARK_.call(null,map__10190))?cljs.core.apply.call(null,cljs.core.hash_map,map__10190):map__10190);var as = map__10190__$1;var active_steps = cljs.core.get.call(null,map__10190__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__10190__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));if(typeof playfair_cljs.components.scrubbable.t10191 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.scrubbable.t10191 = (function (steps,active_steps,as,map__10190,owner,p__10185,make_scrub,meta10192){
this.steps = steps;
this.active_steps = active_steps;
this.as = as;
this.map__10190 = map__10190;
this.owner = owner;
this.p__10185 = p__10185;
this.make_scrub = make_scrub;
this.meta10192 = meta10192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.scrubbable.t10191.cljs$lang$type = true;
playfair_cljs.components.scrubbable.t10191.cljs$lang$ctorStr = "playfair-cljs.components.scrubbable/t10191";
playfair_cljs.components.scrubbable.t10191.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.scrubbable/t10191");
});
playfair_cljs.components.scrubbable.t10191.prototype.om$core$IRender$ = true;
playfair_cljs.components.scrubbable.t10191.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.steps) > 0))
{return cljs.core.apply.call(null,om.dom.p,{"className": "center"},playfair_cljs.components.scrubbable.make_scrub_text.call(null,playfair_cljs.components.scrubbable.get_scrub_step.call(null,self__.active_steps,self__.steps)));
} else
{return React.DOM.p({"className": "center"},"Welcome to playfair, get drawing!");
}
});
playfair_cljs.components.scrubbable.t10191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10193){var self__ = this;
var _10193__$1 = this;return self__.meta10192;
});
playfair_cljs.components.scrubbable.t10191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10193,meta10192__$1){var self__ = this;
var _10193__$1 = this;return (new playfair_cljs.components.scrubbable.t10191(self__.steps,self__.active_steps,self__.as,self__.map__10190,self__.owner,self__.p__10185,self__.make_scrub,meta10192__$1));
});
playfair_cljs.components.scrubbable.__GT_t10191 = (function __GT_t10191(steps__$1,active_steps__$1,as__$1,map__10190__$2,owner__$1,p__10185__$1,make_scrub__$1,meta10192){return (new playfair_cljs.components.scrubbable.t10191(steps__$1,active_steps__$1,as__$1,map__10190__$2,owner__$1,p__10185__$1,make_scrub__$1,meta10192));
});
}
return (new playfair_cljs.components.scrubbable.t10191(steps,active_steps,as,map__10190__$1,owner,p__10185,make_scrub,null));
});

//# sourceMappingURL=scrubbable.js.map