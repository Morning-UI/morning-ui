!function(e){function n(n){for(var r,o,a=n[0],l=n[1],s=n[2],d=0,f=[];d<a.length;d++)o=a[d],u[o]&&f.push(u[o][0]),u[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(n);f.length;)f.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var l=t[a];0!==u[l]&&(r=!1)}r&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},u={121:0},i=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var c=l;i.push([633,0]),t()}({1:function(e,n){e.exports=Vue},29:function(e,n,t){"use strict";t.r(n);var r=t(30),u=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);n.default=u.a},292:function(e,n,t){"use strict";var r=function(){var e=this.$createElement,n=this._self._c||e;return n("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 版本计划\n\n## 版本规范\n\nMorning UI采用[语义化版本控制规范](http://semver.org/lang/zh-CN/)。\n\n同时采用以下三种标记标示不同的版本：\n\n|标记|名称|说明|更新<br>频率|生产环境|\n|-|-|-|-|-|\n|<ui-badge class="circle ver-stable" size="s" color="theme">Stable</ui-badge>|稳定版本|此版本中的各个功能都经过一段时间的测试及使用，非常稳定|month|推荐使用|\n|<ui-badge class="circle ver-beta" size="s" color="neutral-9">Beta</ui-badge>|公开测试版本|包含了一些新的特性，并且修复了大部分问题的版本，相对较为稳定|week|可用<br>不推荐|\n|<ui-badge class="circle ver-canary" size="s">Canary</ui-badge>|金丝雀版本|包含大量新特性的版本，这个版本是实验性的，可能存在较多的问题<br><ui-small><ui-textcolor color="neutral-6">为开发者及早期用户设计的版本</ui-textcolor></ui-small>|~daily|请勿使用|\n\n版本发布情况请查看：[更新日志](/guide/logs.html)。\n\n## 更新日志规范\n\n更新日志包含了单个版本的变动，按变动类型分为：\n\n- 新特性\n- 改进\n- 修复\n- 废弃\n- 其他(包含文档、测试等变动)\n\n若是某个组件变动，需要写明组件的名字，如`ui-btn`。\n\n如果变动中包含了不兼容的变动，需要增加`升级注意事项`来写清楚变动情况及替代方案。\n\n## ROAD MAP\n\n- `0.10.0` : <ui-badge size="xxs" color="success">DONE</ui-badge>Morning UI的首个版本\n- `0.11.0` : <ui-badge size="xxs" color="success">DONE</ui-badge>同步HMP的所有组件，已于2018年春季发布\n- `0.12.0` : <ui-badge size="xxs" color="success">DONE</ui-badge>同步Element UI组件，已于2019年初发布\n- `0.13.0` : <ui-badge size="xxs" color="neutral-3">PLAN</ui-badge>同步iView组件，更好的支持Admin系统，计划2019年春季发布\n- `0.14.0` : <ui-badge size="xxs" color="neutral-3">PLAN</ui-badge>同步AntD组件，计划2019年夏季发布\n- `0.15.0` : <ui-badge size="xxs" color="neutral-3">PLAN</ui-badge>组件性能提升，计划2019年冬季发布\n- `0.16.0` : <ui-badge size="xxs" color="neutral-3">PLAN</ui-badge>同步Semantic UI组件，计划2020年初发布\n- `0.17.0` : <ui-badge size="xxs" color="neutral-3">PLAN</ui-badge>完成所有组件的测试覆盖，计划2020年中发布\n- `0.18.0` : <ui-badge size="xxs" color="neutral-3">PLAN</ui-badge>符合WCAG2标准，更好的浏览器兼容性，计划2020年夏季发布\n- `1.0.0` : <ui-badge size="xxs" color="neutral-3">PLAN</ui-badge>第一个正式版本，计划2021年发布\n\n')])])},u=[];r._withStripped=!0,t.d(n,"a",function(){return r}),t.d(n,"b",function(){return u})},30:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,u=t(3),i=(r=u)&&r.__esModule?r:{default:r};n.default={data:function(){return{page:"versionplan"}},components:{"doc-guide":i.default}},e.exports=n.default},633:function(e,n,t){"use strict";var r=i(t(1)),u=i(t(634));function i(e){return e&&e.__esModule?e:{default:e}}new r.default({el:"#root",render:function(e){return e(u.default)}})},634:function(e,n,t){"use strict";t.r(n);var r=t(292),u=t(29);for(var i in u)"default"!==i&&function(e){t.d(n,e,function(){return u[e]})}(i);t(635);var o=t(0),a=Object(o.a)(u.default,r.a,r.b,!1,null,null,null);a.options.__file="src/docs/pages/guide/versionplan/index.vue",n.default=a.exports},635:function(e,n,t){"use strict";var r=t(909);t.n(r).a},909:function(e,n){}});