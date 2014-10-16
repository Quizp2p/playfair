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
playfair_cljs.components.scrubbable.global_event_handler = (function global_event_handler(app_state,p__12561){var map__12568 = p__12561;var map__12568__$1 = ((cljs.core.seq_QMARK_.call(null,map__12568))?cljs.core.apply.call(null,cljs.core.hash_map,map__12568):map__12568);var e_data = map__12568__$1;var e = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword(null,"e","e",1013904343));var e_type = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword(null,"e-type","e-type",3950582548));if(cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777)))
{var vec__12569 = new cljs.core.Keyword(null,"active-steps","active-steps",1350401298).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state));var a_s1 = cljs.core.nth.call(null,vec__12569,0,null);var a_s2 = cljs.core.nth.call(null,vec__12569,1,null);return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gui_state){return cljs.core.assoc.call(null,gui_state,new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null),new cljs.core.Keyword(null,"scrub-step-key","scrub-step-key",1385563438),new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data),new cljs.core.Keyword(null,"scrub-start-val","scrub-start-val",516386954),cljs.core.get_in.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state),((typeof a_s2 === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),a_s2,new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),a_s2.call(null,0),new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),a_s2.call(null,2),new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data)], null))));
}));
} else
{if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856));if(and__3429__auto__)
{return new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.gui_state));
} else
{return and__3429__auto__;
}
})()))
{return om.core.transact_BANG_.call(null,app_state,(function (p__12570){var map__12571 = p__12570;var map__12571__$1 = ((cljs.core.seq_QMARK_.call(null,map__12571))?cljs.core.apply.call(null,cljs.core.hash_map,map__12571):map__12571);var app_state__$1 = map__12571__$1;var active_steps = cljs.core.get.call(null,map__12571__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__12571__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var map__12572 = cljs.core.deref.call(null,playfair_cljs.appstate.gui_state);var map__12572__$1 = ((cljs.core.seq_QMARK_.call(null,map__12572))?cljs.core.apply.call(null,cljs.core.hash_map,map__12572):map__12572);var scrub_start_val = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"scrub-start-val","scrub-start-val",516386954));var scrub_step_key = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"scrub-step-key","scrub-step-key",1385563438));var scrub_click_pos = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371));var sensitivity = 1;var vec__12573 = active_steps;var as_1 = cljs.core.nth.call(null,vec__12573,0,null);var as_2 = cljs.core.nth.call(null,vec__12573,1,null);var scrubbed_step = cljs.core.get_in.call(null,steps,((typeof as_2 === 'number')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [as_2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [as_2.call(null,0),new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),as_2.call(null,2)], null)));var decimal = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"step-name","step-name",2312562782).cljs$core$IFn$_invoke$arity$1(scrubbed_step),new cljs.core.Keyword(null,"rotate","rotate",4383690957)))?.01:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"step-name","step-name",2312562782).cljs$core$IFn$_invoke$arity$1(scrubbed_step),new cljs.core.Keyword(null,"scale","scale",1123155132)))?.01:((new cljs.core.Keyword(null,"else","else",1017020587))?1:null)));return cljs.core.assoc_in.call(null,app_state__$1,((typeof active_steps.call(null,1) === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),as_2,scrub_step_key], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),as_2.call(null,0),new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),as_2.call(null,2),scrub_step_key], null)),(scrub_start_val + (cljs.core.quot.call(null,(e.clientX - scrub_click_pos.call(null,0)),sensitivity) * decimal)));
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
playfair_cljs.components.scrubbable.global_events = (function global_events(app,owner){if(typeof playfair_cljs.components.scrubbable.t12620 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.scrubbable.t12620 = (function (owner,app,global_events,meta12621){
this.owner = owner;
this.app = app;
this.global_events = global_events;
this.meta12621 = meta12621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.scrubbable.t12620.cljs$lang$type = true;
playfair_cljs.components.scrubbable.t12620.cljs$lang$ctorStr = "playfair-cljs.components.scrubbable/t12620";
playfair_cljs.components.scrubbable.t12620.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.scrubbable/t12620");
});
playfair_cljs.components.scrubbable.t12620.prototype.om$core$IRender$ = true;
playfair_cljs.components.scrubbable.t12620.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,"");
});
playfair_cljs.components.scrubbable.t12620.prototype.om$core$IWillMount$ = true;
playfair_cljs.components.scrubbable.t12620.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var keychan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"globalchan","globalchan",4450549991));var c__6080__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6081__auto__ = (function (){var switch__6010__auto__ = (function (state_12645){var state_val_12646 = (state_12645[1]);if((state_val_12646 === 1))
{var state_12645__$1 = state_12645;var statearr_12647_12666 = state_12645__$1;(statearr_12647_12666[2] = null);
(statearr_12647_12666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 2))
{var state_12645__$1 = state_12645;if(true)
{var statearr_12648_12667 = state_12645__$1;(statearr_12648_12667[1] = 4);
} else
{var statearr_12649_12668 = state_12645__$1;(statearr_12649_12668[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 3))
{var inst_12643 = (state_12645[2]);var state_12645__$1 = state_12645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12645__$1,inst_12643);
} else
{if((state_val_12646 === 4))
{var inst_12626 = [keychan];var inst_12627 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12626,null));var state_12645__$1 = state_12645;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12645__$1,7,inst_12627);
} else
{if((state_val_12646 === 5))
{var state_12645__$1 = state_12645;var statearr_12650_12669 = state_12645__$1;(statearr_12650_12669[2] = null);
(statearr_12650_12669[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 6))
{var inst_12641 = (state_12645[2]);var state_12645__$1 = state_12645;var statearr_12651_12670 = state_12645__$1;(statearr_12651_12670[2] = inst_12641);
(statearr_12651_12670[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 7))
{var inst_12629 = (state_12645[2]);var inst_12630 = cljs.core.nth.call(null,inst_12629,0,null);var inst_12631 = cljs.core.nth.call(null,inst_12629,1,null);var inst_12632 = cljs.core._EQ_.call(null,inst_12631,keychan);var state_12645__$1 = (function (){var statearr_12652 = state_12645;(statearr_12652[7] = inst_12630);
return statearr_12652;
})();if(inst_12632)
{var statearr_12653_12671 = state_12645__$1;(statearr_12653_12671[1] = 8);
} else
{var statearr_12654_12672 = state_12645__$1;(statearr_12654_12672[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 8))
{var inst_12630 = (state_12645[7]);var inst_12634 = playfair_cljs.components.scrubbable.global_event_handler.call(null,self__.app,inst_12630);var state_12645__$1 = state_12645;var statearr_12655_12673 = state_12645__$1;(statearr_12655_12673[2] = inst_12634);
(statearr_12655_12673[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 9))
{var state_12645__$1 = state_12645;var statearr_12656_12674 = state_12645__$1;(statearr_12656_12674[2] = null);
(statearr_12656_12674[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 10))
{var inst_12637 = (state_12645[2]);var state_12645__$1 = (function (){var statearr_12657 = state_12645;(statearr_12657[8] = inst_12637);
return statearr_12657;
})();var statearr_12658_12675 = state_12645__$1;(statearr_12658_12675[2] = null);
(statearr_12658_12675[1] = 2);
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
var state_machine__6011__auto____0 = (function (){var statearr_12662 = [null,null,null,null,null,null,null,null,null];(statearr_12662[0] = state_machine__6011__auto__);
(statearr_12662[1] = 1);
return statearr_12662;
});
var state_machine__6011__auto____1 = (function (state_12645){while(true){
var ret_value__6012__auto__ = (function (){try{while(true){
var result__6013__auto__ = switch__6010__auto__.call(null,state_12645);if(cljs.core.keyword_identical_QMARK_.call(null,result__6013__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6013__auto__;
}
break;
}
}catch (e12663){if((e12663 instanceof Object))
{var ex__6014__auto__ = e12663;var statearr_12664_12676 = state_12645;(statearr_12664_12676[5] = ex__6014__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12645);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6012__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12677 = state_12645;
state_12645 = G__12677;
continue;
}
} else
{return ret_value__6012__auto__;
}
break;
}
});
state_machine__6011__auto__ = function(state_12645){
switch(arguments.length){
case 0:
return state_machine__6011__auto____0.call(this);
case 1:
return state_machine__6011__auto____1.call(this,state_12645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6011__auto____0;
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6011__auto____1;
return state_machine__6011__auto__;
})()
;})(switch__6010__auto__))
})();var state__6082__auto__ = (function (){var statearr_12665 = f__6081__auto__.call(null);(statearr_12665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6080__auto__);
return statearr_12665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6082__auto__);
}));
return c__6080__auto__;
});
playfair_cljs.components.scrubbable.t12620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12622){var self__ = this;
var _12622__$1 = this;return self__.meta12621;
});
playfair_cljs.components.scrubbable.t12620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12622,meta12621__$1){var self__ = this;
var _12622__$1 = this;return (new playfair_cljs.components.scrubbable.t12620(self__.owner,self__.app,self__.global_events,meta12621__$1));
});
playfair_cljs.components.scrubbable.__GT_t12620 = (function __GT_t12620(owner__$1,app__$1,global_events__$1,meta12621){return (new playfair_cljs.components.scrubbable.t12620(owner__$1,app__$1,global_events__$1,meta12621));
});
}
return (new playfair_cljs.components.scrubbable.t12620(owner,app,global_events,null));
});
playfair_cljs.components.scrubbable.make_span = (function make_span(p__12680){var map__12682 = p__12680;var map__12682__$1 = ((cljs.core.seq_QMARK_.call(null,map__12682))?cljs.core.apply.call(null,cljs.core.hash_map,map__12682):map__12682);var step_key = cljs.core.get.call(null,map__12682__$1,new cljs.core.Keyword(null,"step-key","step-key",2441267024));var value = cljs.core.get.call(null,map__12682__$1,new cljs.core.Keyword(null,"value","value",1125876963));return React.DOM.span({"onMouseUp": (function (p1__12679_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.global_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154),new cljs.core.Keyword(null,"e","e",1013904343),p1__12679_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"global","global",4065851157)], null));
}), "onMouseDown": (function (p1__12678_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.global_chan,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777),new cljs.core.Keyword(null,"e","e",1013904343),p1__12678_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"global","global",4065851157),new cljs.core.Keyword(null,"step-key","step-key",2441267024),step_key], null));
}), "className": "scrubber"},value);
});
playfair_cljs.components.scrubbable.make_scrub_text = (function make_scrub_text(step){return cljs.core.reduce.call(null,(function (accum,s){if(cljs.core.map_QMARK_.call(null,s))
{return cljs.core.conj.call(null,accum,playfair_cljs.components.scrubbable.make_span.call(null,s));
} else
{return cljs.core.conj.call(null,accum,React.DOM.span(null,s));
}
}),cljs.core.PersistentVector.EMPTY,playfair_cljs.csCompiler.get_text.call(null,cljs.core.assoc.call(null,step,new cljs.core.Keyword(null,"scrub?","scrub?",4401196898),true)));
});
playfair_cljs.components.scrubbable.get_scrub_step = (function get_scrub_step(p__12683,steps){var vec__12685 = p__12683;var a_s1 = cljs.core.nth.call(null,vec__12685,0,null);var a_s2 = cljs.core.nth.call(null,vec__12685,1,null);if(typeof a_s2 === 'number')
{return steps.call(null,a_s2);
} else
{return new cljs.core.Keyword(null,"for-steps","for-steps",1009839253).cljs$core$IFn$_invoke$arity$1(steps.call(null,a_s2.call(null,0))).call(null,a_s2.call(null,2));
}
});
playfair_cljs.components.scrubbable.make_scrub = (function make_scrub(p__12686,owner){var map__12691 = p__12686;var map__12691__$1 = ((cljs.core.seq_QMARK_.call(null,map__12691))?cljs.core.apply.call(null,cljs.core.hash_map,map__12691):map__12691);var as = map__12691__$1;var active_steps = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));if(typeof playfair_cljs.components.scrubbable.t12692 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.scrubbable.t12692 = (function (steps,active_steps,as,map__12691,owner,p__12686,make_scrub,meta12693){
this.steps = steps;
this.active_steps = active_steps;
this.as = as;
this.map__12691 = map__12691;
this.owner = owner;
this.p__12686 = p__12686;
this.make_scrub = make_scrub;
this.meta12693 = meta12693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.scrubbable.t12692.cljs$lang$type = true;
playfair_cljs.components.scrubbable.t12692.cljs$lang$ctorStr = "playfair-cljs.components.scrubbable/t12692";
playfair_cljs.components.scrubbable.t12692.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.scrubbable/t12692");
});
playfair_cljs.components.scrubbable.t12692.prototype.om$core$IRender$ = true;
playfair_cljs.components.scrubbable.t12692.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.steps) > 0))
{return cljs.core.apply.call(null,om.dom.p,{"className": "center"},playfair_cljs.components.scrubbable.make_scrub_text.call(null,playfair_cljs.components.scrubbable.get_scrub_step.call(null,self__.active_steps,self__.steps)));
} else
{return React.DOM.p({"className": "center"},"Welcome to playfair, get drawing!");
}
});
playfair_cljs.components.scrubbable.t12692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12694){var self__ = this;
var _12694__$1 = this;return self__.meta12693;
});
playfair_cljs.components.scrubbable.t12692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12694,meta12693__$1){var self__ = this;
var _12694__$1 = this;return (new playfair_cljs.components.scrubbable.t12692(self__.steps,self__.active_steps,self__.as,self__.map__12691,self__.owner,self__.p__12686,self__.make_scrub,meta12693__$1));
});
playfair_cljs.components.scrubbable.__GT_t12692 = (function __GT_t12692(steps__$1,active_steps__$1,as__$1,map__12691__$2,owner__$1,p__12686__$1,make_scrub__$1,meta12693){return (new playfair_cljs.components.scrubbable.t12692(steps__$1,active_steps__$1,as__$1,map__12691__$2,owner__$1,p__12686__$1,make_scrub__$1,meta12693));
});
}
return (new playfair_cljs.components.scrubbable.t12692(steps,active_steps,as,map__12691__$1,owner,p__12686,make_scrub,null));
});

//# sourceMappingURL=scrubbable.js.map