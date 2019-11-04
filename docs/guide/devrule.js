!function(n){function e(e){for(var r,a,u=e[0],i=e[1],l=e[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);for(c&&c(e);f.length;)f.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,u=1;u<t.length;u++){var i=t[u];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},s={108:0},o=[];function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=i;o.push([674,0]),t()}({1:function(n,e){n.exports=Vue},311:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n\n# 开发规范\n\n所有的开发者及代码检视者都必须遵循以下的规范。\n\n> 若下面的规范后添加了<ui-badge size="xxs" class="circle">AUTO</ui-badge>标记，则表示此条规范会在自动化测试中检测。\n\n## 组件规范\n\n#### 通用\n    \n- 组件在Vue模板中的标签以`mor-`开头<ui-badge size="xxs" class="circle">AUTO</ui-badge>\n- 组件绑定`:_uiid="uiid"`<ui-badge size="xxs" class="circle">AUTO</ui-badge>\n- 组件的`index.vue`，从上至下分别为:`<template>`、`<script>`、`<style>`三个标签\n- `<style>`标签必须有`lang="less"`属性\n- 引入了`<style lang="less" src="./index.less"></style>`\n- 使用`watch`对变量进行观察时尽量使用`this.$watch`方法\n- 组件中的`this.$watch`优先写到`mounted()`生命周期钩子函数中\n- 组件中有关`data.value`和`conf.group`的观察函数`this.$watch`优先写到`created()`生命周期钩子函数中\n- 支持`slot`的组件，在模板代码中加入了`slot`\n- 组件生成的HTML，最外层容器使用这样的标签：`<mor-[name]>`，其中`name`是组件的名称\n- 每个组件必须包含两个文件：`index.vue`和`index.less`\n- 除了表单组件之外的组件继承了`UI`类，表单组件继承了`Form`类\n- 在组件根标签的class中正确的绑定了支持的形态，完整示例：`:class="[sizeClass, colorClass, stateClass]"`\n- CSS中有支持的形态样式\n- 所有支持的形态，有默认样式，比如：\n```less\n&{\n    .si-m;\n    .co-t;\n    .st-normal;\n}\n```\n- 组件的`name`正确\n- 通过ESLint及StyleLint<ui-badge size="xxs" class="circle">AUTO</ui-badge>\n- 在`lib/components/index.js`中导出了组件\n- 确保代码不受压缩的影响\n- 样式类的命名符合[样式类全局命名规范](/guide/styleclass.html#样式类全局命名规范)\n- 组件支持Vue.js的`in-DOM`模板\n- 组件内依赖其它组件，使用`morning-`前缀，比如依赖按钮使用：`morning-btn`\n- 支持形态的情况下，需要添加形态的样式\n- 组件内所有的色彩以`styles/var.less`中`@color`开头的变量为基础，可以修改亮度\n- 组件内的尺寸应尽量使用`styles/var.less`中`@fontSize`变量为基础\n- 组件内的尺寸单位首选`em`\n- LESS中的`id`、`class`、函数命名采用中划线命名<ui-badge size="xxs" class="circle">AUTO</ui-badge>\n- 形态在LESS中的书写顺序为：尺寸、颜色、状态\n- 组件的公开方法若不需要返回值，则返回当前`vm`实例\n- 编写CSS类名时应该仅可能简短\n- 编写CSS选择器时尽可能减少嵌套\n\n#### 交互组件\n\n- 配置的命名符合[配置全局命名规范](/guide/config.html#配置全局命名规范)\n- 添加`document`或全局级别的事件使用`utils/GlobalEvent.js`\n- 拖拽逻辑使用`utils/Move.js`\n- 弹出逻辑使用`utils/PopupManager.js`\n- `z-index`管理使用`utils/IndexManager.js`\n- 配置都需要设置类型及默认值\n- 组件私有的`methods`应该以下划线开头，非下划线开头的`methods`都是组件的公开方法\n- 支持生命周期事件\n- 配置要响应单向数据流(特殊情况可不响应)\n\n#### 表单组件\n\n- 表单组件继承了`Form`类\n- 表单组件的边框/背景颜色需要使用统一的颜色\n- 方法的命名符合[方法全局命名规范](/guide/method.html#方法全局命名规范)\n- 事件的命名符合[事件全局命名规范](/guide/event.html#事件全局命名规范)\n- 需要添加`_valueFilter`方法来处理数值过滤\n- 在模板中绑定以下的`props`:`form-name`、`form-key`、`group`、`hide-name`\n- 组件模板中包含显示`form-name`的位置\n- 当`hide-name`配置为`true`是隐藏`form-name`\n- 表单高度应尽量使用`styles/var.less`中`@formHeight`变量为基础\n- 表单边框、背景、文字等色彩以`styles/var.less`中`@colorForm`开头的变量为基础，可以修改亮度\n- 表单的值可被JSON序列化\n- 支持状态形态中的`normal`和`disabled`\n- 支持以下这些配置：`form-name`、`form-key`、`group`、`hide-name`\n- 支持以下这些方法：`.set`、`.get`、`.setName`、`.getName`、`.setKey`、`.getKey`、`.setGroup`、`.getGroup`、`.addGroup`、`.removeGroup`\n- 支持`value-change`事件\n\n## 文档规范\n\n#### 通用\n\n- 文档包含：标题、组件状态栏、开始、形态、源码\n- 组件标题及HTML标签正确\n- 组件介绍跟在`开始`标签后面，清晰明白。如有必要可以追加详细说明。\n- `开始`中应该包含组件中所有样式类的名称、说明、演示\n- `使用`演示必须是最简单的，如需要可补充说明\n- `形态`中注明形态的支持情况，若不是全部支持，需要列出支持的项目\n- `形态`中的演示需要包含支持形态的每一种值示例，且示例遵循最小化原则(不要多种形态混合用，除非演示需要)，如需要可补充示例说明\n- `形态`中色彩演示部分，主题/功能/杂项色彩应该分区展示\n- 文档中代码演示部分应该具有较高的可读性，如果代码量较多需要加入适量的空行\n- 新增的样式类、配置、方法、事件命名需要加到全局命名规范中\n- 演示代码与展示源码保持一致，且两个区域是连在一起的\n- 文档的`page`属性正确\n\n#### 交互组件\n\n- 文档包含：标题、组件状态栏、开始、形态、配置、方法、事件、源码\n- 事件/生命周期事件中名称正确\n- 文档表格中`默认值`需要加反引号，如果是字符串需要再加引号\n- 文档表格中`值类型`一行一个，不需要加反引号\n- 文档表格中`接受值`一行一个，如有必要需要加说明，数值用反引号，说明直接写\n- 方法名称中的必填项直接写，可选项使用`[]`包裹，比如：`.set(key, [value])`中`key`是必填项，`value`是可选项\n- 具有生命周期事件演示\n- 如果配置的内容过多，在配置表单中简单说明并添加跳转锚点，详细内容写到配置的演示区域之上，和演示之间用`---`分割。\n- 对于不支持单向数据流的配置需要在配置文档中说明\n\n#### 表单组件\n\n- 文档包含：标题、组件状态栏、开始、形态、配置、方法、事件、表单值、源码\n- 具有状态形态中的`normal`和`disabled`的演示\n- 具有以下这些配置演示：`form-name`、`form-key`、`group`、`hide-name`\n- 具有以下这些方法演示：`.set`、`.get`、`.setName`、`.getName`、`.setKey`、`.getKey`、`.setGroup`、`.getGroup`、`.addGroup`、`.removeGroup`\n- 具有`value-change`事件演示\n\n## 测试用例规范\n\nComing soon\n\n')])])},s=[];r._withStripped=!0,t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return s}))},59:function(n,e,t){"use strict";t.r(e);var r=t(60),s=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e.default=s.a},60:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=t(3),o=(r=s)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"devrule"}},components:{"doc-guide":o.default}},n.exports=e.default},674:function(n,e,t){"use strict";var r=o(t(1)),s=o(t(675));function o(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(s.default)}})},675:function(n,e,t){"use strict";t.r(e);var r=t(311),s=t(59);for(var o in s)"default"!==o&&function(n){t.d(e,n,(function(){return s[n]}))}(o);var a=t(0),u=Object(a.a)(s.default,r.a,r.b,!1,null,null,null);u.options.__file="src/docs/pages/guide/devrule/index.vue",e.default=u.exports}});