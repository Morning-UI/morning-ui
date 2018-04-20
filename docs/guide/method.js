!function(n){function e(e){for(var i,u,l=e[0],d=e[1],f=e[2],a=0,c=[];a<l.length;a++)u=l[a],r[u]&&c.push(r[u][0]),r[u]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(n[i]=d[i]);for(s&&s(e);c.length;)c.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],i=!0,l=1;l<t.length;l++){var d=t[l];0!==r[d]&&(i=!1)}i&&(o.splice(e--,1),n=u(u.s=t[0]))}return n}var i={},r={77:0};var o=[];function u(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=i,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},u.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var s=d;o.push([369,0]),t()}({1:function(n,e){n.exports=Vue},180:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return r});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 方法\n\n交互及表单组件都提供组件方法，通过调用组件方法可以修改及获取组件内部的状态。\n\n所有的方法都需要遵循全局命名规范。\n\n### 使用\n\n组件的方法挂载在组件的vm上，调用方法需要先找到组件的vm。\n\n目前可以通过两种方式找到组件的vm:\n\n- 父vm的子组件索引调用\n- 全局查找调用\n\n不过这两种方法实际都是基于Vue的子组件索引(ref)来实现的，你可以查看[Vue/子组件索引](https://vuejs.org/v2/guide/components.html#Child-Component-Refs)获取更多细节。\n\n#### 父vm的子组件索引调用\n\n使用前需要在被调用的组件上通过`ref`指定一个索引ID，然后在父vm中通过`this.$refs.[refId]`即可找到组件的vm：\n\n:::vue/html\nwindow.parentVm1 = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\'\n});\n---\n<div>\n    \x3c!-- 在组件上添加`ref`，指定索引ID --\x3e\n    <ui-btn ref="demo1">按钮</ui-btn>\n    \n    <br><br>\n\n    \x3c!-- 在父vm中通过`$refs`找到组件vm并调用挂载的方法 --\x3e\n    <ui-link js="window.parentVm1.$refs.demo1.lock();">锁定按钮</ui-link>\n    <ui-link js="window.parentVm1.$refs.demo1.unlock();">解锁按钮</ui-link>\n</div>\n:::\n\n#### 全局查找调用\n\n使用前需要在被调用的组件上通过ref指定一个索引ID，然后通过Morning UI提供的全局方法`morning.findVM()`查找组件vm：\n\n:::democode/html\n<div>\n    \x3c!-- 在组件上添加`ref`，指定索引ID --\x3e\n    <ui-btn ref="demo2">按钮</ui-btn>\n    \n    <br><br>\n\n    \x3c!-- 通过findVM方法全局查找组件vm并调用挂载的方法 --\x3e\n    <ui-link js="window.morning.findVM(\'demo2\').lock();">锁定按钮</ui-link><br>\n    <ui-link js="window.morning.findVM(\'demo2\').unlock();">解锁按钮</ui-link>\n</div>\n:::\n\n`findVM()`方法本质上也是基于`ref`来实现的，只是提供了一个全局查找的快捷方法。[查看findVM()方法详情](/guide/morning.html#findVMref)\n\n`findVM()`方法只会返回第一个匹配`ref`的组件vm，如果你需要查询所有匹配`ref`的组件vm，可以使用`findAllVM()`方法。这个方法将会返回一个数组：\n\n:::democode/html\n<div>\n    \x3c!-- 在组件上添加`ref`，指定索引ID --\x3e\n    <ui-link v-for="n in 5" ref="demo3">(链接)</ui-link>\n\n    <br><br>\n    \n    \x3c!-- 通过findAllVM方法全局查找所有组件vm --\x3e\n    <ui-link js="alert(window.morning.findAllVM(\'demo3\').length);">查看匹配组件的数量</ui-link><br>\n    <ui-link js="window.morning.findAllVM(\'demo3\')[2].lock();">锁定第3个链接</ui-link><br>\n    <ui-link js="window.morning.findAllVM(\'demo3\')[2].unlock();">解锁第3个链接</ui-link>\n</div>\n:::\n\n[查看findAllVM()方法详情](/guide/morning.html#findAllVMref)\n\n### 通用方法\n\n交互和表单组件都支持一些通用的方法:\n\n- `getConf` : 获取组件配置，详见[获取配置](/guide/config.html#获取配置)\n\n### 私有方法\n\n组件vm上任何以下划线开头的都是私有方法，用法及变动不会再文档中提及，不应该使用。\n\n### 方法全局命名规范\n\n方法在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。\n\n在为组件添加方法前应先检查下面的列表，是否有含义相同的事件，若有请使用，若没有请将新的方法添加到下面列表并注明它的含义。\n\n- `show` : 显示\n- `hide` : 隐藏\n- `toLevel` : 至某层级\n- `setLevel` : 设置层级\n- `getLevel` : 获取层级\n- `addLevel` : 添加层级\n- `getHistory` : 获取历史\n- `backLast` : 回退一步\n- `resolve` : 完成\n- `reject` : 失败\n- `reload` : 重载\n- `switch` : 切换\n- `lock` : 锁定\n- `unlock` : 解锁\n- `set` : 设置表单值/设置\n- `get` : 获取表单值\n- `setName` : 设置表单名\n- `getName` : 获取表单名\n- `setKey` : 设置表单Key\n- `getKey` : 获取表单Key\n- `setGroup` : 设置表单组\n- `getGroup` : 获取表单组\n- `addGroup` : 添加表单组\n- `removeGroup` : 移除表单组\n- `setRows` : 设置行数\n- `toggle` : 切换状态\n- `add` : 添加项目/增加\n- `sub` : 减少\n- `update` : 更新项目\n- `del` : 删除项目\n- `move` : 移动项目\n- `setInput` : 设置输入框值\n- `getInput` : 获取输入框值\n- `getPage` : 获取页数\n- `to` : 至某一项\n- `next` : 下一项\n- `prev` : 上一项\n- `setTotal` : 设置总数\n- `push` : 推送\n- `close` : 关闭\n- `toggleYearPick` : 切换年份选择器\n- `toggleMonthPick` : 切换月份选择器\n- `getDate` : 获取日期\n- `getTime` : 获取时间\n- `setTime` : 设置时间\n- `getHighlight` : 获取高亮\n- `setHighlight` : 设置高亮\n- `uploadUrl` : 通过URL上传\n- `isUploading` : 正在上传\n- `addZone` : 新增区域\n- `updateZone` : 更新区域\n- `removeZone` : 删除区域\n- `cleanZones` : 删除所有区域\n\n')])])},r=[];i._withStripped=!0},368:function(n,e,t){"use strict";t.r(e);var i=t(81),r=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);var u=t(180),l=t(0),d=!1;var f=function(n){d||t(730)},s=Object(l.a)(r.a,u.a,u.b,!1,f,null,null);s.options.__file="src/docs/pages/guide/method/index.vue",e.default=s.exports},369:function(n,e,t){"use strict";var i=o(t(1)),r=o(t(368));function o(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(r.default)}})},730:function(n,e){},81:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=t(3),o=(i=r)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"method"}},components:{"doc-guide":o.default}},n.exports=e.default}});