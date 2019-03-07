!function(n){function e(e){for(var i,o,a=e[0],c=e[1],d=e[2],s=0,f=[];s<a.length;s++)o=a[s],r[o]&&f.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(n[i]=c[i]);for(l&&l(e);f.length;)f.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],i=!0,a=1;a<t.length;a++){var c=t[a];0!==r[c]&&(i=!1)}i&&(u.splice(e--,1),n=o(o.s=t[0]))}return n}var i={},r={41:0},u=[];function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=i,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)o.d(t,i,function(e){return n[e]}.bind(null,i));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var l=c;u.push([752,0]),t()}({1:function(n,e){n.exports=Vue},172:function(n,e,t){"use strict";t.r(e);var i=t(173),r=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(e,n,function(){return i[n]})}(u);e.default=r.a},173:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(2),u=(i=r)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"img"}},components:{"doc-component":u.default}},n.exports=e.default},341:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 图片 `<ui-img>`\n\n<doc-component-status page="img"></doc-component-status>\n\n[[[开始]]]\n\n定义图片容器，支持三种不同形状的图片，可为图片添加文字说明。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n:::\n\n:::vue\n@name:带文字说明图片\n---\n#demo\n>tpl\n<ui-img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg">说明文字</ui-img>\n:::\n\n:::vue\n@name:不同形状\n---\n#demo\n>desc\n支持三种：\n<br><br>\n- `.round` : 圆角\n- `.circle` : 圆形\n- `.thumbnail` : 相框\n>tpl\n<div>\n    <ui-img class="round" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n    <ui-img class="circle" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n    <ui-img class="thumbnail" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n</div>\n:::\n\n:::vue\n@name:支持的属性\n---\n#demo\n>desc\n`ui-img`仅支持下面这些属性：\n<br><br>\n- `src` : 图片地址\n- `width` : 图片宽度\n- `height` : 图片高度\n- `alt` : 图片加载失败显示内容\n- `title` : 图标标题\n>tpl\n<div>\n    \x3c!-- 添加width属性，自动设置图片宽度 --\x3e\n    <ui-img width="130" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n\n    \x3c!-- 添加height属性，自动设置图片高度 --\x3e\n    <ui-img height="150" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n\n    \x3c!-- 添加title属性，自动设置图片title --\x3e\n    <ui-img title="这里是title" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>\n\n    \x3c!-- 添加alt属性，自动设置图片alt属性，当图片无法显示时候，显示alt内容。 --\x3e\n    <ui-img alt="这里是alt" src="https://d13yacurqjgar.cloudfront.net/noimg.jpeg"></ui-img>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/img/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},r=[];i._withStripped=!0,t.d(e,"a",function(){return i}),t.d(e,"b",function(){return r})},752:function(n,e,t){"use strict";var i=u(t(1)),r=u(t(753));function u(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(r.default)}})},753:function(n,e,t){"use strict";t.r(e);var i=t(341),r=t(172);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);var o=t(0),a=Object(o.a)(r.default,i.a,i.b,!1,null,null,null);a.options.__file="src/docs/pages/component/img/index.vue",e.default=a.exports}});