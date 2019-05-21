!function(n){function s(s){for(var l,c,r=s[0],o=s[1],i=s[2],d=0,u=[];d<r.length;d++)c=r[d],a[c]&&u.push(a[c][0]),a[c]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l]);for(p&&p(s);u.length;)u.shift()();return t.push.apply(t,i||[]),e()}function e(){for(var n,s=0;s<t.length;s++){for(var e=t[s],l=!0,r=1;r<e.length;r++){var o=e[r];0!==a[o]&&(l=!1)}l&&(t.splice(s--,1),n=c(c.s=e[0]))}return n}var l={},a={93:0},t=[];function c(s){if(l[s])return l[s].exports;var e=l[s]={i:s,l:!1,exports:{}};return n[s].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=l,c.d=function(n,s,e){c.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:e})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,s){if(1&s&&(n=c(n)),8&s)return n;if(4&s&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&s&&"string"!=typeof n)for(var l in n)c.d(e,l,function(s){return n[s]}.bind(null,l));return e},c.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(s,"a",s),s},c.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},c.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],o=r.push.bind(r);r.push=s,r=r.slice();for(var i=0;i<r.length;i++)s(r[i]);var p=o;t.push([681,0]),e()}({1:function(n,s){n.exports=Vue},351:function(n,s,e){"use strict";var l=function(){var n=this.$createElement,s=this._self._c||n;return s("doc-design",{attrs:{page:this.page,hasPadding:!0}},[s("script",{attrs:{type:"text/markdown"}},[this._v('\n\n# 色彩\n\nMorning UI采用了一套特定的色板来规定使用的颜色，这可以为你的产品提供一致的视觉感受，这套颜色分为：`主色`、`功能色`、`中性色`。\n\n#### 主色\n\nUI的主色彩，Morning默认采用红色，使用者可以自己定义主题色。\n\n页面中尽量不要大面积使用，容易产生冲突和混淆。\n\n<div class="colorFlex">\n    <div class="item w3" style="background:#F86F88;">\n        <p class="key">light-theme</p>\n        <p class="name">浅主题色</p>\n        <p class="color">#F86F88</p>\n    </div>\n    <div class="item w3" style="background:#F33D5D;">\n        <p class="key">theme</p>\n        <p class="name">主题色</p>\n        <p class="color">#F33D5D</p>\n    </div>\n    <div class="item w3" style="background:#D22343;">\n        <p class="key">dark-theme</p>\n        <p class="name">深主题色</p>\n        <p class="color">#D22343</p>\n    </div>\n</div>\n\n#### 功能色\n\n功能色具有一定的含义，可以用在特定的场景，比如绿色表示成功，黄色表示警告。\n\n<div class="colorFlex">\n    <div class="item w3" style="background:#4dbd67;">\n        <p class="key">success</p>\n        <p class="name">成功/正确</p>\n        <p class="color">#4dbd67</p>\n    </div>\n    <div class="item w3" style="background:#f0ad4e;">\n        <p class="key">warning</p>\n        <p class="name">警告/注意</p>\n        <p class="color">#f0ad4e</p>\n    </div>\n    <div class="item w3" style="background:#d64431;">\n        <p class="key">danger</p>\n        <p class="name">错误/危险</p>\n        <p class="color">#d64431</p>\n    </div>\n</div>\n\n<div class="colorFlex">\n    <div class="item w3" style="background:#2185d0;">\n        <p class="key">primary</p>\n        <p class="name">主要/关键</p>\n        <p class="color">#2185d0</p>\n    </div>\n    <div class="item w3" style="background:#a9a9a9;">\n        <p class="key">minor</p>\n        <p class="name">次要/不醒目</p>\n        <p class="color">#a9a9a9</p>\n    </div>\n    <div class="item w3" style="background:#03a6b9;">\n        <p class="key">info</p>\n        <p class="name">信息/额外</p>\n        <p class="color">#03a6b9</p>\n    </div>\n</div>\n\n#### 中性色\n\n灰色是中性化的颜色，可传递“沉稳、专业、系统”的感情色彩。适用于文字、背景、边框颜色，运用不同的中性色，来表现层次结构。\n\n<div class="colorFlex">\n    <div class="item w11 group">\n        <div class="item" style="background:#333333">\n            <p class="key">neutral-11</p>\n            <p class="color">#333333</p>\n        </div>\n        <div class="item" style="background:#4C4C4C">\n            <p class="key">neutral-10</p>\n            <p class="color">#4C4C4C</p>\n        </div>\n        <div class="item" style="background:#666666">\n            <p class="key">neutral-9</p>\n            <p class="color">#666666</p>\n        </div>\n        <div class="item" style="background:#7F7F7F">\n            <p class="key">neutral-8</p>\n            <p class="color">#7F7F7F</p>\n        </div>\n        <div class="item" style="background:#999999">\n            <p class="key">neutral-7</p>\n            <p class="color">#999999</p>\n        </div>\n        <div class="item" style="background:#B2B2B2">\n            <p class="key">neutral-6</p>\n            <p class="color">#B2B2B2</p>\n        </div>\n        <div class="item" style="background:#CCCCCC;color:#000">\n            <p class="key">neutral-5</p>\n            <p class="color">#CCCCCC</p>\n        </div>\n        <div class="item" style="background:#D9D9D9;color:#000">\n            <p class="key">neutral-4</p>\n        <p class="color">#D9D9D9</p>\n        </div>\n        <div class="item" style="background:#E0E0E0;color:#000">\n            <p class="key">neutral-3</p>\n            <p class="color">#E0E0E0</p>\n        </div>\n        <div class="item" style="background:#E5E5E5;color:#000">\n            <p class="key">neutral-2</p>\n            <p class="color">#E5E5E5</p>\n        </div>\n        <div class="item" style="background:#F0F0F0;color:#000">\n            <p class="key">neutral-1</p>\n            <p class="color">#F0F0F0</p>\n        </div>\n    </div>\n</div>\n\n<div class="colorFlex" style="margin-top:15px;">\n    <div class="item w3" style="background:#FFFFFF;color: #000;border: 1px #CCC solid;">\n        <p class="key">white</p>\n        <p class="name">纯白</p>\n        <p class="color">#FFFFFF</p>\n    </div>\n    <div class="item w3" style="background:#000000;color: #FFF">\n        <p class="key">black</p>\n        <p class="name">纯黑</p>\n        <p class="color">#000000</p>\n    </div>\n    <div class="item w3" style="background:transparent;color: #000;border: 1px #ff2a4f solid;position: relative;">\n        <span class="line"></span>\n        <p class="key">transparent</p>\n        <p class="name">透明</p>\n        <p class="color">Transparent</p>\n    </div>\n</div>\n\n<br>\n\n#### 使用\n\n在组件中使用：\n\n- 请查看[形态/色彩](/guide/status.html#色彩)\n\n在组件之外使用：\n\n- 通过CSS类，请查看：[配色](/component/uniformcolor.html)\n- 使用色值，请查看：[设计/色彩](/design/color.html)\n\n')])])},a=[];l._withStripped=!0,e.d(s,"a",function(){return l}),e.d(s,"b",function(){return a})},681:function(n,s,e){"use strict";var l=t(e(1)),a=t(e(682));function t(n){return n&&n.__esModule?n:{default:n}}new l.default({el:"#root",render:function(n){return n(a.default)}})},682:function(n,s,e){"use strict";e.r(s);var l=e(351),a=e(80);for(var t in a)"default"!==t&&function(n){e.d(s,n,function(){return a[n]})}(t);e(683);var c=e(0),r=Object(c.a)(a.default,l.a,l.b,!1,null,null,null);r.options.__file="src/docs/pages/design/color/index.vue",s.default=r.exports},683:function(n,s,e){"use strict";var l=e(903);e.n(l).a},80:function(n,s,e){"use strict";e.r(s);var l=e(81),a=e.n(l);for(var t in l)"default"!==t&&function(n){e.d(s,n,function(){return l[n]})}(t);s.default=a.a},81:function(n,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l,a=e(272),t=(l=a)&&l.__esModule?l:{default:l};s.default={data:function(){return{page:"color"}},components:{"doc-design":t.default}},n.exports=s.default},903:function(n,s){}});