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
playfair_cljs.components.commands.command_list = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Draw",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line","x"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["path","a"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rect","r"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["circle","c"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adjust",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["move","v"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scale","s"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rotate","e"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Flow",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loop","l"], null)], null)], null)], null);
playfair_cljs.components.commands.render_command = (function render_command(p__9855,owner){var vec__9860 = p__9855;var commandName = cljs.core.nth.call(null,vec__9860,0,null);var keypress = cljs.core.nth.call(null,vec__9860,1,null);var key_state = cljs.core.nth.call(null,vec__9860,2,null);if(typeof playfair_cljs.components.commands.t9861 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.commands.t9861 = (function (key_state,keypress,commandName,vec__9860,owner,p__9855,render_command,meta9862){
this.key_state = key_state;
this.keypress = keypress;
this.commandName = commandName;
this.vec__9860 = vec__9860;
this.owner = owner;
this.p__9855 = p__9855;
this.render_command = render_command;
this.meta9862 = meta9862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.commands.t9861.cljs$lang$type = true;
playfair_cljs.components.commands.t9861.cljs$lang$ctorStr = "playfair-cljs.components.commands/t9861";
playfair_cljs.components.commands.t9861.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.commands/t9861");
});
playfair_cljs.components.commands.t9861.prototype.om$core$IRender$ = true;
playfair_cljs.components.commands.t9861.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"id": self__.commandName, "className": ((cljs.core._EQ_.call(null,cljs.core.name.call(null,self__.key_state),self__.commandName))?"keypress":"regular")},[cljs.core.str(self__.commandName),cljs.core.str(" - "),cljs.core.str(self__.keypress)].join(''));
});
playfair_cljs.components.commands.t9861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9863){var self__ = this;
var _9863__$1 = this;return self__.meta9862;
});
playfair_cljs.components.commands.t9861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9863,meta9862__$1){var self__ = this;
var _9863__$1 = this;return (new playfair_cljs.components.commands.t9861(self__.key_state,self__.keypress,self__.commandName,self__.vec__9860,self__.owner,self__.p__9855,self__.render_command,meta9862__$1));
});
playfair_cljs.components.commands.__GT_t9861 = (function __GT_t9861(key_state__$1,keypress__$1,commandName__$1,vec__9860__$1,owner__$1,p__9855__$1,render_command__$1,meta9862){return (new playfair_cljs.components.commands.t9861(key_state__$1,keypress__$1,commandName__$1,vec__9860__$1,owner__$1,p__9855__$1,render_command__$1,meta9862));
});
}
return (new playfair_cljs.components.commands.t9861(key_state,keypress,commandName,vec__9860,owner,p__9855,render_command,null));
});
playfair_cljs.components.commands.render_command_section = (function render_command_section(p__9864,owner){var vec__9869 = p__9864;var section_name = cljs.core.nth.call(null,vec__9869,0,null);var commands = cljs.core.nth.call(null,vec__9869,1,null);var key_state = cljs.core.nth.call(null,vec__9869,2,null);if(typeof playfair_cljs.components.commands.t9870 !== 'undefined')
{} else
{
/**
* @constructor
*/
playfair_cljs.components.commands.t9870 = (function (key_state,commands,section_name,vec__9869,owner,p__9864,render_command_section,meta9871){
this.key_state = key_state;
this.commands = commands;
this.section_name = section_name;
this.vec__9869 = vec__9869;
this.owner = owner;
this.p__9864 = p__9864;
this.render_command_section = render_command_section;
this.meta9871 = meta9871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
playfair_cljs.components.commands.t9870.cljs$lang$type = true;
playfair_cljs.components.commands.t9870.cljs$lang$ctorStr = "playfair-cljs.components.commands/t9870";
playfair_cljs.components.commands.t9870.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"playfair-cljs.components.commands/t9870");
});
playfair_cljs.components.commands.t9870.prototype.om$core$IRender$ = true;
playfair_cljs.components.commands.t9870.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.p({"className": "center bold"},self__.section_name),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,playfair_cljs.components.commands.render_command,cljs.core.map.call(null,(function (key_vec){return cljs.core.conj.call(null,key_vec,self__.key_state);
}),self__.commands))));
});
playfair_cljs.components.commands.t9870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9872){var self__ = this;
var _9872__$1 = this;return self__.meta9871;
});
playfair_cljs.components.commands.t9870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9872,meta9871__$1){var self__ = this;
var _9872__$1 = this;return (new playfair_cljs.components.commands.t9870(self__.key_state,self__.commands,self__.section_name,self__.vec__9869,self__.owner,self__.p__9864,self__.render_command_section,meta9871__$1));
});
playfair_cljs.components.commands.__GT_t9870 = (function __GT_t9870(key_state__$1,commands__$1,section_name__$1,vec__9869__$1,owner__$1,p__9864__$1,render_command_section__$1,meta9871){return (new playfair_cljs.components.commands.t9870(key_state__$1,commands__$1,section_name__$1,vec__9869__$1,owner__$1,p__9864__$1,render_command_section__$1,meta9871));
});
}
return (new playfair_cljs.components.commands.t9870(key_state,commands,section_name,vec__9869,owner,p__9864,render_command_section,null));
});

//# sourceMappingURL=commands.js.map