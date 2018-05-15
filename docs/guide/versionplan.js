!function(e){function n(n){for(var t,o,u=n[0],s=n[1],l=n[2],d=0,f=[];d<u.length;d++)o=u[d],a[o]&&f.push(a[o][0]),a[o]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);for(c&&c(n);f.length;)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,n=0;n<i.length;n++){for(var r=i[n],t=!0,u=1;u<r.length;u++){var s=r[u];0!==a[s]&&(t=!1)}t&&(i.splice(n--,1),e=o(o.s=r[0]))}return e}var t={},a={87:0};var i=[];function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var c=s;i.push([391,0]),r()}({1:function(e,n){e.exports=Vue},191:function(e,n,r){"use strict";r.d(n,"a",function(){return t}),r.d(n,"b",function(){return a});var t=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 版本计划\n\n### 版本规范\n\nMorning UI采用[语义化版本控制规范](http://semver.org/lang/zh-CN/)。\n\n同时采用以下三种标记标示不同的版本：\n\n|标记|名称|说明|更新<br>频率|生产环境|\n|-|-|-|-|-|\n|<ui-badge class="circle ver-stable" size="s" color="theme">Stable</ui-badge>|稳定版本|此版本中的各个功能都经过一段时间的测试及使用，非常稳定|month|推荐使用|\n|<ui-badge class="circle ver-beta" size="s" color="extra-light-black">Beta</ui-badge>|公开测试版本|包含了一些新的特性，并且修复了大部分问题的版本，相对较为稳定|week|可用<br>不推荐|\n|<ui-badge class="circle ver-canary" size="s">Canary</ui-badge>|金丝雀版本|包含大量新特性的版本，这个版本是实验性的，可能存在较多的问题<br><ui-small><ui-textcolor color="extra-light-blue">为开发者及早期用户设计的版本</ui-textcolor></ui-small>|~daily|请勿使用|\n\n版本发布情况请查看：[更新日志](/guide/logs.html)。\n\n### ROAD MAP\n\n- `0.10.0` : <ui-badge size="xxs" color="success">DONE</ui-badge>Morning UI的首个版本\n- `0.11.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>同步HMP的所有组件，计划2018年春季发布\n- `0.12.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>同步Element UI组件，计划2018年夏季发布\n- `0.13.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>组件性能提升，计划2018年秋季发布\n- `0.14.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>完成所有组件的测试覆盖，计划2018年冬季发布\n- `0.15.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>支持构建自定义的组件库，计划2019年春季发布\n- `1.0.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>第一个正式版本，计划2019年夏季发布\n\n')])])},a=[];t._withStripped=!0},390:function(e,n,r){"use strict";r.r(n);var t=r(91),a=r.n(t);for(var i in t)"default"!==i&&function(e){r.d(n,e,function(){return t[e]})}(i);var o=r(191),u=r(0),s=!1;var l=function(e){s||r(754)},c=Object(u.a)(a.a,o.a,o.b,!1,l,null,null);c.options.__file="src/docs/pages/guide/versionplan/index.vue",n.default=c.exports},391:function(e,n,r){"use strict";var t=i(r(1)),a=i(r(390));function i(e){return e&&e.__esModule?e:{default:e}}new t.default({el:"#root",render:function(e){return e(a.default)}})},754:function(e,n){},91:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t,a=r(3),i=(t=a)&&t.__esModule?t:{default:t};n.default={data:function(){return{page:"versionplan"}},components:{"doc-guide":i.default}},e.exports=n.default}});