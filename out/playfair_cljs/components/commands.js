// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.commands');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
playfair_cljs.components.commands.render_commands = (function render_commands(p__5529,owner){var map__5534 = p__5529;var map__5534__$1 = ((cljs.core.seq_QMARK_.call(null,map__5534))?cljs.core.apply.call(null,cljs.core.hash_map,map__5534):map__5534);var className = cljs.core.get.call(null,map__5534__$1,new cljs.core.Keyword(null,"className","className",1004015509));var keypress = cljs.core.get.call(null,map__5534__$1,new cljs.core.Keyword(null,"keypress","keypress",1530666166));var commandName = cljs.core.get.call(null,map__5534__$1,new cljs.core.Keyword(null,"commandName","commandName",3847431144));if(typeof playfair_cljs.components.commands.t5535 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.commands.t5535 = (function (commandName,keypress,className,map__5534,owner,p__5529,render_commands,meta5536){
this.commandName = commandName;
this.keypress = keypress;
this.className = className;
this.map__5534 = map__5534;
this.owner = owner;
this.p__5529 = p__5529;
this.render_commands = render_commands;
this.meta5536 = meta5536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.commands.t5535.cljs$lang$type = true;
playfair_cljs.components.commands.t5535.cljs$lang$ctorStr = "playfair-cljs.components.commands/t5535";
playfair_cljs.components.commands.t5535.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.commands/t5535");
});
playfair_cljs.components.commands.t5535.prototype.om$core$IRender$ = true;
playfair_cljs.components.commands.t5535.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"id": self__.commandName, "className": self__.className},[cljs.core.str(self__.commandName),cljs.core.str(" - "),cljs.core.str(self__.keypress)].join(''));
});
playfair_cljs.components.commands.t5535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5537){var self__ = this;
var _5537__$1 = this;return self__.meta5536;
});
playfair_cljs.components.commands.t5535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5537,meta5536__$1){var self__ = this;
var _5537__$1 = this;return (new playfair_cljs.components.commands.t5535(self__.commandName,self__.keypress,self__.className,self__.map__5534,self__.owner,self__.p__5529,self__.render_commands,meta5536__$1));
});
playfair_cljs.components.commands.__GT_t5535 = (function __GT_t5535(commandName__$1,keypress__$1,className__$1,map__5534__$2,owner__$1,p__5529__$1,render_commands__$1,meta5536){return (new playfair_cljs.components.commands.t5535(commandName__$1,keypress__$1,className__$1,map__5534__$2,owner__$1,p__5529__$1,render_commands__$1,meta5536));
});
}
return (new playfair_cljs.components.commands.t5535(commandName,keypress,className,map__5534__$1,owner,p__5529,render_commands,null));
});

//# sourceMappingURL=commands.js.map