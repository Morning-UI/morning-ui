!function(e){function n(n){for(var r,a,l=n[0],u=n[1],s=n[2],c=0,f=[];c<l.length;c++)a=l[c],o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(d&&d(n);f.length;)f.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,l=1;l<t.length;l++){var u=t[l];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={5:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var d=u;i.push([853,0]),t()}({1:function(e,n){e.exports=Vue},255:function(e,n,t){"use strict";t.r(n);var r=t(256),o=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);n.default=o.a},256:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=t(2),i=(r=o)&&r.__esModule?r:{default:r};n.default={data:function(){return{page:"article"}},components:{"doc-component":i.default}},e.exports=n.default},275:function(e,n,t){"use strict";var r=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-component",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 文章 `<ui-article>`\n\n<doc-component-status page="article"></doc-component-status>\n\n[[[开始]]]\n\n定义文章内容区域，支持多种类来格式化文章标题、元信息及内容。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n文章可包含：\n<br><br>\n- 标题: `.title`\n- 元信息: `.meta`\n- 核心内容: `.lead`\n- 正文: `.body`\n>tpl\n<ui-article>\n    <div class="title">A Guide to Upgrading to Polymer 1.0</div>\n    <div class="meta">July 15, 2015 by Pankaj Parashar</div>\n    <div class="lead">At the recently concluded Google IO 2015, Google released the much awaited 1.0 version of Polymer and declared it production-ready.</div>\n    <div class="body">\n        <p>For those of you who have been using the Polymer library while it was still in developer preview, this article will serve as a guide to migrate your existing application to the latest version of Polymer.</p>\n        <p>The steps to install the latest version of Polymer remain exactly the same as described in this article. To update an existing installation of Polymer, navigate to the app directory and run the following command in your terminal</p>\n    </div>\n</ui-article>\n:::\n\n:::vue\n@name:带下划线的元信息\n---\n#demo\n>desc\n添加`underline`样式类可为文章的元信息添加下划线。\n>tpl\n<ui-article class="underline">\n    <div class="title">A Guide to Upgrading to Polymer 1.0</div>\n    <div class="meta">July 15, 2015 by Pankaj Parashar</div>\n    <div class="lead">At the recently concluded Google IO 2015, Google released the much awaited 1.0 version of Polymer and declared it production-ready.</div>\n    <div class="body">\n        <p>For those of you who have been using the Polymer library while it was still in developer preview, this article will serve as a guide to migrate your existing application to the latest version of Polymer.</p>\n        <p>The steps to install the latest version of Polymer remain exactly the same as described in this article. To update an existing installation of Polymer, navigate to the app directory and run the following command in your terminal</p>\n    </div>\n</ui-article>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/article/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];r._withStripped=!0,t.d(n,"a",function(){return r}),t.d(n,"b",function(){return o})},853:function(e,n,t){"use strict";var r=i(t(1)),o=i(t(854));function i(e){return e&&e.__esModule?e:{default:e}}new r.default({el:"#root",render:function(e){return e(o.default)}})},854:function(e,n,t){"use strict";t.r(n);var r=t(275),o=t(255);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);var a=t(0),l=Object(a.a)(o.default,r.a,r.b,!1,null,null,null);l.options.__file="src/docs/pages/component/article/index.vue",n.default=l.exports}});