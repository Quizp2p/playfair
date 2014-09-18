// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.general');
goog.require('cljs.core');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.debug');
/**
* @param {...*} var_args
*/
playfair_cljs.general.multi_assoc = (function() { 
var multi_assoc__delegate = function (reciever,assoc_pairs){return cljs.core.reduce.call(null,(function (rec,p__9676){var vec__9677 = p__9676;var look_up = cljs.core.nth.call(null,vec__9677,0,null);var value = cljs.core.nth.call(null,vec__9677,1,null);return cljs.core.assoc.call(null,rec,look_up,value);
}),reciever,assoc_pairs);
};
var multi_assoc = function (reciever,var_args){
var assoc_pairs = null;if (arguments.length > 1) {
  assoc_pairs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return multi_assoc__delegate.call(this,reciever,assoc_pairs);};
multi_assoc.cljs$lang$maxFixedArity = 1;
multi_assoc.cljs$lang$applyTo = (function (arglist__9678){
var reciever = cljs.core.first(arglist__9678);
var assoc_pairs = cljs.core.rest(arglist__9678);
return multi_assoc__delegate(reciever,assoc_pairs);
});
multi_assoc.cljs$core$IFn$_invoke$arity$variadic = multi_assoc__delegate;
return multi_assoc;
})()
;
/**
* @param {...*} var_args
*/
playfair_cljs.general.multi_assoc_in = (function() { 
var multi_assoc_in__delegate = function (reciever,assoc_pairs){return cljs.core.reduce.call(null,(function (rec,p__9681){var vec__9682 = p__9681;var look_up = cljs.core.nth.call(null,vec__9682,0,null);var value = cljs.core.nth.call(null,vec__9682,1,null);return cljs.core.assoc_in.call(null,rec,look_up,value);
}),reciever,assoc_pairs);
};
var multi_assoc_in = function (reciever,var_args){
var assoc_pairs = null;if (arguments.length > 1) {
  assoc_pairs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return multi_assoc_in__delegate.call(this,reciever,assoc_pairs);};
multi_assoc_in.cljs$lang$maxFixedArity = 1;
multi_assoc_in.cljs$lang$applyTo = (function (arglist__9683){
var reciever = cljs.core.first(arglist__9683);
var assoc_pairs = cljs.core.rest(arglist__9683);
return multi_assoc_in__delegate(reciever,assoc_pairs);
});
multi_assoc_in.cljs$core$IFn$_invoke$arity$variadic = multi_assoc_in__delegate;
return multi_assoc_in;
})()
;
playfair_cljs.general.dissoc_vec = (function dissoc_vec(vect,index){if(cljs.core._EQ_.call(null,(cljs.core.count.call(null,vect) - 1),index))
{return cljs.core.pop.call(null,vect);
} else
{return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,vect,0,index),cljs.core.subvec.call(null,vect,(index + 1),cljs.core.count.call(null,vect))));
}
});
playfair_cljs.general.safe_pop = (function safe_pop(v){if(cljs.core.empty_QMARK_.call(null,v))
{return cljs.core.PersistentVector.EMPTY;
} else
{return cljs.core.pop.call(null,v);
}
});

//# sourceMappingURL=general.js.map