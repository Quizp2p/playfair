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
playfair_cljs.components.canvas.canvas_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [500,500], null);
playfair_cljs.components.canvas.create_node_rest = (function create_node_rest(p__7801){var vec__7805 = p__7801;var shape_name = cljs.core.nth.call(null,vec__7805,0,null);var shape_map = cljs.core.nth.call(null,vec__7805,1,null);var node_points = new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(shape_map);return cljs.core.reduce.call(null,(function (accum,p__7806){var vec__7807 = p__7806;var node_name = cljs.core.nth.call(null,vec__7807,0,null);var node_pos = cljs.core.nth.call(null,vec__7807,1,null);var handle_node_map = playfair_cljs.shapes.attrs_to_nodes.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1013907431),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(node_pos),new cljs.core.Keyword(null,"cy","cy",1013907432),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(node_pos),new cljs.core.Keyword(null,"r","r",1013904356),3], null));var left_node = new cljs.core.Keyword(null,"left-node","left-node",2709524346).cljs$core$IFn$_invoke$arity$1(handle_node_map);var right_node = new cljs.core.Keyword(null,"right-node","right-node",3874878085).cljs$core$IFn$_invoke$arity$1(handle_node_map);return cljs.core.dissoc.call(null,playfair_cljs.shapes.make_draw.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(left_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(left_node)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(right_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(right_node)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(shape_map))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",1017047285),"blue",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"blue"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",1017047285),"#ffb440",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"#ffb440"], null))).call(null,accum),new cljs.core.Keyword(null,"text","text",1017460895));
}),cljs.core.PersistentArrayMap.EMPTY,node_points);
});
playfair_cljs.components.canvas.create_node_path = (function create_node_path(p__7808){var vec__7811 = p__7808;var shape_name = cljs.core.nth.call(null,vec__7811,0,null);var shape_map = cljs.core.nth.call(null,vec__7811,1,null);var node_points = new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(shape_map);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,node_points),1))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return cljs.core.reduce.call(null,(function (accum,path_point){var attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1013907431),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(path_point),new cljs.core.Keyword(null,"cy","cy",1013907432),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(path_point),new cljs.core.Keyword(null,"r","r",1013904356),3], null);var vec__7812 = playfair_cljs.shapes.attrs_to_vectors.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),attrs);var vec1 = cljs.core.nth.call(null,vec__7812,0,null);var vec2 = cljs.core.nth.call(null,vec__7812,1,null);playfair_cljs.debug.log.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vec1,vec2], null));
return cljs.core.dissoc.call(null,playfair_cljs.shapes.make_draw.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),vec1,vec2,(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(shape_map))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",1017047285),"blue",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"blue"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",1017047285),"#ffb440",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"#ffb440"], null))).call(null,accum),new cljs.core.Keyword(null,"text","text",1017460895));
}),cljs.core.PersistentArrayMap.EMPTY,node_points);
}
});
playfair_cljs.components.canvas.create_node = (function create_node(p__7813){var vec__7815 = p__7813;var shape_name = cljs.core.nth.call(null,vec__7815,0,null);var shape_map = cljs.core.nth.call(null,vec__7815,1,null);if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(shape_map)),new cljs.core.Keyword(null,"path","path",1017337751)))
{return playfair_cljs.components.canvas.create_node_path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_name,shape_map], null));
} else
{return playfair_cljs.components.canvas.create_node_rest.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_name,shape_map], null));
}
});
playfair_cljs.components.canvas.create_nodes = (function create_nodes(canvas_state){return cljs.core.reduce.call(null,(function (accum,shape){return cljs.core.conj.call(null,accum,playfair_cljs.components.canvas.create_node.call(null,shape));
}),cljs.core.PersistentArrayMap.EMPTY,canvas_state);
});
playfair_cljs.components.canvas.state_maker = (function state_maker(accum,step){return step.call(null,accum);
});
playfair_cljs.components.canvas.get_canvas_state = (function() {
var get_canvas_state = null;
var get_canvas_state__1 = (function (app_state){return get_canvas_state.call(null,app_state,cljs.core.count.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(app_state)));
});
var get_canvas_state__2 = (function (app_state,num_steps){var canvas_state = cljs.core.reduce.call(null,playfair_cljs.components.canvas.state_maker,cljs.core.PersistentArrayMap.EMPTY,cljs.core.subvec.call(null,new cljs.core.Keyword(null,"steps","steps",1123665561).cljs$core$IFn$_invoke$arity$1(app_state),0,num_steps));var keyState = new cljs.core.Keyword(null,"key-state","key-state",2231822101).cljs$core$IFn$_invoke$arity$1(app_state);var new_canvas_state = (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",1017261891),keyState)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"draw","draw",1016996022),keyState)))?cljs.core.conj.call(null,canvas_state,playfair_cljs.components.canvas.create_nodes.call(null,cljs.core.dissoc.call(null,canvas_state,new cljs.core.Keyword(null,"text","text",1017460895)))):canvas_state);return cljs.core.reduce.call(null,(function (accum,p__7818){var vec__7819 = p__7818;var shape_name = cljs.core.nth.call(null,vec__7819,0,null);var shape_map = cljs.core.nth.call(null,vec__7819,1,null);if(playfair_cljs.shapes.contain_str.call(null,cljs.core.name.call(null,shape_name),"path"))
{return cljs.core.conj.call(null,accum,((cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(shape_map)),1))?playfair_cljs.shapes.line_point_func.call(null,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(shape_map).call(null,0)),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(shape_map).call(null,0))):new cljs.core.PersistentArrayMap.fromArray([shape_name,shape_map], true, false)));
} else
{return cljs.core.conj.call(null,accum,new cljs.core.PersistentArrayMap.fromArray([shape_name,shape_map], true, false));
}
}),cljs.core.PersistentArrayMap.EMPTY,new_canvas_state);
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
playfair_cljs.components.canvas.render_canvas = (function render_canvas(shape,owner){var vec__7824 = shape;var shape_name = cljs.core.nth.call(null,vec__7824,0,null);var shape_map = cljs.core.nth.call(null,vec__7824,1,null);var shape_attrs = cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,playfair_cljs.shapes.nodes_to_attrs.call(null,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(shape_map)),new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(shape_map)),new cljs.core.Keyword(null,"visual-attrs","visual-attrs",1512932167).cljs$core$IFn$_invoke$arity$1(shape_map)));if(typeof playfair_cljs.components.canvas.t7825 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.canvas.t7825 = (function (shape_attrs,shape_map,shape_name,vec__7824,owner,shape,render_canvas,meta7826){
this.shape_attrs = shape_attrs;
this.shape_map = shape_map;
this.shape_name = shape_name;
this.vec__7824 = vec__7824;
this.owner = owner;
this.shape = shape;
this.render_canvas = render_canvas;
this.meta7826 = meta7826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.canvas.t7825.cljs$lang$type = true;
playfair_cljs.components.canvas.t7825.cljs$lang$ctorStr = "playfair-cljs.components.canvas/t7825";
playfair_cljs.components.canvas.t7825.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.canvas/t7825");
});
playfair_cljs.components.canvas.t7825.prototype.om$core$IRender$ = true;
playfair_cljs.components.canvas.t7825.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.shape_map),"rect"))
{return React.DOM.rect(self__.shape_attrs,null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.shape_map),"circle"))
{return React.DOM.circle(self__.shape_attrs,null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.shape_map),"line"))
{return React.DOM.line(self__.shape_attrs,null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.shape_map),"path"))
{return React.DOM.path(self__.shape_attrs,null);
} else
{return null;
}
}
}
}
});
playfair_cljs.components.canvas.t7825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7827){var self__ = this;
var _7827__$1 = this;return self__.meta7826;
});
playfair_cljs.components.canvas.t7825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7827,meta7826__$1){var self__ = this;
var _7827__$1 = this;return (new playfair_cljs.components.canvas.t7825(self__.shape_attrs,self__.shape_map,self__.shape_name,self__.vec__7824,self__.owner,self__.shape,self__.render_canvas,meta7826__$1));
});
playfair_cljs.components.canvas.__GT_t7825 = (function __GT_t7825(shape_attrs__$1,shape_map__$1,shape_name__$1,vec__7824__$1,owner__$1,shape__$1,render_canvas__$1,meta7826){return (new playfair_cljs.components.canvas.t7825(shape_attrs__$1,shape_map__$1,shape_name__$1,vec__7824__$1,owner__$1,shape__$1,render_canvas__$1,meta7826));
});
}
return (new playfair_cljs.components.canvas.t7825(shape_attrs,shape_map,shape_name,vec__7824,owner,shape,render_canvas,null));
});

//# sourceMappingURL=canvas.js.map