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
playfair_cljs.components.keypress.key_codes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"r","r",1013904356),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"z","z",1013904364),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"c","c",1013904341),new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.Keyword(null,"d","d",1013904342),new cljs.core.Keyword(null,"e","e",1013904343),new cljs.core.Keyword(null,"l","l",1013904350),new cljs.core.Keyword(null,"k","k",1013904349),new cljs.core.Keyword(null,"i","i",1013904347),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"v","v",1013904360),new cljs.core.Keyword(null,"u","u",1013904359),new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"s","s",1013904357)],[82,8,90,88,65,67,71,68,69,76,75,73,39,37,86,85,40,38,80,83]);
playfair_cljs.components.keypress.check_bounds = (function check_bounds(numb,inc_or_dec,steps){if(cljs.core._EQ_.call(null,inc_or_dec,"inc"))
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
playfair_cljs.components.keypress.check_bounds_for = (function check_bounds_for(p__10194,inc_or_dec,times,loop_size,steps){var vec__10196 = p__10194;var outer_ind = cljs.core.nth.call(null,vec__10196,0,null);var loop_ind = cljs.core.nth.call(null,vec__10196,1,null);var inner_ind = cljs.core.nth.call(null,vec__10196,2,null);var new_ind = ((cljs.core._EQ_.call(null,inc_or_dec,"inc"))?(inner_ind + 1):(inner_ind - 1));if(cljs.core._EQ_.call(null,inc_or_dec,"inc"))
{if(cljs.core._EQ_.call(null,(inner_ind + 1),loop_size))
{if(cljs.core._EQ_.call(null,(loop_ind + 1),times))
{if(cljs.core._EQ_.call(null,(outer_ind + 1),cljs.core.count.call(null,steps)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_ind,loop_ind,inner_ind], null);
} else
{return (outer_ind + 1);
}
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_ind,(loop_ind + 1),0], null);
}
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_ind,loop_ind,(inner_ind + 1)], null);
}
} else
{if(cljs.core._EQ_.call(null,(inner_ind - 1),-1))
{if(cljs.core._EQ_.call(null,(loop_ind - 1),-1))
{return outer_ind;
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_ind,(loop_ind - 1),(loop_size - 1)], null);
}
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_ind,loop_ind,(inner_ind - 1)], null);
}
}
});
playfair_cljs.components.keypress.check_step = (function check_step(current_numb,inc_or_dec,steps){var current_step = steps.call(null,((typeof current_numb === 'number')?current_numb:current_numb.call(null,0)));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"step-name","step-name",2312562782).cljs$core$IFn$_invoke$arity$1(current_step),new cljs.core.Keyword(null,"for","for",1014005819)))
{if(typeof current_numb === 'number')
{if(cljs.core._EQ_.call(null,inc_or_dec,"inc"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_numb,0,0], null);
} else
{return playfair_cljs.components.keypress.check_bounds.call(null,current_numb,inc_or_dec,steps);
}
} else
{return playfair_cljs.components.keypress.check_bounds_for.call(null,current_numb,inc_or_dec,new cljs.core.Keyword(null,"times","times",1124268728).cljs$core$IFn$_invoke$arity$1(current_step),cljs.core.count.call(null,new cljs.core.Keyword(null,"for-steps","for-steps",1009839253).cljs$core$IFn$_invoke$arity$1(current_step)),steps);
}
} else
{return playfair_cljs.components.keypress.check_bounds.call(null,current_numb,inc_or_dec,steps);
}
});
playfair_cljs.components.keypress.check_max_active_steps = (function check_max_active_steps(p__10197,steps){var vec__10199 = p__10197;var a_s1 = cljs.core.nth.call(null,vec__10199,0,null);var a_s2 = cljs.core.nth.call(null,vec__10199,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,(cljs.core.count.call(null,steps) - 1),a_s1))?(cljs.core.count.call(null,steps) - 2):a_s1),((cljs.core._EQ_.call(null,(cljs.core.count.call(null,steps) - 1),a_s2))?(cljs.core.count.call(null,steps) - 2):a_s2)], null);
});
/**
* @param {...*} var_args
*/
playfair_cljs.components.keypress.multi_assoc = (function() { 
var multi_assoc__delegate = function (reciever,assoc_pairs){return cljs.core.reduce.call(null,(function (rec,p__10202){var vec__10203 = p__10202;var look_up = cljs.core.nth.call(null,vec__10203,0,null);var value = cljs.core.nth.call(null,vec__10203,1,null);return cljs.core.assoc.call(null,rec,look_up,value);
}),reciever,assoc_pairs);
};
var multi_assoc = function (reciever,var_args){
var assoc_pairs = null;if (arguments.length > 1) {
  assoc_pairs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return multi_assoc__delegate.call(this,reciever,assoc_pairs);};
multi_assoc.cljs$lang$maxFixedArity = 1;
multi_assoc.cljs$lang$applyTo = (function (arglist__10204){
var reciever = cljs.core.first(arglist__10204);
var assoc_pairs = cljs.core.rest(arglist__10204);
return multi_assoc__delegate(reciever,assoc_pairs);
});
multi_assoc.cljs$core$IFn$_invoke$arity$variadic = multi_assoc__delegate;
return multi_assoc;
})()
;
playfair_cljs.components.keypress.handle_key_event = (function handle_key_event(app,p__10205){var vec__10218 = p__10205;var press_type = cljs.core.nth.call(null,vec__10218,0,null);var event = cljs.core.nth.call(null,vec__10218,1,null);var keyCode = event.keyCode;var metaKey = event.metaKey;var shiftKey = event.shiftKey;var ctrlKey = event.ctrlKey;if(cljs.core._EQ_.call(null,press_type,new cljs.core.Keyword(null,"keyup","keyup",1115849900)))
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
{return om.core.transact_BANG_.call(null,app,(function (p__10219){var map__10220 = p__10219;var map__10220__$1 = ((cljs.core.seq_QMARK_.call(null,map__10220))?cljs.core.apply.call(null,cljs.core.hash_map,map__10220):map__10220);var app_state = map__10220__$1;var active_steps = cljs.core.get.call(null,map__10220__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__10220__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var vec__10221 = active_steps;var s1 = cljs.core.nth.call(null,vec__10221,0,null);var s2 = cljs.core.nth.call(null,vec__10221,1,null);var head = cljs.core.subvec.call(null,steps,0,s1);var looped = cljs.core.subvec.call(null,steps,s1,(s2 + 1));var tail = cljs.core.subvec.call(null,steps,(s2 + 1),cljs.core.count.call(null,steps));return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),cljs.core.vec.call(null,cljs.core.concat.call(null,head,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.shapeData.make_for.call(null,20,looped)], null),tail)),new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,0,0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,0,0], null)], null));
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
{return om.core.transact_BANG_.call(null,app,(function (p__10222){var map__10223 = p__10222;var map__10223__$1 = ((cljs.core.seq_QMARK_.call(null,map__10223))?cljs.core.apply.call(null,cljs.core.hash_map,map__10223):map__10223);var app_state = map__10223__$1;var step_direction = cljs.core.get.call(null,map__10223__$1,new cljs.core.Keyword(null,"step-direction","step-direction",2870793520));var active_steps = cljs.core.get.call(null,map__10223__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__10223__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var vec__10224 = active_steps;var s1 = cljs.core.nth.call(null,vec__10224,0,null);var s2 = cljs.core.nth.call(null,vec__10224,1,null);if(cljs.core.truth_(shiftKey))
{if(cljs.core._EQ_.call(null,step_direction,"up"))
{return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.components.keypress.check_step.call(null,s1,"dec",steps),s2], null));
} else
{if(cljs.core._EQ_.call(null,s1,s2))
{return playfair_cljs.components.keypress.multi_assoc.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.components.keypress.check_step.call(null,s1,"dec",steps),s2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-direction","step-direction",2870793520),"up"], null));
} else
{return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,playfair_cljs.components.keypress.check_step.call(null,s2,"dec",steps)], null));
}
}
} else
{return playfair_cljs.components.keypress.multi_assoc.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.components.keypress.check_step.call(null,s2,"dec",steps),playfair_cljs.components.keypress.check_step.call(null,s2,"dec",steps)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-direction","step-direction",2870793520),"up"], null));
}
}));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode))
{return om.core.transact_BANG_.call(null,app,(function (p__10225){var map__10226 = p__10225;var map__10226__$1 = ((cljs.core.seq_QMARK_.call(null,map__10226))?cljs.core.apply.call(null,cljs.core.hash_map,map__10226):map__10226);var app_state = map__10226__$1;var step_direction = cljs.core.get.call(null,map__10226__$1,new cljs.core.Keyword(null,"step-direction","step-direction",2870793520));var active_steps = cljs.core.get.call(null,map__10226__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__10226__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var vec__10227 = active_steps;var s1 = cljs.core.nth.call(null,vec__10227,0,null);var s2 = cljs.core.nth.call(null,vec__10227,1,null);if(cljs.core.truth_(shiftKey))
{if(cljs.core._EQ_.call(null,step_direction,"down"))
{return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,playfair_cljs.components.keypress.check_step.call(null,s2,"inc",steps)], null));
} else
{if(cljs.core._EQ_.call(null,s1,s2))
{return playfair_cljs.components.keypress.multi_assoc.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,playfair_cljs.components.keypress.check_step.call(null,s2,"inc",steps)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-direction","step-direction",2870793520),"down"], null));
} else
{return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.components.keypress.check_step.call(null,s1,"inc",steps),s2], null));
}
}
} else
{return playfair_cljs.components.keypress.multi_assoc.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.components.keypress.check_step.call(null,s1,"inc",steps),playfair_cljs.components.keypress.check_step.call(null,s1,"inc",steps)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-direction","step-direction",2870793520),"down"], null));
}
}));
} else
{if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(playfair_cljs.components.keypress.key_codes),keyCode);if(and__3429__auto__)
{return metaKey;
} else
{return and__3429__auto__;
}
})()))
{return om.core.transact_BANG_.call(null,app,(function (p__10228){var map__10229 = p__10228;var map__10229__$1 = ((cljs.core.seq_QMARK_.call(null,map__10229))?cljs.core.apply.call(null,cljs.core.hash_map,map__10229):map__10229);var as = map__10229__$1;var steps = cljs.core.get.call(null,map__10229__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var active_steps = cljs.core.get.call(null,map__10229__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));return cljs.core.assoc.call(null,as,new cljs.core.Keyword(null,"steps","steps",1123665561),cljs.core.pop.call(null,steps),new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),playfair_cljs.components.keypress.check_max_active_steps.call(null,active_steps,steps));
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
}
});
playfair_cljs.components.keypress.key_listener_component = (function key_listener_component(app,owner){if(typeof playfair_cljs.components.keypress.t10276 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.keypress.t10276 = (function (owner,app,key_listener_component,meta10277){
this.owner = owner;
this.app = app;
this.key_listener_component = key_listener_component;
this.meta10277 = meta10277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.keypress.t10276.cljs$lang$type = true;
playfair_cljs.components.keypress.t10276.cljs$lang$ctorStr = "playfair-cljs.components.keypress/t10276";
playfair_cljs.components.keypress.t10276.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.keypress/t10276");
});
playfair_cljs.components.keypress.t10276.prototype.om$core$IRender$ = true;
playfair_cljs.components.keypress.t10276.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,"");
});
playfair_cljs.components.keypress.t10276.prototype.om$core$IWillMount$ = true;
playfair_cljs.components.keypress.t10276.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var keychan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"keychan","keychan",4493860259));var c__6080__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6081__auto__ = (function (){var switch__6010__auto__ = (function (state_10301){var state_val_10302 = (state_10301[1]);if((state_val_10302 === 1))
{var state_10301__$1 = state_10301;var statearr_10303_10322 = state_10301__$1;(statearr_10303_10322[2] = null);
(statearr_10303_10322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10302 === 2))
{var state_10301__$1 = state_10301;if(true)
{var statearr_10304_10323 = state_10301__$1;(statearr_10304_10323[1] = 4);
} else
{var statearr_10305_10324 = state_10301__$1;(statearr_10305_10324[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10302 === 3))
{var inst_10299 = (state_10301[2]);var state_10301__$1 = state_10301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10301__$1,inst_10299);
} else
{if((state_val_10302 === 4))
{var inst_10282 = [keychan];var inst_10283 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10282,null));var state_10301__$1 = state_10301;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10301__$1,7,inst_10283);
} else
{if((state_val_10302 === 5))
{var state_10301__$1 = state_10301;var statearr_10306_10325 = state_10301__$1;(statearr_10306_10325[2] = null);
(statearr_10306_10325[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10302 === 6))
{var inst_10297 = (state_10301[2]);var state_10301__$1 = state_10301;var statearr_10307_10326 = state_10301__$1;(statearr_10307_10326[2] = inst_10297);
(statearr_10307_10326[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10302 === 7))
{var inst_10285 = (state_10301[2]);var inst_10286 = cljs.core.nth.call(null,inst_10285,0,null);var inst_10287 = cljs.core.nth.call(null,inst_10285,1,null);var inst_10288 = cljs.core._EQ_.call(null,inst_10287,keychan);var state_10301__$1 = (function (){var statearr_10308 = state_10301;(statearr_10308[7] = inst_10286);
return statearr_10308;
})();if(inst_10288)
{var statearr_10309_10327 = state_10301__$1;(statearr_10309_10327[1] = 8);
} else
{var statearr_10310_10328 = state_10301__$1;(statearr_10310_10328[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10302 === 8))
{var inst_10286 = (state_10301[7]);var inst_10290 = playfair_cljs.components.keypress.handle_key_event.call(null,self__.app,inst_10286);var state_10301__$1 = state_10301;var statearr_10311_10329 = state_10301__$1;(statearr_10311_10329[2] = inst_10290);
(statearr_10311_10329[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10302 === 9))
{var state_10301__$1 = state_10301;var statearr_10312_10330 = state_10301__$1;(statearr_10312_10330[2] = null);
(statearr_10312_10330[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10302 === 10))
{var inst_10293 = (state_10301[2]);var state_10301__$1 = (function (){var statearr_10313 = state_10301;(statearr_10313[8] = inst_10293);
return statearr_10313;
})();var statearr_10314_10331 = state_10301__$1;(statearr_10314_10331[2] = null);
(statearr_10314_10331[1] = 2);
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
var state_machine__6011__auto____0 = (function (){var statearr_10318 = [null,null,null,null,null,null,null,null,null];(statearr_10318[0] = state_machine__6011__auto__);
(statearr_10318[1] = 1);
return statearr_10318;
});
var state_machine__6011__auto____1 = (function (state_10301){while(true){
var ret_value__6012__auto__ = (function (){try{while(true){
var result__6013__auto__ = switch__6010__auto__.call(null,state_10301);if(cljs.core.keyword_identical_QMARK_.call(null,result__6013__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6013__auto__;
}
break;
}
}catch (e10319){if((e10319 instanceof Object))
{var ex__6014__auto__ = e10319;var statearr_10320_10332 = state_10301;(statearr_10320_10332[5] = ex__6014__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10301);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6012__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10333 = state_10301;
state_10301 = G__10333;
continue;
}
} else
{return ret_value__6012__auto__;
}
break;
}
});
state_machine__6011__auto__ = function(state_10301){
switch(arguments.length){
case 0:
return state_machine__6011__auto____0.call(this);
case 1:
return state_machine__6011__auto____1.call(this,state_10301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6011__auto____0;
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6011__auto____1;
return state_machine__6011__auto__;
})()
;})(switch__6010__auto__))
})();var state__6082__auto__ = (function (){var statearr_10321 = f__6081__auto__.call(null);(statearr_10321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6080__auto__);
return statearr_10321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6082__auto__);
}));
return c__6080__auto__;
});
playfair_cljs.components.keypress.t10276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10278){var self__ = this;
var _10278__$1 = this;return self__.meta10277;
});
playfair_cljs.components.keypress.t10276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10278,meta10277__$1){var self__ = this;
var _10278__$1 = this;return (new playfair_cljs.components.keypress.t10276(self__.owner,self__.app,self__.key_listener_component,meta10277__$1));
});
playfair_cljs.components.keypress.__GT_t10276 = (function __GT_t10276(owner__$1,app__$1,key_listener_component__$1,meta10277){return (new playfair_cljs.components.keypress.t10276(owner__$1,app__$1,key_listener_component__$1,meta10277));
});
}
return (new playfair_cljs.components.keypress.t10276(owner,app,key_listener_component,null));
});

//# sourceMappingURL=keypress.js.map