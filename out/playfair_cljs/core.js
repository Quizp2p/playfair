// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.core');
goog.require('cljs.core');
goog.require('playfair_cljs.components.step');
goog.require('playfair_cljs.components.canvas');
goog.require('playfair_cljs.components.step');
goog.require('playfair_cljs.shapes');
goog.require('om.dom');
goog.require('om.core');
goog.require('playfair_cljs.appstate');
goog.require('om.core');
goog.require('playfair_cljs.shapes');
goog.require('playfair_cljs.components.commands');
goog.require('playfair_cljs.components.canvas');
goog.require('om.dom');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.appstate');
goog.require('playfair_cljs.components.commands');
goog.require('playfair_cljs.debug');
cljs.core.enable_console_print_BANG_.call(null);
playfair_cljs.core.get_last_state = (function() {
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
{return playfair_cljs.shapes.cs;
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
playfair_cljs.core.render_data = (function render_data(p__7922,owner){var vec__7927 = p__7922;var key_name = cljs.core.nth.call(null,vec__7927,0,null);var value = cljs.core.nth.call(null,vec__7927,1,null);if(typeof playfair_cljs.core.t7928 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.core.t7928 = (function (value,key_name,vec__7927,owner,p__7922,render_data,meta7929){
this.value = value;
this.key_name = key_name;
this.vec__7927 = vec__7927;
this.owner = owner;
this.p__7922 = p__7922;
this.render_data = render_data;
this.meta7929 = meta7929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.core.t7928.cljs$lang$type = true;
playfair_cljs.core.t7928.cljs$lang$ctorStr = "playfair-cljs.core/t7928";
playfair_cljs.core.t7928.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.core/t7928");
});
playfair_cljs.core.t7928.prototype.om$core$IRender$ = true;
playfair_cljs.core.t7928.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.tr({"className": "dataRow"},React.DOM.td({"className": "variable"},cljs.core.name.call(null,self__.key_name)),React.DOM.td({"className": "right"},cljs.core.pr_str.call(null,self__.value)));
});
playfair_cljs.core.t7928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7930){var self__ = this;
var _7930__$1 = this;return self__.meta7929;
});
playfair_cljs.core.t7928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7930,meta7929__$1){var self__ = this;
var _7930__$1 = this;return (new playfair_cljs.core.t7928(self__.value,self__.key_name,self__.vec__7927,self__.owner,self__.p__7922,self__.render_data,meta7929__$1));
});
playfair_cljs.core.__GT_t7928 = (function __GT_t7928(value__$1,key_name__$1,vec__7927__$1,owner__$1,p__7922__$1,render_data__$1,meta7929){return (new playfair_cljs.core.t7928(value__$1,key_name__$1,vec__7927__$1,owner__$1,p__7922__$1,render_data__$1,meta7929));
});
}
return (new playfair_cljs.core.t7928(value,key_name,vec__7927,owner,p__7922,render_data,null));
});
playfair_cljs.core.render_app = (function render_app(steps,owner){if(typeof playfair_cljs.core.t7934 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.core.t7934 = (function (owner,steps,render_app,meta7935){
this.owner = owner;
this.steps = steps;
this.render_app = render_app;
this.meta7935 = meta7935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.core.t7934.cljs$lang$type = true;
playfair_cljs.core.t7934.cljs$lang$ctorStr = "playfair-cljs.core/t7934";
playfair_cljs.core.t7934.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.core/t7934");
});
playfair_cljs.core.t7934.prototype.om$core$IRender$ = true;
playfair_cljs.core.t7934.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var app_state = playfair_cljs.shapes.steps_to_app_state.call(null,self__.steps);return React.DOM.div(null,React.DOM.div({"className": "screens"},React.DOM.svg({"height": 100, "width": 100}),React.DOM.button({"id": "screenButton"},"+")),React.DOM.div({"className": "steps"},React.DOM.p({"className": "center"},"Data"),cljs.core.apply.call(null,om.dom.table,null,om.core.build_all.call(null,playfair_cljs.core.render_data,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(self__.steps))),React.DOM.p({"className": "center"},"Steps"),cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,playfair_cljs.components.step.render_step,app_state))),React.DOM.div({"className": "canvas"},React.DOM.div({"id": "mainCanvas"},React.DOM.p({"className": "center"},playfair_cljs.core.get_last_state.call(null,cljs.core.last.call(null,app_state),new cljs.core.Keyword(null,"text","text",1017460895))),cljs.core.apply.call(null,om.dom.svg,{"height": playfair_cljs.shapes.canvas_size.call(null,1), "width": playfair_cljs.shapes.canvas_size.call(null,0)},om.core.build_all.call(null,playfair_cljs.components.canvas.render_canvas,playfair_cljs.shapes.make_renderable.call(null,playfair_cljs.core.get_last_state.call(null,cljs.core.last.call(null,app_state))))))),React.DOM.div({"className": "commands"},cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,playfair_cljs.components.commands.render_commands,new cljs.core.Keyword(null,"commands","commands",4706336250).cljs$core$IFn$_invoke$arity$1(self__.steps)))));
});
playfair_cljs.core.t7934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7936){var self__ = this;
var _7936__$1 = this;return self__.meta7935;
});
playfair_cljs.core.t7934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7936,meta7935__$1){var self__ = this;
var _7936__$1 = this;return (new playfair_cljs.core.t7934(self__.owner,self__.steps,self__.render_app,meta7935__$1));
});
playfair_cljs.core.__GT_t7934 = (function __GT_t7934(owner__$1,steps__$1,render_app__$1,meta7935){return (new playfair_cljs.core.t7934(owner__$1,steps__$1,render_app__$1,meta7935));
});
}
return (new playfair_cljs.core.t7934(owner,steps,render_app,null));
});
om.core.root.call(null,playfair_cljs.core.render_app,playfair_cljs.appstate.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map