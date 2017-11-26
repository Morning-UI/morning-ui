webpackJsonp([83],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(732);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3801b44a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(735);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(733)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3801b44a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/action/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3801b44a", Component.options)
  } else {
    hotAPI.reload("data-v-3801b44a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 733:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 734:
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
            page: 'action'
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

module.exports = exports['default'];

/***/ }),

/***/ 735:
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
  }, [_vm._v("\n# 行动栏 `<ui-action>`\n\n<doc-component-status page=\"action\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个包含多个操作的行动栏。\n\n行动栏可包含：\n\n- 名称 .title\n- 说明 .note\n- 行动区域 .action\n\n#### 使用\n\n:::democode/html\n<div style=\"width:400px\">\n    <ui-action>\n        <div class=\"title\">\n            <h5>行动名称</h5>\n            <span class=\"note\">行动说明</span>\n        </div>\n        <div class=\"action\">\n            <ui-btn>行动按钮</ui-btn>\n        </div>\n    </ui-action>\n</div>\n:::\n\n#### 多个行动入口\n\n:::democode/html\n<div style=\"width:400px\">\n    <ui-action>\n        <div class=\"title\">\n            <h5>行动名称</h5>\n            <span class=\"note\">行动说明</span>\n        </div>\n        <div class=\"action\">\n            <ui-btn>确认</ui-btn>\n            <ui-link color=\"minor\">取消</ui-link>\n        </div>\n    </ui-action>\n</div>\n:::\n\n#### 垂直排列\n\n:::democode/html\n<div style=\"width:400px\">\n    <ui-action class=\"vertical\">\n        <div class=\"title\">\n            <h5>行动名称</h5>\n            <span class=\"note\">行动说明</span>\n        </div>\n        <div class=\"action\">\n            <ui-textinput></ui-textinput>\n        </div>\n    </ui-action>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`black`|\n|状态|不支持|-|\n\n<a href=\"/guide/status.html\">查看形态文档</a>\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<div style=\"width:400px\">\n    <ui-action size=\"{$sizeKey}\">\n        <div class=\"title\">\n            <h5>{$&sizeName}</h5>\n            <span class=\"note\">行动说明</span>\n        </div>\n        <div class=\"action\">\n            <ui-btn size=\"{$sizeKey}\">行动按钮</ui-btn>\n        </div>\n    </ui-action>\n</div>\n<br>\n:::\n\n#### 色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<div style=\"width:400px\">\n    <ui-action color=\"{$colorKey}\">\n        <div class=\"title\">\n            <h5>{$&colorName}</h5>\n            <span class=\"note\">行动说明</span>\n        </div>\n        <div class=\"action\">\n            <ui-btn color=\"{$colorKey}\">{$name}按钮</ui-btn>\n        </div>\n    </ui-action>\n</div>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/action/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3801b44a", esExports)
  }
}

/***/ })

},[731]);