!function(e){function t(t){for(var r,i,l=t[0],s=t[1],c=t[2],u=0,p=[];u<l.length;u++)i=l[u],o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={4:0};var a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;a.push([253,0]),n()}({1:function(e,t){e.exports=Vue},122:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(){var e=this.$createElement,t=this._self._c||e;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 文章 `<ui-article>`\n\n<doc-component-status page="article"></doc-component-status>\n\n[[[开始]]]\n\n定义文章内容区域，支持多种类来格式化文章标题、元信息及内容。\n\n文章可包含：\n\n- 标题 .title\n- 元信息 .meta\n- 核心内容 .lead\n- 正文 .body\n\n#### 使用\n\n:::democode/html\n<ui-article>\n    <div class="title">A Guide to Upgrading to Polymer 1.0</div>\n    <div class="meta">July 15, 2015 by Pankaj Parashar</div>\n    <div class="lead">At the recently concluded Google IO 2015, Google released the much awaited 1.0 version of Polymer and declared it production-ready.</div>\n    <div class="body">\n        <p>For those of you who have been using the Polymer library while it was still in developer preview, this article will serve as a guide to migrate your existing application to the latest version of Polymer.</p>\n        <p>The steps to install the latest version of Polymer remain exactly the same as described in this article. To update an existing installation of Polymer, navigate to the app directory and run the following command in your terminal</p>\n    </div>\n</ui-article>\n:::\n\n#### 带下划线的元信息\n\n:::democode/html\n<ui-article class="underline">\n    <div class="title">A Guide to Upgrading to Polymer 1.0</div>\n    <div class="meta">July 15, 2015 by Pankaj Parashar</div>\n    <div class="lead">At the recently concluded Google IO 2015, Google released the much awaited 1.0 version of Polymer and declared it production-ready.</div>\n    <div class="body">\n        <p>For those of you who have been using the Polymer library while it was still in developer preview, this article will serve as a guide to migrate your existing application to the latest version of Polymer.</p>\n        <p>The steps to install the latest version of Polymer remain exactly the same as described in this article. To update an existing installation of Polymer, navigate to the app directory and run the following command in your terminal</p>\n    </div>\n</ui-article>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/article/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];r._withStripped=!0},252:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var i=n(122),l=n(0),s=!1;var c=function(e){s||n(646)},d=Object(l.a)(o.a,i.a,i.b,!1,c,null,null);d.options.__file="src/docs/pages/component/article/index.vue",t.default=d.exports},253:function(e,t,n){"use strict";var r=a(n(1)),o=a(n(252));function a(e){return e&&e.__esModule?e:{default:e}}new r.default({el:"#root",render:function(e){return e(o.default)}})},646:function(e,t){},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),a=(r=o)&&r.__esModule?r:{default:r};t.default={data:function(){return{page:"article"}},components:{"doc-component":a.default}},e.exports=t.default}});