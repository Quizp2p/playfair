// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.canvas');
goog.require('cljs.core');
goog.require('playfair_cljs.csCompiler');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.csCompiler');
goog.require('om.dom');
goog.require('playfair_cljs.shapeDataConversion');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.shapeDataConversion');
goog.require('playfair_cljs.shapeData');
goog.require('playfair_cljs.debug');
playfair_cljs.components.canvas.make_x = (function make_x(position_attrs){var vec__10170 = position_attrs.call(null,0);var p_type = cljs.core.nth.call(null,vec__10170,0,null);var x = cljs.core.nth.call(null,vec__10170,1,null);var y = cljs.core.nth.call(null,vec__10170,2,null);var vis_attrs = playfair_cljs.shapeData.guide_shape_visual;var size = 5;var m_line = ((function (vec__10170,p_type,x,y,vis_attrs,size){
return (function (flip){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shape-name","shape-name",1699536041),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first-point","first-point",3184094117),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.apply.call(null,(cljs.core.truth_(flip)?cljs.core._:cljs.core._PLUS_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,size], null)),new cljs.core.Keyword(null,"y","y",1013904363),(y - size)], null),new cljs.core.Keyword(null,"middle-point","middle-point",4048024266),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y], null),new cljs.core.Keyword(null,"last-point","last-point",1861953291),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.apply.call(null,(cljs.core.truth_(flip)?cljs.core._PLUS_:cljs.core._),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,size], null)),new cljs.core.Keyword(null,"y","y",1013904363),(y + size)], null)], null),new cljs.core.Keyword(null,"visual-attrs","visual-attrs",1512932167),vis_attrs], null);
});})(vec__10170,p_type,x,y,vis_attrs,size))
;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_line.call(null,null),m_line.call(null,true)], null);
});
playfair_cljs.components.canvas.rect_to_path = (function rect_to_path(p__10171){var map__10173 = p__10171;var map__10173__$1 = ((cljs.core.seq_QMARK_.call(null,map__10173))?cljs.core.apply.call(null,cljs.core.hash_map,map__10173):map__10173);var top_right_node = cljs.core.get.call(null,map__10173__$1,new cljs.core.Keyword(null,"top-right-node","top-right-node",875619837));var bottom_left_node = cljs.core.get.call(null,map__10173__$1,new cljs.core.Keyword(null,"bottom-left-node","bottom-left-node",4456976984));var bottom_right_node = cljs.core.get.call(null,map__10173__$1,new cljs.core.Keyword(null,"bottom-right-node","bottom-right-node",2211335015));var top_left_node = cljs.core.get.call(null,map__10173__$1,new cljs.core.Keyword(null,"top-left-node","top-left-node",534564098));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(top_left_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(top_left_node)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(top_right_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(top_right_node)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(bottom_right_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(bottom_right_node)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(bottom_left_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(bottom_left_node)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Z","",""], null)], null);
});
playfair_cljs.components.canvas.render_canvas = (function render_canvas(p__10174,owner){var map__10179 = p__10174;var map__10179__$1 = ((cljs.core.seq_QMARK_.call(null,map__10179))?cljs.core.apply.call(null,cljs.core.hash_map,map__10179):map__10179);var shape = map__10179__$1;var visual_attrs = cljs.core.get.call(null,map__10179__$1,new cljs.core.Keyword(null,"visual-attrs","visual-attrs",1512932167));var position_attrs = cljs.core.get.call(null,map__10179__$1,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296));var shape_name = cljs.core.get.call(null,map__10179__$1,new cljs.core.Keyword(null,"shape-name","shape-name",1699536041));var position_attrs__$1 = ((cljs.core._EQ_.call(null,shape_name,new cljs.core.Keyword(null,"rect","rect",1017400662)))?playfair_cljs.components.canvas.rect_to_path.call(null,position_attrs):position_attrs);var shape_name__$1 = ((cljs.core._EQ_.call(null,shape_name,new cljs.core.Keyword(null,"rect","rect",1017400662)))?new cljs.core.Keyword(null,"path","path",1017337751):shape_name);var shape_attrs = cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,playfair_cljs.shapeDataConversion.nodes_to_attrs.call(null,shape_name__$1,position_attrs__$1),visual_attrs));if(typeof playfair_cljs.components.canvas.t10180 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.canvas.t10180 = (function (shape_attrs,shape_name,position_attrs,visual_attrs,shape,map__10179,owner,p__10174,render_canvas,meta10181){
this.shape_attrs = shape_attrs;
this.shape_name = shape_name;
this.position_attrs = position_attrs;
this.visual_attrs = visual_attrs;
this.shape = shape;
this.map__10179 = map__10179;
this.owner = owner;
this.p__10174 = p__10174;
this.render_canvas = render_canvas;
this.meta10181 = meta10181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.canvas.t10180.cljs$lang$type = true;
playfair_cljs.components.canvas.t10180.cljs$lang$ctorStr = "playfair-cljs.components.canvas/t10180";
playfair_cljs.components.canvas.t10180.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.canvas/t10180");
});
playfair_cljs.components.canvas.t10180.prototype.om$core$IRender$ = true;
playfair_cljs.components.canvas.t10180.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core._EQ_.call(null,self__.shape_name,new cljs.core.Keyword(null,"path","path",1017337751))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,self__.position_attrs),1)))
{return cljs.core.apply.call(null,om.dom.g,null,om.core.build_all.call(null,self__.render_canvas,playfair_cljs.components.canvas.make_x.call(null,self__.position_attrs)));
} else
{return self__.shape_name.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rect","rect",1017400662),React.DOM.path(self__.shape_attrs,null),new cljs.core.Keyword(null,"circle","circle",3948654658),React.DOM.circle(self__.shape_attrs,null),new cljs.core.Keyword(null,"line","line",1017226086),React.DOM.line(self__.shape_attrs,null),new cljs.core.Keyword(null,"path","path",1017337751),React.DOM.path(self__.shape_attrs,null)], null));
}
});
playfair_cljs.components.canvas.t10180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10182){var self__ = this;
var _10182__$1 = this;return self__.meta10181;
});
playfair_cljs.components.canvas.t10180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10182,meta10181__$1){var self__ = this;
var _10182__$1 = this;return (new playfair_cljs.components.canvas.t10180(self__.shape_attrs,self__.shape_name,self__.position_attrs,self__.visual_attrs,self__.shape,self__.map__10179,self__.owner,self__.p__10174,self__.render_canvas,meta10181__$1));
});
playfair_cljs.components.canvas.__GT_t10180 = (function __GT_t10180(shape_attrs__$1,shape_name__$2,position_attrs__$2,visual_attrs__$1,shape__$1,map__10179__$2,owner__$1,p__10174__$1,render_canvas__$1,meta10181){return (new playfair_cljs.components.canvas.t10180(shape_attrs__$1,shape_name__$2,position_attrs__$2,visual_attrs__$1,shape__$1,map__10179__$2,owner__$1,p__10174__$1,render_canvas__$1,meta10181));
});
}
return (new playfair_cljs.components.canvas.t10180(shape_attrs,shape_name__$1,position_attrs__$1,visual_attrs,shape,map__10179__$1,owner,p__10174,render_canvas,null));
});

//# sourceMappingURL=canvas.js.map