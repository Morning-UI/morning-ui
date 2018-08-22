!function(n){function e(e){for(var o,s,u=e[0],c=e[1],l=e[2],d=0,m=[];d<u.length;d++)s=u[d],i[s]&&m.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);for(a&&a(e);m.length;)m.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,u=1;u<t.length;u++){var c=t[u];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),n=s(s.s=t[0]))}return n}var o={},i={62:0};var r=[];function s(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=o,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},s.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},s.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var a=c;r.push([371,0]),t()}({1:function(n,e){n.exports=Vue},181:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i});var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 开关 `<ui-switch>`\n\n<doc-component-status page="switch"></doc-component-status>\n\n[[[开始]]]\n\n定义开关，开关只存在布尔状态。\n\n#### 使用\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch form-name="姓名"></ui-switch>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatusWithStyle\n---\nuikey:switch\nstatusDefaultValue:true\nstatusMoreAttr:open-mark="开" close-mark="关"\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[auto-hide-name](#auto-hide-name)|当表档名为空时自动隐藏表单名部分|`true`<br>`false`|Boolean|`false`|\n|[open-note](#open-note)|开关开启的备注，显示开关的右侧|备注(支持HTML)|String|`\'\'`|\n|[close-note](#close-note)|开关关闭的备注，显示的开发的左侧|备注(支持HTML)|String|`\'\'`|\n|[open-mark](#open-mark)|开关开启的标记，显示开关的内部左侧，一般标记比较短只能容纳一个字符(比如icon)。|标记内容(支持HTML)|String|`\'\'`|\n|[close-mark](#close-mark)|开关开启的标记，显示开关的内部右侧，一般标记比较短只能容纳一个字符(比如icon)。|标记内容(支持HTML)|String|`\'\'`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:switch\nconfigDefaultValue:true\n:::\n\n#### auto-hide-name\n\n第二个组件表单名为空，名字部分被隐藏。\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch form-name="姓名" auto-hide-name></ui-switch>\n    <br><br>\n    <ui-switch form-name="" auto-hide-name></ui-switch>\n</div>\n:::\n\n#### open-note\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch form-name="姓名" open-note="开启"></ui-switch>\n</div>\n:::\n\n`open-note`和`close-note`一起使用：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch form-name="姓名" close-note="关闭" open-note="开启"></ui-switch>\n</div>\n:::\n\n支持HTML:\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch form-name="姓名" close-note="<span style=\'color:red\'>关闭</span>" open-note="<span style=\'color:green\'>开启</span>"></ui-switch>\n</div>\n:::\n\n#### close-note\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch form-note="姓名" close-note="关闭"></ui-switch>\n</div>\n:::\n\n#### open-mark\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch form-note="姓名" open-mark="开"></ui-switch>\n</div>\n:::\n\n`open-mark`和`close-mark`一起使用：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch form-note="姓名" open-mark="开" close-mark="关"></ui-switch>\n</div>\n:::\n\n使用icon：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch form-note="姓名" open-mark="<i class=\'mo-icon mo-icon-check\'>" close-mark="<i class=\'mo-icon mo-icon-close\'>"></ui-switch>\n</div>\n:::\n\n#### close-mark\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch form-note="姓名" close-mark="关"></ui-switch>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:switch\nmethodValue:true\nmethodDefaultValue:true\n:::\n\n#### toggle([open])\n\n切换下拉按钮组是否显示。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|open|YES|指定开关切换到开启或关闭，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch ref="demo1" form-name="姓名"></ui-switch>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo1\').toggle();">切换相反状态</ui-link>\n    <ui-link js="morning.findVM(\'demo1\').toggle(true);">切换至开启</ui-link>\n    <ui-link js="morning.findVM(\'demo1\').toggle(false);">切换至关闭</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset/html\nformEvent\n---\nuikey:switch\neventValue:true\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Boolean` : 布尔值\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成布尔值，使用`!!value`。\n\n#### 值格式\n\n`true`或`false`\n\n#### 默认值\n\n`false`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style="width:300px;">\n        <ui-switch ref="demoType{$valueType}" form-name="开关"></ui-switch>\n    </div>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoType{$valueType}\').set({$&valueContent})">设置{$valueType}类型</ui-link>\n    <ui-link js="alert(window.morning.findVM(\'demoType{$valueType}\').getJson())">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/switch/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},i=[];o._withStripped=!0},370:function(n,e,t){"use strict";t.r(e);var o=t(65),i=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);var s=t(181),u=t(0),c=!1;var l=function(n){c||t(766)},a=Object(u.a)(i.a,s.a,s.b,!1,l,null,null);a.options.__file="src/docs/pages/component/switch/index.vue",e.default=a.exports},371:function(n,e,t){"use strict";var o=r(t(1)),i=r(t(370));function r(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(i.default)}})},65:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=t(2),r=(o=i)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"switch"}},components:{"doc-component":r.default}},n.exports=e.default},766:function(n,e){}});