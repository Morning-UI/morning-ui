!function(e){function n(n){for(var t,u,o=n[0],s=n[1],c=n[2],d=0,g=[];d<o.length;d++)u=o[d],i[u]&&g.push(i[u][0]),i[u]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);for(l&&l(n);g.length;)g.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],t=!0,o=1;o<r.length;o++){var s=r[o];0!==i[s]&&(t=!1)}t&&(a.splice(n--,1),e=u(u.s=r[0]))}return e}var t={},i={104:0};var a=[];function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=t,u.d=function(e,n,r){u.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var l=s;a.push([459,0]),r()}({1:function(e,n){e.exports=Vue},108:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t,i=r(3),a=(t=i)&&t.__esModule?t:{default:t};n.default={data:function(){return{page:"versionplan"}},components:{"doc-guide":a.default}},e.exports=n.default},225:function(e,n,r){"use strict";r.d(n,"a",function(){return t}),r.d(n,"b",function(){return i});var t=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 版本计划\n\n### 版本规范\n\nMorning UI采用[语义化版本控制规范](http://semver.org/lang/zh-CN/)。\n\n同时采用以下三种标记标示不同的版本：\n\n|标记|名称|说明|更新<br>频率|生产环境|\n|-|-|-|-|-|\n|<ui-badge class="circle ver-stable" size="s" color="theme">Stable</ui-badge>|稳定版本|此版本中的各个功能都经过一段时间的测试及使用，非常稳定|month|推荐使用|\n|<ui-badge class="circle ver-beta" size="s" color="extra-light-black">Beta</ui-badge>|公开测试版本|包含了一些新的特性，并且修复了大部分问题的版本，相对较为稳定|week|可用<br>不推荐|\n|<ui-badge class="circle ver-canary" size="s">Canary</ui-badge>|金丝雀版本|包含大量新特性的版本，这个版本是实验性的，可能存在较多的问题<br><ui-small><ui-textcolor color="extra-light-blue">为开发者及早期用户设计的版本</ui-textcolor></ui-small>|~daily|请勿使用|\n\n版本发布情况请查看：[更新日志](/guide/logs.html)。\n\n### 更新日志规范\n\n更新日志包含了单个版本的变动，按变动类型分为：\n\n- 新特性\n- 改进\n- 修复\n- 废弃\n- 其他(包含文档、测试等变动)\n\n若是某个组件变动，需要写明组件的名字，如`ui-btn`。\n\n如果变动中包含了不兼容的变动，需要增加`升级注意事项`来写清楚变动情况及替代方案。\n\n### ROAD MAP\n\n- `0.10.0` : <ui-badge size="xxs" color="success">DONE</ui-badge>Morning UI的首个版本\n- `0.11.0` : <ui-badge size="xxs" color="success">DONE</ui-badge>同步HMP的所有组件，计划2018年春季发布\n- `0.12.0` : <ui-badge size="xxs" color="success">DONE</ui-badge>同步Element UI组件，计划2018年夏季发布\n- `0.13.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>同步AntD组件，计划2018年秋季发布\n- `0.14.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>组件性能提升，计划2018年秋季发布\n- `0.15.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>同步Semantic UI组件，计划2018年冬季发布\n- `0.16.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>完成所有组件的测试覆盖，计划2018年春季发布\n- `0.17.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>符合WCAG2标准，更好的浏览器兼容性，计划2019年夏季发布\n- `1.0.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>第一个正式版本，计划2019年夏季发布\n\n')])])},i=[];t._withStripped=!0},458:function(e,n,r){"use strict";r.r(n);var t=r(108),i=r.n(t);for(var a in t)"default"!==a&&function(e){r.d(n,e,function(){return t[e]})}(a);var u=r(225),o=r(0),s=!1;var c=function(e){s||r(857)},l=Object(o.a)(i.a,u.a,u.b,!1,c,null,null);l.options.__file="src/docs/pages/guide/versionplan/index.vue",n.default=l.exports},459:function(e,n,r){"use strict";var t=a(r(1)),i=a(r(458));function a(e){return e&&e.__esModule?e:{default:e}}new t.default({el:"#root",render:function(e){return e(i.default)}})},857:function(e,n){}});