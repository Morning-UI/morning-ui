webpackJsonp([17],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 203:
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
            page: 'event'
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

module.exports = exports['default'];

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(97);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 665:
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
  }, [_vm._v("\n# 事件\n\n组件改变状态时会触发事件，通过监听事件，外部逻辑可以响应组件的变化。\n\n事件包含三类：\n\n- 生命周期事件 : 基于Vue生命周期的钩子函数，所有组件都支持。\n- 值变更事件 : 只有表单组件有，并且所有的表单组件都支持，当表单的数值发生变化时触发。\n- 组件事件 : 只有交互及表单组件有，每个组件根据的自身情况触发的事件。\n\n所有的事件都需要遵循全局命名规范。\n\n### 监听事件\n\n组件的事件监听，基于Vue的自定义事件，你可以在模板中通过`v-on`指令监听事件：\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo1.console1', 'emit event!');\n        }\n    }\n});\n---\n<div>\n    <!-- 监听emit事件，并调用echo方法 -->\n    <ui-btn v-on:emit=\"echo\">监听emit事件</ui-btn>\n</div>\n:::\n\n#### v-on缩写\n\n你也可以通过`@`来缩写`v-on`用法：\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo2.console1', 'emit event!');\n        }\n    }\n});\n---\n<div>\n    <!-- 监听emit事件，并调用echo方法 -->\n    <ui-btn @emit=\"echo\">监听emit事件</ui-btn>\n</div>\n:::\n\n#### $on监听\n\n你还可以通过组件vm上的`$on`方法来监听事件：\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}'\n});\n\n// 通过$on监听事件\nwindow.morning.findVM('demo3').$on('emit', () => {\n    console.log('demo3.console1', 'emit event!');\n});\n---\n<div>\n    <ui-btn ref=\"demo3\">监听emit事件</ui-btn>\n</div>\n:::\n\n你可以查看[Vue/事件处理](https://vuejs.org/v2/guide/events.html)获取更多细节，但是需要注意Vue中的事件修饰符、键值修饰符、鼠标按钮修饰符等特性在MorningUI中并不支持。\n\n### 生命周期事件\n\n组件的生命周期事件是Vue生命周期钩子函数的子集，所有组件都支持，包含：\n\n- `created` : 创建之后\n- `mounted` : 挂载之后\n- `before-update` : 更新之前\n- `updated` : 更新之后\n- `before-destroy` : 销毁之前\n\n通过生命周期事件，可以让组件在不同周期中执行父vm的逻辑。\n\n### 值变更事件\n\nComing soom.\n\n### 组件事件\n\n组件事件是不同组件根据自身的情况支持的额外事件，仅交互和表单组件支持，每个都有不同的组件事件，你可以在组件文档中查看该组件支持的事件及触发时机。\n\n### 事件全局命名规范\n\n事件在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。\n\n由于Vue支持in-DOM template，所以请勿使用驼峰法命名事件名称，这是因为在HTML的标签中属性名不区分大小写。\n\n在为组件添加事件前应先检查下面的列表，是否有含义相同的事件，若有请使用，若没有请将新的事件添加到下面列表并注明它的含义。\n\n- `created` : 创建之后\n- `mounted` : 挂载之后\n- `before-update` : 更新之前\n- `updated` : 更新之后\n- `before-destroy` : 销毁之前\n- `emit` : 组件被触发\n- `switch` : 切换\n- `show` : 显示\n- `hide` : 隐藏\n- `done` : 完成\n- `fail` : 失败\n- `value-change` : 表单值改变\n- `focus` : 表单聚焦\n- `blur` : 表单失焦\n- `list-show` : 列表显示\n- `list-hide` : 列表隐藏\n- `input-value-change` : 输入框值变化\n- `input-focus` : 输入框聚焦\n- `input-blur` : 输入框失焦\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-54bce02c", esExports)
  }
}

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54bce02c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(665);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(345)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54bce02c_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/event/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54bce02c", Component.options)
  } else {
    hotAPI.reload("data-v-54bce02c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[284]);