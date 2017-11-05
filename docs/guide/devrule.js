webpackJsonp([18],{

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
            page: 'devrule'
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

module.exports = exports['default'];

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(95);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 651:
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
  }, [_vm._v("\n\n# 开发规范\n\n所有的开发者及代码检视者都必须遵循以下的规范。\n\n> 若下面的规范后添加了<ui-badge xxs class=\"circle\">AUTO</ui-badge>标记，则表示此条规范会在自动化测试中检测。\n\n### 组件规范\n\n#### 通用\n    \n- 组件在Vue模板中的标签以`i-`开头<ui-badge xxs class=\"circle\">AUTO</ui-badge>\n- 组件绑定`:_uiid=\"uiid\"`<ui-badge xxs class=\"circle\">AUTO</ui-badge>\n- 组件的`index.vue`，从上至下分别为:`<template>`、`<script>`、`<style>`三个标签\n- `<style>`标签必须有`lang=\"less\"`属性\n- 引入了`<style lang=\"less\" src=\"./index.less\"></style>`\n- 使用`watch`对变量进行观察时尽量使用`this.$watch`方法\n- 组件中的`this.$watch`优先写到`mounted()`生命周期钩子函数中\n- 组件中有关`data.value`和`conf.group`的观察函数`this.$watch`优先写到`created()`生命周期钩子函数中\n- 支持`slot`的组件，在模板代码中加入了`slot`\n- 组件生成的HTML，最外层容器使用这样的标签：`<i-[name]>`，其中`name`是组件的名称\n- 每个组件必须包含两个文件：`index.vue`和`index.less`\n- 除了表单组件之外的组件继承了`UI`类，表单组件继承了`Form`类\n- 在组件根标签的class中正确的绑定了支持的声明，完整示例：`:class=\"[sizeClass, styleClass, stateClass]\"`\n- CSS中有支持的声明样式\n- 所有支持的声明，有默认样式，比如：\n```less\n&{\n    .si-m;\n    .sy-theme;\n    .st-normal;\n}\n```\n- 组件的`name`正确\n- 通过ESLint及StyleLint<ui-badge xxs class=\"circle\">AUTO</ui-badge>\n- 在`lib/components/index.js`中导出了组件\n- 确保代码不受压缩的影响\n- 样式类的命名符合[样式类全局命名规范](/guide/styleclass.html)\n- 组件支持Vue.js的`in-DOM`模板\n- 组件内依赖其它组件，使用`morning-`前缀，比如依赖按钮使用：`morning-btn`\n- 支持声明的情况下，需要添加声明的样式\n- 组件内所有的色彩以`common/var.less`中`@color`开头的变量为基础，可以修改亮度\n- 组件内的尺寸应尽量使用`common/var.less`中`@fontSize`变量为基础\n- 组件内的尺寸单位首选`em`\n- LESS中的`id`、`class`、函数命名采用中划线命名(声明的命名除外)<ui-badge xxs class=\"circle\">AUTO</ui-badge>\n- 声明在LESS中的书写顺序为：尺寸、颜色、状态\n- 组件的公开方法若不需要返回值，则返回当前`vm`实例\n\n#### 交互组件\n\n- 配置的命名符合[配置全局命名规范](/guide/config.html)\n- 添加`document`或全局级别的事件使用`utils/GlobalEvent.js`\n- 拖拽逻辑使用`utils/Move.js`\n- 弹出逻辑使用`utils/PopupManager.js`\n- `z-index`管理使用`utils/IndexManager.js`\n- 配置都需要设置类型及默认值\n- 组件私有的`methods`应该以下划线开头，非下划线开头的`methods`都是组件的公开方法\n- 支持生命周期事件\n\n#### 表单组件\n\n- 表单组件继承了`Form`类\n- 表单组件的边框/背景颜色需要使用统一的颜色\n- 方法的命名符合[方法全局命名规范](/guide/method.html)\n- 事件的命名符合[事件全局命名规范](/guide/event.html)\n- 需要添加`_valueFilter`方法来处理数值过滤\n- 在模板中绑定以下的`props`:`form-name`、`form-key`、`group`、`default-value`、`hide-name`\n- 组件模板中包含显示`form-name`的位置\n- 当`hide-name`配置为`true`是隐藏`form-name`\n- 表单高度应尽量使用`common/var.less`中`@formHeight`变量为基础\n- 表单边框、背景、文字等色彩以`common/var.less`中`@colorForm`开头的变量为基础，可以修改亮度\n- 表单的值可被JSON序列化\n- 支持状态声明中的`normal`和`disabled`\n- 支持以下这些配置：`form-name`、`form-key`、`group`、`default-value`、`hide-name`\n- 支持以下这些方法：`.set`、`.get`、`.setName`、`.getName`、`.setKey`、`.getKey`、`.setGroup`、`.getGroup`、`.addGroup`、`.removeGroup`\n- 支持`value-change`事件\n\n### 文档规范\n\n#### 通用\n\n- 文档包含：标题、组件状态栏、开始、声明、源码\n- 组件标题及HTML标签正确\n- 组件介绍跟在`开始`标签后面，清晰明白。如有必要可以追加详细说明。\n- `开始`中应该包含组件中所有样式类的名称、说明、演示\n- `使用`演示必须是最简单的，如需要可补充说明\n- `声明`中注明声明的支持情况，若不是全部支持，需要列出支持的项目\n- `声明`中的演示需要包含支持声明的每一种值示例，且示例遵循最小化原则(不要多种声明混合用，除非演示需要)，如需要可补充示例说明\n- `声明`中色彩演示部分，主题/功能/杂项色彩应该分区展示\n- 文档中代码演示部分应该具有较高的可读性，如果代码量较多需要加入适量的空行\n- 新增的样式类、配置、方法、事件命名需要加到全局命名规范中\n- 演示代码与展示源码保持一致，且两个区域是连在一起的\n- 文档的`page`属性正确\n\n#### 交互组件\n\n- 文档包含：标题、组件状态栏、开始、声明、配置、方法、事件、源码\n- 事件/生命周期事件中名称正确\n- 文档表格中`默认值`需要加反引号，如果是字符串需要再加引号\n- 文档表格中`值类型`一行一个，不需要加反引号\n- 文档表格中`接受值`一行一个，如有必要需要加说明，数值用反引号，说明直接写\n- 方法名称中的必填项直接写，可选项使用`[]`包裹，比如：`.set(key, [value])`中`key`是必填项，`value`是可选项\n- 具有生命周期事件演示\n\n#### 表单组件\n\n- 文档包含：标题、组件状态栏、开始、声明、配置、方法、事件、表单值、源码\n- 具有状态声明中的`normal`和`disabled`的演示\n- 具有以下这些配置演示：`form-name`、`form-key`、`group`、`default-value`、`hide-name`\n- 具有以下这些方法演示：`.set`、`.get`、`.setName`、`.getName`、`.setKey`、`.getKey`、`.setGroup`、`.getGroup`、`.addGroup`、`.removeGroup`\n- 具有`value-change`事件演示\n\n### 测试用例规范\n\nComing soon\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-417983e1", esExports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_417983e1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(651);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(332)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_417983e1_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/devrule/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-417983e1", Component.options)
  } else {
    hotAPI.reload("data-v-417983e1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[280]);