webpackJsonp([6],{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_da644f6a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(325);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(323)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_da644f6a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/usage/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-da644f6a", Component.options)
  } else {
    hotAPI.reload("data-v-da644f6a", Component.options)
' + '  }
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
            page: 'usage'
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("doc-guide", { attrs: { page: _vm.page, hasPadding: true } }, [
    _c("script", { attrs: { type: "text/markdown" } }, [
      _vm._v(
        '\n# 使用\n\n### 初始化\n\n在引入Morning UI后需要在Vue中进行初始化：\n\n```js\nVue.use(morning);\n```\n\n你也可以在初始化的时候进行配置，比如：\n\n```js\n// 将组件的标签前缀改为v，比如`v-btn`\nVue.use(morning, {\n    prefix : \'v\'\n});\n```\n\n更多初始化配置见：[初始化](/guide/init.html)。\n\n### 使用组件\n\n初始化Morning UI后，可以在Vue的`template`中使用组件：\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\'\n});\n---\n<div>\n    <ui-btn>按钮</ui-btn>  \n</div>\n:::\n\n### 添加形态\n\n形态是大部分组件都支持的一种通用配置，有三种：\n\n- 尺寸\n- 色彩\n- 状态\n\n形态的值可以直接写在组件的标签上：\n\n:::democode/html\n<!-- 使用黑色xl尺寸的按钮 -->\n<ui-btn size="xl" color="black">按钮</ui-btn>  \n:::\n\n更多内容见：[形态](/guide/status.html)。\n\n### 添加样式类\n\n组件支持通过在标签上添加不同的CSS类来设置不同的样式：\n\n:::democode/html\n<ui-header>\n这是普通标题\n</ui-header>\n\n<!-- 使用mark类来添加ui-header组件的标记 -->\n<ui-header class="mark">\n这是带标记的标题\n</ui-header>\n:::\n\n你可以在在组件文档的开始标签中找到这些样式类。\n\n更多内容见：[样式类](/guide/styleclass.html)。\n\n### 配置组件\n\n你可以通过Vue的[Props](https://cn.vuejs.org/v2/guide/components.html#Prop)特性来为组件添加配置。\n\n:::democode/html\n<!-- 配置按钮点击后锁定2s -->\n<ui-btn :locked="2000">点击按钮触发锁定</ui-btn>  \n:::\n\n交互和表单组件都支持不同的配置，你可以在组件的文档中查询支持的配置。\n\n更多内容见：[配置](/guide/config.html)。\n\n### 组件方法\n\n交互和表单组件都支持方法，你可以通过方法来控制组件：\n\n:::democode/html\n<!-- 配置按钮点击后锁定2s -->\n<ui-btn ref="demo1">按钮</ui-btn>\n<br><br> \n<ui-link js="morning.findVM(\'demo1\').lock();">锁定</ui-link>\n<ui-link js="morning.findVM(\'demo1\').unlock();">解锁</ui-link>\n:::\n\n组件的方法挂载在组件的Vue实例上，你可以通过`morning.findVM()`来找到组件的实例，详见[全局方法/findVM](/guide/morning.html#findVMref)。\n\n你可以在组件的文档中找到组件支持的方法。\n\n更多内容见：[方法](/guide/method.html)。\n\n### 监听事件\n\n交互和表单组件支持事件，你可以通过监听事件来响应组件的状态变化：\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            alert(\'组件被点击\');\n        }\n    }\n});\n---\n<div>\n    <ui-btn @emit="echo">点击触发emit事件</ui-btn>\n</div>\n:::\n\n除了每个组件自身支持的事件外，所有交互和表单组件都支持生命周期事件。你可以在组件的文档中找到组件支持的事件。\n\n更多内容见：[事件](/guide/event.html)。\n\n### 表单组件\n\n表单组件是所有组件中最为特殊的一类，因为表单组件之间有很多共通点，比如都可以取值/设值、都有默认值等。\n\n在Morning UI中这些共通点有统一的规范和标准，让你在使用不同的表单组件时有一致的体验，比如：\n\n:::democode/html\n<div style="width:300px">\n    <!-- 下面示例中： -->\n    <!-- 组件名都采用`form-name`配置 -->\n    <!-- 组件默认值都采用`default-value`配置 -->\n    <ui-textinput ref="demo4" form-name="姓名" default-value="Jim"></ui-textinput>\n    <ui-switch ref="demo5" form-name="开关" :default-value="true"></ui-switch>\n\n    <!-- 统一使用get方法获取表单值 -->\n    <ui-link js="alert(morning.findVM(\'demo4\').get());">获取姓名数值</ui-link>\n    <ui-link js="alert(morning.findVM(\'demo5\').get());">获取开关数值</ui-link>\n</div>\n:::\n\n表单组件还有更多的通用配置、方法、事件，更多内容见：[表单](/guide/form.html)。\n\n### 全局方法\n\nMorning UI在引入之后，会在`window`对象上注册`morning`对象。\n\n在`morning`对象上有一些有用的属性及方法，方便你对页面中所有的组件进行操作，比如通过组件的`ref`和`findVM()`方法找到组件的Vue实例：\n\n:::democode/html\n<div>\n    <ui-btn ref="demo3">按钮</ui-btn>\n    <br><br>\n    <ui-link js="console.log(window.morning.findVM(\'demo3\'))">在Console输出按钮的Vue实例</ui-link>\n</div>\n:::\n\n你也可以快速操作一组表单，比如通过`setGroup()`方法来为一组表单赋值：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-textinput group="demo2" form-key="name" form-name="姓名"></ui-textinput>\n    <br> \n    <ui-textinput group="demo2" form-key="age" form-name="年龄"></ui-textinput>\n    <br> \n    <ui-radio :list="{male:\'Male\',female:\'Female\'}" group="demo2" form-key="gender" form-name="性别"></ui-radio>\n    <br> \n    <ui-multiinput group="demo2" form-key="tags" form-name="标签"></ui-multiinput>\n</div>\n<br><br>\n<ui-btn js="window.morning.setGroup(\'demo2\', {name:\'Jim\', age:\'17\', gender: \'male\', tags: [\'Happy\']});">设置一组表单值</ui-btn>\n:::\n\n更多内容见：[全局方法](/guide/morning.html)。\n\n'
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
    require("vue-hot-reload-api")      .rerender("data-v-da644f6a", esExports)
  }
}

/***/ })

},[321]);