!function(n){function t(t){for(var i,a,u=t[0],c=t[1],s=t[2],d=0,p=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(n[i]=c[i]);for(l&&l(t);p.length;)p.shift()();return r.push.apply(r,s||[]),e()}function e(){for(var n,t=0;t<r.length;t++){for(var e=r[t],i=!0,u=1;u<e.length;u++){var c=e[u];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),n=a(a.s=e[0]))}return n}var i={},o={1:0},r=[];function a(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=i,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)a.d(e,i,function(t){return n[t]}.bind(null,i));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;r.push([891,0]),e()}({1:function(n,t){n.exports=Vue},288:function(n,t,e){"use strict";e.r(t);var i=e(289),o=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t.default=o.a},289:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=e(2),r=(i=o)&&i.__esModule?i:{default:i};t.default={data:function(){return{page:"action"}},components:{"doc-component":r.default}},n.exports=t.default},296:function(n,t,e){"use strict";var i=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 行动栏 `<ui-action>`\n\n<doc-component-status page="action"></doc-component-status>\n\n[[[开始]]]\n\n定义一个包含多个操作的行动栏。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n行动栏可包含：\n<br><br>\n- 名称: `.title`\n- 说明: `.note`\n- 行动区域: `.action`\n>tpl\n<div style="width:400px">\n    <ui-action>\n        <div class="title">\n            <h5>行动名称</h5>\n            <span class="note">行动说明</span>\n        </div>\n        <div class="action">\n            <ui-btn>行动按钮</ui-btn>\n        </div>\n    </ui-action>\n</div>\n:::\n\n:::vue\n@name:多个行动入口\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-action>\n        <div class="title">\n            <h5>行动名称</h5>\n            <span class="note">行动说明</span>\n        </div>\n        <div class="action">\n            <ui-btn>确认</ui-btn>\n            <ui-link color="minor">取消</ui-link>\n        </div>\n    </ui-action>\n</div>\n:::\n\n:::vue\n@name:垂直排列\n---\n#demo\n>tpl\n<div style="width:400px">\n    <ui-action class="vertical">\n        <div class="title">\n            <h5>行动名称</h5>\n            <span class="note">行动说明</span>\n        </div>\n        <div class="action">\n            <ui-textinput></ui-textinput>\n        </div>\n    </ui-action>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部(除`transparent`)|`black`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@layout:size\n---\n<div style="width:400px">\n    <ui-action size="{$sizeKey}">\n        <div class="title">\n            <h5>{$&sizeName}</h5>\n            <span class="note">行动说明</span>\n        </div>\n        <div class="action">\n            <ui-btn size="{$sizeKey}">行动按钮</ui-btn>\n        </div>\n    </ui-action>\n</div>\n<br>\n:::\n\n:::vue\n@layout:color\n---\n<div style="width:400px">\n    <ui-action color="{$colorKey}">\n        <div class="title">\n            <h5>{$&colorName}</h5>\n            <span class="note">行动说明</span>\n        </div>\n        <div class="action">\n            <ui-btn color="{$colorKey}">{$name}按钮</ui-btn>\n        </div>\n    </ui-action>\n</div>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/action/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];i._withStripped=!0,e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}))},891:function(n,t,e){"use strict";var i=r(e(1)),o=r(e(892));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},892:function(n,t,e){"use strict";e.r(t);var i=e(296),o=e(288);for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);var a=e(0),u=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);u.options.__file="src/docs/pages/component/action/index.vue",t.default=u.exports}});