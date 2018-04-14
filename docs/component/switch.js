webpackJsonp([41],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(522);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04efdf7f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(525);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(523)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04efdf7f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/switch/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04efdf7f", Component.options)
  } else {
    hotAPI.reload("data-v-04efdf7f", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 523:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 524:
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
            page: 'switch'
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

module.exports = exports['default'];

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("doc-component", { attrs: { page: _vm.page, hasPadding: true } }, [
    _c("script", { attrs: { type: "text/markdown" } }, [
      _vm._v(
        '\n# 开关 `<ui-switch>`\n\n<doc-component-status page="switch"></doc-component-status>\n\n[[[开始]]]\n\n定义开关，开关只存在布尔状态。\n\n#### 使用\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch form-name="姓名"></ui-switch>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatusWithStyle\n---\nuikey:switch\nstatusDefaultValue:true\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[auto-hide-name](#auto-hide-name)|当表档名为空时自动隐藏表单名部分|`true`<br>`false`|Boolean|`false`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:switch\nconfigDefaultValue:true\n:::\n\n#### auto-hide-name\n\n第二个组件表单名为空，名字部分被隐藏。\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch form-name="姓名" auto-hide-name></ui-switch>\n    <ui-switch form-name="" auto-hide-name></ui-switch>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:switch\nmethodValue:true\nmethodDefaultValue:true\n:::\n\n#### toggle([open])\n\n切换下拉按钮组是否显示。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|open|YES|指定开关切换到开启或关闭，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <ui-switch ref="demo1" form-name="姓名"></ui-switch>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo1\').toggle();">切换相反状态</ui-link>\n    <ui-link js="morning.findVM(\'demo1\').toggle(true);">切换至开启</ui-link>\n    <ui-link js="morning.findVM(\'demo1\').toggle(false);">切换至关闭</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset/html\nformEvent\n---\nuikey:switch\neventValue:true\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Boolean` : 布尔值\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成布尔值，使用`!!value`。\n\n#### 值格式\n\n`true`或`false`\n\n#### 默认值\n\n`false`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style="width:300px;">\n        <ui-switch ref="demoType{$valueType}" form-name="开关"></ui-switch>\n    </div>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoType{$valueType}\').set({$&valueContent})">设置{$valueType}类型</ui-link>\n    <ui-link js="alert(window.morning.findVM(\'demoType{$valueType}\').getJson())">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/switch/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n'
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
    require("vue-hot-reload-api")      .rerender("data-v-04efdf7f", esExports)
  }
}

/***/ })

},[521]);