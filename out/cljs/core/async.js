// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9384 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9384 = (function (f,fn_handler,meta9385){
this.f = f;
this.fn_handler = fn_handler;
this.meta9385 = meta9385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9384.cljs$lang$type = true;
cljs.core.async.t9384.cljs$lang$ctorStr = "cljs.core.async/t9384";
cljs.core.async.t9384.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9384");
});
cljs.core.async.t9384.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9386){var self__ = this;
var _9386__$1 = this;return self__.meta9385;
});
cljs.core.async.t9384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9386,meta9385__$1){var self__ = this;
var _9386__$1 = this;return (new cljs.core.async.t9384(self__.f,self__.fn_handler,meta9385__$1));
});
cljs.core.async.__GT_t9384 = (function __GT_t9384(f__$1,fn_handler__$1,meta9385){return (new cljs.core.async.t9384(f__$1,fn_handler__$1,meta9385));
});
}
return (new cljs.core.async.t9384(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9388 = buff;if(G__9388)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__9388.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9388.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9388);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9388);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9389 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9389);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9389);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___9390 = n;var x_9391 = 0;while(true){
if((x_9391 < n__4289__auto___9390))
{(a[x_9391] = 0);
{
var G__9392 = (x_9391 + 1);
x_9391 = G__9392;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9393 = (i + 1);
i = G__9393;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9397 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9397 = (function (flag,alt_flag,meta9398){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9398 = meta9398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9397.cljs$lang$type = true;
cljs.core.async.t9397.cljs$lang$ctorStr = "cljs.core.async/t9397";
cljs.core.async.t9397.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9397");
});
cljs.core.async.t9397.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9397.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9397.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9399){var self__ = this;
var _9399__$1 = this;return self__.meta9398;
});
cljs.core.async.t9397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9399,meta9398__$1){var self__ = this;
var _9399__$1 = this;return (new cljs.core.async.t9397(self__.flag,self__.alt_flag,meta9398__$1));
});
cljs.core.async.__GT_t9397 = (function __GT_t9397(flag__$1,alt_flag__$1,meta9398){return (new cljs.core.async.t9397(flag__$1,alt_flag__$1,meta9398));
});
}
return (new cljs.core.async.t9397(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9403 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9403 = (function (cb,flag,alt_handler,meta9404){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9404 = meta9404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9403.cljs$lang$type = true;
cljs.core.async.t9403.cljs$lang$ctorStr = "cljs.core.async/t9403";
cljs.core.async.t9403.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9403");
});
cljs.core.async.t9403.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9405){var self__ = this;
var _9405__$1 = this;return self__.meta9404;
});
cljs.core.async.t9403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9405,meta9404__$1){var self__ = this;
var _9405__$1 = this;return (new cljs.core.async.t9403(self__.cb,self__.flag,self__.alt_handler,meta9404__$1));
});
cljs.core.async.__GT_t9403 = (function __GT_t9403(cb__$1,flag__$1,alt_handler__$1,meta9404){return (new cljs.core.async.t9403(cb__$1,flag__$1,alt_handler__$1,meta9404));
});
}
return (new cljs.core.async.t9403(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9406_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9406_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9407 = (i + 1);
i = G__9407;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9408){var map__9410 = p__9408;var map__9410__$1 = ((cljs.core.seq_QMARK_.call(null,map__9410))?cljs.core.apply.call(null,cljs.core.hash_map,map__9410):map__9410);var opts = map__9410__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9408 = null;if (arguments.length > 1) {
  p__9408 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9408);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9411){
var ports = cljs.core.first(arglist__9411);
var p__9408 = cljs.core.rest(arglist__9411);
return alts_BANG___delegate(ports,p__9408);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9419 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9419 = (function (ch,f,map_LT_,meta9420){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9420 = meta9420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9419.cljs$lang$type = true;
cljs.core.async.t9419.cljs$lang$ctorStr = "cljs.core.async/t9419";
cljs.core.async.t9419.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9419");
});
cljs.core.async.t9419.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9419.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9422 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9422 = (function (fn1,_,meta9420,ch,f,map_LT_,meta9423){
this.fn1 = fn1;
this._ = _;
this.meta9420 = meta9420;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9423 = meta9423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9422.cljs$lang$type = true;
cljs.core.async.t9422.cljs$lang$ctorStr = "cljs.core.async/t9422";
cljs.core.async.t9422.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9422");
});
cljs.core.async.t9422.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9422.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9422.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9422.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9412_SHARP_){return f1.call(null,(((p1__9412_SHARP_ == null))?null:self__.f.call(null,p1__9412_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9424){var self__ = this;
var _9424__$1 = this;return self__.meta9423;
});
cljs.core.async.t9422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9424,meta9423__$1){var self__ = this;
var _9424__$1 = this;return (new cljs.core.async.t9422(self__.fn1,self__._,self__.meta9420,self__.ch,self__.f,self__.map_LT_,meta9423__$1));
});
cljs.core.async.__GT_t9422 = (function __GT_t9422(fn1__$1,___$2,meta9420__$1,ch__$2,f__$2,map_LT___$2,meta9423){return (new cljs.core.async.t9422(fn1__$1,___$2,meta9420__$1,ch__$2,f__$2,map_LT___$2,meta9423));
});
}
return (new cljs.core.async.t9422(fn1,___$1,self__.meta9420,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9419.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9421){var self__ = this;
var _9421__$1 = this;return self__.meta9420;
});
cljs.core.async.t9419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9421,meta9420__$1){var self__ = this;
var _9421__$1 = this;return (new cljs.core.async.t9419(self__.ch,self__.f,self__.map_LT_,meta9420__$1));
});
cljs.core.async.__GT_t9419 = (function __GT_t9419(ch__$1,f__$1,map_LT___$1,meta9420){return (new cljs.core.async.t9419(ch__$1,f__$1,map_LT___$1,meta9420));
});
}
return (new cljs.core.async.t9419(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9428 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9428 = (function (ch,f,map_GT_,meta9429){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9429 = meta9429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9428.cljs$lang$type = true;
cljs.core.async.t9428.cljs$lang$ctorStr = "cljs.core.async/t9428";
cljs.core.async.t9428.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9428");
});
cljs.core.async.t9428.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9428.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9428.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9430){var self__ = this;
var _9430__$1 = this;return self__.meta9429;
});
cljs.core.async.t9428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9430,meta9429__$1){var self__ = this;
var _9430__$1 = this;return (new cljs.core.async.t9428(self__.ch,self__.f,self__.map_GT_,meta9429__$1));
});
cljs.core.async.__GT_t9428 = (function __GT_t9428(ch__$1,f__$1,map_GT___$1,meta9429){return (new cljs.core.async.t9428(ch__$1,f__$1,map_GT___$1,meta9429));
});
}
return (new cljs.core.async.t9428(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9434 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9434 = (function (ch,p,filter_GT_,meta9435){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9435 = meta9435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9434.cljs$lang$type = true;
cljs.core.async.t9434.cljs$lang$ctorStr = "cljs.core.async/t9434";
cljs.core.async.t9434.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t9434");
});
cljs.core.async.t9434.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9434.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9434.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9436){var self__ = this;
var _9436__$1 = this;return self__.meta9435;
});
cljs.core.async.t9434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9436,meta9435__$1){var self__ = this;
var _9436__$1 = this;return (new cljs.core.async.t9434(self__.ch,self__.p,self__.filter_GT_,meta9435__$1));
});
cljs.core.async.__GT_t9434 = (function __GT_t9434(ch__$1,p__$1,filter_GT___$1,meta9435){return (new cljs.core.async.t9434(ch__$1,p__$1,filter_GT___$1,meta9435));
});
}
return (new cljs.core.async.t9434(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7061__auto___9519 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_9498){var state_val_9499 = (state_9498[1]);if((state_val_9499 === 1))
{var state_9498__$1 = state_9498;var statearr_9500_9520 = state_9498__$1;(statearr_9500_9520[2] = null);
(statearr_9500_9520[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9499 === 2))
{var state_9498__$1 = state_9498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9498__$1,4,ch);
} else
{if((state_val_9499 === 3))
{var inst_9496 = (state_9498[2]);var state_9498__$1 = state_9498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9498__$1,inst_9496);
} else
{if((state_val_9499 === 4))
{var inst_9480 = (state_9498[7]);var inst_9480__$1 = (state_9498[2]);var inst_9481 = (inst_9480__$1 == null);var state_9498__$1 = (function (){var statearr_9501 = state_9498;(statearr_9501[7] = inst_9480__$1);
return statearr_9501;
})();if(cljs.core.truth_(inst_9481))
{var statearr_9502_9521 = state_9498__$1;(statearr_9502_9521[1] = 5);
} else
{var statearr_9503_9522 = state_9498__$1;(statearr_9503_9522[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9499 === 5))
{var inst_9483 = cljs.core.async.close_BANG_.call(null,out);var state_9498__$1 = state_9498;var statearr_9504_9523 = state_9498__$1;(statearr_9504_9523[2] = inst_9483);
(statearr_9504_9523[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9499 === 6))
{var inst_9480 = (state_9498[7]);var inst_9485 = p.call(null,inst_9480);var state_9498__$1 = state_9498;if(cljs.core.truth_(inst_9485))
{var statearr_9505_9524 = state_9498__$1;(statearr_9505_9524[1] = 8);
} else
{var statearr_9506_9525 = state_9498__$1;(statearr_9506_9525[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9499 === 7))
{var inst_9494 = (state_9498[2]);var state_9498__$1 = state_9498;var statearr_9507_9526 = state_9498__$1;(statearr_9507_9526[2] = inst_9494);
(statearr_9507_9526[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9499 === 8))
{var inst_9480 = (state_9498[7]);var state_9498__$1 = state_9498;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9498__$1,11,out,inst_9480);
} else
{if((state_val_9499 === 9))
{var state_9498__$1 = state_9498;var statearr_9508_9527 = state_9498__$1;(statearr_9508_9527[2] = null);
(statearr_9508_9527[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9499 === 10))
{var inst_9491 = (state_9498[2]);var state_9498__$1 = (function (){var statearr_9509 = state_9498;(statearr_9509[8] = inst_9491);
return statearr_9509;
})();var statearr_9510_9528 = state_9498__$1;(statearr_9510_9528[2] = null);
(statearr_9510_9528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9499 === 11))
{var inst_9488 = (state_9498[2]);var state_9498__$1 = state_9498;var statearr_9511_9529 = state_9498__$1;(statearr_9511_9529[2] = inst_9488);
(statearr_9511_9529[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_9515 = [null,null,null,null,null,null,null,null,null];(statearr_9515[0] = state_machine__6992__auto__);
(statearr_9515[1] = 1);
return statearr_9515;
});
var state_machine__6992__auto____1 = (function (state_9498){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_9498);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e9516){if((e9516 instanceof Object))
{var ex__6995__auto__ = e9516;var statearr_9517_9530 = state_9498;(statearr_9517_9530[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9498);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9516;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9531 = state_9498;
state_9498 = G__9531;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_9498){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_9498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_9518 = f__7062__auto__.call(null);(statearr_9518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto___9519);
return statearr_9518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7061__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_9683){var state_val_9684 = (state_9683[1]);if((state_val_9684 === 1))
{var state_9683__$1 = state_9683;var statearr_9685_9722 = state_9683__$1;(statearr_9685_9722[2] = null);
(statearr_9685_9722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 2))
{var state_9683__$1 = state_9683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9683__$1,4,in$);
} else
{if((state_val_9684 === 3))
{var inst_9681 = (state_9683[2]);var state_9683__$1 = state_9683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9683__$1,inst_9681);
} else
{if((state_val_9684 === 4))
{var inst_9629 = (state_9683[7]);var inst_9629__$1 = (state_9683[2]);var inst_9630 = (inst_9629__$1 == null);var state_9683__$1 = (function (){var statearr_9686 = state_9683;(statearr_9686[7] = inst_9629__$1);
return statearr_9686;
})();if(cljs.core.truth_(inst_9630))
{var statearr_9687_9723 = state_9683__$1;(statearr_9687_9723[1] = 5);
} else
{var statearr_9688_9724 = state_9683__$1;(statearr_9688_9724[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 5))
{var inst_9632 = cljs.core.async.close_BANG_.call(null,out);var state_9683__$1 = state_9683;var statearr_9689_9725 = state_9683__$1;(statearr_9689_9725[2] = inst_9632);
(statearr_9689_9725[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 6))
{var inst_9629 = (state_9683[7]);var inst_9634 = f.call(null,inst_9629);var inst_9639 = cljs.core.seq.call(null,inst_9634);var inst_9640 = inst_9639;var inst_9641 = null;var inst_9642 = 0;var inst_9643 = 0;var state_9683__$1 = (function (){var statearr_9690 = state_9683;(statearr_9690[8] = inst_9642);
(statearr_9690[9] = inst_9643);
(statearr_9690[10] = inst_9641);
(statearr_9690[11] = inst_9640);
return statearr_9690;
})();var statearr_9691_9726 = state_9683__$1;(statearr_9691_9726[2] = null);
(statearr_9691_9726[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 7))
{var inst_9679 = (state_9683[2]);var state_9683__$1 = state_9683;var statearr_9692_9727 = state_9683__$1;(statearr_9692_9727[2] = inst_9679);
(statearr_9692_9727[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 8))
{var inst_9642 = (state_9683[8]);var inst_9643 = (state_9683[9]);var inst_9645 = (inst_9643 < inst_9642);var inst_9646 = inst_9645;var state_9683__$1 = state_9683;if(cljs.core.truth_(inst_9646))
{var statearr_9693_9728 = state_9683__$1;(statearr_9693_9728[1] = 10);
} else
{var statearr_9694_9729 = state_9683__$1;(statearr_9694_9729[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 9))
{var inst_9676 = (state_9683[2]);var state_9683__$1 = (function (){var statearr_9695 = state_9683;(statearr_9695[12] = inst_9676);
return statearr_9695;
})();var statearr_9696_9730 = state_9683__$1;(statearr_9696_9730[2] = null);
(statearr_9696_9730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 10))
{var inst_9643 = (state_9683[9]);var inst_9641 = (state_9683[10]);var inst_9648 = cljs.core._nth.call(null,inst_9641,inst_9643);var state_9683__$1 = state_9683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9683__$1,13,out,inst_9648);
} else
{if((state_val_9684 === 11))
{var inst_9640 = (state_9683[11]);var inst_9654 = (state_9683[13]);var inst_9654__$1 = cljs.core.seq.call(null,inst_9640);var state_9683__$1 = (function (){var statearr_9700 = state_9683;(statearr_9700[13] = inst_9654__$1);
return statearr_9700;
})();if(inst_9654__$1)
{var statearr_9701_9731 = state_9683__$1;(statearr_9701_9731[1] = 14);
} else
{var statearr_9702_9732 = state_9683__$1;(statearr_9702_9732[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 12))
{var inst_9674 = (state_9683[2]);var state_9683__$1 = state_9683;var statearr_9703_9733 = state_9683__$1;(statearr_9703_9733[2] = inst_9674);
(statearr_9703_9733[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 13))
{var inst_9642 = (state_9683[8]);var inst_9643 = (state_9683[9]);var inst_9641 = (state_9683[10]);var inst_9640 = (state_9683[11]);var inst_9650 = (state_9683[2]);var inst_9651 = (inst_9643 + 1);var tmp9697 = inst_9642;var tmp9698 = inst_9641;var tmp9699 = inst_9640;var inst_9640__$1 = tmp9699;var inst_9641__$1 = tmp9698;var inst_9642__$1 = tmp9697;var inst_9643__$1 = inst_9651;var state_9683__$1 = (function (){var statearr_9704 = state_9683;(statearr_9704[8] = inst_9642__$1);
(statearr_9704[9] = inst_9643__$1);
(statearr_9704[10] = inst_9641__$1);
(statearr_9704[11] = inst_9640__$1);
(statearr_9704[14] = inst_9650);
return statearr_9704;
})();var statearr_9705_9734 = state_9683__$1;(statearr_9705_9734[2] = null);
(statearr_9705_9734[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 14))
{var inst_9654 = (state_9683[13]);var inst_9656 = cljs.core.chunked_seq_QMARK_.call(null,inst_9654);var state_9683__$1 = state_9683;if(inst_9656)
{var statearr_9706_9735 = state_9683__$1;(statearr_9706_9735[1] = 17);
} else
{var statearr_9707_9736 = state_9683__$1;(statearr_9707_9736[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 15))
{var state_9683__$1 = state_9683;var statearr_9708_9737 = state_9683__$1;(statearr_9708_9737[2] = null);
(statearr_9708_9737[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 16))
{var inst_9672 = (state_9683[2]);var state_9683__$1 = state_9683;var statearr_9709_9738 = state_9683__$1;(statearr_9709_9738[2] = inst_9672);
(statearr_9709_9738[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 17))
{var inst_9654 = (state_9683[13]);var inst_9658 = cljs.core.chunk_first.call(null,inst_9654);var inst_9659 = cljs.core.chunk_rest.call(null,inst_9654);var inst_9660 = cljs.core.count.call(null,inst_9658);var inst_9640 = inst_9659;var inst_9641 = inst_9658;var inst_9642 = inst_9660;var inst_9643 = 0;var state_9683__$1 = (function (){var statearr_9710 = state_9683;(statearr_9710[8] = inst_9642);
(statearr_9710[9] = inst_9643);
(statearr_9710[10] = inst_9641);
(statearr_9710[11] = inst_9640);
return statearr_9710;
})();var statearr_9711_9739 = state_9683__$1;(statearr_9711_9739[2] = null);
(statearr_9711_9739[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 18))
{var inst_9654 = (state_9683[13]);var inst_9663 = cljs.core.first.call(null,inst_9654);var state_9683__$1 = state_9683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9683__$1,20,out,inst_9663);
} else
{if((state_val_9684 === 19))
{var inst_9669 = (state_9683[2]);var state_9683__$1 = state_9683;var statearr_9712_9740 = state_9683__$1;(statearr_9712_9740[2] = inst_9669);
(statearr_9712_9740[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9684 === 20))
{var inst_9654 = (state_9683[13]);var inst_9665 = (state_9683[2]);var inst_9666 = cljs.core.next.call(null,inst_9654);var inst_9640 = inst_9666;var inst_9641 = null;var inst_9642 = 0;var inst_9643 = 0;var state_9683__$1 = (function (){var statearr_9713 = state_9683;(statearr_9713[15] = inst_9665);
(statearr_9713[8] = inst_9642);
(statearr_9713[9] = inst_9643);
(statearr_9713[10] = inst_9641);
(statearr_9713[11] = inst_9640);
return statearr_9713;
})();var statearr_9714_9741 = state_9683__$1;(statearr_9714_9741[2] = null);
(statearr_9714_9741[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_9718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9718[0] = state_machine__6992__auto__);
(statearr_9718[1] = 1);
return statearr_9718;
});
var state_machine__6992__auto____1 = (function (state_9683){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_9683);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e9719){if((e9719 instanceof Object))
{var ex__6995__auto__ = e9719;var statearr_9720_9742 = state_9683;(statearr_9720_9742[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9683);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9743 = state_9683;
state_9683 = G__9743;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_9683){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_9683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_9721 = f__7062__auto__.call(null);(statearr_9721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto__);
return statearr_9721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return c__7061__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7061__auto___9824 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_9803){var state_val_9804 = (state_9803[1]);if((state_val_9804 === 1))
{var state_9803__$1 = state_9803;var statearr_9805_9825 = state_9803__$1;(statearr_9805_9825[2] = null);
(statearr_9805_9825[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9804 === 2))
{var state_9803__$1 = state_9803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9803__$1,4,from);
} else
{if((state_val_9804 === 3))
{var inst_9801 = (state_9803[2]);var state_9803__$1 = state_9803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9803__$1,inst_9801);
} else
{if((state_val_9804 === 4))
{var inst_9786 = (state_9803[7]);var inst_9786__$1 = (state_9803[2]);var inst_9787 = (inst_9786__$1 == null);var state_9803__$1 = (function (){var statearr_9806 = state_9803;(statearr_9806[7] = inst_9786__$1);
return statearr_9806;
})();if(cljs.core.truth_(inst_9787))
{var statearr_9807_9826 = state_9803__$1;(statearr_9807_9826[1] = 5);
} else
{var statearr_9808_9827 = state_9803__$1;(statearr_9808_9827[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9804 === 5))
{var state_9803__$1 = state_9803;if(cljs.core.truth_(close_QMARK_))
{var statearr_9809_9828 = state_9803__$1;(statearr_9809_9828[1] = 8);
} else
{var statearr_9810_9829 = state_9803__$1;(statearr_9810_9829[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9804 === 6))
{var inst_9786 = (state_9803[7]);var state_9803__$1 = state_9803;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9803__$1,11,to,inst_9786);
} else
{if((state_val_9804 === 7))
{var inst_9799 = (state_9803[2]);var state_9803__$1 = state_9803;var statearr_9811_9830 = state_9803__$1;(statearr_9811_9830[2] = inst_9799);
(statearr_9811_9830[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9804 === 8))
{var inst_9790 = cljs.core.async.close_BANG_.call(null,to);var state_9803__$1 = state_9803;var statearr_9812_9831 = state_9803__$1;(statearr_9812_9831[2] = inst_9790);
(statearr_9812_9831[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9804 === 9))
{var state_9803__$1 = state_9803;var statearr_9813_9832 = state_9803__$1;(statearr_9813_9832[2] = null);
(statearr_9813_9832[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9804 === 10))
{var inst_9793 = (state_9803[2]);var state_9803__$1 = state_9803;var statearr_9814_9833 = state_9803__$1;(statearr_9814_9833[2] = inst_9793);
(statearr_9814_9833[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9804 === 11))
{var inst_9796 = (state_9803[2]);var state_9803__$1 = (function (){var statearr_9815 = state_9803;(statearr_9815[8] = inst_9796);
return statearr_9815;
})();var statearr_9816_9834 = state_9803__$1;(statearr_9816_9834[2] = null);
(statearr_9816_9834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_9820 = [null,null,null,null,null,null,null,null,null];(statearr_9820[0] = state_machine__6992__auto__);
(statearr_9820[1] = 1);
return statearr_9820;
});
var state_machine__6992__auto____1 = (function (state_9803){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_9803);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e9821){if((e9821 instanceof Object))
{var ex__6995__auto__ = e9821;var statearr_9822_9835 = state_9803;(statearr_9822_9835[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9803);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9821;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9836 = state_9803;
state_9803 = G__9836;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_9803){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_9803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_9823 = f__7062__auto__.call(null);(statearr_9823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto___9824);
return statearr_9823;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7061__auto___9923 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_9901){var state_val_9902 = (state_9901[1]);if((state_val_9902 === 1))
{var state_9901__$1 = state_9901;var statearr_9903_9924 = state_9901__$1;(statearr_9903_9924[2] = null);
(statearr_9903_9924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9902 === 2))
{var state_9901__$1 = state_9901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9901__$1,4,ch);
} else
{if((state_val_9902 === 3))
{var inst_9899 = (state_9901[2]);var state_9901__$1 = state_9901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9901__$1,inst_9899);
} else
{if((state_val_9902 === 4))
{var inst_9882 = (state_9901[7]);var inst_9882__$1 = (state_9901[2]);var inst_9883 = (inst_9882__$1 == null);var state_9901__$1 = (function (){var statearr_9904 = state_9901;(statearr_9904[7] = inst_9882__$1);
return statearr_9904;
})();if(cljs.core.truth_(inst_9883))
{var statearr_9905_9925 = state_9901__$1;(statearr_9905_9925[1] = 5);
} else
{var statearr_9906_9926 = state_9901__$1;(statearr_9906_9926[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9902 === 5))
{var inst_9885 = cljs.core.async.close_BANG_.call(null,tc);var inst_9886 = cljs.core.async.close_BANG_.call(null,fc);var state_9901__$1 = (function (){var statearr_9907 = state_9901;(statearr_9907[8] = inst_9885);
return statearr_9907;
})();var statearr_9908_9927 = state_9901__$1;(statearr_9908_9927[2] = inst_9886);
(statearr_9908_9927[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9902 === 6))
{var inst_9882 = (state_9901[7]);var inst_9888 = p.call(null,inst_9882);var state_9901__$1 = state_9901;if(cljs.core.truth_(inst_9888))
{var statearr_9909_9928 = state_9901__$1;(statearr_9909_9928[1] = 9);
} else
{var statearr_9910_9929 = state_9901__$1;(statearr_9910_9929[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9902 === 7))
{var inst_9897 = (state_9901[2]);var state_9901__$1 = state_9901;var statearr_9911_9930 = state_9901__$1;(statearr_9911_9930[2] = inst_9897);
(statearr_9911_9930[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9902 === 8))
{var inst_9894 = (state_9901[2]);var state_9901__$1 = (function (){var statearr_9912 = state_9901;(statearr_9912[9] = inst_9894);
return statearr_9912;
})();var statearr_9913_9931 = state_9901__$1;(statearr_9913_9931[2] = null);
(statearr_9913_9931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9902 === 9))
{var state_9901__$1 = state_9901;var statearr_9914_9932 = state_9901__$1;(statearr_9914_9932[2] = tc);
(statearr_9914_9932[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9902 === 10))
{var state_9901__$1 = state_9901;var statearr_9915_9933 = state_9901__$1;(statearr_9915_9933[2] = fc);
(statearr_9915_9933[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9902 === 11))
{var inst_9882 = (state_9901[7]);var inst_9892 = (state_9901[2]);var state_9901__$1 = state_9901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9901__$1,8,inst_9892,inst_9882);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_9919 = [null,null,null,null,null,null,null,null,null,null];(statearr_9919[0] = state_machine__6992__auto__);
(statearr_9919[1] = 1);
return statearr_9919;
});
var state_machine__6992__auto____1 = (function (state_9901){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_9901);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e9920){if((e9920 instanceof Object))
{var ex__6995__auto__ = e9920;var statearr_9921_9934 = state_9901;(statearr_9921_9934[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9935 = state_9901;
state_9901 = G__9935;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_9901){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_9901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_9922 = f__7062__auto__.call(null);(statearr_9922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto___9923);
return statearr_9922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7061__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_9982){var state_val_9983 = (state_9982[1]);if((state_val_9983 === 7))
{var inst_9978 = (state_9982[2]);var state_9982__$1 = state_9982;var statearr_9984_10000 = state_9982__$1;(statearr_9984_10000[2] = inst_9978);
(statearr_9984_10000[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9983 === 6))
{var inst_9968 = (state_9982[7]);var inst_9971 = (state_9982[8]);var inst_9975 = f.call(null,inst_9968,inst_9971);var inst_9968__$1 = inst_9975;var state_9982__$1 = (function (){var statearr_9985 = state_9982;(statearr_9985[7] = inst_9968__$1);
return statearr_9985;
})();var statearr_9986_10001 = state_9982__$1;(statearr_9986_10001[2] = null);
(statearr_9986_10001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9983 === 5))
{var inst_9968 = (state_9982[7]);var state_9982__$1 = state_9982;var statearr_9987_10002 = state_9982__$1;(statearr_9987_10002[2] = inst_9968);
(statearr_9987_10002[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9983 === 4))
{var inst_9971 = (state_9982[8]);var inst_9971__$1 = (state_9982[2]);var inst_9972 = (inst_9971__$1 == null);var state_9982__$1 = (function (){var statearr_9988 = state_9982;(statearr_9988[8] = inst_9971__$1);
return statearr_9988;
})();if(cljs.core.truth_(inst_9972))
{var statearr_9989_10003 = state_9982__$1;(statearr_9989_10003[1] = 5);
} else
{var statearr_9990_10004 = state_9982__$1;(statearr_9990_10004[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9983 === 3))
{var inst_9980 = (state_9982[2]);var state_9982__$1 = state_9982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9982__$1,inst_9980);
} else
{if((state_val_9983 === 2))
{var state_9982__$1 = state_9982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9982__$1,4,ch);
} else
{if((state_val_9983 === 1))
{var inst_9968 = init;var state_9982__$1 = (function (){var statearr_9991 = state_9982;(statearr_9991[7] = inst_9968);
return statearr_9991;
})();var statearr_9992_10005 = state_9982__$1;(statearr_9992_10005[2] = null);
(statearr_9992_10005[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_9996 = [null,null,null,null,null,null,null,null,null];(statearr_9996[0] = state_machine__6992__auto__);
(statearr_9996[1] = 1);
return statearr_9996;
});
var state_machine__6992__auto____1 = (function (state_9982){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_9982);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e9997){if((e9997 instanceof Object))
{var ex__6995__auto__ = e9997;var statearr_9998_10006 = state_9982;(statearr_9998_10006[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9982);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10007 = state_9982;
state_9982 = G__10007;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_9982){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_9982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_9999 = f__7062__auto__.call(null);(statearr_9999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto__);
return statearr_9999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return c__7061__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7061__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_10069){var state_val_10070 = (state_10069[1]);if((state_val_10070 === 1))
{var inst_10049 = cljs.core.seq.call(null,coll);var inst_10050 = inst_10049;var state_10069__$1 = (function (){var statearr_10071 = state_10069;(statearr_10071[7] = inst_10050);
return statearr_10071;
})();var statearr_10072_10090 = state_10069__$1;(statearr_10072_10090[2] = null);
(statearr_10072_10090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10070 === 2))
{var inst_10050 = (state_10069[7]);var state_10069__$1 = state_10069;if(cljs.core.truth_(inst_10050))
{var statearr_10073_10091 = state_10069__$1;(statearr_10073_10091[1] = 4);
} else
{var statearr_10074_10092 = state_10069__$1;(statearr_10074_10092[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10070 === 3))
{var inst_10067 = (state_10069[2]);var state_10069__$1 = state_10069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10069__$1,inst_10067);
} else
{if((state_val_10070 === 4))
{var inst_10050 = (state_10069[7]);var inst_10053 = cljs.core.first.call(null,inst_10050);var state_10069__$1 = state_10069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10069__$1,7,ch,inst_10053);
} else
{if((state_val_10070 === 5))
{var state_10069__$1 = state_10069;if(cljs.core.truth_(close_QMARK_))
{var statearr_10075_10093 = state_10069__$1;(statearr_10075_10093[1] = 8);
} else
{var statearr_10076_10094 = state_10069__$1;(statearr_10076_10094[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10070 === 6))
{var inst_10065 = (state_10069[2]);var state_10069__$1 = state_10069;var statearr_10077_10095 = state_10069__$1;(statearr_10077_10095[2] = inst_10065);
(statearr_10077_10095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10070 === 7))
{var inst_10050 = (state_10069[7]);var inst_10055 = (state_10069[2]);var inst_10056 = cljs.core.next.call(null,inst_10050);var inst_10050__$1 = inst_10056;var state_10069__$1 = (function (){var statearr_10078 = state_10069;(statearr_10078[8] = inst_10055);
(statearr_10078[7] = inst_10050__$1);
return statearr_10078;
})();var statearr_10079_10096 = state_10069__$1;(statearr_10079_10096[2] = null);
(statearr_10079_10096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10070 === 8))
{var inst_10060 = cljs.core.async.close_BANG_.call(null,ch);var state_10069__$1 = state_10069;var statearr_10080_10097 = state_10069__$1;(statearr_10080_10097[2] = inst_10060);
(statearr_10080_10097[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10070 === 9))
{var state_10069__$1 = state_10069;var statearr_10081_10098 = state_10069__$1;(statearr_10081_10098[2] = null);
(statearr_10081_10098[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10070 === 10))
{var inst_10063 = (state_10069[2]);var state_10069__$1 = state_10069;var statearr_10082_10099 = state_10069__$1;(statearr_10082_10099[2] = inst_10063);
(statearr_10082_10099[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_10086 = [null,null,null,null,null,null,null,null,null];(statearr_10086[0] = state_machine__6992__auto__);
(statearr_10086[1] = 1);
return statearr_10086;
});
var state_machine__6992__auto____1 = (function (state_10069){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_10069);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e10087){if((e10087 instanceof Object))
{var ex__6995__auto__ = e10087;var statearr_10088_10100 = state_10069;(statearr_10088_10100[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10069);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10101 = state_10069;
state_10069 = G__10101;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_10069){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_10069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_10089 = f__7062__auto__.call(null);(statearr_10089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto__);
return statearr_10089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return c__7061__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10103 = {};return obj10103;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10105 = {};return obj10105;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10329 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10329 = (function (cs,ch,mult,meta10330){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10330 = meta10330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10329.cljs$lang$type = true;
cljs.core.async.t10329.cljs$lang$ctorStr = "cljs.core.async/t10329";
cljs.core.async.t10329.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t10329");
});})(cs))
;
cljs.core.async.t10329.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10329.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10329.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10329.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10329.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10331){var self__ = this;
var _10331__$1 = this;return self__.meta10330;
});})(cs))
;
cljs.core.async.t10329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10331,meta10330__$1){var self__ = this;
var _10331__$1 = this;return (new cljs.core.async.t10329(self__.cs,self__.ch,self__.mult,meta10330__$1));
});})(cs))
;
cljs.core.async.__GT_t10329 = ((function (cs){
return (function __GT_t10329(cs__$1,ch__$1,mult__$1,meta10330){return (new cljs.core.async.t10329(cs__$1,ch__$1,mult__$1,meta10330));
});})(cs))
;
}
return (new cljs.core.async.t10329(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7061__auto___10552 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_10466){var state_val_10467 = (state_10466[1]);if((state_val_10467 === 32))
{var inst_10410 = (state_10466[7]);var inst_10334 = (state_10466[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10466,31,Object,null,30);var inst_10417 = cljs.core.async.put_BANG_.call(null,inst_10410,inst_10334,done);var state_10466__$1 = state_10466;var statearr_10468_10553 = state_10466__$1;(statearr_10468_10553[2] = inst_10417);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10466__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 1))
{var state_10466__$1 = state_10466;var statearr_10469_10554 = state_10466__$1;(statearr_10469_10554[2] = null);
(statearr_10469_10554[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 33))
{var inst_10423 = (state_10466[9]);var inst_10425 = cljs.core.chunked_seq_QMARK_.call(null,inst_10423);var state_10466__$1 = state_10466;if(inst_10425)
{var statearr_10470_10555 = state_10466__$1;(statearr_10470_10555[1] = 36);
} else
{var statearr_10471_10556 = state_10466__$1;(statearr_10471_10556[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 2))
{var state_10466__$1 = state_10466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10466__$1,4,ch);
} else
{if((state_val_10467 === 34))
{var state_10466__$1 = state_10466;var statearr_10472_10557 = state_10466__$1;(statearr_10472_10557[2] = null);
(statearr_10472_10557[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 3))
{var inst_10464 = (state_10466[2]);var state_10466__$1 = state_10466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10466__$1,inst_10464);
} else
{if((state_val_10467 === 35))
{var inst_10448 = (state_10466[2]);var state_10466__$1 = state_10466;var statearr_10473_10558 = state_10466__$1;(statearr_10473_10558[2] = inst_10448);
(statearr_10473_10558[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 4))
{var inst_10334 = (state_10466[8]);var inst_10334__$1 = (state_10466[2]);var inst_10335 = (inst_10334__$1 == null);var state_10466__$1 = (function (){var statearr_10474 = state_10466;(statearr_10474[8] = inst_10334__$1);
return statearr_10474;
})();if(cljs.core.truth_(inst_10335))
{var statearr_10475_10559 = state_10466__$1;(statearr_10475_10559[1] = 5);
} else
{var statearr_10476_10560 = state_10466__$1;(statearr_10476_10560[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 36))
{var inst_10423 = (state_10466[9]);var inst_10427 = cljs.core.chunk_first.call(null,inst_10423);var inst_10428 = cljs.core.chunk_rest.call(null,inst_10423);var inst_10429 = cljs.core.count.call(null,inst_10427);var inst_10402 = inst_10428;var inst_10403 = inst_10427;var inst_10404 = inst_10429;var inst_10405 = 0;var state_10466__$1 = (function (){var statearr_10477 = state_10466;(statearr_10477[10] = inst_10402);
(statearr_10477[11] = inst_10403);
(statearr_10477[12] = inst_10405);
(statearr_10477[13] = inst_10404);
return statearr_10477;
})();var statearr_10478_10561 = state_10466__$1;(statearr_10478_10561[2] = null);
(statearr_10478_10561[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 5))
{var inst_10341 = cljs.core.deref.call(null,cs);var inst_10342 = cljs.core.seq.call(null,inst_10341);var inst_10343 = inst_10342;var inst_10344 = null;var inst_10345 = 0;var inst_10346 = 0;var state_10466__$1 = (function (){var statearr_10479 = state_10466;(statearr_10479[14] = inst_10345);
(statearr_10479[15] = inst_10346);
(statearr_10479[16] = inst_10344);
(statearr_10479[17] = inst_10343);
return statearr_10479;
})();var statearr_10480_10562 = state_10466__$1;(statearr_10480_10562[2] = null);
(statearr_10480_10562[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 37))
{var inst_10423 = (state_10466[9]);var inst_10432 = cljs.core.first.call(null,inst_10423);var state_10466__$1 = (function (){var statearr_10481 = state_10466;(statearr_10481[18] = inst_10432);
return statearr_10481;
})();var statearr_10482_10563 = state_10466__$1;(statearr_10482_10563[2] = null);
(statearr_10482_10563[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 6))
{var inst_10394 = (state_10466[19]);var inst_10393 = cljs.core.deref.call(null,cs);var inst_10394__$1 = cljs.core.keys.call(null,inst_10393);var inst_10395 = cljs.core.count.call(null,inst_10394__$1);var inst_10396 = cljs.core.reset_BANG_.call(null,dctr,inst_10395);var inst_10401 = cljs.core.seq.call(null,inst_10394__$1);var inst_10402 = inst_10401;var inst_10403 = null;var inst_10404 = 0;var inst_10405 = 0;var state_10466__$1 = (function (){var statearr_10483 = state_10466;(statearr_10483[10] = inst_10402);
(statearr_10483[11] = inst_10403);
(statearr_10483[20] = inst_10396);
(statearr_10483[12] = inst_10405);
(statearr_10483[19] = inst_10394__$1);
(statearr_10483[13] = inst_10404);
return statearr_10483;
})();var statearr_10484_10564 = state_10466__$1;(statearr_10484_10564[2] = null);
(statearr_10484_10564[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 38))
{var inst_10445 = (state_10466[2]);var state_10466__$1 = state_10466;var statearr_10485_10565 = state_10466__$1;(statearr_10485_10565[2] = inst_10445);
(statearr_10485_10565[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 7))
{var inst_10462 = (state_10466[2]);var state_10466__$1 = state_10466;var statearr_10486_10566 = state_10466__$1;(statearr_10486_10566[2] = inst_10462);
(statearr_10486_10566[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 39))
{var inst_10423 = (state_10466[9]);var inst_10441 = (state_10466[2]);var inst_10442 = cljs.core.next.call(null,inst_10423);var inst_10402 = inst_10442;var inst_10403 = null;var inst_10404 = 0;var inst_10405 = 0;var state_10466__$1 = (function (){var statearr_10487 = state_10466;(statearr_10487[10] = inst_10402);
(statearr_10487[11] = inst_10403);
(statearr_10487[21] = inst_10441);
(statearr_10487[12] = inst_10405);
(statearr_10487[13] = inst_10404);
return statearr_10487;
})();var statearr_10488_10567 = state_10466__$1;(statearr_10488_10567[2] = null);
(statearr_10488_10567[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 8))
{var inst_10345 = (state_10466[14]);var inst_10346 = (state_10466[15]);var inst_10348 = (inst_10346 < inst_10345);var inst_10349 = inst_10348;var state_10466__$1 = state_10466;if(cljs.core.truth_(inst_10349))
{var statearr_10489_10568 = state_10466__$1;(statearr_10489_10568[1] = 10);
} else
{var statearr_10490_10569 = state_10466__$1;(statearr_10490_10569[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 40))
{var inst_10432 = (state_10466[18]);var inst_10433 = (state_10466[2]);var inst_10434 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10435 = cljs.core.async.untap_STAR_.call(null,m,inst_10432);var state_10466__$1 = (function (){var statearr_10491 = state_10466;(statearr_10491[22] = inst_10433);
(statearr_10491[23] = inst_10434);
return statearr_10491;
})();var statearr_10492_10570 = state_10466__$1;(statearr_10492_10570[2] = inst_10435);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10466__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 9))
{var inst_10391 = (state_10466[2]);var state_10466__$1 = state_10466;var statearr_10493_10571 = state_10466__$1;(statearr_10493_10571[2] = inst_10391);
(statearr_10493_10571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 41))
{var inst_10432 = (state_10466[18]);var inst_10334 = (state_10466[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10466,40,Object,null,39);var inst_10439 = cljs.core.async.put_BANG_.call(null,inst_10432,inst_10334,done);var state_10466__$1 = state_10466;var statearr_10494_10572 = state_10466__$1;(statearr_10494_10572[2] = inst_10439);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10466__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 10))
{var inst_10346 = (state_10466[15]);var inst_10344 = (state_10466[16]);var inst_10352 = cljs.core._nth.call(null,inst_10344,inst_10346);var inst_10353 = cljs.core.nth.call(null,inst_10352,0,null);var inst_10354 = cljs.core.nth.call(null,inst_10352,1,null);var state_10466__$1 = (function (){var statearr_10495 = state_10466;(statearr_10495[24] = inst_10353);
return statearr_10495;
})();if(cljs.core.truth_(inst_10354))
{var statearr_10496_10573 = state_10466__$1;(statearr_10496_10573[1] = 13);
} else
{var statearr_10497_10574 = state_10466__$1;(statearr_10497_10574[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 42))
{var state_10466__$1 = state_10466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10466__$1,45,dchan);
} else
{if((state_val_10467 === 11))
{var inst_10363 = (state_10466[25]);var inst_10343 = (state_10466[17]);var inst_10363__$1 = cljs.core.seq.call(null,inst_10343);var state_10466__$1 = (function (){var statearr_10498 = state_10466;(statearr_10498[25] = inst_10363__$1);
return statearr_10498;
})();if(inst_10363__$1)
{var statearr_10499_10575 = state_10466__$1;(statearr_10499_10575[1] = 16);
} else
{var statearr_10500_10576 = state_10466__$1;(statearr_10500_10576[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 43))
{var state_10466__$1 = state_10466;var statearr_10501_10577 = state_10466__$1;(statearr_10501_10577[2] = null);
(statearr_10501_10577[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 12))
{var inst_10389 = (state_10466[2]);var state_10466__$1 = state_10466;var statearr_10502_10578 = state_10466__$1;(statearr_10502_10578[2] = inst_10389);
(statearr_10502_10578[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 44))
{var inst_10459 = (state_10466[2]);var state_10466__$1 = (function (){var statearr_10503 = state_10466;(statearr_10503[26] = inst_10459);
return statearr_10503;
})();var statearr_10504_10579 = state_10466__$1;(statearr_10504_10579[2] = null);
(statearr_10504_10579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 13))
{var inst_10353 = (state_10466[24]);var inst_10356 = cljs.core.async.close_BANG_.call(null,inst_10353);var state_10466__$1 = state_10466;var statearr_10505_10580 = state_10466__$1;(statearr_10505_10580[2] = inst_10356);
(statearr_10505_10580[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 45))
{var inst_10456 = (state_10466[2]);var state_10466__$1 = state_10466;var statearr_10509_10581 = state_10466__$1;(statearr_10509_10581[2] = inst_10456);
(statearr_10509_10581[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 14))
{var state_10466__$1 = state_10466;var statearr_10510_10582 = state_10466__$1;(statearr_10510_10582[2] = null);
(statearr_10510_10582[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 15))
{var inst_10345 = (state_10466[14]);var inst_10346 = (state_10466[15]);var inst_10344 = (state_10466[16]);var inst_10343 = (state_10466[17]);var inst_10359 = (state_10466[2]);var inst_10360 = (inst_10346 + 1);var tmp10506 = inst_10345;var tmp10507 = inst_10344;var tmp10508 = inst_10343;var inst_10343__$1 = tmp10508;var inst_10344__$1 = tmp10507;var inst_10345__$1 = tmp10506;var inst_10346__$1 = inst_10360;var state_10466__$1 = (function (){var statearr_10511 = state_10466;(statearr_10511[27] = inst_10359);
(statearr_10511[14] = inst_10345__$1);
(statearr_10511[15] = inst_10346__$1);
(statearr_10511[16] = inst_10344__$1);
(statearr_10511[17] = inst_10343__$1);
return statearr_10511;
})();var statearr_10512_10583 = state_10466__$1;(statearr_10512_10583[2] = null);
(statearr_10512_10583[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 16))
{var inst_10363 = (state_10466[25]);var inst_10365 = cljs.core.chunked_seq_QMARK_.call(null,inst_10363);var state_10466__$1 = state_10466;if(inst_10365)
{var statearr_10513_10584 = state_10466__$1;(statearr_10513_10584[1] = 19);
} else
{var statearr_10514_10585 = state_10466__$1;(statearr_10514_10585[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 17))
{var state_10466__$1 = state_10466;var statearr_10515_10586 = state_10466__$1;(statearr_10515_10586[2] = null);
(statearr_10515_10586[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 18))
{var inst_10387 = (state_10466[2]);var state_10466__$1 = state_10466;var statearr_10516_10587 = state_10466__$1;(statearr_10516_10587[2] = inst_10387);
(statearr_10516_10587[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 19))
{var inst_10363 = (state_10466[25]);var inst_10367 = cljs.core.chunk_first.call(null,inst_10363);var inst_10368 = cljs.core.chunk_rest.call(null,inst_10363);var inst_10369 = cljs.core.count.call(null,inst_10367);var inst_10343 = inst_10368;var inst_10344 = inst_10367;var inst_10345 = inst_10369;var inst_10346 = 0;var state_10466__$1 = (function (){var statearr_10517 = state_10466;(statearr_10517[14] = inst_10345);
(statearr_10517[15] = inst_10346);
(statearr_10517[16] = inst_10344);
(statearr_10517[17] = inst_10343);
return statearr_10517;
})();var statearr_10518_10588 = state_10466__$1;(statearr_10518_10588[2] = null);
(statearr_10518_10588[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 20))
{var inst_10363 = (state_10466[25]);var inst_10373 = cljs.core.first.call(null,inst_10363);var inst_10374 = cljs.core.nth.call(null,inst_10373,0,null);var inst_10375 = cljs.core.nth.call(null,inst_10373,1,null);var state_10466__$1 = (function (){var statearr_10519 = state_10466;(statearr_10519[28] = inst_10374);
return statearr_10519;
})();if(cljs.core.truth_(inst_10375))
{var statearr_10520_10589 = state_10466__$1;(statearr_10520_10589[1] = 22);
} else
{var statearr_10521_10590 = state_10466__$1;(statearr_10521_10590[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 21))
{var inst_10384 = (state_10466[2]);var state_10466__$1 = state_10466;var statearr_10522_10591 = state_10466__$1;(statearr_10522_10591[2] = inst_10384);
(statearr_10522_10591[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 22))
{var inst_10374 = (state_10466[28]);var inst_10377 = cljs.core.async.close_BANG_.call(null,inst_10374);var state_10466__$1 = state_10466;var statearr_10523_10592 = state_10466__$1;(statearr_10523_10592[2] = inst_10377);
(statearr_10523_10592[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 23))
{var state_10466__$1 = state_10466;var statearr_10524_10593 = state_10466__$1;(statearr_10524_10593[2] = null);
(statearr_10524_10593[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 24))
{var inst_10363 = (state_10466[25]);var inst_10380 = (state_10466[2]);var inst_10381 = cljs.core.next.call(null,inst_10363);var inst_10343 = inst_10381;var inst_10344 = null;var inst_10345 = 0;var inst_10346 = 0;var state_10466__$1 = (function (){var statearr_10525 = state_10466;(statearr_10525[14] = inst_10345);
(statearr_10525[15] = inst_10346);
(statearr_10525[29] = inst_10380);
(statearr_10525[16] = inst_10344);
(statearr_10525[17] = inst_10343);
return statearr_10525;
})();var statearr_10526_10594 = state_10466__$1;(statearr_10526_10594[2] = null);
(statearr_10526_10594[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 25))
{var inst_10405 = (state_10466[12]);var inst_10404 = (state_10466[13]);var inst_10407 = (inst_10405 < inst_10404);var inst_10408 = inst_10407;var state_10466__$1 = state_10466;if(cljs.core.truth_(inst_10408))
{var statearr_10527_10595 = state_10466__$1;(statearr_10527_10595[1] = 27);
} else
{var statearr_10528_10596 = state_10466__$1;(statearr_10528_10596[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 26))
{var inst_10394 = (state_10466[19]);var inst_10452 = (state_10466[2]);var inst_10453 = cljs.core.seq.call(null,inst_10394);var state_10466__$1 = (function (){var statearr_10529 = state_10466;(statearr_10529[30] = inst_10452);
return statearr_10529;
})();if(inst_10453)
{var statearr_10530_10597 = state_10466__$1;(statearr_10530_10597[1] = 42);
} else
{var statearr_10531_10598 = state_10466__$1;(statearr_10531_10598[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 27))
{var inst_10403 = (state_10466[11]);var inst_10405 = (state_10466[12]);var inst_10410 = cljs.core._nth.call(null,inst_10403,inst_10405);var state_10466__$1 = (function (){var statearr_10532 = state_10466;(statearr_10532[7] = inst_10410);
return statearr_10532;
})();var statearr_10533_10599 = state_10466__$1;(statearr_10533_10599[2] = null);
(statearr_10533_10599[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 28))
{var inst_10402 = (state_10466[10]);var inst_10423 = (state_10466[9]);var inst_10423__$1 = cljs.core.seq.call(null,inst_10402);var state_10466__$1 = (function (){var statearr_10537 = state_10466;(statearr_10537[9] = inst_10423__$1);
return statearr_10537;
})();if(inst_10423__$1)
{var statearr_10538_10600 = state_10466__$1;(statearr_10538_10600[1] = 33);
} else
{var statearr_10539_10601 = state_10466__$1;(statearr_10539_10601[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 29))
{var inst_10450 = (state_10466[2]);var state_10466__$1 = state_10466;var statearr_10540_10602 = state_10466__$1;(statearr_10540_10602[2] = inst_10450);
(statearr_10540_10602[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 30))
{var inst_10402 = (state_10466[10]);var inst_10403 = (state_10466[11]);var inst_10405 = (state_10466[12]);var inst_10404 = (state_10466[13]);var inst_10419 = (state_10466[2]);var inst_10420 = (inst_10405 + 1);var tmp10534 = inst_10402;var tmp10535 = inst_10403;var tmp10536 = inst_10404;var inst_10402__$1 = tmp10534;var inst_10403__$1 = tmp10535;var inst_10404__$1 = tmp10536;var inst_10405__$1 = inst_10420;var state_10466__$1 = (function (){var statearr_10541 = state_10466;(statearr_10541[10] = inst_10402__$1);
(statearr_10541[31] = inst_10419);
(statearr_10541[11] = inst_10403__$1);
(statearr_10541[12] = inst_10405__$1);
(statearr_10541[13] = inst_10404__$1);
return statearr_10541;
})();var statearr_10542_10603 = state_10466__$1;(statearr_10542_10603[2] = null);
(statearr_10542_10603[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10467 === 31))
{var inst_10410 = (state_10466[7]);var inst_10411 = (state_10466[2]);var inst_10412 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10413 = cljs.core.async.untap_STAR_.call(null,m,inst_10410);var state_10466__$1 = (function (){var statearr_10543 = state_10466;(statearr_10543[32] = inst_10411);
(statearr_10543[33] = inst_10412);
return statearr_10543;
})();var statearr_10544_10604 = state_10466__$1;(statearr_10544_10604[2] = inst_10413);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10466__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_10548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10548[0] = state_machine__6992__auto__);
(statearr_10548[1] = 1);
return statearr_10548;
});
var state_machine__6992__auto____1 = (function (state_10466){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_10466);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e10549){if((e10549 instanceof Object))
{var ex__6995__auto__ = e10549;var statearr_10550_10605 = state_10466;(statearr_10550_10605[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10606 = state_10466;
state_10466 = G__10606;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_10466){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_10466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_10551 = f__7062__auto__.call(null);(statearr_10551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto___10552);
return statearr_10551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10608 = {};return obj10608;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10718 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10718 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10719){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta10719 = meta10719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10718.cljs$lang$type = true;
cljs.core.async.t10718.cljs$lang$ctorStr = "cljs.core.async/t10718";
cljs.core.async.t10718.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t10718");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10718.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10718.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10720){var self__ = this;
var _10720__$1 = this;return self__.meta10719;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10720,meta10719__$1){var self__ = this;
var _10720__$1 = this;return (new cljs.core.async.t10718(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10719__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10718 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10718(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10719){return (new cljs.core.async.t10718(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10719));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10718(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7061__auto___10827 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_10785){var state_val_10786 = (state_10785[1]);if((state_val_10786 === 1))
{var inst_10724 = (state_10785[7]);var inst_10724__$1 = calc_state.call(null);var inst_10725 = cljs.core.seq_QMARK_.call(null,inst_10724__$1);var state_10785__$1 = (function (){var statearr_10787 = state_10785;(statearr_10787[7] = inst_10724__$1);
return statearr_10787;
})();if(inst_10725)
{var statearr_10788_10828 = state_10785__$1;(statearr_10788_10828[1] = 2);
} else
{var statearr_10789_10829 = state_10785__$1;(statearr_10789_10829[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 2))
{var inst_10724 = (state_10785[7]);var inst_10727 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10724);var state_10785__$1 = state_10785;var statearr_10790_10830 = state_10785__$1;(statearr_10790_10830[2] = inst_10727);
(statearr_10790_10830[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 3))
{var inst_10724 = (state_10785[7]);var state_10785__$1 = state_10785;var statearr_10791_10831 = state_10785__$1;(statearr_10791_10831[2] = inst_10724);
(statearr_10791_10831[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 4))
{var inst_10724 = (state_10785[7]);var inst_10730 = (state_10785[2]);var inst_10731 = cljs.core.get.call(null,inst_10730,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10732 = cljs.core.get.call(null,inst_10730,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10733 = cljs.core.get.call(null,inst_10730,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10734 = inst_10724;var state_10785__$1 = (function (){var statearr_10792 = state_10785;(statearr_10792[8] = inst_10734);
(statearr_10792[9] = inst_10731);
(statearr_10792[10] = inst_10732);
(statearr_10792[11] = inst_10733);
return statearr_10792;
})();var statearr_10793_10832 = state_10785__$1;(statearr_10793_10832[2] = null);
(statearr_10793_10832[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 5))
{var inst_10734 = (state_10785[8]);var inst_10737 = cljs.core.seq_QMARK_.call(null,inst_10734);var state_10785__$1 = state_10785;if(inst_10737)
{var statearr_10794_10833 = state_10785__$1;(statearr_10794_10833[1] = 7);
} else
{var statearr_10795_10834 = state_10785__$1;(statearr_10795_10834[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 6))
{var inst_10783 = (state_10785[2]);var state_10785__$1 = state_10785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10785__$1,inst_10783);
} else
{if((state_val_10786 === 7))
{var inst_10734 = (state_10785[8]);var inst_10739 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10734);var state_10785__$1 = state_10785;var statearr_10796_10835 = state_10785__$1;(statearr_10796_10835[2] = inst_10739);
(statearr_10796_10835[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 8))
{var inst_10734 = (state_10785[8]);var state_10785__$1 = state_10785;var statearr_10797_10836 = state_10785__$1;(statearr_10797_10836[2] = inst_10734);
(statearr_10797_10836[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 9))
{var inst_10742 = (state_10785[12]);var inst_10742__$1 = (state_10785[2]);var inst_10743 = cljs.core.get.call(null,inst_10742__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10744 = cljs.core.get.call(null,inst_10742__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10745 = cljs.core.get.call(null,inst_10742__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10785__$1 = (function (){var statearr_10798 = state_10785;(statearr_10798[13] = inst_10745);
(statearr_10798[12] = inst_10742__$1);
(statearr_10798[14] = inst_10744);
return statearr_10798;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10785__$1,10,inst_10743);
} else
{if((state_val_10786 === 10))
{var inst_10749 = (state_10785[15]);var inst_10750 = (state_10785[16]);var inst_10748 = (state_10785[2]);var inst_10749__$1 = cljs.core.nth.call(null,inst_10748,0,null);var inst_10750__$1 = cljs.core.nth.call(null,inst_10748,1,null);var inst_10751 = (inst_10749__$1 == null);var inst_10752 = cljs.core._EQ_.call(null,inst_10750__$1,change);var inst_10753 = (inst_10751) || (inst_10752);var state_10785__$1 = (function (){var statearr_10799 = state_10785;(statearr_10799[15] = inst_10749__$1);
(statearr_10799[16] = inst_10750__$1);
return statearr_10799;
})();if(cljs.core.truth_(inst_10753))
{var statearr_10800_10837 = state_10785__$1;(statearr_10800_10837[1] = 11);
} else
{var statearr_10801_10838 = state_10785__$1;(statearr_10801_10838[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 11))
{var inst_10749 = (state_10785[15]);var inst_10755 = (inst_10749 == null);var state_10785__$1 = state_10785;if(cljs.core.truth_(inst_10755))
{var statearr_10802_10839 = state_10785__$1;(statearr_10802_10839[1] = 14);
} else
{var statearr_10803_10840 = state_10785__$1;(statearr_10803_10840[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 12))
{var inst_10764 = (state_10785[17]);var inst_10745 = (state_10785[13]);var inst_10750 = (state_10785[16]);var inst_10764__$1 = inst_10745.call(null,inst_10750);var state_10785__$1 = (function (){var statearr_10804 = state_10785;(statearr_10804[17] = inst_10764__$1);
return statearr_10804;
})();if(cljs.core.truth_(inst_10764__$1))
{var statearr_10805_10841 = state_10785__$1;(statearr_10805_10841[1] = 17);
} else
{var statearr_10806_10842 = state_10785__$1;(statearr_10806_10842[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 13))
{var inst_10781 = (state_10785[2]);var state_10785__$1 = state_10785;var statearr_10807_10843 = state_10785__$1;(statearr_10807_10843[2] = inst_10781);
(statearr_10807_10843[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 14))
{var inst_10750 = (state_10785[16]);var inst_10757 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10750);var state_10785__$1 = state_10785;var statearr_10808_10844 = state_10785__$1;(statearr_10808_10844[2] = inst_10757);
(statearr_10808_10844[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 15))
{var state_10785__$1 = state_10785;var statearr_10809_10845 = state_10785__$1;(statearr_10809_10845[2] = null);
(statearr_10809_10845[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 16))
{var inst_10760 = (state_10785[2]);var inst_10761 = calc_state.call(null);var inst_10734 = inst_10761;var state_10785__$1 = (function (){var statearr_10810 = state_10785;(statearr_10810[8] = inst_10734);
(statearr_10810[18] = inst_10760);
return statearr_10810;
})();var statearr_10811_10846 = state_10785__$1;(statearr_10811_10846[2] = null);
(statearr_10811_10846[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 17))
{var inst_10764 = (state_10785[17]);var state_10785__$1 = state_10785;var statearr_10812_10847 = state_10785__$1;(statearr_10812_10847[2] = inst_10764);
(statearr_10812_10847[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 18))
{var inst_10745 = (state_10785[13]);var inst_10750 = (state_10785[16]);var inst_10744 = (state_10785[14]);var inst_10767 = cljs.core.empty_QMARK_.call(null,inst_10745);var inst_10768 = inst_10744.call(null,inst_10750);var inst_10769 = cljs.core.not.call(null,inst_10768);var inst_10770 = (inst_10767) && (inst_10769);var state_10785__$1 = state_10785;var statearr_10813_10848 = state_10785__$1;(statearr_10813_10848[2] = inst_10770);
(statearr_10813_10848[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 19))
{var inst_10772 = (state_10785[2]);var state_10785__$1 = state_10785;if(cljs.core.truth_(inst_10772))
{var statearr_10814_10849 = state_10785__$1;(statearr_10814_10849[1] = 20);
} else
{var statearr_10815_10850 = state_10785__$1;(statearr_10815_10850[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 20))
{var inst_10749 = (state_10785[15]);var state_10785__$1 = state_10785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10785__$1,23,out,inst_10749);
} else
{if((state_val_10786 === 21))
{var state_10785__$1 = state_10785;var statearr_10816_10851 = state_10785__$1;(statearr_10816_10851[2] = null);
(statearr_10816_10851[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 22))
{var inst_10742 = (state_10785[12]);var inst_10778 = (state_10785[2]);var inst_10734 = inst_10742;var state_10785__$1 = (function (){var statearr_10817 = state_10785;(statearr_10817[19] = inst_10778);
(statearr_10817[8] = inst_10734);
return statearr_10817;
})();var statearr_10818_10852 = state_10785__$1;(statearr_10818_10852[2] = null);
(statearr_10818_10852[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10786 === 23))
{var inst_10775 = (state_10785[2]);var state_10785__$1 = state_10785;var statearr_10819_10853 = state_10785__$1;(statearr_10819_10853[2] = inst_10775);
(statearr_10819_10853[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_10823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10823[0] = state_machine__6992__auto__);
(statearr_10823[1] = 1);
return statearr_10823;
});
var state_machine__6992__auto____1 = (function (state_10785){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_10785);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e10824){if((e10824 instanceof Object))
{var ex__6995__auto__ = e10824;var statearr_10825_10854 = state_10785;(statearr_10825_10854[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10785);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10855 = state_10785;
state_10785 = G__10855;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_10785){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_10785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_10826 = f__7062__auto__.call(null);(statearr_10826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto___10827);
return statearr_10826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj10857 = {};return obj10857;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__10858_SHARP_){if(cljs.core.truth_(p1__10858_SHARP_.call(null,topic)))
{return p1__10858_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10858_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10983 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10983 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10984){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10984 = meta10984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10983.cljs$lang$type = true;
cljs.core.async.t10983.cljs$lang$ctorStr = "cljs.core.async/t10983";
cljs.core.async.t10983.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t10983");
});})(mults,ensure_mult))
;
cljs.core.async.t10983.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10983.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10983.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10983.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10983.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10983.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10983.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10985){var self__ = this;
var _10985__$1 = this;return self__.meta10984;
});})(mults,ensure_mult))
;
cljs.core.async.t10983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10985,meta10984__$1){var self__ = this;
var _10985__$1 = this;return (new cljs.core.async.t10983(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10984__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10983 = ((function (mults,ensure_mult){
return (function __GT_t10983(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10984){return (new cljs.core.async.t10983(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10984));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10983(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7061__auto___11107 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_11059){var state_val_11060 = (state_11059[1]);if((state_val_11060 === 1))
{var state_11059__$1 = state_11059;var statearr_11061_11108 = state_11059__$1;(statearr_11061_11108[2] = null);
(statearr_11061_11108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 2))
{var state_11059__$1 = state_11059;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11059__$1,4,ch);
} else
{if((state_val_11060 === 3))
{var inst_11057 = (state_11059[2]);var state_11059__$1 = state_11059;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11059__$1,inst_11057);
} else
{if((state_val_11060 === 4))
{var inst_10988 = (state_11059[7]);var inst_10988__$1 = (state_11059[2]);var inst_10989 = (inst_10988__$1 == null);var state_11059__$1 = (function (){var statearr_11062 = state_11059;(statearr_11062[7] = inst_10988__$1);
return statearr_11062;
})();if(cljs.core.truth_(inst_10989))
{var statearr_11063_11109 = state_11059__$1;(statearr_11063_11109[1] = 5);
} else
{var statearr_11064_11110 = state_11059__$1;(statearr_11064_11110[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 5))
{var inst_10995 = cljs.core.deref.call(null,mults);var inst_10996 = cljs.core.vals.call(null,inst_10995);var inst_10997 = cljs.core.seq.call(null,inst_10996);var inst_10998 = inst_10997;var inst_10999 = null;var inst_11000 = 0;var inst_11001 = 0;var state_11059__$1 = (function (){var statearr_11065 = state_11059;(statearr_11065[8] = inst_10999);
(statearr_11065[9] = inst_10998);
(statearr_11065[10] = inst_11001);
(statearr_11065[11] = inst_11000);
return statearr_11065;
})();var statearr_11066_11111 = state_11059__$1;(statearr_11066_11111[2] = null);
(statearr_11066_11111[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 6))
{var inst_10988 = (state_11059[7]);var inst_11038 = (state_11059[12]);var inst_11036 = (state_11059[13]);var inst_11036__$1 = topic_fn.call(null,inst_10988);var inst_11037 = cljs.core.deref.call(null,mults);var inst_11038__$1 = cljs.core.get.call(null,inst_11037,inst_11036__$1);var state_11059__$1 = (function (){var statearr_11067 = state_11059;(statearr_11067[12] = inst_11038__$1);
(statearr_11067[13] = inst_11036__$1);
return statearr_11067;
})();if(cljs.core.truth_(inst_11038__$1))
{var statearr_11068_11112 = state_11059__$1;(statearr_11068_11112[1] = 19);
} else
{var statearr_11069_11113 = state_11059__$1;(statearr_11069_11113[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 7))
{var inst_11055 = (state_11059[2]);var state_11059__$1 = state_11059;var statearr_11070_11114 = state_11059__$1;(statearr_11070_11114[2] = inst_11055);
(statearr_11070_11114[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 8))
{var inst_11001 = (state_11059[10]);var inst_11000 = (state_11059[11]);var inst_11003 = (inst_11001 < inst_11000);var inst_11004 = inst_11003;var state_11059__$1 = state_11059;if(cljs.core.truth_(inst_11004))
{var statearr_11074_11115 = state_11059__$1;(statearr_11074_11115[1] = 10);
} else
{var statearr_11075_11116 = state_11059__$1;(statearr_11075_11116[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 9))
{var inst_11034 = (state_11059[2]);var state_11059__$1 = state_11059;var statearr_11076_11117 = state_11059__$1;(statearr_11076_11117[2] = inst_11034);
(statearr_11076_11117[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 10))
{var inst_10999 = (state_11059[8]);var inst_10998 = (state_11059[9]);var inst_11001 = (state_11059[10]);var inst_11000 = (state_11059[11]);var inst_11006 = cljs.core._nth.call(null,inst_10999,inst_11001);var inst_11007 = cljs.core.async.muxch_STAR_.call(null,inst_11006);var inst_11008 = cljs.core.async.close_BANG_.call(null,inst_11007);var inst_11009 = (inst_11001 + 1);var tmp11071 = inst_10999;var tmp11072 = inst_10998;var tmp11073 = inst_11000;var inst_10998__$1 = tmp11072;var inst_10999__$1 = tmp11071;var inst_11000__$1 = tmp11073;var inst_11001__$1 = inst_11009;var state_11059__$1 = (function (){var statearr_11077 = state_11059;(statearr_11077[14] = inst_11008);
(statearr_11077[8] = inst_10999__$1);
(statearr_11077[9] = inst_10998__$1);
(statearr_11077[10] = inst_11001__$1);
(statearr_11077[11] = inst_11000__$1);
return statearr_11077;
})();var statearr_11078_11118 = state_11059__$1;(statearr_11078_11118[2] = null);
(statearr_11078_11118[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 11))
{var inst_11012 = (state_11059[15]);var inst_10998 = (state_11059[9]);var inst_11012__$1 = cljs.core.seq.call(null,inst_10998);var state_11059__$1 = (function (){var statearr_11079 = state_11059;(statearr_11079[15] = inst_11012__$1);
return statearr_11079;
})();if(inst_11012__$1)
{var statearr_11080_11119 = state_11059__$1;(statearr_11080_11119[1] = 13);
} else
{var statearr_11081_11120 = state_11059__$1;(statearr_11081_11120[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 12))
{var inst_11032 = (state_11059[2]);var state_11059__$1 = state_11059;var statearr_11082_11121 = state_11059__$1;(statearr_11082_11121[2] = inst_11032);
(statearr_11082_11121[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 13))
{var inst_11012 = (state_11059[15]);var inst_11014 = cljs.core.chunked_seq_QMARK_.call(null,inst_11012);var state_11059__$1 = state_11059;if(inst_11014)
{var statearr_11083_11122 = state_11059__$1;(statearr_11083_11122[1] = 16);
} else
{var statearr_11084_11123 = state_11059__$1;(statearr_11084_11123[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 14))
{var state_11059__$1 = state_11059;var statearr_11085_11124 = state_11059__$1;(statearr_11085_11124[2] = null);
(statearr_11085_11124[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 15))
{var inst_11030 = (state_11059[2]);var state_11059__$1 = state_11059;var statearr_11086_11125 = state_11059__$1;(statearr_11086_11125[2] = inst_11030);
(statearr_11086_11125[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 16))
{var inst_11012 = (state_11059[15]);var inst_11016 = cljs.core.chunk_first.call(null,inst_11012);var inst_11017 = cljs.core.chunk_rest.call(null,inst_11012);var inst_11018 = cljs.core.count.call(null,inst_11016);var inst_10998 = inst_11017;var inst_10999 = inst_11016;var inst_11000 = inst_11018;var inst_11001 = 0;var state_11059__$1 = (function (){var statearr_11087 = state_11059;(statearr_11087[8] = inst_10999);
(statearr_11087[9] = inst_10998);
(statearr_11087[10] = inst_11001);
(statearr_11087[11] = inst_11000);
return statearr_11087;
})();var statearr_11088_11126 = state_11059__$1;(statearr_11088_11126[2] = null);
(statearr_11088_11126[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 17))
{var inst_11012 = (state_11059[15]);var inst_11021 = cljs.core.first.call(null,inst_11012);var inst_11022 = cljs.core.async.muxch_STAR_.call(null,inst_11021);var inst_11023 = cljs.core.async.close_BANG_.call(null,inst_11022);var inst_11024 = cljs.core.next.call(null,inst_11012);var inst_10998 = inst_11024;var inst_10999 = null;var inst_11000 = 0;var inst_11001 = 0;var state_11059__$1 = (function (){var statearr_11089 = state_11059;(statearr_11089[16] = inst_11023);
(statearr_11089[8] = inst_10999);
(statearr_11089[9] = inst_10998);
(statearr_11089[10] = inst_11001);
(statearr_11089[11] = inst_11000);
return statearr_11089;
})();var statearr_11090_11127 = state_11059__$1;(statearr_11090_11127[2] = null);
(statearr_11090_11127[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 18))
{var inst_11027 = (state_11059[2]);var state_11059__$1 = state_11059;var statearr_11091_11128 = state_11059__$1;(statearr_11091_11128[2] = inst_11027);
(statearr_11091_11128[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 19))
{var state_11059__$1 = state_11059;var statearr_11092_11129 = state_11059__$1;(statearr_11092_11129[2] = null);
(statearr_11092_11129[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 20))
{var state_11059__$1 = state_11059;var statearr_11093_11130 = state_11059__$1;(statearr_11093_11130[2] = null);
(statearr_11093_11130[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 21))
{var inst_11052 = (state_11059[2]);var state_11059__$1 = (function (){var statearr_11094 = state_11059;(statearr_11094[17] = inst_11052);
return statearr_11094;
})();var statearr_11095_11131 = state_11059__$1;(statearr_11095_11131[2] = null);
(statearr_11095_11131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 22))
{var inst_11049 = (state_11059[2]);var state_11059__$1 = state_11059;var statearr_11096_11132 = state_11059__$1;(statearr_11096_11132[2] = inst_11049);
(statearr_11096_11132[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 23))
{var inst_11036 = (state_11059[13]);var inst_11040 = (state_11059[2]);var inst_11041 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11036);var state_11059__$1 = (function (){var statearr_11097 = state_11059;(statearr_11097[18] = inst_11040);
return statearr_11097;
})();var statearr_11098_11133 = state_11059__$1;(statearr_11098_11133[2] = inst_11041);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11059__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 24))
{var inst_10988 = (state_11059[7]);var inst_11038 = (state_11059[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11059,23,Object,null,22);var inst_11045 = cljs.core.async.muxch_STAR_.call(null,inst_11038);var state_11059__$1 = state_11059;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11059__$1,25,inst_11045,inst_10988);
} else
{if((state_val_11060 === 25))
{var inst_11047 = (state_11059[2]);var state_11059__$1 = state_11059;var statearr_11099_11134 = state_11059__$1;(statearr_11099_11134[2] = inst_11047);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11059__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_11103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11103[0] = state_machine__6992__auto__);
(statearr_11103[1] = 1);
return statearr_11103;
});
var state_machine__6992__auto____1 = (function (state_11059){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_11059);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e11104){if((e11104 instanceof Object))
{var ex__6995__auto__ = e11104;var statearr_11105_11135 = state_11059;(statearr_11105_11135[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11059);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11136 = state_11059;
state_11059 = G__11136;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_11059){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_11059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_11106 = f__7062__auto__.call(null);(statearr_11106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto___11107);
return statearr_11106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7061__auto___11273 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_11243){var state_val_11244 = (state_11243[1]);if((state_val_11244 === 1))
{var state_11243__$1 = state_11243;var statearr_11245_11274 = state_11243__$1;(statearr_11245_11274[2] = null);
(statearr_11245_11274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11244 === 2))
{var inst_11206 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11207 = 0;var state_11243__$1 = (function (){var statearr_11246 = state_11243;(statearr_11246[7] = inst_11206);
(statearr_11246[8] = inst_11207);
return statearr_11246;
})();var statearr_11247_11275 = state_11243__$1;(statearr_11247_11275[2] = null);
(statearr_11247_11275[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11244 === 3))
{var inst_11241 = (state_11243[2]);var state_11243__$1 = state_11243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11243__$1,inst_11241);
} else
{if((state_val_11244 === 4))
{var inst_11207 = (state_11243[8]);var inst_11209 = (inst_11207 < cnt);var state_11243__$1 = state_11243;if(cljs.core.truth_(inst_11209))
{var statearr_11248_11276 = state_11243__$1;(statearr_11248_11276[1] = 6);
} else
{var statearr_11249_11277 = state_11243__$1;(statearr_11249_11277[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11244 === 5))
{var inst_11227 = (state_11243[2]);var state_11243__$1 = (function (){var statearr_11250 = state_11243;(statearr_11250[9] = inst_11227);
return statearr_11250;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11243__$1,12,dchan);
} else
{if((state_val_11244 === 6))
{var state_11243__$1 = state_11243;var statearr_11251_11278 = state_11243__$1;(statearr_11251_11278[2] = null);
(statearr_11251_11278[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11244 === 7))
{var state_11243__$1 = state_11243;var statearr_11252_11279 = state_11243__$1;(statearr_11252_11279[2] = null);
(statearr_11252_11279[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11244 === 8))
{var inst_11225 = (state_11243[2]);var state_11243__$1 = state_11243;var statearr_11253_11280 = state_11243__$1;(statearr_11253_11280[2] = inst_11225);
(statearr_11253_11280[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11244 === 9))
{var inst_11207 = (state_11243[8]);var inst_11220 = (state_11243[2]);var inst_11221 = (inst_11207 + 1);var inst_11207__$1 = inst_11221;var state_11243__$1 = (function (){var statearr_11254 = state_11243;(statearr_11254[10] = inst_11220);
(statearr_11254[8] = inst_11207__$1);
return statearr_11254;
})();var statearr_11255_11281 = state_11243__$1;(statearr_11255_11281[2] = null);
(statearr_11255_11281[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11244 === 10))
{var inst_11211 = (state_11243[2]);var inst_11212 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11243__$1 = (function (){var statearr_11256 = state_11243;(statearr_11256[11] = inst_11211);
return statearr_11256;
})();var statearr_11257_11282 = state_11243__$1;(statearr_11257_11282[2] = inst_11212);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11243__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11244 === 11))
{var inst_11207 = (state_11243[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11243,10,Object,null,9);var inst_11216 = chs__$1.call(null,inst_11207);var inst_11217 = done.call(null,inst_11207);var inst_11218 = cljs.core.async.take_BANG_.call(null,inst_11216,inst_11217);var state_11243__$1 = state_11243;var statearr_11258_11283 = state_11243__$1;(statearr_11258_11283[2] = inst_11218);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11243__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11244 === 12))
{var inst_11229 = (state_11243[12]);var inst_11229__$1 = (state_11243[2]);var inst_11230 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11229__$1);var state_11243__$1 = (function (){var statearr_11259 = state_11243;(statearr_11259[12] = inst_11229__$1);
return statearr_11259;
})();if(cljs.core.truth_(inst_11230))
{var statearr_11260_11284 = state_11243__$1;(statearr_11260_11284[1] = 13);
} else
{var statearr_11261_11285 = state_11243__$1;(statearr_11261_11285[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11244 === 13))
{var inst_11232 = cljs.core.async.close_BANG_.call(null,out);var state_11243__$1 = state_11243;var statearr_11262_11286 = state_11243__$1;(statearr_11262_11286[2] = inst_11232);
(statearr_11262_11286[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11244 === 14))
{var inst_11229 = (state_11243[12]);var inst_11234 = cljs.core.apply.call(null,f,inst_11229);var state_11243__$1 = state_11243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11243__$1,16,out,inst_11234);
} else
{if((state_val_11244 === 15))
{var inst_11239 = (state_11243[2]);var state_11243__$1 = state_11243;var statearr_11263_11287 = state_11243__$1;(statearr_11263_11287[2] = inst_11239);
(statearr_11263_11287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11244 === 16))
{var inst_11236 = (state_11243[2]);var state_11243__$1 = (function (){var statearr_11264 = state_11243;(statearr_11264[13] = inst_11236);
return statearr_11264;
})();var statearr_11265_11288 = state_11243__$1;(statearr_11265_11288[2] = null);
(statearr_11265_11288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_11269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11269[0] = state_machine__6992__auto__);
(statearr_11269[1] = 1);
return statearr_11269;
});
var state_machine__6992__auto____1 = (function (state_11243){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_11243);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e11270){if((e11270 instanceof Object))
{var ex__6995__auto__ = e11270;var statearr_11271_11289 = state_11243;(statearr_11271_11289[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11243);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11270;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11290 = state_11243;
state_11243 = G__11290;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_11243){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_11243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_11272 = f__7062__auto__.call(null);(statearr_11272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto___11273);
return statearr_11272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7061__auto___11398 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_11374){var state_val_11375 = (state_11374[1]);if((state_val_11375 === 1))
{var inst_11345 = cljs.core.vec.call(null,chs);var inst_11346 = inst_11345;var state_11374__$1 = (function (){var statearr_11376 = state_11374;(statearr_11376[7] = inst_11346);
return statearr_11376;
})();var statearr_11377_11399 = state_11374__$1;(statearr_11377_11399[2] = null);
(statearr_11377_11399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11375 === 2))
{var inst_11346 = (state_11374[7]);var inst_11348 = cljs.core.count.call(null,inst_11346);var inst_11349 = (inst_11348 > 0);var state_11374__$1 = state_11374;if(cljs.core.truth_(inst_11349))
{var statearr_11378_11400 = state_11374__$1;(statearr_11378_11400[1] = 4);
} else
{var statearr_11379_11401 = state_11374__$1;(statearr_11379_11401[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11375 === 3))
{var inst_11372 = (state_11374[2]);var state_11374__$1 = state_11374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11374__$1,inst_11372);
} else
{if((state_val_11375 === 4))
{var inst_11346 = (state_11374[7]);var state_11374__$1 = state_11374;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11374__$1,7,inst_11346);
} else
{if((state_val_11375 === 5))
{var inst_11368 = cljs.core.async.close_BANG_.call(null,out);var state_11374__$1 = state_11374;var statearr_11380_11402 = state_11374__$1;(statearr_11380_11402[2] = inst_11368);
(statearr_11380_11402[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11375 === 6))
{var inst_11370 = (state_11374[2]);var state_11374__$1 = state_11374;var statearr_11381_11403 = state_11374__$1;(statearr_11381_11403[2] = inst_11370);
(statearr_11381_11403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11375 === 7))
{var inst_11354 = (state_11374[8]);var inst_11353 = (state_11374[9]);var inst_11353__$1 = (state_11374[2]);var inst_11354__$1 = cljs.core.nth.call(null,inst_11353__$1,0,null);var inst_11355 = cljs.core.nth.call(null,inst_11353__$1,1,null);var inst_11356 = (inst_11354__$1 == null);var state_11374__$1 = (function (){var statearr_11382 = state_11374;(statearr_11382[10] = inst_11355);
(statearr_11382[8] = inst_11354__$1);
(statearr_11382[9] = inst_11353__$1);
return statearr_11382;
})();if(cljs.core.truth_(inst_11356))
{var statearr_11383_11404 = state_11374__$1;(statearr_11383_11404[1] = 8);
} else
{var statearr_11384_11405 = state_11374__$1;(statearr_11384_11405[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11375 === 8))
{var inst_11346 = (state_11374[7]);var inst_11355 = (state_11374[10]);var inst_11354 = (state_11374[8]);var inst_11353 = (state_11374[9]);var inst_11358 = (function (){var c = inst_11355;var v = inst_11354;var vec__11351 = inst_11353;var cs = inst_11346;return ((function (c,v,vec__11351,cs,inst_11346,inst_11355,inst_11354,inst_11353,state_val_11375){
return (function (p1__11291_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11291_SHARP_);
});
;})(c,v,vec__11351,cs,inst_11346,inst_11355,inst_11354,inst_11353,state_val_11375))
})();var inst_11359 = cljs.core.filterv.call(null,inst_11358,inst_11346);var inst_11346__$1 = inst_11359;var state_11374__$1 = (function (){var statearr_11385 = state_11374;(statearr_11385[7] = inst_11346__$1);
return statearr_11385;
})();var statearr_11386_11406 = state_11374__$1;(statearr_11386_11406[2] = null);
(statearr_11386_11406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11375 === 9))
{var inst_11354 = (state_11374[8]);var state_11374__$1 = state_11374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11374__$1,11,out,inst_11354);
} else
{if((state_val_11375 === 10))
{var inst_11366 = (state_11374[2]);var state_11374__$1 = state_11374;var statearr_11388_11407 = state_11374__$1;(statearr_11388_11407[2] = inst_11366);
(statearr_11388_11407[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11375 === 11))
{var inst_11346 = (state_11374[7]);var inst_11363 = (state_11374[2]);var tmp11387 = inst_11346;var inst_11346__$1 = tmp11387;var state_11374__$1 = (function (){var statearr_11389 = state_11374;(statearr_11389[11] = inst_11363);
(statearr_11389[7] = inst_11346__$1);
return statearr_11389;
})();var statearr_11390_11408 = state_11374__$1;(statearr_11390_11408[2] = null);
(statearr_11390_11408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_11394 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11394[0] = state_machine__6992__auto__);
(statearr_11394[1] = 1);
return statearr_11394;
});
var state_machine__6992__auto____1 = (function (state_11374){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_11374);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e11395){if((e11395 instanceof Object))
{var ex__6995__auto__ = e11395;var statearr_11396_11409 = state_11374;(statearr_11396_11409[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11374);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11410 = state_11374;
state_11374 = G__11410;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_11374){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_11374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_11397 = f__7062__auto__.call(null);(statearr_11397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto___11398);
return statearr_11397;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7061__auto___11503 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_11480){var state_val_11481 = (state_11480[1]);if((state_val_11481 === 1))
{var inst_11457 = 0;var state_11480__$1 = (function (){var statearr_11482 = state_11480;(statearr_11482[7] = inst_11457);
return statearr_11482;
})();var statearr_11483_11504 = state_11480__$1;(statearr_11483_11504[2] = null);
(statearr_11483_11504[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11481 === 2))
{var inst_11457 = (state_11480[7]);var inst_11459 = (inst_11457 < n);var state_11480__$1 = state_11480;if(cljs.core.truth_(inst_11459))
{var statearr_11484_11505 = state_11480__$1;(statearr_11484_11505[1] = 4);
} else
{var statearr_11485_11506 = state_11480__$1;(statearr_11485_11506[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11481 === 3))
{var inst_11477 = (state_11480[2]);var inst_11478 = cljs.core.async.close_BANG_.call(null,out);var state_11480__$1 = (function (){var statearr_11486 = state_11480;(statearr_11486[8] = inst_11477);
return statearr_11486;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11480__$1,inst_11478);
} else
{if((state_val_11481 === 4))
{var state_11480__$1 = state_11480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11480__$1,7,ch);
} else
{if((state_val_11481 === 5))
{var state_11480__$1 = state_11480;var statearr_11487_11507 = state_11480__$1;(statearr_11487_11507[2] = null);
(statearr_11487_11507[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11481 === 6))
{var inst_11475 = (state_11480[2]);var state_11480__$1 = state_11480;var statearr_11488_11508 = state_11480__$1;(statearr_11488_11508[2] = inst_11475);
(statearr_11488_11508[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11481 === 7))
{var inst_11462 = (state_11480[9]);var inst_11462__$1 = (state_11480[2]);var inst_11463 = (inst_11462__$1 == null);var inst_11464 = cljs.core.not.call(null,inst_11463);var state_11480__$1 = (function (){var statearr_11489 = state_11480;(statearr_11489[9] = inst_11462__$1);
return statearr_11489;
})();if(inst_11464)
{var statearr_11490_11509 = state_11480__$1;(statearr_11490_11509[1] = 8);
} else
{var statearr_11491_11510 = state_11480__$1;(statearr_11491_11510[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11481 === 8))
{var inst_11462 = (state_11480[9]);var state_11480__$1 = state_11480;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11480__$1,11,out,inst_11462);
} else
{if((state_val_11481 === 9))
{var state_11480__$1 = state_11480;var statearr_11492_11511 = state_11480__$1;(statearr_11492_11511[2] = null);
(statearr_11492_11511[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11481 === 10))
{var inst_11472 = (state_11480[2]);var state_11480__$1 = state_11480;var statearr_11493_11512 = state_11480__$1;(statearr_11493_11512[2] = inst_11472);
(statearr_11493_11512[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11481 === 11))
{var inst_11457 = (state_11480[7]);var inst_11467 = (state_11480[2]);var inst_11468 = (inst_11457 + 1);var inst_11457__$1 = inst_11468;var state_11480__$1 = (function (){var statearr_11494 = state_11480;(statearr_11494[7] = inst_11457__$1);
(statearr_11494[10] = inst_11467);
return statearr_11494;
})();var statearr_11495_11513 = state_11480__$1;(statearr_11495_11513[2] = null);
(statearr_11495_11513[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_11499 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11499[0] = state_machine__6992__auto__);
(statearr_11499[1] = 1);
return statearr_11499;
});
var state_machine__6992__auto____1 = (function (state_11480){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_11480);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e11500){if((e11500 instanceof Object))
{var ex__6995__auto__ = e11500;var statearr_11501_11514 = state_11480;(statearr_11501_11514[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11480);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11515 = state_11480;
state_11480 = G__11515;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_11480){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_11480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_11502 = f__7062__auto__.call(null);(statearr_11502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto___11503);
return statearr_11502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7061__auto___11612 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_11587){var state_val_11588 = (state_11587[1]);if((state_val_11588 === 1))
{var inst_11564 = null;var state_11587__$1 = (function (){var statearr_11589 = state_11587;(statearr_11589[7] = inst_11564);
return statearr_11589;
})();var statearr_11590_11613 = state_11587__$1;(statearr_11590_11613[2] = null);
(statearr_11590_11613[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11588 === 2))
{var state_11587__$1 = state_11587;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11587__$1,4,ch);
} else
{if((state_val_11588 === 3))
{var inst_11584 = (state_11587[2]);var inst_11585 = cljs.core.async.close_BANG_.call(null,out);var state_11587__$1 = (function (){var statearr_11591 = state_11587;(statearr_11591[8] = inst_11584);
return statearr_11591;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11587__$1,inst_11585);
} else
{if((state_val_11588 === 4))
{var inst_11567 = (state_11587[9]);var inst_11567__$1 = (state_11587[2]);var inst_11568 = (inst_11567__$1 == null);var inst_11569 = cljs.core.not.call(null,inst_11568);var state_11587__$1 = (function (){var statearr_11592 = state_11587;(statearr_11592[9] = inst_11567__$1);
return statearr_11592;
})();if(inst_11569)
{var statearr_11593_11614 = state_11587__$1;(statearr_11593_11614[1] = 5);
} else
{var statearr_11594_11615 = state_11587__$1;(statearr_11594_11615[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11588 === 5))
{var inst_11567 = (state_11587[9]);var inst_11564 = (state_11587[7]);var inst_11571 = cljs.core._EQ_.call(null,inst_11567,inst_11564);var state_11587__$1 = state_11587;if(inst_11571)
{var statearr_11595_11616 = state_11587__$1;(statearr_11595_11616[1] = 8);
} else
{var statearr_11596_11617 = state_11587__$1;(statearr_11596_11617[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11588 === 6))
{var state_11587__$1 = state_11587;var statearr_11598_11618 = state_11587__$1;(statearr_11598_11618[2] = null);
(statearr_11598_11618[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11588 === 7))
{var inst_11582 = (state_11587[2]);var state_11587__$1 = state_11587;var statearr_11599_11619 = state_11587__$1;(statearr_11599_11619[2] = inst_11582);
(statearr_11599_11619[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11588 === 8))
{var inst_11564 = (state_11587[7]);var tmp11597 = inst_11564;var inst_11564__$1 = tmp11597;var state_11587__$1 = (function (){var statearr_11600 = state_11587;(statearr_11600[7] = inst_11564__$1);
return statearr_11600;
})();var statearr_11601_11620 = state_11587__$1;(statearr_11601_11620[2] = null);
(statearr_11601_11620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11588 === 9))
{var inst_11567 = (state_11587[9]);var state_11587__$1 = state_11587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11587__$1,11,out,inst_11567);
} else
{if((state_val_11588 === 10))
{var inst_11579 = (state_11587[2]);var state_11587__$1 = state_11587;var statearr_11602_11621 = state_11587__$1;(statearr_11602_11621[2] = inst_11579);
(statearr_11602_11621[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11588 === 11))
{var inst_11567 = (state_11587[9]);var inst_11576 = (state_11587[2]);var inst_11564 = inst_11567;var state_11587__$1 = (function (){var statearr_11603 = state_11587;(statearr_11603[10] = inst_11576);
(statearr_11603[7] = inst_11564);
return statearr_11603;
})();var statearr_11604_11622 = state_11587__$1;(statearr_11604_11622[2] = null);
(statearr_11604_11622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_11608 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11608[0] = state_machine__6992__auto__);
(statearr_11608[1] = 1);
return statearr_11608;
});
var state_machine__6992__auto____1 = (function (state_11587){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_11587);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e11609){if((e11609 instanceof Object))
{var ex__6995__auto__ = e11609;var statearr_11610_11623 = state_11587;(statearr_11610_11623[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11587);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11609;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11624 = state_11587;
state_11587 = G__11624;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_11587){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_11587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_11611 = f__7062__auto__.call(null);(statearr_11611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto___11612);
return statearr_11611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7061__auto___11759 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_11729){var state_val_11730 = (state_11729[1]);if((state_val_11730 === 1))
{var inst_11692 = (new Array(n));var inst_11693 = inst_11692;var inst_11694 = 0;var state_11729__$1 = (function (){var statearr_11731 = state_11729;(statearr_11731[7] = inst_11693);
(statearr_11731[8] = inst_11694);
return statearr_11731;
})();var statearr_11732_11760 = state_11729__$1;(statearr_11732_11760[2] = null);
(statearr_11732_11760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 2))
{var state_11729__$1 = state_11729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11729__$1,4,ch);
} else
{if((state_val_11730 === 3))
{var inst_11727 = (state_11729[2]);var state_11729__$1 = state_11729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11729__$1,inst_11727);
} else
{if((state_val_11730 === 4))
{var inst_11697 = (state_11729[9]);var inst_11697__$1 = (state_11729[2]);var inst_11698 = (inst_11697__$1 == null);var inst_11699 = cljs.core.not.call(null,inst_11698);var state_11729__$1 = (function (){var statearr_11733 = state_11729;(statearr_11733[9] = inst_11697__$1);
return statearr_11733;
})();if(inst_11699)
{var statearr_11734_11761 = state_11729__$1;(statearr_11734_11761[1] = 5);
} else
{var statearr_11735_11762 = state_11729__$1;(statearr_11735_11762[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 5))
{var inst_11702 = (state_11729[10]);var inst_11693 = (state_11729[7]);var inst_11697 = (state_11729[9]);var inst_11694 = (state_11729[8]);var inst_11701 = (inst_11693[inst_11694] = inst_11697);var inst_11702__$1 = (inst_11694 + 1);var inst_11703 = (inst_11702__$1 < n);var state_11729__$1 = (function (){var statearr_11736 = state_11729;(statearr_11736[10] = inst_11702__$1);
(statearr_11736[11] = inst_11701);
return statearr_11736;
})();if(cljs.core.truth_(inst_11703))
{var statearr_11737_11763 = state_11729__$1;(statearr_11737_11763[1] = 8);
} else
{var statearr_11738_11764 = state_11729__$1;(statearr_11738_11764[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 6))
{var inst_11694 = (state_11729[8]);var inst_11715 = (inst_11694 > 0);var state_11729__$1 = state_11729;if(cljs.core.truth_(inst_11715))
{var statearr_11740_11765 = state_11729__$1;(statearr_11740_11765[1] = 12);
} else
{var statearr_11741_11766 = state_11729__$1;(statearr_11741_11766[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 7))
{var inst_11725 = (state_11729[2]);var state_11729__$1 = state_11729;var statearr_11742_11767 = state_11729__$1;(statearr_11742_11767[2] = inst_11725);
(statearr_11742_11767[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 8))
{var inst_11702 = (state_11729[10]);var inst_11693 = (state_11729[7]);var tmp11739 = inst_11693;var inst_11693__$1 = tmp11739;var inst_11694 = inst_11702;var state_11729__$1 = (function (){var statearr_11743 = state_11729;(statearr_11743[7] = inst_11693__$1);
(statearr_11743[8] = inst_11694);
return statearr_11743;
})();var statearr_11744_11768 = state_11729__$1;(statearr_11744_11768[2] = null);
(statearr_11744_11768[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 9))
{var inst_11693 = (state_11729[7]);var inst_11707 = cljs.core.vec.call(null,inst_11693);var state_11729__$1 = state_11729;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11729__$1,11,out,inst_11707);
} else
{if((state_val_11730 === 10))
{var inst_11713 = (state_11729[2]);var state_11729__$1 = state_11729;var statearr_11745_11769 = state_11729__$1;(statearr_11745_11769[2] = inst_11713);
(statearr_11745_11769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 11))
{var inst_11709 = (state_11729[2]);var inst_11710 = (new Array(n));var inst_11693 = inst_11710;var inst_11694 = 0;var state_11729__$1 = (function (){var statearr_11746 = state_11729;(statearr_11746[7] = inst_11693);
(statearr_11746[12] = inst_11709);
(statearr_11746[8] = inst_11694);
return statearr_11746;
})();var statearr_11747_11770 = state_11729__$1;(statearr_11747_11770[2] = null);
(statearr_11747_11770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 12))
{var inst_11693 = (state_11729[7]);var inst_11717 = cljs.core.vec.call(null,inst_11693);var state_11729__$1 = state_11729;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11729__$1,15,out,inst_11717);
} else
{if((state_val_11730 === 13))
{var state_11729__$1 = state_11729;var statearr_11748_11771 = state_11729__$1;(statearr_11748_11771[2] = null);
(statearr_11748_11771[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 14))
{var inst_11722 = (state_11729[2]);var inst_11723 = cljs.core.async.close_BANG_.call(null,out);var state_11729__$1 = (function (){var statearr_11749 = state_11729;(statearr_11749[13] = inst_11722);
return statearr_11749;
})();var statearr_11750_11772 = state_11729__$1;(statearr_11750_11772[2] = inst_11723);
(statearr_11750_11772[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11730 === 15))
{var inst_11719 = (state_11729[2]);var state_11729__$1 = state_11729;var statearr_11751_11773 = state_11729__$1;(statearr_11751_11773[2] = inst_11719);
(statearr_11751_11773[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_11755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11755[0] = state_machine__6992__auto__);
(statearr_11755[1] = 1);
return statearr_11755;
});
var state_machine__6992__auto____1 = (function (state_11729){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_11729);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e11756){if((e11756 instanceof Object))
{var ex__6995__auto__ = e11756;var statearr_11757_11774 = state_11729;(statearr_11757_11774[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11729);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11775 = state_11729;
state_11729 = G__11775;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_11729){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_11729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_11758 = f__7062__auto__.call(null);(statearr_11758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto___11759);
return statearr_11758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7061__auto___11918 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7062__auto__ = (function (){var switch__6991__auto__ = (function (state_11888){var state_val_11889 = (state_11888[1]);if((state_val_11889 === 1))
{var inst_11847 = [];var inst_11848 = inst_11847;var inst_11849 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11888__$1 = (function (){var statearr_11890 = state_11888;(statearr_11890[7] = inst_11848);
(statearr_11890[8] = inst_11849);
return statearr_11890;
})();var statearr_11891_11919 = state_11888__$1;(statearr_11891_11919[2] = null);
(statearr_11891_11919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11889 === 2))
{var state_11888__$1 = state_11888;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11888__$1,4,ch);
} else
{if((state_val_11889 === 3))
{var inst_11886 = (state_11888[2]);var state_11888__$1 = state_11888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11888__$1,inst_11886);
} else
{if((state_val_11889 === 4))
{var inst_11852 = (state_11888[9]);var inst_11852__$1 = (state_11888[2]);var inst_11853 = (inst_11852__$1 == null);var inst_11854 = cljs.core.not.call(null,inst_11853);var state_11888__$1 = (function (){var statearr_11892 = state_11888;(statearr_11892[9] = inst_11852__$1);
return statearr_11892;
})();if(inst_11854)
{var statearr_11893_11920 = state_11888__$1;(statearr_11893_11920[1] = 5);
} else
{var statearr_11894_11921 = state_11888__$1;(statearr_11894_11921[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11889 === 5))
{var inst_11852 = (state_11888[9]);var inst_11849 = (state_11888[8]);var inst_11856 = (state_11888[10]);var inst_11856__$1 = f.call(null,inst_11852);var inst_11857 = cljs.core._EQ_.call(null,inst_11856__$1,inst_11849);var inst_11858 = cljs.core.keyword_identical_QMARK_.call(null,inst_11849,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11859 = (inst_11857) || (inst_11858);var state_11888__$1 = (function (){var statearr_11895 = state_11888;(statearr_11895[10] = inst_11856__$1);
return statearr_11895;
})();if(cljs.core.truth_(inst_11859))
{var statearr_11896_11922 = state_11888__$1;(statearr_11896_11922[1] = 8);
} else
{var statearr_11897_11923 = state_11888__$1;(statearr_11897_11923[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11889 === 6))
{var inst_11848 = (state_11888[7]);var inst_11873 = inst_11848.length;var inst_11874 = (inst_11873 > 0);var state_11888__$1 = state_11888;if(cljs.core.truth_(inst_11874))
{var statearr_11899_11924 = state_11888__$1;(statearr_11899_11924[1] = 12);
} else
{var statearr_11900_11925 = state_11888__$1;(statearr_11900_11925[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11889 === 7))
{var inst_11884 = (state_11888[2]);var state_11888__$1 = state_11888;var statearr_11901_11926 = state_11888__$1;(statearr_11901_11926[2] = inst_11884);
(statearr_11901_11926[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11889 === 8))
{var inst_11852 = (state_11888[9]);var inst_11848 = (state_11888[7]);var inst_11856 = (state_11888[10]);var inst_11861 = inst_11848.push(inst_11852);var tmp11898 = inst_11848;var inst_11848__$1 = tmp11898;var inst_11849 = inst_11856;var state_11888__$1 = (function (){var statearr_11902 = state_11888;(statearr_11902[11] = inst_11861);
(statearr_11902[7] = inst_11848__$1);
(statearr_11902[8] = inst_11849);
return statearr_11902;
})();var statearr_11903_11927 = state_11888__$1;(statearr_11903_11927[2] = null);
(statearr_11903_11927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11889 === 9))
{var inst_11848 = (state_11888[7]);var inst_11864 = cljs.core.vec.call(null,inst_11848);var state_11888__$1 = state_11888;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11888__$1,11,out,inst_11864);
} else
{if((state_val_11889 === 10))
{var inst_11871 = (state_11888[2]);var state_11888__$1 = state_11888;var statearr_11904_11928 = state_11888__$1;(statearr_11904_11928[2] = inst_11871);
(statearr_11904_11928[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11889 === 11))
{var inst_11852 = (state_11888[9]);var inst_11856 = (state_11888[10]);var inst_11866 = (state_11888[2]);var inst_11867 = [];var inst_11868 = inst_11867.push(inst_11852);var inst_11848 = inst_11867;var inst_11849 = inst_11856;var state_11888__$1 = (function (){var statearr_11905 = state_11888;(statearr_11905[12] = inst_11868);
(statearr_11905[7] = inst_11848);
(statearr_11905[8] = inst_11849);
(statearr_11905[13] = inst_11866);
return statearr_11905;
})();var statearr_11906_11929 = state_11888__$1;(statearr_11906_11929[2] = null);
(statearr_11906_11929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11889 === 12))
{var inst_11848 = (state_11888[7]);var inst_11876 = cljs.core.vec.call(null,inst_11848);var state_11888__$1 = state_11888;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11888__$1,15,out,inst_11876);
} else
{if((state_val_11889 === 13))
{var state_11888__$1 = state_11888;var statearr_11907_11930 = state_11888__$1;(statearr_11907_11930[2] = null);
(statearr_11907_11930[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11889 === 14))
{var inst_11881 = (state_11888[2]);var inst_11882 = cljs.core.async.close_BANG_.call(null,out);var state_11888__$1 = (function (){var statearr_11908 = state_11888;(statearr_11908[14] = inst_11881);
return statearr_11908;
})();var statearr_11909_11931 = state_11888__$1;(statearr_11909_11931[2] = inst_11882);
(statearr_11909_11931[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11889 === 15))
{var inst_11878 = (state_11888[2]);var state_11888__$1 = state_11888;var statearr_11910_11932 = state_11888__$1;(statearr_11910_11932[2] = inst_11878);
(statearr_11910_11932[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6991__auto__){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_11914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11914[0] = state_machine__6992__auto__);
(statearr_11914[1] = 1);
return statearr_11914;
});
var state_machine__6992__auto____1 = (function (state_11888){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_11888);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e11915){if((e11915 instanceof Object))
{var ex__6995__auto__ = e11915;var statearr_11916_11933 = state_11888;(statearr_11916_11933[5] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11888);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11934 = state_11888;
state_11888 = G__11934;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_11888){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_11888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__))
})();var state__7063__auto__ = (function (){var statearr_11917 = f__7062__auto__.call(null);(statearr_11917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7061__auto___11918);
return statearr_11917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7063__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map