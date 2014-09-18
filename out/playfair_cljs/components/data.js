// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.data');
goog.require('cljs.core');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.debug');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
playfair_cljs.components.data.render_data = (function render_data(p__9913,owner){var vec__9918 = p__9913;var key_name = cljs.core.nth.call(null,vec__9918,0,null);var value = cljs.core.nth.call(null,vec__9918,1,null);if(typeof playfair_cljs.components.data.t9919 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.data.t9919 = (function (value,key_name,vec__9918,owner,p__9913,render_data,meta9920){
this.value = value;
this.key_name = key_name;
this.vec__9918 = vec__9918;
this.owner = owner;
this.p__9913 = p__9913;
this.render_data = render_data;
this.meta9920 = meta9920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.data.t9919.cljs$lang$type = true;
playfair_cljs.components.data.t9919.cljs$lang$ctorStr = "playfair-cljs.components.data/t9919";
playfair_cljs.components.data.t9919.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.data/t9919");
});
playfair_cljs.components.data.t9919.prototype.om$core$IRender$ = true;
playfair_cljs.components.data.t9919.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.tr({"className": "dataRow"},React.DOM.td({"className": "variable"},cljs.core.name.call(null,self__.key_name)),React.DOM.td({"className": "right"},cljs.core.pr_str.call(null,self__.value)));
});
playfair_cljs.components.data.t9919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9921){var self__ = this;
var _9921__$1 = this;return self__.meta9920;
});
playfair_cljs.components.data.t9919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9921,meta9920__$1){var self__ = this;
var _9921__$1 = this;return (new playfair_cljs.components.data.t9919(self__.value,self__.key_name,self__.vec__9918,self__.owner,self__.p__9913,self__.render_data,meta9920__$1));
});
playfair_cljs.components.data.__GT_t9919 = (function __GT_t9919(value__$1,key_name__$1,vec__9918__$1,owner__$1,p__9913__$1,render_data__$1,meta9920){return (new playfair_cljs.components.data.t9919(value__$1,key_name__$1,vec__9918__$1,owner__$1,p__9913__$1,render_data__$1,meta9920));
});
}
return (new playfair_cljs.components.data.t9919(value,key_name,vec__9918,owner,p__9913,render_data,null));
});

//# sourceMappingURL=data.js.map