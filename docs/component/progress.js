!function(n){function e(e){for(var r,s,u=e[0],p=e[1],c=e[2],a=0,l=[];a<u.length;a++)s=u[a],o[s]&&l.push(o[s][0]),o[s]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(n[r]=p[r]);for(d&&d(e);l.length;)l.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,u=1;u<t.length;u++){var p=t[u];0!==o[p]&&(r=!1)}r&&(i.splice(e--,1),n=s(s.s=t[0]))}return n}var r={},o={53:0},i=[];function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=r,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)s.d(t,r,function(e){return n[e]}.bind(null,r));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var d=p;i.push([549,0]),t()}({1:function(n,e){n.exports=Vue},187:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 进度条 `<ui-progress>`\n\n<doc-component-status page="progress"></doc-component-status>\n\n[[[开始]]]\n\n定义进度条，这是一个块元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:320px">\n    <ui-progress></ui-progress>\n</div>\n:::\n\n:::vue\n@name:设置进度\n---\n#demo\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="30"></ui-progress>\n</div>\n:::\n\n:::vue\n@name:标记正在处理\n---\n#demo\n>desc\n开启`progressing`配置后进度条会通过动画效果表示正在处理。\n>tpl\n<div style="width:320px">\n    <ui-progress progressing :percent="60"></ui-progress>\n</div>\n:::\n\n:::vue\n@name:环状进度条\n---\n#demo\n>tpl\n<div style="width:160px">\n    <ui-progress type="ring" :percent="30"></ui-progress>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n:::vue\n@layout:color\n---\n<div style="width:320px">\n    <ui-progress :percent="30" color="{$colorKey}"></ui-progress>\n</div>\n<br>\n:::\n\n:::vue\n@name:percent\n---\n#config\n>conf-desc\n进度百分比。\n>conf-accept\n0%至100%\n>conf-type\nNumber\n>conf-default\n`0`\n---\n#demo\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="60"></ui-progress>\n</div>\n:::\n\n:::vue\n@name:progressing\n---\n#config\n>conf-desc\n是否显示正在处理的动画效果。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="60" progressing></ui-progress>\n</div>\n---\n#demo\n>desc\n配合`type`一起使用。\n>tpl\n<div style="width:160px">\n    <ui-progress :percent="60" progressing type="ring"></ui-progress>\n</div>\n:::\n\n:::vue\n@name:type\n---\n#config\n>conf-desc\n进度条类型。\n>conf-accept\n`\'line\'` : 直线型<br>`\'ring\'` : 环形\n>conf-type\nString\n>conf-default\n`\'line\'`\n---\n#demo\n>desc\n环形进度条。\n>tpl\n<div style="width:160px">\n    <ui-progress :percent="60" type="ring"></ui-progress>\n</div>\n:::\n\n:::vue\n@name:failed\n---\n#config\n>conf-desc\n显示失败状态。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n失败状态的进度条。\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="60" :failed="true"></ui-progress>\n</div>\n---\n#demo\n>desc\n配合`type`一起使用。\n>tpl\n<div style="width:160px">\n    <ui-progress :percent="60" type="ring" :failed="true"></ui-progress>\n</div>\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当进度变化时触发。\n---\n#demo\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="percent" ref="demo1" @emit="echo"></ui-progress>\n    <ui-link @emit="changePercent">点击触发emit事件</ui-link>\n</div>\n>script\n{\n    data : {\n        percent : 0\n    },\n    methods : {\n        changePercent : function () {\n           this.percent = 50;\n        },\n        echo : function () {\n            console.log(\'demo1.console1\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@layout:lifecycle-event\n---\nprogress\n进度条\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/progress/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];r._withStripped=!0},549:function(n,e,t){"use strict";var r=i(t(1)),o=i(t(550));function i(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},550:function(n,e,t){"use strict";t.r(e);var r=t(68),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);var s=t(187),u=t(0),p=!1;var c=function(n){p||t(789)},d=Object(u.a)(o.a,s.a,s.b,!1,c,null,null);d.options.__file="src/docs/pages/component/progress/index.vue",e.default=d.exports},68:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),i=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"progress"}},components:{"doc-component":i.default}},n.exports=e.default},789:function(n,e){}});