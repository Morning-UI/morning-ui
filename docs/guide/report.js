webpackJsonp([11],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(347);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dfb8198c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(350);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(348)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dfb8198c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/report/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dfb8198c", Component.options)
  } else {
    hotAPI.reload("data-v-dfb8198c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 348:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 349:
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
            page: 'report'
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
//
//
//
//
//
//
//
//
//
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

/***/ 350:
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
  }, [_vm._v("\n# 反馈问题\n\nMorningUI采用Github Issue管理反馈的问题，如果你在使用过程中发现Bug或希望支持新的功能，可以通过[Github Issue](https://github.com/Morning-UI/morning-ui/issues)提出。\n\n为了便于开发者快速了解你的诉求，Issue请按照以下模板填写：\n\n### BUG报告\n\n```\n### 问题类型\n\nBUG报告\n\n### 版本\n\n(如果是BUG报告需要填写出现问题的版本)\n\n### 问题\n\n(如果是BUG报告需要填写)\n\n### 复现环境及步骤\n\n(如果是BUG报告需要填写)\n\n### 期望的时间\n\n(填写BUG解决或功能支持的期望时间)\n\n### 其他\n\n(填写更多你想阐述的内容)\n\n```\n    \n### 功能请求\n\n```\n### 问题类型\n\n功能请求\n\n### 功能描述\n\n(如果是功能请求需要填写)\n\n### 解决了什么问题\n\n(如果是功能请求需要填写)\n\n### 期望的时间\n\n(填写BUG解决或功能支持的期望时间)\n\n### 其他\n\n(填写更多你想阐述的内容)\n\n```\n\n填写完毕后，请根据问题的类型添加对应的标签：\n\n- bug report : BUG报告\n- feature request : 功能请求\n\n### 跟踪进展\n\n当你通过Issue反馈问题后，MorningUI的开发者会对Issue添加标签，你可以根据标签的情况了解进展：\n\n- need repro : 需要提供更多的复现内容\n- pending : 待定\n- wont solve : 暂时不会解决\n- bug confirmed : 报告的bug被开发者确认\n- intend to solve : 计划解决\n- in progress : 解决中\n- in review : 审查中\n- launched : 已解决并发布\n\n### 其他\n\n除了反馈问题外，还会有一些讨论或开发性质的Issue：\n\n- important : 重要\n- discussion : 讨论\n- document : 文档相关\n- feature : 新功能开发\n- fix : 修复开发\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dfb8198c", esExports)
  }
}

/***/ })

},[346]);