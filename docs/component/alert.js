!function(n){function e(e){for(var r,a,l=e[0],c=e[1],u=e[2],p=0,d=[];p<l.length;p++)a=l[p],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(s&&s(e);d.length;)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,l=1;l<t.length;l++){var c=t[l];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},o={2:0},i=[];function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=c;i.push([647,0]),t()}({1:function(n,e){n.exports=Vue},118:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),i=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"alert"}},components:{"doc-component":i.default}},n.exports=e.default},236:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 告示 `<ui-alert>`\n\n<doc-component-status page="alert"></doc-component-status>\n\n[[[开始]]]\n\n定义一个告示，告示是一次性的信息展示组件，当告示被关闭后组件会被销毁。\n\n告示的内容支持HTML。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-alert>展示的内容</ui-alert>\n:::\n\n:::vue\n@name:不同类型的告示\n---\n#demo\n>desc\n通过`type`配置可以设置不通的告示类型。\n>tpl\n<div>\n    <ui-alert type="normal">展示的内容</ui-alert><br>\n    <ui-alert type="success">展示的内容</ui-alert><br>\n    <ui-alert type="warning">展示的内容</ui-alert><br>\n    <ui-alert type="danger">展示的内容</ui-alert><br>\n    <ui-alert type="primary">展示的内容</ui-alert><br>\n    <ui-alert type="minor">展示的内容</ui-alert><br>\n    <ui-alert type="info">展示的内容</ui-alert>\n</div>\n:::\n\n:::vue\n@name:显示图标\n---\n#demo\n>desc\n每个类型的告示内置了默认图标，通过`show-icon`配置开启。\n>tpl\n<div>\n    <ui-alert show-icon type="normal">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="success">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="warning">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="danger">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="primary">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="minor">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="info">展示的内容</ui-alert>\n</div>\n---\n#demo\n>desc\n告示的内容支持HTML，你也可以设置自定义的图标。\n>tpl\n<ui-alert><i class="mo-icon mo-icon-list"></i> 展示的内容</ui-alert><br>\n:::\n\n:::vue\n@name:可关闭\n---\n#demo\n>tpl\n<ui-alert can-close>展示的内容</ui-alert>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[配置]]]\n\n:::vue\n@name:type\n---\n#config\n>conf-desc\n告示的类型。\n>conf-accept\n`\'normal\'` : 正常<br>`\'success\'` : 完成(成功)<br>`\'warning\'` : 警告<br>`\'danger\'` : 危险(失败)<br>`\'primary\'` : 重要<br>`\'minor\'` : 次要(疑问)<br>`\'info\'` : 信息\n>conf-type\nString\n>conf-default\n`\'normal\'`\n---\n#demo\n>tpl\n<div>\n    <ui-alert show-icon type="normal">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="success">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="warning">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="danger">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="primary">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="minor">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="info">展示的内容</ui-alert>\n</div>\n:::\n\n:::vue\n@name:show-icon\n---\n#config\n>conf-desc\n显示告示的默认图标，不同的`type`图标也不一样。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n每个类型的告示内置了默认图标，通过`show-icon`配置开启。\n>tpl\n<div>\n    <ui-alert show-icon type="normal">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="success">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="warning">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="danger">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="primary">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="minor">展示的内容</ui-alert><br>\n    <ui-alert show-icon type="info">展示的内容</ui-alert>\n</div>\n:::\n\n:::vue\n@name:can-close\n---\n#config\n>conf-desc\n告示可以被主动关闭(显示关闭链接)。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div>\n    <ui-alert can-close type="normal">展示的内容</ui-alert><br>\n    <ui-alert can-close type="success">展示的内容</ui-alert><br>\n    <ui-alert can-close type="warning">展示的内容</ui-alert><br>\n    <ui-alert can-close type="danger">展示的内容</ui-alert><br>\n    <ui-alert can-close type="primary">展示的内容</ui-alert><br>\n    <ui-alert can-close type="minor">展示的内容</ui-alert><br>\n    <ui-alert can-close type="info">展示的内容</ui-alert>\n</div>\n:::\n\n:::vue\n@name:close-content\n---\n#config\n>conf-desc\n关闭链接的内容(支持HTML)。\n>conf-accept\n关闭的DOM字符串\n>conf-type\nString\n>conf-default\n`\'&lt;i class="mo-icon mo-icon-close">&lt;/i>\'`\n---\n#demo\n>desc\n自定义关闭的DOM。\n>tpl\n<div>\n    <ui-alert can-close close-content="关闭">展示的内容</ui-alert>\n</div>\n:::\n\n:::vue\n@name:align\n---\n#config\n>conf-desc\n告示内容的对齐方式。\n>conf-accept\n`\'left\'` : 左对齐<br>`\'center\'` : 居中对齐<br>`\'right\'` : 右对齐\n>conf-type\nString\n>conf-default\n`\'left\'`\n---\n#demo\n>desc\n居中对齐。\n>tpl\n<ui-alert align="center">展示的内容</ui-alert>\n---\n#demo\n>desc\n居中对齐配合`can-close`和`show-icon`。\n>tpl\n<ui-alert align="center" show-icon can-close>展示的内容</ui-alert>\n---\n#demo\n>desc\n右对齐。\n>tpl\n<ui-alert align="right">展示的内容</ui-alert>\n---\n#demo\n>desc\n右对齐配合`can-close`和`show-icon`。\n>tpl\n<ui-alert align="right" show-icon can-close>展示的内容</ui-alert>\n:::\n\n:::vue\n@name:title\n---\n#config\n>conf-desc\n告示的标题(仅支持文本)，若为空字符串则不显示。\n>conf-accept\n标题字符串\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<ui-alert title="标题内容">展示的内容</ui-alert>\n---\n#demo\n>desc\n配置`can-close`和`show-icon`。\n>tpl\n<ui-alert title="标题内容" show-icon can-close>展示的内容</ui-alert>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:close()\n---\n#method\n>method-desc\n关闭告示。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-alert ref="demo1">展示的内容</ui-alert>\n    <br><br>\n    <ui-link js="morning.findVM(\'demo1\').close();">关闭</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:close\n---\n#event\n>event-desc\n当告示被关闭时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-alert @close="echo" can-close>点击关闭触发</ui-alert>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo2.console1\', \'close event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@layout:lifecycle-event\n---\nalert\n告示\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/alert/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];r._withStripped=!0},647:function(n,e,t){"use strict";var r=i(t(1)),o=i(t(648));function i(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},648:function(n,e,t){"use strict";t.r(e);var r=t(118),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);var a=t(236),l=t(0),c=!1;var u=function(n){c||t(885)},s=Object(l.a)(o.a,a.a,a.b,!1,u,null,null);s.options.__file="src/docs/pages/component/alert/index.vue",e.default=s.exports},885:function(n,e){}});