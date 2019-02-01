!function(n){function e(e){for(var r,a,d=e[0],c=e[1],u=e[2],s=0,m=[];s<d.length;s++)a=d[s],t[a]&&m.push(t[a][0]),t[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(l&&l(e);m.length;)m.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var n,e=0;e<o.length;e++){for(var i=o[e],r=!0,d=1;d<i.length;d++){var c=i[d];0!==t[c]&&(r=!1)}r&&(o.splice(e--,1),n=a(a.s=i[0]))}return n}var r={},t={55:0},o=[];function a(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=n,a.c=r,a.d=function(n,e,i){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(i,r,function(e){return n[e]}.bind(null,r));return i},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],c=d.push.bind(d);d.push=e,d=d.slice();for(var u=0;u<d.length;u++)e(d[u]);var l=c;o.push([545,0]),i()}({1:function(n,e){n.exports=Vue},185:function(n,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return t});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 单选框组 `<ui-radio>`\n\n<doc-component-status page=\"radio\"></doc-component-status>\n\n[[[开始]]]\n\n定义单选框组，单选框组只能单选，若需要多选请使用`ui-checkbox`。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-radio\n        form-name=\"姓名\"\n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon'\n        }\"\n    ></ui-radio>\n</div>\n:::\n\n:::vue\n@name:带边框的单选框组\n---\n#demo\n>desc\n通过`border`样式类指定单选框组以带边框的样式显示。\n>tpl\n<div style=\"width:320px;\">\n    <ui-radio\n        form-name=\"姓名\"\n        class=\"border\"\n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon'\n        }\"></ui-radio>\n</div>\n:::\n\n:::vue\n@name:垂直布局的单选框组\n---\n#demo\n>tpl\n<div style=\"width:320px;\">\n    <ui-radio\n        form-name=\"姓名\"\n        class=\"vertical\"\n        :list=\"{\n            Tim:'Tim Boelaars',\n            Andrew:'Andrew Colin Beck',\n            Victor:'Victor Erixon'\n        }\"\n    ></ui-radio>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:radio\n@defaultValue:'Tim'\n@attrs: :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formStatusWithStyle\n@uikey:radio\n@defaultValue:'Tim'\n@attrs: :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n:::vue\n@name:accept-html\n---\n#config\n>conf-desc\n项目的的名称可以使用HTML。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n如果让`ui-radio`的显示文本，渲染成HTML，而不是字符串。可以设置`accept-html`。\n>tpl\n<div style=\"width:300px;\">\n    <ui-radio\n        form-name=\"姓名\"\n        accept-html\n        :list=\"list\"\n    ></ui-radio>\n</div>\n>script\n{\n    data : function () {\n        return {\n            list : {\n                Red : '<span style=\"color:red;\">我是红色span</span>',\n                Green : '<span style=\"color:green;\">我是绿色span</span>'\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:list\n---\n#config\n>conf-desc\n可选项目列表。\n>conf-accept\n可选项目列表的对象，键名是key，键值是name用于显示\n>conf-type\nObject\n>conf-default\n`{}`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-radio\n        form-name=\"姓名\"\n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon'\n        }\"\n    ></ui-radio>\n</div>\n:::\n\n:::vue\n@name:disabled-options\n---\n#config\n>conf-desc\n禁止选中的项目（`set()`方法仍然可以选中禁止的项目，但`toggle()`方法无法选中禁止的项目）。\n>conf-accept\n由禁止修改项目键名(key)组成的数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>desc\n被禁止的项目将无法选中。\n>tpl\n<div style=\"width:300px;\">\n    <ui-radio\n        form-name=\"姓名\"\n        :list=\"{\n            Tim:'Tim Boelaars',\n            Andrew:'Andrew Colin Beck',\n            Victor:'Victor Erixon',\n            Shaun:'Shaun Moynihan',\n            Emir:'Emir Ayouni'\n        }\"\n        :disabled-options=\"['Tim', 'Victor']\"\n    ></ui-radio>\n</div>\n---\n#demo\n>desc\n若禁止的项目已经被选中，则组件会清空。\n>tpl\n<div style=\"width:300px;\">\n    <ui-radio\n        form-name=\"姓名\"\n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon',\n            Shaun : 'Shaun Moynihan',\n            Emir : 'Emir Ayouni'\n        }\"\n        :disabled-options=\"['Tim', 'Victor']\"\n        default-value=\"Tim\"\n    ></ui-radio>\n</div>\n:::\n\n:::vue\n@name:hidden-options\n---\n#config\n>conf-desc\n隐藏指定的选项。注意：隐藏仅仅是视觉上的，若隐藏的选项已经选中，并不会改变其选中状态。\n>conf-accept\n由需要隐藏项目键名(key)组成的数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-radio\n        form-name=\"姓名\"\n        :list=\"{\n            Tim : 'Tim Boelaars',\n            Andrew : 'Andrew Colin Beck',\n            Victor : 'Victor Erixon',\n            Shaun : 'Shaun Moynihan',\n            Emir : 'Emir Ayouni'\n        }\"\n        :hidden-options=\"['Tim', 'Victor']\"\n    ></ui-radio>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:radio\n@value:'Tim'\n@defaultValue:'Tim'\n@attrs: :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n:::vue\n@name:toggle(key)\n---\n#method\n>method-desc\n选中单个选项。\n>method-args\n|key|NO|需要选中选项的键值|键值字符串|`String`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:300px;\">\n        <ui-radio\n            ref=\"demo2\"\n            form-name=\"姓名\"\n            :list=\"{\n                Tim : 'Tim Boelaars',\n                Andrew : 'Andrew Colin Beck',\n                Victor : 'Victor Erixon'\n            }\"\n        ></ui-radio>\n    </div>\n    <br>\n    <ui-link js=\"morning.findVM('demo2').toggle('Tim');\">选中Tim</ui-link>\n    <ui-link js=\"morning.findVM('demo2').toggle('Andrew');\">选中Andrew</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:单选框组\n@uikey:radio\n@value:'Tim'\n@attrs: :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`String` : 字符串(键值列表`list`中的一项)\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成`undefined`。\n- 若数不在键值列表(`list`)中，会被转换成`undefined`。\n\n#### 值格式\n\n选中项目的键值，或是未选中(`undefined`)。\n\n#### 默认值\n\n`undefined`\n\n:::preset\n@name:formValue\n@uikey:radio\n@uiname:单选框组\n@valueType:default\n@attrs: :list=\"{Jim:'Jim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/radio/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},t=[];r._withStripped=!0},545:function(n,e,i){"use strict";var r=o(i(1)),t=o(i(546));function o(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(t.default)}})},546:function(n,e,i){"use strict";i.r(e);var r=i(66),t=i.n(r);for(var o in r)"default"!==o&&function(n){i.d(e,n,function(){return r[n]})}(o);var a=i(185),d=i(0),c=!1;var u=function(n){c||i(785)},l=Object(d.a)(t.a,a.a,a.b,!1,u,null,null);l.options.__file="src/docs/pages/component/radio/index.vue",e.default=l.exports},66:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,t=i(2),o=(r=t)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"radio"}},components:{"doc-component":o.default}},n.exports=e.default},785:function(n,e){}});