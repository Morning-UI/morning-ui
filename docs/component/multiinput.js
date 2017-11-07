webpackJsonp([45],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(537);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_094cf316_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(540);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(538)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_094cf316_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/multiinput/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-094cf316", Component.options)
  } else {
    hotAPI.reload("data-v-094cf316", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 538:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 539:
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
            page: 'multiinput'
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 540:
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
  }, [_vm._v("\n# 多项输入框 `<ui-multiinput>`\n\n<doc-component-status page=\"multiinput\"></doc-component-status>\n\n[[[开始]]]\n\n定义多项输入框。\n\n#### 使用\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiinput form-name=\"输入标签\"></ui-multiinput>\n</div>\n:::\n\n#### 说明回车输入\n\n多项输入框会在用户按下回车时添加项目，在使用时建议说明使用回车输入。\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiinput form-name=\"按下回车输入标签\"></ui-multiinput>\n</div>\n:::\n\n[[[声明]]]\n\n:::preset/html\nformStatement\n---\nuikey:multiinput\nstatementDefaultValue:['value1', 'value2']\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|can-move|输入项目是否可以移动|`true`<br>`false`|Boolean|`false`|\n|max|可输入的最大项数|数字<br>`false`:不限制数量|String<br>Boolean|`false`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:multiinput\nconfigDefaultValue:['value1', 'value2']\n:::\n\n#### can-move\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiinput form-name=\"输入标签\" :default-value=\"['value1', 'value2']\" can-move></ui-multiinput>\n</div>\n:::\n\n#### max\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiinput form-name=\"输入标签\" :default-value=\"['value1', 'value2', 'value3', 'value4']\" :max=\"3\"></ui-multiinput>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:multiinput\nmethodValue:['value1']\nmethodDefaultValue:['value1']\n:::\n\n#### add(item, [index])\n\n在指定位置添加项。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|item|NO|添加项目的内容|内容字符串|`String`|`undefined`|\n|index|YES|添加的位置|`undefined`: 添加为最后一项<br>数字: 添加到指定的index位置|`Undefined`<br>`Number`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiinput ref=\"demo2\" form-name=\"输入标签\"></ui-multiinput>\n</div>\n<br>\n<ui-link js=\"javascript:morning.findVM('demo2').add('value1');\">添加到最后</ui-link>\n<ui-link js=\"javascript:morning.findVM('demo2').add('value2', 0);\">添加到第0项</ui-link>\n:::\n\n#### del(index)\n\n删除指定位置的项。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|index|NO|删除指定位置的项目|删除项目的index位置|`Number`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiinput ref=\"demo3\" form-name=\"输入标签\" :default-value=\"['value1', 'value2', 'value3', 'value4']\"></ui-multiinput>\n</div>\n<br>\n<ui-link js=\"javascript:morning.findVM('demo3').del(0);\">删除第0项</ui-link>\n:::\n\n#### move(from, to)\n\n移动项目。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|from|NO|需要移动的项目位置|移动项目的index位置|`Number`|`undefined`|\n|to|NO|移动之后的项目位置|移动之后的index位置|`Number`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiinput ref=\"demo4\" form-name=\"输入标签\" :default-value=\"['value1', 'value2', 'value3', 'value4']\"></ui-multiinput>\n</div>\n<br>\n<ui-link js=\"javascript:morning.findVM('demo4').move(2, 0);\">将第2项移到第0项</ui-link>\n:::\n\n#### setInput([value])\n\n设置输入框的内容。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|value|YES|需要设置的内容|字符串：设置字符串内容<br>`undefined`：清空内容|`String`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiinput ref=\"demo8\" form-name=\"输入标签\"></ui-multiinput>\n</div>\n<br>\n<ui-link js=\"javascript:morning.findVM('demo8').setInput('value1');\">设置输入框内容</ui-link>\n<ui-link js=\"javascript:morning.findVM('demo8').setInput();\">清空输入框内容</ui-link>\n:::\n\n#### getInput()\n\n获取输入框的内容。\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiinput ref=\"demo9\" form-name=\"输入标签\"></ui-multiinput>\n</div>\n<br>\n<ui-link js=\"javascript:alert(morning.findVM('demo9').getInput());\">获取输入框内容</ui-link>\n:::\n\n[[[事件]]]\n\n#### input-value-change\n\n当输入标签内容变化后触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo5.console1', 'input-value-change event!');\n        }\n    }\n});\n---\n<div style=\"width:300px;\">\n    <ui-multiinput @input-value-change=\"echo\" ref=\"demo5\" form-name=\"输入标签\"></ui-multiinput>\n</div>\n:::\n\n#### input-focus\n\n当标签内容输入框聚焦后触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo6.console1', 'input-focus event!');\n        }\n    }\n});\n---\n<div style=\"width:300px;\">\n    <ui-multiinput @input-focus=\"echo\" ref=\"demo6\" form-name=\"输入标签\"></ui-multiinput>\n</div>\n:::\n\n#### input-blur\n\n当标签内容输入框失焦后触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo7.console1', 'input-blur event!');\n        }\n    }\n});\n---\n<div style=\"width:300px;\">\n    <ui-multiinput @input-blur=\"echo\" ref=\"demo7\" form-name=\"输入标签\"></ui-multiinput>\n</div>\n:::\n\n:::preset/html\nformEvent\n---\nuikey:multiinput\neventValue:['value1']\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Array` : 数组\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成空数组(`[]`)。\n- 若启用`max`，最多不会超过max设置的项目数量。\n\n#### 值格式\n\n包含输入项目的数组，数组项目为输入内容(字符串)。\n\n#### 默认值\n\n默认值为空字符串：\n\n`[]`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:checkbox\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style=\"width:300px;\">\n        <ui-multiinput ref=\"demoType{$valueType}\" form-name=\"输入标签\"></ui-multiinput>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demoType{$valueType}').set({$&valueContent})\">设置{$valueType}类型</ui-link>\n    <ui-link js=\"alert(window.morning.findVM('demoType{$valueType}').getJson())\">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/multiinput/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-094cf316", esExports)
  }
}

/***/ })

},[536]);