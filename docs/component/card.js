webpackJsonp([69],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(657);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8ca5696_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(660);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(658)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8ca5696_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/card/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f8ca5696", Component.options)
  } else {
    hotAPI.reload("data-v-f8ca5696", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 658:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 659:
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
            page: 'card'
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

module.exports = exports['default'];

/***/ }),

/***/ 660:
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
  }, [_vm._v("\n# 卡片 `<ui-card>`\n\n<doc-component-status page=\"card\"></doc-component-status>\n\n[[[开始]]]\n\n定义一张卡片，卡片包含头部和主体部分。\n\n#### 使用\n\n:::democode/html\n<div style=\"width:180px;height:240px;\">\n    <ui-card>卡片</ui-card>\n</div>\n:::\n\n#### 带头部的卡片\n\n:::democode/html\n<div style=\"width:180px;height:240px;\">\n    <ui-card>\n        <header>头部</header>\n        <div>卡片</div>\n    </ui-card>\n</div>\n:::\n\n#### 无间隙卡片\n\n卡片内容部分默认具有间隙，可以通过full类来去除间隙。\n\n:::democode/html\n<div style=\"width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;\">\n    <ui-card class=\"full\">卡片</ui-card>\n</div>\n\n<div style=\"width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;\">\n    <ui-card class=\"full\">\n        <header>头部</header>\n        <div>卡片</div>\n    </ui-card>\n</div>\n:::\n\n[[[声明]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|-|\n|状态|不支持|-|\n\n#### 色彩\n\n:::repeat/html\ncolor:theme \ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<div style=\"width:180px;height:240px;display:inline-block;margin:10px;\">\n    <ui-card {$colorKey}>\n        <header>{$&colorName}</header>\n        <div>卡片</div>\n    </ui-card>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/card/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f8ca5696", esExports)
  }
}

/***/ })

},[656]);