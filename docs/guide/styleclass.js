webpackJsonp([7],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(322);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_540d01a6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(325);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(323)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_540d01a6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/styleclass/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-540d01a6", Component.options)
  } else {
    hotAPI.reload("data-v-540d01a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 323:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 324:
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
            page: 'styleclass'
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

module.exports = exports['default'];

/***/ }),

/***/ 325:
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
  }, [_vm._v("\n# 样式类\n\n样式类就是CSS类，可以给组件提供不同的样式。所有的组件都可以支持样式类，但是不同的组件有不同的样式类。\n\n样式类与声明的区别：\n\n- 声明是一种通用的组件属性，可以区分样式及JS逻辑，有一套全局的规范，大部分组件都支持。\n- 样式类不同的组件有不同的支持，仅用于区分样式，全局仅在命名上有规范，当组件有样式需求时才支持。\n\n你可以在组件文档的开始标签中找到支持的样式类。\n\n### 用法\n\n样式类必须用在UI组件标签`<ui-*>`的`class`中。\n\n:::democode/html\n<!-- ui-label标签上的icon是样式类 -->\n<!-- span标签上的icon不是样式类 -->\n<ui-label class=\"icon\">\n    <i class=\"iconfont\">&#xe6e2;</i>\n    <span class=\"icon\">标签</span>\n</ui-label>\n:::\n\n### 样式类全局命名规范\n\n样式类在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。\n\n在为组件添加样式类前应先检查下面的列表，是否有含义相同的样式类，若有请使用，若没有请将新的样式类添加到下面列表并注明它的含义。\n\n- `horizontal` : 水平排列\n- `vertical` : 垂直排列\n- `nogap` : 子元素间没有间隙\n- `averagegap` : 子元素间(包括两侧)均有相等间隙\n- `fill` : 高度填满父元素\n- `full` : 元素没有内边距\n- `margin` : 元素有外边距\n- `inline` : 内联\n- `inline-block` : 内联块\n- `block` : 块级 / 区块\n- `mark` : 包含标记\n- `underline` : 下划线\n- `noborder` : 无边框\n- `flat` : 扁平\n- `circle` : 圆形\n- `image` : 使用图片\n- `icon` : 使用图标\n- `split` : 分隔\n- `rounded` : 圆角\n- `circle` : 圆形\n- `thumbnail` : 相框\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-540d01a6", esExports)
  }
}

/***/ })

},[321]);