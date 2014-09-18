// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.keypress');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('playfair_cljs.shapes');
goog.require('playfair_cljs.shapes');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.debug');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
playfair_cljs.components.keypress.key_chan = cljs.core.async.chan.call(null);
playfair_cljs.components.keypress.key_codes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"r","r",1013904356),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"c","c",1013904341),new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.Keyword(null,"d","d",1013904342),new cljs.core.Keyword(null,"e","e",1013904343),new cljs.core.Keyword(null,"l","l",1013904350),new cljs.core.Keyword(null,"k","k",1013904349),new cljs.core.Keyword(null,"i","i",1013904347),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"v","v",1013904360),new cljs.core.Keyword(null,"u","u",1013904359),new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"s","s",1013904357)],[82,88,65,67,71,68,69,76,75,73,39,37,86,85,40,38,80,83]);
playfair_cljs.components.keypress.check_bounds = (function check_bounds(numb,inc_or_dec,steps){playfair_cljs.debug.log.call(null,playfair_cljs.shapes.count_all_steps.call(null,steps));
if(cljs.core._EQ_.call(null,inc_or_dec,"inc"))
{if(cljs.core._EQ_.call(null,numb,(playfair_cljs.shapes.count_all_steps.call(null,steps) - 1)))
{return numb;
} else
{return (numb + 1);
}
} else
{if(cljs.core._EQ_.call(null,numb,0))
{return numb;
} else
{return (numb - 1);
}
}
});
/**
* @param {...*} var_args
*/
playfair_cljs.components.keypress.multi_assoc = (function() { 
var multi_assoc__delegate = function (reciever,assoc_pairs){return cljs.core.reduce.call(null,(function (rec,p__11919){var vec__11920 = p__11919;var look_up = cljs.core.nth.call(null,vec__11920,0,null);var value = cljs.core.nth.call(null,vec__11920,1,null);return cljs.core.assoc.call(null,rec,look_up,value);
}),reciever,assoc_pairs);
};
var multi_assoc = function (reciever,var_args){
var assoc_pairs = null;if (arguments.length > 1) {
  assoc_pairs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return multi_assoc__delegate.call(this,reciever,assoc_pairs);};
multi_assoc.cljs$lang$maxFixedArity = 1;
multi_assoc.cljs$lang$applyTo = (function (arglist__11921){
var reciever = cljs.core.first(arglist__11921);
var assoc_pairs = cljs.core.rest(arglist__11921);
return multi_assoc__delegate(reciever,assoc_pairs);
});
multi_assoc.cljs$core$IFn$_invoke$arity$variadic = multi_assoc__delegate;
return multi_assoc;
})()
;
playfair_cljs.components.keypress.handle_key_event = (function handle_key_event(app,p__11922){var vec__11933 = p__11922;var press_type = cljs.core.nth.call(null,vec__11933,0,null);var event = cljs.core.nth.call(null,vec__11933,1,null);var keyCode = event.keyCode;var metaKey = event.metaKey;var shiftKey = event.shiftKey;var ctrlKey = event.ctrlKey;if(cljs.core._EQ_.call(null,press_type,new cljs.core.Keyword(null,"keyup","keyup",1115849900)))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"select","select",4402849902);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"line","line",1017226086);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"path","path",1017337751);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"rect","rect",1017400662);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"c","c",1013904341).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"circle","circle",3948654658);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"u","u",1013904359).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"magnet","magnet",4227240668);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"picture","picture",4731129968);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"move","move",1017261891);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"scale","scale",1123155132);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"rotate","rotate",4383690957);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"d","d",1013904342).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"duplicate","duplicate",2215592061);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"l","l",1013904350).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,(function (p__11934){var map__11935 = p__11934;var map__11935__$1 = ((cljs.core.seq_QMARK_.call(null,map__11935))?cljs.core.apply.call(null,cljs.core.hash_map,map__11935):map__11935);var app_state = map__11935__$1;var active_steps = cljs.core.get.call(null,map__11935__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__11935__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var vec__11936 = active_steps;var s1 = cljs.core.nth.call(null,vec__11936,0,null);var s2 = cljs.core.nth.call(null,vec__11936,1,null);var head = cljs.core.subvec.call(null,steps,0,s1);var looped = cljs.core.subvec.call(null,steps,s1,(s2 + 1));var tail = cljs.core.subvec.call(null,steps,(s2 + 1),cljs.core.count.call(null,steps));var log = playfair_cljs.debug.log.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,head,playfair_cljs.shapes.make_for.call(null,5,looped),tail)));return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),cljs.core.vec.call(null,cljs.core.concat.call(null,head,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.shapes.make_for.call(null,20,looped)], null),tail)));
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"i","i",1013904347).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"if","if",1013907599);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"g","g",1013904345).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"guide","guide",1112616558);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"k","k",1013904349).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (_){return new cljs.core.Keyword(null,"clip","clip",1016960706);
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,(function (p__11937){var map__11938 = p__11937;var map__11938__$1 = ((cljs.core.seq_QMARK_.call(null,map__11938))?cljs.core.apply.call(null,cljs.core.hash_map,map__11938):map__11938);var app_state = map__11938__$1;var step_direction = cljs.core.get.call(null,map__11938__$1,new cljs.core.Keyword(null,"step-direction","step-direction",2870793520));var active_steps = cljs.core.get.call(null,map__11938__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__11938__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var vec__11939 = active_steps;var s1 = cljs.core.nth.call(null,vec__11939,0,null);var s2 = cljs.core.nth.call(null,vec__11939,1,null);if(cljs.core.truth_(shiftKey))
{if(cljs.core._EQ_.call(null,step_direction,"up"))
{return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.components.keypress.check_bounds.call(null,s1,"dec",steps),s2], null));
} else
{if(cljs.core._EQ_.call(null,s1,s2))
{return playfair_cljs.components.keypress.multi_assoc.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.components.keypress.check_bounds.call(null,s1,"dec",steps),s2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-direction","step-direction",2870793520),"up"], null));
} else
{return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,playfair_cljs.components.keypress.check_bounds.call(null,s2,"dec",steps)], null));
}
}
} else
{return playfair_cljs.components.keypress.multi_assoc.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.components.keypress.check_bounds.call(null,s2,"dec",steps),playfair_cljs.components.keypress.check_bounds.call(null,s2,"dec",steps)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-direction","step-direction",2870793520),"up"], null));
}
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,(function (p__11940){var map__11941 = p__11940;var map__11941__$1 = ((cljs.core.seq_QMARK_.call(null,map__11941))?cljs.core.apply.call(null,cljs.core.hash_map,map__11941):map__11941);var app_state = map__11941__$1;var step_direction = cljs.core.get.call(null,map__11941__$1,new cljs.core.Keyword(null,"step-direction","step-direction",2870793520));var active_steps = cljs.core.get.call(null,map__11941__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__11941__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var vec__11942 = active_steps;var s1 = cljs.core.nth.call(null,vec__11942,0,null);var s2 = cljs.core.nth.call(null,vec__11942,1,null);if(cljs.core.truth_(shiftKey))
{if(cljs.core._EQ_.call(null,step_direction,"down"))
{return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,playfair_cljs.components.keypress.check_bounds.call(null,s2,"inc",steps)], null));
} else
{if(cljs.core._EQ_.call(null,s1,s2))
{return playfair_cljs.components.keypress.multi_assoc.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,playfair_cljs.components.keypress.check_bounds.call(null,s2,"inc",steps)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-direction","step-direction",2870793520),"down"], null));
} else
{return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.components.keypress.check_bounds.call(null,s1,"inc",steps),s2], null));
}
}
} else
{return playfair_cljs.components.keypress.multi_assoc.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.components.keypress.check_bounds.call(null,s1,"inc",steps),playfair_cljs.components.keypress.check_bounds.call(null,s1,"inc",steps)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-direction","step-direction",2870793520),"down"], null));
}
}));
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
}
}
}
}
}
}
}
});
playfair_cljs.components.keypress.key_listener_component = (function key_listener_component(app,owner){if(typeof playfair_cljs.components.keypress.t11989 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.keypress.t11989 = (function (owner,app,key_listener_component,meta11990){
this.owner = owner;
this.app = app;
this.key_listener_component = key_listener_component;
this.meta11990 = meta11990;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.keypress.t11989.cljs$lang$type = true;
playfair_cljs.components.keypress.t11989.cljs$lang$ctorStr = "playfair-cljs.components.keypress/t11989";
playfair_cljs.components.keypress.t11989.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.keypress/t11989");
});
playfair_cljs.components.keypress.t11989.prototype.om$core$IRender$ = true;
playfair_cljs.components.keypress.t11989.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,"");
});
playfair_cljs.components.keypress.t11989.prototype.om$core$IWillMount$ = true;
playfair_cljs.components.keypress.t11989.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var keychan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"keychan","keychan",4493860259));var c__6820__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6821__auto__ = (function (){var switch__6750__auto__ = (function (state_12014){var state_val_12015 = (state_12014[1]);if((state_val_12015 === 1))
{var state_12014__$1 = state_12014;var statearr_12016_12035 = state_12014__$1;(statearr_12016_12035[2] = null);
(statearr_12016_12035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12015 === 2))
{var state_12014__$1 = state_12014;if(true)
{var statearr_12017_12036 = state_12014__$1;(statearr_12017_12036[1] = 4);
} else
{var statearr_12018_12037 = state_12014__$1;(statearr_12018_12037[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12015 === 3))
{var inst_12012 = (state_12014[2]);var state_12014__$1 = state_12014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12014__$1,inst_12012);
} else
{if((state_val_12015 === 4))
{var inst_11995 = [keychan];var inst_11996 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11995,null));var state_12014__$1 = state_12014;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12014__$1,7,inst_11996);
} else
{if((state_val_12015 === 5))
{var state_12014__$1 = state_12014;var statearr_12019_12038 = state_12014__$1;(statearr_12019_12038[2] = null);
(statearr_12019_12038[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12015 === 6))
{var inst_12010 = (state_12014[2]);var state_12014__$1 = state_12014;var statearr_12020_12039 = state_12014__$1;(statearr_12020_12039[2] = inst_12010);
(statearr_12020_12039[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12015 === 7))
{var inst_11998 = (state_12014[2]);var inst_11999 = cljs.core.nth.call(null,inst_11998,0,null);var inst_12000 = cljs.core.nth.call(null,inst_11998,1,null);var inst_12001 = cljs.core._EQ_.call(null,inst_12000,keychan);var state_12014__$1 = (function (){var statearr_12021 = state_12014;(statearr_12021[7] = inst_11999);
return statearr_12021;
})();if(inst_12001)
{var statearr_12022_12040 = state_12014__$1;(statearr_12022_12040[1] = 8);
} else
{var statearr_12023_12041 = state_12014__$1;(statearr_12023_12041[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12015 === 8))
{var inst_11999 = (state_12014[7]);var inst_12003 = playfair_cljs.components.keypress.handle_key_event.call(null,self__.app,inst_11999);var state_12014__$1 = state_12014;var statearr_12024_12042 = state_12014__$1;(statearr_12024_12042[2] = inst_12003);
(statearr_12024_12042[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12015 === 9))
{var state_12014__$1 = state_12014;var statearr_12025_12043 = state_12014__$1;(statearr_12025_12043[2] = null);
(statearr_12025_12043[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12015 === 10))
{var inst_12006 = (state_12014[2]);var state_12014__$1 = (function (){var statearr_12026 = state_12014;(statearr_12026[8] = inst_12006);
return statearr_12026;
})();var statearr_12027_12044 = state_12014__$1;(statearr_12027_12044[2] = null);
(statearr_12027_12044[1] = 2);
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
});return ((function (switch__6750__auto__){
return (function() {
var state_machine__6751__auto__ = null;
var state_machine__6751__auto____0 = (function (){var statearr_12031 = [null,null,null,null,null,null,null,null,null];(statearr_12031[0] = state_machine__6751__auto__);
(statearr_12031[1] = 1);
return statearr_12031;
});
var state_machine__6751__auto____1 = (function (state_12014){while(true){
var ret_value__6752__auto__ = (function (){try{while(true){
var result__6753__auto__ = switch__6750__auto__.call(null,state_12014);if(cljs.core.keyword_identical_QMARK_.call(null,result__6753__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6753__auto__;
}
break;
}
}catch (e12032){if((e12032 instanceof Object))
{var ex__6754__auto__ = e12032;var statearr_12033_12045 = state_12014;(statearr_12033_12045[5] = ex__6754__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12014);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6752__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12046 = state_12014;
state_12014 = G__12046;
continue;
}
} else
{return ret_value__6752__auto__;
}
break;
}
});
state_machine__6751__auto__ = function(state_12014){
switch(arguments.length){
case 0:
return state_machine__6751__auto____0.call(this);
case 1:
return state_machine__6751__auto____1.call(this,state_12014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6751__auto____0;
state_machine__6751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6751__auto____1;
return state_machine__6751__auto__;
})()
;})(switch__6750__auto__))
})();var state__6822__auto__ = (function (){var statearr_12034 = f__6821__auto__.call(null);(statearr_12034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6820__auto__);
return statearr_12034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6822__auto__);
}));
return c__6820__auto__;
});
playfair_cljs.components.keypress.t11989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11991){var self__ = this;
var _11991__$1 = this;return self__.meta11990;
});
playfair_cljs.components.keypress.t11989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11991,meta11990__$1){var self__ = this;
var _11991__$1 = this;return (new playfair_cljs.components.keypress.t11989(self__.owner,self__.app,self__.key_listener_component,meta11990__$1));
});
playfair_cljs.components.keypress.__GT_t11989 = (function __GT_t11989(owner__$1,app__$1,key_listener_component__$1,meta11990){return (new playfair_cljs.components.keypress.t11989(owner__$1,app__$1,key_listener_component__$1,meta11990));
});
}
return (new playfair_cljs.components.keypress.t11989(owner,app,key_listener_component,null));
});

//# sourceMappingURL=keypress.js.map