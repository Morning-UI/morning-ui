webpackJsonp([77],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(702);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e2521a4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(705);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(703)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e2521a4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/btngroup/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e2521a4", Component.options)
  } else {
    hotAPI.reload("data-v-0e2521a4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 703:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 704:
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
            page: 'btngroup'
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

module.exports = exports['default'];

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("doc-component", { attrs: { page: _vm.page, hasPadding: true } }, [
    _c("script", { attrs: { type: "text/markdown" } }, [
      _vm._v(
        '\n# 按钮组 `<ui-btngroup>`\n\n<doc-component-status page="em"></doc-component-status>\n\n[[[开始]]]\n\n定义一个按钮组，按钮组可以通过特定的HTML结构格式化按钮。\n\n按钮组默认水平排列。\n\n#### 使用\n\n:::democode/html\n <ui-btngroup>\n    <ui-btn>按钮一</ui-btn>\n    <ui-btn>按钮二</ui-btn>\n    <ui-btn>按钮三</ui-btn>\n    <ui-btn>按钮四</ui-btn>\n</ui-btngroup>\n:::\n\n#### 水平排列示例\n\n:::democode/html\n<ui-btngroup class="horizontal">\n    <ui-btn>按钮一</ui-btn>\n    <ui-btn>按钮二</ui-btn>\n    <ui-btn>按钮三</ui-btn>\n    <ui-btn>按钮四</ui-btn>\n</ui-btngroup>\n:::\n\n#### 垂直排列示例\n\n:::democode/html\n<ui-btngroup class="vertical">\n    <ui-btn>按钮一</ui-btn>\n    <ui-btn>按钮二</ui-btn>\n    <ui-btn>按钮三</ui-btn>\n    <ui-btn>按钮四</ui-btn>\n</ui-btngroup>\n:::\n\n#### 无间隔按钮组\n\n:::democode/html\n<ui-btngroup class="nogap">\n    <ui-btn color="success">确认</ui-btn>\n    <ui-btn color="minor">取消</ui-btn>\n</ui-btngroup>\n\n<br/><br/>\n\n<ui-btngroup class="vertical nogap">\n    <ui-btn color="success">确认</ui-btn>\n    <ui-btn color="minor">取消</ui-btn>\n</ui-btngroup>\n:::\n\n#### 分隔按钮组\n\n按钮之间可以插入文本分隔。\n\n:::democode/html\n<ui-btngroup class="split">\n    <ui-btn color="success">确认</ui-btn>\n    <span>或</span>\n    <ui-btn color="minor">取消</ui-btn>\n</ui-btngroup>\n\n<br><br>\n\n<ui-btngroup class="split">\n    <ui-btn color="minor">选择一</ui-btn>\n    <span>或</span>\n    <ui-btn color="minor">选择二</ui-btn>\n    <span>或</span>\n    <ui-btn info>热门选择</ui-btn>\n</ui-btngroup>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n按钮组不支持形态，但可通过`ui-btn`自身的形态来控制。\n\n这也意味着你可以组合不同形态的按钮，这是一个十分有用的特性。\n\n#### 组合不同的形态\n\n:::democode/html\n<p>不同尺寸组合</p>\n<ui-btngroup>\n    <ui-btn size="l">按钮一</ui-btn>\n    <ui-btn size="m" color="minor">按钮二</ui-btn>\n</ui-btngroup>\n\n<br><br>\n\n<p>不同色彩组合</p>\n<ui-btngroup>\n    <ui-btn color="success">按钮一</ui-btn>\n    <ui-btn color="minor">按钮二</ui-btn>\n</ui-btngroup>\n\n<br><br>\n\n<p>不同状态组合</p>\n<ui-btngroup>\n    <ui-btn state="normal" color="minor">按钮一</ui-btn>\n    <ui-btn state="apparent">按钮二</ui-btn>\n</ui-btngroup>\n\n<br><br>\n\n<ui-btngroup>\n    <ui-btn state="normal">按钮一</ui-btn>\n    <ui-btn state="disabled">按钮二</ui-btn>\n</ui-btngroup>\n:::\n\n#### `ui-btn`尺寸\n\n:::repeat/html\nsize\n---\n<ui-btngroup>\n    <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>\n    <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>\n</ui-btngroup>\n\n<br><br>\n:::\n\n#### `ui-btn`色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<ui-btngroup>\n    <ui-btn color="{$colorKey}">{$&colorName}</ui-btn>\n    <ui-btn color="{$colorKey}">{$&colorName}</ui-btn>\n</ui-btngroup>\n\n<br><br>\n:::\n\n#### `ui-btn`状态\n\n:::repeat/html\nstate\n---\n<ui-btngroup>\n    <ui-btn state="{$stateKey}">{$&stateName}</ui-btn>\n    <ui-btn state="{$stateKey}">{$&stateName}</ui-btn>\n</ui-btngroup>\n\n<br><br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/em/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n'
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e2521a4", esExports)
  }
}

/***/ })

},[701]);