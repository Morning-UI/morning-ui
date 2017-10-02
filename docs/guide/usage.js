webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_657369b6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(533);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(286)
}
var normalizeComponent = __webpack_require__(0)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_657369b6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/usage/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-657369b6", Component.options)
  } else {
    hotAPI.reload("data-v-657369b6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 11:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56a72814_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocBody_vue__ = __webpack_require__(17);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56a72814_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocBody_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocBody.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocBody.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56a72814", Component.options)
  } else {
    hotAPI.reload("data-v-56a72814", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e2a2c2b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocComponentStatus_vue__ = __webpack_require__(16);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e2a2c2b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocComponentStatus_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocComponentStatus.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocComponentStatus.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e2a2c2b", Component.options)
  } else {
    hotAPI.reload("data-v-3e2a2c2b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b1c570a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocSubmenu_vue__ = __webpack_require__(15);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(9)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b1c570a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocSubmenu_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocSubmenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocSubmenu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b1c570a", Component.options)
  } else {
    hotAPI.reload("data-v-1b1c570a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "submenu"
  }, _vm._l((_vm.currentMenu), function(link, name) {
    return _c('li', [(link === '/' + _vm.category + '/' + _vm.page + '.html') ? [(typeof link === 'string') ? _c('a', {
      staticClass: "current",
      attrs: {
        "href": link
      },
      domProps: {
        "innerHTML": _vm._s(name)
      }
    }) : _c('p', {
      staticClass: "title",
      domProps: {
        "innerHTML": _vm._s(name)
      }
    })] : [(typeof link === 'string') ? _c('a', {
      attrs: {
        "href": link
      },
      domProps: {
        "innerHTML": _vm._s(name)
      }
    }) : _c('p', {
      staticClass: "title",
      domProps: {
        "innerHTML": _vm._s(name)
      }
    })]], 2)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b1c570a", esExports)
  }
}

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc-status-bar"
  }, [_c('div', {
    staticClass: "item",
    class: {
      pass: _vm.isUnitPass, fail: !_vm.isUnitPass
    },
    attrs: {
      "title": _vm.unitTitle
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("Unit Test")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.unit) + " " + _vm._s(_vm.unitNote))])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: {
      pass: _vm.isE2EPass, fail: !_vm.isE2EPass
    },
    attrs: {
      "title": _vm.e2eTitle
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("E2E Test")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.e2e) + " " + _vm._s(_vm.e2eNote))])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: [_vm.coverageLevel]
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("Coverage")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.coverage))])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e2a2c2b", esExports)
  }
}

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('doc-header', {
    attrs: {
      "category": _vm.category
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [_c('doc-submenu', {
    attrs: {
      "category": _vm.category,
      "page": _vm.page
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "docmd",
      rawName: "v-docmd"
    }],
    staticClass: "content markdown-body",
    class: {
      padding: _vm.hasPadding
    }
  }, [_vm._t("default")], 2)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-56a72814", esExports)
  }
}

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DocGuide = __webpack_require__(30);

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

module.exports = exports['default'];

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        category: String
    },
    computed: {
        isIndex: function isIndex() {
            return this.category === 'home';
        },
        isGuide: function isGuide() {
            return this.category === 'guide';
        },
        isComponent: function isComponent() {
            return this.category === 'component';
        },
        isCustom: function isCustom() {
            return this.category === 'custom';
        }
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(100);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DocBody = __webpack_require__(12);

var _DocBody2 = _interopRequireDefault(_DocBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        page: String,
        hasPadding: Boolean
    },
    data: function data() {

        return {
            category: 'guide'
        };
    },
    components: {
        'doc-body': _DocBody2.default
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

module.exports = exports['default'];

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocGuide_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocGuide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocGuide_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05e3f350_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocGuide_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(29)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocGuide_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05e3f350_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocGuide_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocGuide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocGuide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05e3f350", Component.options)
  } else {
    hotAPI.reload("data-v-05e3f350", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('doc-body', _vm._b({
    attrs: {
      "category": _vm.category
    }
  }, 'doc-body', _vm.$props, false), [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05e3f350", esExports)
  }
}

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19496861_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocHeader_vue__ = __webpack_require__(5);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(3)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19496861_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocHeader_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19496861", Component.options)
  } else {
    hotAPI.reload("data-v-19496861", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    class: {
      index: _vm.isIndex
    }
  }, [_c('div', {
    staticClass: "nav"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("Morning UI")]), _vm._v(" "), _c('ul', {
    staticClass: "menu"
  }, [_c('li', [_c('a', {
    class: {
      current: _vm.isIndex
    },
    attrs: {
      "href": "/index.html"
    }
  }, [_vm._v("HOME")])]), _vm._v(" "), _c('li', [_c('a', {
    class: {
      current: _vm.isGuide
    },
    attrs: {
      "href": "/guide/introduction.html"
    }
  }, [_vm._v("GUIDE")])]), _vm._v(" "), _c('li', [_c('a', {
    class: {
      current: _vm.isComponent
    },
    attrs: {
      "href": "/component/h.html"
    }
  }, [_vm._v("COMPONENT")])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": "http://h0.hucdn.com/open/201734/8f299e45f6693260_200x200.png",
      "alt": "morning-ui"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19496861", esExports)
  }
}

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('doc-guide', {
    attrs: {
      "page": _vm.page
    }
  }, [_vm._v("\n    usage\n")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-657369b6", esExports)
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _marked = __webpack_require__(25);

var _marked2 = _interopRequireDefault(_marked);

var _extend = __webpack_require__(23);

var _extend2 = _interopRequireDefault(_extend);

var _mustache = __webpack_require__(26);

var _mustache2 = _interopRequireDefault(_mustache);

var _underscore = __webpack_require__(27);

var _underscore2 = _interopRequireDefault(_underscore);

var _highlight = __webpack_require__(24);

var _highlight2 = _interopRequireDefault(_highlight);

var _DocHeader = __webpack_require__(4);

var _DocHeader2 = _interopRequireDefault(_DocHeader);

var _DocSubmenu = __webpack_require__(14);

var _DocSubmenu2 = _interopRequireDefault(_DocSubmenu);

var _DocComponentStatus = __webpack_require__(13);

var _DocComponentStatus2 = _interopRequireDefault(_DocComponentStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var randomRangeMin = 1e3;
var randomRangeMax = 9e3;

window.Vue.component('doc-component-status', _DocComponentStatus2.default);

var evals = [];

var imports = {
    formStatement: '\n#### \u652F\u6301\n\n|\u7C7B\u578B|\u652F\u6301|\u9ED8\u8BA4|\n|-|-|-|\n|\u5C3A\u5BF8|\u4E0D\u652F\u6301|-|\n|\u8272\u5F69|\u4E0D\u652F\u6301|-|\n|\u72B6\u6001|`normal`<br/>`disabled`|`normal`|\n\n\n#### \u72B6\u6001\n\n````html\n@state:normal,disabled\n<div style="width:300px;">\n    <ui-{$uikey} {$stateKey} :default-value="{$&statementDefaultValue}" form-name="{$&stateName}" {$&statementMoreAttr}>{$&statementSlot}</ui-{$uikey}>\n</div>\n<br>\n````\n',
    formStatementWithStyle: '\n#### \u652F\u6301\n\n|\u7C7B\u578B|\u652F\u6301|\u9ED8\u8BA4|\n|-|-|-|\n|\u5C3A\u5BF8|\u4E0D\u652F\u6301|-|\n|\u8272\u5F69|\u5168\u90E8|`theme`|\n|\u72B6\u6001|`normal`<br/>`disabled`|`normal`|\n\n\n#### \u8272\u5F69\n\n````html\n@color:theme\n@color:feature\n@color:black\n@color:blue\n@color:silver\n@color:gray\n<div style="width:300px;">\n    <ui-{$uikey} {$colorKey} :default-value="{$&statementDefaultValue}" form-name="{$&colorName}" {$&statementMoreAttr}>{$&statementSlot}</ui-{$uikey}>\n</div>\n<br>\n````\n\n#### \u72B6\u6001\n\n````html\n@state:normal,disabled\n<div style="width:300px;">\n    <ui-{$uikey} {$stateKey} :default-value="{$&statementDefaultValue}" form-name="{$&stateName}" {$&statementMoreAttr}>{$&statementSlot}</ui-{$uikey}>\n</div>\n<br>\n````\n',
    formConfigDemo: '\n#### form-name\n\n````html\n@formConfig\n<div style="width:300px;">\n    <ui-{$uikey} form-name="{$formName}" {$&configMoreAttr}>{$&configSlot}</ui-{$uikey}>\n</div>\n````\n\n#### form-key\n\n````html\n@formConfig\n<div style="width:300px;">\n    <ui-{$uikey} form-name="{$formName}" form-key="{$formKey}" {$&configMoreAttr}>{$&configSlot}</ui-{$uikey}>\n</div>\n````\n\n#### group\n\n\u8BBE\u7F6E\u5355\u4E2A\u7EC4\uFF1A\n\n````html\n@formConfig\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u5355\u4E2A\u7EC4 -->\n    <ui-{$uikey} form-name="{$formName}" form-key="{$formKey}" group="{$formGroupOne}" {$&configMoreAttr}>{$&configSlot}</ui-{$uikey}>\n</div>\n````\n\n\u8BBE\u7F6E\u591A\u4E2A\u7EC4\uFF1A\n\n````mixin\n@use:html.demoGroup,js.demoGroup|@formConfig\n````\n\n````html\n@var:demoGroup\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{$uikey} form-name="{$formName}" form-key="{$formKey}" :group="group" {$&configMoreAttr}>{$&configSlot}</ui-{$uikey}>\n</div>\n````\n\n````js\n@var:demoGroup\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : {\n        group : [\'group1\', \'group2\', \'group3\']\n    }\n});\n````\n\n#### default-value\n\n````html\n@formConfig\n<div style="width:300px;">\n    <ui-{$uikey} form-name="{$formName}" :default-value="{$&configDefaultValue}" {$&configMoreAttr}>{$&configSlot}</ui-{$uikey}>\n</div>\n````\n\n#### hide-name\n\n\u9690\u85CF\u540E\u8868\u5355\u9ED8\u8BA4\u4F4D\u7F6E\u7684\u540D\u5B57\u4E0D\u4F1A\u663E\u793A\uFF0C\u53EF\u4EE5\u5728\u5176\u4ED6\u5730\u65B9\u8BBE\u7F6E\u8868\u5355\u540D\u3002\n\n````html\n@formConfig\n<div style="width:300px;">\n    <p>{$formName}</p>\n    <ui-{$uikey} form-name="{$formName}" hide-name {$&configMoreAttr}>{$&configSlot}</ui-{$uikey}>\n</div>\n````\n    ',
    formConfigTable: '\n|form-name|\u8868\u5355\u7684\u540D\u79F0\uFF08\u7528\u4E8E\u663E\u793A\uFF09|\u4EFB\u610F\u5B57\u7B26\u4E32|String|`undefined`|\n|form-key|\u8868\u5355\u7684Key\uFF08\u7528\u4E8E\u903B\u8F91\u4E2D\u4F5C\u4E3A\u8BC6\u522B\u6807\u793A\uFF09|\u4EFB\u610F\u5B57\u7B26\u4E32(\u552F\u4E00)|String|`undefined`|\n|group|\u8868\u5355\u7EC4\uFF0C\u7528\u4E8E\u5C06\u591A\u4E2A\u8868\u5355\u7684\u6570\u503C\u6DFB\u52A0\u5230\u540C\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u3002\u4E00\u4E2A\u8868\u5355\u53EF\u4EE5\u540C\u65F6\u5C5E\u4E8E\u591A\u4E2A\u7EC4|\u82E5\u662F\u5B57\u7B26\u4E32\uFF0C\u5219\u5C06\u8868\u5355\u6DFB\u52A0\u5230\u5355\u4E2A\u7EC4<br>\u82E5\u662F\u6570\u7EC4\uFF0C\u5219\u5C06\u8868\u5355\u6DFB\u52A0\u5230\u591A\u4E2A\u7EC4|String<br/>Array|`[]`|\n|default-value|\u8868\u5355\u7684\u9ED8\u8BA4\u503C|\u4EFB\u610F(\u63A5\u53D7\u8868\u5355\u539F\u59CB\u6570\u503C\uFF0C\u4E5F\u63A5\u53D7JSON\u5E8F\u5217\u5316\u540E\u7684\u8868\u5355\u6570\u503C\uFF0C\u82E5\u6570\u503C\u662FJSON\u5E8F\u5217\u5316\u7684\u4F1A\u81EA\u52A8\u8F6C\u6362\u6210\u539F\u59CB\u6570\u503C)|Any|`undefined`|\n|hide-name|\u94FE\u63A5\u5730\u5740\uFF0C\u82E5\u4E3A\u7A7A\u5219\u4E0D\u8DF3\u8F6C|url\u5730\u5740|Boolean|`false`|',
    formMethod: '\n#### set([value])\n\n\u8BBE\u7F6E\u8868\u5355\u7684\u503C\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|value|YES|\u9700\u8981\u8BBE\u7F6E\u8868\u5355\u7684\u503C\uFF0C\u5982\u679C\u9700\u8981\u6E05\u7A7A\u8868\u5355\u7684\u503C\uFF0C\u53EF\u4EE5\u4E0D\u4F20\u6B64\u53C2\u6570\u3002|\u63A5\u53D7\u4EFB\u4F55\u6570\u503C\u3002<br/>`undefined`:\u6E05\u7A7A\u8868\u5355\u7684\u503C<br>\u539F\u59CB\u503C:\u8868\u5355\u7684\u539F\u59CB\u503C\uFF0C\u6839\u636E\u8868\u5355\u4E0D\u540C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u3001\u5BF9\u8C61\u3001\u6570\u7EC4\u7B49<br>JSON\u6570\u503C:\u8868\u5355\u539F\u59CB\u503CJSON\u5E8F\u5217\u5316\u540E\u7684\u503C\uFF0C\u4F20\u5165\u540E\u8868\u5355\u4F1A\u81EA\u52A8\u89E3\u6790\u5E76\u8FD8\u539F\u539F\u59CB\u503C\u3002|Any|`undefined`|\n\n````html\n@origin\n<div style="width:300px;">\n    <ui-{$uikey} ref="demoMethodSet" form-name="\u8868\u5355\u540D" {$&methodMoreAttr}></ui-{$uikey}>\n    <br>\n    <a href="javascript:;" onclick="window.morning.findVM(\'demoMethodSet\').set({$&methodValue})">\u8BBE\u7F6E\u503C</a>\n    <a href="javascript:;" onclick="window.morning.findVM(\'demoMethodSet\').set()">\u79FB\u9664\u503C</a>\n</div>\n````\n\n#### get([json])\n\n\u83B7\u53D6\u8868\u5355\u7684\u503C\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|json|YES|\u8868\u5355\u7684\u503C\u662F\u5426\u9700\u8981JSON\u5E8F\u5217\u5316\u540E\u8FD4\u56DE\uFF0C\u82E5\u4F60\u9700\u8981\u548C\u5176\u4ED6\u7A0B\u5E8F\u8FDB\u884C\u6570\u636E\u4EA4\u4E92\uFF0C\u4F7F\u7528JSON\u662F\u4E00\u79CD\u8F83\u597D\u7684\u65B9\u6CD5\u3002|`true`<br>`false`|Boolean|`true`|\n\n````html\n@origin\n<div style="width:300px;">\n    <ui-{$uikey} ref="demoMethodGet" form-name="\u8868\u5355\u540D" :default-value="{$&methodDefaultValue}" {$&methodMoreAttr}></ui-{$uikey}>\n    <br>\n    <a href="javascript:;" onclick="alert(window.morning.findVM(\'demoMethodGet\').get(false))">\u83B7\u53D6\u8868\u5355\u539F\u59CB\u503C</a>\n    <a href="javascript:;" onclick="alert(window.morning.findVM(\'demoMethodGet\').get())">\u83B7\u53D6\u8868\u5355JSON\u503C</a>\n</div>\n````\n\n#### setName([name])\n\n\u8BBE\u7F6E\u8868\u5355\u7684\u540D\u79F0\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|name|YES|\u9700\u8981\u8BBE\u7F6E\u8868\u5355\u7684\u540D\u79F0\uFF0C\u5982\u679C\u9700\u8981\u6E05\u7A7A\u8868\u5355\u7684\u540D\u79F0\uFF0C\u53EF\u4EE5\u4E0D\u4F20\u6B64\u53C2\u6570\u3002|\u4EFB\u610F\u5B57\u7B26\u4E32|String|`undefined`|\n\n````html\n@origin\n<div style="width:300px;">\n    <ui-{$uikey} ref="demoMethodSetName" form-name="\u59D3\u540D" {$&methodMoreAttr}></ui-{$uikey}>\n    <br>\n    <a href="javascript:;" onclick="alert(window.morning.findVM(\'demoMethodSetName\').getName())">\u83B7\u53D6\u8868\u5355\u540D\u79F0</a>\n    <a href="javascript:;" onclick="window.morning.findVM(\'demoMethodSetName\').setName(\'\u5E74\u9F84\')">\u8BBE\u7F6E\u8868\u5355\u540D\u79F0</a>\n    <a href="javascript:;" onclick="window.morning.findVM(\'demoMethodSetName\').setName()">\u79FB\u9664\u8868\u5355\u540D\u79F0</a>\n</div>\n````\n\n#### getName()\n\n\u83B7\u53D6\u8868\u5355\u7684\u540D\u79F0\u3002\n\n````html\n@origin\n<div style="width:300px;">\n    <ui-{$uikey} ref="demoMethodGetName" form-name="\u59D3\u540D" {$&methodMoreAttr}></ui-{$uikey}>\n    <br>\n    <a href="javascript:;" onclick="alert(window.morning.findVM(\'demoMethodGetName\').getName())">\u83B7\u53D6\u8868\u5355\u540D\u79F0</a>\n</div>\n````\n\n#### setKey([key])\n\n\u8BBE\u7F6E\u8868\u5355\u7684KEY\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|key|YES|\u9700\u8981\u8BBE\u7F6E\u8868\u5355\u7684KEY\uFF0C\u5982\u679C\u9700\u8981\u6E05\u7A7A\u8868\u5355\u7684KEY\uFF0C\u53EF\u4EE5\u4E0D\u4F20\u6B64\u53C2\u6570\u3002|\u4EFB\u610F\u5B57\u7B26\u4E32|String|`undefined`|\n\n````html\n@origin\n<div style="width:300px;">\n    <ui-{$uikey} ref="demoMethodSetKey" form-name="\u8868\u5355\u540D" form-key="name" {$&methodMoreAttr}></ui-{$uikey}>\n    <br>\n    <a href="javascript:;" onclick="alert(window.morning.findVM(\'demoMethodSetKey\').getKey())">\u83B7\u53D6\u8868\u5355KEY</a>\n    <a href="javascript:;" onclick="window.morning.findVM(\'demoMethodSetKey\').setKey(\'age\')">\u8BBE\u7F6E\u8868\u5355KEY</a>\n    <a href="javascript:;" onclick="window.morning.findVM(\'demoMethodSetKey\').setKey()">\u79FB\u9664\u8868\u5355KEY</a>\n</div>\n````\n\n#### getKey()\n\n\u83B7\u53D6\u8868\u5355\u7684KEY\u3002\n\n````html\n@origin\n<div style="width:300px;">\n    <ui-{$uikey} ref="demoMethodGetKey" form-name="\u8868\u5355\u540D" form-key="name" {$&methodMoreAttr}></ui-{$uikey}>\n    <br>\n    <a href="javascript:;" onclick="alert(window.morning.findVM(\'demoMethodGetKey\').getKey())">\u83B7\u53D6\u8868\u5355KEY</a>\n</div>\n````\n\n#### setGroup([groups])\n\n\u8BBE\u7F6E\u8868\u5355\u6240\u5C5E\u7684\u8868\u5355\u7EC4\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|groups|YES|\u9700\u8981\u8BBE\u7F6E\u7684\u8868\u5355\u7EC4\u3002\u5982\u679C\u9700\u8981\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4\uFF0C\u53EF\u4EE5\u4E0D\u4F20\u6B64\u53C2\u6570\u3002|`undefined`:\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4<br>String:\u8BBE\u7F6E\u4E00\u4E2A\u8868\u5355\u7EC4<br>Array:\u8BBE\u7F6E\u591A\u4E2A\u8868\u5355\u7EC4\u3002|String<br>Array<br>Undefined|`undefined`|\n\n````html\n@origin\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{$uikey} ref="demoMethodSetGroup" form-name="\u8868\u5355\u540D" form-key="name" {$&methodMoreAttr}></ui-{$uikey}>\n    <br>\n    <a href="javascript:;" onclick="alert(JSON.stringify(window.morning.findVM(\'demoMethodSetGroup\').getGroup()))">\u83B7\u53D6\u8868\u5355\u7EC4</a>\n    <a href="javascript:;" onclick="window.morning.findVM(\'demoMethodSetGroup\').setGroup(\'group1\')">\u8BBE\u7F6E\u5355\u4E2A\u8868\u5355\u7EC4</a>\n    <a href="javascript:;" onclick="window.morning.findVM(\'demoMethodSetGroup\').setGroup([\'group1\', \'group2\'])">\u8BBE\u7F6E\u591A\u4E2A\u8868\u5355\u7EC4</a>\n    <a href="javascript:;" onclick="window.morning.findVM(\'demoMethodSetGroup\').setGroup()">\u79FB\u9664\u6240\u6709\u8868\u5355\u7EC4</a>\n</div>\n````\n\n#### getGroup()\n\n\u83B7\u53D6\u8868\u5355\u6240\u5C5E\u7684\u8868\u5355\u7EC4\u3002\n\n````html\n@origin\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{$uikey} ref="demoMethodGetGroup" form-name="\u8868\u5355\u540D" form-key="name" group="group1" {$&methodMoreAttr}></ui-{$uikey}>\n    <br>\n    <a href="javascript:;" onclick="alert(JSON.stringify(window.morning.findVM(\'demoMethodGetGroup\').getGroup()))">\u83B7\u53D6\u8868\u5355\u7EC4</a>\n</div>\n````\n\n#### addGroup(group)\n\n\u6DFB\u52A0\u4E00\u4E2A\u6307\u5B9A\u7684\u8868\u5355\u7EC4\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|group|NO|\u6DFB\u52A0\u8868\u5355\u7EC4\u7684KEY|\u8868\u5355\u7EC4\u7684KEY|String|`undefined`|\n\n````html\n@origin\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{$uikey} ref="demoMethodAddGroup" form-name="\u8868\u5355\u540D" form-key="name" {$&methodMoreAttr}></ui-{$uikey}>\n    <br>\n    <a href="javascript:;" onclick="alert(JSON.stringify(window.morning.findVM(\'demoMethodAddGroup\').getGroup()))">\u83B7\u53D6\u8868\u5355\u7EC4</a>\n    <a href="javascript:;" onclick="window.morning.findVM(\'demoMethodAddGroup\').addGroup(\'group1\')">\u6DFB\u52A0\u8868\u5355\u7EC4</a>\n</div>\n````\n\n#### removeGroup(group)\n\n\u79FB\u9664\u4E00\u4E2A\u6307\u5B9A\u7684\u8868\u5355\u7EC4\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|group|NO|\u79FB\u9664\u8868\u5355\u7EC4\u7684KEY|\u8868\u5355\u7EC4\u7684KEY|String|`undefined`|\n\n````html\n@origin\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{$uikey} ref="demoMethodRemoveGroup" form-name="\u8868\u5355\u540D" form-key="name" group="group1" {$&methodMoreAttr}></ui-{$uikey}>\n    <br>\n    <a href="javascript:;" onclick="alert(JSON.stringify(window.morning.findVM(\'demoMethodRemoveGroup\').getGroup()))">\u83B7\u53D6\u8868\u5355\u7EC4</a>\n    <a href="javascript:;" onclick="window.morning.findVM(\'demoMethodRemoveGroup\').removeGroup(\'group1\')">\u79FB\u9664\u8868\u5355\u7EC4</a>\n</div>\n````\n    ',
    formEvent: '\n#### valueChange\n\n\u5F53\u8868\u5355\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u3002\n\n````mixin\n@use:html.demoValueChange,js.demoValueChange\n````\n\n````html\n@var:demoValueChange\n<div style="width:300px;">\n    <ui-{$uikey} ref="demoValueChange" form-name="\u8868\u5355\u540D" @valueChange="echo" {$&eventMoreAttr}></ui-{$uikey}>\n    <br>\n    <a href="javascript:;" onclick="window.morning.findVM(\'demoValueChange\').set({$&eventValue})">\u89E6\u53D1valueChange\u4E8B\u4EF6</a>\n</div>\n````\n\n````js\n@var:demoValueChange\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo3.console1\', \'valueChange event!\');\n        }\n    }\n});\n````\n\n#### \u751F\u547D\u5468\u671F\u4E8B\u4EF6\n\n````mixin\n@use:html.demoEventLifecycle,js.demoEventLifecycle\n````\n\n````html\n@var:demoEventLifecycle\n<div style="width:300px;">\n    <ui-{$uikey}\n        ref="demoEventLifecycle"\n        form-name="\u8868\u5355\u540D"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @beforeUpdate="echo(\'beforeUpdate\')"\n        @updated="echo(\'updated\')"\n        @beforeDestroy="echo(\'beforeDestroy\')"\n        @destroyed="echo(\'destroyed\')"\n        {$&eventMoreAttr}\n    >{%text%}</ui-{$uikey}>\n\n    <br><br>\n\n    <a href="javascript:;" onclick="javascript:window.demoEventLifecycle.text=\'\u751F\u547D\u5468\u671F\u4E8B\u4EF6\';">\u89E6\u53D1update</a>\n    <a href="javascript:;" onclick="javascript:morning.findVM(\'demoEventLifecycle\').$destroy();">\u89E6\u53D1destroy</a>\n</div>\n````\n\n````js\n@var:demoEventLifecycle\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'\u6309\u94AE\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n});\n````'
};

var data = {
    size: [{
        sizeKey: 'xxl',
        sizeName: 'XXL尺寸'
    }, {
        sizeKey: 'xl',
        sizeName: 'XL尺寸'
    }, {
        sizeKey: 'l',
        sizeName: 'L尺寸'
    }, {
        sizeKey: 'm',
        sizeName: 'M尺寸'
    }, {
        sizeKey: 's',
        sizeName: 'S尺寸'
    }, {
        sizeKey: 'xs',
        sizeName: 'XS尺寸'
    }, {
        sizeKey: 'xxs',
        sizeName: 'XXS尺寸'
    }],
    theme: [{
        colorKey: 'theme',
        colorName: '主题色'
    }, {
        colorKey: 'light-theme',
        colorName: '浅主题色'
    }, {
        colorKey: 'dark-theme',
        colorName: '深主题色'
    }],
    feature: [{
        colorKey: 'success',
        colorName: '成功/正确'
    }, {
        colorKey: 'warning',
        colorName: '警告/注意'
    }, {
        colorKey: 'danger',
        colorName: '错误/危险'
    }, {
        colorKey: 'primary',
        colorName: '主要/关键'
    }, {
        colorKey: 'minor',
        colorName: '次要/不醒目'
    }, {
        colorKey: 'info',
        colorName: '信息/额外'
    }],
    black: [{
        colorKey: 'black',
        colorName: '黑色'
    }, {
        colorKey: 'light-black',
        colorName: '浅黑色'
    }, {
        colorKey: 'extra-light-black',
        colorName: '超浅黑色'
    }],
    blue: [{
        colorKey: 'blue',
        colorName: '青色'
    }, {
        colorKey: 'light-blue',
        colorName: '浅青色'
    }, {
        colorKey: 'extra-light-blue',
        colorName: '超浅青色'
    }],
    silver: [{
        colorKey: 'silver',
        colorName: '银色'
    }, {
        colorKey: 'light-silver',
        colorName: '浅银色'
    }, {
        colorKey: 'extra-light-silver',
        colorName: '超浅银色'
    }],
    gray: [{
        colorKey: 'gray',
        colorName: '灰色'
    }, {
        colorKey: 'light-gray',
        colorName: '浅灰色'
    }, {
        colorKey: 'white',
        colorName: '白色'
    }],
    state: [{
        stateKey: 'normal',
        stateName: '正常'
    }, {
        stateKey: 'hover',
        stateName: 'Hover'
    }, {
        stateKey: 'active',
        stateName: '激活'
    }, {
        stateKey: 'disabled',
        stateName: '禁用'
    }, {
        stateKey: 'apparent',
        stateName: '醒目'
    }, {
        stateKey: 'loading',
        stateName: '载入中'
    }, {
        stateKey: 'processing',
        stateName: '处理中'
    }],
    formConfig: {
        formName: '表单名',
        formKey: 'formKey',
        formGroupOne: 'groupName'
    },
    formValueType: {
        default: [{
            valueType: 'String',
            valueContent: '\'Jim\''
        }, {
            valueType: 'Number',
            valueContent: '5'
        }, {
            valueType: 'Boolean',
            valueContent: 'true'
        }, {
            valueType: 'Null',
            valueContent: 'null'
        }, {
            valueType: 'Undefined',
            valueContent: 'undefined'
        }, {
            valueType: 'Object',
            valueContent: '{}'
        }, {
            valueType: 'Array',
            valueContent: '[]'
        }],
        checkbox: [{
            valueType: 'String',
            valueContent: '\'Tim\''
        }, {
            valueType: 'Number',
            valueContent: '5'
        }, {
            valueType: 'Boolean',
            valueContent: 'true'
        }, {
            valueType: 'Null',
            valueContent: 'null'
        }, {
            valueType: 'Undefined',
            valueContent: 'undefined'
        }, {
            valueType: 'Object',
            valueContent: '{\'Tim\':\'Tim\'}'
        }, {
            valueType: 'Array',
            valueContent: '[\'Tim\']'
        }]
    }
};

var parser = function parser(text, el) {

    var patt = /````(html|js|css|mixin|)((\n[\t ]*[\@a-zA-Z0-9\:\.\,\|]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
    var varpatt = /````(html|js|css)\n(\@var\:([a-zA-Z0-9]+))\n((.|\n)+?)\n([ \t]*)````/g;
    var importpatt = /````(import)((\n[\t ]*[a-zA-Z0-9@'"[\]?<>/\-_{}=:.,|!()\u4e00-\u9fa5 ]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
    var result = void 0;
    var vars = {
        js: {},
        html: {}
    };
    var blocks = [];
    var mixinContext = {};

    while ((result = importpatt.exec(text)) !== null) {

        console.log(56, result);

        var rdata = result[2].replace(/^\n/, '').split('\n');
        var id = rdata[0].split(':')[1];

        rdata.shift();

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = rdata[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;


                var name = item.split(':')[0].replace(/^@/, '');
                var valuelist = item.split(':');

                valuelist.shift();

                var value = valuelist.join(':');

                mixinContext[name] = value;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var content = imports[id];

        text = text.slice(0, result.index - 1) + content + text.slice(result.index + result[0].length, text.length);
        importpatt.lastIndex = 0;
    }

    while ((result = varpatt.exec(text)) !== null) {

        vars[result[1]][result[3]] = result[4];
        text = text.slice(0, result.index - 1) + text.slice(result.index + result[0].length, text.length);

        varpatt.lastIndex = 0;
    }

    while ((result = patt.exec(text)) !== null) {

        var _content = result[4];
        var _helpers = result[2].split('\n');

        _helpers.shift();

        var block = {
            content: _content,
            type: result[1],
            result: result,
            context: mixinContext,
            helpers: []
        };

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = _helpers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _name = _step2.value;


                var list = _name.split('|');
                var group = [];

                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = list[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var help = _step3.value;


                        var fn = help.split(':')[0].replace(/^\@/, '');
                        var param = help.split(':')[1];

                        group.push({
                            fn: fn,
                            param: param
                        });
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }

                block.helpers.push(group);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        blocks.push(block);
    }

    return {
        vars: vars,
        blocks: blocks,
        text: text
    };
};

var helpers = {
    import: function _import(opt) {

        var name = opt.param.split(',');

        opt.content = window.$('script#' + name[0]);
        opt.context = {
            uiname: name[1]
        };

        return opt;
    },
    origin: function origin(opt) {

        return opt;
    },
    render: function render(opt) {

        opt.isText = true;

        return opt;
    },
    size: function size(opt) {

        if (typeof opt.content === 'string') {

            opt.content = '{$#size}' + opt.content + '\n{$/size}';
        } else if (_typeof(opt.content) === 'object') {

            for (var key in opt.content) {

                opt.content[key] = '{$#size}' + opt.content[key] + '\n{$/size}';
            }
        }

        return opt;
    },
    color: function color(opt) {

        var color = opt.param;

        if (typeof opt.content === 'string') {

            opt.content = '{$#' + color + '}' + opt.content + '\n{$/' + color + '}';
        } else if (_typeof(opt.contnet) === 'object') {

            for (var key in opt.content) {

                opt.content[key] = '{$#' + color + '}' + opt.content[key] + '\n{$/' + color + '}';
            }
        }

        if (color === 'silver') {

            opt.style.push('background: #626b75;border-color: #454d57');
        } else if (color === 'gray') {

            opt.style.push('background:#676767;border-color: #494949');
        }

        return opt;
    },
    state: function state(opt) {

        if (opt.param === undefined) {

            opt.param = 'all';
        }

        var states = opt.param.split(',');

        if (states.length > 0 && states.indexOf('all') === -1) {

            var sna = [];

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = data.state[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var state = _step4.value;


                    if (states.indexOf(state.stateKey) !== -1) {

                        sna.push(state);
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            opt.context = (0, _extend2.default)(true, opt.context, {
                state: sna
            });
        }

        if (typeof opt.content === 'string') {

            opt.content = '{$#state}' + opt.content + '\n{$/state}';
        } else if (_typeof(opt.contnet) === 'object') {

            for (var key in opt.content) {

                opt.content[key] = '{$#state}' + opt.content[key] + '\n{$/state}';
            }
        }

        return opt;
    },
    br: function br(opt) {

        var num = +opt.param || 1;
        var brs = '';

        while (num--) {

            brs += '<br/>';
        }

        if (typeof opt.content === 'string') {

            opt.content = opt.content + '\n' + brs + '\n';
        } else if (_typeof(opt.content) === 'object') {

            for (var key in opt.content) {

                opt.content[key] = opt.content[key] + '\n' + brs + '\n';
            }
        }

        return opt;
    },
    use: function use(opt) {

        var links = opt.param.split(',');

        opt.content = {};

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = links[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var link = _step5.value;


                var type = link.split('.')[0];
                var key = link.split('.')[1];

                opt.content[type] = '&&&&&{$id}|' + opt.vars[type][key];
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                }
            } finally {
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }

        opt.render = function (sopt) {

            var list = {};
            var code = '';
            var demo = '';
            var newData = (0, _extend2.default)(true, {}, sopt.context);
            var lastType = void 0;

            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = Object.keys(newData)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var key = _step6.value;


                    var value = newData[key];
                    var _id = 'demo-' + _underscore2.default.random(randomRangeMin, randomRangeMax);

                    if (value instanceof Array) {
                        var _iteratorNormalCompletion8 = true;
                        var _didIteratorError8 = false;
                        var _iteratorError8 = undefined;

                        try {

                            for (var _iterator8 = value[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                var svalue = _step8.value;


                                svalue.id = _id;
                                svalue.el = '#' + _id + '-el';
                                svalue.template = '#' + _id + '-tmpl';
                            }
                        } catch (err) {
                            _didIteratorError8 = true;
                            _iteratorError8 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                    _iterator8.return();
                                }
                            } finally {
                                if (_didIteratorError8) {
                                    throw _iteratorError8;
                                }
                            }
                        }
                    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {

                        value.id = _id;
                        value.el = '#' + _id + '-el';
                        value.template = '#' + _id + '-tmpl';
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            var id = 'demo-' + _underscore2.default.random(randomRangeMin, randomRangeMax);

            newData.id = id;
            newData.el = '#' + id + '-el';
            newData.template = '#' + id + '-tmpl';

            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = Object.keys(sopt.content)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var type = _step7.value;


                    _mustache2.default.parse(sopt.content[type], ['{$', '}']);

                    list[type] = _mustache2.default.render(sopt.content[type], newData).split('&&&&&');
                    list[type].shift();
                    lastType = type;
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }

            for (var i in list[lastType]) {

                var html = list.html[i];
                var js = list.js[i];
                var demoid = html.match(/^([0-9a-z-]+?)\|/)[1];

                html = html.replace(/^[0-9a-z-]+?\|/, '');
                js = js.replace(/^[0-9a-z-]+?\|/, '');

                code += '<div id="' + demoid + '-el"><!-- ' + demoid + ' \u5BB9\u5668 --></div>\n\n';
                demo += '<div id="' + demoid + '-el"></div>\n';

                // html
                var htmlScript = document.createElement('script');

                html = html.replace(/[\n]*?$/, '');
                htmlScript.innerHTML = '\n' + html + '\n';
                htmlScript.type = 'x-template';
                htmlScript.id = demoid + '-tmpl';

                code += htmlScript.outerHTML + '\n\n';

                htmlScript.innerHTML = htmlScript.innerHTML.replace(/\{%([a-zA-Z0-9_]+)%\}/g, '{{$1}}');
                evals.push(htmlScript);

                // js

                var jsScript = document.createElement('script');

                js = js.replace(/[\n]*?$/, '');
                jsScript.innerHTML = '\n' + js + '\n';

                evals.push(jsScript);

                code += jsScript.outerHTML;

                if (i < list[lastType].length - 1) {

                    code += '\n\n------------------------------------------------\n\n';
                }
            }

            return {
                demo: demo,
                code: code
            };
        };

        return opt;
    },
    formConfig: function formConfig(opt) {

        if (typeof opt.content === 'string') {

            opt.content = '{$#formConfig}' + opt.content + '\n{$/formConfig}';
        } else if (_typeof(opt.content) === 'object') {

            for (var key in opt.content) {

                opt.content[key] = '{$#formConfig}' + opt.content[key] + '\n{$/formConfig}';
            }
        }

        return opt;
    },
    formValueType: function formValueType(opt) {

        var key = opt.param || 'default';

        if (typeof opt.content === 'string') {

            opt.content = '{$#formValueType.' + key + '}' + opt.content + '\n{$/formValueType.' + key + '}';
        } else if (_typeof(opt.content) === 'object') {

            for (var _key in opt.content) {

                opt.content[_key] = '{$#formValueType.' + _key + '}' + opt.content[_key] + '\n{$/formValueType.' + _key + '}';
            }
        }

        return opt;
    }
};

var make = {
    block: function block(_block) {

        return '<div class="demo">\n' + _block.content + '</div>\n\n```' + _block.type + '\n' + _block.content + '\n```\n';
    },
    opt: function opt(opts, block) {

        var text = '';

        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
            for (var _iterator9 = opts[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var opt = _step9.value;


                var code = void 0,
                    demo = void 0;

                opt.context = (0, _extend2.default)({}, data, opt.context);

                if (typeof opt.render === 'function') {

                    var result = opt.render(opt);

                    code = result.code;
                    demo = result.demo;
                } else {

                    var template = opt.content;

                    _mustache2.default.parse(template, ['{$', '}']);

                    code = _mustache2.default.render(template, opt.context);
                }

                if (opt.style.length === 0) {

                    opt.style = '';
                } else {

                    opt.style = opt.style.join(';');
                }

                if (block.type === 'mixin') {

                    block.type = 'html';
                }

                if (opt.isText) {

                    text += code;
                } else {

                    text += '<div class="demo" style="' + opt.style + '">\n' + (demo || code) + '</div>\n\n```' + block.type + '\n' + code + '\n```\n';
                }
            }
        } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion9 && _iterator9.return) {
                    _iterator9.return();
                }
            } finally {
                if (_didIteratorError9) {
                    throw _iteratorError9;
                }
            }
        }

        return text;
    }
};

var runner = function runner(tree) {
    var _iteratorNormalCompletion10 = true;
    var _didIteratorError10 = false;
    var _iteratorError10 = undefined;

    try {

        for (var _iterator10 = tree.blocks[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            var block = _step10.value;


            if (block.helpers.length > 0) {

                var opts = [];

                var _iteratorNormalCompletion11 = true;
                var _didIteratorError11 = false;
                var _iteratorError11 = undefined;

                try {
                    for (var _iterator11 = block.helpers[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                        var group = _step11.value;


                        var opt = {
                            content: block.content,
                            vars: tree.vars,
                            helperlist: group,
                            context: block.context,
                            style: []
                        };

                        var _iteratorNormalCompletion12 = true;
                        var _didIteratorError12 = false;
                        var _iteratorError12 = undefined;

                        try {
                            for (var _iterator12 = group[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                var helper = _step12.value;


                                opt.param = helper.param;
                                opt = helpers[helper.fn](opt);
                            }
                        } catch (err) {
                            _didIteratorError12 = true;
                            _iteratorError12 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion12 && _iterator12.return) {
                                    _iterator12.return();
                                }
                            } finally {
                                if (_didIteratorError12) {
                                    throw _iteratorError12;
                                }
                            }
                        }

                        opts.push(opt);
                    }
                } catch (err) {
                    _didIteratorError11 = true;
                    _iteratorError11 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion11 && _iterator11.return) {
                            _iterator11.return();
                        }
                    } finally {
                        if (_didIteratorError11) {
                            throw _iteratorError11;
                        }
                    }
                }

                block._html = make.opt(opts, block);
            } else {

                block._html = make.block(block);
            }
        }
    } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion10 && _iterator10.return) {
                _iterator10.return();
            }
        } finally {
            if (_didIteratorError10) {
                throw _iteratorError10;
            }
        }
    }

    var text = tree.text;
    var patt = /````(html|js|css|mixin|)((\n[\t ]*[\@a-zA-Z0-9\:\.\,\|]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
    var index = 0;
    var result = void 0;

    while ((result = patt.exec(text)) !== null) {

        text = text.slice(0, result.index - 1) + tree.blocks[index++]._html + text.slice(result.index + result[0].length, text.length);
    }

    return text;
};
window.Vue.directive('docmd', {
    bind: function bind(el) {

        var mdScript = el.getElementsByTagName('script')[0];

        if (mdScript && mdScript.type === 'text/markdown') {

            var text = mdScript.innerText;
            var tree = parser(text, el);

            text = runner(tree);

            var md = (0, _marked2.default)(text);

            md = md.replace(/\{\%([a-zA-Z0-9\_]+)\%\}/g, '{{"\\\{\\\{$1\\\}\\\}"}}');
            md = md.replace(/\<p\>(\[\[\[(.+)\]\]\])\<\/p\>/g, '$1');
            md = md.replace(/(\[\[\[)/, '<ui-tab class="block noborder">$1');
            md = md.replace(/\[\[\[基础\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="开始">$1</div>$3');
            md = md.replace(/\[\[\[声明\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="声明">$1</div>$3');
            md = md.replace(/\[\[\[配置\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="配置">$1</div>$3');
            md = md.replace(/\[\[\[方法\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="方法">$1</div>$3');
            md = md.replace(/\[\[\[事件\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="事件">$1</div>$3');
            md = md.replace(/\[\[\[表单值\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="表单值">$1</div>$3');
            md = md.replace(/\[\[\[单元测试\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="源码">$1</div>$3');
            md = md.replace(/(.|\n)$/, '$1</ui-tab>');

            var res = Vue.compile('<div>' + md + '</div>');
            var instance = new Vue({
                render: res.render,
                staticRenderFns: res.staticRenderFns
            });

            instance.$mount();
            el.appendChild(instance.$el);
        }
    }
});

exports.default = {
    props: {
        category: String,
        page: String,
        hasPadding: Boolean
    },
    data: function data() {

        return {};
    },
    components: {
        'doc-header': _DocHeader2.default,
        'doc-submenu': _DocSubmenu2.default
    },
    mounted: function mounted() {

        _highlight2.default.initHighlightingOnLoad();

        var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
            for (var _iterator13 = evals[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var js = _step13.value;

                document.body.appendChild(js);
            }
        } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion13 && _iterator13.return) {
                    _iterator13.return();
                }
            } finally {
                if (_didIteratorError13) {
                    throw _iteratorError13;
                }
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        page: String
    },
    computed: {
        isUnitPass: function isUnitPass() {

            return this.unit === 'pass';
        },
        isE2EPass: function isE2EPass() {

            return this.e2e === 'pass';
        }
    },
    data: function data() {

        return {
            unit: '-',
            unitNote: '',
            unitTitle: '',
            e2e: '-',
            e2eNote: '',
            e2eTitle: '',
            coverage: '-',
            coverageLevel: '-'
        };
    },
    mounted: function mounted() {
        var _this = this;

        $.get('/report/test.json', function (data) {

            var unitAllTest = 0;
            var unitPassTest = 0;
            var unitFailTest = 0;
            var e2eAllTest = 0;
            var e2ePassTest = 0;
            var e2eFailTest = 0;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = data.tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;


                    if (/# SKIP/.test(item.name)) {

                        return;
                    }

                    var unitReg = new RegExp('unit \u203A components \u203A ' + _this.page + ' \u203A ');
                    var e2eReg = new RegExp('e2e \u203A components \u203A ' + _this.page + ' \u203A ');

                    if (unitReg.test(item.name)) {

                        unitAllTest++;
                    }

                    if (e2eReg.test(item.name)) {

                        e2eAllTest++;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = data.pass[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _item = _step2.value;


                    if (/# SKIP/.test(_item.name)) {

                        return;
                    }

                    var unitReg = new RegExp('unit \u203A components \u203A ' + _this.page + ' \u203A ');
                    var e2eReg = new RegExp('e2e \u203A components \u203A ' + _this.page + ' \u203A ');

                    if (unitReg.test(_item.name)) {

                        unitPassTest++;
                    }

                    if (e2eReg.test(_item.name)) {

                        e2ePassTest++;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = data.fail[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _item2 = _step3.value;


                    if (/# SKIP/.test(_item2.name)) {

                        return;
                    }

                    var unitReg = new RegExp('unit \u203A components \u203A ' + _this.page + ' \u203A ');
                    var e2eReg = new RegExp('e2e \u203A components \u203A ' + _this.page + ' \u203A ');

                    if (unitReg.test(_item2.name)) {

                        unitFailTest++;
                    }

                    if (e2eReg.test(_item2.name)) {

                        e2eFailTest++;
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            if (unitAllTest === 0) {

                _this.unit = 'no';
            } else if (unitPassTest === unitAllTest) {

                _this.unit = 'pass';
            } else {

                _this.unit = 'fail';
            }

            _this.unitNote = '(' + unitPassTest + '/' + unitAllTest + ')';
            _this.unitTitle = 'All:' + unitAllTest + ', Pass:' + unitPassTest + ', Fail:' + unitFailTest;

            if (e2eAllTest === 0) {

                _this.e2e = 'no';
            } else if (e2ePassTest === e2eAllTest) {

                _this.e2e = 'pass';
            } else {

                _this.e2e = 'fail';
            }

            _this.e2eNote = '(' + e2ePassTest + '/' + e2eAllTest + ')';
            _this.e2eTitle = 'All:' + e2eAllTest + ', Pass:' + e2ePassTest + ', Fail:' + e2eFailTest;
        });

        $.get('/report/coverage/lib/components/' + this.page + '/index.vue.html', function (data) {

            var lineCoverage = data.match(/>([0-9.]+?)% <\/span>(.|\n)+?Statements/);
            var coverageLevel = data.match(/status-line ([a-z]+?)("|')/);

            if (lineCoverage && lineCoverage[1]) {

                _this.coverage = lineCoverage[1] + '%';
            } else {

                _this.coverage = '0%';
            }

            if (coverageLevel && coverageLevel[1]) {

                _this.coverageLevel = coverageLevel[1];
            } else {

                _this.coverageLevel = 'no';
            }
        });
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _menu = __webpack_require__(22);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        category: String,
        page: String
    },
    computed: {
        currentMenu: function currentMenu() {

            return this.menuList[this.category] || {};
        }
    },
    data: function data() {

        return {
            menuList: _menu2.default
        };
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

module.exports = exports['default'];

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[240]);