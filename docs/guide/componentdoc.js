webpackJsonp([22],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(422);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cbdb821_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(425);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(423)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cbdb821_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/componentdoc/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cbdb821", Component.options)
  } else {
    hotAPI.reload("data-v-7cbdb821", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 423:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 424:
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
            page: 'componentdoc'
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

module.exports = exports['default'];

/***/ }),

/***/ 425:
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
  }, [_vm._v("\n# 组件文档\n\nMorning UI的每个组件都有文档，可以帮助你更好的使用组件。\n\nMorning UI中包含三类组件：\n\n- 布局组件：只有样式的组件，不包含JS逻辑\n- 交互组件：包含样式及JS逻辑的组件\n- 表单组件：在交互组件的基础上，可以输入/输出值的组件\n\n不同类型的组件文档内容也不一样：\n\n- 布局组件包含：标题、组件状态栏、开始、形态、源码\n- 交互组件包含：标题、组件状态栏、开始、形态、配置、方法、事件、源码\n- 表单组件包含：标题、组件状态栏、开始、形态、配置、方法、事件、表单值、源码\n\n下面拿`多项输入框`组件举例详细介绍这些文档内容，文档地址：[组件/多项输入框](/component/multiinput.html)\n\n### 标题\n\n组件的名称及默认DOM标签。\n\n<img src=\"https://h0.hucdn.com/open/201744/e2af23248b761b45_1043x123.png\" width=\"540\" alt=\"\">\n\n### 组件状态栏\n\n组件的单元/集成测试情况，测试覆盖率。组件最后更新日期、作者、`commid id`以及所有贡献者。\n\n其中单元/集成测试标签中，前面的数字表示通过的测试数量，后面的数字表示测试总数。\n\n<img src=\"https://h0.hucdn.com/open/201744/815bd2bbc0cf5c7c_809x147.png\" width=\"404\" alt=\"\">\n\n### 开始\n\n简单介绍组件，并从组件最简单的用法开始，一一列举组件常见的用法。\n\n<img src=\"https://h0.hucdn.com/open/201744/06b2eab34c600af0_1625x1160.png\" width=\"812\" alt=\"\">\n\n### 形态\n\n组件的形态支持情况，及所有形态的演示。\n\n<img src=\"https://h0.hucdn.com/open/201744/75da76aa5299a1ac_1619x1371.png\" width=\"809\" alt=\"\">\n\n### 配置\n\n组件的配置详情，及配置的演示。\n\n配置详情：\n\n<img src=\"https://h0.hucdn.com/open/201744/7ffbd85fd965bba4_1623x1116.png\" width=\"811\" alt=\"\">\n\n配置的演示：\n\n<img src=\"https://h0.hucdn.com/open/201744/8ff1598d2430d2ed_1624x438.png\" width=\"812\" alt=\"\">\n\n### 方法\n\n组件所有方法的演示及文档。\n\n<img src=\"https://h0.hucdn.com/open/201744/78388839eea94807_1619x1266.png\" width=\"808\" alt=\"\">\n\n### 事件\n\n组件所有的事件演示及文档。\n\n<img src=\"https://h0.hucdn.com/open/201744/f4d532c2c45a4716_1616x1237.png\" width=\"808\" alt=\"\">\n\n### 表单值\n\n组件的值类型、格式、默认值及输入/输出演示。\n\n<img src=\"https://h0.hucdn.com/open/201744/27a57ff0bb3101f0_1628x877.png\" width=\"814\" alt=\"\">\n\n### 源码\n\n组件的`.vue`文件，及测试覆盖情况。\n\n其中红色的部分表示测试未覆盖。\n\n<img src=\"https://h0.hucdn.com/open/201744/67ead81ed079ad1c_1622x1174.png\" width=\"811\" alt=\"\">\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7cbdb821", esExports)
  }
}

/***/ })

},[421]);