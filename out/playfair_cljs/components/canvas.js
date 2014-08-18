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
playfair_cljs.components.canvas.create_node_rest = (function create_node_rest(p__44018){var map__44022 = p__44018;var map__44022__$1 = ((cljs.core.seq_QMARK_.call(null,map__44022))?cljs.core.apply.call(null,cljs.core.hash_map,map__44022):map__44022);var active = cljs.core.get.call(null,map__44022__$1,new cljs.core.Keyword(null,"active","active",3885920888));var position_attrs = cljs.core.get.call(null,map__44022__$1,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296));return new cljs.core.Keyword(null,"circle","circle",3948654658).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (accum,p__44023){var vec__44024 = p__44023;var node_name = cljs.core.nth.call(null,vec__44024,0,null);var node_pos = cljs.core.nth.call(null,vec__44024,1,null);var handle_node_map = playfair_cljs.shapes.attrs_to_nodes.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1013907431),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(node_pos),new cljs.core.Keyword(null,"cy","cy",1013907432),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(node_pos),new cljs.core.Keyword(null,"r","r",1013904356),3], null));var center_node = new cljs.core.Keyword(null,"center-node","center-node",2639619052).cljs$core$IFn$_invoke$arity$1(handle_node_map);var right_node = new cljs.core.Keyword(null,"right-node","right-node",3874878085).cljs$core$IFn$_invoke$arity$1(handle_node_map);return new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(playfair_cljs.shapes.make_draw.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(node_pos),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(node_pos)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0], null),(cljs.core.truth_(active)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"shapeGuide",new cljs.core.Keyword(null,"fill","fill",1017047285),"blue",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"blue"], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"shapeGuide",new cljs.core.Keyword(null,"fill","fill",1017047285),"#ffb440",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"#ffb440"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"centered","centered",4456450854),true], null))).call(null,accum);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"circle","circle",3948654658),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"text","text",1017460895),cljs.core.PersistentVector.EMPTY], null),position_attrs));
});
playfair_cljs.components.canvas.create_node_path = (function create_node_path(p__44025){var vec__44028 = p__44025;var shape_name = cljs.core.nth.call(null,vec__44028,0,null);var shape_map = cljs.core.nth.call(null,vec__44028,1,null);var node_points = new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296).cljs$core$IFn$_invoke$arity$1(shape_map);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,node_points),1))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return cljs.core.reduce.call(null,(function (accum,path_point){var attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1013907431),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(path_point),new cljs.core.Keyword(null,"cy","cy",1013907432),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(path_point),new cljs.core.Keyword(null,"r","r",1013904356),3], null);var vec__44029 = playfair_cljs.shapes.attrs_to_vectors.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),attrs);var vec1 = cljs.core.nth.call(null,vec__44029,0,null);var vec2 = cljs.core.nth.call(null,vec__44029,1,null);return cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$2(playfair_cljs.shapes.make_draw.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),vec1,vec2,(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(shape_map))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",1017047285),"blue",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"blue"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",1017047285),"#ffb440",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"#ffb440"], null))),accum).call(null),new cljs.core.Keyword(null,"text","text",1017460895));
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
playfair_cljs.components.canvas.render_canvas = (function render_canvas(p__44030,owner){var map__44035 = p__44030;var map__44035__$1 = ((cljs.core.seq_QMARK_.call(null,map__44035))?cljs.core.apply.call(null,cljs.core.hash_map,map__44035):map__44035);var shape = map__44035__$1;var visual_attrs = cljs.core.get.call(null,map__44035__$1,new cljs.core.Keyword(null,"visual-attrs","visual-attrs",1512932167));var position_attrs = cljs.core.get.call(null,map__44035__$1,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296));var shape_name = cljs.core.get.call(null,map__44035__$1,new cljs.core.Keyword(null,"shape-name","shape-name",1699536041));var shape_attrs = cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,playfair_cljs.shapes.nodes_to_attrs.call(null,shape_name,position_attrs),visual_attrs));if(typeof playfair_cljs.components.canvas.t44036 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.canvas.t44036 = (function (shape_attrs,shape_name,position_attrs,visual_attrs,shape,map__44035,owner,p__44030,render_canvas,meta44037){
this.shape_attrs = shape_attrs;
this.shape_name = shape_name;
this.position_attrs = position_attrs;
this.visual_attrs = visual_attrs;
this.shape = shape;
this.map__44035 = map__44035;
this.owner = owner;
this.p__44030 = p__44030;
this.render_canvas = render_canvas;
this.meta44037 = meta44037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.canvas.t44036.cljs$lang$type = true;
playfair_cljs.components.canvas.t44036.cljs$lang$ctorStr = "playfair-cljs.components.canvas/t44036";
playfair_cljs.components.canvas.t44036.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.canvas/t44036");
});
playfair_cljs.components.canvas.t44036.prototype.om$core$IRender$ = true;
playfair_cljs.components.canvas.t44036.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.shape_name.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rect","rect",1017400662),React.DOM.rect(self__.shape_attrs,null),new cljs.core.Keyword(null,"circle","circle",3948654658),React.DOM.circle(self__.shape_attrs,null),new cljs.core.Keyword(null,"line","line",1017226086),React.DOM.line(self__.shape_attrs,null),new cljs.core.Keyword(null,"path","path",1017337751),React.DOM.path(self__.shape_attrs,null)], null));
});
playfair_cljs.components.canvas.t44036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44038){var self__ = this;
var _44038__$1 = this;return self__.meta44037;
});
playfair_cljs.components.canvas.t44036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44038,meta44037__$1){var self__ = this;
var _44038__$1 = this;return (new playfair_cljs.components.canvas.t44036(self__.shape_attrs,self__.shape_name,self__.position_attrs,self__.visual_attrs,self__.shape,self__.map__44035,self__.owner,self__.p__44030,self__.render_canvas,meta44037__$1));
});
playfair_cljs.components.canvas.__GT_t44036 = (function __GT_t44036(shape_attrs__$1,shape_name__$1,position_attrs__$1,visual_attrs__$1,shape__$1,map__44035__$2,owner__$1,p__44030__$1,render_canvas__$1,meta44037){return (new playfair_cljs.components.canvas.t44036(shape_attrs__$1,shape_name__$1,position_attrs__$1,visual_attrs__$1,shape__$1,map__44035__$2,owner__$1,p__44030__$1,render_canvas__$1,meta44037));
});
}
return (new playfair_cljs.components.canvas.t44036(shape_attrs,shape_name,position_attrs,visual_attrs,shape,map__44035__$1,owner,p__44030,render_canvas,null));
});

//# sourceMappingURL=canvas.js.map