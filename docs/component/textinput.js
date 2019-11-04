!function(n){function e(e){for(var i,o,d=e[0],r=e[1],a=e[2],c=0,f=[];c<d.length;c++)o=d[c],Object.prototype.hasOwnProperty.call(p,o)&&p[o]&&f.push(p[o][0]),p[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i]);for(l&&l(e);f.length;)f.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],i=!0,d=1;d<t.length;d++){var r=t[d];0!==p[r]&&(i=!1)}i&&(u.splice(e--,1),n=o(o.s=t[0]))}return n}var i={},p={79:0},u=[];function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=i,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)o.d(t,i,function(e){return n[e]}.bind(null,i));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],r=d.push.bind(d);d.push=e,d=d.slice();for(var a=0;a<d.length;a++)e(d[a]);var l=r;u.push([737,0]),t()}({1:function(n,e){n.exports=Vue},121:function(n,e,t){"use strict";t.r(e);var i=t(122),p=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);e.default=p.a},122:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,p=t(2),u=(i=p)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"textinput"}},components:{"doc-component":u.default}},n.exports=e.default},342:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 文本输入框 `<ui-textinput>`\n\n<doc-component-status page="textinput"></doc-component-status>\n\n[[[开始]]]\n\n定义文本输入框。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textinput form-name="姓名"></ui-textinput>\n</div>\n:::\n\n:::vue\n@name:支持前缀、后缀\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textinput form-name="姓名" prepend="@"></ui-textinput>\n</div>\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textinput form-name="百分比" append="%"></ui-textinput>\n</div>\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textinput form-name="价格" prepend="价格" append="元"></ui-textinput>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|`xs` / `s` / `m`|`m`|\n|色彩|不支持|-|\n|状态|`normal`<br/>`disabled`<br>`readonly`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>rules\nm,s,xs\n>tpl\n<div style="width:300px;">\n    <ui-textinput size="{$sizeKey}"  v-model="value" form-name="{$&sizeName}"></ui-textinput>\n    <br>\n    <ui-textinput size="{$sizeKey}" v-model="value" prepend="@" append="%" append-type="inline"></ui-textinput>\n</div>\n<br>\n>script\n{\n    data : {\n        value : \'默认文本\'\n    }\n}\n:::\n\n:::vue\n@name:状态\n---\n#renderer\n>name\nstate-repeat\n>rules\nnormal,disabled,readonly\n>tpl\n<div style="width:300px;">\n    <ui-textinput state="{$stateKey}" v-model="value" form-name="{$&stateName}"></ui-textinput>\n    <ui-textinput state="{$stateKey}" v-model="value" form-name="{$&stateName}" prepend="@" append="%" append-type="inline"></ui-textinput>\n</div>\n<br>\n>script\n{\n    data : {\n        value : \'默认文本\'\n    }\n}\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:textinput\n@defaultValue:\'默认文本\'\n:::\n\n:::vue\n@name:inside-name\n---\n#config\n>conf-desc\n在组件内显示的名称，和`form-name`互为补充。\n>conf-accept\n名称\n>conf-type\nString\n>conf-default\n`\'请输入\'`\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-textinput inside-name="姓名"></ui-textinput>\n</div>\n:::\n\n:::vue\n@name:hide-value\n---\n#config\n>conf-desc\n表单的数值不可见，一般用于密码表单。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n隐藏数值后表单的值在界面中不可见。\n>tpl\n<div style="width:300px;">\n    <ui-textinput hide-value v-model="value"></ui-textinput>\n</div>\n>script\n{\n    data : {\n        value : "this is password"\n    }\n}\n:::\n\n:::vue\n@name:prepend\n---\n#config\n>conf-desc\n表单前缀。\n>conf-accept\n任意字符串(支持HTML)\n>conf-type\nString\n>conf-default\n`undefined`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textinput form-name="姓名" prepend="@"></ui-textinput>\n</div>\n---\n#demo\n>desc\n也可以使用图标。\n>tpl\n<div style="width:300px;">\n    <ui-textinput form-name="内容" prepend="<i class=\'mo-icon mo-icon-block-4\'>"></ui-textinput>\n</div>\n:::\n\n:::vue\n@name:append\n---\n#config\n>conf-desc\n表单后缀。\n>conf-accept\n任意字符串(支持HTML)\n>conf-type\nString\n>conf-default\n`undefined`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textinput form-name="百分比" append="%"></ui-textinput>\n</div>\n---\n#demo\n>desc\n也可以使用图标。\n>tpl\n<div style="width:300px;">\n    <ui-textinput form-name="内容" append="<i class=\'mo-icon mo-icon-block-4\'>"></ui-textinput>\n</div>\n:::\n\n:::vue\n@name:prepend-type\n---\n#config\n>conf-desc\n表单前缀内容的展现类型。\n>conf-accept\n`\'block\'`：块状<br>`\'inline\'`：行内\n>conf-type\nString\n>conf-default\n`\'block\'`\n---\n#demo\n>desc\n行内类型的前缀。\n>tpl\n<div style="width:180px;">\n    <ui-textinput form-name="当天消费" prepend="支出" prepend-type="inline"></ui-textinput>\n</div>\n---\n#demo\n>desc\n配合`append`一起使用。\n>tpl\n<div style="width:180px;">\n    <ui-textinput form-name="当天消费" prepend="支出" append="人名币" prepend-type="inline"></ui-textinput>\n</div>\n---\n#demo\n>desc\n同时设置行内类型的前后缀。\n>tpl\n<div style="width:180px;">\n    <ui-textinput form-name="当天消费" prepend="支出" append="人名币" prepend-type="inline" append-type="inline"></ui-textinput>\n</div>\n:::\n\n:::vue\n@name:append-type\n---\n#config\n>conf-desc\n表单后缀内容的展现类型。\n>conf-accept\n`\'block\'`：块状<br>`\'inline\'`：行内\n>conf-type\nString\n>conf-default\n`\'block\'`\n---\n#demo\n>desc\n行内类型的后缀。\n>tpl\n<div style="width:180px;">\n    <ui-textinput form-name="当天消费" append="人名币" append-type="inline"></ui-textinput>\n</div>\n---\n#demo\n>desc\n配合`prepend`一起使用。\n>tpl\n<div style="width:180px;">\n    <ui-textinput form-name="当天消费" prepend="支出" append="人名币" append-type="inline"></ui-textinput>\n</div>\n---\n#demo\n>desc\n同时设置行内类型的前后缀。\n>tpl\n<div style="width:180px;">\n    <ui-textinput form-name="当天消费" prepend="支出" append="人名币" prepend-type="inline" append-type="inline"></ui-textinput>\n</div>\n:::\n\n:::vue\n@name:align\n---\n#config\n>conf-desc\n内容对齐方式。\n>conf-accept\n`\'left\'` : 左对齐<br>`\'center\'` : 居中对齐<br>`\'right\'` : 右对齐\n>conf-type\nString\n>conf-default\n`\'left\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textinput form-name="内容居中对齐" align="center"></ui-textinput>\n</div>\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textinput form-name="内容右对齐" align="right"></ui-textinput>\n</div>\n:::\n\n:::vue\n@name:maxlength\n---\n#config\n>conf-desc\n输入内容的最大长度。\n>conf-accept\n最大长度\n>conf-type\nNumber\n>conf-default\n`Infinity`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textinput form-name="姓名" :maxlength="10"></ui-textinput>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:textinput\n@value:\'Jim\'\n@defaultValue:\'Jim\'\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:文本输入框\n@uikey:textinput\n@value:\'Jim\'\n@wrapStyle:width:300px;\n:::\n\n:::vue\n@name:focus\n---\n#event\n>event-desc\n当表单聚焦后触发。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textinput @focus="echo" ref="demo2"></ui-textinput>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo2.console1\', \'focus event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:blur\n---\n#event\n>event-desc\n当表单失焦后触发。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textinput @blur="echo" ref="demo3"></ui-textinput>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo3.console1\', \'blur event!\');\n        }\n    }\n}\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`String` : 字符串\n\n#### 值过滤\n\n- 如果数值的类型是对象，会被转换成JSON序列化字符串。\n- 非对象且不支持的值类型，都会被尝试转换成字符串，使用`String(value)`。\n\n#### 值格式\n\n内容值字符串。\n\n#### 默认值\n\n`\'\'`\n\n:::preset\n@name:formValue\n@uikey:textinput\n@uiname:文本输入框\n@valueType:default\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/textinput/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},p=[];i._withStripped=!0,t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return p}))},737:function(n,e,t){"use strict";var i=u(t(1)),p=u(t(738));function u(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(p.default)}})},738:function(n,e,t){"use strict";t.r(e);var i=t(342),p=t(121);for(var u in p)"default"!==u&&function(n){t.d(e,n,(function(){return p[n]}))}(u);var o=t(0),d=Object(o.a)(p.default,i.a,i.b,!1,null,null,null);d.options.__file="src/docs/pages/component/textinput/index.vue",e.default=d.exports}});