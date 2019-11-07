!function(n){function e(e){for(var r,i,p=e[0],c=e[1],d=e[2],a=0,l=[];a<p.length;a++)i=p[a],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(u&&u(e);l.length;)l.shift()();return s.push.apply(s,d||[]),t()}function t(){for(var n,e=0;e<s.length;e++){for(var t=s[e],r=!0,p=1;p<t.length;p++){var c=t[p];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={61:0},s=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var p=window.webpackJsonp=window.webpackJsonp||[],c=p.push.bind(p);p.push=e,p=p.slice();for(var d=0;d<p.length;d++)e(p[d]);var u=c;s.push([774,0]),t()}({1:function(n,e){n.exports=Vue},157:function(n,e,t){"use strict";t.r(e);var r=t(158),o=t.n(r);for(var s in r)"default"!==s&&function(n){t.d(e,n,(function(){return r[n]}))}(s);e.default=o.a},158:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),s=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"progress"}},components:{"doc-component":s.default}},n.exports=e.default},360:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 进度条 `<ui-progress>`\n\n<doc-component-status page="progress"></doc-component-status>\n\n[[[开始]]]\n\n定义进度条，这是一个块元素。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:320px">\n    <ui-progress></ui-progress>\n</div>\n:::\n\n:::vue\n@name:设置进度\n---\n#demo\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="30"></ui-progress>\n</div>\n:::\n\n:::vue\n@name:标记正在处理\n---\n#demo\n>desc\n开启`progressing`配置后进度条会通过动画效果表示正在处理。\n>tpl\n<div style="width:320px">\n    <ui-progress progressing :percent="60"></ui-progress>\n</div>\n:::\n\n:::vue\n@name:环状进度条\n---\n#demo\n>tpl\n<div style="width:160px">\n    <ui-progress type="ring" :percent="30"></ui-progress>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部(除`transparent`)|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@layout:color\n---\n<div style="width:320px">\n    <ui-progress :percent="30" color="{$colorKey}"></ui-progress>\n</div>\n<br>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:percent\n---\n#config\n>conf-desc\n进度百分比。\n>conf-accept\n0%至100%\n>conf-type\nNumber\n>conf-default\n`0`\n---\n#demo\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="60"></ui-progress>\n</div>\n:::\n\n:::vue\n@name:progressing\n---\n#config\n>conf-desc\n是否显示正在处理的动画效果。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="60" progressing></ui-progress>\n</div>\n---\n#demo\n>desc\n配合`type`一起使用。\n>tpl\n<div style="width:160px">\n    <ui-progress :percent="60" progressing type="ring"></ui-progress>\n</div>\n:::\n\n:::vue\n@name:type\n---\n#config\n>conf-desc\n进度条类型。\n>conf-accept\n`\'line\'` : 直线型<br>`\'ring\'` : 环形\n>conf-type\nString\n>conf-default\n`\'line\'`\n---\n#demo\n>desc\n环形进度条。\n>tpl\n<div style="width:160px">\n    <ui-progress :percent="60" type="ring"></ui-progress>\n</div>\n:::\n\n:::vue\n@name:failed\n---\n#config\n>conf-desc\n显示失败状态。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n失败状态的进度条。\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="60" :failed="true"></ui-progress>\n</div>\n---\n#demo\n>desc\n配合`type`一起使用。\n>tpl\n<div style="width:160px">\n    <ui-progress :percent="60" type="ring" :failed="true"></ui-progress>\n</div>\n:::\n\n:::vue\n@name:status\n---\n#config\n>conf-desc\n设置进度条的状态。\n>conf-accept\n`\'normal\'` : 正常<br>`\'failed\'` : 失败<br>`\'success\'` : 成功<br>`\'warning\'` : 警告<br>\n>conf-type\nString\n>conf-default\n`\'normal\'`\n---\n#demo\n>desc\n失败状态的进度条。\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="50" status="failed"></ui-progress>\n</div>\n---\n#demo\n>desc\n成功状态的进度条。\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="100" status="success"></ui-progress>\n</div>\n---\n#demo\n>desc\n警告状态的进度条。\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="50" status="warning"></ui-progress>\n</div>\n---\n#demo\n>desc\n`status`配置配合`type`一起使用。\n>tpl\n<div style="width:160px">\n    <ui-progress :percent="50" status="warning" type="ring"></ui-progress>\n</div>\n:::\n\n:::vue\n@name:format\n---\n#config\n>conf-desc\n格式化进度文案显示。\n>conf-accept\n进度文案格式化函数(函数的第一个参数是当前进度的数值)\n>conf-type\nFunction\n>conf-default\n`percent => (`${percent}%`)`\n---\n#demo\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="100" :format="format"></ui-progress>\n</div>\n>script\n{\n    methods : {\n        format : percent => {\n            return (percent === 100) ? `完成` : `${percent}%`;\n        }\n    }\n}\n:::\n\n:::vue\n@name:mark-range\n---\n#config\n>conf-desc\n标记进度条的某部分。这是一个数组每项都是一个标记段，标记段是一个数组或对象：<br><br>如果是数组：长度为2，分别表示开始和结束。比如：`[[10, 20], [50, 70]]`会标记两段，第一段从数值10开始到20结束，第二段从数值50开始到70结束。<br><br>如果是对象，包含以下键值：<br>`start`：开始<br>`end`：结束<br>`color`：色彩，支持[设计/色彩](/design/color.html)中所有颜色，默认为`neutral-4`。也可采用HEX色值，比如`#333333`。<br><br>注意：`end`不能大于`100`。\n>conf-accept\n数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style="width:320px;">\n    <ui-progress :percent="30" :mark-range="[[0, 40], [50, 70]]"></ui-progress>\n</div>\n---\n#demo\n>desc\n通过色彩设置标记的颜色。\n>tpl\n<div style="width:320px;">\n    <ui-progress\n        :percent="30"\n        :mark-range="[{\n            start : 0,\n            end : 40,\n            color : \'neutral-5\'\n        }, {\n            start : 70,\n            end : 90,\n            color : \'light-theme\'\n        }]"\n    ></ui-progress>\n</div>\n---\n#demo\n>desc\n通过HEX色值设置标记的颜色。\n>tpl\n<div style="width:320px;">\n    <ui-progress\n        :percent="30"\n        :mark-range="[{\n            start : 0,\n            end : 40,\n            color : \'#A151DA\'\n        }, {\n            start : 70,\n            end : 90,\n            color : \'#FFA5B6\'\n        }]"\n    ></ui-progress>\n</div>\n---\n#demo\n>desc\n配合`type`配置一起使用。\n>tpl\n<div style="width:160px;">\n    <ui-progress\n        type="ring"\n        :percent="30"\n        :mark-range="[{\n            start : 0,\n            end : 40,\n            color : \'#A151DA\'\n        }, {\n            start : 70,\n            end : 90,\n            color : \'#FFA5B6\'\n        }]"\n    ></ui-progress>\n</div>\n:::\n\n:::vue\n@name:note-position\n---\n#config\n>conf-desc\n进度文案展示的位置。\n>conf-accept\n`\'left\'` : 左侧<br>`\'right\'` : 右侧\n>conf-type\nString\n>conf-default\n`\'right\'`\n---\n#demo\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="60" note-position="left"></ui-progress>\n</div>\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当进度变化时触发。\n---\n#demo\n>tpl\n<div style="width:320px">\n    <ui-progress :percent="percent" ref="demo1" @emit="echo"></ui-progress>\n    <ui-link @emit="changePercent">点击触发emit事件</ui-link>\n</div>\n>script\n{\n    data : {\n        percent : 0\n    },\n    methods : {\n        changePercent : function () {\n           this.percent = 50;\n        },\n        echo : function () {\n            console.log(\'demo1.console1\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@layout:lifecycle-event\n---\nprogress\n进度条\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/progress/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];r._withStripped=!0,t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o}))},774:function(n,e,t){"use strict";var r=s(t(1)),o=s(t(775));function s(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},775:function(n,e,t){"use strict";t.r(e);var r=t(360),o=t(157);for(var s in o)"default"!==s&&function(n){t.d(e,n,(function(){return o[n]}))}(s);var i=t(0),p=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);p.options.__file="src/docs/pages/component/progress/index.vue",e.default=p.exports}});