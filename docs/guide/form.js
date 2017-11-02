webpackJsonp([16],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 200:
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
            page: 'form'
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(96);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 670:
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
  }, [_vm._v("\n# 表单\n\n表单组件区别于布局和交互组件，包含很多通用的逻辑。MorningUI的全局对象上也对表单组件进行了扩展。\n\n### 通用逻辑\n\n所有的表单都支持以下这些通用逻辑。\n\n#### 表单声明\n\n表单组件支持两种状态声明：`normal`和`disabled`。\n\n`disabled`状态下的表单无法修改表单值，一般用于展示。\n\n#### 表单配置\n\n表单组件支持下面几种通用配置：\n\n- form-name : 表单的名称(用于显示)\n- form-key : 表单的KEY(用于逻辑中作为识别标示)\n- group : 表单组\n- default-value : 表单的默认值\n- hide-name : 隐藏表单名(所有表单默认都有显示表单名的位置，你可以隐藏后自行设置)\n\n#### 表单方法\n\n表单组件支持下面几种通用方法：\n\n- set() : 设置表单的值\n- get() : 获取表单的值\n- setName() : 设置表单的名称\n- getName() : 获取表单的名称\n- setKey() : 设置表单的KEY\n- getKey() : 获取表单的KEY\n- setGroup() : 设置表单组件所属的表单组\n- getGroup() : 获取表单组件所属的表单组\n- addGroup() : 将表单组件添加到表单组\n- removeGroup() : 将表单组件从表单组中移除\n\n#### 表单事件\n\n表单组件支持下面几种通用事件：\n\n- value-change : 表单值发生改变时触发\n- created : 组件实例创建后(组件生命周期事件，等同于vue中的`created`)\n- mounted : 组件挂载到DOM后(组件生命周期事件，等同于vue中的`mounted`)\n- before-update : 组件更新前(组件生命周期事件，等同于vue中的`before-update`)\n- updated : 组件更新后(组件生命周期事件，等同于vue中的`updated`)\n- before-destroy : 组件销毁前(组件生命周期事件，等同于vue中的`before-destroy`)\n- destroyed : 组件销毁后(组件生命周期事件，等同于vue中的`destroyed`)\n\n### 表单值\n\n表单中所有的值都有支持的类型，若输入的值不符合表单支持的类型，表单会进行转换。\n\n所有的表单都会说明：\n\n- 值类型 : 表单支持数值的类型\n- 值过滤 : 表单过滤数值的条件\n- 值格式 : 表单数值格式说明\n- 默认值\n\n### 表单组\n\n通过在组件上设置`group`属性，可以将表单组件添加到同一个表单组。\n\n表单组内的所有表单KEY和值都会以键值对的形式存在一个对象中。\n\n你可以通过两种方式获取：\n\n- `morning.getGroup(groupKey)` : 获取指定表单组的数据\n- `morning.getGroupJson(groupKey)` : 获取指定表单组的JSON数据\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-textinput group=\"demo1\" form-key=\"name\" form-name=\"姓名\" default-value=\"Jim\"></ui-textinput>\n    <br> \n    <ui-textinput group=\"demo1\" form-key=\"age\" form-name=\"年龄\" default-value=\"17\"></ui-textinput>\n    <br> \n    <ui-radio :list=\"{male:'Male',female:'Female'}\" group=\"demo1\" form-key=\"gender\" form-name=\"性别\" default-value=\"male\"></ui-radio>\n    <br> \n    <ui-multiinput group=\"demo1\" form-key=\"tags\" form-name=\"标签\" :default-value=\"['Happy']\"></ui-multiinput>\n</div>\n<br><br>\n<ui-btn js=\"console.log('demo1 data', window.morning.getGroup('demo1'));\">在Console输出表单组数据</ui-btn>\n<ui-btn js=\"console.log('demo1 data', window.morning.getGroupJson('demo1'));\">在Console输出表单组JSON数据</ui-btn>\n:::\n\n一组表单也可以同时设置值：\n\n- `morning.setGroup(groupKey, dataObject)` : 设置指定表单组的数据\n- `morning.setGroupJson(groupKey, dataJson)` : 设置指定表单组的JSON数据\n\n`dataObject`是一组键值对，键名为表单的KEY，键值是需要设置的表单值。`dataJson`是`dataObject`经过JSON序列化后的字符串。\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-textinput group=\"demo2\" form-key=\"name\" form-name=\"姓名\"></ui-textinput>\n    <br> \n    <ui-textinput group=\"demo2\" form-key=\"age\" form-name=\"年龄\"></ui-textinput>\n    <br> \n    <ui-radio :list=\"{male:'Male',female:'Female'}\" group=\"demo2\" form-key=\"gender\" form-name=\"性别\"></ui-radio>\n    <br> \n    <ui-multiinput group=\"demo2\" form-key=\"tags\" form-name=\"标签\"></ui-multiinput>\n</div>\n<br><br>\n<ui-btn js=\"window.morning.setGroup('demo2', {name:'Jim', age:'17', gender: 'male', tags: ['Happy']});\">通过对象设置一组表单值</ui-btn>\n<ui-btn js='window.morning.setGroupJson(\"demo2\", \"{\\\"name\\\":\\\"Jim\\\",\\\"age\\\":\\\"17\\\",\\\"gender\\\":\\\"male\\\",\\\"tags\\\":[\\\"Happy\\\"]}\");'>通过JSON设置一组表单值</ui-btn>\n:::\n\n#### 设置部分值\n\n在`dataJson`或`dataObject`中你可以只设置部分表单的数值，比如：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-textinput group=\"demo3\" form-key=\"name\" form-name=\"姓名\"></ui-textinput>\n    <br> \n    <ui-radio :list=\"{male:'Male',female:'Female'}\" group=\"demo3\" form-key=\"gender\" form-name=\"性别\"></ui-radio>\n</div>\n<br><br>\n<ui-btn js=\"window.morning.setGroup('demo3', {gender: 'male'});\">只设置性别表单</ui-btn>\n:::\n\n#### 清空表单的值\n\n在`dataJson`或`dataObject`中若显式的设置`undefined`，则会清空对应表单的值，比如：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-textinput group=\"demo4\" form-key=\"name\" form-name=\"姓名\" default-value=\"Jim\"></ui-textinput>\n    <br> \n    <ui-radio :list=\"{male:'Male',female:'Female'}\" group=\"demo4\" form-key=\"gender\" form-name=\"性别\" default-value=\"male\"></ui-radio>\n</div>\n<br><br>\n<ui-btn js=\"window.morning.setGroup('demo4', {gender:undefined});\">清空性别表单</ui-btn>\n:::\n\n### 全局扩展\n\nMorningUI的全局对象`morning`上对表单组件进行了扩展，可以让使用者更方便的获取、设置表单值。\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6bfb14ec", esExports)
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bfb14ec_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(670);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(352)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bfb14ec_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/form/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bfb14ec", Component.options)
  } else {
    hotAPI.reload("data-v-6bfb14ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[279]);