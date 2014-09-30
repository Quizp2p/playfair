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
playfair_cljs.components.scrubbable.global_event_handler = (function global_event_handler(app_state,p__14566){var map__14572 = p__14566;var map__14572__$1 = ((cljs.core.seq_QMARK_.call(null,map__14572))?cljs.core.apply.call(null,cljs.core.hash_map,map__14572):map__14572);var e_data = map__14572__$1;var e = cljs.core.get.call(null,map__14572__$1,new cljs.core.Keyword(null,"e","e",1013904343));var e_type = cljs.core.get.call(null,map__14572__$1,new cljs.core.Keyword(null,"e-type","e-type",3950582548));if(cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777)))
{var vec__14573 = new cljs.core.Keyword(null,"active-steps","active-steps",1350401298).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state));var a_s1 = cljs.core.nth.call(null,vec__14573,0,null);var a_s2 = cljs.core.nth.call(null,vec__14573,1,null);return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gui_state){return cljs.core.assoc.call(null,gui_state,new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null),new cljs.core.Keyword(null,"scrub-step-key","scrub-step-key",1385563438),new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data),new cljs.core.Keyword(null,"scrub-start-val","scrub-start-val",516386954),cljs.core.get_in.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state),((typeof a_s2 === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),a_s2,new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),a_s2.call(null,0),new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),a_s2.call(null,2),new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data)], null))));
}));
} else
{if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856));if(and__3429__auto__)
{return new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.gui_state));
} else
{return and__3429__auto__;
}
})()))
{return om.core.transact_BANG_.call(null,app_state,(function (p__14574){var map__14575 = p__14574;var map__14575__$1 = ((cljs.core.seq_QMARK_.call(null,map__14575))?cljs.core.apply.call(null,cljs.core.hash_map,map__14575):map__14575);var app_state__$1 = map__14575__$1;var active_steps = cljs.core.get.call(null,map__14575__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__14575__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var map__14576 = cljs.core.deref.call(null,playfair_cljs.appstate.gui_state);var map__14576__$1 = ((cljs.core.seq_QMARK_.call(null,map__14576))?cljs.core.apply.call(null,cljs.core.hash_map,map__14576):map__14576);var scrub_start_val = cljs.core.get.call(null,map__14576__$1,new cljs.core.Keyword(null,"scrub-start-val","scrub-start-val",516386954));var scrub_step_key = cljs.core.get.call(null,map__14576__$1,new cljs.core.Keyword(null,"scrub-step-key","scrub-step-key",1385563438));var scrub_click_pos = cljs.core.get.call(null,map__14576__$1,new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371));var sensitivity = 1;return cljs.core.assoc_in.call(null,app_state__$1,((typeof active_steps.call(null,1) === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),active_steps.call(null,1),scrub_step_key], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),active_steps.call(null,1).call(null,0),new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),active_steps.call(null,1).call(null,2),scrub_step_key], null)),(scrub_start_val + cljs.core.quot.call(null,(e.clientX - scrub_click_pos.call(null,0)),sensitivity)));
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
playfair_cljs.components.scrubbable.global_events = (function global_events(app,owner){if(typeof playfair_cljs.components.scrubbable.t14623 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.scrubbable.t14623 = (function (owner,app,global_events,meta14624){
this.owner = owner;
this.app = app;
this.global_events = global_events;
this.meta14624 = meta14624;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.scrubbable.t14623.cljs$lang$type = true;
playfair_cljs.components.scrubbable.t14623.cljs$lang$ctorStr = "playfair-cljs.components.scrubbable/t14623";
playfair_cljs.components.scrubbable.t14623.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.scrubbable/t14623");
});
playfair_cljs.components.scrubbable.t14623.prototype.om$core$IRender$ = true;
playfair_cljs.components.scrubbable.t14623.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,"");
});
playfair_cljs.components.scrubbable.t14623.prototype.om$core$IWillMount$ = true;
playfair_cljs.components.scrubbable.t14623.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var keychan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"globalchan","globalchan",4450549991));var c__6080__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6081__auto__ = (function (){var switch__6010__auto__ = (function (state_14648){var state_val_14649 = (state_14648[1]);if((state_val_14649 === 1))
{var state_14648__$1 = state_14648;var statearr_14650_14669 = state_14648__$1;(statearr_14650_14669[2] = null);
(statearr_14650_14669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 2))
{var state_14648__$1 = state_14648;if(true)
{var statearr_14651_14670 = state_14648__$1;(statearr_14651_14670[1] = 4);
} else
{var statearr_14652_14671 = state_14648__$1;(statearr_14652_14671[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 3))
{var inst_14646 = (state_14648[2]);var state_14648__$1 = state_14648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14648__$1,inst_14646);
} else
{if((state_val_14649 === 4))
{var inst_14629 = [keychan];var inst_14630 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14629,null));var state_14648__$1 = state_14648;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14648__$1,7,inst_14630);
} else
{if((state_val_14649 === 5))
{var state_14648__$1 = state_14648;var statearr_14653_14672 = state_14648__$1;(statearr_14653_14672[2] = null);
(statearr_14653_14672[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 6))
{var inst_14644 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14654_14673 = state_14648__$1;(statearr_14654_14673[2] = inst_14644);
(statearr_14654_14673[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 7))
{var inst_14632 = (state_14648[2]);var inst_14633 = cljs.core.nth.call(null,inst_14632,0,null);var inst_14634 = cljs.core.nth.call(null,inst_14632,1,null);var inst_14635 = cljs.core._EQ_.call(null,inst_14634,keychan);var state_14648__$1 = (function (){var statearr_14655 = state_14648;(statearr_14655[7] = inst_14633);
return statearr_14655;
})();if(inst_14635)
{var statearr_14656_14674 = state_14648__$1;(statearr_14656_14674[1] = 8);
} else
{var statearr_14657_14675 = state_14648__$1;(statearr_14657_14675[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 8))
{var inst_14633 = (state_14648[7]);var inst_14637 = playfair_cljs.components.scrubbable.global_event_handler.call(null,self__.app,inst_14633);var state_14648__$1 = state_14648;var statearr_14658_14676 = state_14648__$1;(statearr_14658_14676[2] = inst_14637);
(statearr_14658_14676[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 9))
{var state_14648__$1 = state_14648;var statearr_14659_14677 = state_14648__$1;(statearr_14659_14677[2] = null);
(statearr_14659_14677[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 10))
{var inst_14640 = (state_14648[2]);var state_14648__$1 = (function (){var statearr_14660 = state_14648;(statearr_14660[8] = inst_14640);
return statearr_14660;
})();var statearr_14661_14678 = state_14648__$1;(statearr_14661_14678[2] = null);
(statearr_14661_14678[1] = 2);
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
var state_machine__6011__auto____0 = (function (){var statearr_14665 = [null,null,null,null,null,null,null,null,null];(statearr_14665[0] = state_machine__6011__auto__);
(statearr_14665[1] = 1);
return statearr_14665;
});
var state_machine__6011__auto____1 = (function (state_14648){while(true){
var ret_value__6012__auto__ = (function (){try{while(true){
var result__6013__auto__ = switch__6010__auto__.call(null,state_14648);if(cljs.core.keyword_identical_QMARK_.call(null,result__6013__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6013__auto__;
}
break;
}
}catch (e14666){if((e14666 instanceof Object))
{var ex__6014__auto__ = e14666;var statearr_14667_14679 = state_14648;(statearr_14667_14679[5] = ex__6014__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14648);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6012__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14680 = state_14648;
state_14648 = G__14680;
continue;
}
} else
{return ret_value__6012__auto__;
}
break;
}
});
state_machine__6011__auto__ = function(state_14648){
switch(arguments.length){
case 0:
return state_machine__6011__auto____0.call(this);
case 1:
return state_machine__6011__auto____1.call(this,state_14648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6011__auto____0;
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6011__auto____1;
return state_machine__6011__auto__;
})()
;})(switch__6010__auto__))
})();var state__6082__auto__ = (function (){var statearr_14668 = f__6081__auto__.call(null);(statearr_14668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6080__auto__);
return statearr_14668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6082__auto__);
}));
return c__6080__auto__;
});
playfair_cljs.components.scrubbable.t14623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14625){var self__ = this;
var _14625__$1 = this;return self__.meta14624;
});
playfair_cljs.components.scrubbable.t14623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14625,meta14624__$1){var self__ = this;
var _14625__$1 = this;return (new playfair_cljs.components.scrubbable.t14623(self__.owner,self__.app,self__.global_events,meta14624__$1));
});
playfair_cljs.components.scrubbable.__GT_t14623 = (function __GT_t14623(owner__$1,app__$1,global_events__$1,meta14624){return (new playfair_cljs.components.scrubbable.t14623(owner__$1,app__$1,global_events__$1,meta14624));
});
}
return (new playfair_cljs.components.scrubbable.t14623(owner,app,global_events,null));
});
playfair_cljs.components.scrubbable.make_span = (function make_span(p__14683){var map__14685 = p__14683;var map__14685__$1 = ((cljs.core.seq_QMARK_.call(null,map__14685))?cljs.core.apply.call(null,cljs.core.hash_map,map__14685):map__14685);var step_key = cljs.core.get.call(null,map__14685__$1,new cljs.core.Keyword(null,"step-key","step-key",2441267024));var value = cljs.core.get.call(null,map__14685__$1,new cljs.core.Keyword(null,"value","value",1125876963));return React.DOM.span({"onMouseUp": (function (p1__14682_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.global_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154),new cljs.core.Keyword(null,"e","e",1013904343),p1__14682_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"global","global",4065851157)], null));
}), "onMouseDown": (function (p1__14681_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.global_chan,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777),new cljs.core.Keyword(null,"e","e",1013904343),p1__14681_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"global","global",4065851157),new cljs.core.Keyword(null,"step-key","step-key",2441267024),step_key], null));
}), "className": "scrubber"},value);
});
playfair_cljs.components.scrubbable.make_scrub_text = (function make_scrub_text(step){return cljs.core.reduce.call(null,(function (accum,s){if(cljs.core.map_QMARK_.call(null,s))
{return cljs.core.conj.call(null,accum,playfair_cljs.components.scrubbable.make_span.call(null,s));
} else
{return cljs.core.conj.call(null,accum,React.DOM.span(null,s));
}
}),cljs.core.PersistentVector.EMPTY,playfair_cljs.csCompiler.get_text.call(null,cljs.core.assoc.call(null,step,new cljs.core.Keyword(null,"scrub?","scrub?",4401196898),true)));
});
playfair_cljs.components.scrubbable.get_scrub_step = (function get_scrub_step(p__14686,steps){var vec__14688 = p__14686;var a_s1 = cljs.core.nth.call(null,vec__14688,0,null);var a_s2 = cljs.core.nth.call(null,vec__14688,1,null);if(typeof a_s2 === 'number')
{return steps.call(null,a_s2);
} else
{return new cljs.core.Keyword(null,"for-steps","for-steps",1009839253).cljs$core$IFn$_invoke$arity$1(steps.call(null,a_s2.call(null,0))).call(null,a_s2.call(null,2));
}
});
playfair_cljs.components.scrubbable.make_scrub = (function make_scrub(p__14689,owner){var map__14694 = p__14689;var map__14694__$1 = ((cljs.core.seq_QMARK_.call(null,map__14694))?cljs.core.apply.call(null,cljs.core.hash_map,map__14694):map__14694);var as = map__14694__$1;var active_steps = cljs.core.get.call(null,map__14694__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__14694__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));if(typeof playfair_cljs.components.scrubbable.t14695 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.scrubbable.t14695 = (function (steps,active_steps,as,map__14694,owner,p__14689,make_scrub,meta14696){
this.steps = steps;
this.active_steps = active_steps;
this.as = as;
this.map__14694 = map__14694;
this.owner = owner;
this.p__14689 = p__14689;
this.make_scrub = make_scrub;
this.meta14696 = meta14696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.scrubbable.t14695.cljs$lang$type = true;
playfair_cljs.components.scrubbable.t14695.cljs$lang$ctorStr = "playfair-cljs.components.scrubbable/t14695";
playfair_cljs.components.scrubbable.t14695.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.scrubbable/t14695");
});
playfair_cljs.components.scrubbable.t14695.prototype.om$core$IRender$ = true;
playfair_cljs.components.scrubbable.t14695.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.steps) > 0))
{return cljs.core.apply.call(null,om.dom.p,{"className": "center"},playfair_cljs.components.scrubbable.make_scrub_text.call(null,playfair_cljs.components.scrubbable.get_scrub_step.call(null,self__.active_steps,self__.steps)));
} else
{return React.DOM.p(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"center"], null),"");
}
});
playfair_cljs.components.scrubbable.t14695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14697){var self__ = this;
var _14697__$1 = this;return self__.meta14696;
});
playfair_cljs.components.scrubbable.t14695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14697,meta14696__$1){var self__ = this;
var _14697__$1 = this;return (new playfair_cljs.components.scrubbable.t14695(self__.steps,self__.active_steps,self__.as,self__.map__14694,self__.owner,self__.p__14689,self__.make_scrub,meta14696__$1));
});
playfair_cljs.components.scrubbable.__GT_t14695 = (function __GT_t14695(steps__$1,active_steps__$1,as__$1,map__14694__$2,owner__$1,p__14689__$1,make_scrub__$1,meta14696){return (new playfair_cljs.components.scrubbable.t14695(steps__$1,active_steps__$1,as__$1,map__14694__$2,owner__$1,p__14689__$1,make_scrub__$1,meta14696));
});
}
return (new playfair_cljs.components.scrubbable.t14695(steps,active_steps,as,map__14694__$1,owner,p__14689,make_scrub,null));
});

//# sourceMappingURL=scrubbable.js.map