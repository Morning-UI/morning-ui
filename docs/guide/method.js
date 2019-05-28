!function(n){function e(e){for(var r,u,l=e[0],d=e[1],f=e[2],c=0,s=[];c<l.length;c++)u=l[c],o[u]&&s.push(o[u][0]),o[u]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(n[r]=d[r]);for(a&&a(e);s.length;)s.shift()();return i.push.apply(i,f||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,l=1;l<t.length;l++){var d=t[l];0!==o[d]&&(r=!1)}r&&(i.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},o={113:0},i=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)u.d(t,r,function(e){return n[e]}.bind(null,r));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var a=d;i.push([651,0]),t()}({1:function(n,e){n.exports=Vue},300:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 方法\n\n交互及表单组件都提供组件方法，通过调用组件方法可以修改及获取组件内部的状态。\n\n所有的方法都需要遵循全局命名规范。\n\n## 使用\n\n组件的方法挂载在组件的vm上，调用方法需要先找到组件的vm。\n\n目前可以通过两种方式找到组件的vm:\n\n- 父vm的子组件索引调用\n- 全局查找调用\n\n不过这两种方法实际都是基于Vue的子组件索引(ref)来实现的，你可以查看[Vue/子组件索引](https://vuejs.org/v2/guide/components.html#Child-Component-Refs)获取更多细节。\n\n#### 父vm的子组件索引调用\n\n使用前需要在被调用的组件上通过`ref`指定一个索引ID，然后在父vm中通过`this.$refs.[refId]`即可找到组件的vm：\n\n:::vue\n#demo\n>tpl\n<div>\n    \x3c!-- 在组件上添加`ref`，指定索引ID --\x3e\n    <ui-btn ref="demo1">按钮</ui-btn>\n    \n    <br><br>\n\n    \x3c!-- 在父vm中通过`$refs`找到组件vm并调用挂载的方法 --\x3e\n    <ui-link @emit="lockFromParent">锁定按钮</ui-link>\n    <ui-link @emit="unloackFromParent">解锁按钮</ui-link>\n</div>\n>script\n{\n    methods : {\n        lockFromParent : function () {\n            this.$refs.demo1.lock();\n        },\n        unloackFromParent : function () {\n            this.$refs.demo1.unlock();\n        }\n    }\n}\n:::\n\n#### 全局查找调用\n\n使用前需要在被调用的组件上通过ref指定一个索引ID，然后通过Morning UI提供的全局方法`morning.findVM()`查找组件vm：\n\n:::vue\n#demo\n>tpl\n<div>\n    \x3c!-- 在组件上添加`ref`，指定索引ID --\x3e\n    <ui-btn ref="demo2">按钮</ui-btn>\n    \n    <br><br>\n\n    \x3c!-- 通过findVM方法全局查找组件vm并调用挂载的方法 --\x3e\n    <ui-link js="window.morning.findVM(\'demo2\').lock();">锁定按钮</ui-link>\n    <ui-link js="window.morning.findVM(\'demo2\').unlock();">解锁按钮</ui-link>\n</div>\n:::\n\n`findVM()`方法本质上也是基于`ref`来实现的，只是提供了一个全局查找的快捷方法。[查看findVM()方法详情](/guide/morning.html#findVMref)\n\n`findVM()`方法只会返回第一个匹配`ref`的组件vm，如果你需要查询所有匹配`ref`的组件vm，可以使用`findAllVM()`方法。这个方法将会返回一个数组：\n\n:::vue\n#demo\n>tpl\n<div>\n    \x3c!-- 在组件上添加`ref`，指定索引ID --\x3e\n    <ui-link v-for="n in 5" ref="demo3">(链接)</ui-link>\n\n    <br><br>\n    \n    \x3c!-- 通过findAllVM方法全局查找所有组件vm --\x3e\n    <ui-link js="alert(window.morning.findAllVM(\'demo3\').length);">查看匹配组件的数量</ui-link><br>\n    <ui-link js="window.morning.findAllVM(\'demo3\')[2].lock();">锁定第3个链接</ui-link><br>\n    <ui-link js="window.morning.findAllVM(\'demo3\')[2].unlock();">解锁第3个链接</ui-link>\n</div>\n:::\n\n[查看findAllVM()方法详情](/guide/morning.html#findAllVMref)\n\n## 通用方法\n\n交互和表单组件都支持一些通用的方法:\n\n- `getConf` : 获取组件配置，详见[获取配置](/guide/config.html#获取配置)\n\n## 私有方法\n\n组件vm上任何以下划线开头的都是私有方法，用法及变动不会再文档中提及，不应该使用。\n\n## 方法全局命名规范\n\n方法在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。\n\n在为组件添加方法前应先检查下面的列表，是否有含义相同的事件，若有请使用，若没有请将新的方法添加到下面列表并注明它的含义。\n\n- `show` : 显示\n- `hide` : 隐藏\n- `toLevel` : 至某层级\n- `setLevel` : 设置层级\n- `getLevel` : 获取层级\n- `addLevel` : 添加层级\n- `getHistory` : 获取历史\n- `backLast` : 回退一步\n- `resolve` : 完成\n- `reject` : 失败\n- `reload` : 重载\n- `switch` : 切换\n- `lock` : 锁定\n- `unlock` : 解锁\n- `set` : 设置表单值/设置\n- `get` : 获取表单值\n- `setName` : 设置表单名\n- `getName` : 获取表单名\n- `setKey` : 设置表单Key\n- `getKey` : 获取表单Key\n- `setGroup` : 设置表单组\n- `getGroup` : 获取表单组\n- `addGroup` : 添加表单组\n- `removeGroup` : 移除表单组\n- `toggle` : 切换状态\n- `add` : 添加项目/增加\n- `sub` : 减少\n- `update` : 更新项目\n- `del` : 删除项目\n- `move` : 移动项目\n- `setInput` : 设置输入框值\n- `getInput` : 获取输入框值\n- `getPage` : 获取页数\n- `to` : 至某一项\n- `next` : 下一项\n- `prev` : 上一项\n- `setTotal` : 设置总数\n- `push` : 推送\n- `close` : 关闭\n- `toggleYearPick` : 切换年份选择器\n- `toggleMonthPick` : 切换月份选择器\n- `getDate` : 获取日期\n- `getTime` : 获取时间\n- `setTime` : 设置时间\n- `getHighlight` : 获取高亮\n- `setHighlight` : 设置高亮\n- `uploadUrl` : 通过URL上传\n- `isUploading` : 正在上传\n- `addZone` : 新增区域\n- `updateZone` : 更新区域\n- `removeZone` : 删除区域\n- `cleanZones` : 删除所有区域\n- `getScale` : 获取缩放比\n- `play` : 播放\n- `mute` : 静音\n- `volume` : 音量\n- `getInfo` : 获取信息\n- `togglePicker` : 切换选择器\n- `getIndex` : 获取索引\n- `getId` : 获取ID\n- `getTitle` : 获取标题\n- `foldNode` : 折叠节点\n- `foldAllNode` : 折叠所有节点\n- `unfoldAllNode` : 展开所有节点\n- `position` : 定位\n\n')])])},o=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})},45:function(n,e,t){"use strict";t.r(e);var r=t(46),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);e.default=o.a},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(3),i=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"method"}},components:{"doc-guide":i.default}},n.exports=e.default},651:function(n,e,t){"use strict";var r=i(t(1)),o=i(t(652));function i(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},652:function(n,e,t){"use strict";t.r(e);var r=t(300),o=t(45);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);var u=t(0),l=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);l.options.__file="src/docs/pages/guide/method/index.vue",e.default=l.exports}});