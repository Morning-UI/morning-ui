!function(n){function t(t){for(var r,i,u=t[0],a=t[1],l=t[2],c=0,f=[];c<u.length;c++)i=u[c],d[i]&&f.push(d[i][0]),d[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],r=!0,u=1;u<e.length;u++){var a=e[u];0!==d[a]&&(r=!1)}r&&(o.splice(t--,1),n=i(i.s=e[0]))}return n}var r={},d={30:0},o=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=r,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=a;o.push([821,0]),e()}({1:function(n,t){n.exports=Vue},213:function(n,t,e){"use strict";e.r(t);var r=e(214),d=e.n(r);for(var o in r)"default"!==o&&function(n){e.d(t,n,function(){return r[n]})}(o);t.default=d.a},214:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,d=e(2),o=(r=d)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:"dl"}},components:{"doc-component":o.default}},n.exports=t.default},320:function(n,t,e){"use strict";var r=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 描述列表 `<ui-dl>`\n\n<doc-component-status page="dl"></doc-component-status>\n\n[[[开始]]]\n\n定义一个描述列表，不支持嵌套，列表中每一项包含两个标签`<dt>`和`<dd>`。\n\n描述列表是一个块级元素。\n\n描述列表支持多种布局样式，可以通过额外的`class`来使用。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-dl>\n    <dt>Foo</dt>\n    <dd>this is detail of foo</dd>\n    <dt>Bar</dt>\n    <dd>this is detail of bar</dd>\n</ui-dl>\n:::\n\n:::vue\n@name:水平排列布局\n---\n#demo\n>desc\n通过添加`horizontal`可以实现水平排列布局。\n>tpl\n<ui-dl class="horizontal">\n    <dt>Horizon</dt>\n    <dd>this is horizontal ui-dl</dd>\n    <dt>Horizon</dt>\n    <dd>this is horizontal ui-dl</dd>\n</ui-dl>\n:::\n\n:::vue\n@name:下划线布局\n---\n#demo\n>desc\n通过添加`underline`可以添加下划线。\n>tpl\n<ui-dl class="underline">\n    <dt>Underline</dt>\n    <dd>this is underline ui-dl</dd>\n    <dt>Underline</dt>\n    <dd>this is underline ui-dl</dd>\n</ui-dl>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@layout:state-na\n---\n<ui-dl state="{$stateKey}">\n    <dt>{$&stateName}</dt>\n    <dd>this is normal ui-dl</dd>\n    <dt>{$&stateName}</dt>\n    <dd>this is normal ui-dl</dd>\n</ui-dl>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/dl/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},d=[];r._withStripped=!0,e.d(t,"a",function(){return r}),e.d(t,"b",function(){return d})},821:function(n,t,e){"use strict";var r=o(e(1)),d=o(e(822));function o(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(d.default)}})},822:function(n,t,e){"use strict";e.r(t);var r=e(320),d=e(213);for(var o in d)"default"!==o&&function(n){e.d(t,n,function(){return d[n]})}(o);var i=e(0),u=Object(i.a)(d.default,r.a,r.b,!1,null,null,null);u.options.__file="src/docs/pages/component/dl/index.vue",t.default=u.exports}});