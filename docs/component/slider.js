!function(n){function e(e){for(var t,o,l=e[0],s=e[1],u=e[2],a=0,p=[];a<l.length;a++)o=l[a],Object.prototype.hasOwnProperty.call(d,o)&&d[o]&&p.push(d[o][0]),d[o]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t]);for(c&&c(e);p.length;)p.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var n,e=0;e<r.length;e++){for(var i=r[e],t=!0,l=1;l<i.length;l++){var s=i[l];0!==d[s]&&(t=!1)}t&&(r.splice(e--,1),n=o(o.s=i[0]))}return n}var t={},d={66:0},r=[];function o(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=n,o.c=t,o.d=function(n,e,i){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)o.d(i,t,function(e){return n[e]}.bind(null,t));return i},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;r.push([764,0]),i()}({1:function(n,e){n.exports=Vue},147:function(n,e,i){"use strict";i.r(e);var t=i(148),d=i.n(t);for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);e.default=d.a},148:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,d=i(2),r=(t=d)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"slider"}},components:{"doc-component":r.default}},n.exports=e.default},355:function(n,e,i){"use strict";var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 滑块输入 `<ui-slider>`\n\n<doc-component-status page="slider"></doc-component-status>\n\n[[[开始]]]\n\n定义一个滑块输入。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider form-name="进度"></ui-slider>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatusWithSize\n@uikey:slider\n@defaultValue:40\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:slider\n@defaultValue:40\n:::\n\n:::vue\n@name:max\n---\n#config\n>conf-desc\n滑块输入允许输入的最大值。\n>conf-accept\n数字\n>conf-type\nNumber\n>conf-default\n`100`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider :max="10"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:min\n---\n#config\n>conf-desc\n滑块输入允许输入的最小值。\n>conf-accept\n数字\n>conf-type\nNumber\n>conf-default\n`0`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider :min="50"></ui-slider>\n</div>\n---\n#demo\n>desc\n`max`和`min`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-slider :min="1000" max="2000"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:step\n---\n#config\n>conf-desc\n滑动的步长，用户移动滑块时最小的数值调整单位。\n>conf-accept\n大于0的数字\n>conf-type\nNumber\n>conf-default\n`1`\n---\n#demo\n>desc\n每次调整以5为最小单位。\n>tpl\n<div style="width:300px;">\n    <ui-slider :step="5"></ui-slider>\n</div>\n---\n#demo\n>desc\n`step`也可以不是正数。\n>tpl\n<div style="width:300px;">\n    <ui-slider :step="1.2"></ui-slider>\n</div>\n---\n#demo\n>desc\n`step`配合`max`、`min`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-slider :step="100" :min="1000" :max="2000"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:show-tip\n---\n#config\n>conf-desc\n在移动时显示滑块当前的数值。\n>conf-accept\n`true`<br/>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n不显示数值。\n>tpl\n<div style="width:300px;">\n    <ui-slider :show-tip="false"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:tip-formatter\n---\n#config\n>conf-desc\n格式化滑块显示的数值。<br/>接受一个函数，函数的第一个参数是滑块的数值(数字)。<br/>如果开启了`is-range`则是一个数组，数组包含两个数字，分别是开始和结束两个滑块的数值。<br/><br/>此函数必须返回数字或字符串内容，将会显示在滑块上方。\n>conf-accept\n格式化函数\n>conf-type\nFunction\n>conf-default\n`value => value`\n---\n#demo\n>desc\n不显示数值。\n>tpl\n<div style="width:300px;">\n    <ui-slider :tip-formatter="(value) => `进度：${value}%`"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:prepend\n---\n#config\n>conf-desc\n滑块前部显示内容（太长的内容会被隐藏）。\n>conf-accept\n内容字符串(可使用HTML)\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider prepend="进度"></ui-slider>\n</div>\n---\n#demo\n>desc\n也可以使用HTML内容。\n>tpl\n<div style="width:300px;">\n    <ui-slider :prepend="\'<i class=\\\'mo-icon-set\\\'></i>\'"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:append\n---\n#config\n>conf-desc\n滑块后部显示内容（太长的内容会被隐藏）。\n>conf-accept\n内容字符串(可使用HTML)\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider append="进度"></ui-slider>\n</div>\n---\n#demo\n>desc\n也可以使用HTML内容。\n>tpl\n<div style="width:300px;">\n    <ui-slider :append="\'<i class=\\\'mo-icon-set\\\'></i>\'"></ui-slider>\n</div>\n---\n#demo\n>desc\n`prepend`和`append`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-slider :prepend="\'<i class=\\\'mo-icon-love-o\\\'></i>\'" :append="\'<i class=\\\'mo-icon-love-f\\\'></i>\'"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:show-point\n---\n#config\n>conf-desc\n显示步长的间断点(按`step`配置)。若间断点过于密集，组件会自动调整隐藏部分间断点。\n>conf-accept\n`true`<br/>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider :step="10" show-point></ui-slider>\n</div>\n---\n#demo\n>desc\n如果间断点过于密集，会自动隐藏部分间断点。\n>tpl\n<div style="width:300px;">\n    <ui-slider show-point :min="30" :max="260" :step="2"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:mark-range\n---\n#config\n>conf-desc\n标记滑动条的某部分。这是一个数组每项都是一个标记段，标记段是一个数组或对象：<br><br>如果是数组：长度为2，分别表示开始和结束。比如：`[[10, 20], [50, 70]]`会标记两段，第一段从数值10开始到20结束，第二段从数值50开始到70结束。<br><br>如果是对象，包含以下键值：<br>`start`：开始<br>`end`：结束<br>`color`：色彩，支持[设计/色彩](/design/color.html)中所有颜色，默认为`neutral-4`。也可采用HEX色值，比如`#333333`。\n>conf-accept\n数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider :mark-range="[[0, 20], [50, 70]]"></ui-slider>\n</div>\n---\n#demo\n>desc\n通过色彩设置标记的颜色。\n>tpl\n<div style="width:300px;">\n    <ui-slider :mark-range="[{\n        start : 0,\n        end : 30,\n        color : \'neutral-5\'\n    }, {\n        start : 70,\n        end : 90,\n        color : \'light-theme\'\n    }]"></ui-slider>\n</div>\n---\n#demo\n>desc\n通过HEX色值设置标记的颜色。\n>tpl\n<div style="width:300px;">\n    <ui-slider :mark-range="[{\n        start : 0,\n        end : 30,\n        color : \'#A0D06E\'\n    }, {\n        start : 70,\n        end : 90,\n        color : \'#FFA5B6\'\n    }]"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:show-counter\n---\n#config\n>conf-desc\n显示计数器。\n>conf-accept\n`true`<br/>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-slider show-counter></ui-slider>\n</div>\n:::\n\n:::vue\n@name:max-slide\n---\n#config\n>conf-desc\n滑块能够滑动的最大值，介于`min`和`max`配置间的一个数值。<br>\n与`max`的区别是`max`代表了滑动条最右侧顶点的数值，而`max-slide`是滑动条中间的一个数值。<br><br>\n若不设置则以`max`为准。\n>conf-accept\n大于0的数字 或 不设置\n>conf-type\nNumber<br>Undefined\n>conf-default\n`undefined`\n---\n#demo\n>desc\n滑块最大仅能滑动到`50`。\n>tpl\n<div style="width:300px;">\n    <ui-slider :max-slide="50"></ui-slider>\n</div>\n:::\n\n:::vue\n@name:min-slide\n---\n#config\n>conf-desc\n滑块能够滑动的最小值，介于`min`和`max`配置间的一个数值。<br>\n与`min`的区别是`min`代表了滑动条最左侧顶点的数值，而`min-slide`是滑动条中间的一个数值。<br><br>\n若不设置则以`min`为准。\n>conf-accept\n大于0的数字 或 不设置\n>conf-type\nNumber<br>Undefined\n>conf-default\n`undefined`\n---\n#demo\n>desc\n滑块最大仅能滑动到`50`。\n>tpl\n<div style="width:300px;">\n    <ui-slider :min-slide="20"></ui-slider>\n</div>\n---\n#demo\n>desc\n配合`max-slide`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-slider :min-slide="20" :max-slide="50"></ui-slider>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:slider\n@value:40\n@defaultValue:40\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:滑块输入\n@uikey:slider\n@value:40\n@wrapStyle:width:300px;\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Number` : 数字\n\n#### 值过滤\n\n- 如果数值的类型不是数字，会被转换成数字(通过`Number(n)`)\n- 如果数字是NaN，则取`min`配置的最小值\n- 如果数字小于`min`配置，则取`min`配置的最小值\n- 如果数字大于`max`配置，则取`max`配置的最大值\n\n#### 值格式\n\n取值的数字。\n\n#### 默认值\n\n`0`(`min`配置的最小值)\n\n:::preset\n@name:formValue\n@uikey:slider\n@uiname:滑块输入\n@valueType:slider\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/slider/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},d=[];t._withStripped=!0,i.d(e,"a",(function(){return t})),i.d(e,"b",(function(){return d}))},764:function(n,e,i){"use strict";var t=r(i(1)),d=r(i(765));function r(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(d.default)}})},765:function(n,e,i){"use strict";i.r(e);var t=i(355),d=i(147);for(var r in d)"default"!==r&&function(n){i.d(e,n,(function(){return d[n]}))}(r);var o=i(0),l=Object(o.a)(d.default,t.a,t.b,!1,null,null,null);l.options.__file="src/docs/pages/component/slider/index.vue",e.default=l.exports}});