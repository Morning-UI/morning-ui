!function(n){function t(t){for(var r,s,u=t[0],a=t[1],c=t[2],p=0,l=[];p<u.length;p++)s=u[p],o[s]&&l.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r]);for(f&&f(t);l.length;)l.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],r=!0,u=1;u<e.length;u++){var a=e[u];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),n=s(s.s=e[0]))}return n}var r={},o={82:0};var i=[];function s(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=n,s.c=r,s.d=function(n,t,e){s.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},s.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},s.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(t,"a",t),t},s.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},s.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=a;i.push([393,0]),e()}({1:function(n,t){n.exports=Vue},192:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return o});var r=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-guide",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v('\n# 安装\n\n### 安装Vue\n\n由于MorningUI依赖Vue.js，请先安装`2.5.3`以上的Vue.js。\n\n[了解如何安装Vue.js](https://cn.vuejs.org/v2/guide/installation.html)\n\n### 获取MorningUI\n\nMorning UI的构建版本位于`dist`目录，包含四个文件：\n\n- `morning-ui.js` : 开发版本JS\n- `morning-ui.css` : 开发版本CSS\n- `morning-ui.min.js` : 生产版本JS\n- `morning-ui.min.css` : 生产版本CSS\n\n<ui-quote color="theme">我们建议在生产环境锁定版本并使用稳定版本的Morning UI，详见：<a href="/guide/versionplan.html">版本计划</a> 及 <a href="/guide/logs.html">更新日志</a></ui-quote>\n\n你可以通过下面的方式获取：\n\n##### 直接下载\n\n<ui-btn size="m" new-tab id="download">下载</ui-btn>\n\n<a href="/guide/logs.html">下载历史版本(Package)</a>\n\n##### NPM安装\n\n推荐使用NPM的方式安装，它能很好地和诸如`Webpack`或`Rollup`模块打包器配合使用。\n\n```shell\n# 最新版\n$ npm install morning-ui\n```\n\n##### CDN\n\n- 最新版Morning UI：\n    - jsdelivr\n        - [https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.js](https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.js) \n        - [https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.css](https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.css)\n        - [https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.js](https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.js) \n        - [https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.css](https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.css)\n    - unpkg\n        - [https://unpkg.com/morning-ui/dist/morning-ui.js](https://unpkg.com/morning-ui/dist/morning-ui.js) \n        - [https://unpkg.com/morning-ui/dist/morning-ui.css](https://unpkg.com/morning-ui/dist/morning-ui.css)\n        - [https://unpkg.com/morning-ui/dist/morning-ui.min.js](https://unpkg.com/morning-ui/dist/morning-ui.min.js) \n        - [https://unpkg.com/morning-ui/dist/morning-ui.min.css](https://unpkg.com/morning-ui/dist/morning-ui.min.css)\n\n- 历史版本：[https://cdn.jsdelivr.net/npm/morning-ui/](https://cdn.jsdelivr.net/npm/morning-ui/)\n\n我们建议在生产环境锁定版本并使用稳定版本的Morning UI，以免Mroning UI升级时受到兼容性影响。锁定方法是增加`@[锁定的版本号]`关键词，例如锁定在`0.10.21`版本：\n\n- jsdelivr : https://cdn.jsdelivr.net/npm/morning-ui@0.10.21/dist/morning-ui.js\n- unpkg : https://unpkg.com/morning-ui@0.10.21/dist/morning-ui.js\n\n### 页面引用\n\n##### 使用标签\n\n分别使用`<script>`及`<style>`标签在页面中引用：\n\n```html\n\x3c!-- 引入Vue.js --\x3e\n<script src="path-to-vue/vue.js">&lt;/script>\n\n\x3c!-- 引入Morning UI --\x3e\n<link href="path-to-morning/morning-ui.css" rel="stylesheet">\n<script src="path-to-morning/morning-ui.js">&lt;/script>\n\n\x3c!-- 初始化Morning UI --\x3e\n<script>\nVue.use(morning);\n\n// ...\n&lt;/script>\n```\n\n这种方式会在全局注册`window.morning`变量。\n\n##### 使用模块打包器\n\n在JS文件中通过`import`引入：\n\n```js\n// 引入Vue.js\nimport Vue from \'vue\';\n\n// 引入Morning UI\nimport morning from \'morning-ui\';\nimport \'morning-ui/dist/morning-ui.css\';\n\n// 初始化Morning UI\nVue.use(morning);\n```\n\n### 更多\n\n#### 更新日志\n\n查看MorningUI的[更新日志](/guide/logs.html)。\n\n#### 自定义组件库\n\n目前MorningUI不支持自定义组件库，此功能将在稍后支持。\n\n')])])},o=[];r._withStripped=!0},390:function(n,t){var e,r,o=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(n){if(e===setTimeout)return setTimeout(n,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(n){e=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(n){r=s}}();var a,c=[],f=!1,p=-1;function l(){f&&a&&(f=!1,a.length?c=a.concat(c):p=-1,c.length&&d())}function d(){if(!f){var n=u(l);f=!0;for(var t=c.length;t;){for(a=c,c=[];++p<t;)a&&a[p].run();p=-1,t=c.length}a=null,f=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(t){try{return r.call(null,n)}catch(t){return r.call(this,n)}}}(n)}}function h(n,t){this.fun=n,this.array=t}function m(){}o.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];c.push(new h(n,t)),1!==c.length||f||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(n){return[]},o.binding=function(n){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(n){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},391:function(n,t,e){(function(t){n.exports=function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){n.exports=e(1)},function(n,t,e){"use strict";function r(n){var t=new s(n),e=i(s.prototype.request,t);return o.extend(e,s.prototype,t),o.extend(e,t),e}var o=e(2),i=e(3),s=e(5),u=e(6),a=r(u);a.Axios=s,a.create=function(n){return r(o.merge(u,n))},a.Cancel=e(23),a.CancelToken=e(24),a.isCancel=e(20),a.all=function(n){return Promise.all(n)},a.spread=e(25),n.exports=a,n.exports.default=a},function(n,t,e){"use strict";function r(n){return"[object Array]"===c.call(n)}function o(n){return null!==n&&"object"==typeof n}function i(n){return"[object Function]"===c.call(n)}function s(n,t){if(null!==n&&void 0!==n)if("object"==typeof n||r(n)||(n=[n]),r(n))for(var e=0,o=n.length;e<o;e++)t.call(null,n[e],e,n);else for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.call(null,n[i],i,n)}var u=e(3),a=e(4),c=Object.prototype.toString;n.exports={isArray:r,isArrayBuffer:function(n){return"[object ArrayBuffer]"===c.call(n)},isBuffer:a,isFormData:function(n){return"undefined"!=typeof FormData&&n instanceof FormData},isArrayBufferView:function(n){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer&&n.buffer instanceof ArrayBuffer},isString:function(n){return"string"==typeof n},isNumber:function(n){return"number"==typeof n},isObject:o,isUndefined:function(n){return void 0===n},isDate:function(n){return"[object Date]"===c.call(n)},isFile:function(n){return"[object File]"===c.call(n)},isBlob:function(n){return"[object Blob]"===c.call(n)},isFunction:i,isStream:function(n){return o(n)&&i(n.pipe)},isURLSearchParams:function(n){return"undefined"!=typeof URLSearchParams&&n instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:s,merge:function n(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=n(e[r],t):e[r]=t}for(var e={},r=0,o=arguments.length;r<o;r++)s(arguments[r],t);return e},extend:function(n,t,e){return s(t,function(t,r){n[r]=e&&"function"==typeof t?u(t,e):t}),n},trim:function(n){return n.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(n,t){"use strict";n.exports=function(n,t){return function(){for(var e=new Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];return n.apply(t,e)}}},function(n,t){function e(n){return!!n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n)}
/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
n.exports=function(n){return null!=n&&(e(n)||function(n){return"function"==typeof n.readFloatLE&&"function"==typeof n.slice&&e(n.slice(0,0))}(n)||!!n._isBuffer)}},function(n,t,e){"use strict";function r(n){this.defaults=n,this.interceptors={request:new s,response:new s}}var o=e(6),i=e(2),s=e(17),u=e(18),a=e(21),c=e(22);r.prototype.request=function(n){"string"==typeof n&&(n=i.merge({url:arguments[0]},arguments[1])),(n=i.merge(o,this.defaults,{method:"get"},n)).method=n.method.toLowerCase(),n.baseURL&&!a(n.url)&&(n.url=c(n.baseURL,n.url));var t=[u,void 0],e=Promise.resolve(n);for(this.interceptors.request.forEach(function(n){t.unshift(n.fulfilled,n.rejected)}),this.interceptors.response.forEach(function(n){t.push(n.fulfilled,n.rejected)});t.length;)e=e.then(t.shift(),t.shift());return e},i.forEach(["delete","get","head","options"],function(n){r.prototype[n]=function(t,e){return this.request(i.merge(e||{},{method:n,url:t}))}}),i.forEach(["post","put","patch"],function(n){r.prototype[n]=function(t,e,r){return this.request(i.merge(r||{},{method:n,url:t,data:e}))}}),n.exports=r},function(n,e,r){"use strict";function o(n,t){!i.isUndefined(n)&&i.isUndefined(n["Content-Type"])&&(n["Content-Type"]=t)}var i=r(2),s=r(7),u={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var n;return"undefined"!=typeof XMLHttpRequest?n=r(8):void 0!==t&&(n=r(8)),n}(),transformRequest:[function(n,t){return s(t,"Content-Type"),i.isFormData(n)||i.isArrayBuffer(n)||i.isBuffer(n)||i.isStream(n)||i.isFile(n)||i.isBlob(n)?n:i.isArrayBufferView(n)?n.buffer:i.isURLSearchParams(n)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),n.toString()):i.isObject(n)?(o(t,"application/json;charset=utf-8"),JSON.stringify(n)):n}],transformResponse:[function(n){if("string"==typeof n)try{n=JSON.parse(n)}catch(n){}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],function(n){a.headers[n]={}}),i.forEach(["post","put","patch"],function(n){a.headers[n]=i.merge(u)}),n.exports=a},function(n,t,e){"use strict";var r=e(2);n.exports=function(n,t){r.forEach(n,function(e,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(n[t]=e,delete n[r])})}},function(n,t,e){"use strict";var r=e(2),o=e(9),i=e(12),s=e(13),u=e(14),a=e(10),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||e(15);n.exports=function(n){return new Promise(function(t,f){var p=n.data,l=n.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||u(n.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),n.auth){var g=n.auth.username||"",v=n.auth.password||"";l.Authorization="Basic "+c(g+":"+v)}if(d.open(n.method.toUpperCase(),i(n.url,n.params,n.paramsSerializer),!0),d.timeout=n.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r=n.responseType&&"text"!==n.responseType?d.response:d.responseText,i={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:e,config:n,request:d};o(t,f,i),d=null}},d.onerror=function(){f(a("Network Error",n,null,d)),d=null},d.ontimeout=function(){f(a("timeout of "+n.timeout+"ms exceeded",n,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var w=e(16),y=(n.withCredentials||u(n.url))&&n.xsrfCookieName?w.read(n.xsrfCookieName):void 0;y&&(l[n.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(l,function(n,t){void 0===p&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,n)}),n.withCredentials&&(d.withCredentials=!0),n.responseType)try{d.responseType=n.responseType}catch(t){if("json"!==n.responseType)throw t}"function"==typeof n.onDownloadProgress&&d.addEventListener("progress",n.onDownloadProgress),"function"==typeof n.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",n.onUploadProgress),n.cancelToken&&n.cancelToken.promise.then(function(n){d&&(d.abort(),f(n),d=null)}),void 0===p&&(p=null),d.send(p)})}},function(n,t,e){"use strict";var r=e(10);n.exports=function(n,t,e){var o=e.config.validateStatus;e.status&&o&&!o(e.status)?t(r("Request failed with status code "+e.status,e.config,null,e.request,e)):n(e)}},function(n,t,e){"use strict";var r=e(11);n.exports=function(n,t,e,o,i){var s=new Error(n);return r(s,t,e,o,i)}},function(n,t){"use strict";n.exports=function(n,t,e,r,o){return n.config=t,e&&(n.code=e),n.request=r,n.response=o,n}},function(n,t,e){"use strict";function r(n){return encodeURIComponent(n).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=e(2);n.exports=function(n,t,e){if(!t)return n;var i;if(e)i=e(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(n,t){null!==n&&void 0!==n&&(o.isArray(n)&&(t+="[]"),o.isArray(n)||(n=[n]),o.forEach(n,function(n){o.isDate(n)?n=n.toISOString():o.isObject(n)&&(n=JSON.stringify(n)),s.push(r(t)+"="+r(n))}))}),i=s.join("&")}return i&&(n+=(-1===n.indexOf("?")?"?":"&")+i),n}},function(n,t,e){"use strict";var r=e(2);n.exports=function(n){var t,e,o,i={};return n?(r.forEach(n.split("\n"),function(n){o=n.indexOf(":"),t=r.trim(n.substr(0,o)).toLowerCase(),e=r.trim(n.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+e:e)}),i):i}},function(n,t,e){"use strict";var r=e(2);n.exports=r.isStandardBrowserEnv()?function(){function n(n){var t=n;return e&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,e=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=n(window.location.href),function(e){var o=r.isString(e)?n(e):e;return o.protocol===t.protocol&&o.host===t.host}}():function(){return!0}},function(n,t){"use strict";function e(){this.message="String contains an invalid character"}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.prototype=new Error,e.prototype.code=5,e.prototype.name="InvalidCharacterError",n.exports=function(n){for(var t,o,i=String(n),s="",u=0,a=r;i.charAt(0|u)||(a="=",u%1);s+=a.charAt(63&t>>8-u%1*8)){if((o=i.charCodeAt(u+=.75))>255)throw new e;t=t<<8|o}return s}},function(n,t,e){"use strict";var r=e(2);n.exports=r.isStandardBrowserEnv()?{write:function(n,t,e,o,i,s){var u=[];u.push(n+"="+encodeURIComponent(t)),r.isNumber(e)&&u.push("expires="+new Date(e).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===s&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){var t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(n,t,e){"use strict";function r(){this.handlers=[]}var o=e(2);r.prototype.use=function(n,t){return this.handlers.push({fulfilled:n,rejected:t}),this.handlers.length-1},r.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)},r.prototype.forEach=function(n){o.forEach(this.handlers,function(t){null!==t&&n(t)})},n.exports=r},function(n,t,e){"use strict";function r(n){n.cancelToken&&n.cancelToken.throwIfRequested()}var o=e(2),i=e(19),s=e(20),u=e(6);n.exports=function(n){r(n),n.headers=n.headers||{},n.data=i(n.data,n.headers,n.transformRequest),n.headers=o.merge(n.headers.common||{},n.headers[n.method]||{},n.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete n.headers[t]});var t=n.adapter||u.adapter;return t(n).then(function(t){return r(n),t.data=i(t.data,t.headers,n.transformResponse),t},function(t){return s(t)||(r(n),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,n.transformResponse))),Promise.reject(t)})}},function(n,t,e){"use strict";var r=e(2);n.exports=function(n,t,e){return r.forEach(e,function(e){n=e(n,t)}),n}},function(n,t){"use strict";n.exports=function(n){return!(!n||!n.__CANCEL__)}},function(n,t){"use strict";n.exports=function(n){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(n)}},function(n,t){"use strict";n.exports=function(n,t){return t?n.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):n}},function(n,t){"use strict";function e(n){this.message=n}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,n.exports=e},function(n,t,e){"use strict";function r(n){if("function"!=typeof n)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(n){t=n});var e=this;n(function(n){e.reason||(e.reason=new o(n),t(e.reason))})}var o=e(23);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var n,t=new r(function(t){n=t});return{token:t,cancel:n}},n.exports=r},function(n,t){"use strict";n.exports=function(n){return function(t){return n.apply(null,t)}}}])}).call(this,e(390))},392:function(n,t,e){"use strict";e.r(t);var r=e(86),o=e.n(r);for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);var s=e(192),u=e(0),a=!1;var c=function(n){a||e(768)},f=Object(u.a)(o.a,s.a,s.b,!1,c,null,null);f.options.__file="src/docs/pages/guide/install/index.vue",t.default=f.exports},393:function(n,t,e){"use strict";var r=i(e(1)),o=i(e(392));function i(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},768:function(n,t){},86:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(e(391)),o=i(e(3));function i(n){return n&&n.__esModule?n:{default:n}}t.default={data:function(){return{page:"install",version:"-"}},components:{"doc-guide":o.default},mounted:function(){var n=this;r.default.get("/package.json").then(function(t){var e=t.data.version,r=n.$el.querySelector("#download");r._vm.conf.link="https://github.com/Morning-UI/morning-ui/archive/"+e+".zip",r.innerText="下载v"+e}).catch(function(n){throw new Error(n)})}},n.exports=t.default}});