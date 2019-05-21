!function(n){function t(t){for(var r,i,a=t[0],l=t[1],c=t[2],f=0,d=[];f<a.length;f++)i=a[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(n[r]=l[r]);for(s&&s(t);d.length;)d.shift()();return u.push.apply(u,c||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],r=!0,a=1;a<e.length;a++){var l=e[a];0!==o[l]&&(r=!1)}r&&(u.splice(t--,1),n=i(i.s=e[0]))}return n}var r={},o={114:0},u=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=r,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var s=l;u.push([633,0]),e()}({1:function(n,t){n.exports=Vue},307:function(n,t,e){"use strict";var r=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n\n# 形态\n\n形态是一种通用的组件属性，用来改变组件的外观，有一套全局的规范。所有组件都可以支持形态，不同的组件会根据实际情况支持。\n\n目前形态包含三类：`尺寸`、`色彩`、`状态`。\n\n每一个形态都是配置，你可以像下面这样使用：\n\n```html\n\x3c!-- 使用XL尺寸的ui-btn组件 --\x3e\n<ui-btn size="xl"></ui-btn>\n```\n\n不同类型的形态可以在同一组件上使用：\n\n```html\n\x3c!-- 使用XL尺寸，危险色彩，加载状态的ui-btn组件 --\x3e\n<ui-btn size="xl" color="danger" state="loading"></ui-btn>\n```\n\n但是同一类型的形态只能使用一个。\n\n## 尺寸\n\n组件的大小，包含：\n\n- `xxl` : 超大\n- `xl` : 大\n- `l` : 较大\n- `m` : 中\n- `s` : 较小\n- `xs` : 小\n- `xxs` : 超小\n\n组件会根据实际情况支持其中的部分尺寸(至少支持一种)，大部分组件的默认尺寸都是`m`。\n\n## 色彩\n\n色彩指定了组件采用的配色，常见的色彩包含：`主题色`、`功能色`、`辅助色`，完整的色彩名称及色值可在[设计/色彩](/design/color.html)中查看。\n\n在组件文档的`形态`标签中可查看组件支持的色彩，对于支持的色彩可通过组件的`color`配置来设置，比如：\n\n:::vue\n@name:通过`color`设置组件的色彩\n---\n#demo\n>tpl\n<div>\n    <ui-btn color="black">设置黑色的按钮</ui-btn>\n    <ui-btn color="neutral-6">设置中性色6的按钮</ui-btn>\n</div>\n:::\n\n在非组件的样式中也建议使用Morning UI的配色来达到视觉效果的一致。在组件外使用这些颜色，可以使用以下方式：\n\n- 通过CSS类，请查看：[配色](/component/uniformcolor.html)\n- 使用色值，请查看：[设计/色彩](/design/color.html)\n\n## 状态\n\n组件当前的状态，包括：\n\n- `normal` : 正常状态 \n- `hover` : Hover状态\n- `active` : 激活状态\n- `disabled` : 禁用状态\n- `readonly` : 只读状态\n- `apparent` : 醒目状态\n\n组件会根据实际情况支持其中的部分状态(至少支持一种)，大部分组件的默认状态都是`normal`。\n\n#### `disabled`和`readonly`的区别\n\n组件`disabled`后无法在UI层面修改表单值，也无法通过`set`方法设置表单值。但`readonly`仅在UI层面无法修改表单值，仍可以通过`set`或组件其他方法设置表单值。\n\n')])])},o=[];r._withStripped=!0,e.d(t,"a",function(){return r}),e.d(t,"b",function(){return o})},36:function(n,t,e){"use strict";e.r(t);var r=e(37),o=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,function(){return r[n]})}(u);t.default=o.a},37:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=e(3),u=(r=o)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:"status"}},components:{"doc-guide":u.default}},n.exports=t.default},633:function(n,t,e){"use strict";var r=u(e(1)),o=u(e(634));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},634:function(n,t,e){"use strict";e.r(t);var r=e(307),o=e(36);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e(635);var i=e(0),a=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);a.options.__file="src/docs/pages/guide/status/index.vue",t.default=a.exports},635:function(n,t,e){"use strict";var r=e(895);e.n(r).a},895:function(n,t){}});