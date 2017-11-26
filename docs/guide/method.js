webpackJsonp([13],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(357);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76670ab2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(360);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(358)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76670ab2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/method/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76670ab2", Component.options)
  } else {
    hotAPI.reload("data-v-76670ab2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 358:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 359:
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
            page: 'method'
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

/***/ 360:
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
  }, [_vm._v("\n# 方法\n\n交互及表单组件都提供组件方法，通过调用组件方法可以修改及获取组件内部的状态。\n\n所有的方法都需要遵循全局命名规范。\n\n### 使用\n\n组件的方法挂载在组件的vm上，调用方法需要先找到组件的vm。\n\n目前可以通过两种方式找到组件的vm:\n\n- 父vm的子组件索引调用\n- 全局查找调用\n\n不过这两种方法实际都是基于Vue的子组件索引(ref)来实现的，你可以查看[Vue/子组件索引](https://vuejs.org/v2/guide/components.html#Child-Component-Refs)获取更多细节。\n\n#### 父vm的子组件索引调用\n\n使用前需要在被调用的组件上通过`ref`指定一个索引ID，然后在父vm中通过`this.$refs.[refId]`即可找到组件的vm：\n\n:::vue/html\nwindow.parentVm1 = new Vue({\n    el : '{$el}',\n    template : '{$template}'\n});\n---\n<div>\n    <!-- 在组件上添加`ref`，指定索引ID -->\n    <ui-btn ref=\"demo1\">按钮</ui-btn>\n    \n    <br><br>\n\n    <!-- 在父vm中通过`$refs`找到组件vm并调用挂载的方法 -->\n    <ui-link js=\"javascript:window.parentVm1.$refs.demo1.lock();\">锁定按钮</ui-link>\n    <ui-link js=\"javascript:window.parentVm1.$refs.demo1.unlock();\">解锁按钮</ui-link>\n</div>\n:::\n\n#### 全局查找调用\n\n使用前需要在被调用的组件上通过ref指定一个索引ID，然后通过Morning UI提供的全局方法`morning.findVM()`查找组件vm：\n\n:::democode/html\n<div>\n    <!-- 在组件上添加`ref`，指定索引ID -->\n    <ui-btn ref=\"demo2\">按钮</ui-btn>\n    \n    <br><br>\n\n    <!-- 通过findVM方法全局查找组件vm并调用挂载的方法 -->\n    <ui-link js=\"javascript:window.morning.findVM('demo2').lock();\">锁定按钮</ui-link>\n    <ui-link js=\"javascript:window.morning.findVM('demo2').unlock();\">解锁按钮</ui-link>\n</div>\n:::\n\n`findVM()`方法本质上也是基于`ref`来实现的，只是提供了一个全局查找的快捷方法。\n\n[查看findVM()方法详情](/guide/morning.html#findVMref)\n\n### 通用方法\n\n交互和表单组件都支持一些通用的方法:\n\n- `getConf` : 获取组件配置，详见[获取配置](/guide/config.html#获取配置)\n\n### 私有方法\n\n组件vm上任何以下划线开头的都是私有方法，用法及变动不会再文档中提及，不应该使用。\n\n### 方法全局命名规范\n\n方法在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。\n\n在为组件添加方法前应先检查下面的列表，是否有含义相同的事件，若有请使用，若没有请将新的方法添加到下面列表并注明它的含义。\n\n- `show` : 显示\n- `hide` : 隐藏\n- `toLevel` : 至某层级\n- `setLevel` : 设置层级\n- `getLevel` : 获取层级\n- `addLevel` : 添加层级\n- `getHistory` : 获取历史\n- `backLast` : 回退一步\n- `resolve` : 完成\n- `reject` : 失败\n- `reload` : 重载\n- `switch` : 切换\n- `lock` : 锁定\n- `unlock` : 解锁\n- `set` : 设置表单值\n- `get` : 获取表单值\n- `setName` : 设置表单名\n- `getName` : 获取表单名\n- `setKey` : 设置表单Key\n- `getKey` : 获取表单Key\n- `setGroup` : 设置表单组\n- `getGroup` : 获取表单组\n- `addGroup` : 添加表单组\n- `removeGroup` : 移除表单组\n- `setRows` : 设置行数\n- `toggle` : 切换状态\n- `add` : 添加项目\n- `update` : 更新项目\n- `del` : 删除项目\n- `move` : 移动项目\n- `setInput` : 设置输入框值\n- `getInput` : 获取输入框值\n- `getPage` : 获取页数\n- `to` : 至某一项\n- `next` : 下一项\n- `prev` : 上一项\n- `setTotal` : 设置总数\n- `push` : 推送\n- `close` : 关闭\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76670ab2", esExports)
  }
}

/***/ })

},[356]);