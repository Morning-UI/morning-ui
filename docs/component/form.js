!function(n){function e(e){for(var i,u,a=e[0],m=e[1],f=e[2],d=0,c=[];d<a.length;d++)u=a[d],r[u]&&c.push(r[u][0]),r[u]=0;for(i in m)Object.prototype.hasOwnProperty.call(m,i)&&(n[i]=m[i]);for(l&&l(e);c.length;)c.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],i=!0,a=1;a<t.length;a++){var m=t[a];0!==r[m]&&(i=!1)}i&&(o.splice(e--,1),n=u(u.s=t[0]))}return n}var i={},r={35:0},o=[];function u(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=i,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)u.d(t,i,function(e){return n[e]}.bind(null,i));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],m=a.push.bind(a);a.push=e,a=a.slice();for(var f=0;f<a.length;f++)e(a[f]);var l=m;o.push([780,0]),t()}({1:function(n,e){n.exports=Vue},190:function(n,e,t){"use strict";t.r(e);var i=t(191),r=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);e.default=r.a},191:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(2),o=(i=r)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"form"}},components:{"doc-component":o.default}},n.exports=e.default},316:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 表单 `<ui-form>`\n\n<doc-component-status page="form"></doc-component-status>\n<doc-component-experimental></doc-component-not-recommended>\n\n[[[开始]]]\n\n定义一组表单。\n\n所有的`ui-form`中具有`form-key`的表单组件都会被关联至`ui-form`中，`ui-form`组件的数值为一个对象，对象的键名为关联表单组件的`form-key`，键值为表单组件的值。\n\n表单组件中可以包含一些子元素：\n\n- `ui-formitem` : 表单项\n- `ui-formdivider` : 表单分频器\n\n#### `ui-formitem`表单项\n\n`ui-formitem`包含以下配置：\n\n- `label` : (String)表单项的名字\n- `note` : (String)表单项的备注\n- `required` : (Boolean)必填表单项\n\n#### `ui-formdivider`表单分频器\n\n如果一组表单太大，可以通过`ui-formdivider`来分割成多组（仅视觉上）。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:420px;">\n    <ui-form>\n        <ui-formitem label="姓名">\n           <ui-textinput form-key="name"></ui-textinput>\n        </ui-formitem>\n        <ui-formitem label="简介">\n           <ui-textarea form-key="introduction"></ui-textarea>\n        </ui-formitem>\n    </ui-form>\n</div>\n:::\n\n:::vue\n@name:单项多表单\n---\n#demo\n>desc\n可以在一个`ui-formitem`中包含多个表单组件。\n<br>\n多个表单组件可以表单项中垂直排列，也可以行内排列。\n<br><br>\n同时可以配合表单组件的`form-name`和`form-note`一起使用实现更复杂的效果。\n>tpl\n<div style="width:420px;">\n    <ui-form>\n        <ui-formitem label="基本信息">\n           <ui-textinput form-key="firstName" form-name="名字" form-note="请填写名字"></ui-textinput>\n           <br>\n           <ui-textarea form-key="lastName" form-name="姓氏" form-note="请填写姓氏"></ui-textarea>\n        </ui-formitem>\n        <ui-formitem label="日期">\n            <ui-grid>\n                <ui-row>\n                    <ui-col :span="11">\n                        <ui-datepicker form-key="startDate"></ui-datepicker>\n                    </ui-col>\n                    <ui-col :span="2">\n                        <ui-center class="fill"> - </center>\n                    </ui-col>\n                    <ui-col :span="11">\n                        <ui-datepicker form-key="endDate"></ui-datepicker>\n                    </ui-col>\n                </ui-row>\n            </ui-grid> \n        </ui-formitem>\n    </ui-form>\n</div>\n:::\n\n:::vue\n@name:表单项的备注\n---\n#demo\n>desc\n`ui-formitem`支持`note`配置来设置每一项表单的备注。\n>tpl\n<div style="width:420px;">\n    <ui-form label-width="120px">\n        <ui-formitem label="姓名" note="中文姓名">\n           <ui-textinput form-key="name"></ui-textinput>\n        </ui-formitem>\n        <ui-formitem label="简介" note="小于100字的简介">\n           <ui-textarea form-key="introduction"></ui-textarea>\n        </ui-formitem>\n        <ui-formitem label="导师" note="请选择一位导师">\n            <ui-select\n                form-key="tutor"\n                :list="{\n                    tim : \'Tim Boelaars\',\n                    andrew : \'Andrew Colin Beck\',\n                    gustavo : \'Gustavo Zambelli\',\n                    victor : \'Victor Erixon\',\n                    shaun : \'Shaun Moynihan\',\n                    emir : \'Emir Ayouni\',\n                    katherine : \'Katherine Rainey\',\n                    jax : \'Jax Berndt\',\n                    elizabeth : \'Elizabeth Chiu\',\n                    sara : \'Sara Nicely\',\n                    anna : \'Anna Broussard\'\n                }"\n            >\n           </ui-select>\n        </ui-formitem>\n        <ui-formitem label="日期">\n            <ui-grid>\n                <ui-row>\n                    <ui-col :span="11">\n                        <ui-datepicker form-key="startDate"></ui-datepicker>\n                    </ui-col>\n                    <ui-col :span="2">\n                        <ui-center class="fill"> - </center>\n                    </ui-col>\n                    <ui-col :span="11">\n                        <ui-datepicker form-key="endDate"></ui-datepicker>\n                    </ui-col>\n                </ui-row>\n            </ui-grid> \n        </ui-formitem>\n        <ui-formitem label="性别">\n            <ui-radio\n                form-key="gender"\n                :list="{\n                    male : \'男士\',\n                    female : \'女士\'\n                }"\n            ></ui-radio>\n        </ui-formitem>\n    </ui-form>\n</div>\n:::\n\n:::vue\n@name:表单分频器\n---\n#demo\n>desc\n`ui-formitem`支持`note`配置来设置每一项表单的备注。\n>tpl\n<div style="width:420px;">\n    <ui-form label-width="120px">\n        <ui-formitem label="姓名" note="中文姓名">\n           <ui-textinput form-key="name"></ui-textinput>\n        </ui-formitem>\n        <ui-formitem label="简介" note="小于100字的简介">\n           <ui-textarea form-key="introduction"></ui-textarea>\n        </ui-formitem>\n        <ui-formdivider></ui-formdivider>\n        <ui-formitem label="导师" note="请选择一位导师">\n            <ui-select\n                form-key="tutor"\n                :list="{\n                    tim : \'Tim Boelaars\',\n                    andrew : \'Andrew Colin Beck\',\n                    gustavo : \'Gustavo Zambelli\',\n                    victor : \'Victor Erixon\',\n                    shaun : \'Shaun Moynihan\',\n                    emir : \'Emir Ayouni\',\n                    katherine : \'Katherine Rainey\',\n                    jax : \'Jax Berndt\',\n                    elizabeth : \'Elizabeth Chiu\',\n                    sara : \'Sara Nicely\',\n                    anna : \'Anna Broussard\'\n                }"\n            >\n           </ui-select>\n        </ui-formitem>\n        <ui-formitem label="日期">\n            <ui-grid>\n                <ui-row>\n                    <ui-col :span="11">\n                        <ui-datepicker form-key="startDate"></ui-datepicker>\n                    </ui-col>\n                    <ui-col :span="2">\n                        <ui-center class="fill"> - </center>\n                    </ui-col>\n                    <ui-col :span="11">\n                        <ui-datepicker form-key="endDate"></ui-datepicker>\n                    </ui-col>\n                </ui-row>\n            </ui-grid> \n        </ui-formitem>\n        <ui-formitem label="性别">\n            <ui-radio\n                form-key="gender"\n                :list="{\n                    male : \'男士\',\n                    female : \'女士\'\n                }"\n            ></ui-radio>\n        </ui-formitem>\n    </ui-form>\n</div>\n:::\n\n:::vue\n@name:必填表单项\n---\n#demo\n>desc\n可以在`ui-formitem`中使用`required`配置来设置必填表单项。\n>tpl\n<div style="width:420px;">\n    <ui-form>\n        <ui-formitem label="姓名" required>\n           <ui-textinput form-key="name"></ui-textinput>\n        </ui-formitem>\n        <ui-formitem label="简介">\n           <ui-textarea form-key="introduction"></ui-textarea>\n        </ui-formitem>\n    </ui-form>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|暂不支持(使用单个表单来控制)|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:form\n@defaultValue:{name:\'Jim\',introduction:\'这里是简介\'}\n@wrapStyle:width:420px;\n@slot:<ui-formitem label="姓名"><ui-textinput form-key="name"></ui-textinput></ui-formitem><ui-formitem label="简介"><ui-textarea form-key="introduction"></ui-textarea></ui-formitem>\n:::\n\n:::vue\n@name:label-position\n---\n#config\n>conf-desc\n表单项名称的位置。\n>conf-accept\n`\'head-left\'` : 头部左对齐<br>\n`\'head-right\'` : 头部右对齐<br>\n`\'head-center\'` : 头部居中<br>\n`\'left-align\'` : 左侧左对齐<br>\n`\'center-align\'` : 左侧居中<br>\n`\'right-align\'` : 左侧右对齐<br>\n`\'center\'` : 左侧垂直居中<br>\n>conf-type\nString\n>conf-default\n`\'left-align\'`\n---\n#demo\n>desc\n头部左对齐的表单项名称。\n>tpl\n<div style="width:300px">\n    <ui-form label-position="head-left">\n        <ui-formitem label="姓名">\n           <ui-textinput form-key="name"></ui-textinput>\n        </ui-formitem>\n        <ui-formitem label="简介">\n           <ui-textarea form-key="introduction"></ui-textarea>\n        </ui-formitem>\n    </ui-form>\n</div>\n:::\n\n:::vue\n@name:label-width\n---\n#config\n>conf-desc\n表单项名称的宽度，仅在`label-position`不为`head-left`、`head-right`、`head-center`时有效。\n>conf-accept\n宽度(单位`px`、`%`等合法的CSS单位)\n>conf-type\nString\n>conf-default\n`\'left-align\'`\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-form label-width="150px">\n        <ui-formitem label="姓名">\n           <ui-textinput form-key="name"></ui-textinput>\n        </ui-formitem>\n        <ui-formitem label="简介">\n           <ui-textarea form-key="introduction"></ui-textarea>\n        </ui-formitem>\n    </ui-form>\n</div>\n:::\n\n:::vue\n@name:rules\n---\n#config\n>conf-desc\n表单验证规则，采用[async-validator](https://github.com/yiminghe/async-validator)，用法详见：[https://github.com/yiminghe/async-validator](https://github.com/yiminghe/async-validator)。\n>conf-accept\n验证对象\n>conf-type\nObject\n>conf-default\n`{}`\n---\n#demo\n>tpl\n<div style="width:300px">\n    <ui-form\n        ref="demo1"\n        :rules="{\n            name : {\n                type : \'string\',\n                required: true,\n                message : \'姓名必须填写\'\n            }\n        }"\n    >\n        <ui-formitem label="姓名">\n           <ui-textinput form-key="name"></ui-textinput>\n        </ui-formitem>\n        <ui-formitem label="简介">\n           <ui-textarea form-key="introduction"></ui-textarea>\n        </ui-formitem>\n        <ui-btn @emit="$refs.demo1.validator()">提交表单</ui-btn>\n    </ui-form>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:form\n@value:{name:\'Jim\',introduction:\'这里是简介\'}\n@defaultValue:{name:\'Jim\',introduction:\'这里是简介\'}\n@wrapStyle:width:420px;\n@slot:<ui-formitem label="姓名"><ui-textinput form-key="name"></ui-textinput></ui-formitem><ui-formitem label="简介"><ui-textarea form-key="introduction"></ui-textarea></ui-formitem>\n:::\n\n:::vue\n@name:validator(formKey)\n---\n#method\n>method-desc\n验证表单中的数值。\n>method-args\n|formKey|NO|用于验证某一项表单，需要验证表单的`form-key`|表单KEY|`String`|`undefined`|\n>method-return\n返回一个Promise，若参数是`true`则验证通过，否则为一个Error对象。\n---\n#demo\n>tpl\n<div style="width:420px;">\n    <ui-form\n        ref="demo2"\n        :rules="{\n            name : {\n                type : \'string\',\n                required: true,\n                message : \'姓名必须填写\'\n            },\n            introduction : {\n                type : \'string\',\n                required: true,\n                length : 10,\n                message : \'简介必须填写且长度大于10\'\n            }\n        }"\n    >\n        <ui-formitem label="姓名">\n           <ui-textinput form-key="name"></ui-textinput>\n        </ui-formitem>\n        <ui-formitem label="简介">\n           <ui-textarea form-key="introduction"></ui-textarea>\n        </ui-formitem>\n        <ui-btn @emit="$refs.demo2.validator()">验证表单</ui-btn>\n        <ui-btn @emit="$refs.demo2.validator(\'introduction\')">仅验证简介</ui-btn>\n    </ui-form>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:表单\n@uikey:form\n@value:{name:\'Jim\',introduction:\'这里是简介\'}\n@wrapStyle:width:420px;\n@slot:<ui-formitem label="姓名"><ui-textinput form-key="name"></ui-textinput></ui-formitem><ui-formitem label="简介"><ui-textarea form-key="introduction"></ui-textarea></ui-formitem>\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Object` : 对象\n\n#### 值过滤\n\n- 若为`undefiend`会被转换为`{}`\n\n#### 值格式\n\n包含所有子表单组件数值的对象，对象的键名为子表单组件的`form-key`，对象的键值为表单组件的值。\n\n#### 默认值\n\n`{}`\n\n:::preset\n@name:formValue\n@uikey:form\n@uiname:表单\n@valueType:form\n@wrapStyle:width:420px;\n@slot:<ui-formitem label="姓名"><ui-textinput form-key="name"></ui-textinput></ui-formitem><ui-formitem label="简介"><ui-textarea form-key="introduction"></ui-textarea></ui-formitem>\n:::\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/form/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},r=[];i._withStripped=!0,t.d(e,"a",function(){return i}),t.d(e,"b",function(){return r})},780:function(n,e,t){"use strict";var i=o(t(1)),r=o(t(781));function o(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(r.default)}})},781:function(n,e,t){"use strict";t.r(e);var i=t(316),r=t(190);for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);var u=t(0),a=Object(u.a)(r.default,i.a,i.b,!1,null,null,null);a.options.__file="src/docs/pages/component/form/index.vue",e.default=a.exports}});