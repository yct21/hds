// Compiled by ClojureScript 1.9.89 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__7848_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__7848_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7853 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7854 = null;
var count__7855 = (0);
var i__7856 = (0);
while(true){
if((i__7856 < count__7855)){
var s = cljs.core._nth.call(null,chunk__7854,i__7856);
var temp__4657__auto___7857 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___7857)){
var sheet_7858 = temp__4657__auto___7857;
var temp__4657__auto___7859__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_7858.href,changed);
if(cljs.core.truth_(temp__4657__auto___7859__$1)){
var href_uri_7860 = temp__4657__auto___7859__$1;
sheet_7858.ownerNode.href = href_uri_7860.makeUnique().toString();
} else {
}
} else {
}

var G__7861 = seq__7853;
var G__7862 = chunk__7854;
var G__7863 = count__7855;
var G__7864 = (i__7856 + (1));
seq__7853 = G__7861;
chunk__7854 = G__7862;
count__7855 = G__7863;
i__7856 = G__7864;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7853);
if(temp__4657__auto__){
var seq__7853__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7853__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__7853__$1);
var G__7865 = cljs.core.chunk_rest.call(null,seq__7853__$1);
var G__7866 = c__7388__auto__;
var G__7867 = cljs.core.count.call(null,c__7388__auto__);
var G__7868 = (0);
seq__7853 = G__7865;
chunk__7854 = G__7866;
count__7855 = G__7867;
i__7856 = G__7868;
continue;
} else {
var s = cljs.core.first.call(null,seq__7853__$1);
var temp__4657__auto___7869__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___7869__$1)){
var sheet_7870 = temp__4657__auto___7869__$1;
var temp__4657__auto___7871__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_7870.href,changed);
if(cljs.core.truth_(temp__4657__auto___7871__$2)){
var href_uri_7872 = temp__4657__auto___7871__$2;
sheet_7870.ownerNode.href = href_uri_7872.makeUnique().toString();
} else {
}
} else {
}

var G__7873 = cljs.core.next.call(null,seq__7853__$1);
var G__7874 = null;
var G__7875 = (0);
var G__7876 = (0);
seq__7853 = G__7873;
chunk__7854 = G__7874;
count__7855 = G__7875;
i__7856 = G__7876;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7881 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7882 = null;
var count__7883 = (0);
var i__7884 = (0);
while(true){
if((i__7884 < count__7883)){
var s = cljs.core._nth.call(null,chunk__7882,i__7884);
var temp__4657__auto___7885 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___7885)){
var image_7886 = temp__4657__auto___7885;
var temp__4657__auto___7887__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_7886.src,changed);
if(cljs.core.truth_(temp__4657__auto___7887__$1)){
var href_uri_7888 = temp__4657__auto___7887__$1;
image_7886.src = href_uri_7888.makeUnique().toString();
} else {
}
} else {
}

var G__7889 = seq__7881;
var G__7890 = chunk__7882;
var G__7891 = count__7883;
var G__7892 = (i__7884 + (1));
seq__7881 = G__7889;
chunk__7882 = G__7890;
count__7883 = G__7891;
i__7884 = G__7892;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7881);
if(temp__4657__auto__){
var seq__7881__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7881__$1)){
var c__7388__auto__ = cljs.core.chunk_first.call(null,seq__7881__$1);
var G__7893 = cljs.core.chunk_rest.call(null,seq__7881__$1);
var G__7894 = c__7388__auto__;
var G__7895 = cljs.core.count.call(null,c__7388__auto__);
var G__7896 = (0);
seq__7881 = G__7893;
chunk__7882 = G__7894;
count__7883 = G__7895;
i__7884 = G__7896;
continue;
} else {
var s = cljs.core.first.call(null,seq__7881__$1);
var temp__4657__auto___7897__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___7897__$1)){
var image_7898 = temp__4657__auto___7897__$1;
var temp__4657__auto___7899__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_7898.src,changed);
if(cljs.core.truth_(temp__4657__auto___7899__$2)){
var href_uri_7900 = temp__4657__auto___7899__$2;
image_7898.src = href_uri_7900.makeUnique().toString();
} else {
}
} else {
}

