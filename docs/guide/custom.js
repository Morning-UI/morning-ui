!function(n){function e(e){for(var r,u,s=e[0],l=e[1],a=e[2],f=0,d=[];f<s.length;f++)u=s[f],o[u]&&d.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(n[r]=l[r]);for(c&&c(e);d.length;)d.shift()();return i.push.apply(i,a||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,s=1;s<t.length;s++){var l=t[s];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},o={104:0},i=[];function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)u.d(t,r,function(e){return n[e]}.bind(null,r));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var c=l;i.push([672,0]),t()}({1:function(n,e){n.exports=Vue},309:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 定制化\n\nMorning UI目前支持主题色及圆角自定义。\n\n## 使用模块打包器\n\n若你的工程采用了类似`Webpack`这样的模块打包器，可以通过LESS变量覆盖的方式来实现定制化。\n\n首先在项目中创建一个主题样式文件，比如：`my-theme.less`，在文件中写入以下内容：\n\n```less\n@import '~morning-ui/src/lib/styles/index.less';\n\n// 自定主题色\n@colorTheme : #2890DA;\n@colorLightTheme : #3594D8;\n@colorDarkTheme : #0672BF;\n\n// 自定圆角\n@borderRadius : 0;\n```\n\n然后在项目中引入Morning UI时，将`import 'morning-ui/dist/morning-ui.css';`替换成`my-theme.less`这个文件，比如：\n\n```js\n// 引入Vue.js\nimport Vue from 'vue';\n\n// 引入Morning UI\nimport morning from 'morning-ui';\n\n// 引入定制化的主题\nimport './theme/my-theme.less';\n\n// 初始化Morning UI\nVue.use(morning);\n```\n\n使用时需要注意:\n\n- 由于Morning UI的样式中引用了`less`及`woff`文件，请确保你的模块打包器配置可处理此类型的文件。\n- 由于Morning UI依赖了额外的样式，需要安装依赖：`@csstools/normalize.css@9.0.1`和`quill@1.3.6`。\n\n注意：若你的项目未使用模块打包器，则暂时不支持定制化。\n\n#### 主题色\n\nMorning UI默认使用了以下的主题色：\n\n```less\n@colorTheme : #F33D5D;\n@colorLightTheme : #F86F88;\n@colorDarkTheme : #D22343;\n```\n\n在主题色定制时需要注意的是Morning UI中除了主题色之外，分别有浅主题色、深主题色总共三种颜色，都需要进行覆写。\n\n#### 圆角\n\nMorning UI默认使用了`3px`的圆角，应用在了所有组件中：\n\n```less\n@borderRadius : 3px;\n```\n\n#### 栅格间隔\n\n栅格的五种尺寸的默认间隔分别是：\n\n- `xs` : `4px`\n- `s` : `8px`\n- `m` : `16px`\n- `l` : `24px`\n- `xl` : `36px`\n\n可以通过以下的LESS变量进行修改：\n\n```less\n@gridGutterWidthXs : 4px;\n@gridGutterWidthS : 8px;\n@gridGutterWidthM : 16px;\n@gridGutterWidthL : 24px;\n@gridGutterWidthXL : 36px;\n```\n\n")])])},o=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})},63:function(n,e,t){"use strict";t.r(e);var r=t(64),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,function(){return r[n]})}(i);e.default=o.a},64:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(3),i=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"custom"}},components:{"doc-guide":i.default}},n.exports=e.default},672:function(n,e,t){"use strict";var r=i(t(1)),o=i(t(673));function i(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},673:function(n,e,t){"use strict";t.r(e);var r=t(309),o=t(63);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);var u=t(0),s=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);s.options.__file="src/docs/pages/guide/custom/index.vue",e.default=s.exports}});