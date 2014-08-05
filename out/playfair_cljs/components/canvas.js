// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.canvas');
goog.require('cljs.core');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.shapes');
goog.require('playfair_cljs.shapes');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
playfair_cljs.components.canvas.create_node_rest = (function create_node_rest(p__7089){var map__7093 = p__7089;var map__7093__$1 = ((cljs.core.seq_QMARK_.call(null,map__7093))?cljs.core.apply.call(null,cljs.core.hash_map,map__7093):map__7093);var active = cljs.core.get.call(null,map__7093__$1,new cljs.core.Keyword(null,"active","active",3885920888));var position_attrs = cljs.core.get.call(null,map__7093__$1,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296));return new cljs.core.Keyword(null,"circle","circle",3948654658).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (accum,p__7094){var vec__7095 = p__7094;var node_name = cljs.core.nth.call(null,vec__7095,0,null);var node_pos = cljs.core.nth.call(null,vec__7095,1,null);var handle_node_map = playfair_cljs.shapes.attrs_to_nodes.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1013907431),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(node_pos),new cljs.core.Keyword(null,"cy","cy",1013907432),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(node_pos),new cljs.core.Keyword(null,"r","r",1013904356),3], null));var center_node = new cljs.core.Keyword(null,"center-node","center-node",2639619052).cljs$core$IFn$_invoke$arity$1(handle_node_map);var right_node = new cljs.core.Keyword(null,"right-node","right-node",3874878085).cljs$core$IFn$_invoke$arity$1(handle_node_map);return new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(playfair_cljs.shapes.make_draw.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(node_pos),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(node_pos)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0], null),(cljs.core.truth_(active)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"shapeGuide",new cljs.core.Keyword(null,"fill","fill",1017047285),"blue",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"blue"], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"shapeGuide",new cljs.core.Keyword(null,"fill","fill",1017047285),"#ffb440",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"#ffb440"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"centered","centered",4456450854),true], null))).call(null,accum);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circle","circle",3948654658),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"text","text",1017460895),cljs.core.PersistentVector.EMPTY], null),position_attrs));
});
playfair_cljs.components.canvas.create_node_path = (function create_node_path(p__7096){var vec__7099 = p__7096;var shape_name = cljs.core.nth.call(null,vec__7099,0,null);var shape_map = cljs.core.nth.call(null,vec__7099,1,null);var node_points = new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(shape_map);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,node_points),1))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return cljs.core.reduce.call(null,(function (accum,path_point){var attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1013907431),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(path_point),new cljs.core.Keyword(null,"cy","cy",1013907432),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(path_point),new cljs.core.Keyword(null,"r","r",1013904356),3], null);var vec__7100 = playfair_cljs.shapes.attrs_to_vectors.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),attrs);var vec1 = cljs.core.nth.call(null,vec__7100,0,null);var vec2 = cljs.core.nth.call(null,vec__7100,1,null);return cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$2(playfair_cljs.shapes.make_draw.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),vec1,vec2,(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(shape_map))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",1017047285),"blue",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"blue"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",1017047285),"#ffb440",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"#ffb440"], null))),accum).call(null),new cljs.core.Keyword(null,"text","text",1017460895));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circle","circle",3948654658),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"text","text",1017460895),cljs.core.PersistentVector.EMPTY], null),node_points);
}
});
playfair_cljs.components.canvas.create_node = (function create_node(shape_map){if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(shape_map)),new cljs.core.Keyword(null,"path","path",1017337751)))
{return playfair_cljs.components.canvas.create_node_path.call(null,shape_map);
} else
{return playfair_cljs.components.canvas.create_node_rest.call(null,shape_map);
}
});
playfair_cljs.components.canvas.create_nodes = (function create_nodes(canvas_state){return cljs.core.reduce.call(null,(function (accum,shape_map){return cljs.core.conj.call(null,accum,shape_map,playfair_cljs.components.canvas.create_node.call(null,shape_map));
}),cljs.core.PersistentVector.EMPTY,canvas_state);
});
playfair_cljs.components.canvas.state_maker = (function state_maker(steps){return cljs.core.reduce.call(null,(function (accum,step){return new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(step).call(null,accum);
}),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rect","rect",1017400662),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"circle","circle",3948654658),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"text","text",1017460895),cljs.core.PersistentVector.EMPTY], null),steps);
});
playfair_cljs.components.canvas.get_canvas_state = (function() {
var get_canvas_state = null;
var get_canvas_state__1 = (function (app_state){return get_canvas_state.call(null,app_state,cljs.core.count.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(app_state)));
});
var get_canvas_state__2 = (function (app_state,num_steps){var map__7104 = playfair_cljs.components.canvas.state_maker.call(null,cljs.core.subvec.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(app_state),0,num_steps));var map__7104__$1 = ((cljs.core.seq_QMARK_.call(null,map__7104))?cljs.core.apply.call(null,cljs.core.hash_map,map__7104):map__7104);var text = cljs.core.get.call(null,map__7104__$1,new cljs.core.Keyword(null,"text","text",1017460895));var line = cljs.core.get.call(null,map__7104__$1,new cljs.core.Keyword(null,"line","line",1017226086));var path = cljs.core.get.call(null,map__7104__$1,new cljs.core.Keyword(null,"path","path",1017337751));var circle = cljs.core.get.call(null,map__7104__$1,new cljs.core.Keyword(null,"circle","circle",3948654658));var rect = cljs.core.get.call(null,map__7104__$1,new cljs.core.Keyword(null,"rect","rect",1017400662));var canvas_state = cljs.core.flatten.call(null,cljs.core.conj.call(null,rect,circle,path,line));var keyState = new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(app_state);var new_canvas_state = (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),keyState)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"draw","draw",1016996022),keyState)))?playfair_cljs.components.canvas.create_nodes.call(null,canvas_state):canvas_state);var cs_line_point_check = cljs.core.reduce.call(null,((function (map__7104,map__7104__$1,text,line,path,circle,rect,canvas_state,keyState,new_canvas_state){
return (function (accum,p__7105){var map__7106 = p__7105;var map__7106__$1 = ((cljs.core.seq_QMARK_.call(null,map__7106))?cljs.core.apply.call(null,cljs.core.hash_map,map__7106):map__7106);var shape_map = map__7106__$1;var shape_name = cljs.core.get.call(null,map__7106__$1,new cljs.core.Keyword(null,"shape-name","shape-name",1699536041));var position_attrs = cljs.core.get.call(null,map__7106__$1,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296));if(cljs.core._EQ_.call(null,shape_name,new cljs.core.Keyword(null,"path","path",1017337751)))
{return cljs.core.conj.call(null,accum,((cljs.core._EQ_.call(null,cljs.core.count.call(null,position_attrs),1))?playfair_cljs.shapes.line_point_func.call(null,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(position_attrs.call(null,0)),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(position_attrs.call(null,0))):shape_map));
} else
{return cljs.core.conj.call(null,accum,shape_map);
}
});})(map__7104,map__7104__$1,text,line,path,circle,rect,canvas_state,keyState,new_canvas_state))
,cljs.core.PersistentVector.EMPTY,new_canvas_state);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),cs_line_point_check,new cljs.core.Keyword(null,"text","text",1017460895),text], null);
});
get_canvas_state = function(app_state,num_steps){
switch(arguments.length){
case 1:
return get_canvas_state__1.call(this,app_state);
case 2:
return get_canvas_state__2.call(this,app_state,num_steps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_canvas_state.cljs$core$IFn$_invoke$arity$1 = get_canvas_state__1;
get_canvas_state.cljs$core$IFn$_invoke$arity$2 = get_canvas_state__2;
return get_canvas_state;
})()
;
playfair_cljs.components.canvas.render_canvas = (function render_canvas(p__7107,owner){var map__7112 = p__7107;var map__7112__$1 = ((cljs.core.seq_QMARK_.call(null,map__7112))?cljs.core.apply.call(null,cljs.core.hash_map,map__7112):map__7112);var visual_attrs = cljs.core.get.call(null,map__7112__$1,new cljs.core.Keyword(null,"visual-attrs","visual-attrs",1512932167));var shape_name = cljs.core.get.call(null,map__7112__$1,new cljs.core.Keyword(null,"shape-name","shape-name",1699536041));var position_attrs = cljs.core.get.call(null,map__7112__$1,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296));var shape_attrs = cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,playfair_cljs.shapes.nodes_to_attrs.call(null,shape_name,position_attrs),visual_attrs));if(typeof playfair_cljs.components.canvas.t7113 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.canvas.t7113 = (function (shape_attrs,position_attrs,shape_name,visual_attrs,map__7112,owner,p__7107,render_canvas,meta7114){
this.shape_attrs = shape_attrs;
this.position_attrs = position_attrs;
this.shape_name = shape_name;
this.visual_attrs = visual_attrs;
this.map__7112 = map__7112;
this.owner = owner;
this.p__7107 = p__7107;
this.render_canvas = render_canvas;
this.meta7114 = meta7114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.canvas.t7113.cljs$lang$type = true;
playfair_cljs.components.canvas.t7113.cljs$lang$ctorStr = "playfair-cljs.components.canvas/t7113";
playfair_cljs.components.canvas.t7113.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.canvas/t7113");
});
playfair_cljs.components.canvas.t7113.prototype.om$core$IRender$ = true;
playfair_cljs.components.canvas.t7113.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.shape_name.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rect","rect",1017400662),React.DOM.rect(self__.shape_attrs,null),new cljs.core.Keyword(null,"circle","circle",3948654658),React.DOM.circle(self__.shape_attrs,null),new cljs.core.Keyword(null,"line","line",1017226086),React.DOM.line(self__.shape_attrs,null),new cljs.core.Keyword(null,"path","path",1017337751),React.DOM.path(self__.shape_attrs,null)], null));
});
playfair_cljs.components.canvas.t7113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7115){var self__ = this;
var _7115__$1 = this;return self__.meta7114;
});
playfair_cljs.components.canvas.t7113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7115,meta7114__$1){var self__ = this;
var _7115__$1 = this;return (new playfair_cljs.components.canvas.t7113(self__.shape_attrs,self__.position_attrs,self__.shape_name,self__.visual_attrs,self__.map__7112,self__.owner,self__.p__7107,self__.render_canvas,meta7114__$1));
});
playfair_cljs.components.canvas.__GT_t7113 = (function __GT_t7113(shape_attrs__$1,position_attrs__$1,shape_name__$1,visual_attrs__$1,map__7112__$2,owner__$1,p__7107__$1,render_canvas__$1,meta7114){return (new playfair_cljs.components.canvas.t7113(shape_attrs__$1,position_attrs__$1,shape_name__$1,visual_attrs__$1,map__7112__$2,owner__$1,p__7107__$1,render_canvas__$1,meta7114));
});
}
return (new playfair_cljs.components.canvas.t7113(shape_attrs,position_attrs,shape_name,visual_attrs,map__7112__$1,owner,p__7107,render_canvas,null));
});

//# sourceMappingURL=canvas.js.map