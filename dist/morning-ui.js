/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UI = _vue2.default.extend({
    props: {
        xxl: Boolean,
        xl: Boolean,
        l: Boolean,
        m: Boolean,
        s: Boolean,
        xs: Boolean,
        xxs: Boolean,
        theme: Boolean,
        success: Boolean,
        warning: Boolean,
        danger: Boolean,
        minor: Boolean,
        light: Boolean,
        deep: Boolean,
        info: Boolean
    },
    watch: {
        size: function size(val, oval) {

            this.sizeClass['si-' + oval] = false;
            this.sizeClass['si-' + val] = true;
        },
        style: function style(val, oval) {

            if (oval !== null) {

                this.styleClass['sy-' + oval] = false;
            }

            if (val !== null) {

                this.styleClass['sy-' + val] = true;
            }
        },
        xxl: 'syncSize',
        xl: 'syncSize',
        l: 'syncSize',
        m: 'syncSize',
        s: 'syncSize',
        xs: 'syncSize',
        xxs: 'syncSize',
        theme: 'syncStyle',
        success: 'syncStyle',
        warning: 'syncStyle',
        danger: 'syncStyle',
        minor: 'syncStyle',
        light: 'syncStyle',
        deep: 'syncStyle',
        info: 'syncStyle'
    },
    created: function created() {

        this.syncSize();
        this.syncStyle();
    },
    mounted: function mounted() {

        window.morning.map[this.uiid] = this;
    },
    destroyed: function destroyed() {

        delete window.morning.map[this.uiid];
    },
    methods: {
        syncSize: function syncSize() {

            var size = 'm';

            if (this.m) {

                size = 'm';
            } else if (this.l) {

                size = 'l';
            } else if (this.s) {

                size = 's';
            } else if (this.xl) {

                size = 'xl';
            } else if (this.xs) {

                size = 'xs';
            } else if (this.xxl) {

                size = 'xxl';
            } else if (this.xxs) {

                size = 'xxs';
            }

            this.size = size;
        },
        syncStyle: function syncStyle() {

            var style = null;

            if (this.theme) {

                style = 'theme';
            } else if (this.success) {

                style = 'success';
            } else if (this.warning) {

                style = 'warning';
            } else if (this.danger) {

                style = 'danger';
            } else if (this.minor) {

                style = 'minor';
            } else if (this.light) {

                style = 'light';
            } else if (this.deep) {

                style = 'deep';
            } else if (this.info) {

                style = 'info';
            }

            this.style = style;
        }
    },
    data: function data() {

        return {
            size: 'm',
            sizeClass: {
                'si-xxl': false,
                'si-xl': false,
                'si-l': false,
                'si-m': true,
                'si-s': false,
                'si-xs': false,
                'si-xxs': false
            },
            style: 'theme',
            styleClass: {
                'sy-theme': true,
                'sy-success': false,
                'sy-warning': false,
                'sy-danger': false,
                'sy-minor': false,
                'sy-light': false,
                'sy-deep': false,
                'sy-info': false
            },
            uiid: window.morning._uiid++
        };
    }
    // watch : {
    //     size : function (val) {
    //         this.$attrs.size = val;
    //     }
    // },
    // props : {
    //     m : String,
    //     l : String
    // },
    // data : function () {

    //     var size = 'm';

    //     console.log('123', this.m, this.l);

    //     if ( this.m === '' ) {
    //         size = 'm';
    //     } else if ( this.l === '' ) {
    //         size = 'l';
    //     }

    //     return {
    //         uiid : window.morning._uiid++,
    //         // size : size,
    //         size : {
    //             m : 1,
    //             l : 0,
    //             xl : 0
    //         }
    //     };

    // }
});

exports.default = UI;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _ui = __webpack_require__(0);

var _ui2 = _interopRequireDefault(_ui);

var _form = __webpack_require__(3);

var _form2 = _interopRequireDefault(_form);

var _components = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var morning = {
    version: '1.0.0',
    _origin: {
        UI: _ui2.default,
        Form: _form2.default
    },
    _component: {
        style: _components.style
    },
    _uiid: 1,
    map: {}
};

// register component
for (var category in morning._component) {

    for (var name in morning._component[category]) {

        var component = morning._component[category][name];

        _vue2.default.component('ui-' + component.options.name, component);
    }
}

window.morning = morning;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ui = __webpack_require__(0);

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = _ui2.default.extend({});

exports.default = Form;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(5);

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.style = undefined;

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = exports.style = {
    h: _index2.default
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_302a0e98_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(10);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(7)
}
var normalizeComponent = __webpack_require__(8)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_302a0e98_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/style/h/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-302a0e98", Component.options)
  } else {
    hotAPI.reload("data-v-302a0e98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Common_ui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Common_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_Common_ui__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_Common_ui___default.a.extend({
    name: 'h'
}));

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i-h', {
    class: [_vm.sizeClass, _vm.styleClass],
    attrs: {
      "_uiid": _vm.uiid
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-302a0e98", esExports)
  }
}

/***/ })
/******/ ]);