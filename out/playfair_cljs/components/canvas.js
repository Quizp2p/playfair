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
playfair_cljs.components.canvas.make_x = (function make_x(position_attrs){var vec__16421 = position_attrs.call(null,0);var p_type = cljs.core.nth.call(null,vec__16421,0,null);var x = cljs.core.nth.call(null,vec__16421,1,null);var y = cljs.core.nth.call(null,vec__16421,2,null);var vis_attrs = playfair_cljs.shapes.guide_shape_visual;var size = 5;var m_line = ((function (vec__16421,p_type,x,y,vis_attrs,size){
return (function (flip){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shape-name","shape-name",1699536041),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first-point","first-point",3184094117),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.apply.call(null,(cljs.core.truth_(flip)?cljs.core._:cljs.core._PLUS_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,size], null)),new cljs.core.Keyword(null,"y","y",1013904363),(y - size)], null),new cljs.core.Keyword(null,"middle-point","middle-point",4048024266),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y], null),new cljs.core.Keyword(null,"last-point","last-point",1861953291),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.apply.call(null,(cljs.core.truth_(flip)?cljs.core._PLUS_:cljs.core._),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,size], null)),new cljs.core.Keyword(null,"y","y",1013904363),(y + size)], null)], null),new cljs.core.Keyword(null,"visual-attrs","visual-attrs",1512932167),vis_attrs], null);
});})(vec__16421,p_type,x,y,vis_attrs,size))
;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_line.call(null,null),m_line.call(null,true)], null);
});
playfair_cljs.components.canvas.render_canvas = (function render_canvas(p__16422,owner){var map__16427 = p__16422;var map__16427__$1 = ((cljs.core.seq_QMARK_.call(null,map__16427))?cljs.core.apply.call(null,cljs.core.hash_map,map__16427):map__16427);var shape = map__16427__$1;var visual_attrs = cljs.core.get.call(null,map__16427__$1,new cljs.core.Keyword(null,"visual-attrs","visual-attrs",1512932167));var position_attrs = cljs.core.get.call(null,map__16427__$1,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296));var shape_name = cljs.core.get.call(null,map__16427__$1,new cljs.core.Keyword(null,"shape-name","shape-name",1699536041));var shape_attrs = cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,playfair_cljs.shapes.nodes_to_attrs.call(null,shape_name,position_attrs),visual_attrs));if(typeof playfair_cljs.components.canvas.t16428 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.canvas.t16428 = (function (shape_attrs,shape_name,position_attrs,visual_attrs,shape,map__16427,owner,p__16422,render_canvas,meta16429){
this.shape_attrs = shape_attrs;
this.shape_name = shape_name;
this.position_attrs = position_attrs;
this.visual_attrs = visual_attrs;
this.shape = shape;
this.map__16427 = map__16427;
this.owner = owner;
this.p__16422 = p__16422;
this.render_canvas = render_canvas;
this.meta16429 = meta16429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.canvas.t16428.cljs$lang$type = true;
playfair_cljs.components.canvas.t16428.cljs$lang$ctorStr = "playfair-cljs.components.canvas/t16428";
playfair_cljs.components.canvas.t16428.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.canvas/t16428");
});
playfair_cljs.components.canvas.t16428.prototype.om$core$IRender$ = true;
playfair_cljs.components.canvas.t16428.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core._EQ_.call(null,self__.shape_name,new cljs.core.Keyword(null,"path","path",1017337751))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,self__.position_attrs),1)))
{return cljs.core.apply.call(null,om.dom.g,null,om.core.build_all.call(null,self__.render_canvas,playfair_cljs.components.canvas.make_x.call(null,self__.position_attrs)));
} else
{return self__.shape_name.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rect","rect",1017400662),React.DOM.rect(self__.shape_attrs,null),new cljs.core.Keyword(null,"circle","circle",3948654658),React.DOM.circle(self__.shape_attrs,null),new cljs.core.Keyword(null,"line","line",1017226086),React.DOM.line(self__.shape_attrs,null),new cljs.core.Keyword(null,"path","path",1017337751),React.DOM.path(self__.shape_attrs,null)], null));
}
});
playfair_cljs.components.canvas.t16428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16430){var self__ = this;
var _16430__$1 = this;return self__.meta16429;
});
playfair_cljs.components.canvas.t16428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16430,meta16429__$1){var self__ = this;
var _16430__$1 = this;return (new playfair_cljs.components.canvas.t16428(self__.shape_attrs,self__.shape_name,self__.position_attrs,self__.visual_attrs,self__.shape,self__.map__16427,self__.owner,self__.p__16422,self__.render_canvas,meta16429__$1));
});
playfair_cljs.components.canvas.__GT_t16428 = (function __GT_t16428(shape_attrs__$1,shape_name__$1,position_attrs__$1,visual_attrs__$1,shape__$1,map__16427__$2,owner__$1,p__16422__$1,render_canvas__$1,meta16429){return (new playfair_cljs.components.canvas.t16428(shape_attrs__$1,shape_name__$1,position_attrs__$1,visual_attrs__$1,shape__$1,map__16427__$2,owner__$1,p__16422__$1,render_canvas__$1,meta16429));
});
}
return (new playfair_cljs.components.canvas.t16428(shape_attrs,shape_name,position_attrs,visual_attrs,shape,map__16427__$1,owner,p__16422,render_canvas,null));
});

//# sourceMappingURL=canvas.js.map