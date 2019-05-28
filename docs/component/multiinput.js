!function(n){function e(e){for(var i,d,l=e[0],r=e[1],a=e[2],p=0,f=[];p<l.length;p++)d=l[p],u[d]&&f.push(u[d][0]),u[d]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i]);for(m&&m(e);f.length;)f.shift()();return o.push.apply(o,a||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],i=!0,l=1;l<t.length;l++){var r=t[l];0!==u[r]&&(i=!1)}i&&(o.splice(e--,1),n=d(d.s=t[0]))}return n}var i={},u={56:0},o=[];function d(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.m=n,d.c=i,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)d.d(t,i,function(e){return n[e]}.bind(null,i));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var a=0;a<l.length;a++)e(l[a]);var m=r;o.push([773,0]),t()}({1:function(n,e){n.exports=Vue},163:function(n,e,t){"use strict";t.r(e);var i=t(164),u=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);e.default=u.a},164:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,u=t(2),o=(i=u)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"multiinput"}},components:{"doc-component":o.default}},n.exports=e.default},359:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 多项输入框 `<ui-multiinput>`\n\n<doc-component-status page="multiinput"></doc-component-status>\n\n[[[开始]]]\n\n定义多项输入框。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-multiinput form-name="输入标签"></ui-multiinput>\n</div>\n:::\n\n:::vue\n@name:说明回车输入\n---\n#demo\n>desc\n多项输入框会在用户按下回车时添加项目，在使用时建议说明使用回车输入。\n>tpl\n<div style="width:300px;">\n    <ui-multiinput inside-name="按下回车输入标签"></ui-multiinput>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatusWithSize\n@uikey:multiinput\n@defaultValue:[\'value1\', \'value2\']\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:multiinput\n@defaultValue:[\'value1\', \'value2\']\n:::\n\n:::vue\n@name:inside-name\n---\n#config\n>conf-desc\n编辑区域默认显示内容。\n>conf-accept\n字符串\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-multiinput inside-name="输入标签"></ui-multiinput>\n</div>\n:::\n\n:::vue\n@name:can-move\n---\n#config\n>conf-desc\n输入项目是否可以移动。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-multiinput form-name="输入标签" v-model="value" can-move></ui-multiinput>\n</div>\n>script\n{\n    data : {\n        value : [\'value1\', \'value2\']\n    }\n}\n:::\n\n:::vue\n@name:max\n---\n#config\n>conf-desc\n可输入的最大项数。\n>conf-accept\n数字<br>`false`:不限制数量\n>conf-type\nString<br>Boolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-multiinput form-name="输入标签" v-model="value" :max="3"></ui-multiinput>\n</div>\n>script\n{\n    data : {\n        value : [\'value1\', \'value2\', \'value3\', \'value4\']\n    }\n}\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:multiinput\n@value:[\'value1\']\n@defaultValue:[\'value1\']\n:::\n\n:::vue\n@name:add(item, [index])\n---\n#method\n>method-desc\n在指定位置添加项。\n>method-args\n|item|NO|添加项目的内容|内容字符串|`String`|`undefined`|\n|index|YES|添加的位置|`undefined`: 添加为最后一项<br>数字: 添加到指定的index位置|`Undefined`<br>`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-multiinput ref="demo2" form-name="输入标签"></ui-multiinput>\n    </div>\n    <br>\n    <ui-link js="morning.findVM(\'demo2\').add(\'value1\');">添加到最后</ui-link>\n    <ui-link js="morning.findVM(\'demo2\').add(\'value2\', 0);">添加到第0项</ui-link>\n</div>\n:::\n\n:::vue\n@name:update(item, index)\n---\n#method\n>method-desc\n更新指定位置的项。\n>method-args\n|item|NO|更新的项目内容|内容字符串|`String`|`undefined`|\n|index|NO|更新的位置|更新项目的index位置|`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-multiinput ref="demo8" form-name="输入标签" v-model="value"></ui-multiinput>\n    </div>\n    <br>\n    <ui-link js="morning.findVM(\'demo8\').update(\'newValue\', 1);">将第2项的更新为newValue</ui-link>\n</div>\n>script\n{\n    data : {\n        value : [\'value1\', \'value2\', \'value3\', \'value4\']\n    }\n}\n:::\n\n:::vue\n@name:del(index)\n---\n#method\n>method-desc\n删除指定位置的项。\n>method-args\n|index|NO|删除指定位置的项目|删除项目的index位置|`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-multiinput ref="demo3" form-name="输入标签" v-model="value"></ui-multiinput>\n    </div>\n    <br>\n    <ui-link js="morning.findVM(\'demo3\').del(0);">删除第0项</ui-link>\n</div>\n>script\n{\n    data : {\n        value : [\'value1\', \'value2\', \'value3\', \'value4\']\n    }\n}\n:::\n\n:::vue\n@name:move(from, to)\n---\n#method\n>method-desc\n移动项目。\n>method-args\n|from|NO|需要移动的项目位置|移动项目的index位置|`Number`|`undefined`|\n|to|NO|移动之后的项目位置|移动之后的index位置|`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-multiinput ref="demo4" form-name="输入标签" v-model="value"></ui-multiinput>\n    </div>\n    <br>\n    <ui-link js="morning.findVM(\'demo4\').move(2, 0);">将第2项移到第0项</ui-link>\n</div>\n>script\n{\n    data : {\n        value : [\'value1\', \'value2\', \'value3\', \'value4\']\n    }\n}\n:::\n\n:::vue\n@name:setInput([value])\n---\n#method\n>method-desc\n设置输入框的内容。\n>method-args\n|value|YES|需要设置的内容|字符串：设置字符串内容<br>`undefined`：清空内容|`String`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-multiinput ref="demo10" form-name="输入标签"></ui-multiinput>\n    </div>\n    <br>\n    <ui-link js="morning.findVM(\'demo10\').setInput(\'value1\');">设置输入框内容</ui-link>\n    <ui-link js="morning.findVM(\'demo10\').setInput();">清空输入框内容</ui-link>\n</div>\n:::\n\n:::vue\n@name:getInput()\n---\n#method\n>method-desc\n获取输入框的内容。\n>method-return\n输入框内容。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-multiinput ref="demo9" form-name="输入标签"></ui-multiinput>\n    </div>\n    <br>\n    <ui-link js="alert(morning.findVM(\'demo9\').getInput());">获取输入框内容</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:多项输入框\n@uikey:multiinput\n@value:[\'value1\']\n@wrapStyle:width:300px;\n:::\n\n:::vue\n@name:input-value-change\n---\n#event\n>event-desc\n当输入标签内容变化后触发。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-multiinput @input-value-change="echo" ref="demo5" form-name="输入标签"></ui-multiinput>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo5.console1\', \'input-value-change event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:input-focus\n---\n#event\n>event-desc\n当标签内容输入框聚焦后触发。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-multiinput @input-focus="echo" ref="demo6" form-name="输入标签"></ui-multiinput>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo6.console1\', \'input-focus event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:input-blur\n---\n#event\n>event-desc\n当标签内容输入框失焦后触发。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-multiinput @input-blur="echo" ref="demo7" form-name="输入标签"></ui-multiinput>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo7.console1\', \'input-blur event!\');\n        }\n    }\n}\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Array` : 数组\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成空数组(`[]`)。\n- 若启用`max`，最多不会超过max设置的项目数量。\n\n#### 值格式\n\n包含输入项目的数组，数组项目为输入内容(字符串)。\n\n#### 默认值\n\n默认值为空字符串：\n\n`[]`\n\n:::preset\n@name:formValue\n@uikey:multiinput\n@uiname:多项输入框\n@valueType:checkbox\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/multiinput/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},u=[];i._withStripped=!0,t.d(e,"a",function(){return i}),t.d(e,"b",function(){return u})},773:function(n,e,t){"use strict";var i=o(t(1)),u=o(t(774));function o(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(u.default)}})},774:function(n,e,t){"use strict";t.r(e);var i=t(359),u=t(163);for(var o in u)"default"!==o&&function(n){t.d(e,n,function(){return u[n]})}(o);var d=t(0),l=Object(d.a)(u.default,i.a,i.b,!1,null,null,null);l.options.__file="src/docs/pages/component/multiinput/index.vue",e.default=l.exports}});