!function(n){function e(e){for(var o,i,c=e[0],a=e[1],d=e[2],l=0,p=[];l<c.length;l++)i=c[l],r[i]&&p.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o]);for(f&&f(e);p.length;)p.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],o=!0,c=1;c<t.length;c++){var a=t[c];0!==r[a]&&(o=!1)}o&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},r={24:0},u=[];function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=a;u.push([845,0]),t()}({1:function(n,e){n.exports=Vue},229:function(n,e,t){"use strict";t.r(e);var o=t(230),r=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);e.default=r.a},230:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(2),u=(o=r)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"counter"}},components:{"doc-component":u.default}},n.exports=e.default},383:function(n,e,t){"use strict";var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 计数器 `<ui-counter>`\n\n<doc-component-status page="counter"></doc-component-status>\n\n[[[开始]]]\n\n定义计数器，这是一个块元素，具有最小宽度。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:130px;">\n    <ui-counter form-name="数字"></ui-counter>\n</div>\n:::\n\n#### 长按加速\n\n当你长按计数器的按钮时，会增加计数器变化的频率。\n\n[[[形态]]]\n\n:::preset\n@name:formStatusWithSize\n@uikey:counter\n@defaultValue:5\n@wrapStyle:width:130px;\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:counter\n@defaultValue:5\n@wrapStyle:width:130px;\n:::\n\n:::vue\n@name:step\n---\n#config\n>conf-desc\n计数器每次变动的步长，用户点击增加或减少时最小的数值调整单位。\n>conf-accept\n大于0的数字\n>conf-type\nNumber\n>conf-default\n`1`\n---\n#demo\n>tpl\n<div style="width:130px;">\n    <ui-counter form-name="数字" step="3"></ui-counter>\n</div>\n---\n#demo\n>tpl\n<div style="width:130px;">\n    <ui-counter form-name="数字" step="1.25"></ui-counter>\n</div>\n:::\n\n:::vue\n@name:max\n---\n#config\n>conf-desc\n计数器的最大值。\n>conf-accept\n数字\n>conf-type\nNumber\n>conf-default\n`Infinity`\n---\n#demo\n>tpl\n<div style="width:130px;">\n    <ui-counter form-name="数字" max="5"></ui-counter>\n</div>\n:::\n\n:::vue\n@name:min\n---\n#config\n>conf-desc\n计数器的最小值。\n>conf-accept\n数字\n>conf-type\nNumber\n>conf-default\n`-Infinity`\n---\n#demo\n>tpl\n<div style="width:130px;">\n    <ui-counter form-name="数字" min="-5"></ui-counter>\n</div>\n:::\n\n:::vue\n@name:formater\n---\n#config\n>conf-desc\n计数器显示格式化，这是一个函数。第一个参数是当前的数值，返回一个字符串用于显示。<br>必须和`parser`配置一起使用，互为逆向函数。<br>注意：若设置了`precision`此函数的参数需要作为字符串处理，否则会丢失精度。\n>conf-accept\n函数\n>conf-type\nFunction\n>conf-default\n`value => value`\n---\n#demo\n>tpl\n<div style="width:130px;">\n    <ui-counter form-name="数字" :formater="(value => value + \'%\')" :parser="(value => +value.replace(/%$/, \'\'))"></ui-counter>\n</div>\n:::\n\n:::vue\n@name:parser\n---\n#config\n>conf-desc\n计数器显示内容的解析函数，这是一个函数。第一个参数是当前显示的内容，返回一个数字表示解析后对应的数值。<br>必须和`formater`配置一起使用，互为逆向函数。<br>注意：若设置了`precision`需要解析小数点，否则会丢失精度。\n>conf-accept\n函数\n>conf-type\nFunction\n>conf-default\n`value => value`\n---\n#demo\n>tpl\n<div style="width:130px;">\n    <ui-counter form-name="数字" :formater="(value => value + \'%\')" :parser="(value => +value.replace(/%$/, \'\'))"></ui-counter>\n</div>\n:::\n\n:::vue\n@name:precision\n---\n#config\n>conf-desc\n数字的精度，若为`auto`则会取数字的最精确位数。若设置了具体的精度位数则在采用四舍五入。\n>conf-accept\n精度(小数点后位数)\n>conf-type\nString : 只能设为`auto`，表示自动精度<br>Number : 精度为小数点后几位\n>conf-default\n`\'auto\'`\n---\n#demo\n>desc\n整数精度。\n>tpl\n<div style="width:130px;">\n    <ui-counter form-name="数字" step="1.4" :precision="0"></ui-counter>\n</div>\n---\n#demo\n>desc\n两位小数精度。\n>tpl\n<div style="width:130px;">\n    <ui-counter form-name="数字" step="0.2" :precision="2"></ui-counter>\n</div>\n:::\n\n:::vue\n@name:controls-position\n---\n#config\n>conf-desc\n按钮位置。\n>conf-accept\n`\'both\'`<br>`\'right\'`\n>conf-type\nString\n>conf-default\n`\'both\'`\n---\n#demo\n>desc\n位于右侧的按钮。\n>tpl\n<div style="width:130px;">\n    <ui-counter form-name="数字" controls-position="right"></ui-counter>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:counter\n@value:5\n@defaultValue:5\n@wrapStyle:width:130px;\n:::\n\n:::vue\n@name:add([steps])\n---\n#method\n>method-desc\n计数器增加指定数量的步长。\n>method-args\n|steps|YES|数值增加几个单位(单位步长)。|数字|`Number`<br>`Undefined`|`1`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:130px;">\n    <ui-counter form-name="数字" ref="demo1"></ui-counter>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo1\').add();">增加1个单位步长</ui-link>\n    <ui-link js="morning.findVM(\'demo1\').add(5);">增加5个单位步长</ui-link>\n</div>\n:::\n\n:::vue\n@name:sub([steps])\n---\n#method\n>method-desc\n计数器减少指定数量的步长。\n>method-args\n|steps|YES|数值减少几个单位(单位步长)。|数字|`Number`<br>`Undefined`|`1`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style="width:130px;">\n    <ui-counter form-name="数字" ref="demo2"></ui-counter>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo2\').sub();">减少1个单位步长</ui-link>\n    <ui-link js="morning.findVM(\'demo2\').sub(5);">减少5个单位步长</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:计数器\n@uikey:counter\n@value:5\n@wrapStyle:width:130px;\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Number` : 数字\n\n#### 值过滤\n\n- 所有包含非数字及小数点的字符串，会过滤非数字的字符，如果存在多个小数点取最后一个\n- 非数字类型会转换成数字，如转换后为`NaN`则取`0`\n- 超过`max`配置的数字，会设置为`max`\n- 低于`min`配置的数字，会设置为`min`\n\n#### 值格式\n\n数字\n\n#### 默认值\n\n`0`\n\n:::preset\n@name:formValue\n@uikey:counter\n@uiname:计数器\n@valueType:counter\n@wrapStyle:width:130px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/counter/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},r=[];o._withStripped=!0,t.d(e,"a",function(){return o}),t.d(e,"b",function(){return r})},845:function(n,e,t){"use strict";var o=u(t(1)),r=u(t(846));function u(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},846:function(n,e,t){"use strict";t.r(e);var o=t(383),r=t(229);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);var i=t(0),c=Object(i.a)(r.default,o.a,o.b,!1,null,null,null);c.options.__file="src/docs/pages/component/counter/index.vue",e.default=c.exports}});