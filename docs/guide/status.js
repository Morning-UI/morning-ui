!function(n){function s(s){for(var a,t,r=s[0],p=s[1],i=s[2],d=0,u=[];d<r.length;d++)t=r[d],l[t]&&u.push(l[t][0]),l[t]=0;for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(n[a]=p[a]);for(o&&o(s);u.length;)u.shift()();return c.push.apply(c,i||[]),e()}function e(){for(var n,s=0;s<c.length;s++){for(var e=c[s],a=!0,r=1;r<e.length;r++){var p=e[r];0!==l[p]&&(a=!1)}a&&(c.splice(s--,1),n=t(t.s=e[0]))}return n}var a={},l={89:0};var c=[];function t(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return n[s].call(e.exports,e,e.exports,t),e.l=!0,e.exports}t.m=n,t.c=a,t.d=function(n,s,e){t.o(n,s)||Object.defineProperty(n,s,{configurable:!1,enumerable:!0,get:e})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(s,"a",s),s},t.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},t.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],p=r.push.bind(r);r.push=s,r=r.slice();for(var i=0;i<r.length;i++)s(r[i]);var o=p;c.push([407,0]),e()}({1:function(n,s){n.exports=Vue},199:function(n,s,e){"use strict";e.d(s,"a",function(){return a}),e.d(s,"b",function(){return l});var a=function(){var n=this.$createElement,s=this._self._c||n;return s("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[s("script",{attrs:{type:"text/markdown"}},[this._v('\n\n# 形态\n\n形态是一种通用的组件属性，用来改变组件的外观，有一套全局的规范。所有组件都可以支持形态，不同的组件会根据实际情况支持。\n\n目前形态包含三类：`尺寸`、`色彩`、`状态`。\n\n每一个形态都是配置，你可以像下面这样使用：\n\n```html\n\x3c!-- 使用XL尺寸的ui-btn组件 --\x3e\n<ui-btn size="xl"></ui-btn>\n```\n\n不同类型的形态可以在同一组件上使用：\n\n```html\n\x3c!-- 使用XL尺寸，危险色彩，加载状态的ui-btn组件 --\x3e\n<ui-btn size="xl" color="danger" state="loading"></ui-btn>\n```\n\n但是同一类型的形态只能使用一个。\n\n### 尺寸\n\n组件的大小，包含：\n\n- `xxl` : 超大\n- `xl` : 大\n- `l` : 较大\n- `m` : 中\n- `s` : 较小\n- `xs` : 小\n- `xxs` : 超小\n\n组件会根据实际情况支持其中的部分尺寸(至少支持一种)，大部分组件的默认尺寸都是`m`。\n\n### 颜色\n\n组件的配色，包含：`主题色`、`功能色`、`辅助色`。\n\n#### 主题色\n\nUI的主色彩，Morning默认采用红色，使用者可以自己定义主题色。\n\n<div class="colorFlex">\n    <div class="item w3" style="background:#f86f88;">\n        <p class="key">light-theme</p>\n        <p class="name">浅主题色</p>\n        <p class="color">#f86f88</p>\n    </div>\n    <div class="item w3" style="background:#f33d5d;">\n        <p class="key">theme</p>\n        <p class="name">主题色</p>\n        <p class="color">#f33d5d</p>\n    </div>\n    <div class="item w3" style="background:#d22343;">\n        <p class="key">dark-theme</p>\n        <p class="name">深主题色</p>\n        <p class="color">#d22343</p>\n    </div>\n</div>\n\n#### 功能色\n\n功能色具有一定的含义，可以用在特定的场景，比如绿色表示成功，黄色表示警告。\n\n<div class="colorFlex">\n    <div class="item w3" style="background:#4dbd67;">\n        <p class="key">success</p>\n        <p class="name">成功/正确</p>\n        <p class="color">#4dbd67</p>\n    </div>\n    <div class="item w3" style="background:#f0ad4e;">\n        <p class="key">warning</p>\n        <p class="name">警告/注意</p>\n        <p class="color">#f0ad4e</p>\n    </div>\n    <div class="item w3" style="background:#d64431;">\n        <p class="key">danger</p>\n        <p class="name">错误/危险</p>\n        <p class="color">#d64431</p>\n    </div>\n</div>\n\n<div class="colorFlex">\n    <div class="item w3" style="background:#2185d0;">\n        <p class="key">primary</p>\n        <p class="name">主要/关键</p>\n        <p class="color">#2185d0</p>\n    </div>\n    <div class="item w3" style="background:#a9a9a9;">\n        <p class="key">minor</p>\n        <p class="name">次要/不醒目</p>\n        <p class="color">#a9a9a9</p>\n    </div>\n    <div class="item w3" style="background:#03a6b9;">\n        <p class="key">info</p>\n        <p class="name">信息/额外</p>\n        <p class="color">#03a6b9</p>\n    </div>\n</div>\n\n#### 辅助色\n\n用于边框、背景、文本等场景。辅助色具有一定色阶，可用来表现层次。\n\n<div class="colorFlex">\n    <div class="item w4 group">\n        <div class="item" style="background:#17212d">\n            <p class="key">black</p>\n            <p class="name">黑色</p>\n            <p class="color">#17212d</p>\n        </div>\n        <div class="item" style="background:#303c4b">\n            <p class="key">light-black</p>\n            <p class="name">浅黑色</p>\n            <p class="color">#303c4b</p>\n        </div>\n        <div class="item" style="background:#45505c">\n            <p class="key">extra-light-black</p>\n            <p class="name">超浅黑色</p>\n            <p class="color">#45505c</p>\n        </div>\n    </div>\n    <div class="item w4 group">\n        <div class="item" style="background:#7c8ba0">\n            <p class="key">blue</p>\n            <p class="name">青色</p>\n            <p class="color">#7c8ba0</p>\n        </div>\n        <div class="item" style="background:#8e9caf">\n            <p class="key">light-blue</p>\n            <p class="name">浅青色</p>\n            <p class="color">#8e9caf</p>\n        </div>\n        <div class="item" style="background:#a8b3c2">\n            <p class="key">extra-light-blue</p>\n            <p class="name">超浅青色</p>\n            <p class="color">#a8b3c2</p>\n        </div>\n    </div>\n    <div class="item w4 group colorDark">\n        <div class="item" style="background:#d6dde5">\n            <p class="key">silver</p>\n            <p class="name">银色</p>\n            <p class="color">#d6dde5</p>\n        </div>\n        <div class="item" style="background:#e2e8ee">\n            <p class="key">light-silver</p>\n            <p class="name">浅银色</p>\n            <p class="color">#e2e8ee</p>\n        </div>\n        <div class="item" style="background:#edf1f5">\n            <p class="key">extra-light-silver</p>\n            <p class="name">超浅银色</p>\n            <p class="color">#edf1f5</p>\n        </div>\n    </div>\n    <div class="item w4 group colorDark">\n        <div class="item" style="background:#e6e6e6">\n            <p class="key">gray</p>\n            <p class="name">灰色</p>\n            <p class="color">#e6e6e6</p>\n        </div>\n        <div class="item" style="background:#f0f0f0">\n            <p class="key">light-gray</p>\n            <p class="name">浅灰色</p>\n            <p class="color">#f0f0f0</p>\n        </div>\n        <div class="item" style="background:#fff">\n            <p class="key">white</p>\n            <p class="name">白色</p>\n            <p class="color">#ffffff</p>\n        </div>\n    </div>\n</div>\n\n你也可以在组件外使用这些颜色，查看：[配色](/guide/uniformcolor.html)。\n\n### 状态\n\n组件当前的状态，包括：\n\n- `normal` : 正常状态 \n- `hover` : Hover状态\n- `active` : 激活状态\n- `disabled` : 禁用状态\n- `readonly` : 只读状态\n- `apparent` : 醒目状态\n\n组件会根据实际情况支持其中的部分状态(至少支持一种)，大部分组件的默认状态都是`normal`。\n\n#### `disabled`和`readonly`的区别\n\n组件`disabled`后无法在UI层面修改表单值，也无法通过`set`方法设置表单值。但`readonly`仅在UI层面修改表单值，仍可以通过`set`或组件其他方法设置表单值。\n\n')])])},l=[];a._withStripped=!0},406:function(n,s,e){"use strict";e.r(s);var a=e(93),l=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(s,n,function(){return a[n]})}(c);var t=e(199),r=e(0),p=!1;var i=function(n){p||e(782)},o=Object(r.a)(l.a,t.a,t.b,!1,i,null,null);o.options.__file="src/docs/pages/guide/status/index.vue",s.default=o.exports},407:function(n,s,e){"use strict";var a=c(e(1)),l=c(e(406));function c(n){return n&&n.__esModule?n:{default:n}}new a.default({el:"#root",render:function(n){return n(l.default)}})},782:function(n,s){},93:function(n,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a,l=e(3),c=(a=l)&&a.__esModule?a:{default:a};s.default={data:function(){return{page:"status"}},components:{"doc-guide":c.default}},n.exports=s.default}});