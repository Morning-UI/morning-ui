!function(n){function e(e){for(var o,u,i=e[0],d=e[1],m=e[2],p=0,f=[];p<i.length;p++)u=i[p],r[u]&&f.push(r[u][0]),r[u]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(n[o]=d[o]);for(l&&l(e);f.length;)f.shift()();return a.push.apply(a,m||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],o=!0,i=1;i<t.length;i++){var d=t[i];0!==r[d]&&(o=!1)}o&&(a.splice(e--,1),n=u(u.s=t[0]))}return n}var o={},r={89:0};var a=[];function u(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=o,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var m=0;m<i.length;m++)e(i[m]);var l=d;a.push([423,0]),t()}({1:function(n,e){n.exports=Vue},208:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return r});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 表单\n\n表单组件区别于样式和交互组件，包含很多通用的逻辑。MorningUI的全局对象上也对表单组件进行了扩展。\n\n### 通用逻辑\n\n所有的表单都支持以下这些通用逻辑。\n\n#### 表单形态\n\n表单组件支持三种形态：`normal`、`readonly`、`disabled`。\n\n`readonly`状态下的表单用户无法修改表单值，但可通过JS可以修改，一般用于展示。\n\n`disabled`状态下的表单无法修改表单值，一般用于展示。\n\n详见：[disabled和readonly的区别](/guide/status.html#disabled和readonly的区别)。\n\n#### 表单配置\n\n表单组件支持下面几种通用配置：\n\n- form-name : 表单的名称(用于显示)\n- form-key : 表单的KEY(用于逻辑中作为识别标示)\n- group : 表单组\n- default-value : 表单的默认值(不支持单向数据流)\n- hide-name : 隐藏表单名(所有表单默认都有显示表单名的位置，你可以隐藏后自行设置)\n\n#### 表单方法\n\n表单组件支持下面几种通用方法：\n\n- set() : 设置表单的值\n- get() : 获取表单的值\n- getJson() : 获取表单的JSON值\n- setName() : 设置表单的名称\n- getName() : 获取表单的名称\n- setKey() : 设置表单的KEY\n- getKey() : 获取表单的KEY\n- setGroup() : 设置表单组件所属的表单组\n- getGroup() : 获取表单组件所属的表单组\n- addGroup() : 将表单组件添加到表单组\n- removeGroup() : 将表单组件从表单组中移除\n\n#### 表单事件\n\n表单组件支持下面几种通用事件：\n\n- value-change : 表单值发生改变时触发\n- created : 组件实例创建后(组件生命周期事件，等同于vue中的`created`)\n- mounted : 组件挂载到DOM后(组件生命周期事件，等同于vue中的`mounted`)\n- before-update : 组件更新前(组件生命周期事件，等同于vue中的`before-update`)\n- updated : 组件更新后(组件生命周期事件，等同于vue中的`updated`)\n- before-destroy : 组件销毁前(组件生命周期事件，等同于vue中的`before-destroy`)\n- destroyed : 组件销毁后(组件生命周期事件，等同于vue中的`destroyed`)\n\n### 表单值\n\n表单中所有的值都有支持的类型，若输入的值不符合表单支持的类型，表单会进行转换。\n\n所有的表单都会说明：\n\n- 值类型 : 表单支持数值的类型\n- 值过滤 : 表单过滤数值的条件\n- 值格式 : 表单数值格式说明\n- 默认值\n\n### 表单组\n\n通过在组件上设置`group`属性，可以将表单组件添加到同一个表单组。\n\n表单组内的所有表单KEY和值都会以键值对的形式存在一个对象中。\n\n你可以通过两种方式获取：\n\n- `morning.getGroup(groupKey)` : 获取指定表单组的数据\n- `morning.getGroupJson(groupKey)` : 获取指定表单组的JSON数据\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput group="demo1" form-key="name" form-name="姓名" default-value="Jim"></ui-textinput>\n    <br> \n    <ui-textinput group="demo1" form-key="age" form-name="年龄" default-value="17"></ui-textinput>\n    <br> \n    <ui-radio :list="{male:\'Male\',female:\'Female\'}" group="demo1" form-key="gender" form-name="性别" default-value="male"></ui-radio>\n    <br> \n    <ui-multiinput group="demo1" form-key="tags" form-name="标签" :default-value="[\'Happy\']"></ui-multiinput>\n</div>\n<br><br>\n<ui-btn js="console.log(\'demo1 data\', window.morning.getGroup(\'demo1\'));">在Console输出表单组数据</ui-btn>\n<ui-btn js="console.log(\'demo1 data\', window.morning.getGroupJson(\'demo1\'));">在Console输出表单组JSON数据</ui-btn>\n:::\n\n一组表单也可以同时设置值：\n\n- `morning.setGroup(groupKey, dataObject)` : 设置指定表单组的数据\n- `morning.setGroupJson(groupKey, dataJson)` : 设置指定表单组的JSON数据\n\n`dataObject`是一组键值对，键名为表单的KEY，键值是需要设置的表单值。`dataJson`是`dataObject`经过JSON序列化后的字符串。\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput group="demo2" form-key="name" form-name="姓名"></ui-textinput>\n    <br> \n    <ui-textinput group="demo2" form-key="age" form-name="年龄"></ui-textinput>\n    <br> \n    <ui-radio :list="{male:\'Male\',female:\'Female\'}" group="demo2" form-key="gender" form-name="性别"></ui-radio>\n    <br> \n    <ui-multiinput group="demo2" form-key="tags" form-name="标签"></ui-multiinput>\n</div>\n<br><br>\n<ui-btn js="window.morning.setGroup(\'demo2\', {name:\'Jim\', age:\'17\', gender: \'male\', tags: [\'Happy\']});">通过对象设置一组表单值</ui-btn>\n<ui-btn js=\'window.morning.setGroupJson("demo2", "{\\"name\\":\\"Jim\\",\\"age\\":\\"17\\",\\"gender\\":\\"male\\",\\"tags\\":[\\"Happy\\"]}");\'>通过JSON设置一组表单值</ui-btn>\n:::\n\n#### 设置部分值\n\n在`dataJson`或`dataObject`中你可以只设置部分表单的数值，比如：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput group="demo3" form-key="name" form-name="姓名"></ui-textinput>\n    <br> \n    <ui-radio :list="{male:\'Male\',female:\'Female\'}" group="demo3" form-key="gender" form-name="性别"></ui-radio>\n</div>\n<br><br>\n<ui-btn js="window.morning.setGroup(\'demo3\', {gender: \'male\'});">只设置性别表单</ui-btn>\n:::\n\n#### 清空表单的值\n\n在`dataJson`或`dataObject`中若显式的设置`undefined`，则会清空对应表单的值，比如：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput group="demo4" form-key="name" form-name="姓名" default-value="Jim"></ui-textinput>\n    <br> \n    <ui-radio :list="{male:\'Male\',female:\'Female\'}" group="demo4" form-key="gender" form-name="性别" default-value="male"></ui-radio>\n</div>\n<br><br>\n<ui-btn js="window.morning.setGroup(\'demo4\', {gender:undefined});">清空性别表单</ui-btn>\n:::\n\n#### 清空一组表单的值\n\n通过`cleanGroup`方法可以清空一整组表单的值，比如：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput group="demo5" form-key="name" form-name="姓名" default-value="Jim"></ui-textinput>\n    <br> \n    <ui-radio :list="{male:\'Male\',female:\'Female\'}" group="demo5" form-key="gender" form-name="性别" default-value="male"></ui-radio>\n</div>\n<br><br>\n<ui-btn js="window.morning.cleanGroup(\'demo5\');">清空整组表单</ui-btn>\n:::\n\n### 表单数据双向绑定\n\n大部分情况下表单的值和父视图中的数据是关联的，这时候可以使用`v-model`指令将表单值绑定到父视图中。\n\n绑定是双向的，组件值改变会同步到父视图的data中，父视图的值改变也会改变组件的值：\n\n:::vue/html\nwindow.demoVm = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : {\n        name : undefined,\n        gender : undefined\n    },\n    methods : {\n        getData : function() {\n            return JSON.stringify({\n                name : this.name,\n                gender : this.gender\n            })\n        },\n        setData : function() {\n            this.name = \'Sam\';\n            this.gender = \'female\';\n        }\n    }\n});\n---\n<div style="width:400px;">\n    <p>1. 修改下面表单内容，然后点击<code>获取父视图的data</code>，父视图的数据同步变化</p>\n    <p>2. 点击<code>修改父视图的data</code>，表单的值也会变化</p>\n    <ui-formgroup>\n    <ui-textinput v-model="name" form-name="姓名" default-value="Jim"></ui-textinput>\n    <br>\n    <ui-radio :list="{male:\'Male\',female:\'Female\'}" v-model="gender" default-value="male"></ui-radio>\n    </ui-formgroup>\n    <br><br>\n    <ui-btn js="alert(demoVm.getData());">获取父视图的data</ui-btn>\n    <ui-btn js="demoVm.setData();">修改父视图的data</ui-btn>\n</div>\n:::\n\n注意：如果表单处于`disable`状态，父视图中的数值变化将不会同步到表单(但`default-value`数值可以应用到表单)。\n\n`v-model`指令的用法详见：<a href="https://cn.vuejs.org/v2/guide/forms.html" target="_blank">表单输入绑定</a>\n\n#### `v-model`和`default-value`一起使用\n\n当`v-model`和`default-value`一起使用并都有效时，组件会优先同步到`v-model`的数值。\n\n### 全局扩展\n\nMorningUI的全局对象`morning`上对表单组件进行了扩展，可以让使用者更方便的获取、设置表单值。\n\n')])])},r=[];o._withStripped=!0},422:function(n,e,t){"use strict";t.r(e);var o=t(93),r=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);var u=t(208),i=t(0),d=!1;var m=function(n){d||t(818)},l=Object(i.a)(r.a,u.a,u.b,!1,m,null,null);l.options.__file="src/docs/pages/guide/form/index.vue",e.default=l.exports},423:function(n,e,t){"use strict";var o=a(t(1)),r=a(t(422));function a(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(r.default)}})},818:function(n,e){},93:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=t(3),a=(o=r)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"form"}},components:{"doc-guide":a.default}},n.exports=e.default}});