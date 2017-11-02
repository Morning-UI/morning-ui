webpackJsonp([58],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DocComponent = __webpack_require__(2);

var _DocComponent2 = _interopRequireDefault(_DocComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {

        return {
            page: 'grid'
        };
    },
    components: {
        'doc-component': _DocComponent2.default
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

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(54);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6f2cd2a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(692);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(375)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6f2cd2a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/grid/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c6f2cd2a", Component.options)
  } else {
    hotAPI.reload("data-v-c6f2cd2a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('doc-component', {
    attrs: {
      "page": _vm.page,
      "hasPadding": true
    }
  }, [_c('script', {
    attrs: {
      "type": "text/markdown"
    }
  }, [_vm._v("\n# 栅格 `<ui-grid>`\n\n<doc-component-status page=\"grid\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个栅格系统，栅格系统支持嵌套。\n\n这是一个16列的栅格系统，支持自适应，不支持响应式。\n\n通过类`c-[n]`来标记栅格所占用的列，通过类`offset-[n]`来标记栅格偏移列数。\n\n列之间默认具有间隙，两端无间隙，可以通过两个类来调整间隙：\n\n- `nogap` : 生成不具有间隙的栅格\n- `averagegap` : 生成两端包含间隙的栅格\n\n#### 使用\n\n:::democode/html\n<ui-grid>\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n</ui-grid>\n:::\n\n#### 栅格组合\n\n:::democode/html\n<ui-grid>\n    <div class=\"c-16\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-16</div>\n</ui-grid>\n\n<br>\n\n<ui-grid>\n    <div class=\"c-1\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-1</div>\n    <div class=\"c-15\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-15</div>\n</ui-grid>\n\n<br>\n\n<ui-grid>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-14\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-14</div>\n</ui-grid>\n\n<br>\n\n<ui-grid>\n    <div class=\"c-3\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-3</div>\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n    <div class=\"c-9\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-9</div>\n</ui-grid>\n\n<br>\n\n<ui-grid>\n    <div class=\"c-5\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-5</div>\n    <div class=\"c-5\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-5</div>\n    <div class=\"c-6\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-6</div>\n</ui-grid>\n:::\n\n#### 栅格偏移\n\n:::democode/html\n<ui-grid>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n</ui-grid>\n\n<br>\n\n<ui-grid>\n    <div class=\"c-4 offset-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4 offset-4</div>\n    <div class=\"c-4 offset-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4 offset-4</div>\n</ui-grid>\n\n<br>\n\n<ui-grid>\n    <div class=\"c-4 offset-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4 offset-2</div>\n    <div class=\"c-9 offset-1\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-9 offset-1</div>\n</ui-grid>\n:::\n\n\n\n#### 栅格嵌套\n\n栅格系统支持多层级嵌套。\n\n:::democode/html\n<ui-grid>\n    <div class=\"c-4\" style=\"background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n    <div class=\"c-12\" style=\"background-color:#D6DDE5;\">\n        <ui-grid>\n            <div class=\"c-6\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-6</div>\n            <div class=\"c-10\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-10</div>\n        </ui-grid>\n    </div>\n</ui-grid>\n:::\n\n#### 无间隔栅格\n\n添加`nogap`的样式类可以使栅格之间无间隔。\n\n:::democode/html\n<ui-grid class=\"nogap\">\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n</ui-grid>\n\n<br>\n\n<ui-grid class=\"nogap\">\n    <div class=\"c-6\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-6</div>\n    <div class=\"c-10\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-10</div>\n</ui-grid>\n\n<br>\n\n<ui-grid class=\"nogap\">\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n</ui-grid>\n\n<br>\n\n<ui-grid class=\"nogap\">\n    <div class=\"c-4 offset-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4 offset-4</div>\n    <div class=\"c-4 offset-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4 offset-4</div>\n</ui-grid>\n:::\n\n#### 两端包含间隙栅格\n\n添加`averagegap`的样式类可以使栅格两端也有间隙。\n\n:::democode/html\n<ui-grid class=\"averagegap\">\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n    <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n</ui-grid>\n\n<br>\n\n<ui-grid class=\"averagegap\">\n    <div class=\"c-6\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-6</div>\n    <div class=\"c-10\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-10</div>\n</ui-grid>\n\n<br>\n\n<ui-grid class=\"averagegap\">\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n    <div class=\"c-2\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-2</div>\n</ui-grid>\n\n<br>\n\n<ui-grid class=\"averagegap\">\n    <div class=\"c-4 offset-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4 offset-4</div>\n    <div class=\"c-4 offset-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4 offset-4</div>\n</ui-grid>\n:::\n\n#### 填满容器的栅格\n\n填满容器的栅格高度为100%。\n\n:::democode/html\n<div style=\"height:200px;\">\n    <ui-grid class=\"fill\">\n        <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n        <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n        <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n        <div class=\"c-4\" style=\"background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;\">c-4</div>\n    </ui-grid>\n</div>\n:::\n\n\n[[[声明]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/grid/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c6f2cd2a", esExports)
  }
}

/***/ })

},[237]);