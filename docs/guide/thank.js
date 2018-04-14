webpackJsonp([8],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(332);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37a27a54_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(335);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(333)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37a27a54_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/thank/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37a27a54", Component.options)
  } else {
    hotAPI.reload("data-v-37a27a54", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 333:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 334:
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
            page: 'thank'
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

module.exports = exports['default'];

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("doc-guide", { attrs: { page: _vm.page, hasPadding: true } }, [
    _c("script", { attrs: { type: "text/markdown" } }, [
      _vm._v(
        '\n# 致谢\n\n### 开源项目\n\nMorningUI受到以下开源项目的启发：\n\n- Semantic UI [https://semantic-ui.com/](https://semantic-ui.com/)\n- Bootstrap [http://getbootstrap.com/](http://getbootstrap.com/)\n- Element [http://element.eleme.io/](http://element.eleme.io/)\n- Material-UI [https://material-ui-next.com/](https://material-ui-next.com/)\n\n在此向这些项目致敬。\n\n### Vue.js\n\nMorningUI基于[Vue.js](https://vuejs.org/)开发，在此感谢。\n\n### HmpUI贡献者\n\nMorningUI的诞生离不开HmpUI，在此感谢曾为HmpUI付出贡献的开发者：\n\n- 冯春艳(chunyan.feng@husor.com)\n- 杜金金(jinjin.du@husor.com)\n- 赵朋(peng.zhao@husor.com)\n- 干有银(youyin.gan@husor.com)\n- 张桠鑫(yaxin.zhang@husor.com)\n- 段俊杰(junjie.duan@husor.com)\n- 童颖(ying.tong@husor.com)\n- 朱双龙(shuanglong.zhu@husor.com)\n\n### MorningUI贡献者\n\n- 贺晨超(chenchao.he@husor.com) <ui-textcolor color="minor"><ui-small>Coding/Review</ui-small></ui-textcolor>\n\n如果你感兴趣，欢迎加入我们，查看[如何成为一名贡献者](/guide/becontributor.html)\n\n'
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
    require("vue-hot-reload-api")      .rerender("data-v-37a27a54", esExports)
  }
}

/***/ })

},[331]);