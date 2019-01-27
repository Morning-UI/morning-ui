!function(n){function e(e){for(var i,o,s=e[0],l=e[1],u=e[2],a=0,p=[];a<s.length;a++)o=s[a],d[o]&&p.push(d[o][0]),d[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(n[i]=l[i]);for(c&&c(e);p.length;)p.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],i=!0,s=1;s<t.length;s++){var l=t[s];0!==d[l]&&(i=!1)}i&&(r.splice(e--,1),n=o(o.s=t[0]))}return n}var i={},d={58:0};var r=[];function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=i,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},o.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;r.push([367,0]),t()}({1:function(n,e){n.exports=Vue},179:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return d});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 滑块输入 `<ui-slider>`\n\n<doc-component-status page="slider"></doc-component-status>\n\n[[[开始]]]\n\n定义一个滑块输入。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider form-name="进度"></ui-slider>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:slider\n@defaultValue:40\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:slider\n@defaultValue:40\n:::\n\n:::vue\n@name:max\n---\n#config\n>conf-desc\n滑块输入允许输入的最大值。\n>conf-accept\n数字\n>conf-type\nNumber\n>conf-default\n`100`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider :max="10"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:min\n---\n#config\n>conf-desc\n滑块输入允许输入的最小值。\n>conf-accept\n数字\n>conf-type\nNumber\n>conf-default\n`0`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider :min="50"></ui-slider>\n</div>\n---\n#demo\n>desc\n`max`和`min`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-slider :min="1000" max="2000"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:step\n---\n#config\n>conf-desc\n滑动的步长，用户移动滑块时最小的数值调整单位。\n>conf-accept\n大于0的数字\n>conf-type\nNumber\n>conf-default\n`1`\n---\n#demo\n>desc\n每次调整以5为最小单位。\n>tpl\n<div style="width:300px;">\n    <ui-slider :step="5"></ui-slider>\n</div>\n---\n#demo\n>desc\n`step`也可以不是正数。\n>tpl\n<div style="width:300px;">\n    <ui-slider :step="1.2"></ui-slider>\n</div>\n---\n#demo\n>desc\n`step`配合`max`、`min`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-slider :step="100" :min="1000" :max="2000"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:show-tip\n---\n#config\n>conf-desc\n在移动时显示滑块当前的数值。\n>conf-accept\n`true`<br/>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n不显示数值。\n>tpl\n<div style="width:300px;">\n    <ui-slider :show-tip="false"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:tip-formatter\n---\n#config\n>conf-desc\n格式化滑块显示的数值。<br/>接受一个函数，函数的第一个参数是滑块的数值(数字)。<br/>如果开启了`is-range`则是一个数组，数组包含两个数字，分别是开始和结束两个滑块的数值。<br/><br/>此函数必须返回数字或字符串内容，将会显示在滑块上方。\n>conf-accept\n格式化函数\n>conf-type\nFunction\n>conf-default\n`value => value`\n---\n#demo\n>desc\n不显示数值。\n>tpl\n<div style="width:300px;">\n    <ui-slider :tip-formatter="(value) => `进度：${value}%`"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:prepend\n---\n#config\n>conf-desc\n滑块前部显示内容（太长的内容会被隐藏）。\n>conf-accept\n内容字符串(可使用HTML)\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider prepend="进度"></ui-slider>\n</div>\n---\n#demo\n>desc\n也可以使用HTML内容。\n>tpl\n<div style="width:300px;">\n    <ui-slider :prepend="\'<i class=\\\'mo-icon-set\\\'></i>\'"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:append\n---\n#config\n>conf-desc\n滑块后部显示内容（太长的内容会被隐藏）。\n>conf-accept\n内容字符串(可使用HTML)\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider append="进度"></ui-slider>\n</div>\n---\n#demo\n>desc\n也可以使用HTML内容。\n>tpl\n<div style="width:300px;">\n    <ui-slider :append="\'<i class=\\\'mo-icon-set\\\'></i>\'"></ui-slider>\n</div>\n---\n#demo\n>desc\n`prepend`和`append`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-slider :prepend="\'<i class=\\\'mo-icon-love-o\\\'></i>\'" :append="\'<i class=\\\'mo-icon-love-f\\\'></i>\'"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:show-point\n---\n#config\n>conf-desc\n显示步长的间断点(按`step`配置)。若间断点过于密集，组件会自动调整隐藏部分间断点。\n>conf-accept\n`true`<br/>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider :step="10" show-point></ui-slider>\n</div>\n---\n#demo\n>desc\n如果间断点过于密集，会自动隐藏部分间断点。\n>tpl\n<div style="width:300px;">\n    <ui-slider show-point :min="30" :max="260" :step="2"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:mark-range\n---\n#config\n>conf-desc\n标记滑动条的某部分。这是一个数组每项都是一个标记段，标记段是一个长度为2的数组，分别表示开始和结束。<br>比如：`[[10, 20], [30, 40]]`会标记两段，第一段从数值10开始到20结束，第二段从数值30开始到40结束。\n>conf-accept\n数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider :mark-range="[[0, 20], [50, 70]]"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:show-counter\n---\n#config\n>conf-desc\n显示计数器。\n>conf-accept\n`true`<br/>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider show-counter></ui-slider>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:slider\n@value:40\n@defaultValue:40\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:滑块输入\n@uikey:slider\n@value:40\n@wrapStyle:width:300px;\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Number` : 数字\n\n#### 值过滤\n\n- 如果数值的类型不是数字，会被转换成数字(通过`Number(n)`)\n- 如果数字是NaN，则取`min`配置的最小值\n- 如果数字小于`min`配置，则取`min`配置的最小值\n- 如果数字大于`max`配置，则取`max`配置的最大值\n\n#### 值格式\n\n取值的数字。\n\n#### 默认值\n\n`0`(`min`配置的最小值)\n\n:::preset\n@name:formValue\n@uikey:slider\n@uiname:滑块输入\n@valueType:slider\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/slider/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},d=[];i._withStripped=!0},366:function(n,e,t){"use strict";t.r(e);var i=t(61),d=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,function(){return i[n]})}(r);var o=t(179),s=t(0),l=!1;var u=function(n){l||t(767)},c=Object(s.a)(d.a,o.a,o.b,!1,u,null,null);c.options.__file="src/docs/pages/component/slider/index.vue",e.default=c.exports},367:function(n,e,t){"use strict";var i=r(t(1)),d=r(t(366));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(d.default)}})},61:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,d=t(2),r=(i=d)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"slider"}},components:{"doc-component":r.default}},n.exports=e.default},767:function(n,e){}});