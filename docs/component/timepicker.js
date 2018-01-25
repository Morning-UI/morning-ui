webpackJsonp([31],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(472);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4d96db4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(475);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(473)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4d96db4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/timepicker/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c4d96db4", Component.options)
  } else {
    hotAPI.reload("data-v-c4d96db4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 473:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 474:
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
            page: 'timepicker'
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

module.exports = exports['default'];

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("doc-component", { attrs: { page: _vm.page, hasPadding: true } }, [
    _c("script", { attrs: { type: "text/markdown" } }, [
      _vm._v(
        '\n  # 时间选择器 `<ui-timepicker>`\n  \n  <doc-component-status page="timepicker"></doc-component-status>\n  \n  [[[开始]]]\n\n  定义时间选择器。\n\n  #### 使用\n\n  :::democode/html\n  <div style="width:300px;">\n      <ui-timepicker form-name="时间"></ui-timepicker>\n  </div>\n  :::\n\n  #### 自定义时间格式\n\n  时间选择器允许用户自定时间格式，使用中文时间：\n\n  :::democode/html\n  <div style="width:300px;">\n      <ui-timepicker form-name="时间" format="HH时mm分ss秒" default-value="12时30分24秒"></ui-timepicker>\n  </div>\n  :::\n  \n  使用12小时制：\n\n  :::democode/html\n  <div style="width:300px;">\n      <ui-timepicker form-name="时间" format="h:m:s aa" default-value="12:30:24 a.m."></ui-timepicker>\n  </div>\n  :::\n\n  更多自定义格式见`format`配置。\n\n  #### 高亮当前修改时间单位\n\n  当用户在选择器上切换时，对应修改的时间单位区域会高亮：\n\n  :::democode/html\n  <div style="width:300px;">\n      <ui-timepicker form-name="时间" format="h:m:s" default-value="8:30:24"></ui-timepicker>\n  </div>\n  :::\n\n  当同时有多个时间单位匹配时，只会高亮第一个匹配到的：\n\n  :::democode/html\n  <div style="width:300px;">\n      <ui-timepicker form-name="时间" format="h:m:s aa | HH:mm:ss" default-value="8:30:24 a.m. | 08:30:24"></ui-timepicker>\n  </div>\n  :::\n\n  [[[形态]]]\n\n  :::preset/html\n  formStatus\n  ---\n  uikey:timepicker\n  statusDefaultValue:\'12:30:24\'\n  :::\n\n<!--   :::democode/html\n  <div style="width:300px;">\n      <ui-timepicker state="normal" :is-list="true" :default-value="[\'12:30:24\']" form-name="正常" ></ui-timepicker>\n  </div>\n  <br>\n  <div style="width:300px;">\n      <ui-timepicker state="disabled" :is-list="true" :default-value="[\'12:30:24\']" form-name="禁用" ></ui-timepicker>\n  </div>\n  <br>\n  ::: -->\n\n  [[[配置]]]\n\n  :::preset/html\n  formConfigTable\n  ---\n  |[format](#format)|格式化展示的时间|时间格式化字符串(支持时间占位符见下方的演示)|String|`\'HH:mm:ss\'`|\n  |[align](#align)|时间对齐方式|`\'left\'` : 左对齐<br>`\'center\'` : 居中对齐<br>`\'right\'` : 右对齐|String|`\'left\'`|\n  |[selectable-range](#selectable-range)|可选时间范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始时间, 结束时间]`: 指定单个可选范围<br>`[[开始时间1, 结束时间1], [开始时间2, 结束时间2]]`: 指定多个可选范围<br><br>可选时间将大于等于`开始时间`，小于等于`结束时间`。|时间范围数组|Array|`undefined`|\n  :::\n\n  :::preset/html\n  formConfigDemo\n  ---\n  uikey:timepicker\n  configDefaultValue:\'12:30:24\'\n  :::\n\n  #### format\n      \n  `format`允许自定义组件展示的时间格式，支持以下占位符：\n\n  |单位|占位符|示例|\n  |-|-|-|\n  |上午/下午|A|AM, PM|\n  ||a|am, pm|\n  ||aa|a.m., p.m.|\n  |小时|H|0, 1, ... 23|\n  ||HH|00, 01, ... 23|\n  ||h|0, 1, ... 12|\n  ||hh|00, 01, ... 12|\n  |分钟|mm|00, 01, ... 59|\n  ||m|0, 1, ... 59|\n  |秒|ss|00, 01, ... 59|\n  ||s|0, 1, ... 59|\n\n  <ui-quote color="light-blue">注意：使用12小时制时，需要加上午/下午占位符，否则可能出现无法正确解析时间的情况</ui-quote>\n\n  采用`|`分隔时间：\n\n  :::democode/html\n  <div style="width:300px;">\n      <ui-timepicker form-name="时间" format="HH | mm | ss" default-value="12 | 30 | 24"></ui-timepicker>\n  </div>\n  :::\n\n  同时显示多种时间格式：\n\n  :::democode/html\n  <div style="width:400px;">\n      <ui-timepicker form-name="时间" format="HH:mm:ss(24小时制), h:m:s aa(12小时制)" default-value="08:30:24(24小时制), 8:30:24 a.m.(12小时制)"></ui-timepicker>\n  </div>\n  :::\n\n  #### align\n\n  居中对齐：\n\n  :::democode/html\n  <div style="width:300px;">\n      <ui-timepicker form-name="时间" default-value="12:30:24" align="center"></ui-timepicker>\n  </div>\n  :::\n\n  右对齐：\n\n  :::democode/html\n  <div style="width:300px;">\n      <ui-timepicker form-name="时间" default-value="12:30:24" align="right"></ui-timepicker>\n  </div>\n  :::\n\n  #### selectable-range\n\n  设置单个可选范围(8:30-12:00)：\n\n  :::democode/html\n  <div style="width:300px;">\n      <ui-timepicker form-name="时间" :selectable-range="[\'08:30:00\', \'12:00:00\']"></ui-timepicker>\n  </div>\n  :::\n\n  设置多个可选范围(08:03:02-12:30:00, 12:00:00-14:59:59, 20:30:10-21:30:20)：\n\n  :::democode/html\n  <div style="width:300px;">\n      <ui-timepicker form-name="时间" :selectable-range="[[\'08:03:02\', \'12:30:00\'], [\'12:00:00\', \'14:59:59\'], [\'20:30:10\', \'21:30:20\']]"></ui-timepicker>\n  </div>\n  :::\n\n  [[[源码]]]\n\n  <iframe src="/report/coverage/lib/components/timepicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n  '
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
    require("vue-hot-reload-api")      .rerender("data-v-c4d96db4", esExports)
  }
}

/***/ })

},[471]);