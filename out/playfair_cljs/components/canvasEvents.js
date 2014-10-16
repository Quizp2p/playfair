// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.canvasEvents');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('playfair_cljs.math');
goog.require('playfair_cljs.asCompiler');
goog.require('playfair_cljs.csCompiler');
goog.require('playfair_cljs.general');
goog.require('om.dom');
goog.require('om.core');
goog.require('playfair_cljs.appstate');
goog.require('om.core');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.asCompiler');
goog.require('playfair_cljs.csCompiler');
goog.require('playfair_cljs.general');
goog.require('om.dom');
goog.require('playfair_cljs.shapeDataConversion');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.appstate');
goog.require('playfair_cljs.math');
goog.require('cljs.core.async');
goog.require('playfair_cljs.shapeDataConversion');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.debug');
playfair_cljs.components.canvasEvents.get_target_xy = (function get_target_xy(dom_node){var target_rect = dom_node.srcElement.getBoundingClientRect();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_rect.left,target_rect.top], null);
});
playfair_cljs.components.canvasEvents.inside_circle_QMARK_ = (function inside_circle_QMARK_(p__13474,p__13475,r){var vec__13478 = p__13474;var x = cljs.core.nth.call(null,vec__13478,0,null);var y = cljs.core.nth.call(null,vec__13478,1,null);var vec__13479 = p__13475;var cx = cljs.core.nth.call(null,vec__13479,0,null);var cy = cljs.core.nth.call(null,vec__13479,1,null);return (((x < (cx + r))) && ((x > (cx - r)))) && (((y < (cy + r))) && ((y > (cy - r))));
});
playfair_cljs.components.canvasEvents.get_rotate_val = (function get_rotate_val(p__13480,p__13481,p__13482){var vec__13486 = p__13480;var origin_x = cljs.core.nth.call(null,vec__13486,0,null);var origin_y = cljs.core.nth.call(null,vec__13486,1,null);var vec__13487 = p__13481;var c_m_x = cljs.core.nth.call(null,vec__13487,0,null);var c_m_y = cljs.core.nth.call(null,vec__13487,1,null);var vec__13488 = p__13482;var m_d_x = cljs.core.nth.call(null,vec__13488,0,null);var m_d_y = cljs.core.nth.call(null,vec__13488,1,null);var original_radius = playfair_cljs.math.distance_formula.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin_x,origin_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_d_x,m_d_y], null));var new_radius = playfair_cljs.math.distance_formula.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin_x,origin_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_m_x,c_m_y], null));var original_angle = playfair_cljs.math.abs.call(null,(playfair_cljs.math.acos.call(null,((m_d_x - origin_x) / original_radius)) - ((((m_d_y - origin_y) > 0))?(Math.PI * 2):0)));var new_angle = playfair_cljs.math.abs.call(null,(playfair_cljs.math.acos.call(null,((c_m_x - origin_x) / new_radius)) - ((((c_m_y - origin_y) > 0))?(Math.PI * 2):0)));return ((original_angle - new_angle) / (2 * Math.PI));
});
playfair_cljs.components.canvasEvents.check_snap_at_point = (function check_snap_at_point(p__13489,p__13490){var vec__13496 = p__13489;var s_name = cljs.core.nth.call(null,vec__13496,0,null);var s_ind = cljs.core.nth.call(null,vec__13496,1,null);var vec__13497 = p__13490;var m_x = cljs.core.nth.call(null,vec__13497,0,null);var m_y = cljs.core.nth.call(null,vec__13497,1,null);return (function (n_ind,node){if(cljs.core._EQ_.call(null,cljs.core.count.call(null,node),2))
{var vec__13498 = node;var node_name = cljs.core.nth.call(null,vec__13498,0,null);var map__13499 = cljs.core.nth.call(null,vec__13498,1,null);var map__13499__$1 = ((cljs.core.seq_QMARK_.call(null,map__13499))?cljs.core.apply.call(null,cljs.core.hash_map,map__13499):map__13499);var y = cljs.core.get.call(null,map__13499__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__13499__$1,new cljs.core.Keyword(null,"x","x",1013904362));if(playfair_cljs.components.canvasEvents.inside_circle_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_x,m_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),playfair_cljs.csCompiler.node_radius))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_name,s_ind], null)], null);
} else
{return null;
}
} else
{var vec__13500 = node;var p_type = cljs.core.nth.call(null,vec__13500,0,null);var x = cljs.core.nth.call(null,vec__13500,1,null);var y = cljs.core.nth.call(null,vec__13500,2,null);if(playfair_cljs.components.canvasEvents.inside_circle_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_x,m_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),playfair_cljs.csCompiler.node_radius))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n_ind,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_name,s_ind], null)], null);
} else
{return null;
}
}
});
});
playfair_cljs.components.canvasEvents.check_snap = (function() {
var check_snap = null;
var check_snap__2 = (function (p__13501,state){var vec__13507 = p__13501;var m_x = cljs.core.nth.call(null,vec__13507,0,null);var m_y = cljs.core.nth.call(null,vec__13507,1,null);return check_snap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_x,m_y], null),state,null);
});
var check_snap__3 = (function (p__13502,state,lookup_QMARK_){var vec__13508 = p__13502;var m_x = cljs.core.nth.call(null,vec__13508,0,null);var m_y = cljs.core.nth.call(null,vec__13508,1,null);var state__$1 = (cljs.core.truth_(lookup_QMARK_)?cljs.core.assoc.call(null,state,lookup_QMARK_.call(null,0),playfair_cljs.general.dissoc_vec.call(null,lookup_QMARK_.call(null,0).call(null,state),lookup_QMARK_.call(null,1))):state);return cljs.core.filter.call(null,(function (x){return cljs.core.vector_QMARK_.call(null,x);
}),cljs.core.reduce.call(null,cljs.core.concat,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p__13509){var vec__13510 = p__13509;var s_name = cljs.core.nth.call(null,vec__13510,0,null);var s_vec = cljs.core.nth.call(null,vec__13510,1,null);return cljs.core.map_indexed.call(null,(function (ind,shape){return cljs.core.map_indexed.call(null,playfair_cljs.components.canvasEvents.check_snap_at_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_name,ind], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_x,m_y], null)),new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(shape));
}),s_vec);
}),state__$1))));
});
check_snap = function(p__13502,state,lookup_QMARK_){
switch(arguments.length){
case 2:
return check_snap__2.call(this,p__13502,state);
case 3:
return check_snap__3.call(this,p__13502,state,lookup_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_snap.cljs$core$IFn$_invoke$arity$2 = check_snap__2;
check_snap.cljs$core$IFn$_invoke$arity$3 = check_snap__3;
return check_snap;
})()
;
playfair_cljs.components.canvasEvents.check_path_start = (function check_path_start(p__13511,state){var vec__13513 = p__13511;var m_x = cljs.core.nth.call(null,vec__13513,0,null);var m_y = cljs.core.nth.call(null,vec__13513,1,null);return playfair_cljs.components.canvasEvents.check_snap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_x,m_y], null),cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.Keyword(null,"line","line",1017226086)));
});
playfair_cljs.components.canvasEvents.check_snap_at_mouse = (function check_snap_at_mouse(p__13514,snap_app_state){var vec__13516 = p__13514;var c_m_x = cljs.core.nth.call(null,vec__13516,0,null);var c_m_y = cljs.core.nth.call(null,vec__13516,1,null);var snapped_list = playfair_cljs.components.canvasEvents.check_snap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_m_x,c_m_y], null),snap_app_state);if(cljs.core.empty_QMARK_.call(null,snapped_list))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_m_x,c_m_y], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,snapped_list).call(null,0),cljs.core.first.call(null,snapped_list).call(null,1)], null);
}
});
playfair_cljs.components.canvasEvents.cleanse_draw = (function cleanse_draw(draw_map){return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,draw_map,new cljs.core.Keyword(null,"diffX","diffX",1109485669)),new cljs.core.Keyword(null,"diffY","diffY",1109485670)),new cljs.core.Keyword(null,"to-node","to-node",4107897222)),new cljs.core.Keyword(null,"to-shape","to-shape",2442812737));
});
playfair_cljs.components.canvasEvents.mouse_down_action = (function mouse_down_action(app_state,new_step,in_progress){om.core.transact_BANG_.call(null,app_state,(function (as){return cljs.core.assoc.call(null,as,new cljs.core.Keyword(null,"steps","steps",1123665561),cljs.core.conj.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(as),new_step),new cljs.core.Keyword(null,"active-steps","active-steps",1350401298),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(as)),cljs.core.count.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(as))], null));
}));
return cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gs){return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236),in_progress);
}));
});
playfair_cljs.components.canvasEvents.canvas_event_handler = (function canvas_event_handler(app_state,p__13519){var map__13530 = p__13519;var map__13530__$1 = ((cljs.core.seq_QMARK_.call(null,map__13530))?cljs.core.apply.call(null,cljs.core.hash_map,map__13530):map__13530);var event_data = map__13530__$1;var reciever = cljs.core.get.call(null,map__13530__$1,new cljs.core.Keyword(null,"reciever","reciever",4503726569));var e = cljs.core.get.call(null,map__13530__$1,new cljs.core.Keyword(null,"e","e",1013904343));var e_type = cljs.core.get.call(null,map__13530__$1,new cljs.core.Keyword(null,"e-type","e-type",3950582548));var bounded_rect = document.getElementById("bigCanvas").getBoundingClientRect();var vec__13531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounded_rect.left,bounded_rect.top], null);var target_x = cljs.core.nth.call(null,vec__13531,0,null);var target_y = cljs.core.nth.call(null,vec__13531,1,null);if(cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856)))
{cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gui_state){return cljs.core.assoc.call(null,gui_state,new cljs.core.Keyword(null,"canvas-m-pos","canvas-m-pos",1652704177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.clientX - target_x),(e.clientY - target_y)], null));
}));
var map__13532 = cljs.core.deref.call(null,playfair_cljs.appstate.gui_state);var map__13532__$1 = ((cljs.core.seq_QMARK_.call(null,map__13532))?cljs.core.apply.call(null,cljs.core.hash_map,map__13532):map__13532);var mouse_down_pos = cljs.core.get.call(null,map__13532__$1,new cljs.core.Keyword(null,"mouse-down-pos","mouse-down-pos",4288269891));var in_progress_QMARK_ = cljs.core.get.call(null,map__13532__$1,new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236));var canvas_m_pos = cljs.core.get.call(null,map__13532__$1,new cljs.core.Keyword(null,"canvas-m-pos","canvas-m-pos",1652704177));var mouse_down_QMARK_ = cljs.core.get.call(null,map__13532__$1,new cljs.core.Keyword(null,"mouse-down?","mouse-down?",745137191));var vec__13533 = canvas_m_pos;var c_m_x = cljs.core.nth.call(null,vec__13533,0,null);var c_m_y = cljs.core.nth.call(null,vec__13533,1,null);var vec__13534 = mouse_down_pos;var m_d_x = cljs.core.nth.call(null,vec__13534,0,null);var m_d_y = cljs.core.nth.call(null,vec__13534,1,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__13517_SHARP_){return cljs.core._EQ_.call(null,in_progress_QMARK_,p1__13517_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.Keyword(null,"circle","circle",3948654658)], null))))
{var snapped_list = playfair_cljs.components.canvasEvents.check_snap.call(null,canvas_m_pos,new cljs.core.Keyword(null,"second-last-state","second-last-state",4343999749).cljs$core$IFn$_invoke$arity$1(event_data));if(cljs.core.empty_QMARK_.call(null,snapped_list))
{return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (steps){return cljs.core.conj.call(null,playfair_cljs.general.safe_pop.call(null,steps),playfair_cljs.general.multi_assoc.call(null,playfair_cljs.components.canvasEvents.cleanse_draw.call(null,cljs.core.last.call(null,steps)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diffX","diffX",1109485669),(c_m_x - m_d_x)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diffY","diffY",1109485670),(c_m_y - m_d_y)], null)));
}));
} else
{return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (steps){return cljs.core.conj.call(null,playfair_cljs.general.safe_pop.call(null,steps),playfair_cljs.general.multi_assoc.call(null,playfair_cljs.components.canvasEvents.cleanse_draw.call(null,cljs.core.last.call(null,steps)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-node","to-node",4107897222),cljs.core.first.call(null,snapped_list).call(null,0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-shape","to-shape",2442812737),cljs.core.first.call(null,snapped_list).call(null,1)], null)));
}));
}
} else
{if(cljs.core._EQ_.call(null,in_progress_QMARK_,new cljs.core.Keyword(null,"move","move",1017261891)))
{return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (steps){return cljs.core.conj.call(null,playfair_cljs.general.safe_pop.call(null,steps),(function (){var snapped_list = playfair_cljs.components.canvasEvents.check_snap.call(null,canvas_m_pos,playfair_cljs.asCompiler.get_last_cs.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state)),new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,steps)));if(cljs.core.empty_QMARK_.call(null,snapped_list))
{return playfair_cljs.general.multi_assoc.call(null,playfair_cljs.components.canvasEvents.cleanse_draw.call(null,cljs.core.last.call(null,steps)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diffX","diffX",1109485669),(c_m_x - m_d_x)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diffY","diffY",1109485670),(c_m_y - m_d_y)], null));
} else
{return playfair_cljs.general.multi_assoc.call(null,playfair_cljs.components.canvasEvents.cleanse_draw.call(null,cljs.core.last.call(null,steps)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-node","to-node",4107897222),cljs.core.first.call(null,snapped_list).call(null,0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-shape","to-shape",2442812737),cljs.core.first.call(null,snapped_list).call(null,1)], null));
}
})());
}));
} else
{if(cljs.core._EQ_.call(null,in_progress_QMARK_,new cljs.core.Keyword(null,"rotate","rotate",4383690957)))
{return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (steps){var vec__13535 = new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,steps));var s_name = cljs.core.nth.call(null,vec__13535,0,null);var s_index = cljs.core.nth.call(null,vec__13535,1,null);var from_node = new cljs.core.Keyword(null,"node","node",1017291124).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,steps)).call(null,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(s_name.call(null,playfair_cljs.asCompiler.get_last_cs.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state))).call(null,s_index)));return cljs.core.conj.call(null,playfair_cljs.general.safe_pop.call(null,steps),cljs.core.assoc.call(null,cljs.core.last.call(null,steps),new cljs.core.Keyword(null,"rotate-val","rotate-val",934012705),playfair_cljs.components.canvasEvents.get_rotate_val.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(from_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(from_node)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_m_x,c_m_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_d_x,m_d_y], null))));
}));
} else
{if(cljs.core._EQ_.call(null,in_progress_QMARK_,new cljs.core.Keyword(null,"scale","scale",1123155132)))
{return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (steps){var vec__13536 = new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,steps));var s_name = cljs.core.nth.call(null,vec__13536,0,null);var s_index = cljs.core.nth.call(null,vec__13536,1,null);var from_node = playfair_cljs.shapeDataConversion.get_opposite_node.call(null,new cljs.core.Keyword(null,"node","node",1017291124).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,steps))).call(null,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(s_name.call(null,playfair_cljs.asCompiler.get_last_cs.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state))).call(null,s_index)));var original_dist = playfair_cljs.math.distance_formula.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(from_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(from_node)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_d_x,m_d_y], null));var new_dist = playfair_cljs.math.distance_formula.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(from_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(from_node)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_m_x,c_m_y], null));return cljs.core.conj.call(null,playfair_cljs.general.safe_pop.call(null,steps),cljs.core.assoc.call(null,cljs.core.last.call(null,steps),new cljs.core.Keyword(null,"scale-val","scale-val",3429794704),(new_dist / original_dist)));
}));
} else
{if(cljs.core._EQ_.call(null,in_progress_QMARK_,new cljs.core.Keyword(null,"path","path",1017337751)))
{return playfair_cljs.debug.log.call(null,"WOW you are dragging a path");
} else
{if(cljs.core._EQ_.call(null,in_progress_QMARK_,new cljs.core.Keyword(null,"path-extend","path-extend",1383118132)))
{return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"steps","steps",1123665561),(function (steps){var snapped_list = playfair_cljs.components.canvasEvents.check_snap.call(null,canvas_m_pos,playfair_cljs.asCompiler.get_last_cs.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path-index","path-index",752100508).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,steps))], null));return cljs.core.conj.call(null,playfair_cljs.general.safe_pop.call(null,steps),((cljs.core.empty_QMARK_.call(null,snapped_list))?cljs.core.assoc.call(null,cljs.core.last.call(null,steps),new cljs.core.Keyword(null,"x","x",1013904362),c_m_x,new cljs.core.Keyword(null,"y","y",1013904363),c_m_y):cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.last.call(null,steps),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)),new cljs.core.Keyword(null,"to-node","to-node",4107897222),cljs.core.first.call(null,snapped_list).call(null,0),new cljs.core.Keyword(null,"to-shape","to-shape",2442812737),cljs.core.first.call(null,snapped_list).call(null,1))));
}));
} else
{return null;
}
}
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseDown","mouseDown",1599794777)))
{cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gui_state){return playfair_cljs.general.multi_assoc.call(null,gui_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down-pos","mouse-down-pos",4288269891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.clientX - target_x),(e.clientY - target_y)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down?","mouse-down?",745137191),true], null));
}));
var map__13537 = cljs.core.deref.call(null,playfair_cljs.appstate.gui_state);var map__13537__$1 = ((cljs.core.seq_QMARK_.call(null,map__13537))?cljs.core.apply.call(null,cljs.core.hash_map,map__13537):map__13537);var in_progress_QMARK_ = cljs.core.get.call(null,map__13537__$1,new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236));var canvas_m_pos = cljs.core.get.call(null,map__13537__$1,new cljs.core.Keyword(null,"canvas-m-pos","canvas-m-pos",1652704177));var mouse_down_QMARK_ = cljs.core.get.call(null,map__13537__$1,new cljs.core.Keyword(null,"mouse-down?","mouse-down?",745137191));var vec__13538 = canvas_m_pos;var c_m_x = cljs.core.nth.call(null,vec__13538,0,null);var c_m_y = cljs.core.nth.call(null,vec__13538,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.some.call(null,(function (p1__13518_SHARP_){return cljs.core._EQ_.call(null,p1__13518_SHARP_,new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.Keyword(null,"circle","circle",3948654658)], null));if(cljs.core.truth_(and__3429__auto__))
{return cljs.core._EQ_.call(null,reciever,new cljs.core.Keyword(null,"canvas","canvas",3941165258));
} else
{return and__3429__auto__;
}
})()))
{return playfair_cljs.components.canvasEvents.mouse_down_action.call(null,app_state,playfair_cljs.shapeData.make_draw.call(null,new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)),playfair_cljs.components.canvasEvents.check_snap_at_mouse.call(null,canvas_m_pos,playfair_cljs.asCompiler.get_last_cs.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)),new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)));
} else
{if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)))) && (cljs.core._EQ_.call(null,reciever,new cljs.core.Keyword(null,"node","node",1017291124))))
{return playfair_cljs.components.canvasEvents.mouse_down_action.call(null,app_state,playfair_cljs.shapeData.make_move.call(null,new cljs.core.Keyword(null,"from-node","from-node",1048241591).cljs$core$IFn$_invoke$arity$1(event_data),new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872).cljs$core$IFn$_invoke$arity$1(event_data),0,0),new cljs.core.Keyword(null,"move","move",1017261891));
} else
{if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rotate","rotate",4383690957),new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)))) && (cljs.core._EQ_.call(null,reciever,new cljs.core.Keyword(null,"node","node",1017291124))))
{return playfair_cljs.components.canvasEvents.mouse_down_action.call(null,app_state,playfair_cljs.shapeData.make_rotate.call(null,new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872).cljs$core$IFn$_invoke$arity$1(event_data),playfair_cljs.shapeDataConversion.get_opposite_node.call(null,new cljs.core.Keyword(null,"from-node","from-node",1048241591).cljs$core$IFn$_invoke$arity$1(event_data)),0),new cljs.core.Keyword(null,"rotate","rotate",4383690957));
} else
{if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)))) && (cljs.core._EQ_.call(null,reciever,new cljs.core.Keyword(null,"node","node",1017291124))))
{return playfair_cljs.components.canvasEvents.mouse_down_action.call(null,app_state,playfair_cljs.shapeData.make_scale.call(null,new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872).cljs$core$IFn$_invoke$arity$1(event_data),new cljs.core.Keyword(null,"from-node","from-node",1048241591).cljs$core$IFn$_invoke$arity$1(event_data),1),new cljs.core.Keyword(null,"scale","scale",1123155132));
} else
{if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,playfair_cljs.appstate.app_state)))) && (cljs.core._EQ_.call(null,reciever,new cljs.core.Keyword(null,"canvas","canvas",3941165258))))
{var p_start = playfair_cljs.components.canvasEvents.check_path_start.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_m_x,c_m_y], null),playfair_cljs.asCompiler.get_last_cs.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state)));return playfair_cljs.components.canvasEvents.mouse_down_action.call(null,app_state,(((cljs.core.count.call(null,p_start) > 0))?playfair_cljs.shapeData.make_path_extend.call(null,cljs.core.first.call(null,p_start).call(null,1).call(null,1),"L",c_m_x,c_m_y):(function (){var vec__13539 = playfair_cljs.components.canvasEvents.check_snap_at_mouse.call(null,canvas_m_pos,playfair_cljs.asCompiler.get_last_cs.call(null,cljs.core.deref.call(null,playfair_cljs.appstate.app_state)));var s_x = cljs.core.nth.call(null,vec__13539,0,null);var s_y = cljs.core.nth.call(null,vec__13539,1,null);return playfair_cljs.shapeData.make_path_start.call(null,s_x,s_y,null,null);
})()),(((cljs.core.count.call(null,p_start) > 0))?new cljs.core.Keyword(null,"path-extend","path-extend",1383118132):new cljs.core.Keyword(null,"path","path",1017337751)));
} else
{return null;
}
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,e_type,new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154)))
{cljs.core.swap_BANG_.call(null,playfair_cljs.appstate.gui_state,(function (gui_state){return playfair_cljs.general.multi_assoc.call(null,gui_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down?","mouse-down?",745137191),false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236),false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-progress?","in-progress?",4659674236),false], null));
}));
return om.core.transact_BANG_.call(null,app_state,new cljs.core.Keyword(null,"key-state","key-state",2231822101),(function (ks){return new cljs.core.Keyword(null,"select","select",4402849902);
}));
} else
{return null;
}
}
}
});
playfair_cljs.components.canvasEvents.canvas_events = (function canvas_events(app,owner){if(typeof playfair_cljs.components.canvasEvents.t13586 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.canvasEvents.t13586 = (function (owner,app,canvas_events,meta13587){
this.owner = owner;
this.app = app;
this.canvas_events = canvas_events;
this.meta13587 = meta13587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.canvasEvents.t13586.cljs$lang$type = true;
playfair_cljs.components.canvasEvents.t13586.cljs$lang$ctorStr = "playfair-cljs.components.canvasEvents/t13586";
playfair_cljs.components.canvasEvents.t13586.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.canvasEvents/t13586");
});
playfair_cljs.components.canvasEvents.t13586.prototype.om$core$IRender$ = true;
playfair_cljs.components.canvasEvents.t13586.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,"");
});
playfair_cljs.components.canvasEvents.t13586.prototype.om$core$IWillMount$ = true;
playfair_cljs.components.canvasEvents.t13586.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var keychan = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"canchan","canchan",1564122772));var c__6080__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6081__auto__ = (function (){var switch__6010__auto__ = (function (state_13611){var state_val_13612 = (state_13611[1]);if((state_val_13612 === 1))
{var state_13611__$1 = state_13611;var statearr_13613_13632 = state_13611__$1;(statearr_13613_13632[2] = null);
(statearr_13613_13632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13612 === 2))
{var state_13611__$1 = state_13611;if(true)
{var statearr_13614_13633 = state_13611__$1;(statearr_13614_13633[1] = 4);
} else
{var statearr_13615_13634 = state_13611__$1;(statearr_13615_13634[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13612 === 3))
{var inst_13609 = (state_13611[2]);var state_13611__$1 = state_13611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13611__$1,inst_13609);
} else
{if((state_val_13612 === 4))
{var inst_13592 = [keychan];var inst_13593 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_13592,null));var state_13611__$1 = state_13611;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13611__$1,7,inst_13593);
} else
{if((state_val_13612 === 5))
{var state_13611__$1 = state_13611;var statearr_13616_13635 = state_13611__$1;(statearr_13616_13635[2] = null);
(statearr_13616_13635[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13612 === 6))
{var inst_13607 = (state_13611[2]);var state_13611__$1 = state_13611;var statearr_13617_13636 = state_13611__$1;(statearr_13617_13636[2] = inst_13607);
(statearr_13617_13636[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13612 === 7))
{var inst_13595 = (state_13611[2]);var inst_13596 = cljs.core.nth.call(null,inst_13595,0,null);var inst_13597 = cljs.core.nth.call(null,inst_13595,1,null);var inst_13598 = cljs.core._EQ_.call(null,inst_13597,keychan);var state_13611__$1 = (function (){var statearr_13618 = state_13611;(statearr_13618[7] = inst_13596);
return statearr_13618;
})();if(inst_13598)
{var statearr_13619_13637 = state_13611__$1;(statearr_13619_13637[1] = 8);
} else
{var statearr_13620_13638 = state_13611__$1;(statearr_13620_13638[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13612 === 8))
{var inst_13596 = (state_13611[7]);var inst_13600 = playfair_cljs.components.canvasEvents.canvas_event_handler.call(null,self__.app,inst_13596);var state_13611__$1 = state_13611;var statearr_13621_13639 = state_13611__$1;(statearr_13621_13639[2] = inst_13600);
(statearr_13621_13639[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13612 === 9))
{var state_13611__$1 = state_13611;var statearr_13622_13640 = state_13611__$1;(statearr_13622_13640[2] = null);
(statearr_13622_13640[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13612 === 10))
{var inst_13603 = (state_13611[2]);var state_13611__$1 = (function (){var statearr_13623 = state_13611;(statearr_13623[8] = inst_13603);
return statearr_13623;
})();var statearr_13624_13641 = state_13611__$1;(statearr_13624_13641[2] = null);
(statearr_13624_13641[1] = 2);
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
var state_machine__6011__auto____0 = (function (){var statearr_13628 = [null,null,null,null,null,null,null,null,null];(statearr_13628[0] = state_machine__6011__auto__);
(statearr_13628[1] = 1);
return statearr_13628;
});
var state_machine__6011__auto____1 = (function (state_13611){while(true){
var ret_value__6012__auto__ = (function (){try{while(true){
var result__6013__auto__ = switch__6010__auto__.call(null,state_13611);if(cljs.core.keyword_identical_QMARK_.call(null,result__6013__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6013__auto__;
}
break;
}
}catch (e13629){if((e13629 instanceof Object))
{var ex__6014__auto__ = e13629;var statearr_13630_13642 = state_13611;(statearr_13630_13642[5] = ex__6014__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13611);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6012__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13643 = state_13611;
state_13611 = G__13643;
continue;
}
} else
{return ret_value__6012__auto__;
}
break;
}
});
state_machine__6011__auto__ = function(state_13611){
switch(arguments.length){
case 0:
return state_machine__6011__auto____0.call(this);
case 1:
return state_machine__6011__auto____1.call(this,state_13611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6011__auto____0;
state_machine__6011__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6011__auto____1;
return state_machine__6011__auto__;
})()
;})(switch__6010__auto__))
})();var state__6082__auto__ = (function (){var statearr_13631 = f__6081__auto__.call(null);(statearr_13631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6080__auto__);
return statearr_13631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6082__auto__);
}));
return c__6080__auto__;
});
playfair_cljs.components.canvasEvents.t13586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13588){var self__ = this;
var _13588__$1 = this;return self__.meta13587;
});
playfair_cljs.components.canvasEvents.t13586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13588,meta13587__$1){var self__ = this;
var _13588__$1 = this;return (new playfair_cljs.components.canvasEvents.t13586(self__.owner,self__.app,self__.canvas_events,meta13587__$1));
});
playfair_cljs.components.canvasEvents.__GT_t13586 = (function __GT_t13586(owner__$1,app__$1,canvas_events__$1,meta13587){return (new playfair_cljs.components.canvasEvents.t13586(owner__$1,app__$1,canvas_events__$1,meta13587));
});
}
return (new playfair_cljs.components.canvasEvents.t13586(owner,app,canvas_events,null));
});

//# sourceMappingURL=canvasEvents.js.map