var G__7901 = cljs.core.next.call(null,seq__7881__$1);
var G__7902 = null;
var G__7903 = (0);
var G__7904 = (0);
seq__7881 = G__7901;
chunk__7882 = G__7902;
count__7883 = G__7903;
i__7884 = G__7904;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7907){
var map__7910 = p__7907;
var map__7910__$1 = ((((!((map__7910 == null)))?((((map__7910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7910):map__7910);
var on_jsload = cljs.core.get.call(null,map__7910__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7910,map__7910__$1,on_jsload){
return (function (p1__7905_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7905_SHARP_,".js");
});})(map__7910,map__7910__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7910,map__7910__$1,on_jsload){
return (function (p1__7906_SHARP_){
return goog.Uri.parse(p1__7906_SHARP_).makeUnique();
});})(js_files,map__7910,map__7910__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7910,map__7910__$1,on_jsload){
return (function() { 
var G__7912__delegate = function (_){
return on_jsload.call(null);
};
var G__7912 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7913__i = 0, G__7913__a = new Array(arguments.length -  0);
while (G__7913__i < G__7913__a.length) {G__7913__a[G__7913__i] = arguments[G__7913__i + 0]; ++G__7913__i;}
  _ = new cljs.core.IndexedSeq(G__7913__a,0);
} 
return G__7912__delegate.call(this,_);};
G__7912.cljs$lang$maxFixedArity = 0;
G__7912.cljs$lang$applyTo = (function (arglist__7914){
var _ = cljs.core.seq(arglist__7914);
return G__7912__delegate(_);
});
G__7912.cljs$core$IFn$_invoke$arity$variadic = G__7912__delegate;
return G__7912;
})()
;})(js_files,map__7910,map__7910__$1,on_jsload))
,((function (js_files,map__7910,map__7910__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7910,map__7910__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7919_7923 = cljs.core.seq.call(null,things_to_log);
var chunk__7920_7924 = null;
var count__7921_7925 = (0);
var i__7922_7926 = (0);
while(true){
if((i__7922_7926 < count__7921_7925)){
var t_7927 = cljs.core._nth.call(null,chunk__7920_7924,i__7922_7926);
console.log(t_7927);

var G__7928 = seq__7919_7923;
var G__7929 = chunk__7920_7924;
var G__7930 = count__7921_7925;
var G__7931 = (i__7922_7926 + (1));
seq__7919_7923 = G__7928;
chunk__7920_7924 = G__7929;
count__7921_7925 = G__7930;
i__7922_7926 = G__7931;
continue;
} else {
var temp__4657__auto___7932 = cljs.core.seq.call(null,seq__7919_7923);
if(temp__4657__auto___7932){
var seq__7919_7933__$1 = temp__4657__auto___7932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7919_7933__$1)){
var c__7388__auto___7934 = cljs.core.chunk_first.call(null,seq__7919_7933__$1);
var G__7935 = cljs.core.chunk_rest.call(null,seq__7919_7933__$1);
var G__7936 = c__7388__auto___7934;
var G__7937 = cljs.core.count.call(null,c__7388__auto___7934);
var G__7938 = (0);
seq__7919_7923 = G__7935;
chunk__7920_7924 = G__7936;
count__7921_7925 = G__7937;
i__7922_7926 = G__7938;
continue;
} else {
var t_7939 = cljs.core.first.call(null,seq__7919_7933__$1);
console.log(t_7939);

var G__7940 = cljs.core.next.call(null,seq__7919_7933__$1);
var G__7941 = null;
var G__7942 = (0);
var G__7943 = (0);
seq__7919_7923 = G__7940;
chunk__7920_7924 = G__7941;
count__7921_7925 = G__7942;
i__7922_7926 = G__7943;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__7944_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__7944_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__7946 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__7946);

adzerk.boot_reload.reload.reload_css.call(null,G__7946);

adzerk.boot_reload.reload.reload_img.call(null,G__7946);

return G__7946;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map