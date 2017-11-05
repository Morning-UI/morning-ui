webpackJsonp([54],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 164:
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
            page: 'itemlist'
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

module.exports = exports['default'];

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(59);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d68b996_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(668);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(349)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d68b996_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/itemlist/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d68b996", Component.options)
  } else {
    hotAPI.reload("data-v-5d68b996", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 668:
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
  }, [_vm._v("\n# 项目列表 `<ui-itemlist>`\n\n<doc-component-status page=\"itemlist\"></doc-component-status>\n\n[[[开始]]]\n\n定义项目列表组件，项目列表中的每一项包含图片及文字内容，这是一个块级元素。\n\n项目列表可包含：\n\n- 缩略图 `img`\n- 标题 `.title`\n- 描述 `.desc`\n- 主体内容 `.body`\n- 附加信息 `.additional`\n\n#### 使用\n\n:::democode/html\n<div style=\"width:400px\">\n<ui-itemlist>\n    <ui-ul>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">Header</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">Additional Details</div> \n        </li>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">Header</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">Additional Details</div> \n        </li>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">Header</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">Additional Details</div> \n        </li>\n    </ui-ul>\n</ui-itemlist>\n</div>\n:::\n\n#### 下划线分隔\n\n:::democode/html\n<div style=\"width:400px\">\n<ui-itemlist class=\"underline\">\n    <ui-ul>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">Header</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">Additional Details</div> \n        </li>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">Header</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">Additional Details</div> \n        </li>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">Header</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">Additional Details</div> \n        </li>\n    </ui-ul>\n</ui-itemlist>\n</div>\n:::\n\n#### 单行标题\n\n:::democode/html\n<div style=\"width:400px\">\n<ui-itemlist xs>\n    <ui-ul>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">Header</h3>\n        </li>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">Header</h3>\n        </li>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">Header</h3>\n        </li>\n    </ui-ul>\n</ui-itemlist>\n</div>\n:::\n\n#### 单行内容\n\n:::democode/html\n<div style=\"width:400px\">\n<ui-itemlist xs>\n    <ui-ul>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <div class=\"body\">Body</div>\n        </li>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <div class=\"body\">Body</div>\n        </li>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <div class=\"body\">Body</div>\n        </li>\n    </ui-ul>\n</ui-itemlist>\n</div>\n:::\n\n#### 无图片\n\n:::democode/html\n<div style=\"width:400px\">\n<ui-itemlist>\n    <ui-ul>\n        <li>\n            <h3 class=\"title\">Header</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">Additional Details</div> \n        </li>\n        <li>\n            <h3 class=\"title\">Header</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">Additional Details</div> \n        </li>\n        <li>\n            <h3 class=\"title\">Header</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">Additional Details</div> \n        </li>\n    </ui-ul>\n</ui-itemlist>\n</div>\n:::\n\n#### 配合`ui-label`\n\n:::democode/html\n<div style=\"width:400px\">\n<ui-itemlist>\n    <ui-ul>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">Header</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">\n                <ui-label s minor>Normal</ui-label>\n            </div> \n        </li>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">Header</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">\n                <ui-label s danger>High</ui-label>\n            </div> \n        </li>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">Header</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">\n                <ui-label s minor>Normal</ui-label>\n            </div> \n        </li>\n    </ui-ul>\n</ui-itemlist>\n</div>\n:::\n\n[[[声明]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<div style=\"width:400px\">\n<ui-itemlist {$sizeKey}>\n    <ui-ul>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">{$&sizeName}</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">Additional Details</div> \n        </li>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">{$&sizeName}</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">Additional Details</div> \n        </li>\n        <li>\n            <ui-img class=\"img\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n            <h3 class=\"title\">{$&sizeName}</h3>\n            <p class=\"desc\">Description</p>\n            <div class=\"body\">Body</div>\n            <div class=\"additional\">Additional Details</div> \n        </li>\n    </ui-ul>\n</ui-itemlist>\n</div>\n<br><br>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/itemlist/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d68b996", esExports)
  }
}

/***/ })

},[244]);