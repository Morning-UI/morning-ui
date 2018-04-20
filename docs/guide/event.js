!function(n){function e(e){for(var o,i,a=e[0],c=e[1],l=e[2],d=0,f=[];d<a.length;d++)i=a[d],u[i]&&f.push(u[i][0]),u[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);for(s&&s(e);f.length;)f.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,a=1;a<t.length;a++){var c=t[a];0!==u[c]&&(o=!1)}o&&(r.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},u={71:0};var r=[];function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},i.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var s=c;r.push([355,0]),t()}({1:function(n,e){n.exports=Vue},174:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return u});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 事件\n\n组件改变状态时会触发事件，通过监听事件，外部逻辑可以响应组件的变化。\n\n事件包含三类：\n\n- 生命周期事件 : 基于Vue生命周期的钩子函数，所有组件都支持。\n- 值变更事件 : 只有表单组件有，并且所有的表单组件都支持，当表单的数值发生变化时触发。\n- 组件事件 : 只有交互及表单组件有，每个组件根据的自身情况触发的事件。\n\n所有的事件都需要遵循全局命名规范。\n\n### 监听事件\n\n组件的事件监听，基于Vue的自定义事件，你可以在模板中通过`v-on`指令监听事件：\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo1.console1', 'emit event!');\n        }\n    }\n});\n---\n<div>\n    \x3c!-- 监听emit事件，并调用echo方法 --\x3e\n    <ui-btn v-on:emit=\"echo\">监听emit事件</ui-btn>\n</div>\n:::\n\n#### v-on缩写\n\n你也可以通过`@`来缩写`v-on`用法：\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo2.console1', 'emit event!');\n        }\n    }\n});\n---\n<div>\n    \x3c!-- 监听emit事件，并调用echo方法 --\x3e\n    <ui-btn @emit=\"echo\">监听emit事件</ui-btn>\n</div>\n:::\n\n#### $on监听\n\n你还可以通过组件vm上的`$on`方法来监听事件：\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}'\n});\n\n// 通过$on监听事件\nwindow.morning.findVM('demo3').$on('emit', () => {\n    console.log('demo3.console1', 'emit event!');\n});\n---\n<div>\n    <ui-btn ref=\"demo3\">监听emit事件</ui-btn>\n</div>\n:::\n\n你可以查看[Vue/事件处理](https://vuejs.org/v2/guide/events.html)获取更多细节，但是需要注意Vue中的事件修饰符、键值修饰符、鼠标按钮修饰符等特性在MorningUI的组件事件中并不支持，仅支持原生事件。\n\n#### 原生事件\n\n可以通过`.native`修饰符来为Morning UI的组件绑定原生事件，详见：［Vue/给组件绑定原生事件](https://cn.vuejs.org/v2/guide/components.html#给组件绑定原生事件)\n\n### 生命周期事件\n\n组件的生命周期事件是Vue生命周期钩子函数的子集，所有组件都支持，包含：\n\n- `created` : 创建之后\n- `mounted` : 挂载之后\n- `before-update` : 更新之前\n- `updated` : 更新之后\n- `before-destroy` : 销毁之前\n\n通过生命周期事件，可以让组件在不同周期中执行父vm的逻辑。\n\n### 值变更事件\n\n表单组件的值发生变化时会触发值变更事件：`value-change`。\n\n### 组件事件\n\n组件事件是不同组件根据自身的情况支持的额外事件，仅交互和表单组件支持，每个都有不同的组件事件，你可以在组件文档中查看该组件支持的事件及触发时机。\n\n### 事件全局命名规范\n\n事件在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。\n\n由于Vue支持in-DOM template，所以请勿使用驼峰法命名事件名称，这是因为在HTML的标签中属性名不区分大小写。\n\n在为组件添加事件前应先检查下面的列表，是否有含义相同的事件，若有请使用，若没有请将新的事件添加到下面列表并注明它的含义。\n\n- `created` : 创建之后\n- `mounted` : 挂载之后\n- `before-update` : 更新之前\n- `updated` : 更新之后\n- `before-destroy` : 销毁之前\n- `emit` : 组件被触发\n- `switch` : 切换\n- `show` : 显示\n- `hide` : 隐藏\n- `done` : 完成\n- `fail` : 失败\n- `value-change` : 表单值改变\n- `focus` : 表单聚焦\n- `blur` : 表单失焦\n- `list-show` : 列表显示\n- `list-hide` : 列表隐藏\n- `input-value-change` : 输入框值变化\n- `input-focus` : 输入框聚焦\n- `input-blur` : 输入框失焦\n- `list-change` : 列表数值变化\n- `push` : 推送\n- `close` : 关闭\n- `change` : 改变\n- `month-change` : 月份改变\n- `year-change` : 年份改变\n- `highlight` : 高亮变化\n\n")])])},u=[];o._withStripped=!0},354:function(n,e,t){"use strict";t.r(e);var o=t(75),u=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);var i=t(174),a=t(0),c=!1;var l=function(n){c||t(718)},s=Object(a.a)(u.a,i.a,i.b,!1,l,null,null);s.options.__file="src/docs/pages/guide/event/index.vue",e.default=s.exports},355:function(n,e,t){"use strict";var o=r(t(1)),u=r(t(354));function r(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(u.default)}})},718:function(n,e){},75:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,u=t(3),r=(o=u)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"event"}},components:{"doc-guide":r.default}},n.exports=e.default}});