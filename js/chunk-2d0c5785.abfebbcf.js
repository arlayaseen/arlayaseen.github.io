(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5785"],{"3eda":function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n("c123"),o=function(t){var e,n,o,v,l=10*-f,p=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),m=new WeakMap,w=function(){return void 0!==e&&null!==e.parentElement},h=function(t){l=Object(i["i"])(t),T(t)},E=function(t){l=Object(i["i"])(t),k(t)},b=function(t){var e=Object(i["i"])(t)-f;l<e&&T(t)},g=function(t){var e=Object(i["i"])(t)-f;l<e&&k(t)},j=function(){clearTimeout(v),v=void 0,n&&(y(!1),n=void 0)},T=function(t){n||w()||(e=void 0,O(a(t),t))},k=function(t){O(void 0,t)},O=function(t,e){if(!t||t!==n){clearTimeout(v),v=void 0;var o=Object(i["j"])(e),a=o.x,c=o.y;if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(s)||S(n,a,c),y(!0)}if(t){var d=m.get(t);d&&(clearTimeout(d),m.delete(t));var f=r(t)?0:u;t.classList.remove(s),v=setTimeout((function(){S(t,a,c),v=void 0}),f)}n=t}},S=function(t,e,n){p=Date.now(),t.classList.add(s);var i=L&&c(t);i&&i.addRipple&&(R(),o=i.addRipple(e,n))},R=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},y=function(t){R();var e=n;if(e){var i=d-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout((function(){e.classList.remove(s),m.delete(e)}),d);m.set(e,o)}else e.classList.remove(s)}},q=document;q.addEventListener("ionScrollStart",(function(t){e=t.target,j()})),q.addEventListener("ionScrollEnd",(function(){e=void 0})),q.addEventListener("ionGestureCaptured",j),q.addEventListener("touchstart",h,!0),q.addEventListener("touchcancel",E,!0),q.addEventListener("touchend",E,!0),q.addEventListener("mousedown",b,!0),q.addEventListener("mouseup",g,!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=chunk-2d0c5785.abfebbcf.js.map