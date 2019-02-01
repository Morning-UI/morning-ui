!function(n){function e(e){for(var o,c,u=e[0],s=e[1],a=e[2],l=0,f=[];l<u.length;l++)c=u[l],i[c]&&f.push(i[c][0]),i[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o]);for(d&&d(e);f.length;)f.shift()();return r.push.apply(r,a||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,u=1;u<t.length;u++){var s=t[u];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),n=c(c.s=t[0]))}return n}var o={},i={64:0},r=[];function c(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=n,c.c=o,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)c.d(t,o,function(e){return n[e]}.bind(null,o));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var d=s;r.push([527,0]),t()}({1:function(n,e){n.exports=Vue},176:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 开关 `<ui-switch>`\n\n<doc-component-status page="switch"></doc-component-status>\n\n[[[开始]]]\n\n定义开关，开关只存在布尔状态。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-switch form-name="姓名"></ui-switch>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:switch\n@defaultValue:true\n@attrs:open-mark="开" close-mark="关"\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:switch\n@defaultValue:true\n:::\n\n:::vue\n@name:open-note\n---\n#config\n>conf-desc\n开关开启的备注，显示开关的右侧。\n>conf-accept\n备注(支持HTML)\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-switch form-name="姓名" open-note="开启"></ui-switch>\n</div>\n---\n#demo\n>desc\n`open-note`和`close-note`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-switch form-name="姓名" close-note="关闭" open-note="开启"></ui-switch>\n</div>\n---\n#demo\n>desc\n支持HTML。\n>tpl\n<div style="width:300px;">\n    <ui-switch form-name="姓名" close-note="<span style=\'color:red\'>关闭</span>" open-note="<span style=\'color:green\'>开启</span>"></ui-switch>\n</div>\n:::\n\n:::vue\n@name:close-note\n---\n#config\n>conf-desc\n开关关闭的备注，显示的开发的左侧。\n>conf-accept\n备注(支持HTML)\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-switch form-note="姓名" close-note="关闭"></ui-switch>\n</div>\n:::\n\n:::vue\n@name:open-mark\n---\n#config\n>conf-desc\n开关开启的标记，显示开关的内部左侧，一般标记比较短只能容纳一个字符(比如icon)。\n>conf-accept\n标记内容(支持HTML)\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-switch form-note="姓名" open-mark="开"></ui-switch>\n</div>\n---\n#demo\n>desc\n`open-mark`和`close-mark`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-switch form-note="姓名" open-mark="开" close-mark="关"></ui-switch>\n</div>\n---\n#demo\n>desc\n使用icon。\n>tpl\n<div style="width:300px;">\n    <ui-switch form-note="姓名" open-mark="<i class=\'mo-icon mo-icon-check\'>" close-mark="<i class=\'mo-icon mo-icon-close\'>"></ui-switch>\n</div>\n:::\n\n:::vue\n@name:close-mark\n---\n#config\n>conf-desc\n开关开启的标记，显示开关的内部右侧，一般标记比较短只能容纳一个字符(比如icon)。\n>conf-accept\n标记内容(支持HTML)\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-switch form-note="姓名" close-mark="关"></ui-switch>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:switch\n@value:true\n@defaultValue:true\n:::\n\n:::vue\n@name:toggle([open])\n---\n#method\n>method-desc\n切换下拉按钮组是否显示。\n>method-args\n|open|YES|指定开关切换到开启或关闭，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-switch ref="demo1" form-name="姓名"></ui-switch>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo1\').toggle();">切换相反状态</ui-link>\n    <ui-link js="morning.findVM(\'demo1\').toggle(true);">切换至开启</ui-link>\n    <ui-link js="morning.findVM(\'demo1\').toggle(false);">切换至关闭</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:开关\n@uikey:switch\n@value:true\n@wrapStyle:width:300px;\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Boolean` : 布尔值\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成布尔值，使用`!!value`。\n\n#### 值格式\n\n`true`或`false`\n\n#### 默认值\n\n`false`\n\n:::preset\n@name:formValue\n@uikey:switch\n@uiname:开关\n@valueType:default\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/switch/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},i=[];o._withStripped=!0},527:function(n,e,t){"use strict";var o=r(t(1)),i=r(t(528));function r(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(i.default)}})},528:function(n,e,t){"use strict";t.r(e);var o=t(57),i=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);var c=t(176),u=t(0),s=!1;var a=function(n){s||t(767)},d=Object(u.a)(i.a,c.a,c.b,!1,a,null,null);d.options.__file="src/docs/pages/component/switch/index.vue",e.default=d.exports},57:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=t(2),r=(o=i)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"switch"}},components:{"doc-component":r.default}},n.exports=e.default},767:function(n,e){}});