!function(n){function e(e){for(var r,s,i=e[0],a=e[1],c=e[2],f=0,p=[];f<i.length;f++)s=i[f],u[s]&&p.push(u[s][0]),u[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(_&&_(e);p.length;)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,i=1;i<t.length;i++){var a=t[i];0!==u[a]&&(r=!1)}r&&(o.splice(e--,1),n=s(s.s=t[0]))}return n}var r={},u={96:0};var o=[];function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=r,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},s.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},s.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var _=a;o.push([439,0]),t()}({1:function(n,e){n.exports=Vue},100:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,u=t(3),o=(r=u)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"report"}},components:{"doc-guide":o.default}},n.exports=e.default},215:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return u});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 反馈问题\n\nMorningUI采用Github Issue管理反馈的问题，如果你在使用过程中发现Bug或希望支持新的功能，可以通过[Github Issue](https://github.com/Morning-UI/morning-ui/issues)提出。\n\n点击`New Issue`按钮，你可以根据诉求选择对应的Issue预设模板：\n\n<img src=\"http://h0.hucdn.com/open/201820/42e498c6beb2478f_1590x444.png\" alt=\"\" width=\"600\">\n\n也可以点击`Open a regular issue`来创建一个无模板的Issue。\n\n### Issue模板\n\n为了便于开发者快速了解你的诉求，我们建议Issue请按照以下模板填写：\n\n#### BUG报告\n\n```\n__问题__\n\n一个清楚简洁的问题描述。\n\n__环境__\n\n- Morning UI版本：填写你使用的Morning UI版本\n- 浏览器：填写你使用的浏览器及版本\n- 你也可以填写更多环境特征\n\n__重现步骤__\n\n1. Go to '...'\n2. Click on '....'\n3. Scroll down to '....'\n4. See error\n\n__期望的结果__\n\n清晰和简洁的描述你预期会发生什么，如果可以请添加屏幕截图。\n\n__实际的结果__\n\n清晰和简洁的描述实际发生了什么，如果可以请添加屏幕截图。\n\n__其他__\n\n填写更多你想阐述的内容。\n```\n    \n#### 功能请求\n\n```\n__解决了什么__\n\n清晰简洁的说明这个功能解决了什么问题。\n\n__你的解决方案__\n\n如果你已经有一个解决思路了，清晰简洁地描述一下。\n\n__你考虑过的选择__\n\n你已经考虑的任何替代解决方案或功能的清晰简洁的描述。\n\n__其他__\n\n填写更多你想阐述的内容。\n```\n\n填写完毕后，请根据问题的类型添加对应的标签：\n\n- bug report : BUG报告\n- feature request : 功能请求\n\n### 跟踪进展\n\n当你通过Issue反馈问题后，MorningUI的开发者会对Issue添加标签，你可以根据标签的情况了解进展：\n\n- need repro : 需要提供更多的复现内容\n- pending : 待定\n- wont solve : 暂时不会解决\n- bug confirmed : 报告的bug被开发者确认\n- intend to solve : 计划解决\n- in progress : 解决中\n- in review : 审查中\n- launched : 已解决并发布\n\n### 其他\n\n除了反馈问题外，还会有一些讨论或开发性质的Issue：\n\n- important : 重要\n- discussion : 讨论\n- document : 文档相关\n- feature : 新功能开发\n- fix : 修复开发\n\n")])])},u=[];r._withStripped=!0},438:function(n,e,t){"use strict";t.r(e);var r=t(100),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);var s=t(215),i=t(0),a=!1;var c=function(n){a||t(832)},_=Object(i.a)(u.a,s.a,s.b,!1,c,null,null);_.options.__file="src/docs/pages/guide/report/index.vue",e.default=_.exports},439:function(n,e,t){"use strict";var r=o(t(1)),u=o(t(438));function o(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(u.default)}})},832:function(n,e){}});