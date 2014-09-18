// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.components.commands');
goog.require('cljs.core');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.appstate');
goog.require('playfair_cljs.appstate');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
playfair_cljs.components.commands.command_list = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line","x"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["path","a"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rect","r"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["circle","c"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["magnet","u"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["picture","p"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["move","v"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scale","s"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rotate","e"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["duplicate","d"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loop","l"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["if","i"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["guide","g"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clip","k"], null)], null);
playfair_cljs.components.commands.render_commands = (function render_commands(p__9845,owner){var vec__9850 = p__9845;var commandName = cljs.core.nth.call(null,vec__9850,0,null);var keypress = cljs.core.nth.call(null,vec__9850,1,null);var key_state = cljs.core.nth.call(null,vec__9850,2,null);if(typeof playfair_cljs.components.commands.t9851 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.commands.t9851 = (function (key_state,keypress,commandName,vec__9850,owner,p__9845,render_commands,meta9852){
this.key_state = key_state;
this.keypress = keypress;
this.commandName = commandName;
this.vec__9850 = vec__9850;
this.owner = owner;
this.p__9845 = p__9845;
this.render_commands = render_commands;
this.meta9852 = meta9852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.commands.t9851.cljs$lang$type = true;
playfair_cljs.components.commands.t9851.cljs$lang$ctorStr = "playfair-cljs.components.commands/t9851";
playfair_cljs.components.commands.t9851.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.commands/t9851");
});
playfair_cljs.components.commands.t9851.prototype.om$core$IRender$ = true;
playfair_cljs.components.commands.t9851.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"id": self__.commandName, "className": ((cljs.core._EQ_.call(null,cljs.core.name.call(null,self__.key_state),self__.commandName))?"keypress":"regular")},[cljs.core.str(self__.commandName),cljs.core.str(" - "),cljs.core.str(self__.keypress)].join(''));
});
playfair_cljs.components.commands.t9851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9853){var self__ = this;
var _9853__$1 = this;return self__.meta9852;
});
playfair_cljs.components.commands.t9851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9853,meta9852__$1){var self__ = this;
var _9853__$1 = this;return (new playfair_cljs.components.commands.t9851(self__.key_state,self__.keypress,self__.commandName,self__.vec__9850,self__.owner,self__.p__9845,self__.render_commands,meta9852__$1));
});
playfair_cljs.components.commands.__GT_t9851 = (function __GT_t9851(key_state__$1,keypress__$1,commandName__$1,vec__9850__$1,owner__$1,p__9845__$1,render_commands__$1,meta9852){return (new playfair_cljs.components.commands.t9851(key_state__$1,keypress__$1,commandName__$1,vec__9850__$1,owner__$1,p__9845__$1,render_commands__$1,meta9852));
});
}
return (new playfair_cljs.components.commands.t9851(key_state,keypress,commandName,vec__9850,owner,p__9845,render_commands,null));
});

//# sourceMappingURL=commands.js.map