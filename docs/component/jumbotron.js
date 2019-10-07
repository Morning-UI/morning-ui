!function(n){function e(e){for(var r,i,a=e[0],c=e[1],l=e[2],s=0,d=[];s<a.length;s++)i=a[s],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(f&&f(e);d.length;)d.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={43:0},u=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var f=c;u.push([775,0]),t()}({1:function(n,e){n.exports=Vue},179:function(n,e,t){"use strict";t.r(e);var r=t(180),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);e.default=o.a},180:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"jumbotron"}},components:{"doc-component":u.default}},n.exports=e.default},336:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 巨幕 `<ui-jumbotron>`\n\n<doc-component-status page="jumbotron"></doc-component-status>\n\n[[[开始]]]\n\n定义一个巨幕，巨幕包含标题、内容和一组按钮或链接，巨幕往往用来定义一个显眼的行动区域。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n巨幕可包含：\n<br><br>\n- 标题: `h1`\n- 说明: `p`\n- 行动区域\n>tpl\n<ui-jumbotron>\n    <h1>标题</h1>\n    <p>这个一个介绍区域，用来放置一些介绍内容。<br>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n    <ui-btn size="m">行动</ui-btn> &nbsp;\n    <ui-link color="minor" size="m">查看更多</ui-link>\n</ui-jumbotron>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/jumbotron/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})},775:function(n,e,t){"use strict";var r=u(t(1)),o=u(t(776));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},776:function(n,e,t){"use strict";t.r(e);var r=t(336),o=t(179);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);var i=t(0),a=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);a.options.__file="src/docs/pages/component/jumbotron/index.vue",e.default=a.exports}});