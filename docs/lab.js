!function(t){function e(e){for(var r,a,c=e[0],i=e[1],l=e[2],s=0,d=[];s<c.length;s++)a=c[s],o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);for(f&&f(e);d.length;)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={108:0};var u=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=i;u.push([647,0]),n()}({1:function(t,e){t.exports=Vue},118:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(120)),o=u(n(119));function u(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{val:"#333333"}},components:{"doc-header":r.default,"doc-footer":o.default},methods:{echo:function(t){console.log("value-change!")}},mounted:function(){}},t.exports=e.default},233:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("doc-header",{attrs:{category:t.category}}),t._v(" "),n("div",{staticClass:"lab",staticStyle:{width:"1130px"}},[t._m(0),t._v(" "),n("div",{staticClass:"area"},[n("div",{staticStyle:{width:"300px"}},[n("ui-colorpicker",{attrs:{"form-name":"姓名","default-value":"#AAAAAA"},on:{"value-change":t.echo}}),t._v(" "),n("ui-btn",{on:{emit:function(e){t.val=2}}},[t._v("v-model change")])],1)])]),t._v(" "),n("doc-footer")],1)},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("i",{staticClass:"iconfont"},[this._v("")]),this._v("Morning Laboratory")])}];r._withStripped=!0},646:function(t,e,n){"use strict";n.r(e);var r=n(118),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);var a=n(233),c=n(0),i=!1;var l=function(t){i||n(883)},f=Object(c.a)(o.a,a.a,a.b,!1,l,null,null);f.options.__file="src/docs/pages/lab/index.vue",e.default=f.exports},647:function(t,e,n){"use strict";var r=u(n(1)),o=u(n(646));function u(t){return t&&t.__esModule?t:{default:t}}new r.default({el:"#root",render:function(t){return t(o.default)}})},883:function(t,e){}});