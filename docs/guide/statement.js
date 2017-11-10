webpackJsonp([8],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(327);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8ec1c402_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(330);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(328)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8ec1c402_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/statement/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ec1c402", Component.options)
  } else {
    hotAPI.reload("data-v-8ec1c402", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 328:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 329:
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
            page: 'statement'
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 330:
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
  }, [_vm._v("\n\n# 声明\n\n声明是一种通用的组件属性，有一套全局的规范，组件必须支持所有类型的声明，但是组件可以根据实际情况支持声明中部分值（至少一个）。\n\n目前声明包含三类：`尺寸`、`色彩`、`状态`。\n\n每一个声明都是HTML标签的一种属性，你可以像下面这样使用：\n\n```html\n<!-- 使用XL尺寸的ui-btn组件 -->\n<ui-btn xl></ui-btn>\n```\n\n不同类型的声明可以在同一组件上使用：\n\n```html\n<!-- 使用XL尺寸，危险色彩，加载状态的ui-btn组件 -->\n<ui-btn xl danger loading></ui-btn>\n```\n\n但是同一类型的声明只能使用一个，如果同时使用只会生效一个：\n\n```html\n<!-- 同时定义两种尺寸，只有一种尺寸会生效 -->\n<ui-btn xxs xxl></ui-btn>\n\n<!-- 同时定义两种色彩，只有一种色彩会生效 -->\n<ui-btn danger success></ui-btn>\n```\n\n### 尺寸\n\n尺寸声明了组件的大小，包含：\n\n- `xxl` : 超大\n- `xl` : 大\n- `l` : 较大\n- `m` : 中\n- `s` : 较小\n- `xs` : 小\n- `xxs` : 超小\n\n组件会根据实际情况支持其中的部分尺寸(至少支持一种)，大部分组件的默认尺寸都是`m`。\n\n### 颜色\n\n颜色声明了组件的配色，包含：`主题色`、`功能色`、`辅助色`。\n\n#### 主题色\n\nUI的主色彩，Morning默认采用红色，使用者可以自己定义主题色。\n\n<div class=\"colorFlex\">\n    <div class=\"item w3\" style=\"background:#f86f88;\">\n        <p class=\"key\">light-theme</p>\n        <p class=\"name\">浅主题色</p>\n        <p class=\"color\">#f86f88</p>\n    </div>\n    <div class=\"item w3\" style=\"background:#f33d5d;\">\n        <p class=\"key\">theme</p>\n        <p class=\"name\">主题色</p>\n        <p class=\"color\">#f33d5d</p>\n    </div>\n    <div class=\"item w3\" style=\"background:#d22343;\">\n        <p class=\"key\">dark-theme</p>\n        <p class=\"name\">深主题色</p>\n        <p class=\"color\">#d22343</p>\n    </div>\n</div>\n\n#### 功能色\n\n功能色具有一定的含义，可以用在特定的场景，比如绿色表示成功，黄色表示警告。\n\n<div class=\"colorFlex\">\n    <div class=\"item w3\" style=\"background:#4dbd67;\">\n        <p class=\"key\">success</p>\n        <p class=\"name\">成功/正确</p>\n        <p class=\"color\">#4dbd67</p>\n    </div>\n    <div class=\"item w3\" style=\"background:#f0ad4e;\">\n        <p class=\"key\">warning</p>\n        <p class=\"name\">警告/注意</p>\n        <p class=\"color\">#f0ad4e</p>\n    </div>\n    <div class=\"item w3\" style=\"background:#d64431;\">\n        <p class=\"key\">danger</p>\n        <p class=\"name\">错误/危险</p>\n        <p class=\"color\">#d64431</p>\n    </div>\n</div>\n\n<div class=\"colorFlex\">\n    <div class=\"item w3\" style=\"background:#2185d0;\">\n        <p class=\"key\">primary</p>\n        <p class=\"name\">主要/关键</p>\n        <p class=\"color\">#2185d0</p>\n    </div>\n    <div class=\"item w3\" style=\"background:#a9a9a9;\">\n        <p class=\"key\">minor</p>\n        <p class=\"name\">次要/不醒目</p>\n        <p class=\"color\">#a9a9a9</p>\n    </div>\n    <div class=\"item w3\" style=\"background:#03a6b9;\">\n        <p class=\"key\">info</p>\n        <p class=\"name\">信息/额外</p>\n        <p class=\"color\">#03a6b9</p>\n    </div>\n</div>\n\n#### 辅助色\n\n用于边框、背景、文本等场景。辅助色具有一定色阶，可用来表现层次。\n\n<div class=\"colorFlex\">\n    <div class=\"item w4 group\">\n        <div class=\"item\" style=\"background:#17212d\">\n            <p class=\"key\">black</p>\n            <p class=\"name\">黑色</p>\n            <p class=\"color\">#17212d</p>\n        </div>\n        <div class=\"item\" style=\"background:#303c4b\">\n            <p class=\"key\">light-black</p>\n            <p class=\"name\">浅黑色</p>\n            <p class=\"color\">#303c4b</p>\n        </div>\n        <div class=\"item\" style=\"background:#45505c\">\n            <p class=\"key\">extra-light-black</p>\n            <p class=\"name\">超浅黑色</p>\n            <p class=\"color\">#45505c</p>\n        </div>\n    </div>\n    <div class=\"item w4 group\">\n        <div class=\"item\" style=\"background:#7c8ba0\">\n            <p class=\"key\">blue</p>\n            <p class=\"name\">青色</p>\n            <p class=\"color\">#7c8ba0</p>\n        </div>\n        <div class=\"item\" style=\"background:#8e9caf\">\n            <p class=\"key\">light-blue</p>\n            <p class=\"name\">浅青色</p>\n            <p class=\"color\">#8e9caf</p>\n        </div>\n        <div class=\"item\" style=\"background:#a8b3c2\">\n            <p class=\"key\">extra-light-blue</p>\n            <p class=\"name\">超浅青色</p>\n            <p class=\"color\">#a8b3c2</p>\n        </div>\n    </div>\n    <div class=\"item w4 group colorDark\">\n        <div class=\"item\" style=\"background:#d6dde5\">\n            <p class=\"key\">silver</p>\n            <p class=\"name\">银色</p>\n            <p class=\"color\">#d6dde5</p>\n        </div>\n        <div class=\"item\" style=\"background:#e2e8ee\">\n            <p class=\"key\">light-silver</p>\n            <p class=\"name\">浅银色</p>\n            <p class=\"color\">#e2e8ee</p>\n        </div>\n        <div class=\"item\" style=\"background:#edf1f5\">\n            <p class=\"key\">extra-light-silver</p>\n            <p class=\"name\">超浅银色</p>\n            <p class=\"color\">#edf1f5</p>\n        </div>\n    </div>\n    <div class=\"item w4 group colorDark\">\n        <div class=\"item\" style=\"background:#e6e6e6\">\n            <p class=\"key\">gray</p>\n            <p class=\"name\">灰色</p>\n            <p class=\"color\">#e6e6e6</p>\n        </div>\n        <div class=\"item\" style=\"background:#f0f0f0\">\n            <p class=\"key\">light-gray</p>\n            <p class=\"name\">浅灰色</p>\n            <p class=\"color\">#f0f0f0</p>\n        </div>\n        <div class=\"item\" style=\"background:#fff\">\n            <p class=\"key\">white</p>\n            <p class=\"name\">白色</p>\n            <p class=\"color\">#ffffff</p>\n        </div>\n    </div>\n</div>\n\n### 状态\n\n声明了组件当前的状态，包括：\n\n- `normal` : 正常状态 \n- `hover` : Hover状态\n- `active` : 激活状态\n- `disabled` : 禁用状态\n- `apparent` : 醒目状态\n- `loading` : 载入中\n- `processing` : 处理中\n\n`loading`和`processing`的区别是，`loading`在等待远程处理的状态，`processing`一般用于本地处理。\n\n组件会根据实际情况支持其中的部分状态(至少支持一种)，大部分组件的默认状态都是`normal`。\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8ec1c402", esExports)
  }
}

/***/ })

},[326]);