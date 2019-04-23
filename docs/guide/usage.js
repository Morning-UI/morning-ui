!function(n){function e(e){for(var i,o,d=e[0],l=e[1],a=e[2],m=0,s=[];m<d.length;m++)o=d[m],u[o]&&s.push(u[o][0]),u[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(n[i]=l[i]);for(f&&f(e);s.length;)s.shift()();return r.push.apply(r,a||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],i=!0,d=1;d<t.length;d++){var l=t[d];0!==u[l]&&(i=!1)}i&&(r.splice(e--,1),n=o(o.s=t[0]))}return n}var i={},u={114:0},r=[];function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=i,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)o.d(t,i,function(e){return n[e]}.bind(null,i));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var a=0;a<d.length;a++)e(d[a]);var f=l;r.push([614,0]),t()}({1:function(n,e){n.exports=Vue},291:function(n,e,t){"use strict";var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 使用\n\n## 初始化\n\n在引入Morning UI后需要在Vue中进行初始化：\n\n```js\nVue.use(morning);\n```\n\n你也可以在初始化的时候进行配置，比如：\n\n```js\n// 将组件的标签前缀改为v，比如`v-btn`\nVue.use(morning, {\n    prefix : \'v\'\n});\n```\n\n更多初始化配置见：[初始化](/guide/init.html)。\n\n## 使用组件\n\n初始化Morning UI后，可以在Vue的`template`中使用组件：\n\n:::vue\n#demo\n>tpl\n<ui-btn>按钮</ui-btn>  \n:::\n\n## 添加形态\n\n形态是大部分组件都支持的一种通用配置，有三种：\n\n- 尺寸\n- 色彩\n- 状态\n\n形态的值可以直接写在组件的标签上：\n\n:::vue\n#demo\n>tpl\n\x3c!-- 使用黑色xl尺寸的按钮 --\x3e\n<ui-btn size="xl" color="black">按钮</ui-btn>\n:::\n\n更多内容见：[形态](/guide/status.html)。\n\n## 添加样式类\n\n组件支持通过在标签上添加不同的CSS类来设置不同的样式：\n\n:::vue\n#demo\n>tpl\n<div>\n    <ui-header>\n    这是普通标题\n    </ui-header>\n\n    \x3c!-- 使用mark类来添加ui-header组件的标记 --\x3e\n    <ui-header class="mark">\n    这是带标记的标题\n    </ui-header>\n</div>\n:::\n\n你可以在在组件文档的开始标签中找到这些样式类。\n\n更多内容见：[样式类](/guide/styleclass.html)。\n\n## 配置组件\n\n你可以通过Vue的[Props](https://cn.vuejs.org/v2/guide/components.html#Prop)特性来为组件添加配置。\n\n:::vue\n#demo\n>tpl\n<div>\n    \x3c!-- 配置按钮点击后锁定2s --\x3e\n    <ui-btn :locked="2000">点击按钮触发锁定</ui-btn>\n</div>\n:::\n\n交互和表单组件都支持不同的配置，你可以在组件的文档中查询支持的配置。\n\n更多内容见：[配置](/guide/config.html)。\n\n## 组件方法\n\n交互和表单组件都支持方法，你可以通过方法来控制组件：\n\n:::vue\n#demo\n>tpl\n<div>\n    \x3c!-- 配置按钮点击后锁定2s --\x3e\n    <ui-btn ref="demo1">按钮</ui-btn>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo1\').lock();">锁定</ui-link>\n    <ui-link js="morning.findVM(\'demo1\').unlock();">解锁</ui-link>\n</div>\n:::\n\n组件的方法挂载在组件的Vue实例上，你可以通过`morning.findVM()`来找到组件的实例，详见[全局方法/findVM](/guide/morning.html#findVMref)。\n\n你可以在组件的文档中找到组件支持的方法。\n\n更多内容见：[方法](/guide/method.html)。\n\n## 监听事件\n\n交互和表单组件支持事件，你可以通过监听事件来响应组件的状态变化：\n\n:::vue\n#demo\n>tpl\n<div>\n    <ui-btn @emit="echo">点击触发emit事件</ui-btn>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            alert(\'组件被点击\');\n        }\n    }\n}\n:::\n\n除了每个组件自身支持的事件外，所有交互和表单组件都支持生命周期事件。你可以在组件的文档中找到组件支持的事件。\n\n更多内容见：[事件](/guide/event.html)。\n\n## 表单组件\n\n表单组件是所有组件中最为特殊的一类，因为表单组件之间有很多共通点，比如都可以取值/设值、都有默认值等。\n\n在Morning UI中这些共通点有统一的规范和标准，让你在使用不同的表单组件时有一致的体验，比如：\n\n:::vue\n#demo\n>tpl\n<div style="width:300px">\n    \x3c!-- 下面示例中： --\x3e\n    \x3c!-- 组件名都采用`form-name`配置 --\x3e\n    \x3c!-- 组件默认值采用`v-model`设置 --\x3e\n    <ui-textinput ref="demo4" form-name="姓名" v-model="valueInput"></ui-textinput>\n    <ui-switch ref="demo5" form-name="开关" hide-name v-model="valueSwitch"></ui-switch>\n\n    <br><br>\n\n    \x3c!-- 统一使用get方法获取表单值 --\x3e\n    <ui-link js="alert(morning.findVM(\'demo4\').get());">获取姓名数值</ui-link>\n    <ui-link js="alert(morning.findVM(\'demo5\').get());">获取开关数值</ui-link>\n</div>\n>script\n{\n    data : {\n        valueInput : "Jim",\n        valueSwitch : true\n    }\n}\n:::\n\n表单组件还有更多的通用配置、方法、事件，更多内容见：[表单](/guide/form.html)。\n\n## 全局方法\n\nMorning UI在引入之后，会在`window`对象上注册`morning`对象。\n\n在`morning`对象上有一些有用的属性及方法，方便你对页面中所有的组件进行操作，比如通过组件的`ref`和`findVM()`方法找到组件的Vue实例：\n\n:::vue\n#demo\n>tpl\n<div>\n    <ui-btn ref="demo3">按钮</ui-btn>\n    <br><br>\n    <ui-link js="console.log(window.morning.findVM(\'demo3\'))">在Console输出按钮的Vue实例</ui-link>\n</div>\n:::\n\n你也可以快速操作一组表单，比如通过`setGroup()`方法来为一组表单赋值：\n\n:::vue\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-textinput group="demo2" form-key="name" form-name="姓名"></ui-textinput>\n    <br> \n    <ui-textinput group="demo2" form-key="age" form-name="年龄"></ui-textinput>\n    <br> \n    <ui-radio :list="{male:\'Male\',female:\'Female\'}" group="demo2" form-key="gender" form-name="性别"></ui-radio>\n    <br> \n    <ui-multiinput group="demo2" form-key="tags" form-name="标签"></ui-multiinput>\n</div>\n<br><br>\n<ui-btn js="window.morning.setGroup(\'demo2\', {name:\'Jim\', age:\'17\', gender: \'male\', tags: [\'Happy\']});">设置一组表单值</ui-btn>\n:::\n\n更多内容见：[全局方法](/guide/morning.html)。\n\n')])])},u=[];i._withStripped=!0,t.d(e,"a",function(){return i}),t.d(e,"b",function(){return u})},30:function(n,e,t){"use strict";t.r(e);var i=t(31),u=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,function(){return i[n]})}(r);e.default=u.a},31:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,u=t(3),r=(i=u)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"usage"}},components:{"doc-guide":r.default}},n.exports=e.default},614:function(n,e,t){"use strict";var i=r(t(1)),u=r(t(615));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(u.default)}})},615:function(n,e,t){"use strict";t.r(e);var i=t(291),u=t(30);for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);var o=t(0),d=Object(o.a)(u.default,i.a,i.b,!1,null,null,null);d.options.__file="src/docs/pages/guide/usage/index.vue",e.default=d.exports}});