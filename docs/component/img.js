webpackJsonp([54],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 162:
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
            page: 'img'
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

module.exports = exports['default'];

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(58);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d103158_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(654);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(336)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d103158_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/img/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d103158", Component.options)
  } else {
    hotAPI.reload("data-v-4d103158", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 654:
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
  }, [_vm._v("\n# 图片 `<ui-img>`\n\n<doc-component-status page=\"img\"></doc-component-status>\n\n[[[开始]]]\n\n定义图片容器，支持三种不同形状的图片，可为图片添加文字说明。\n\n`ui-img`仅支持下面这些属性：\n\n- src : 图片地址\n- width : 图片宽度\n- height : 图片高度\n- alt : 图片加载失败显示内容\n- title : 图标标题\n\n#### 使用\n\n:::democode/html\n<ui-img src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n:::\n\n#### 带文字说明图片\n\n:::democode/html\n<ui-img src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\">说明文字</ui-img>\n:::\n\n#### 不同形状\n\n支持三种：\n\n- `rounded` : 圆角\n- `circle` : 圆形\n- `thumbnail` : 相框\n\n:::democode/html\n<ui-img class=\"rounded\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n<ui-img class=\"circle\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n<ui-img class=\"thumbnail\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n:::\n\n#### 支持的属性\n\n:::democode/html\n<!-- 添加width属性，自动设置图片宽度 -->\n<ui-img width=\"130\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n\n<!-- 添加height属性，自动设置图片高度 -->\n<ui-img height=\"150\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n\n<!-- 添加title属性，自动设置图片title -->\n<ui-img title=\"这里是title\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img>\n\n<!-- 添加alt属性，自动设置图片alt属性，当图片无法显示时候，显示alt内容。 -->\n<ui-img alt=\"这里是alt\" src=\"https://d13yacurqjgar.cloudfront.net/noimg.jpeg\"></ui-img>\n:::\n\n[[[声明]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/img/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4d103158", esExports)
  }
}

/***/ })

},[241]);