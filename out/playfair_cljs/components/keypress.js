// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.keypress');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('playfair_cljs.asCompiler');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.asCompiler');
goog.require('om.dom');
goog.require('playfair_cljs.debug');
goog.require('cljs.core.async');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.debug');
playfair_cljs.components.keypress.key_chan = cljs.core.async.chan.call(null);
playfair_cljs.components.keypress.key_codes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"r","r",1013904356),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"c","c",1013904341),new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.Keyword(null,"d","d",1013904342),new cljs.core.Keyword(null,"e","e",1013904343),new cljs.core.Keyword(null,"l","l",1013904350),new cljs.core.Keyword(null,"k","k",1013904349),new cljs.core.Keyword(null,"i","i",1013904347),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"v","v",1013904360),new cljs.core.Keyword(null,"u","u",1013904359),new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"s","s",1013904357)],[82,88,65,67,71,68,69,76,75,73,39,37,86,85,40,38,80,83]);
playfair_cljs.components.keypress.check_bounds = (function check_bounds(numb,inc_or_dec,steps){playfair_cljs.debug.log.call(null,playfair_cljs.asCompiler.count_all_steps.call(null,steps));
if(cljs.core._EQ_.call(null,inc_or_dec,"inc"))
{if(cljs.core._EQ_.call(null,numb,(playfair_cljs.asCompiler.count_all_steps.call(null,steps) - 1)))
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
var multi_assoc__delegate = function (reciever,assoc_pairs){return cljs.core.reduce.call(null,(function (rec,p__9734){var vec__9735 = p__9734;var look_up = cljs.core.nth.call(null,vec__9735,0,null);var value = cljs.core.nth.call(null,vec__9735,1,null);return cljs.core.assoc.call(null,rec,look_up,value);
}),reciever,assoc_pairs);
};
var multi_assoc = function (reciever,var_args){
var assoc_pairs = null;if (arguments.length > 1) {
  assoc_pairs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return multi_assoc__delegate.call(this,reciever,assoc_pairs);};
multi_assoc.cljs$lang$maxFixedArity = 1;
multi_assoc.cljs$lang$applyTo = (function (arglist__9736){
var reciever = cljs.core.first(arglist__9736);
var assoc_pairs = cljs.core.rest(arglist__9736);
return multi_assoc__delegate(reciever,assoc_pairs);
});
multi_assoc.cljs$core$IFn$_invoke$arity$variadic = multi_assoc__delegate;
return multi_assoc;
})()
;
playfair_cljs.components.keypress.handle_key_event = (function handle_key_event(app,p__9737){var vec__9748 = p__9737;var press_type = cljs.core.nth.call(null,vec__9748,0,null);var event = cljs.core.nth.call(null,vec__9748,1,null);var keyCode = event.keyCode;var metaKey = event.metaKey;var shiftKey = event.shiftKey;var ctrlKey = event.ctrlKey;if(cljs.core._EQ_.call(null,press_type,new cljs.core.Keyword(null,"keyup","keyup",1115849900)))
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
{return om.core.transact_BANG_.call(null,app,(function (p__9749){var map__9750 = p__9749;var map__9750__$1 = ((cljs.core.seq_QMARK_.call(null,map__9750))?cljs.core.apply.call(null,cljs.core.hash_map,map__9750):map__9750);var app_state = map__9750__$1;var active_steps = cljs.core.get.call(null,map__9750__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__9750__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var vec__9751 = active_steps;var s1 = cljs.core.nth.call(null,vec__9751,0,null);var s2 = cljs.core.nth.call(null,vec__9751,1,null);var head = cljs.core.subvec.call(null,steps,0,s1);var looped = cljs.core.subvec.call(null,steps,s1,(s2 + 1));var tail = cljs.core.subvec.call(null,steps,(s2 + 1),cljs.core.count.call(null,steps));var log = playfair_cljs.debug.log.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,head,playfair_cljs.shapeData.make_for.call(null,5,looped),tail)));return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),cljs.core.vec.call(null,cljs.core.concat.call(null,head,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.shapeData.make_for.call(null,20,looped)], null),tail)));
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
{return om.core.transact_BANG_.call(null,app,(function (p__9752){var map__9753 = p__9752;var map__9753__$1 = ((cljs.core.seq_QMARK_.call(null,map__9753))?cljs.core.apply.call(null,cljs.core.hash_map,map__9753):map__9753);var app_state = map__9753__$1;var step_direction = cljs.core.get.call(null,map__9753__$1,new cljs.core.Keyword(null,"step-direction","step-direction",2870793520));var active_steps = cljs.core.get.call(null,map__9753__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__9753__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var vec__9754 = active_steps;var s1 = cljs.core.nth.call(null,vec__9754,0,null);var s2 = cljs.core.nth.call(null,vec__9754,1,null);if(cljs.core.truth_(shiftKey))
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
{return om.core.transact_BANG_.call(null,app,(function (p__9755){var map__9756 = p__9755;var map__9756__$1 = ((cljs.core.seq_QMARK_.call(null,map__9756))?cljs.core.apply.call(null,cljs.core.hash_map,map__9756):map__9756);var app_state = map__9756__$1;var step_direction = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"step-direction","step-direction",2870793520));var active_steps = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var vec__9757 = active_steps;var s1 = cljs.core.nth.call(null,vec__9757,0,null);var s2 = cljs.core.nth.call(null,vec__9757,1,null);if(cljs.core.truth_(shiftKey))
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
playfair_cljs.components.keypress.key_listener_component = (function key_listener_component(app,owner){if(typeof playfair_cljs.components.keypress.t9804 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.keypress.t9804 = (function (owner,app,key_listener_component,meta9805){
this.owner = owner;
this.app = app;
this.key_listener_component = key_listener_component;
this.meta9805 = meta9805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.keypress.t9804.cljs$lang$type = true;
playfair_cljs.components.keypress.t9804.cljs$lang$ctorStr = "playfair-cljs.components.keypress/t9804";
playfair_cljs.components.keypress.t9804.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.keypress/t9804");
});
playfair_cljs.components.keypress.t9804.prototype.om$core$IRender$ = true;
playfair_cljs.components.keypress.t9804.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,"");
});
playfair_cljs.components.keypress.t9804.prototype.om$core$IWillMount$ = true;
playfair_cljs.components.keypress.t9804.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var keychan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"keychan","keychan",4493860259));var c__6950__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6951__auto__ = (function (){var switch__6935__auto__ = (function (state_9829){var state_val_9830 = (state_9829[1]);if((state_val_9830 === 1))
{var state_9829__$1 = state_9829;var statearr_9831_9850 = state_9829__$1;(statearr_9831_9850[2] = null);
(statearr_9831_9850[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9830 === 2))
{var state_9829__$1 = state_9829;if(true)
{var statearr_9832_9851 = state_9829__$1;(statearr_9832_9851[1] = 4);
} else
{var statearr_9833_9852 = state_9829__$1;(statearr_9833_9852[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9830 === 3))
{var inst_9827 = (state_9829[2]);var state_9829__$1 = state_9829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9829__$1,inst_9827);
} else
{if((state_val_9830 === 4))
{var inst_9810 = [keychan];var inst_9811 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9810,null));var state_9829__$1 = state_9829;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9829__$1,7,inst_9811);
} else
{if((state_val_9830 === 5))
{var state_9829__$1 = state_9829;var statearr_9834_9853 = state_9829__$1;(statearr_9834_9853[2] = null);
(statearr_9834_9853[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9830 === 6))
{var inst_9825 = (state_9829[2]);var state_9829__$1 = state_9829;var statearr_9835_9854 = state_9829__$1;(statearr_9835_9854[2] = inst_9825);
(statearr_9835_9854[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9830 === 7))
{var inst_9813 = (state_9829[2]);var inst_9814 = cljs.core.nth.call(null,inst_9813,0,null);var inst_9815 = cljs.core.nth.call(null,inst_9813,1,null);var inst_9816 = cljs.core._EQ_.call(null,inst_9815,keychan);var state_9829__$1 = (function (){var statearr_9836 = state_9829;(statearr_9836[7] = inst_9814);
return statearr_9836;
})();if(inst_9816)
{var statearr_9837_9855 = state_9829__$1;(statearr_9837_9855[1] = 8);
} else
{var statearr_9838_9856 = state_9829__$1;(statearr_9838_9856[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9830 === 8))
{var inst_9814 = (state_9829[7]);var inst_9818 = playfair_cljs.components.keypress.handle_key_event.call(null,self__.app,inst_9814);var state_9829__$1 = state_9829;var statearr_9839_9857 = state_9829__$1;(statearr_9839_9857[2] = inst_9818);
(statearr_9839_9857[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9830 === 9))
{var state_9829__$1 = state_9829;var statearr_9840_9858 = state_9829__$1;(statearr_9840_9858[2] = null);
(statearr_9840_9858[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9830 === 10))
{var inst_9821 = (state_9829[2]);var state_9829__$1 = (function (){var statearr_9841 = state_9829;(statearr_9841[8] = inst_9821);
return statearr_9841;
})();var statearr_9842_9859 = state_9829__$1;(statearr_9842_9859[2] = null);
(statearr_9842_9859[1] = 2);
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
});return ((function (switch__6935__auto__){
return (function() {
var state_machine__6936__auto__ = null;
var state_machine__6936__auto____0 = (function (){var statearr_9846 = [null,null,null,null,null,null,null,null,null];(statearr_9846[0] = state_machine__6936__auto__);
(statearr_9846[1] = 1);
return statearr_9846;
});
var state_machine__6936__auto____1 = (function (state_9829){while(true){
var ret_value__6937__auto__ = (function (){try{while(true){
var result__6938__auto__ = switch__6935__auto__.call(null,state_9829);if(cljs.core.keyword_identical_QMARK_.call(null,result__6938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6938__auto__;
}
break;
}
}catch (e9847){if((e9847 instanceof Object))
{var ex__6939__auto__ = e9847;var statearr_9848_9860 = state_9829;(statearr_9848_9860[5] = ex__6939__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9829);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9847;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6937__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9861 = state_9829;
state_9829 = G__9861;
continue;
}
} else
{return ret_value__6937__auto__;
}
break;
}
});
state_machine__6936__auto__ = function(state_9829){
switch(arguments.length){
case 0:
return state_machine__6936__auto____0.call(this);
case 1:
return state_machine__6936__auto____1.call(this,state_9829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6936__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6936__auto____0;
state_machine__6936__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6936__auto____1;
return state_machine__6936__auto__;
})()
;})(switch__6935__auto__))
})();var state__6952__auto__ = (function (){var statearr_9849 = f__6951__auto__.call(null);(statearr_9849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6950__auto__);
return statearr_9849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6952__auto__);
}));
return c__6950__auto__;
});
playfair_cljs.components.keypress.t9804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9806){var self__ = this;
var _9806__$1 = this;return self__.meta9805;
});
playfair_cljs.components.keypress.t9804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9806,meta9805__$1){var self__ = this;
var _9806__$1 = this;return (new playfair_cljs.components.keypress.t9804(self__.owner,self__.app,self__.key_listener_component,meta9805__$1));
});
playfair_cljs.components.keypress.__GT_t9804 = (function __GT_t9804(owner__$1,app__$1,key_listener_component__$1,meta9805){return (new playfair_cljs.components.keypress.t9804(owner__$1,app__$1,key_listener_component__$1,meta9805));
});
}
return (new playfair_cljs.components.keypress.t9804(owner,app,key_listener_component,null));
});

//# sourceMappingURL=keypress.js.map