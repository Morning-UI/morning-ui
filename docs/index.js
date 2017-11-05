webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23d6d735_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(635);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(316)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23d6d735_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23d6d735", Component.options)
  } else {
    hotAPI.reload("data-v-23d6d735", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _highlight = __webpack_require__(6);

var _highlight2 = _interopRequireDefault(_highlight);

var _DocHeader = __webpack_require__(9);

var _DocHeader2 = _interopRequireDefault(_DocHeader);

var _DocFooter = __webpack_require__(8);

var _DocFooter2 = _interopRequireDefault(_DocFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {

        return {
            category: 'home'
        };
    },
    components: {
        'doc-header': _DocHeader2.default,
        'doc-footer': _DocFooter2.default
    },
    mounted: function mounted() {

        _highlight2.default.initHighlightingOnLoad();
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

module.exports = exports['default'];

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(113);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('doc-header', {
    attrs: {
      "category": _vm.category
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('section', {
    staticClass: "s1 gray"
  }, [_c('h1', [_vm._v("起步")]), _vm._v(" "), _c('div', {
    staticClass: "w900"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "lrBox"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('ui-textinput', {
    attrs: {
      "form-name": "E-Mail"
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('ui-btn', {
    attrs: {
      "success": ""
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('ui-btn', {
    attrs: {
      "minor": ""
    }
  }, [_vm._v("取消")])], 1)])])]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('doc-footer')], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "s1"
  }, [_c('div', {
    staticClass: "w1k center"
  }, [_c('img', {
    staticClass: "mainLogo",
    attrs: {
      "src": "http://h0.hucdn.com/open/201734/d693b26dc14f52a0_800x800.png",
      "alt": "morning-ui"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "keywork"
  }, [_c('span', [_vm._v("Efficiency")]), _vm._v(" "), _c('span', [_vm._v("Modern")]), _vm._v(" "), _c('span', [_vm._v("Friendly")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lrBox"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('h3', [_vm._v("引入Vue.js及Morning UI")]), _vm._v(" "), _c('p', [_vm._v("首先获取"), _c('a', {
    attrs: {
      "href": "https://cn.vuejs.org/v2/guide/installation.html#直接-lt-script-gt-引入",
      "target": "_blank"
    }
  }, [_vm._v("Vue.js")]), _vm._v("及"), _c('a', {
    attrs: {
      "href": "/guide/install.html",
      "target": "_blank"
    }
  }, [_vm._v("Morning UI")]), _vm._v("，然后通过"), _c('code', [_vm._v("<script>")]), _vm._v("将它们引入到页面中。")]), _vm._v(" "), _c('p', [_vm._v("你也可以通过其它方式引入，详见："), _c('a', {
    attrs: {
      "href": "/guide/install.html"
    }
  }, [_vm._v("开始使用/安装")])])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('pre', [_vm._v("                        "), _c('code', {
    staticClass: "language-html hljs xml"
  }, [_vm._v("\n<script src=\"https://cdn.jsdelivr.net/npm/vue\"></script>\n\n<link href=\"path-to-morning/morning-ui.css\" rel=\"stylesheet\">\n<script src=\"path-to-morning/morning-ui.js\"></script>\n                        ")]), _vm._v("\n                        ")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lrBox"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('h3', [_vm._v("初始化")]), _vm._v(" "), _c('p', [_vm._v("在使用组件之前需要先初始化Morning UI，可以在初始化时进行配置。")])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('pre', [_vm._v("                        "), _c('code', {
    staticClass: "language-js hljs"
  }, [_vm._v("\nVue.use(morning);\n                        ")]), _vm._v("\n                        ")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lrBox"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('h3', [_vm._v("使用组件")]), _vm._v(" "), _c('p', [_vm._v("Morning UI基于Vue.js的Components，所以你可以像使用原生DOM元素一样使用。")])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('pre', [_vm._v("                        "), _c('code', {
    staticClass: "language-html hljs xml"
  }, [_vm._v("\n<ui-textinput form-name=\"E-Mail\"></ui-textinput>\n<br>\n<ui-btn success>提交</ui-btn> <ui-btn minor>取消</ui-btn>\n                        ")]), _vm._v("\n                        ")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "left"
  }, [_c('h3', [_vm._v("完成！")]), _vm._v(" "), _c('p', [_vm._v("使用Morning UI只需简单三步。")]), _vm._v(" "), _c('p', [_vm._v("接下来：\n                            "), _c('br'), _c('a', {
    attrs: {
      "href": "/guide/usage.html"
    }
  }, [_vm._v("了解Morning UI的更多用法")]), _vm._v(" "), _c('br'), _c('a', {
    attrs: {
      "href": "/guide/becontributor.html"
    }
  }, [_vm._v("成为Morning UI的贡献者")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "s1"
  }, [_c('div', {
    staticClass: "w1k col"
  }, [_c('div', {
    staticClass: "c31 center"
  }, [_c('p', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "iconfont"
  }, [_vm._v("")])]), _vm._v(" "), _c('h3', [_vm._v("源于HMP UI")]), _vm._v(" "), _c('p', {
    staticClass: "desc"
  }, [_vm._v("HMP UI是面向桌面Web的UI库，在过去两年中被用在了各种场景。Morning UI起源于此。")])]), _vm._v(" "), _c('div', {
    staticClass: "c31 center"
  }, [_c('p', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "iconfont"
  }, [_vm._v("")])]), _vm._v(" "), _c('h3', [_vm._v("50+组件")]), _vm._v(" "), _c('p', {
    staticClass: "desc"
  }, [_vm._v("Morning UI有超过50个组件，丰富的组件为你构建的应用提供了有力的支持。")])]), _vm._v(" "), _c('div', {
    staticClass: "c31 center"
  }, [_c('p', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "iconfont"
  }, [_vm._v("")])]), _vm._v(" "), _c('h3', [_vm._v("开源社区")]), _vm._v(" "), _c('p', {
    staticClass: "desc"
  }, [_vm._v("Morning UI基于MIT协议开源，你可以免费使用它。我们欢迎开发者加入到Morning UI的社区中。")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-23d6d735", esExports)
  }
}

/***/ })

},[298]);