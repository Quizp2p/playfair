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
playfair_cljs.components.scrubbable.global_event_handler = (function global_event_handler(app_state,p__13571){var map__13577 = p__13571;var map__13577__$1 = ((cljs.core.seq_QMARK_.call(null,map__13577))?cljs.core.apply.call(null,cljs.core.hash_map,map__13577):map__13577);var e_data = map__13577__$1;var e = cljs.core.get.call(null,map__13577__$1,new cljs.core.Keyword(null,"e","e",1013904343));var e_type = cljs.core.get.call(null,map__13577__$1,new cljs.core.Keyword(null,"e-type","e-type",3950582548));if(cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777)))
{var vec__13578 = new cljs.core.Keyword(null,"active-steps","active-steps",1350401298).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state));var a_s1 = cljs.core.nth.call(null,vec__13578,0,null);var a_s2 = cljs.core.nth.call(null,vec__13578,1,null);return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gui_state){return cljs.core.assoc.call(null,gui_state,new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null),new cljs.core.Keyword(null,"scrub-step-key","scrub-step-key",1385563438),new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data),new cljs.core.Keyword(null,"scrub-start-val","scrub-start-val",516386954),cljs.core.get_in.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state),((typeof a_s2 === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),a_s2,new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),a_s2.call(null,0),new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),a_s2.call(null,2),new cljs.core.Keyword(null,"step-key","step-key",2441267024).cljs$core$IFn$_invoke$arity$1(e_data)], null))));
}));
} else
{if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856));if(and__3429__auto__)
{return new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.gui_state));
} else
{return and__3429__auto__;
}
})()))
{return om.core.transact_BANG_.call(null,app_state,(function (p__13579){var map__13580 = p__13579;var map__13580__$1 = ((cljs.core.seq_QMARK_.call(null,map__13580))?cljs.core.apply.call(null,cljs.core.hash_map,map__13580):map__13580);var app_state__$1 = map__13580__$1;var active_steps = cljs.core.get.call(null,map__13580__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__13580__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var map__13581 = cljs.core.deref.call(null,playfair_cljs.appstate.gui_state);var map__13581__$1 = ((cljs.core.seq_QMARK_.call(null,map__13581))?cljs.core.apply.call(null,cljs.core.hash_map,map__13581):map__13581);var scrub_start_val = cljs.core.get.call(null,map__13581__$1,new cljs.core.Keyword(null,"scrub-start-val","scrub-start-val",516386954));var scrub_step_key = cljs.core.get.call(null,map__13581__$1,new cljs.core.Keyword(null,"scrub-step-key","scrub-step-key",1385563438));var scrub_click_pos = cljs.core.get.call(null,map__13581__$1,new cljs.core.Keyword(null,"scrub-click-pos","scrub-click-pos",680614371));var sensitivity = 1;return cljs.core.assoc_in.call(null,app_state__$1,((typeof active_steps.call(null,1) === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),active_steps.call(null,1),scrub_step_key], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",1123665561),active_steps.call(null,1).call(null,0),new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),active_steps.call(null,1).call(null,2),scrub_step_key], null)),(scrub_start_val + cljs.core.quot.call(null,(e.clientX - scrub_click_pos.call(null,0)),sensitivity)));
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
playfair_cljs.components.scrubbable.global_events = (function global_events(app,owner){if(typeof playfair_cljs.components.scrubbable.t13628 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.scrubbable.t13628 = (function (owner,app,global_events,meta13629){
this.owner = owner;
this.app = app;
this.global_events = global_events;
this.meta13629 = meta13629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.scrubbable.t13628.cljs$lang$type = true;
playfair_cljs.components.scrubbable.t13628.cljs$lang$ctorStr = "playfair-cljs.components.scrubbable/t13628";
playfair_cljs.components.scrubbable.t13628.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.scrubbable/t13628");
});
playfair_cljs.components.scrubbable.t13628.prototype.om$core$IRender$ = true;
playfair_cljs.components.scrubbable.t13628.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,"");
});
playfair_cljs.components.scrubbable.t13628.prototype.om$core$IWillMount$ = true;
playfair_cljs.components.scrubbable.t13628.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var keychan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"globalchan","globalchan",4450549991));var c__6080__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6081__auto__ = (function (){var switch__6010__auto__ = (function (state_13653){var state_val_13654 = (state_13653[1]);if((state_val_13654 === 1))
{var state_13653__$1 = state_13653;var statearr_13655_13674 = state_13653__$1;(statearr_13655_13674[2] = null);
(statearr_13655_13674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13654 === 2))
{var state_13653__$1 = state_13653;if(true)
{var statearr_13656_13675 = state_13653__$1;(statearr_13656_13675[1] = 4);
} else
{var statearr_13657_13676 = state_13653__$1;(statearr_13657_13676[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13654 === 3))
{var inst_13651 = (state_13653[2]);var state_13653__$1 = state_13653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13653__$1,inst_13651);
} else
{if((state_val_13654 === 4))
{var inst_13634 = [keychan];var inst_13635 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_13634,null));var state_13653__$1 = state_13653;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13653__$1,7,inst_13635);
} else
{if((state_val_13654 === 5))
{var state_13653__$1 = state_13653;var statearr_13658_13677 = state_13653__$1;(statearr_13658_13677[2] = null);
(statearr_13658_13677[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13654 === 6))
{var inst_13649 = (state_13653[2]);var state_13653__$1 = state_13653;var statearr_13659_13678 = state_13653__$1;(statearr_13659_13678[2] = inst_13649);
(statearr_13659_13678[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13654 === 7))
{var inst_13637 = (state_13653[2]);var inst_13638 = cljs.core.nth.call(null,inst_13637,0,null);var inst_13639 = cljs.core.nth.call(null,inst_13637,1,null);var inst_13640 = cljs.core._EQ_.call(null,inst_13639,keychan);var state_13653__$1 = (function (){var statearr_13660 = state_13653;(statearr_13660[7] = inst_13638);
return statearr_13660;
})();if(inst_13640)
{var statearr_13661_13679 = state_13653__$1;(statearr_13661_13679[1] = 8);
} else
{var statearr_13662_13680 = state_13653__$1;(statearr_13662_13680[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13654 === 8))
{var inst_13638 = (state_13653[7]);var inst_13642 = playfair_cljs.components.scrubbable.global_event_handler.call(null,self__.app,inst_13638);var state_13653__$1 = state_13653;var statearr_13663_13681 = state_13653__$1;(statearr_13663_13681[2] = inst_13642);
(statearr_13663_13681[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13654 === 9))
{var state_13653__$1 = state_13653;var statearr_13664_13682 = state_13653__$1;(statearr_13664_13682[2] = null);
(statearr_13664_13682[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13654 === 10))
{var inst_13645 = (state_13653[2]);var state_13653__$1 = (function (){var statearr_13665 = state_13653;(statearr_13665[8] = inst_13645);
return statearr_13665;
})();var statearr_13666_13683 = state_13653__$1;(statearr_13666_13683[2] = null);
(statearr_13666_13683[1] = 2);
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
var state_machine__6011__auto____0 = (function (){var statearr_13670 = [null,null,null,null,null,null,null,null,null];(statearr_13670[0] = state_machine__6011__auto__);
(statearr_13670[1] = 1);
return statearr_13670;
});
var state_machine__6011__auto____1 = (function (state_13653){while(true){
var ret_value__6012__auto__ = (function (){try{while(true){
var result__6013__auto__ = switch__6010__auto__.call(null,state_13653);if(cljs.core.keyword_identical_QMARK_.call(null,result__6013__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6013__auto__;
}
break;
}
}catch (e13671){if((e13671 instanceof Object))
{var ex__6014__auto__ = e13671;var statearr_13672_13684 = state_13653;(statearr_13672_13684[5] = ex__6014__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13653);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13671;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6012__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13685 = state_13653;
state_13653 = G__13685;
continue;
}
} else
{return ret_value__6012__auto__;
}
break;
}
});
state_machine__6011__auto__ = function(state_13653){
switch(arguments.length){
case 0:
return state_machine__6011__auto____0.call(this);
case 1:
return state_machine__6011__auto____1.call(this,state_13653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6011__auto____0;
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6011__auto____1;
return state_machine__6011__auto__;
})()
;})(switch__6010__auto__))
})();var state__6082__auto__ = (function (){var statearr_13673 = f__6081__auto__.call(null);(statearr_13673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6080__auto__);
return statearr_13673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6082__auto__);
}));
return c__6080__auto__;
});
playfair_cljs.components.scrubbable.t13628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13630){var self__ = this;
var _13630__$1 = this;return self__.meta13629;
});
playfair_cljs.components.scrubbable.t13628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13630,meta13629__$1){var self__ = this;
var _13630__$1 = this;return (new playfair_cljs.components.scrubbable.t13628(self__.owner,self__.app,self__.global_events,meta13629__$1));
});
playfair_cljs.components.scrubbable.__GT_t13628 = (function __GT_t13628(owner__$1,app__$1,global_events__$1,meta13629){return (new playfair_cljs.components.scrubbable.t13628(owner__$1,app__$1,global_events__$1,meta13629));
});
}
return (new playfair_cljs.components.scrubbable.t13628(owner,app,global_events,null));
});
playfair_cljs.components.scrubbable.make_span = (function make_span(p__13688){var map__13690 = p__13688;var map__13690__$1 = ((cljs.core.seq_QMARK_.call(null,map__13690))?cljs.core.apply.call(null,cljs.core.hash_map,map__13690):map__13690);var step_key = cljs.core.get.call(null,map__13690__$1,new cljs.core.Keyword(null,"step-key","step-key",2441267024));var value = cljs.core.get.call(null,map__13690__$1,new cljs.core.Keyword(null,"value","value",1125876963));return React.DOM.span({"onMouseUp": (function (p1__13687_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.global_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154),new cljs.core.Keyword(null,"e","e",1013904343),p1__13687_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"global","global",4065851157)], null));
}), "onMouseDown": (function (p1__13686_SHARP_){return cljs.core.async.put_BANG_.call(null,playfair_cljs.channels.global_chan,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e-type","e-type",3950582548),new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777),new cljs.core.Keyword(null,"e","e",1013904343),p1__13686_SHARP_.nativeEvent,new cljs.core.Keyword(null,"reciever","reciever",4503726569),new cljs.core.Keyword(null,"global","global",4065851157),new cljs.core.Keyword(null,"step-key","step-key",2441267024),step_key], null));
}), "className": "scrubber"},value);
});
playfair_cljs.components.scrubbable.make_scrub_text = (function make_scrub_text(step){return cljs.core.reduce.call(null,(function (accum,s){if(cljs.core.map_QMARK_.call(null,s))
{return cljs.core.conj.call(null,accum,playfair_cljs.components.scrubbable.make_span.call(null,s));
} else
{return cljs.core.conj.call(null,accum,React.DOM.span(null,s));
}
}),cljs.core.PersistentVector.EMPTY,playfair_cljs.csCompiler.get_text.call(null,cljs.core.assoc.call(null,step,new cljs.core.Keyword(null,"scrub?","scrub?",4401196898),true)));
});
playfair_cljs.components.scrubbable.get_scrub_step = (function get_scrub_step(p__13691,steps){var vec__13693 = p__13691;var a_s1 = cljs.core.nth.call(null,vec__13693,0,null);var a_s2 = cljs.core.nth.call(null,vec__13693,1,null);if(typeof a_s2 === 'number')
{return steps.call(null,a_s2);
} else
{return new cljs.core.Keyword(null,"for-steps","for-steps",1009839253).cljs$core$IFn$_invoke$arity$1(steps.call(null,a_s2.call(null,0))).call(null,a_s2.call(null,2));
}
});
playfair_cljs.components.scrubbable.make_scrub = (function make_scrub(p__13694,owner){var map__13699 = p__13694;var map__13699__$1 = ((cljs.core.seq_QMARK_.call(null,map__13699))?cljs.core.apply.call(null,cljs.core.hash_map,map__13699):map__13699);var as = map__13699__$1;var active_steps = cljs.core.get.call(null,map__13699__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__13699__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));if(typeof playfair_cljs.components.scrubbable.t13700 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.scrubbable.t13700 = (function (steps,active_steps,as,map__13699,owner,p__13694,make_scrub,meta13701){
this.steps = steps;
this.active_steps = active_steps;
this.as = as;
this.map__13699 = map__13699;
this.owner = owner;
this.p__13694 = p__13694;
this.make_scrub = make_scrub;
this.meta13701 = meta13701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.scrubbable.t13700.cljs$lang$type = true;
playfair_cljs.components.scrubbable.t13700.cljs$lang$ctorStr = "playfair-cljs.components.scrubbable/t13700";
playfair_cljs.components.scrubbable.t13700.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.scrubbable/t13700");
});
playfair_cljs.components.scrubbable.t13700.prototype.om$core$IRender$ = true;
playfair_cljs.components.scrubbable.t13700.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.steps) > 0))
{return cljs.core.apply.call(null,om.dom.p,{"className": "center"},playfair_cljs.components.scrubbable.make_scrub_text.call(null,playfair_cljs.components.scrubbable.get_scrub_step.call(null,self__.active_steps,self__.steps)));
} else
{return React.DOM.p(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"center"], null),"");
}
});
playfair_cljs.components.scrubbable.t13700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13702){var self__ = this;
var _13702__$1 = this;return self__.meta13701;
});
playfair_cljs.components.scrubbable.t13700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13702,meta13701__$1){var self__ = this;
var _13702__$1 = this;return (new playfair_cljs.components.scrubbable.t13700(self__.steps,self__.active_steps,self__.as,self__.map__13699,self__.owner,self__.p__13694,self__.make_scrub,meta13701__$1));
});
playfair_cljs.components.scrubbable.__GT_t13700 = (function __GT_t13700(steps__$1,active_steps__$1,as__$1,map__13699__$2,owner__$1,p__13694__$1,make_scrub__$1,meta13701){return (new playfair_cljs.components.scrubbable.t13700(steps__$1,active_steps__$1,as__$1,map__13699__$2,owner__$1,p__13694__$1,make_scrub__$1,meta13701));
});
}
return (new playfair_cljs.components.scrubbable.t13700(steps,active_steps,as,map__13699__$1,owner,p__13694,make_scrub,null));
});

//# sourceMappingURL=scrubbable.js.map