webpackJsonp([74],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(687);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61835d64_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(690);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(688)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61835d64_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/checkbox/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61835d64", Component.options)
  } else {
    hotAPI.reload("data-v-61835d64", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 688:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 689:
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
            page: 'checkbox'
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

module.exports = exports['default'];

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("doc-component", { attrs: { page: _vm.page, hasPadding: true } }, [
    _c("script", { attrs: { type: "text/markdown" } }, [
      _vm._v(
        "\n# 复选框组 `<ui-checkbox>`\n\n<doc-component-status page=\"checkbox\"></doc-component-status>\n\n[[[开始]]]\n\n定义复选框组，复选框组可以多选，若需要单选请使用`ui-radio`。\n\n#### 使用\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox form-name=\"姓名\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-checkbox>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatusWithStyle\n---\nuikey:checkbox\nstatusDefaultValue:['Tim']\nstatusMoreAttr::list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[accept-html](#accept-html)|项目的的名称可以使用HTML|`true`<br>`false`|Boolean|`false`|\n|[list](#list)|可选项目列表|可选项目列表的对象，键名是key，键值是name用于显示|Object|`{}`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:checkbox\nconfigDefaultValue:['Tim']\nconfigMoreAttr::list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n#### accept-html\n\n如果让`ui-checkbox`的显示文本，渲染成HTML，而不是字符串。可以设置`accept-html`。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n            list : {\n                Red : '<span style=\"color:red;\">我是红色span</span>',\n                Green : '<span style=\"color:green;\">我是绿色span</span>'\n            }\n        }\n    }\n});\n---\n<div style=\"width:300px;\">\n    <ui-checkbox\n        form-name=\"姓名\"\n        accept-html\n        :list=\"list\"\n    ></ui-checkbox>\n</div>\n:::\n\n#### list\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox form-name=\"姓名\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-checkbox>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:checkbox\nmethodValue:['Tim', 'Andrew']\nmethodDefaultValue:['Tim']\nmethodMoreAttr::list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n#### toggle(key, [checked])\n\n切换单个选项的选中状态。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|key|NO|需要切换状态的选项的键值|键值字符串|`String`|`undefined`|\n|checked|YES|需要切换的状态|`undefined`: 切换到相反的状态<br>`true`: 切换到选中状态<br>`false`: 切换到未选中状态|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-checkbox ref=\"demo2\" form-name=\"姓名\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-checkbox>\n</div>\n<br>\n<ui-link js=\"morning.findVM('demo2').toggle('Tim');\">切换Tim至相反状态</ui-link>\n<ui-link js=\"morning.findVM('demo2').toggle('Tim', true);\">切换Tim至选中</ui-link>\n<ui-link js=\"morning.findVM('demo2').toggle('Tim', false);\">切换Tim至未选中</ui-link>\n:::\n\n[[[事件]]]\n\n:::preset/html\nformEvent\n---\nuikey:checkbox\neventValue:['Tim', 'Andrew']\neventMoreAttr::list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Array` : 数组\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成空数组(`[]`)。\n- 若数组中的键值不在键值列表(`list`)中，会被过滤。\n\n#### 值格式\n\n包含选中键值的无序数组，键值是字符串。\n\n#### 默认值\n\n`[]`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:checkbox\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style=\"width:300px;\">\n        <ui-checkbox ref=\"demoType{$valueType}\" :list=\"{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}\"></ui-checkbox>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demoType{$valueType}').set({$&valueContent})\">设置{$valueType}类型</ui-link>\n    <ui-link js=\"alert(window.morning.findVM('demoType{$valueType}').getJson())\">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/checkbox/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n"
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
    require("vue-hot-reload-api")      .rerender("data-v-61835d64", esExports)
  }
}

/***/ })

},[686]);