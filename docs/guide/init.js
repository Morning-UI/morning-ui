!function(n){function e(e){for(var r,i,a=e[0],f=e[1],c=e[2],s=0,p=[];s<a.length;s++)i=a[s],o[i]&&p.push(o[i][0]),o[i]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(n[r]=f[r]);for(l&&l(e);p.length;)p.shift()();return u.push.apply(u,c||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],r=!0,a=1;a<t.length;a++){var f=t[a];0!==o[f]&&(r=!1)}r&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={93:0},u=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],f=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=f;u.push([465,0]),t()}({1:function(n,e){n.exports=Vue},144:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o});var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 初始化\n\n在使用Morning UI之前，需要先通过`Vue.use(morning, [options])`方法来初始化。\n\n初始化方法接受一个`options`对象来对Morning UI进行初始化配置，`options`的参数都是可选的，详见下表：\n\n|参数|描述|类型|\n|-|-|-|\n|prefix|组件标签前缀，默认为ui，可在冲突时使用自定义|`string`|\n|uploader|文件上传组件的适配器，用来将文件上传到服务端|`function`|\n\n## 更改组件标签前缀\n\n默认情况下Morning UI采用`ui`作为组件标签的前缀，比如使用按钮组件时，需要使用`<ui-btn></ui-btn>`标签。但在某些场景下可能`<ui-*>`这样的标签已经被占用，因此Morning UI允许你在初始化时修改组件标签的前缀：\n\n```js\nVue.use(morning, {\n    prefix : 'v'\n});\n```\n\n比如通过上面的代码初始化后，需要使用`<v-btn><v-btn>`来使用按钮组件。注意`前缀`和`组件名`之间的中划线是固定的无法改变。\n\n由于Morning UI最终生成的HTML标签以`mor-`为前缀，所以`prefix`无法设置为`mor`。\n\n## 全局文件上传适配器\n\n你可以设置全局的文件上传适配器，在没有为文件组件指定适配器时，将使用全局的适配器。\n\n```js\nVue.use(morning, {\n    uploader : () => {\n        // 上传文件逻辑...\n    }\n});\n```\n\n详见：[文件上传适配器](/component/upload.html#文件上传适配器)\n\n")])])},o=[];r._withStripped=!0},26:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(3),u=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"init"}},components:{"doc-guide":u.default}},n.exports=e.default},465:function(n,e,t){"use strict";var r=u(t(1)),o=u(t(466));function u(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},466:function(n,e,t){"use strict";t.r(e);var r=t(26),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);var i=t(144),a=t(0),f=!1;var c=function(n){f||t(701)},l=Object(a.a)(o.a,i.a,i.b,!1,c,null,null);l.options.__file="src/docs/pages/guide/init/index.vue",e.default=l.exports},701:function(n,e){}});