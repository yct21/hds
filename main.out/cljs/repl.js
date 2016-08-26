// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10117){
var map__10142 = p__10117;
var map__10142__$1 = ((((!((map__10142 == null)))?((((map__10142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10142):map__10142);
var m = map__10142__$1;
var n = cljs.core.get.call(null,map__10142__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10142__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10144_10166 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10145_10167 = null;
var count__10146_10168 = (0);
var i__10147_10169 = (0);
while(true){
if((i__10147_10169 < count__10146_10168)){
var f_10170 = cljs.core._nth.call(null,chunk__10145_10167,i__10147_10169);
cljs.core.println.call(null,"  ",f_10170);

var G__10171 = seq__10144_10166;
var G__10172 = chunk__10145_10167;
var G__10173 = count__10146_10168;
var G__10174 = (i__10147_10169 + (1));
seq__10144_10166 = G__10171;
chunk__10145_10167 = G__10172;
count__10146_10168 = G__10173;
i__10147_10169 = G__10174;
continue;
} else {
var temp__4657__auto___10175 = cljs.core.seq.call(null,seq__10144_10166);
if(temp__4657__auto___10175){
var seq__10144_10176__$1 = temp__4657__auto___10175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10144_10176__$1)){
var c__7388__auto___10177 = cljs.core.chunk_first.call(null,seq__10144_10176__$1);
var G__10178 = cljs.core.chunk_rest.call(null,seq__10144_10176__$1);
var G__10179 = c__7388__auto___10177;
var G__10180 = cljs.core.count.call(null,c__7388__auto___10177);
var G__10181 = (0);
seq__10144_10166 = G__10178;
chunk__10145_10167 = G__10179;
count__10146_10168 = G__10180;
i__10147_10169 = G__10181;
continue;
} else {
var f_10182 = cljs.core.first.call(null,seq__10144_10176__$1);
cljs.core.println.call(null,"  ",f_10182);

var G__10183 = cljs.core.next.call(null,seq__10144_10176__$1);
var G__10184 = null;
var G__10185 = (0);
var G__10186 = (0);
seq__10144_10166 = G__10183;
chunk__10145_10167 = G__10184;
count__10146_10168 = G__10185;
i__10147_10169 = G__10186;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10187 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6577__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6577__auto__)){
return or__6577__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10187);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10187)))?cljs.core.second.call(null,arglists_10187):arglists_10187));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10148_10188 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10149_10189 = null;
var count__10150_10190 = (0);
var i__10151_10191 = (0);
while(true){
if((i__10151_10191 < count__10150_10190)){
var vec__10152_10192 = cljs.core._nth.call(null,chunk__10149_10189,i__10151_10191);
var name_10193 = cljs.core.nth.call(null,vec__10152_10192,(0),null);
var map__10155_10194 = cljs.core.nth.call(null,vec__10152_10192,(1),null);
var map__10155_10195__$1 = ((((!((map__10155_10194 == null)))?((((map__10155_10194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10155_10194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10155_10194):map__10155_10194);
var doc_10196 = cljs.core.get.call(null,map__10155_10195__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10197 = cljs.core.get.call(null,map__10155_10195__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10193);

cljs.core.println.call(null," ",arglists_10197);

if(cljs.core.truth_(doc_10196)){
cljs.core.println.call(null," ",doc_10196);
} else {
}

var G__10198 = seq__10148_10188;
var G__10199 = chunk__10149_10189;
var G__10200 = count__10150_10190;
var G__10201 = (i__10151_10191 + (1));
seq__10148_10188 = G__10198;
chunk__10149_10189 = G__10199;
count__10150_10190 = G__10200;
i__10151_10191 = G__10201;
continue;
} else {
var temp__4657__auto___10202 = cljs.core.seq.call(null,seq__10148_10188);
if(temp__4657__auto___10202){
var seq__10148_10203__$1 = temp__4657__auto___10202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10148_10203__$1)){
var c__7388__auto___10204 = cljs.core.chunk_first.call(null,seq__10148_10203__$1);
var G__10205 = cljs.core.chunk_rest.call(null,seq__10148_10203__$1);
var G__10206 = c__7388__auto___10204;
var G__10207 = cljs.core.count.call(null,c__7388__auto___10204);
var G__10208 = (0);
seq__10148_10188 = G__10205;
chunk__10149_10189 = G__10206;
count__10150_10190 = G__10207;
i__10151_10191 = G__10208;
continue;
} else {
var vec__10157_10209 = cljs.core.first.call(null,seq__10148_10203__$1);
var name_10210 = cljs.core.nth.call(null,vec__10157_10209,(0),null);
var map__10160_10211 = cljs.core.nth.call(null,vec__10157_10209,(1),null);
var map__10160_10212__$1 = ((((!((map__10160_10211 == null)))?((((map__10160_10211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10160_10211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10160_10211):map__10160_10211);
var doc_10213 = cljs.core.get.call(null,map__10160_10212__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10214 = cljs.core.get.call(null,map__10160_10212__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10210);

cljs.core.println.call(null," ",arglists_10214);

if(cljs.core.truth_(doc_10213)){
cljs.core.println.call(null," ",doc_10213);
} else {
}

var G__10215 = cljs.core.next.call(null,seq__10148_10203__$1);
var G__10216 = null;
var G__10217 = (0);
var G__10218 = (0);
seq__10148_10188 = G__10215;
chunk__10149_10189 = G__10216;
count__10150_10190 = G__10217;
i__10151_10191 = G__10218;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__10162 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10163 = null;
var count__10164 = (0);
var i__10165 = (0);
while(true){
if((i__10165 < count__10164)){
var role = cljs.core._nth.call(null,chunk__10163,i__10165);
var temp__4657__auto___10219__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10219__$1)){
var spec_10220 = temp__4657__auto___10219__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10220));
} else {
}

var G__10221 = seq__10162;
var G__10222 = chunk__10163;
var G__10223 = count__10164;
var G__10224 = (i__10165 + (1));
seq__10162 = G__10221;
chunk__10163 = G__10222;
count__10164 = G__10223;
i__10165 = G__10224;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__10162);
if(temp__4657__auto____$1){
var seq__10162__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10162__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__10162__$1);
var G__10225 = cljs.core.chunk_rest.call(null,seq__10162__$1);
var G__10226 = c__7388__auto__;
var G__10227 = cljs.core.count.call(null,c__7388__auto__);
var G__10228 = (0);
seq__10162 = G__10225;
chunk__10163 = G__10226;
count__10164 = G__10227;
i__10165 = G__10228;
continue;
} else {
var role = cljs.core.first.call(null,seq__10162__$1);
var temp__4657__auto___10229__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10229__$2)){
var spec_10230 = temp__4657__auto___10229__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10230));
} else {
}

var G__10231 = cljs.core.next.call(null,seq__10162__$1);
var G__10232 = null;
var G__10233 = (0);
var G__10234 = (0);
seq__10162 = G__10231;
chunk__10163 = G__10232;
count__10164 = G__10233;
i__10165 = G__10234;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map