!function(n){function e(e){for(var r,u,c=e[0],i=e[1],l=e[2],d=0,f=[];d<c.length;d++)u=c[d],o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);for(s&&s(e);f.length;)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},o={36:0};var a=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=i;a.push([303,0]),t()}({1:function(n,e){n.exports=Vue},147:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 中心内容 `<ui-lead>`\n\n<doc-component-status page="lead"></doc-component-status>\n\n[[[开始]]]\n\n定义一段中心内容，这是一个块级元素。\n\n#### 使用\n\n:::democode/html\n<ui-lead>中心内容</ui-lead>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`black`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 色彩\n\n:::preset/html\nstatusColor\n---\nuikey:lead\n:::\n\n#### 状态\n\n:::repeat/html\nstate:normal,apparent\n---\n<ui-lead state="{$stateKey}">{$&stateName}</ui-lead>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/lead/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0},302:function(n,e,t){"use strict";t.r(e);var r=t(39),o=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,function(){return r[n]})}(a);var u=t(147),c=t(0),i=!1;var l=function(n){i||t(682)},s=Object(c.a)(o.a,u.a,u.b,!1,l,null,null);s.options.__file="src/docs/pages/component/lead/index.vue",e.default=s.exports},303:function(n,e,t){"use strict";var r=a(t(1)),o=a(t(302));function a(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},39:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),a=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"lead"}},components:{"doc-component":a.default}},n.exports=e.default},682:function(n,e){}});