webpackJsonp([33],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(482);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_020e254e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(485);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(483)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_020e254e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/textinput/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-020e254e", Component.options)
  } else {
    hotAPI.reload("data-v-020e254e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 483:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 484:
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
            page: 'textinput'
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

module.exports = exports['default'];

/***/ }),

/***/ 485:
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
  }, [_vm._v("\n# 文本输入框 `<ui-textinput>`\n\n<doc-component-status page=\"textinput\"></doc-component-status>\n\n[[[开始]]]\n\n定义文本输入框。\n\n#### 使用\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-textinput form-name=\"姓名\"></ui-textinput>\n</div>\n:::\n\n#### 支持前缀、后缀\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-textinput form-name=\"姓名\" prepend=\"@\"></ui-textinput>\n</div>\n:::\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-textinput form-name=\"百分比\" append=\"%\"></ui-textinput>\n</div>\n:::\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-textinput form-name=\"价格\" prepend=\"价格\" append=\"元\"></ui-textinput>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatus\n---\nuikey:textinput\nstatusDefaultValue:''\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|hide-value|表单的数值不可见，一般用于密码表单|`true`<br>`false`|Boolean|`false`|\n|prepend|表单前缀|任意字符串|String|`undefined`|\n|append|表单后缀|任意字符串|String|`undefined`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:textinput\nconfigDefaultValue:'默认值'\n:::\n\n#### hide-value\n\n隐藏数值后表单的值在界面中不可见。\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-textinput hide-value default-value=\"this is password\"></ui-textinput>\n</div>\n:::\n\n#### prepend\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-textinput form-name=\"姓名\" prepend=\"@\"></ui-textinput>\n</div>\n:::\n\n#### append\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-textinput form-name=\"百分比\" append=\"%\"></ui-textinput>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:textinput\nmethodValue:'Jim'\nmethodDefaultValue:'Jim'\n:::\n\n[[[事件]]]\n\n#### focus\n\n当表单聚焦后触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo2.console1', 'focus event!');\n        }\n    }\n});\n---\n<div style=\"width:300px;\">\n    <ui-textinput @focus=\"echo\" ref=\"demo2\"></ui-textinput>\n</div>\n:::\n\n#### blur\n\n当表单失焦后触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo3.console1', 'blur event!');\n        }\n    }\n});\n---\n<div style=\"width:300px;\">\n    <ui-textinput @blur=\"echo\" ref=\"demo3\"></ui-textinput>\n</div>\n:::\n\n:::preset/html\nformEvent\n---\nuikey:textinput\neventValue:'Jim'\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`String` : 字符串\n\n#### 值过滤\n\n- 如果数值的类型是对象，会被转换成JSON序列化字符串。\n- 非对象且不支持的值类型，都会被尝试转换成字符串，使用`String(value)`。\n\n#### 值格式\n\n内容值字符串。\n\n#### 默认值\n\n`''`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style=\"width:300px;\">\n        <ui-textinput ref=\"demoType{$valueType}\"></ui-textinput>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demoType{$valueType}').set({$&valueContent})\">设置{$valueType}类型</ui-link>\n    <ui-link js=\"alert(window.morning.findVM('demoType{$valueType}').getJson())\">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/textinput/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-020e254e", esExports)
  }
}

/***/ })

},[481]);