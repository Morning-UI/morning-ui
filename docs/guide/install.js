!function(n){function e(e){for(var r,s,u=e[0],a=e[1],c=e[2],p=0,l=[];p<u.length;p++)s=u[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&l.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(f&&f(e);l.length;)l.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),n=s(s.s=t[0]))}return n}var r={},o={106:0},i=[];function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=r,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)s.d(t,r,function(e){return n[e]}.bind(null,r));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var f=a;i.push([670,0]),t()}({1:function(n,e){n.exports=Vue},316:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 安装\n\n## 安装Vue\n\n由于MorningUI依赖Vue.js，请先安装`2.5.3`以上且`2.6.0`以下的Vue.js（推荐使用`2.5.22`版本的Vue.js）。\n\n[了解如何安装Vue.js](https://cn.vuejs.org/v2/guide/installation.html)\n\n## 获取MorningUI\n\nMorning UI的构建版本位于`dist`目录，包含四个文件：\n\n- `morning-ui.js` : 开发版本JS\n- `morning-ui.css` : 开发版本CSS\n- `morning-ui.min.js` : 生产版本JS\n- `morning-ui.min.css` : 生产版本CSS\n\n<ui-quote color="theme">我们建议在生产环境锁定版本并使用稳定版本的Morning UI，详见：<a href="/guide/roadmap.html">路线图</a> 及 <a href="/guide/logs.html">更新日志</a></ui-quote>\n\n你可以通过下面的方式获取：\n\n#### 直接下载\n\n<ui-btn size="m" new-tab id="download">下载</ui-btn>\n\n<a href="/guide/logs.html">下载历史版本(Package)</a>\n\n#### NPM安装\n\n推荐使用NPM的方式安装，它能很好地和诸如`Webpack`或`Rollup`模块打包器配合使用。\n\n```shell\n# 最新版\n$ npm install morning-ui\n```\n\n#### CDN\n\n- 最新版Morning UI：\n    - jsdelivr\n        - [https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.js](https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.js) \n        - [https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.css](https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.css)\n        - [https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.js](https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.js) \n        - [https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.css](https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.css)\n    - unpkg\n        - [https://unpkg.com/morning-ui/dist/morning-ui.js](https://unpkg.com/morning-ui/dist/morning-ui.js) \n        - [https://unpkg.com/morning-ui/dist/morning-ui.css](https://unpkg.com/morning-ui/dist/morning-ui.css)\n        - [https://unpkg.com/morning-ui/dist/morning-ui.min.js](https://unpkg.com/morning-ui/dist/morning-ui.min.js) \n        - [https://unpkg.com/morning-ui/dist/morning-ui.min.css](https://unpkg.com/morning-ui/dist/morning-ui.min.css)\n\n- 历史版本：[https://cdn.jsdelivr.net/npm/morning-ui/](https://cdn.jsdelivr.net/npm/morning-ui/)\n\n我们建议在生产环境锁定版本并使用稳定版本的Morning UI，以免Mroning UI升级时受到兼容性影响。锁定方法是增加`@[锁定的版本号]`关键词，例如锁定在`0.10.21`版本：\n\n- jsdelivr : https://cdn.jsdelivr.net/npm/morning-ui@0.10.21/dist/morning-ui.js\n- unpkg : https://unpkg.com/morning-ui@0.10.21/dist/morning-ui.js\n\n## 页面引用\n\n#### 使用标签\n\n分别使用`<script>`及`<style>`标签在页面中引用：\n\n```html\n\x3c!-- 引入Vue.js --\x3e\n<script src="path-to-vue/vue.js">&lt;/script>\n\n\x3c!-- 引入Morning UI --\x3e\n<link href="path-to-morning/morning-ui.css" rel="stylesheet">\n<script src="path-to-morning/morning-ui.js">&lt;/script>\n\n\x3c!-- 初始化Morning UI --\x3e\n<script>\nVue.use(morning);\n\n// ...\n&lt;/script>\n```\n\n这种方式会在全局注册`window.morning`变量。\n\n#### 使用模块打包器\n\n在JS文件中通过`import`引入：\n\n```js\n// 引入Vue.js\nimport Vue from \'vue\';\n\n// 引入Morning UI\nimport morning from \'morning-ui\';\nimport \'morning-ui/dist/morning-ui.css\';\n\n// 初始化Morning UI\nVue.use(morning);\n```\n\n## 更多\n\n#### 更新日志\n\n查看MorningUI的[更新日志](/guide/logs.html)。\n\n#### 自定义组件库\n\n目前MorningUI不支持自定义组件库，此功能将在稍后支持。\n\n')])])},o=[];r._withStripped=!0,t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o}))},65:function(n,e,t){"use strict";t.r(e);var r=t(66),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e.default=o.a},66:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(t(672)),o=i(t(3));function i(n){return n&&n.__esModule?n:{default:n}}e.default={data:function(){return{page:"install",version:"-"}},components:{"doc-guide":o.default},mounted:function(){var n=this;r.default.get("/package.json").then((function(e){var t=e.data.version,r=n.$el.querySelector("#download");r._vm.conf.link="https://github.com/Morning-UI/morning-ui/archive/"+t+".zip",r.innerText="下载v"+t})).catch((function(n){throw new Error(n)}))}},n.exports=e.default},670:function(n,e,t){"use strict";var r=i(t(1)),o=i(t(671));function i(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},671:function(n,e,t){"use strict";t.r(e);var r=t(316),o=t(65);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);var s=t(0),u=Object(s.a)(o.default,r.a,r.b,!1,null,null,null);u.options.__file="src/docs/pages/guide/install/index.vue",e.default=u.exports},672:function(n,e,t){(function(e){n.exports=function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var t={};return e.m=n,e.c=t,e.p="",e(0)}([function(n,e,t){n.exports=t(1)},function(n,e,t){"use strict";function r(n){var e=new s(n),t=i(s.prototype.request,e);return o.extend(t,s.prototype,e),o.extend(t,e),t}var o=t(2),i=t(3),s=t(5),u=t(22),a=r(t(11));a.Axios=s,a.create=function(n){return r(u(a.defaults,n))},a.Cancel=t(23),a.CancelToken=t(24),a.isCancel=t(10),a.all=function(n){return Promise.all(n)},a.spread=t(25),n.exports=a,n.exports.default=a},function(n,e,t){"use strict";function r(n){return"[object Array]"===c.call(n)}function o(n){return null!==n&&"object"==typeof n}function i(n){return"[object Function]"===c.call(n)}function s(n,e){if(null!=n)if("object"!=typeof n&&(n=[n]),r(n))for(var t=0,o=n.length;t<o;t++)e.call(null,n[t],t,n);else for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.call(null,n[i],i,n)}var u=t(3),a=t(4),c=Object.prototype.toString;n.exports={isArray:r,isArrayBuffer:function(n){return"[object ArrayBuffer]"===c.call(n)},isBuffer:a,isFormData:function(n){return"undefined"!=typeof FormData&&n instanceof FormData},isArrayBufferView:function(n){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer&&n.buffer instanceof ArrayBuffer},isString:function(n){return"string"==typeof n},isNumber:function(n){return"number"==typeof n},isObject:o,isUndefined:function(n){return void 0===n},isDate:function(n){return"[object Date]"===c.call(n)},isFile:function(n){return"[object File]"===c.call(n)},isBlob:function(n){return"[object Blob]"===c.call(n)},isFunction:i,isStream:function(n){return o(n)&&i(n.pipe)},isURLSearchParams:function(n){return"undefined"!=typeof URLSearchParams&&n instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:s,merge:function n(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=n(t[r],e):t[r]=e}for(var t={},r=0,o=arguments.length;r<o;r++)s(arguments[r],e);return t},deepMerge:function n(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=n(t[r],e):t[r]="object"==typeof e?n({},e):e}for(var t={},r=0,o=arguments.length;r<o;r++)s(arguments[r],e);return t},extend:function(n,e,t){return s(e,(function(e,r){n[r]=t&&"function"==typeof e?u(e,t):e})),n},trim:function(n){return n.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(n,e){"use strict";n.exports=function(n,e){return function(){for(var t=new Array(arguments.length),r=0;r<t.length;r++)t[r]=arguments[r];return n.apply(e,t)}}},function(n,e){
/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
n.exports=function(n){return null!=n&&null!=n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n)}},function(n,e,t){"use strict";function r(n){this.defaults=n,this.interceptors={request:new s,response:new s}}var o=t(2),i=t(6),s=t(7),u=t(8),a=t(22);r.prototype.request=function(n){"string"==typeof n?(n=arguments[1]||{}).url=arguments[0]:n=n||{},(n=a(this.defaults,n)).method=n.method?n.method.toLowerCase():"get";var e=[u,void 0],t=Promise.resolve(n);for(this.interceptors.request.forEach((function(n){e.unshift(n.fulfilled,n.rejected)})),this.interceptors.response.forEach((function(n){e.push(n.fulfilled,n.rejected)}));e.length;)t=t.then(e.shift(),e.shift());return t},r.prototype.getUri=function(n){return n=a(this.defaults,n),i(n.url,n.params,n.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],(function(n){r.prototype[n]=function(e,t){return this.request(o.merge(t||{},{method:n,url:e}))}})),o.forEach(["post","put","patch"],(function(n){r.prototype[n]=function(e,t,r){return this.request(o.merge(r||{},{method:n,url:e,data:t}))}})),n.exports=r},function(n,e,t){"use strict";function r(n){return encodeURIComponent(n).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=t(2);n.exports=function(n,e,t){if(!e)return n;var i;if(t)i=t(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,(function(n,e){null!=n&&(o.isArray(n)?e+="[]":n=[n],o.forEach(n,(function(n){o.isDate(n)?n=n.toISOString():o.isObject(n)&&(n=JSON.stringify(n)),s.push(r(e)+"="+r(n))})))})),i=s.join("&")}if(i){var u=n.indexOf("#");-1!==u&&(n=n.slice(0,u)),n+=(-1===n.indexOf("?")?"?":"&")+i}return n}},function(n,e,t){"use strict";function r(){this.handlers=[]}var o=t(2);r.prototype.use=function(n,e){return this.handlers.push({fulfilled:n,rejected:e}),this.handlers.length-1},r.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)},r.prototype.forEach=function(n){o.forEach(this.handlers,(function(e){null!==e&&n(e)}))},n.exports=r},function(n,e,t){"use strict";function r(n){n.cancelToken&&n.cancelToken.throwIfRequested()}var o=t(2),i=t(9),s=t(10),u=t(11),a=t(20),c=t(21);n.exports=function(n){return r(n),n.baseURL&&!a(n.url)&&(n.url=c(n.baseURL,n.url)),n.headers=n.headers||{},n.data=i(n.data,n.headers,n.transformRequest),n.headers=o.merge(n.headers.common||{},n.headers[n.method]||{},n.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete n.headers[e]})),(n.adapter||u.adapter)(n).then((function(e){return r(n),e.data=i(e.data,e.headers,n.transformResponse),e}),(function(e){return s(e)||(r(n),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,n.transformResponse))),Promise.reject(e)}))}},function(n,e,t){"use strict";var r=t(2);n.exports=function(n,e,t){return r.forEach(t,(function(t){n=t(n,e)})),n}},function(n,e){"use strict";n.exports=function(n){return!(!n||!n.__CANCEL__)}},function(n,t,r){"use strict";function o(n,e){!i.isUndefined(n)&&i.isUndefined(n["Content-Type"])&&(n["Content-Type"]=e)}var i=r(2),s=r(12),u={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var n;return void 0!==e&&"[object process]"===Object.prototype.toString.call(e)?n=r(13):"undefined"!=typeof XMLHttpRequest&&(n=r(13)),n}(),transformRequest:[function(n,e){return s(e,"Accept"),s(e,"Content-Type"),i.isFormData(n)||i.isArrayBuffer(n)||i.isBuffer(n)||i.isStream(n)||i.isFile(n)||i.isBlob(n)?n:i.isArrayBufferView(n)?n.buffer:i.isURLSearchParams(n)?(o(e,"application/x-www-form-urlencoded;charset=utf-8"),n.toString()):i.isObject(n)?(o(e,"application/json;charset=utf-8"),JSON.stringify(n)):n}],transformResponse:[function(n){if("string"==typeof n)try{n=JSON.parse(n)}catch(n){}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(n){a.headers[n]={}})),i.forEach(["post","put","patch"],(function(n){a.headers[n]=i.merge(u)})),n.exports=a},function(n,e,t){"use strict";var r=t(2);n.exports=function(n,e){r.forEach(n,(function(t,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(n[e]=t,delete n[r])}))}},function(n,e,t){"use strict";var r=t(2),o=t(14),i=t(6),s=t(17),u=t(18),a=t(15);n.exports=function(n){return new Promise((function(e,c){var f=n.data,p=n.headers;r.isFormData(f)&&delete p["Content-Type"];var l=new XMLHttpRequest;if(n.auth){var d=n.auth.username||"",h=n.auth.password||"";p.Authorization="Basic "+btoa(d+":"+h)}if(l.open(n.method.toUpperCase(),i(n.url,n.params,n.paramsSerializer),!0),l.timeout=n.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,r={data:n.responseType&&"text"!==n.responseType?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:t,config:n,request:l};o(e,c,r),l=null}},l.onabort=function(){l&&(c(a("Request aborted",n,"ECONNABORTED",l)),l=null)},l.onerror=function(){c(a("Network Error",n,null,l)),l=null},l.ontimeout=function(){c(a("timeout of "+n.timeout+"ms exceeded",n,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var m=t(19),g=(n.withCredentials||u(n.url))&&n.xsrfCookieName?m.read(n.xsrfCookieName):void 0;g&&(p[n.xsrfHeaderName]=g)}if("setRequestHeader"in l&&r.forEach(p,(function(n,e){void 0===f&&"content-type"===e.toLowerCase()?delete p[e]:l.setRequestHeader(e,n)})),n.withCredentials&&(l.withCredentials=!0),n.responseType)try{l.responseType=n.responseType}catch(e){if("json"!==n.responseType)throw e}"function"==typeof n.onDownloadProgress&&l.addEventListener("progress",n.onDownloadProgress),"function"==typeof n.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",n.onUploadProgress),n.cancelToken&&n.cancelToken.promise.then((function(n){l&&(l.abort(),c(n),l=null)})),void 0===f&&(f=null),l.send(f)}))}},function(n,e,t){"use strict";var r=t(15);n.exports=function(n,e,t){var o=t.config.validateStatus;!o||o(t.status)?n(t):e(r("Request failed with status code "+t.status,t.config,null,t.request,t))}},function(n,e,t){"use strict";var r=t(16);n.exports=function(n,e,t,o,i){var s=new Error(n);return r(s,e,t,o,i)}},function(n,e){"use strict";n.exports=function(n,e,t,r,o){return n.config=e,t&&(n.code=t),n.request=r,n.response=o,n.isAxiosError=!0,n.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},n}},function(n,e,t){"use strict";var r=t(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];n.exports=function(n){var e,t,i,s={};return n?(r.forEach(n.split("\n"),(function(n){if(i=n.indexOf(":"),e=r.trim(n.substr(0,i)).toLowerCase(),t=r.trim(n.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([t]):s[e]?s[e]+", "+t:t}})),s):s}},function(n,e,t){"use strict";var r=t(2);n.exports=r.isStandardBrowserEnv()?function(){function n(n){var e=n;return t&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,t=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=n(window.location.href),function(t){var o=r.isString(t)?n(t):t;return o.protocol===e.protocol&&o.host===e.host}}():function(){return!0}},function(n,e,t){"use strict";var r=t(2);n.exports=r.isStandardBrowserEnv()?{write:function(n,e,t,o,i,s){var u=[];u.push(n+"="+encodeURIComponent(e)),r.isNumber(t)&&u.push("expires="+new Date(t).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===s&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){var e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(n,e){"use strict";n.exports=function(n){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(n)}},function(n,e){"use strict";n.exports=function(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}},function(n,e,t){"use strict";var r=t(2);n.exports=function(n,e){e=e||{};var t={};return r.forEach(["url","method","params","data"],(function(n){void 0!==e[n]&&(t[n]=e[n])})),r.forEach(["headers","auth","proxy"],(function(o){r.isObject(e[o])?t[o]=r.deepMerge(n[o],e[o]):void 0!==e[o]?t[o]=e[o]:r.isObject(n[o])?t[o]=r.deepMerge(n[o]):void 0!==n[o]&&(t[o]=n[o])})),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(r){void 0!==e[r]?t[r]=e[r]:void 0!==n[r]&&(t[r]=n[r])})),t}},function(n,e){"use strict";function t(n){this.message=n}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,n.exports=t},function(n,e,t){"use strict";function r(n){if("function"!=typeof n)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(n){e=n}));var t=this;n((function(n){t.reason||(t.reason=new o(n),e(t.reason))}))}var o=t(23);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var n;return{token:new r((function(e){n=e})),cancel:n}},n.exports=r},function(n,e){"use strict";n.exports=function(n){return function(e){return n.apply(null,e)}}}])}).call(this,t(673))},673:function(n,e){var t,r,o=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(n){if(t===setTimeout)return setTimeout(n,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(e){try{return t.call(null,n,0)}catch(e){return t.call(this,n,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(n){t=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(n){r=s}}();var a,c=[],f=!1,p=-1;function l(){f&&a&&(f=!1,a.length?c=a.concat(c):p=-1,c.length&&d())}function d(){if(!f){var n=u(l);f=!0;for(var e=c.length;e;){for(a=c,c=[];++p<e;)a&&a[p].run();p=-1,e=c.length}a=null,f=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(e){try{return r.call(null,n)}catch(e){return r.call(this,n)}}}(n)}}function h(n,e){this.fun=n,this.array=e}function m(){}o.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];c.push(new h(n,e)),1!==c.length||f||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(n){return[]},o.binding=function(n){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(n){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}});