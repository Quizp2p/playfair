// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.asCompiler');
goog.require('cljs.core');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.csCompiler');
goog.require('playfair_cljs.csCompiler');
playfair_cljs.asCompiler.cs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rect","rect",1017400662),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"circle","circle",3948654658),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.PersistentVector.EMPTY], null);
playfair_cljs.asCompiler.count_all_steps = (function count_all_steps(steps){return cljs.core.reduce.call(null,(function (accum,p__12457){var map__12458 = p__12457;var map__12458__$1 = ((cljs.core.seq_QMARK_.call(null,map__12458))?cljs.core.apply.call(null,cljs.core.hash_map,map__12458):map__12458);var step = map__12458__$1;var step_name = cljs.core.get.call(null,map__12458__$1,new cljs.core.Keyword(null,"step-name","step-name",2312562782));if(cljs.core._EQ_.call(null,step_name,new cljs.core.Keyword(null,"for","for",1014005819)))
{return (accum + (cljs.core.count.call(null,new cljs.core.Keyword(null,"for-steps","for-steps",1009839253).cljs$core$IFn$_invoke$arity$1(step)) * new cljs.core.Keyword(null,"times","times",1124268728).cljs$core$IFn$_invoke$arity$1(step)));
} else
{return (accum + 1);
}
}),0,steps);
});
playfair_cljs.asCompiler.shape_lookup_vars = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from-shape","from-shape",2082768688),new cljs.core.Keyword(null,"to-shape","to-shape",2442812737)], null),new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872)], null),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872),new cljs.core.Keyword(null,"to-shape","to-shape",2442812737)], null),new cljs.core.Keyword(null,"rotate","rotate",4383690957),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872)], null),new cljs.core.Keyword(null,"path-start","path-start",761511980),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], null),new cljs.core.Keyword(null,"path-extend","path-extend",1383118132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], null)], null);
playfair_cljs.asCompiler.get_cs_count = (function get_cs_count(cs){return cljs.core.reduce.call(null,(function (accum,p__12461){var vec__12462 = p__12461;var s_key = cljs.core.nth.call(null,vec__12462,0,null);var s_vec = cljs.core.nth.call(null,vec__12462,1,null);return cljs.core.assoc.call(null,accum,s_key,cljs.core.count.call(null,s_vec));
}),cljs.core.PersistentArrayMap.EMPTY,cs);
});
playfair_cljs.asCompiler.check_for_step = (function check_for_step(loop_ind,s_count,f_s_count){return (function (p__12466){var map__12467 = p__12466;var map__12467__$1 = ((cljs.core.seq_QMARK_.call(null,map__12467))?cljs.core.apply.call(null,cljs.core.hash_map,map__12467):map__12467);var step = map__12467__$1;var step_name = cljs.core.get.call(null,map__12467__$1,new cljs.core.Keyword(null,"step-name","step-name",2312562782));return cljs.core.reduce.call(null,(function (step__$1,lookup_var){if(cljs.core.truth_(lookup_var.call(null,step__$1)))
{var vec__12468 = lookup_var.call(null,step__$1);var s_name = cljs.core.nth.call(null,vec__12468,0,null);var s_ind = cljs.core.nth.call(null,vec__12468,1,null);if((s_name.call(null,s_count) <= s_ind))
{return cljs.core.assoc.call(null,step__$1,lookup_var,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_name,(s_ind + (loop_ind * s_name.call(null,f_s_count)))], null));
} else
{return step__$1;
}
} else
{return step__$1;
}
}),step,step_name.call(null,playfair_cljs.asCompiler.shape_lookup_vars));
});
});
playfair_cljs.asCompiler.get_shape_count = (function get_shape_count(steps){return cljs.core.reduce.call(null,(function (s_count,p__12471){var map__12472 = p__12471;var map__12472__$1 = ((cljs.core.seq_QMARK_.call(null,map__12472))?cljs.core.apply.call(null,cljs.core.hash_map,map__12472):map__12472);var shape = cljs.core.get.call(null,map__12472__$1,new cljs.core.Keyword(null,"shape","shape",1123304211));if(cljs.core.truth_(shape))
{return cljs.core.update_in.call(null,s_count,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),cljs.core.inc);
} else
{return s_count;
}
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rect","rect",1017400662),0,new cljs.core.Keyword(null,"line","line",1017226086),0,new cljs.core.Keyword(null,"path","path",1017337751),0,new cljs.core.Keyword(null,"circle","circle",3948654658),0], null),steps);
});
playfair_cljs.asCompiler.test_for_step = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step-name","step-name",2312562782),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.Keyword(null,"times","times",1124268728),3,new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"step-name","step-name",2312562782),new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"shape","shape",1123304211),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"x","x",1013904362),317,new cljs.core.Keyword(null,"y","y",1013904363),402,new cljs.core.Keyword(null,"to-node","to-node",4107897222),new cljs.core.Keyword(null,"middle-point","middle-point",4048024266),new cljs.core.Keyword(null,"to-shape","to-shape",2442812737),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),0], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"step-name","step-name",2312562782),new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"shape","shape",1123304211),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"x","x",1013904362),382,new cljs.core.Keyword(null,"y","y",1013904363),240,new cljs.core.Keyword(null,"to-node","to-node",4107897222),new cljs.core.Keyword(null,"middle-point","middle-point",4048024266),new cljs.core.Keyword(null,"to-shape","to-shape",2442812737),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),1], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"step-name","step-name",2312562782),new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),0], null),new cljs.core.Keyword(null,"node","node",1017291124),new cljs.core.Keyword(null,"last-point","last-point",1861953291),new cljs.core.Keyword(null,"scale-val","scale-val",3429794704),0.8988448264715291], null)], null)], null);
playfair_cljs.asCompiler.unwrap_for_step = (function unwrap_for_step(p__12473,shape_count){var map__12475 = p__12473;var map__12475__$1 = ((cljs.core.seq_QMARK_.call(null,map__12475))?cljs.core.apply.call(null,cljs.core.hash_map,map__12475):map__12475);var for_steps = cljs.core.get.call(null,map__12475__$1,new cljs.core.Keyword(null,"for-steps","for-steps",1009839253));var times = cljs.core.get.call(null,map__12475__$1,new cljs.core.Keyword(null,"times","times",1124268728));var expanded_f_steps = cljs.core.vec.call(null,cljs.core.repeat.call(null,times,for_steps));return cljs.core.vec.call(null,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,(function (loop_ind,for_loop){return cljs.core.map.call(null,playfair_cljs.asCompiler.check_for_step.call(null,loop_ind,shape_count,playfair_cljs.asCompiler.get_shape_count.call(null,for_steps)),for_loop);
}),expanded_f_steps)));
});
playfair_cljs.asCompiler.data_variables = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"rotate","rotate",4383690957),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate-val","rotate-val",934012705)], null),new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"diffX","diffX",1109485669),new cljs.core.Keyword(null,"diffY","diffY",1109485670)], null),new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale-val","scale-val",3429794704)], null),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"times","times",1124268728)], null),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diffX","diffX",1109485669),new cljs.core.Keyword(null,"diffY","diffY",1109485670)], null),new cljs.core.Keyword(null,"path-start","path-start",761511980),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], null),new cljs.core.Keyword(null,"path-extend","path-extend",1383118132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], null)], null);
playfair_cljs.asCompiler.check_data = (function() {
var check_data = null;
var check_data__2 = (function (step_map,data){return check_data.call(null,step_map,data,0);
});
var check_data__3 = (function (step_map,data,loop_index){var data_vars = new cljs.core.Keyword(null,"step-name","step-name",2312562782).cljs$core$IFn$_invoke$arity$1(step_map).call(null,playfair_cljs.asCompiler.data_variables);return cljs.core.reduce.call(null,(function (new_step_map,p__12478){var vec__12479 = p__12478;var step_key = cljs.core.nth.call(null,vec__12479,0,null);var step_val = cljs.core.nth.call(null,vec__12479,1,null);return cljs.core.assoc.call(null,new_step_map,step_key,(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.some.call(null,(function (d_val){return cljs.core._EQ_.call(null,step_key,d_val);
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
playfair_cljs.asCompiler.check_active = (function check_active(active_steps,ind){if(((active_steps == null)) || (cljs.core.vector_QMARK_.call(null,active_steps.call(null,0))))
{return null;
} else
{var vec__12482 = active_steps;var s1 = cljs.core.nth.call(null,vec__12482,0,null);var s2 = cljs.core.nth.call(null,vec__12482,1,null);return cljs.core.some.call(null,(function (p1__12480_SHARP_){return cljs.core._EQ_.call(null,p1__12480_SHARP_,ind);
}),cljs.core.range.call(null,s1,(s2 + 1)));
}
});
playfair_cljs.asCompiler.check_for_data = (function check_for_data(u_w_steps,data,loop_size){return cljs.core.map_indexed.call(null,(function (i,step){return playfair_cljs.asCompiler.check_data.call(null,step,data,cljs.core.quot.call(null,i,loop_size));
}),u_w_steps);
});
playfair_cljs.asCompiler.get_for_cs = (function get_for_cs(old_cs,steps,p__12484,ind,data){var vec__12487 = p__12484;var a_s1 = cljs.core.nth.call(null,vec__12487,0,null);var a_s2 = cljs.core.nth.call(null,vec__12487,1,null);var map__12488 = steps.call(null,ind);var map__12488__$1 = ((cljs.core.seq_QMARK_.call(null,map__12488))?cljs.core.apply.call(null,cljs.core.hash_map,map__12488):map__12488);var f_step = map__12488__$1;var times = cljs.core.get.call(null,map__12488__$1,new cljs.core.Keyword(null,"times","times",1124268728));var for_steps = cljs.core.get.call(null,map__12488__$1,new cljs.core.Keyword(null,"for-steps","for-steps",1009839253));var get_loop_ind = ((function (map__12488,map__12488__$1,f_step,times,for_steps){
return (function (p1__12483_SHARP_){return ((p1__12483_SHARP_.call(null,1) * cljs.core.count.call(null,for_steps)) + p1__12483_SHARP_.call(null,2));
});})(map__12488,map__12488__$1,f_step,times,for_steps))
;var un_w_steps = playfair_cljs.asCompiler.check_for_data.call(null,playfair_cljs.asCompiler.unwrap_for_step.call(null,playfair_cljs.asCompiler.check_data.call(null,f_step,data),playfair_cljs.asCompiler.get_shape_count.call(null,cljs.core.subvec.call(null,steps,0,ind))),data,cljs.core.count.call(null,for_steps));var for_cs = playfair_cljs.asCompiler.app_state_to_steps.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"steps","steps",1123665561),un_w_steps,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),((typeof a_s1 === 'number')?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [get_loop_ind.call(null,a_s1),get_loop_ind.call(null,a_s2)], null)),new cljs.core.Keyword(null,"data","data",1016980252),data], null),old_cs);return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.Keyword(null,"steps","steps",1123665561),((typeof a_s2 === 'number')?cljs.core.subvec.call(null,for_cs,0,cljs.core.count.call(null,for_steps)):cljs.core.subvec.call(null,for_cs,(a_s2.call(null,1) * cljs.core.count.call(null,for_steps)),((a_s2.call(null,1) + 1) * cljs.core.count.call(null,for_steps)))),new cljs.core.Keyword(null,"text","text",1017460895),playfair_cljs.csCompiler.get_text.call(null,f_step),new cljs.core.Keyword(null,"final-step","final-step",3401372725),cljs.core.last.call(null,for_cs),new cljs.core.Keyword(null,"active?","active?",4147074411),playfair_cljs.asCompiler.check_active.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_s1,a_s2], null),ind),new cljs.core.Keyword(null,"all-active?","all-active?",1078362431),null], null);
});
playfair_cljs.asCompiler.app_state_to_steps = (function() {
var app_state_to_steps = null;
var app_state_to_steps__1 = (function (as){return app_state_to_steps.call(null,as,playfair_cljs.asCompiler.cs);
});
var app_state_to_steps__2 = (function (p__12489,cs){var map__12491 = p__12489;var map__12491__$1 = ((cljs.core.seq_QMARK_.call(null,map__12491))?cljs.core.apply.call(null,cljs.core.hash_map,map__12491):map__12491);var data = cljs.core.get.call(null,map__12491__$1,new cljs.core.Keyword(null,"data","data",1016980252));var active_steps = cljs.core.get.call(null,map__12491__$1,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298));var steps = cljs.core.get.call(null,map__12491__$1,new cljs.core.Keyword(null,"steps","steps",1123665561));var l_steps = steps;var canvas_state = cs;var app_state = cljs.core.PersistentVector.EMPTY;var ind = 0;while(true){
if(cljs.core.seq.call(null,l_steps))
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"step-name","step-name",2312562782).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l_steps)),new cljs.core.Keyword(null,"for","for",1014005819)))
{var for_cs = playfair_cljs.asCompiler.get_for_cs.call(null,canvas_state,steps,active_steps,ind,data);{
var G__12492 = cljs.core.next.call(null,l_steps);
var G__12493 = new cljs.core.Keyword(null,"final-step","final-step",3401372725).cljs$core$IFn$_invoke$arity$1(for_cs).call(null,0);
var G__12494 = cljs.core.conj.call(null,app_state,for_cs);
var G__12495 = (ind + 1);
l_steps = G__12492;
canvas_state = G__12493;
app_state = G__12494;
ind = G__12495;
continue;
}
} else
{var new_cs = playfair_cljs.csCompiler.get_cs_fn.call(null,playfair_cljs.asCompiler.check_data.call(null,cljs.core.first.call(null,l_steps),data)).call(null,canvas_state);{
var G__12496 = cljs.core.next.call(null,l_steps);
var G__12497 = new_cs;
var G__12498 = cljs.core.conj.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_cs,playfair_cljs.csCompiler.get_text.call(null,cljs.core.first.call(null,l_steps)),playfair_cljs.asCompiler.check_active.call(null,active_steps,ind)], null));
var G__12499 = (ind + 1);
l_steps = G__12496;
canvas_state = G__12497;
app_state = G__12498;
ind = G__12499;
continue;
}
}
} else
{return app_state;
}
break;
}
});
app_state_to_steps = function(p__12489,cs){
switch(arguments.length){
case 1:
return app_state_to_steps__1.call(this,p__12489);
case 2:
return app_state_to_steps__2.call(this,p__12489,cs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app_state_to_steps.cljs$core$IFn$_invoke$arity$1 = app_state_to_steps__1;
app_state_to_steps.cljs$core$IFn$_invoke$arity$2 = app_state_to_steps__2;
return app_state_to_steps;
})()
;
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
playfair_cljs.asCompiler.get_last_cs = (function get_last_cs(app_state){return playfair_cljs.asCompiler.get_last_state.call(null,cljs.core.last.call(null,playfair_cljs.asCompiler.app_state_to_steps.call(null,app_state)));
});
playfair_cljs.asCompiler.make_renderable = (function make_renderable(p__12500){var map__12502 = p__12500;var map__12502__$1 = ((cljs.core.seq_QMARK_.call(null,map__12502))?cljs.core.apply.call(null,cljs.core.hash_map,map__12502):map__12502);var path = cljs.core.get.call(null,map__12502__$1,new cljs.core.Keyword(null,"path","path",1017337751));var line = cljs.core.get.call(null,map__12502__$1,new cljs.core.Keyword(null,"line","line",1017226086));var circle = cljs.core.get.call(null,map__12502__$1,new cljs.core.Keyword(null,"circle","circle",3948654658));var rect = cljs.core.get.call(null,map__12502__$1,new cljs.core.Keyword(null,"rect","rect",1017400662));return cljs.core.vec.call(null,cljs.core.flatten.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,rect,circle,line,path)));
});

//# sourceMappingURL=asCompiler.js.map