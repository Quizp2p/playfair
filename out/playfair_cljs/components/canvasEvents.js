// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.canvasEvents');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('playfair_cljs.math');
goog.require('playfair_cljs.shapes');
goog.require('playfair_cljs.general');
goog.require('om.dom');
goog.require('om.core');
goog.require('playfair_cljs.appstate');
goog.require('om.core');
goog.require('playfair_cljs.shapes');
goog.require('playfair_cljs.general');
goog.require('om.dom');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.appstate');
goog.require('playfair_cljs.math');
goog.require('cljs.core.async');
goog.require('playfair_cljs.debug');
playfair_cljs.components.canvasEvents.get_target_xy = (function get_target_xy(dom_node){var target_rect = dom_node.srcElement.getBoundingClientRect();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_rect.left,target_rect.top], null);
});
playfair_cljs.components.canvasEvents.inside_circle_QMARK_ = (function inside_circle_QMARK_(p__9682,p__9683,r){var vec__9686 = p__9682;var x = cljs.core.nth.call(null,vec__9686,0,null);var y = cljs.core.nth.call(null,vec__9686,1,null);var vec__9687 = p__9683;var cx = cljs.core.nth.call(null,vec__9687,0,null);var cy = cljs.core.nth.call(null,vec__9687,1,null);return (((x < (cx + r))) && ((x > (cx - r)))) && (((y < (cy + r))) && ((y > (cy - r))));
});
playfair_cljs.components.canvasEvents.get_rotate_val = (function get_rotate_val(p__9688,p__9689,p__9690){var vec__9694 = p__9688;var origin_x = cljs.core.nth.call(null,vec__9694,0,null);var origin_y = cljs.core.nth.call(null,vec__9694,1,null);var vec__9695 = p__9689;var c_m_x = cljs.core.nth.call(null,vec__9695,0,null);var c_m_y = cljs.core.nth.call(null,vec__9695,1,null);var vec__9696 = p__9690;var m_d_x = cljs.core.nth.call(null,vec__9696,0,null);var m_d_y = cljs.core.nth.call(null,vec__9696,1,null);var original_radius = playfair_cljs.math.distance_formula.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin_x,origin_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_d_x,m_d_y], null));var new_radius = playfair_cljs.math.distance_formula.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin_x,origin_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_m_x,c_m_y], null));var original_angle = playfair_cljs.math.abs.call(null,(playfair_cljs.math.acos.call(null,((m_d_x - origin_x) / original_radius)) - ((((m_d_y - origin_y) > 0))?(Math.PI * 2):0)));var new_angle = playfair_cljs.math.abs.call(null,(playfair_cljs.math.acos.call(null,((c_m_x - origin_x) / new_radius)) - ((((c_m_y - origin_y) > 0))?(Math.PI * 2):0)));return ((original_angle - new_angle) / (2 * Math.PI));
});
playfair_cljs.components.canvasEvents.check_snap = (function() {
var check_snap = null;
var check_snap__2 = (function (p__9697,state){var vec__9706 = p__9697;var m_x = cljs.core.nth.call(null,vec__9706,0,null);var m_y = cljs.core.nth.call(null,vec__9706,1,null);return check_snap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_x,m_y], null),state,null);
});
var check_snap__3 = (function (p__9698,state,lookup_QMARK_){var vec__9707 = p__9698;var m_x = cljs.core.nth.call(null,vec__9707,0,null);var m_y = cljs.core.nth.call(null,vec__9707,1,null);var state__$1 = (cljs.core.truth_(lookup_QMARK_)?cljs.core.assoc.call(null,state,lookup_QMARK_.call(null,0),playfair_cljs.general.dissoc_vec.call(null,lookup_QMARK_.call(null,0).call(null,state),lookup_QMARK_.call(null,1))):state);return cljs.core.filter.call(null,(function (x){return cljs.core.vector_QMARK_.call(null,x);
}),cljs.core.reduce.call(null,cljs.core.concat,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p__9708){var vec__9709 = p__9708;var s_name = cljs.core.nth.call(null,vec__9709,0,null);var s_vec = cljs.core.nth.call(null,vec__9709,1,null);return cljs.core.map_indexed.call(null,(function (ind,shape){return cljs.core.map.call(null,(function (p__9710){var vec__9711 = p__9710;var node = cljs.core.nth.call(null,vec__9711,0,null);var map__9712 = cljs.core.nth.call(null,vec__9711,1,null);var map__9712__$1 = ((cljs.core.seq_QMARK_.call(null,map__9712))?cljs.core.apply.call(null,cljs.core.hash_map,map__9712):map__9712);var y = cljs.core.get.call(null,map__9712__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__9712__$1,new cljs.core.Keyword(null,"x","x",1013904362));if(playfair_cljs.components.canvasEvents.inside_circle_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_x,m_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),playfair_cljs.shapes.node_radius))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_name,ind], null)], null);
} else
{return null;
}
}),new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(shape));
}),s_vec);
}),state__$1))));
});
check_snap = function(p__9698,state,lookup_QMARK_){
switch(arguments.length){
case 2:
return check_snap__2.call(this,p__9698,state);
case 3:
return check_snap__3.call(this,p__9698,state,lookup_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_snap.cljs$core$IFn$_invoke$arity$2 = check_snap__2;
check_snap.cljs$core$IFn$_invoke$arity$3 = check_snap__3;
return check_snap;
})()
;
playfair_cljs.components.canvasEvents.cleanse_draw = (function cleanse_draw(draw_map){return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,draw_map,new cljs.core.Keyword(null,"diffX","diffX",1109485669)),new cljs.core.Keyword(null,"diffY","diffY",1109485670)),new cljs.core.Keyword(null,"to-node","to-node",4107897222)),new cljs.core.Keyword(null,"to-shape","to-shape",2442812737));
});
playfair_cljs.components.canvasEvents.canvas_event_handler = (function canvas_event_handler(app_state,p__9719){var map__9729 = p__9719;var map__9729__$1 = ((cljs.core.seq_QMARK_.call(null,map__9729))?cljs.core.apply.call(null,cljs.core.hash_map,map__9729):map__9729);var event_data = map__9729__$1;var reciever = cljs.core.get.call(null,map__9729__$1,new cljs.core.Keyword(null,"reciever","reciever",4503726569));var e = cljs.core.get.call(null,map__9729__$1,new cljs.core.Keyword(null,"e","e",1013904343));var e_type = cljs.core.get.call(null,map__9729__$1,new cljs.core.Keyword(null,"e-type","e-type",3950582548));var bounded_rect = document.getElementById("bigCanvas").getBoundingClientRect();var vec__9730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounded_rect.left,bounded_rect.top], null);var target_x = cljs.core.nth.call(null,vec__9730,0,null);var target_y = cljs.core.nth.call(null,vec__9730,1,null);if(cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856)))
{cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gui_state){return cljs.core.assoc.call(null,gui_state,new cljs.core.Keyword(null,"canvas-m-pos","canvas-m-pos",1652704177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.clientX - target_x),(e.clientY - target_y)], null));
}));
var map__9731 = cljs.core.deref.call(null,playfair_cljs.appstate.gui_state);var map__9731__$1 = ((cljs.core.seq_QMARK_.call(null,map__9731))?cljs.core.apply.call(null,cljs.core.hash_map,map__9731):map__9731);var mouse_down_pos = cljs.core.get.call(null,map__9731__$1,new cljs.core.Keyword(null,"mouse-down-pos","mouse-down-pos",4288269891));var in_progress_QMARK_ = cljs.core.get.call(null,map__9731__$1,new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236));var canvas_m_pos = cljs.core.get.call(null,map__9731__$1,new cljs.core.Keyword(null,"canvas-m-pos","canvas-m-pos",1652704177));var mouse_down_QMARK_ = cljs.core.get.call(null,map__9731__$1,new cljs.core.Keyword(null,"mouse-down?","mouse-down?",745137191));var vec__9732 = canvas_m_pos;var c_m_x = cljs.core.nth.call(null,vec__9732,0,null);var c_m_y = cljs.core.nth.call(null,vec__9732,1,null);var vec__9733 = mouse_down_pos;var m_d_x = cljs.core.nth.call(null,vec__9733,0,null);var m_d_y = cljs.core.nth.call(null,vec__9733,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9713_SHARP_){return cljs.core._EQ_.call(null,in_progress_QMARK_,p1__9713_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.Keyword(null,"circle","circle",3948654658)], null))))
{var snapped_list = playfair_cljs.components.canvasEvents.check_snap.call(null,canvas_m_pos,new cljs.core.Keyword(null,"second-last-state","second-last-state",4343999749).cljs$core$IFn$_invoke$arity$1(event_data));if(cljs.core.empty_QMARK_.call(null,snapped_list))
{return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (steps){return cljs.core.conj.call(null,playfair_cljs.general.safe_pop.call(null,steps),playfair_cljs.general.multi_assoc.call(null,playfair_cljs.components.canvasEvents.cleanse_draw.call(null,cljs.core.last.call(null,steps)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diffX","diffX",1109485669),(c_m_x - m_d_x)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diffY","diffY",1109485670),(c_m_y - m_d_y)], null)));
}));
} else
{return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (steps){return cljs.core.conj.call(null,playfair_cljs.general.safe_pop.call(null,steps),playfair_cljs.general.multi_assoc.call(null,playfair_cljs.components.canvasEvents.cleanse_draw.call(null,cljs.core.last.call(null,steps)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-node","to-node",4107897222),cljs.core.first.call(null,snapped_list).call(null,0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-shape","to-shape",2442812737),cljs.core.first.call(null,snapped_list).call(null,1)], null)));
}));
}
} else
{if(cljs.core._EQ_.call(null,in_progress_QMARK_,new cljs.core.Keyword(null,"move","move",1017261891)))
{return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (steps){return cljs.core.conj.call(null,playfair_cljs.general.safe_pop.call(null,steps),(function (){var snapped_list = playfair_cljs.components.canvasEvents.check_snap.call(null,canvas_m_pos,playfair_cljs.shapes.get_last_cs.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state)),new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,steps)));if(cljs.core.empty_QMARK_.call(null,snapped_list))
{return playfair_cljs.general.multi_assoc.call(null,playfair_cljs.components.canvasEvents.cleanse_draw.call(null,cljs.core.last.call(null,steps)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diffX","diffX",1109485669),(c_m_x - m_d_x)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diffY","diffY",1109485670),(c_m_y - m_d_y)], null));
} else
{return playfair_cljs.general.multi_assoc.call(null,playfair_cljs.components.canvasEvents.cleanse_draw.call(null,cljs.core.last.call(null,steps)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-node","to-node",4107897222),cljs.core.first.call(null,snapped_list).call(null,0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-shape","to-shape",2442812737),cljs.core.first.call(null,snapped_list).call(null,1)], null));
}
})());
}));
} else
{if(cljs.core._EQ_.call(null,in_progress_QMARK_,new cljs.core.Keyword(null,"rotate","rotate",4383690957)))
{return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (steps){var vec__9734 = new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,steps));var s_name = cljs.core.nth.call(null,vec__9734,0,null);var s_index = cljs.core.nth.call(null,vec__9734,1,null);var from_node = new cljs.core.Keyword(null,"node","node",1017291124).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,steps)).call(null,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(s_name.call(null,playfair_cljs.shapes.get_last_cs.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state))).call(null,s_index)));var debug = playfair_cljs.debug.log.call(null,steps);return cljs.core.conj.call(null,playfair_cljs.general.safe_pop.call(null,steps),cljs.core.assoc.call(null,cljs.core.last.call(null,steps),new cljs.core.Keyword(null,"rotate-val","rotate-val",934012705),playfair_cljs.components.canvasEvents.get_rotate_val.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(from_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(from_node)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_m_x,c_m_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_d_x,m_d_y], null))));
}));
} else
{if(cljs.core._EQ_.call(null,in_progress_QMARK_,new cljs.core.Keyword(null,"scale","scale",1123155132)))
{return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (steps){var vec__9735 = new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,steps));var s_name = cljs.core.nth.call(null,vec__9735,0,null);var s_index = cljs.core.nth.call(null,vec__9735,1,null);var from_node = playfair_cljs.shapes.get_opposite_node.call(null,new cljs.core.Keyword(null,"node","node",1017291124).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,steps))).call(null,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(s_name.call(null,playfair_cljs.shapes.get_last_cs.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state))).call(null,s_index)));var original_dist = playfair_cljs.math.distance_formula.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(from_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(from_node)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_d_x,m_d_y], null));var new_dist = playfair_cljs.math.distance_formula.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(from_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(from_node)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_m_x,c_m_y], null));return cljs.core.conj.call(null,playfair_cljs.general.safe_pop.call(null,steps),cljs.core.assoc.call(null,cljs.core.last.call(null,steps),new cljs.core.Keyword(null,"scale-val","scale-val",3429794704),(new_dist / original_dist)));
}));
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777)))
{cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gui_state){return playfair_cljs.general.multi_assoc.call(null,gui_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down-pos","mouse-down-pos",4288269891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.clientX - target_x),(e.clientY - target_y)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down?","mouse-down?",745137191),true], null));
}));
om.core.transact_BANG_.call(null,app_state,(function (as){return cljs.core.assoc.call(null,as,new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(as)),cljs.core.count.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(as))], null));
}));
var map__9736 = cljs.core.deref.call(null,playfair_cljs.appstate.gui_state);var map__9736__$1 = ((cljs.core.seq_QMARK_.call(null,map__9736))?cljs.core.apply.call(null,cljs.core.hash_map,map__9736):map__9736);var in_progress_QMARK_ = cljs.core.get.call(null,map__9736__$1,new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236));var canvas_m_pos = cljs.core.get.call(null,map__9736__$1,new cljs.core.Keyword(null,"canvas-m-pos","canvas-m-pos",1652704177));var mouse_down_QMARK_ = cljs.core.get.call(null,map__9736__$1,new cljs.core.Keyword(null,"mouse-down?","mouse-down?",745137191));var vec__9737 = canvas_m_pos;var c_m_x = cljs.core.nth.call(null,vec__9737,0,null);var c_m_y = cljs.core.nth.call(null,vec__9737,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.some.call(null,(function (p1__9714_SHARP_){return cljs.core._EQ_.call(null,p1__9714_SHARP_,new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.Keyword(null,"circle","circle",3948654658)], null));if(cljs.core.truth_(and__3429__auto__))
{return cljs.core._EQ_.call(null,reciever,new cljs.core.Keyword(null,"canvas","canvas",3941165258));
} else
{return and__3429__auto__;
}
})()))
{var snapped_list_9738 = playfair_cljs.components.canvasEvents.check_snap.call(null,canvas_m_pos,playfair_cljs.shapes.get_last_cs.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state)));om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (steps){return cljs.core.conj.call(null,steps,playfair_cljs.shapes.make_draw.call(null,new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)),((cljs.core.empty_QMARK_.call(null,snapped_list_9738))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_m_x,c_m_y], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,snapped_list_9738).call(null,0),cljs.core.first.call(null,snapped_list_9738).call(null,1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)));
}));
return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gs){return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236),new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)));
}));
} else
{if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)))) && (cljs.core._EQ_.call(null,reciever,new cljs.core.Keyword(null,"node","node",1017291124))))
{om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (p1__9715_SHARP_){return cljs.core.conj.call(null,p1__9715_SHARP_,playfair_cljs.shapes.make_move.call(null,new cljs.core.Keyword(null,"from-node","from-node",1048241591).cljs$core$IFn$_invoke$arity$1(event_data),new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872).cljs$core$IFn$_invoke$arity$1(event_data),0,0));
}));
return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gs){return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236),new cljs.core.Keyword(null,"move","move",1017261891));
}));
} else
{if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rotate","rotate",4383690957),new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)))) && (cljs.core._EQ_.call(null,reciever,new cljs.core.Keyword(null,"node","node",1017291124))))
{om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (p1__9716_SHARP_){return cljs.core.conj.call(null,p1__9716_SHARP_,playfair_cljs.shapes.make_rotate.call(null,new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872).cljs$core$IFn$_invoke$arity$1(event_data),playfair_cljs.shapes.get_opposite_node.call(null,new cljs.core.Keyword(null,"from-node","from-node",1048241591).cljs$core$IFn$_invoke$arity$1(event_data)),0));
}));
return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gs){return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236),new cljs.core.Keyword(null,"rotate","rotate",4383690957));
}));
} else
{if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)))) && (cljs.core._EQ_.call(null,reciever,new cljs.core.Keyword(null,"node","node",1017291124))))
{om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (p1__9717_SHARP_){return cljs.core.conj.call(null,p1__9717_SHARP_,playfair_cljs.shapes.make_scale.call(null,new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872).cljs$core$IFn$_invoke$arity$1(event_data),new cljs.core.Keyword(null,"from-node","from-node",1048241591).cljs$core$IFn$_invoke$arity$1(event_data),1));
}));
return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gs){return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236),new cljs.core.Keyword(null,"scale","scale",1123155132));
}));
} else
{if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)))) && (cljs.core._EQ_.call(null,reciever,new cljs.core.Keyword(null,"canvas","canvas",3941165258))))
{om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (p1__9718_SHARP_){return cljs.core.conj.call(null,p1__9718_SHARP_,playfair_cljs.shapes.make_path_start.call(null,c_m_x,c_m_y,null,null));
}));
return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gs){return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236),new cljs.core.Keyword(null,"path","path",1017337751));
}));
} else
{return null;
}
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154)))
{return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gui_state){playfair_cljs.general.multi_assoc.call(null,gui_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down?","mouse-down?",745137191),false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236),false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236),false], null));
return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (ks){return new cljs.core.Keyword(null,"select","select",4402849902);
}));
}));
} else
{return null;
}
}
}
});
playfair_cljs.components.canvasEvents.canvas_events = (function canvas_events(app,owner){if(typeof playfair_cljs.components.canvasEvents.t9785 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.canvasEvents.t9785 = (function (owner,app,canvas_events,meta9786){
this.owner = owner;
this.app = app;
this.canvas_events = canvas_events;
this.meta9786 = meta9786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.canvasEvents.t9785.cljs$lang$type = true;
playfair_cljs.components.canvasEvents.t9785.cljs$lang$ctorStr = "playfair-cljs.components.canvasEvents/t9785";
playfair_cljs.components.canvasEvents.t9785.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.canvasEvents/t9785");
});
playfair_cljs.components.canvasEvents.t9785.prototype.om$core$IRender$ = true;
playfair_cljs.components.canvasEvents.t9785.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,"");
});
playfair_cljs.components.canvasEvents.t9785.prototype.om$core$IWillMount$ = true;
playfair_cljs.components.canvasEvents.t9785.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var keychan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"canchan","canchan",1564122772));var c__6104__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6105__auto__ = (function (){var switch__6034__auto__ = (function (state_9810){var state_val_9811 = (state_9810[1]);if((state_val_9811 === 1))
{var state_9810__$1 = state_9810;var statearr_9812_9831 = state_9810__$1;(statearr_9812_9831[2] = null);
(statearr_9812_9831[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9811 === 2))
{var state_9810__$1 = state_9810;if(true)
{var statearr_9813_9832 = state_9810__$1;(statearr_9813_9832[1] = 4);
} else
{var statearr_9814_9833 = state_9810__$1;(statearr_9814_9833[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9811 === 3))
{var inst_9808 = (state_9810[2]);var state_9810__$1 = state_9810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9810__$1,inst_9808);
} else
{if((state_val_9811 === 4))
{var inst_9791 = [keychan];var inst_9792 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9791,null));var state_9810__$1 = state_9810;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9810__$1,7,inst_9792);
} else
{if((state_val_9811 === 5))
{var state_9810__$1 = state_9810;var statearr_9815_9834 = state_9810__$1;(statearr_9815_9834[2] = null);
(statearr_9815_9834[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9811 === 6))
{var inst_9806 = (state_9810[2]);var state_9810__$1 = state_9810;var statearr_9816_9835 = state_9810__$1;(statearr_9816_9835[2] = inst_9806);
(statearr_9816_9835[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9811 === 7))
{var inst_9794 = (state_9810[2]);var inst_9795 = cljs.core.nth.call(null,inst_9794,0,null);var inst_9796 = cljs.core.nth.call(null,inst_9794,1,null);var inst_9797 = cljs.core._EQ_.call(null,inst_9796,keychan);var state_9810__$1 = (function (){var statearr_9817 = state_9810;(statearr_9817[7] = inst_9795);
return statearr_9817;
})();if(inst_9797)
{var statearr_9818_9836 = state_9810__$1;(statearr_9818_9836[1] = 8);
} else
{var statearr_9819_9837 = state_9810__$1;(statearr_9819_9837[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9811 === 8))
{var inst_9795 = (state_9810[7]);var inst_9799 = playfair_cljs.components.canvasEvents.canvas_event_handler.call(null,self__.app,inst_9795);var state_9810__$1 = state_9810;var statearr_9820_9838 = state_9810__$1;(statearr_9820_9838[2] = inst_9799);
(statearr_9820_9838[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9811 === 9))
{var state_9810__$1 = state_9810;var statearr_9821_9839 = state_9810__$1;(statearr_9821_9839[2] = null);
(statearr_9821_9839[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9811 === 10))
{var inst_9802 = (state_9810[2]);var state_9810__$1 = (function (){var statearr_9822 = state_9810;(statearr_9822[8] = inst_9802);
return statearr_9822;
})();var statearr_9823_9840 = state_9810__$1;(statearr_9823_9840[2] = null);
(statearr_9823_9840[1] = 2);
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
});return ((function (switch__6034__auto__){
return (function() {
var state_machine__6035__auto__ = null;
var state_machine__6035__auto____0 = (function (){var statearr_9827 = [null,null,null,null,null,null,null,null,null];(statearr_9827[0] = state_machine__6035__auto__);
(statearr_9827[1] = 1);
return statearr_9827;
});
var state_machine__6035__auto____1 = (function (state_9810){while(true){
var ret_value__6036__auto__ = (function (){try{while(true){
var result__6037__auto__ = switch__6034__auto__.call(null,state_9810);if(cljs.core.keyword_identical_QMARK_.call(null,result__6037__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6037__auto__;
}
break;
}
}catch (e9828){if((e9828 instanceof Object))
{var ex__6038__auto__ = e9828;var statearr_9829_9841 = state_9810;(statearr_9829_9841[5] = ex__6038__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9810);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9842 = state_9810;
state_9810 = G__9842;
continue;
}
} else
{return ret_value__6036__auto__;
}
break;
}
});
state_machine__6035__auto__ = function(state_9810){
switch(arguments.length){
case 0:
return state_machine__6035__auto____0.call(this);
case 1:
return state_machine__6035__auto____1.call(this,state_9810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6035__auto____0;
state_machine__6035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6035__auto____1;
return state_machine__6035__auto__;
})()
;})(switch__6034__auto__))
})();var state__6106__auto__ = (function (){var statearr_9830 = f__6105__auto__.call(null);(statearr_9830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6104__auto__);
return statearr_9830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6106__auto__);
}));
return c__6104__auto__;
});
playfair_cljs.components.canvasEvents.t9785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9787){var self__ = this;
var _9787__$1 = this;return self__.meta9786;
});
playfair_cljs.components.canvasEvents.t9785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9787,meta9786__$1){var self__ = this;
var _9787__$1 = this;return (new playfair_cljs.components.canvasEvents.t9785(self__.owner,self__.app,self__.canvas_events,meta9786__$1));
});
playfair_cljs.components.canvasEvents.__GT_t9785 = (function __GT_t9785(owner__$1,app__$1,canvas_events__$1,meta9786){return (new playfair_cljs.components.canvasEvents.t9785(owner__$1,app__$1,canvas_events__$1,meta9786));
});
}
return (new playfair_cljs.components.canvasEvents.t9785(owner,app,canvas_events,null));
});

//# sourceMappingURL=canvasEvents.js.map