// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.asCompiler');
goog.require('cljs.core');
goog.require('playfair_cljs.csCompiler');
goog.require('playfair_cljs.csCompiler');
playfair_cljs.asCompiler.cs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rect","rect",1017400662),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"circle","circle",3948654658),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.PersistentVector.EMPTY], null);
playfair_cljs.asCompiler.count_all_steps = (function count_all_steps(steps){return cljs.core.reduce.call(null,(function (accum,p__9632){var map__9633 = p__9632;var map__9633__$1 = ((cljs.core.seq_QMARK_.call(null,map__9633))?cljs.core.apply.call(null,cljs.core.hash_map,map__9633):map__9633);var step = map__9633__$1;var step_name = cljs.core.get.call(null,map__9633__$1,new cljs.core.Keyword(null,"step-name","step-name",2312562782));if(cljs.core._EQ_.call(null,step_name,new cljs.core.Keyword(null,"for","for",1014005819)))
{return (accum + (cljs.core.count.call(null,new cljs.core.Keyword(null,"for-steps","for-steps",1009839253).cljs$core$IFn$_invoke$arity$1(step)) * new cljs.core.Keyword(null,"times","times",1124268728).cljs$core$IFn$_invoke$arity$1(step)));
} else
{return (accum + 1);
}
}),0,steps);
});
playfair_cljs.asCompiler.shape_lookup_vars = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from-shape","from-shape",2082768688),new cljs.core.Keyword(null,"to-shape","to-shape",2442812737)], null),new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872)], null),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872),new cljs.core.Keyword(null,"to-shape","to-shape",2442812737)], null),new cljs.core.Keyword(null,"rotate","rotate",4383690957),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872)], null),new cljs.core.Keyword(null,"path-start","path-start",761511980),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], null),new cljs.core.Keyword(null,"path-extend","path-extend",1383118132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], null)], null);
playfair_cljs.asCompiler.get_cs_count = (function get_cs_count(cs){return cljs.core.reduce.call(null,(function (accum,p__9636){var vec__9637 = p__9636;var s_key = cljs.core.nth.call(null,vec__9637,0,null);var s_vec = cljs.core.nth.call(null,vec__9637,1,null);return cljs.core.assoc.call(null,accum,s_key,cljs.core.count.call(null,s_vec));
}),cljs.core.PersistentArrayMap.EMPTY,cs);
});
playfair_cljs.asCompiler.check_for_step = (function check_for_step(loop_ind,canvas_state){var cs_with_count = playfair_cljs.asCompiler.get_cs_count.call(null,canvas_state);return (function (p__9641){var map__9642 = p__9641;var map__9642__$1 = ((cljs.core.seq_QMARK_.call(null,map__9642))?cljs.core.apply.call(null,cljs.core.hash_map,map__9642):map__9642);var step = map__9642__$1;var step_name = cljs.core.get.call(null,map__9642__$1,new cljs.core.Keyword(null,"step-name","step-name",2312562782));return cljs.core.reduce.call(null,(function (alt_step,l_var){if(cljs.core.truth_(l_var.call(null,alt_step)))
{var vec__9643 = l_var.call(null,alt_step);var s_name = cljs.core.nth.call(null,vec__9643,0,null);var s_ind = cljs.core.nth.call(null,vec__9643,1,null);if((s_name.call(null,cs_with_count) <= s_ind))
{return cljs.core.assoc.call(null,alt_step,l_var,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_name,(s_ind + loop_ind)], null));
} else
{return alt_step;
}
} else
{return alt_step;
}
}),step,step_name.call(null,playfair_cljs.asCompiler.shape_lookup_vars));
});
});
playfair_cljs.asCompiler.unwrap_for_step = (function unwrap_for_step(p__9644,canvas_state){var map__9646 = p__9644;var map__9646__$1 = ((cljs.core.seq_QMARK_.call(null,map__9646))?cljs.core.apply.call(null,cljs.core.hash_map,map__9646):map__9646);var for_steps = cljs.core.get.call(null,map__9646__$1,new cljs.core.Keyword(null,"for-steps","for-steps",1009839253));var times = cljs.core.get.call(null,map__9646__$1,new cljs.core.Keyword(null,"times","times",1124268728));var expanded_f_steps = cljs.core.vec.call(null,cljs.core.repeat.call(null,times,for_steps));return cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (loop_ind,for_loop){return cljs.core.vec.call(null,cljs.core.map.call(null,playfair_cljs.asCompiler.check_for_step.call(null,loop_ind,canvas_state),for_loop));
}),expanded_f_steps));
});
playfair_cljs.asCompiler.step_func_dictionary = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.csCompiler.make_draw_cs,playfair_cljs.csCompiler.draw_text], null),new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.csCompiler.make_scale_cs,playfair_cljs.csCompiler.scale_text], null),new cljs.core.Keyword(null,"rotate","rotate",4383690957),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.csCompiler.make_rotate_cs,playfair_cljs.csCompiler.rotate_text], null),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.csCompiler.make_move_cs,playfair_cljs.csCompiler.move_text], null),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,playfair_cljs.csCompiler.for_text], null),new cljs.core.Keyword(null,"path-start","path-start",761511980),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.csCompiler.start_path_cs,playfair_cljs.csCompiler.path_start_text], null),new cljs.core.Keyword(null,"path-extend","path-extend",1383118132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.csCompiler.extend_path_cs,playfair_cljs.csCompiler.path_extend_text], null)], null);
playfair_cljs.asCompiler.add_active_for = (function add_active_for(for_steps,pre_for_index,check_index){var cs_steps = for_steps;var index = pre_for_index;var processed_cs_steps = cljs.core.PersistentVector.EMPTY;var active_section = 0;while(true){
if(cljs.core.truth_(cs_steps))
{var map__9650 = cljs.core.reduce.call(null,((function (cs_steps,index,processed_cs_steps,active_section){
return (function (p__9651,cs_step){var map__9652 = p__9651;var map__9652__$1 = ((cljs.core.seq_QMARK_.call(null,map__9652))?cljs.core.apply.call(null,cljs.core.hash_map,map__9652):map__9652);var active_section__$1 = cljs.core.get.call(null,map__9652__$1,new cljs.core.Keyword(null,"active-section","active-section",1833856656));var inner_cs_steps = cljs.core.get.call(null,map__9652__$1,new cljs.core.Keyword(null,"inner-cs-steps","inner-cs-steps",2228537491));var inner_index = cljs.core.get.call(null,map__9652__$1,new cljs.core.Keyword(null,"inner-index","inner-index",3629442573));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inner-index","inner-index",3629442573),(inner_index + 1),new cljs.core.Keyword(null,"inner-cs-steps","inner-cs-steps",2228537491),cljs.core.conj.call(null,inner_cs_steps,cljs.core.conj.call(null,cs_step,check_index.call(null,inner_index))),new cljs.core.Keyword(null,"active-section","active-section",1833856656),(cljs.core.truth_(check_index.call(null,inner_index))?Math.floor(((inner_index - pre_for_index) / cljs.core.count.call(null,cljs.core.first.call(null,for_steps)))):active_section__$1)], null);
});})(cs_steps,index,processed_cs_steps,active_section))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inner-index","inner-index",3629442573),index,new cljs.core.Keyword(null,"inner-cs-steps","inner-cs-steps",2228537491),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active-section","active-section",1833856656),active_section], null),cljs.core.first.call(null,cs_steps));var map__9650__$1 = ((cljs.core.seq_QMARK_.call(null,map__9650))?cljs.core.apply.call(null,cljs.core.hash_map,map__9650):map__9650);var active_section__$1 = cljs.core.get.call(null,map__9650__$1,new cljs.core.Keyword(null,"active-section","active-section",1833856656));var inner_index = cljs.core.get.call(null,map__9650__$1,new cljs.core.Keyword(null,"inner-index","inner-index",3629442573));var inner_cs_steps = cljs.core.get.call(null,map__9650__$1,new cljs.core.Keyword(null,"inner-cs-steps","inner-cs-steps",2228537491));{
var G__9653 = cljs.core.next.call(null,cs_steps);
var G__9654 = inner_index;
var G__9655 = cljs.core.conj.call(null,processed_cs_steps,inner_cs_steps);
var G__9656 = active_section__$1;
cs_steps = G__9653;
index = G__9654;
processed_cs_steps = G__9655;
active_section = G__9656;
continue;
}
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"processed-cs-steps","processed-cs-steps",3924943515),processed_cs_steps.call(null,active_section),new cljs.core.Keyword(null,"index","index",1114250308),index,new cljs.core.Keyword(null,"final-step","final-step",3401372725),cljs.core.last.call(null,cljs.core.last.call(null,processed_cs_steps))], null);
}
break;
}
});
playfair_cljs.asCompiler.data_variables = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"rotate","rotate",4383690957),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate-val","rotate-val",934012705)], null),new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"diffX","diffX",1109485669),new cljs.core.Keyword(null,"diffY","diffY",1109485670)], null),new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale-val","scale-val",3429794704)], null),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"times","times",1124268728)], null),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diffX","diffX",1109485669),new cljs.core.Keyword(null,"diffY","diffY",1109485670)], null),new cljs.core.Keyword(null,"path-start","path-start",761511980),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], null),new cljs.core.Keyword(null,"path-extend","path-extend",1383118132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], null)], null);
playfair_cljs.asCompiler.check_data = (function() {
var check_data = null;
var check_data__2 = (function (step_map,data){return check_data.call(null,step_map,data,0);
});
var check_data__3 = (function (step_map,data,loop_index){var data_vars = new cljs.core.Keyword(null,"step-name","step-name",2312562782).cljs$core$IFn$_invoke$arity$1(step_map).call(null,playfair_cljs.asCompiler.data_variables);return cljs.core.reduce.call(null,(function (new_step_map,p__9659){var vec__9660 = p__9659;var step_key = cljs.core.nth.call(null,vec__9660,0,null);var step_val = cljs.core.nth.call(null,vec__9660,1,null);return cljs.core.assoc.call(null,new_step_map,step_key,(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.some.call(null,(function (d_val){return cljs.core._EQ_.call(null,step_key,d_val);
}),data_vars);if(cljs.core.truth_(and__3429__auto__))
{return (step_val instanceof cljs.core.Keyword);
} else
{return and__3429__auto__;
}
})())?((cljs.core.vector_QMARK_.call(null,step_val.call(null,data)))?step_val.call(null,data).call(null,loop_index):step_val.call(null,data)):step_val));
}),cljs.core.PersistentArrayMap.EMPTY,step_map);
});
check_data = function(step_map,data,loop_index){
switch(arguments.length){
case 2:
return check_data__2.call(this,step_map,data);
case 3:
return check_data__3.call(this,step_map,data,loop_index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_data.cljs$core$IFn$_invoke$arity$2 = check_data__2;
check_data.cljs$core$IFn$_invoke$arity$3 = check_data__3;
return check_data;
})()
;
playfair_cljs.asCompiler.for_state_maker = (function for_state_maker(exp_for_steps,data,cs){var cs__$1 = cs;var loops = exp_for_steps;var state = cljs.core.PersistentVector.EMPTY;var loop_index = 0;while(true){
if(cljs.core.truth_(loops))
{var inner_l_s = cljs.core.reduce.call(null,((function (cs__$1,loops,state,loop_index){
return (function (accum,p__9664){var map__9665 = p__9664;var map__9665__$1 = ((cljs.core.seq_QMARK_.call(null,map__9665))?cljs.core.apply.call(null,cljs.core.hash_map,map__9665):map__9665);var step = map__9665__$1;var step_name = cljs.core.get.call(null,map__9665__$1,new cljs.core.Keyword(null,"step-name","step-name",2312562782));var vec__9666 = step_name.call(null,playfair_cljs.asCompiler.step_func_dictionary);var state_maker = cljs.core.nth.call(null,vec__9666,0,null);var text_maker = cljs.core.nth.call(null,vec__9666,1,null);var data_checked_step = playfair_cljs.asCompiler.check_data.call(null,step,data,loop_index);var last_cs = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,accum),0))?cs__$1:cljs.core.last.call(null,accum).call(null,0));return cljs.core.conj.call(null,accum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_maker.call(null,last_cs,data_checked_step),text_maker.call(null,step)], null));
});})(cs__$1,loops,state,loop_index))
,cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,loops));{
var G__9667 = cljs.core.last.call(null,inner_l_s).call(null,0);
var G__9668 = cljs.core.next.call(null,loops);
var G__9669 = cljs.core.conj.call(null,state,inner_l_s);
var G__9670 = (loop_index + 1);
cs__$1 = G__9667;
loops = G__9668;
state = G__9669;
loop_index = G__9670;
continue;
}
} else
{return state;
}
break;
}
});
playfair_cljs.asCompiler.steps_to_app_state = (function steps_to_app_state(p__9671){var map__9679 = p__9671;var map__9679__$1 = ((cljs.core.seq_QMARK_.call(null,map__9679))?cljs.core.apply.call(null,cljs.core.hash_map,map__9679):map__9679);var data = cljs.core.get.call(null,map__9679__$1,new cljs.core.Keyword(null,"data","data",1016980252));var active_steps = cljs.core.get.call(null,map__9679__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__9679__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var func_lookup = playfair_cljs.asCompiler.step_func_dictionary;var active_step_range = cljs.core.range.call(null,active_steps.call(null,0),(active_steps.call(null,1) + 1));return new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__9680,p__9681){var map__9682 = p__9680;var map__9682__$1 = ((cljs.core.seq_QMARK_.call(null,map__9682))?cljs.core.apply.call(null,cljs.core.hash_map,map__9682):map__9682);var index = cljs.core.get.call(null,map__9682__$1,new cljs.core.Keyword(null,"index","index",1114250308));var canvas_state = cljs.core.get.call(null,map__9682__$1,new cljs.core.Keyword(null,"canvas-state","canvas-state",1660346190));var app_state = cljs.core.get.call(null,map__9682__$1,new cljs.core.Keyword(null,"app-state","app-state",1424976215));var map__9683 = p__9681;var map__9683__$1 = ((cljs.core.seq_QMARK_.call(null,map__9683))?cljs.core.apply.call(null,cljs.core.hash_map,map__9683):map__9683);var step = map__9683__$1;var step_name = cljs.core.get.call(null,map__9683__$1,new cljs.core.Keyword(null,"step-name","step-name",2312562782));var vec__9684 = step_name.call(null,func_lookup);var state_maker = cljs.core.nth.call(null,vec__9684,0,null);var text_maker = cljs.core.nth.call(null,vec__9684,1,null);var check_index = ((function (vec__9684,state_maker,text_maker){
return (function (dex){return cljs.core.some.call(null,((function (vec__9684,state_maker,text_maker){
return (function (x){return cljs.core._EQ_.call(null,dex,x);
});})(vec__9684,state_maker,text_maker))
,active_step_range);
});})(vec__9684,state_maker,text_maker))
;if(cljs.core._EQ_.call(null,step_name,new cljs.core.Keyword(null,"for","for",1014005819)))
{var checked_step = playfair_cljs.asCompiler.check_data.call(null,step,data);var unwrap_steps = playfair_cljs.asCompiler.unwrap_for_step.call(null,checked_step,canvas_state);var state = playfair_cljs.asCompiler.for_state_maker.call(null,unwrap_steps,data,canvas_state);var map__9685 = playfair_cljs.asCompiler.add_active_for.call(null,state,index,check_index);var map__9685__$1 = ((cljs.core.seq_QMARK_.call(null,map__9685))?cljs.core.apply.call(null,cljs.core.hash_map,map__9685):map__9685);var final_step = cljs.core.get.call(null,map__9685__$1,new cljs.core.Keyword(null,"final-step","final-step",3401372725));var index__$1 = cljs.core.get.call(null,map__9685__$1,new cljs.core.Keyword(null,"index","index",1114250308));var processed_cs_steps = cljs.core.get.call(null,map__9685__$1,new cljs.core.Keyword(null,"processed-cs-steps","processed-cs-steps",3924943515));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-state","app-state",1424976215),cljs.core.conj.call(null,app_state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.Keyword(null,"steps","steps",1123665561),processed_cs_steps,new cljs.core.Keyword(null,"text","text",1017460895),text_maker.call(null,step),new cljs.core.Keyword(null,"final-step","final-step",3401372725),final_step], null)),new cljs.core.Keyword(null,"canvas-state","canvas-state",1660346190),cljs.core.first.call(null,final_step),new cljs.core.Keyword(null,"index","index",1114250308),(index__$1 + 1)], null);
} else
{var state = state_maker.call(null,canvas_state,playfair_cljs.asCompiler.check_data.call(null,step,data));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-state","app-state",1424976215),cljs.core.conj.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,text_maker.call(null,step),check_index.call(null,index)], null)),new cljs.core.Keyword(null,"canvas-state","canvas-state",1660346190),state,new cljs.core.Keyword(null,"index","index",1114250308),(index + 1)], null);
}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-state","app-state",1424976215),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"canvas-state","canvas-state",1660346190),playfair_cljs.asCompiler.cs,new cljs.core.Keyword(null,"index","index",1114250308),0], null),steps));
});
playfair_cljs.asCompiler.get_last_state = (function() {
var get_last_state = null;
var get_last_state__1 = (function (ls){return get_last_state.call(null,ls,false);
});
var get_last_state__2 = (function (ls,text_QMARK_){if(cljs.core.truth_(ls))
{var index = (cljs.core.truth_(text_QMARK_)?1:0);if(cljs.core.map_QMARK_.call(null,ls))
{return new cljs.core.Keyword(null,"final-step","final-step",3401372725).cljs$core$IFn$_invoke$arity$1(ls).call(null,index);
} else
{return ls.call(null,index);
}
} else
{if(cljs.core.truth_(text_QMARK_))
{return "";
} else
{return playfair_cljs.asCompiler.cs;
}
}
});
get_last_state = function(ls,text_QMARK_){
switch(arguments.length){
case 1:
return get_last_state__1.call(this,ls);
case 2:
return get_last_state__2.call(this,ls,text_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_last_state.cljs$core$IFn$_invoke$arity$1 = get_last_state__1;
get_last_state.cljs$core$IFn$_invoke$arity$2 = get_last_state__2;
return get_last_state;
})()
;
playfair_cljs.asCompiler.get_last_cs = (function get_last_cs(app_state){return playfair_cljs.asCompiler.get_last_state.call(null,cljs.core.last.call(null,playfair_cljs.asCompiler.steps_to_app_state.call(null,app_state)));
});
playfair_cljs.asCompiler.make_renderable = (function make_renderable(p__9686){var map__9688 = p__9686;var map__9688__$1 = ((cljs.core.seq_QMARK_.call(null,map__9688))?cljs.core.apply.call(null,cljs.core.hash_map,map__9688):map__9688);var path = cljs.core.get.call(null,map__9688__$1,new cljs.core.Keyword(null,"path","path",1017337751));var line = cljs.core.get.call(null,map__9688__$1,new cljs.core.Keyword(null,"line","line",1017226086));var circle = cljs.core.get.call(null,map__9688__$1,new cljs.core.Keyword(null,"circle","circle",3948654658));var rect = cljs.core.get.call(null,map__9688__$1,new cljs.core.Keyword(null,"rect","rect",1017400662));return cljs.core.vec.call(null,cljs.core.flatten.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,rect,circle,line,path)));
});

//# sourceMappingURL=asCompiler.js.map