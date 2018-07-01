!function(n){function i(i){for(var e,l,o=i[0],d=i[1],u=i[2],c=0,v=[];c<o.length;c++)l=o[c],s[l]&&v.push(s[l][0]),s[l]=0;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(n[e]=d[e]);for(r&&r(i);v.length;)v.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var n,i=0;i<a.length;i++){for(var t=a[i],e=!0,o=1;o<t.length;o++){var d=t[o];0!==s[d]&&(e=!1)}e&&(a.splice(i--,1),n=l(l.s=t[0]))}return n}var e={},s={26:0};var a=[];function l(i){if(e[i])return e[i].exports;var t=e[i]={i:i,l:!1,exports:{}};return n[i].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=e,l.d=function(n,i,t){l.o(n,i)||Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:t})},l.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},l.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(i,"a",i),i},l.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},l.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],d=o.push.bind(o);o.push=i,o=o.slice();for(var u=0;u<o.length;u++)i(o[u]);var r=d;a.push([287,0]),t()}({1:function(n,i){n.exports=Vue},139:function(n,i,t){"use strict";t.d(i,"a",function(){return e}),t.d(i,"b",function(){return s});var e=function(){var n=this.$createElement,i=this._self._c||n;return i("doc-component",{attrs:{page:this.page,hasPadding:!0}},[i("script",{attrs:{type:"text/markdown"}},[this._v('\n# 表单组 `<ui-formgroup>`\n\n<doc-component-status page="formgroup"></doc-component-status>\n\n[[[开始]]]\n\n定义一个表单组，通过不同的HTML结构表单组可以组合出不同的表单结构，这是一个块级元素。\n\n表单组内包含了各种表单，一般由表单组抬头、各种表单项、行动栏组成。\n\n你可以用下面的类或元素来标记不同的表单部分：\n\n- `header` : 表单组头部\n- `header > h5` : 表单组标题\n- `header > p` : 表单组说明信息\n- `.item` : 表单项\n- `.item > .title` : 表单项名称\n- `.item > .content` : 表单项内容\n- `.item > .content > h6` : 表单项小标题\n- `.item > .content > p` : 表单项说明信息\n- `.item > .content > .form` : 表单容器\n- `.action` : 行动区域\n- `.row` : 单行(仅内联表单组可用)\n\n表单组通过`.inline`样式类来实现内联的表单样式。\n\n#### 使用\n\n:::democode/html\n<div style="width:500px;margin:auto">\n    <ui-formgroup>\n        \x3c!-- .item : 表单项 --\x3e\n        <div class="item">\n            \x3c!-- .title : 表单项名称 --\x3e\n            <h5 class="title">\n                <ui-center class="fill">Name</ui-center>\n            </h5>\n            \x3c!-- .content : 表单项内容 --\x3e\n            <div class="content">\n                \x3c!-- .content : 表单容器 --\x3e\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n#### 表单项小标题及说明\n\n:::democode/html\n<div style="width:500px;margin:auto">\n    <ui-formgroup>\n        <div class="item">\n            <h5 class="title">\n                <ui-center class="fill">Name</ui-center>\n            </h5>\n            <div class="content">\n                \x3c!-- h6 : 小标题 --\x3e\n                <h6>Full Name?</h6>\n                \x3c!-- p : 说明信息 --\x3e\n                <p>Please fill in your full name.</p>\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n#### 多个表单项\n\n多个表单项之前会有间隔线。\n\n:::democode/html\n<div style="width:500px;margin:auto">\n    <ui-formgroup>\n        \x3c!-- .item : 表单项 --\x3e\n        <div class="item">\n            <h5 class="title">\n                <ui-center class="fill">Name</ui-center>\n            </h5>\n            <div class="content">\n                <h6>Full Name</h6>\n                <p>Please fill in your full name.</p>\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n        \x3c!-- .item : 表单项 --\x3e\n        <div class="item">\n            <h5 class="title">\n                <ui-center class="fill">Introduction</ui-center>\n            </h5>\n            <div class="content">\n                <div class="form">\n                    <ui-textarea></ui-textarea>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n#### 表单组标题\n\n:::democode/html\n<div style="width:500px;margin:auto">\n    <ui-formgroup>\n        \x3c!-- header : 表单组头部 --\x3e\n        <header>\n            \x3c!-- h5 : 表单组标题 --\x3e\n            <h5>YOUR HEALTH</h5>\n            \x3c!-- p : 表单组说明信息 --\x3e\n            <p>Let\'s talk about your health.</p>\n        </header>\n        <div class="item">\n            <h5 class="title">\n                <ui-center class="fill">Name</ui-center>\n            </h5>\n            <div class="content">\n                <h6>Full Name</h6>\n                <p>Please fill in your full name.</p>\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n        <div class="item">\n            <h5 class="title">\n                <ui-center class="fill">Introduction</ui-center>\n            </h5>\n            <div class="content">\n                <div class="form">\n                    <ui-textarea></ui-textarea>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n#### 行动栏\n\n在表尾添加行动区域。\n\n:::democode/html\n<div style="width:500px;margin:auto">\n    <ui-formgroup>\n        <header>\n            <h5>YOUR HEALTH</h5>\n            <p>Let\'s talk about your health.</p>\n        </header>\n        <div class="item">\n            <h5 class="title">\n                <ui-center class="fill">Name</ui-center>\n            </h5>\n            <div class="content">\n                <h6>Full Name</h6>\n                <p>Please fill in your full name.</p>\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n        <div class="item">\n            <h5 class="title">\n                <ui-center class="fill">Introduction</ui-center>\n            </h5>\n            <div class="content">\n                <div class="form">\n                    <ui-textarea></ui-textarea>\n                </div>\n            </div>\n        </div>\n        \x3c!-- .action : 行动区域 --\x3e\n        <div class="action">\n            <ui-btn>提交</ui-btn>&nbsp;\n            <ui-btn color="minor">取消</ui-btn>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n#### 单项多表单\n\n你可以在单个表单项中添加多个表单。\n\n:::democode/html\n<div style="width:500px;margin:auto">\n    <ui-formgroup>\n        <header>\n            <h5>YOUR HEALTH</h5>\n            <p>Let\'s talk about your health.</p>\n        </header>\n        <div class="item">\n            <h5 class="title">\n                <ui-center class="fill">Name</ui-center>\n            </h5>\n            <div class="content">\n                \x3c!-- 第一个表单 --\x3e\n                <h6>First Name</h6>\n                <p>Please fill in your first name.</p>\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n                \x3c!-- 第二个表单 --\x3e\n                <h6>Last Name</h6>\n                <p>Please fill in your last name.</p>\n                <div class="form">\n                    <ui-textinput></ui-textinput>\n                </div>\n            </div>\n        </div>\n        <div class="item">\n            <h5 class="title">\n                <ui-center class="fill">Introduction</ui-center>\n            </h5>\n            <div class="content">\n                <div class="form">\n                    <ui-textarea></ui-textarea>\n                </div>\n            </div>\n        </div>\n        <div class="action">\n            <ui-btn>提交</ui-btn>&nbsp;\n            <ui-btn color="minor">取消</ui-btn>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n#### 内联表单组\n\n表单组支持内联方式，这种方式一行支持多个表单。表单的宽度会根据一行中表单的数量适配。\n\n添加`.inline`样式类来使用内联的表单样式。\n\n:::democode/html\n<div style="width:600px;margin:auto">\n    <ui-formgroup class="inline">\n        \x3c!-- .row : 单行 --\x3e\n        <div class="row">\n            \x3c!-- .item : 表单项 --\x3e\n            <div class="item">\n                \x3c!-- .title : 表单项名称 --\x3e\n                <h5 class="title">Name</h5>\n                \x3c!-- .content : 表单项内容 --\x3e\n                <div class="content">\n                    \x3c!-- .content : 表单容器 --\x3e\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n\n            <div class="item">\n                <h5 class="title">Introduction</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n#### 内联表单组的小标题及说明\n\n:::democode/html\n<div style="width:600px;margin:auto">\n    <ui-formgroup class="inline">\n        <div class="row">\n            <div class="item">\n                <h5 class="title">Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                    \x3c!-- h6 : 小标题 --\x3e\n                    <h6>Full Name?</h6>\n                    \x3c!-- p : 说明信息 --\x3e\n                    <p>Please fill in your full name.</p>\n                </div>\n            </div>\n\n            <div class="item">\n                <h5 class="title">Introduction</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                    \x3c!-- 仅使用说明信息 --\x3e\n                    <p>You introduction.</p>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n#### 多行内联表单组\n\n通过多个`.row`可以实现多行的内联表单组。\n\n:::democode/html\n<div style="width:600px;margin:auto">\n    <ui-formgroup class="inline">\n        <div class="row">\n            <div class="item">\n                <h5 class="title">First Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                    <h6>First Name?</h6>\n                    <p>Please fill in your first name.</p>\n                </div>\n            </div>\n\n            <div class="item">\n                <h5 class="title">Last Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="item">\n                <h5 class="title">Introduction</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textarea></ui-textarea>\n                    </div>\n                    <p>You introduction.</p>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n#### 内联表单组加表单组标题\n\n:::democode/html\n<div style="width:600px;margin:auto">\n    <ui-formgroup class="inline">\n        \x3c!-- header : 表单组头部 --\x3e\n        <header>\n            \x3c!-- h5 : 表单组标题 --\x3e\n            <h5>YOUR HEALTH</h5>\n            \x3c!-- p : 表单组说明信息 --\x3e\n            <p>Let\'s talk about your health.</p>\n        </header>\n        <div class="row">\n            <div class="item">\n                <h5 class="title">First Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                    <h6>First Name?</h6>\n                    <p>Please fill in your first name.</p>\n                </div>\n            </div>\n\n            <div class="item">\n                <h5 class="title">Last Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="item">\n                <h5 class="title">Introduction</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textarea></ui-textarea>\n                    </div>\n                    <p>You introduction.</p>\n                </div>\n            </div>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n#### 内联表单组加行动栏\n\n:::democode/html\n<div style="width:600px;margin:auto">\n    <ui-formgroup class="inline">\n        <header>\n            <h5>YOUR HEALTH</h5>\n            <p>Let\'s talk about your health.</p>\n        </header>\n        <div class="row">\n            <div class="item">\n                <h5 class="title">First Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                    <h6>First Name?</h6>\n                    <p>Please fill in your first name.</p>\n                </div>\n            </div>\n\n            <div class="item">\n                <h5 class="title">Last Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="item">\n                <h5 class="title">Introduction</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textarea></ui-textarea>\n                    </div>\n                    <p>You introduction.</p>\n                </div>\n            </div>\n        </div>\n        <div class="action">\n            <ui-btn>提交</ui-btn>&nbsp;\n            <ui-btn color="minor">取消</ui-btn>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n#### 内联表单组调整表单宽度\n\n默认情况下所有表单会均分一行，你也可以通过样式按比例调整宽度占比。\n\n注意由于采用了`flex`布局，样式的宽度只能影响比例，并不能设置固定值。\n\n:::democode/html\n<div style="width:600px;margin:auto">\n    <ui-formgroup class="inline">\n        <header>\n            <h5>YOUR HEALTH</h5>\n            <p>Let\'s talk about your health.</p>\n        </header>\n        <div class="row">\n            \x3c!-- 通过50%的宽度样式来缩短这个表单的宽度占比 --\x3e\n            <div class="item" style="width:50%">\n                <h5 class="title">First Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                    <h6>First Name?</h6>\n                    <p>Please fill in your first name.</p>\n                </div>\n            </div>\n            \n            <div class="item">\n                <h5 class="title">Middle Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n\n            <div class="item">\n                <h5 class="title">Last Name</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="item">\n                <h5 class="title">Introduction</h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textarea></ui-textarea>\n                    </div>\n                    <p>You introduction.</p>\n                </div>\n            </div>\n        </div>\n        <div class="action">\n            <ui-btn>提交</ui-btn>&nbsp;\n            <ui-btn color="minor">取消</ui-btn>\n        </div>\n    </ui-formgroup>\n</div>\n:::\n\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/formgroup/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},s=[];e._withStripped=!0},286:function(n,i,t){"use strict";t.r(i);var e=t(29),s=t.n(e);for(var a in e)"default"!==a&&function(n){t.d(i,n,function(){return e[n]})}(a);var l=t(139),o=t(0),d=!1;var u=function(n){d||t(670)},r=Object(o.a)(s.a,l.a,l.b,!1,u,null,null);r.options.__file="src/docs/pages/component/formgroup/index.vue",i.default=r.exports},287:function(n,i,t){"use strict";var e=a(t(1)),s=a(t(286));function a(n){return n&&n.__esModule?n:{default:n}}new e.default({el:"#root",render:function(n){return n(s.default)}})},29:function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e,s=t(2),a=(e=s)&&e.__esModule?e:{default:e};i.default={data:function(){return{page:"formgroup"}},components:{"doc-component":a.default}},n.exports=i.default},670:function(n,i){}});