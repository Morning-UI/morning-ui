!function(n){function e(e){for(var r,i,c=e[0],a=e[1],l=e[2],f=0,s=[];f<c.length;f++)i=c[f],o[i]&&s.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(d&&d(e);s.length;)s.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={20:0},u=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=a;u.push([820,0]),t()}({1:function(n,e){n.exports=Vue},224:function(n,e,t){"use strict";t.r(e);var r=t(225),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);e.default=o.a},225:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"center"}},components:{"doc-component":u.default}},n.exports=e.default},291:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 居中容器 `<ui-center>`\n\n<doc-component-status page="center"></doc-component-status>\n\n[[[开始]]]\n\n定义居中的容器，容器的内容将被居中显示，这是一个块级元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:400px; height:300px;background-color:#EDF1F5">\n    <ui-center>\n        <div style="background-color:#A8B3C2;">居中div</div>\n        居中文字\n    </ui-center>\n</div>\n:::\n\n:::vue\n@name:填满容器的居中\n---\n#demo\n>desc\n填满的居中容器高度为100%。\n>tpl\n<div style="width:400px; height:300px;background-color:#EDF1F5">\n    <ui-center class="fill">\n        <div style="background-color:#A8B3C2;">充满父容器</div>\n        居中文字\n    </ui-center>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/center/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})},820:function(n,e,t){"use strict";var r=u(t(1)),o=u(t(821));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},821:function(n,e,t){"use strict";t.r(e);var r=t(291),o=t(224);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);var i=t(0),c=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);c.options.__file="src/docs/pages/component/center/index.vue",e.default=c.exports}});