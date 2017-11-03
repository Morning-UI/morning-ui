webpackJsonp([14],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DocGuide = __webpack_require__(4);

var _DocGuide2 = _interopRequireDefault(_DocGuide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {

        return {
            page: 'introduction'
        };
    },
    components: {
        'doc-guide': _DocGuide2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(99);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('doc-guide', {
    attrs: {
      "page": _vm.page,
      "hasPadding": true
    }
  }, [_c('script', {
    attrs: {
      "type": "text/markdown"
    }
  }, [_vm._v("\n\n# 介绍\n\n### Morning UI是什么？\n\nMorning UI是一套桌面Web端的UI库，基于[Vue.js](https://vuejs.org/)。\n\n### 快速开始\n\n首先确保你的页面采用了Vue.js，然后只需简单三步即可使用Morning UI:\n\n1. 首先[获取Morning UI](/guide/install.html)，并在页面中引用Vue.js以及Morning UI的JS和CSS：\n    - `<script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/npm/vue\">&lt;/script>`\n    - `<script type=\"text/javascript\" src=\"path-to-morning/morning-ui.js\">&lt;/script>`\n    - `<style rel=\"stylesheet\" link=\"path-to-morning/morning-ui.css\">&lt;/style>`\n2. 在Vue的模板中使用组件： `<ui-btn>Hello Mroning.</ui-btn>`\n3. 初始化Morning UI及Vue模板：\n\n```js\nVue.use(morning);\nnew Vue({\n    el : '#vue-template'\n});\n```\n\n完整的代码如下：\n\n```html\n<html>\n    <head>\n        <!-- ... -->\n        <!-- 引入Morning UI的css -->\n        <style rel=\"stylesheet\" link=\"path-to-morning/morning-ui.css\">&lt;/style>\n    </head>\n    <body>\n        <!-- 引入Vue.js和Morning UI的js  -->\n        <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/npm/vue\">&lt;/script>\n        <script type=\"text/javascript\" src=\"path-to-morning/morning-ui.js\">&lt;/script>\n\n        <!-- 在Vue的模板中使用组件 -->\n        <div id=\"vue-template\">\n            <ui-btn>Hello Mroning.</ui-btn>\n        </div>\n\n        <!-- 初始化Morning UI及Vue模板 -->\n        <script type=\"text/javascript\">\n        Vue.use(morning);\n        new Vue({\n            el : '#vue-template'\n        });\n        &lt;/script>\n    </body>\n</html>\n```\n\n然后即可看到：\n\n<ui-btn>Hello Mroning.</ui-btn>\n\n恭喜你使用了第一个Morning UI组件。\n\n### 接下来\n\n通过CDN、Webpack或更多途径使用Morning UI，见：[安装](/guide/install.html)\n\n使用Morning UI的更多特性，见：[使用](/guide/usage.html)\n\n为Morning UI贡献自己的力量，见：[成为贡献者](/guide/becontributor.html)\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a70d9b40", esExports)
  }
}

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a70d9b40_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(687);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(369)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a70d9b40_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/introduction/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a70d9b40", Component.options)
  } else {
    hotAPI.reload("data-v-a70d9b40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[282]);