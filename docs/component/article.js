!function(e){function t(t){for(var r,i,l=t[0],s=t[1],u=t[2],c=0,p=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={5:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;a.push([882,0]),n()}({1:function(e,t){e.exports=Vue},278:function(e,t,n){"use strict";n.r(t);var r=n(279),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t.default=o.a},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),a=(r=o)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:"article"}},components:{"doc-component":a.default}},e.exports=t.default},299:function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 文章 `<ui-article>`\n\n<doc-component-status page="article"></doc-component-status>\n\n[[[开始]]]\n\n定义文章内容区域，支持多种类来格式化文章标题、元信息及内容。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n文章可包含：\n<br><br>\n- 标题: `.title`\n- 元信息: `.meta`\n- 核心内容: `.lead`\n- 正文: `.body`\n>tpl\n<ui-article>\n    <div class="title">A Guide to Upgrading to Polymer 1.0</div>\n    <div class="meta">July 15, 2015 by Pankaj Parashar</div>\n    <div class="lead">At the recently concluded Google IO 2015, Google released the much awaited 1.0 version of Polymer and declared it production-ready.</div>\n    <div class="body">\n        <p>For those of you who have been using the Polymer library while it was still in developer preview, this article will serve as a guide to migrate your existing application to the latest version of Polymer.</p>\n        <p>The steps to install the latest version of Polymer remain exactly the same as described in this article. To update an existing installation of Polymer, navigate to the app directory and run the following command in your terminal</p>\n    </div>\n</ui-article>\n:::\n\n:::vue\n@name:带下划线的元信息\n---\n#demo\n>desc\n添加`underline`样式类可为文章的元信息添加下划线。\n>tpl\n<ui-article class="underline">\n    <div class="title">A Guide to Upgrading to Polymer 1.0</div>\n    <div class="meta">July 15, 2015 by Pankaj Parashar</div>\n    <div class="lead">At the recently concluded Google IO 2015, Google released the much awaited 1.0 version of Polymer and declared it production-ready.</div>\n    <div class="body">\n        <p>For those of you who have been using the Polymer library while it was still in developer preview, this article will serve as a guide to migrate your existing application to the latest version of Polymer.</p>\n        <p>The steps to install the latest version of Polymer remain exactly the same as described in this article. To update an existing installation of Polymer, navigate to the app directory and run the following command in your terminal</p>\n    </div>\n</ui-article>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/article/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];r._withStripped=!0,n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))},882:function(e,t,n){"use strict";var r=a(n(1)),o=a(n(883));function a(e){return e&&e.__esModule?e:{default:e}}new r.default({el:"#root",render:function(e){return e(o.default)}})},883:function(e,t,n){"use strict";n.r(t);var r=n(299),o=n(278);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);var i=n(0),l=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);l.options.__file="src/docs/pages/component/article/index.vue",t.default=l.exports}});