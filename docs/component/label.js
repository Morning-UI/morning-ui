webpackJsonp([53],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 167:
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
            page: 'label'
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

module.exports = exports['default'];

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(61);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31e80fc5_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(645);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(325)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31e80fc5_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/label/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31e80fc5", Component.options)
  } else {
    hotAPI.reload("data-v-31e80fc5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 645:
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
  }, [_vm._v("\n# 标签 `<ui-label>`\n\n<doc-component-status page=\"label\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个标签，标签和徽章不同在于标签可以插入图片或图标，这是一个内联块元素。\n\n徽章一般单独使用，而标签一般多个一起使用。\n\n#### 使用\n\n:::democode/html\n<ui-label>标签</ui-label>\n:::\n\n#### 使用图片\n\n为`ui-label`加上`image`类，然后在标签内通过`<img>`标签插入图片，此时标签文本请使用`<span>`标签。\n\n> 注意：使用时请确保`<span>`和`<img>`标签之间有空格。\n\n\n:::democode/html\n<ui-label class=\"image\">\n    <img src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"/>\n    <span>标签</span>\n</ui-label>\n\n<ui-label class=\"image\">\n    <span>标签</span>\n    <img src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"/>\n</ui-label>\n:::\n\n#### 使用图标\n\n为`ui-label`加上`icon`类，然后在标签内通过`<i class=\"iconfont\">`标签插入图标，此时标签文本请使用`<span>`标签。\n\n> 注意：使用时请确保`<span>`和`<img>`标签之间有空格。\n\n\n:::democode/html\n<ui-label class=\"icon\">\n    <i class=\"iconfont\">&#xe6e2;</i>\n    <span>标签</span>\n</ui-label>\n\n<ui-label class=\"icon\">\n    <span>标签</span>\n    <i class=\"iconfont\">&#xe6e2;</i>\n</ui-label>\n:::\n\n[[[声明]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`theme`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<ui-label {$sizeKey}>{$&sizeName}</ui-label>\n:::\n\n:::repeat/html\nsize\n---\n<ui-label class=\"icon\" {$sizeKey}><i class=\"iconfont\">&#xe6e2;</i> <span>{$&sizeName}</span></ui-label>\n:::\n\n:::repeat/html\nsize\n---\n<ui-label class=\"image\" {$sizeKey}><img src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"/> <span>{$&sizeName}</span></ui-label>\n:::\n\n#### 色彩\n\n:::preset/html\nstatementColor\n---\nuikey:label\n:::\n\n#### 状态\n\n:::repeat/html\nstate:normal,apparent\n---\n<ui-label {$stateKey}>{$&stateName}</ui-label>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/label/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-31e80fc5", esExports)
  }
}

/***/ })

},[248]);