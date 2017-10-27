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

/***/ 11:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2dcd472a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(636);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(325)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2dcd472a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/install/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2dcd472a", Component.options)
  } else {
    hotAPI.reload("data-v-2dcd472a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f53ddca_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocBody_vue__ = __webpack_require__(17);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f53ddca_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocBody_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-6f53ddca", Component.options)
  } else {
    hotAPI.reload("data-v-6f53ddca", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33244de6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocComponentStatus_vue__ = __webpack_require__(15);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33244de6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocComponentStatus_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-33244de6", Component.options)
  } else {
    hotAPI.reload("data-v-33244de6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(33);
var bind = __webpack_require__(42);
var Axios = __webpack_require__(133);
var defaults = __webpack_require__(34);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(39);
axios.CancelToken = __webpack_require__(132);
axios.isCancel = __webpack_require__(40);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(147);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(39);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(34);
var utils = __webpack_require__(33);
var InterceptorManager = __webpack_require__(134);
var dispatchRequest = __webpack_require__(135);
var isAbsoluteURL = __webpack_require__(143);
var combineURLs = __webpack_require__(141);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(33);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(33);
var transformData = __webpack_require__(138);
var isCancel = __webpack_require__(40);
var defaults = __webpack_require__(34);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(41);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(33);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d3ae136_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocSubmenu_vue__ = __webpack_require__(16);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d3ae136_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocSubmenu_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-3d3ae136", Component.options)
  } else {
    hotAPI.reload("data-v-3d3ae136", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(33);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(33);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(33);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(33);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(33);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
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
  }, [_vm._v(_vm._s(_vm.coverage))])])]), _vm._v(" "), (_vm.lastupdate) ? _c('div', {
    staticClass: "last-update"
  }, [_vm._v("\n        Last update : "), _c('a', {
    attrs: {
      "href": 'https://github.com/EarlyH/morning-ui/releases/tag/' + _vm.lastupdate.version
    }
  }, [_vm._v(_vm._s(_vm.lastupdate.version))]), _vm._v(" by "), _c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.lastupdate.avatar,
      "alt": ""
    }
  }), _vm._v(" "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": _vm.lastupdate.github
    }
  }, [_vm._v(_vm._s(_vm.lastupdate.author))]), _vm._v(" at " + _vm._s(_vm.lastupdate.date) + " (" + _vm._s(_vm.lastupdate.ar) + "), commit id : "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": 'https://github.com/EarlyH/morning-ui/commit/' + _vm.lastupdate.cid
    }
  }, [_vm._v(_vm._s(_vm.lastupdate.scid))]), _vm._v(" "), _c('br')]) : _vm._e(), _vm._v(" "), (_vm.lastupdate) ? _c('div', {
    staticClass: "contributors"
  }, [_vm._v("\n        Contributors : \n        "), _vm._l((_vm.lastupdate.contributors), function(item) {
    return _c('span', [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": item.avatar,
        "alt": ""
      }
    }), _vm._v(" "), _c('a', {
      attrs: {
        "target": "_blank",
        "href": item.github
      }
    }, [_vm._v(_vm._s(item.name))])])
  }), _vm._v("   \n    ")], 2) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-33244de6", esExports)
  }
}

/***/ }),

/***/ 16:
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
     require("vue-hot-reload-api").rerender("data-v-3d3ae136", esExports)
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
     require("vue-hot-reload-api").rerender("data-v-6f53ddca", esExports)
  }
}

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

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(130);

var _axios2 = _interopRequireDefault(_axios);

var _DocGuide = __webpack_require__(30);

var _DocGuide2 = _interopRequireDefault(_DocGuide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {

        return {
            page: 'install',
            version: '-'
        };
    },
    components: {
        'doc-guide': _DocGuide2.default
    },
    mounted: function mounted() {
        var _this = this;

        _axios2.default.get('/package.json').then(function (response) {

            var version = response.data.version;
            var $download = _this.$el.querySelector('#download');

            $download._vm.setConf('link', 'https://github.com/EarlyH/morning-ui/archive/.' + version + '.zip');
            $download.innerText = '\u4E0B\u8F7Dv' + version;
        }).catch(function (error) {

            throw new Error(error);
        });
    }
};
module.exports = exports['default'];

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

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(115);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e9905d3_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocGuide_vue__ = __webpack_require__(31);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e9905d3_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocGuide_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-7e9905d3", Component.options)
  } else {
    hotAPI.reload("data-v-7e9905d3", Component.options)
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
     require("vue-hot-reload-api").rerender("data-v-7e9905d3", esExports)
  }
}

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(42);
var isBuffer = __webpack_require__(563);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(33);
var normalizeHeaderName = __webpack_require__(145);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(38);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(38);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(614)))

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(33);
var settle = __webpack_require__(137);
var buildURL = __webpack_require__(140);
var parseHeaders = __webpack_require__(146);
var isURLSameOrigin = __webpack_require__(144);
var createError = __webpack_require__(41);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(139);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (undefined !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(142);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6dc34f74_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocHeader_vue__ = __webpack_require__(5);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6dc34f74_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocHeader_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-6dc34f74", Component.options)
  } else {
    hotAPI.reload("data-v-6dc34f74", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(136);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


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
     require("vue-hot-reload-api").rerender("data-v-6dc34f74", esExports)
  }
}

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _markdownIt = __webpack_require__(25);

var _markdownIt2 = _interopRequireDefault(_markdownIt);

var _extend2 = __webpack_require__(23);

var _extend3 = _interopRequireDefault(_extend2);

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var randomRangeMin = 1e3;
var randomRangeMax = 9e3;

var markdown = new _markdownIt2.default({
    html: true
});

var evals = [];

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
        }],
        select: [{
            valueType: 'String',
            valueContent: '\'Tim Boelaars\''
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
            valueContent: '[\'Tim Boelaars\', \'Andrew Colin Beck\']'
        }]
    }
};

var repeater = {
    size: function size(_opt) {

        _opt.content = '{$#size}' + _opt.content + '{$/size}';
        _opt.context = (0, _extend3.default)(true, _opt.context, {
            size: data.size
        });

        return _opt;
    },
    color: function color(_opt) {

        var color = _opt.param;

        _opt.content = '{$#' + color + '}' + _opt.content + '{$/' + color + '}';
        _opt.context = (0, _extend3.default)(true, _opt.context, _defineProperty({}, color, data[color]));

        if (color === 'silver') {

            _opt.style.push('background: #626b75;border-color: #454d57');
        } else if (color === 'gray') {

            _opt.style.push('background:#676767;border-color: #494949');
        }

        return _opt;
    },
    state: function state(_opt) {

        if (_opt.param === undefined) {

            _opt.param = 'all';
        }

        var states = _opt.param.split(',');

        if (states.length > 0 && states.indexOf('all') === -1) {

            var sna = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = data.state[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var state = _step.value;


                    if (states.indexOf(state.stateKey) !== -1) {

                        sna.push(state);
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

            _opt.context = (0, _extend3.default)(true, _opt.context, {
                state: sna
            });
        } else if (states[0] === 'all') {

            _opt.context = (0, _extend3.default)(true, _opt.context, {
                state: data.state
            });
        }

        // if (typeof opt.content === 'string') {

        _opt.content = '{$#state}' + _opt.content + '{$/state}';

        // } else if (typeof opt.contnet === 'object') {

        //     for (let key in opt.content) {

        //         opt.content[key] = `{$#state}${opt.content[key]}\n{$/state}`;

        //     }

        // }

        return _opt;
    },
    br: function br(_opt) {

        var num = +_opt.param || 1;
        var brs = '';

        while (num--) {

            brs += '<br/>';
        }

        _opt.content = _opt.content + '\n' + brs + '\n';

        return _opt;
    },
    formConfig: function formConfig(_opt) {

        _opt.content = '{$#formConfig}' + _opt.content + '\n{$/formConfig}';
        _opt.context = (0, _extend3.default)(true, _opt.context, {
            formConfig: data.formConfig
        });

        return _opt;
    },
    formValueType: function formValueType(_opt) {

        var key = _opt.param || 'default';

        _opt.content = '{$#formValueType.' + key + '}' + _opt.content + '\n{$/formValueType.' + key + '}';
        _opt.context = (0, _extend3.default)(true, _opt.context, {
            formValueType: data.formValueType
        });

        return _opt;
    }
};

var presets = {
    statementColor: '\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<ui-{%uikey%} {$colorKey}>{$&colorName}</ui-{%uikey%}>\n:::\n',
    formStatement: '\n#### \u652F\u6301\n\n|\u7C7B\u578B|\u652F\u6301|\u9ED8\u8BA4|\n|-|-|-|\n|\u5C3A\u5BF8|\u4E0D\u652F\u6301|-|\n|\u8272\u5F69|\u4E0D\u652F\u6301|-|\n|\u72B6\u6001|`normal`<br/>`disabled`|`normal`|\n\n#### \u72B6\u6001\n\n:::repeat/html\nstate:normal,disabled\n---\n<div style="width:300px;">\n    <ui-{%uikey%} {$stateKey} :default-value="{%&statementDefaultValue%}" form-name="{$&stateName}" {%&statementMoreAttr%}>{%&statementSlot%}</ui-{%uikey%}>\n</div>\n<br>\n:::\n',
    formStatementWithStyle: '\n#### \u652F\u6301\n\n|\u7C7B\u578B|\u652F\u6301|\u9ED8\u8BA4|\n|-|-|-|\n|\u5C3A\u5BF8|\u4E0D\u652F\u6301|-|\n|\u8272\u5F69|\u5168\u90E8|`theme`|\n|\u72B6\u6001|`normal`<br/>`disabled`|`normal`|\n\n\n#### \u8272\u5F69\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<div style="width:300px;">\n    <ui-{%uikey%} {$colorKey} :default-value="{%&statementDefaultValue%}" form-name="{$&colorName}" {%&statementMoreAttr%}>{%&statementSlot%}</ui-{%uikey%}>\n</div>\n<br>\n:::\n\n#### \u72B6\u6001\n\n:::repeat/html\nstate:normal,disabled\n---\n<div style="width:300px;">\n    <ui-{%uikey%} {$stateKey} :default-value="{%&statementDefaultValue%}" form-name="{$&stateName}" {%&statementMoreAttr%}>{%&statementSlot%}</ui-{%uikey%}>\n</div>\n<br>\n:::\n',
    formConfigDemo: '\n#### form-name\n\n:::repeat/html\nformConfig\n---\n<div style="width:300px;">\n    <ui-{%uikey%} form-name="{$formName}" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>\n</div>\n:::\n\n#### form-key\n\n:::repeat/html\nformConfig\n---\n<div style="width:300px;">\n    <ui-{%uikey%} form-name="{$formName}" form-key="{$formKey}" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>\n</div>\n:::\n\n#### group\n\n\u8BBE\u7F6E\u5355\u4E2A\u7EC4\uFF1A\n\n:::repeat/html\nformConfig\n---\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u5355\u4E2A\u7EC4 -->\n    <ui-{%uikey%} form-name="{$formName}" form-key="{$formKey}" group="{$formGroupOne}" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>\n</div>\n:::\n\n\u8BBE\u7F6E\u591A\u4E2A\u7EC4\uFF1A\n\n:::repeat/html\nformConfig\n---\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{%uikey%} form-name="{$formName}" form-key="{$formKey}" :group="[\'group1\', \'group2\', \'group3\']" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>\n</div>\n:::\n\n#### default-value\n\n:::repeat/html\nformConfig\n---\n<div style="width:300px;">\n    <ui-{%uikey%} form-name="{$formName}" :default-value="{%&configDefaultValue%}" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>\n</div>\n:::\n\n#### hide-name\n\n\u9690\u85CF\u540E\u8868\u5355\u9ED8\u8BA4\u4F4D\u7F6E\u7684\u540D\u5B57\u4E0D\u4F1A\u663E\u793A\uFF0C\u53EF\u4EE5\u5728\u5176\u4ED6\u5730\u65B9\u8BBE\u7F6E\u8868\u5355\u540D\u3002\n\n:::repeat/html\nformConfig\n---\n<div style="width:300px;">\n    <p>{$formName}</p>\n    <ui-{%uikey%} form-name="{$formName}" hide-name {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>\n</div>\n:::\n    ',
    formConfigTable: '\n|KEY|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|\n|form-name|\u8868\u5355\u7684\u540D\u79F0\uFF08\u7528\u4E8E\u663E\u793A\uFF09|\u4EFB\u610F\u5B57\u7B26\u4E32|String|`undefined`|\n|form-key|\u8868\u5355\u7684Key\uFF08\u7528\u4E8E\u903B\u8F91\u4E2D\u4F5C\u4E3A\u8BC6\u522B\u6807\u793A\uFF09|\u4EFB\u610F\u5B57\u7B26\u4E32(\u552F\u4E00)|String|`undefined`|\n|group|\u8868\u5355\u7EC4\uFF0C\u7528\u4E8E\u5C06\u591A\u4E2A\u8868\u5355\u7684\u6570\u503C\u6DFB\u52A0\u5230\u540C\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u3002\u4E00\u4E2A\u8868\u5355\u53EF\u4EE5\u540C\u65F6\u5C5E\u4E8E\u591A\u4E2A\u7EC4|\u82E5\u662F\u5B57\u7B26\u4E32\uFF0C\u5219\u5C06\u8868\u5355\u6DFB\u52A0\u5230\u5355\u4E2A\u7EC4<br>\u82E5\u662F\u6570\u7EC4\uFF0C\u5219\u5C06\u8868\u5355\u6DFB\u52A0\u5230\u591A\u4E2A\u7EC4|String<br/>Array|`[]`|\n|default-value|\u8868\u5355\u7684\u9ED8\u8BA4\u503C|\u4EFB\u610F(\u63A5\u53D7\u8868\u5355\u539F\u59CB\u6570\u503C\uFF0C\u4E5F\u63A5\u53D7JSON\u5E8F\u5217\u5316\u540E\u7684\u8868\u5355\u6570\u503C\uFF0C\u82E5\u6570\u503C\u662FJSON\u5E8F\u5217\u5316\u7684\u4F1A\u81EA\u52A8\u8F6C\u6362\u6210\u539F\u59CB\u6570\u503C)|Any|`undefined`|\n|hide-name|\u9690\u85CF\u8868\u5355\u540D|`true`<br>`false`|Boolean|`false`|\n{%&content%}\n',
    formMethod: '\n#### set([value])\n\n\u8BBE\u7F6E\u8868\u5355\u7684\u503C\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|value|YES|\u9700\u8981\u8BBE\u7F6E\u8868\u5355\u7684\u503C\uFF0C\u5982\u679C\u9700\u8981\u6E05\u7A7A\u8868\u5355\u7684\u503C\uFF0C\u53EF\u4EE5\u4E0D\u4F20\u6B64\u53C2\u6570\u3002|\u63A5\u53D7\u4EFB\u4F55\u6570\u503C\u3002<br/>`undefined`:\u6E05\u7A7A\u8868\u5355\u7684\u503C<br>\u539F\u59CB\u503C:\u8868\u5355\u7684\u539F\u59CB\u503C\uFF0C\u6839\u636E\u8868\u5355\u4E0D\u540C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u3001\u5BF9\u8C61\u3001\u6570\u7EC4\u7B49<br>JSON\u6570\u503C:\u8868\u5355\u539F\u59CB\u503CJSON\u5E8F\u5217\u5316\u540E\u7684\u503C\uFF0C\u4F20\u5165\u540E\u8868\u5355\u4F1A\u81EA\u52A8\u89E3\u6790\u5E76\u8FD8\u539F\u539F\u59CB\u503C\u3002|Any|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoMethodSet" form-name="\u8868\u5355\u540D" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoMethodSet\').set({%&methodValue%})">\u8BBE\u7F6E\u503C</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSet\').set()">\u79FB\u9664\u503C</ui-link>\n</div>\n:::\n\n#### get([json])\n\n\u83B7\u53D6\u8868\u5355\u7684\u503C\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|json|YES|\u8868\u5355\u7684\u503C\u662F\u5426\u9700\u8981JSON\u5E8F\u5217\u5316\u540E\u8FD4\u56DE\uFF0C\u82E5\u4F60\u9700\u8981\u548C\u5176\u4ED6\u7A0B\u5E8F\u8FDB\u884C\u6570\u636E\u4EA4\u4E92\uFF0C\u4F7F\u7528JSON\u662F\u4E00\u79CD\u8F83\u597D\u7684\u65B9\u6CD5\u3002|`true`<br>`false`|Boolean|`true`|\n\n:::democode/html\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoMethodGet" form-name="\u8868\u5355\u540D" :default-value="{%&methodDefaultValue%}" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(window.morning.findVM(\'demoMethodGet\').get(false))">\u83B7\u53D6\u8868\u5355\u539F\u59CB\u503C</ui-link>\n    <ui-link js="alert(window.morning.findVM(\'demoMethodGet\').get())">\u83B7\u53D6\u8868\u5355JSON\u503C</ui-link>\n</div>\n:::\n\n#### setName([name])\n\n\u8BBE\u7F6E\u8868\u5355\u7684\u540D\u79F0\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|name|YES|\u9700\u8981\u8BBE\u7F6E\u8868\u5355\u7684\u540D\u79F0\uFF0C\u5982\u679C\u9700\u8981\u6E05\u7A7A\u8868\u5355\u7684\u540D\u79F0\uFF0C\u53EF\u4EE5\u4E0D\u4F20\u6B64\u53C2\u6570\u3002|\u4EFB\u610F\u5B57\u7B26\u4E32|String|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoMethodSetName" form-name="\u59D3\u540D" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(window.morning.findVM(\'demoMethodSetName\').getName())">\u83B7\u53D6\u8868\u5355\u540D\u79F0</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetName\').setName(\'\u5E74\u9F84\')">\u8BBE\u7F6E\u8868\u5355\u540D\u79F0</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetName\').setName()">\u79FB\u9664\u8868\u5355\u540D\u79F0</ui-link>\n</div>\n:::\n\n#### getName()\n\n\u83B7\u53D6\u8868\u5355\u7684\u540D\u79F0\u3002\n\n:::democode/html\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoMethodGetName" form-name="\u59D3\u540D" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(window.morning.findVM(\'demoMethodGetName\').getName())">\u83B7\u53D6\u8868\u5355\u540D\u79F0</ui-link>\n</div>\n:::\n\n#### setKey([key])\n\n\u8BBE\u7F6E\u8868\u5355\u7684KEY\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|key|YES|\u9700\u8981\u8BBE\u7F6E\u8868\u5355\u7684KEY\uFF0C\u5982\u679C\u9700\u8981\u6E05\u7A7A\u8868\u5355\u7684KEY\uFF0C\u53EF\u4EE5\u4E0D\u4F20\u6B64\u53C2\u6570\u3002|\u4EFB\u610F\u5B57\u7B26\u4E32|String|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoMethodSetKey" form-name="\u8868\u5355\u540D" form-key="name" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(window.morning.findVM(\'demoMethodSetKey\').getKey())">\u83B7\u53D6\u8868\u5355KEY</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetKey\').setKey(\'age\')">\u8BBE\u7F6E\u8868\u5355KEY</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetKey\').setKey()">\u79FB\u9664\u8868\u5355KEY</ui-link>\n</div>\n:::\n\n#### getKey()\n\n\u83B7\u53D6\u8868\u5355\u7684KEY\u3002\n\n:::democode/html\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoMethodGetKey" form-name="\u8868\u5355\u540D" form-key="name" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(window.morning.findVM(\'demoMethodGetKey\').getKey())">\u83B7\u53D6\u8868\u5355KEY</ui-link>\n</div>\n:::\n\n#### setGroup([groups])\n\n\u8BBE\u7F6E\u8868\u5355\u6240\u5C5E\u7684\u8868\u5355\u7EC4\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|groups|YES|\u9700\u8981\u8BBE\u7F6E\u7684\u8868\u5355\u7EC4\u3002\u5982\u679C\u9700\u8981\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4\uFF0C\u53EF\u4EE5\u4E0D\u4F20\u6B64\u53C2\u6570\u3002|`undefined`:\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4<br>String:\u8BBE\u7F6E\u4E00\u4E2A\u8868\u5355\u7EC4<br>Array:\u8BBE\u7F6E\u591A\u4E2A\u8868\u5355\u7EC4\u3002|String<br>Array<br>Undefined|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{%uikey%} ref="demoMethodSetGroup" form-name="\u8868\u5355\u540D" form-key="name" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(JSON.stringify(window.morning.findVM(\'demoMethodSetGroup\').getGroup()))">\u83B7\u53D6\u8868\u5355\u7EC4</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetGroup\').setGroup(\'group1\')">\u8BBE\u7F6E\u5355\u4E2A\u8868\u5355\u7EC4</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetGroup\').setGroup([\'group1\', \'group2\'])">\u8BBE\u7F6E\u591A\u4E2A\u8868\u5355\u7EC4</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetGroup\').setGroup()">\u79FB\u9664\u6240\u6709\u8868\u5355\u7EC4</ui-link>\n</div>\n:::\n\n#### getGroup()\n\n\u83B7\u53D6\u8868\u5355\u6240\u5C5E\u7684\u8868\u5355\u7EC4\u3002\n\n:::democode/html\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{%uikey%} ref="demoMethodGetGroup" form-name="\u8868\u5355\u540D" form-key="name" group="group1" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(JSON.stringify(window.morning.findVM(\'demoMethodGetGroup\').getGroup()))">\u83B7\u53D6\u8868\u5355\u7EC4</ui-link>\n</div>\n:::\n\n#### addGroup(group)\n\n\u6DFB\u52A0\u4E00\u4E2A\u6307\u5B9A\u7684\u8868\u5355\u7EC4\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|group|NO|\u6DFB\u52A0\u8868\u5355\u7EC4\u7684KEY|\u8868\u5355\u7EC4\u7684KEY|String|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{%uikey%} ref="demoMethodAddGroup" form-name="\u8868\u5355\u540D" form-key="name" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(JSON.stringify(window.morning.findVM(\'demoMethodAddGroup\').getGroup()))">\u83B7\u53D6\u8868\u5355\u7EC4</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodAddGroup\').addGroup(\'group1\')">\u6DFB\u52A0\u8868\u5355\u7EC4</ui-link>\n</div>\n:::\n\n#### removeGroup(group)\n\n\u79FB\u9664\u4E00\u4E2A\u6307\u5B9A\u7684\u8868\u5355\u7EC4\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|group|NO|\u79FB\u9664\u8868\u5355\u7EC4\u7684KEY|\u8868\u5355\u7EC4\u7684KEY|String|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{%uikey%} ref="demoMethodRemoveGroup" form-name="\u8868\u5355\u540D" form-key="name" group="group1" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(JSON.stringify(window.morning.findVM(\'demoMethodRemoveGroup\').getGroup()))">\u83B7\u53D6\u8868\u5355\u7EC4</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodRemoveGroup\').removeGroup(\'group1\')">\u79FB\u9664\u8868\u5355\u7EC4</ui-link>\n</div>\n:::\n    ',
    formEvent: '\n#### value-change\n\n\u5F53\u8868\u5355\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u3002\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demoValueChange.console1\', \'value-change event!\');\n        }\n    }\n});\n---\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoValueChange" form-name="\u8868\u5355\u540D" @value-change="echo" {%&eventMoreAttr%}>{%&eventSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoValueChange\').set({%&eventValue%})">\u89E6\u53D1value-change\u4E8B\u4EF6</ui-link>\n</div>\n:::\n\n#### \u751F\u547D\u5468\u671F\u4E8B\u4EF6\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'\u6309\u94AE\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n});\n---\n<div style="width:300px;">\n    <ui-{%uikey%}\n        ref="demoEventLifecycle"\n        form-name="\u8868\u5355\u540D123"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n        {%&eventMoreAttr%}\n    >{%&eventSlot%}<span style="display:none;">{*text*}</span></ui-{%uikey%}>\n\n    <br><br>\n\n    <ui-link js="javascript:window.demoEventLifecycle.text=\'\u751F\u547D\u5468\u671F\u4E8B\u4EF6\';">\u89E6\u53D1update</ui-link>\n    <ui-link js="javascript:morning.findVM(\'demoEventLifecycle\').$destroy();">\u89E6\u53D1destroy</ui-link>\n</div>\n:::\n'
};

var extRepeat = function extRepeat(content, paramStr, token, md) {

    var params = {};

    params.list = [];

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = paramStr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;


            item = item.split('|');

            params.list.push(item);
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

    var fullContent = '';

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = params.list[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _item = _step3.value;


            var _opt = {
                content: content,
                context: {},
                style: []
            };

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = _item[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var sitem = _step4.value;


                    _opt.param = undefined;

                    if (sitem === 'size') {

                        repeater.size(_opt);
                    } else if (/^color/.test(sitem)) {

                        _opt.param = sitem.split(':')[1];
                        repeater.color(_opt);
                    } else if (/^state/.test(sitem)) {

                        _opt.param = sitem.split(':')[1];
                        repeater.state(_opt);
                    } else if (/^br/.test(sitem)) {

                        _opt.param = sitem.split(':')[1];
                        repeater.br(_opt);
                    } else if (/^formConfig/.test(sitem)) {

                        repeater.formConfig(_opt);
                    } else if (/^formValueType/.test(sitem)) {

                        _opt.param = sitem.split(':')[1];
                        repeater.formValueType(_opt);
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

            _mustache2.default.parse(_opt.content, ['{$', '}']);

            var renderContent = _mustache2.default.render(_opt.content, _opt.context);

            fullContent += '<div class="demo" style="' + _opt.style.join('') + '">' + renderContent + '</div><pre><code class="lang-' + token.lang + '">' + md.utils.escapeHtml(renderContent) + '</code></pre>\n';
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

    return fullContent;
};

var extVue = function extVue(content, paramStr, token, md) {

    var js = paramStr.join('\n');
    var html = content;
    var demoid = 'demo-' + _underscore2.default.random(randomRangeMin, randomRangeMax);
    var context = {
        id: demoid,
        el: '#' + demoid + '-el',
        template: '#' + demoid + '-tmpl'
    };
    var code = void 0,
        demo = void 0;

    _mustache2.default.parse(js, ['{$', '}']);
    js = _mustache2.default.render(js, context);

    _mustache2.default.parse(html, ['{$', '}']);
    html = _mustache2.default.render(html, context);

    code = '<div id="' + demoid + '-el"><!-- ' + demoid + ' \u5BB9\u5668 --></div>\n\n';
    demo = '<div id="' + demoid + '-el"></div>';

    var htmlScript = document.createElement('script');

    htmlScript.innerHTML = '\n' + html;
    htmlScript.type = 'x-template';
    htmlScript.id = demoid + '-tmpl';

    code += htmlScript.outerHTML + '\n\n';

    htmlScript.innerHTML = htmlScript.innerHTML.replace(/\{\*([a-zA-Z0-9_.]+)\*\}/g, '{{$1}}');
    evals.push(htmlScript);

    var jsScript = document.createElement('script');

    jsScript.innerHTML = '\n' + js + '\n';
    evals.push(jsScript);
    code += jsScript.outerHTML;

    return '<div class="demo">' + demo + '</div><pre><code class="lang-' + token.lang + '">' + md.utils.escapeHtml(code) + '</code></pre>\n';
};

var extPreset = function extPreset(content, paramStr) {

    var context = {
        content: content
    };
    var template = presets[paramStr[0]];

    content = content.split('\n');

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = content[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var item = _step5.value;


            if (item) {

                item = item.split(':');
                context[item.shift()] = item.join(':');
            }
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

    _mustache2.default.parse(template, ['{%', '%}']);
    template = _mustache2.default.render(template, context);

    return markdown.render(template);
};

var demoWithCodePlugin = function demoWithCodePlugin(md, opt) {
    md.block.ruler.before('table', 'codeWithDemo', function (state, startLine, endLine) {

        // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {

            return false;
        }

        var charCode = 0x3A;

        var pos = state.bMarks[startLine] + state.tShift[startLine];
        var end = state.eMarks[startLine];
        var marker = state.src.charCodeAt(pos);
        var start = void 0,
            len = void 0,
            markup = void 0,
            method = void 0,
            nextLine = void 0,
            token = void 0,
            haveEndMarker = void 0;

        // 0x3a is :
        if (marker !== charCode) {

            return false;
        }

        // scan marker length
        start = pos;
        pos = state.skipChars(pos, marker);
        len = pos - start;
        markup = state.src.slice(start, pos);
        method = state.src.slice(pos, end);

        if (len !== 3) {

            return false;
        }

        nextLine = startLine;

        for (;;) {

            nextLine++;

            if (nextLine >= endLine) {

                // unclosed block should be autoclosed by end of document.
                // also block seems to be autoclosed by end of parent
                break;
            }

            pos = start = state.bMarks[nextLine] + state.tShift[nextLine];
            end = state.eMarks[nextLine];

            if (pos < end && state.sCount[nextLine] < state.blkIndent) {

                // non-empty line with negative indent should stop the list:
                // - ```
                //  test
                break;
            }

            /* eslint-disable no-continue */
            if (state.src.charCodeAt(pos) !== marker) {

                continue;
            }

            if (state.sCount[nextLine] - state.blkIndent >= 4) {

                // closing fence should be indented less than 4 spaces
                continue;
            }

            pos = state.skipChars(pos, marker);

            // closing code fence must be at least as long as the opening one
            if (pos - start < len) {

                continue;
            }

            // make sure tail has spaces only
            pos = state.skipSpaces(pos);

            if (pos < end) {

                continue;
            }

            /* eslint-enable no-continue */

            haveEndMarker = true;

            break;
        }

        len = state.sCount[startLine];
        state.line = nextLine + (haveEndMarker ? 1 : 0);

        token = state.push('extMethod', 'div', 1);
        token.method = method.split('/')[0];
        token.lang = method.split('/')[1];
        token.content = state.getLines(startLine + 1, nextLine, len, true);
        token.markup = markup;
        token.map = [startLine, state.line];

        return true;
    });

    md.renderer.rules.extMethod = function (tokens, idx) {

        var token = tokens[idx];
        var method = token.method;
        var list = token.content.split('\n---\n');
        var paramStr = '';
        var content = void 0;
        var result = '';

        if (list.length > 1) {

            paramStr = list.shift();
        }

        content = list.join('\n---\n');

        paramStr = paramStr.split('\n');

        if (method === 'democode') {

            result = '<div class="demo">' + content + '</div><pre><code class="lang-' + token.lang + '">' + md.utils.escapeHtml(content) + '</code></pre>\n';
        }

        if (method === 'repeat') {

            result = extRepeat(content, paramStr, token, md);
        }

        if (method === 'vue') {

            result = extVue(content, paramStr, token, md);
        }

        if (method === 'preset') {

            result = extPreset(content, paramStr);
        }

        return result;
    };
};

markdown.use(demoWithCodePlugin);

window.Vue.component('doc-component-status', _DocComponentStatus2.default);

// let parser = (text, el) => {

//     let patt = /````(html|js|css|vue|)((\n[\t ]*[\@a-zA-Z0-9\:\.\,\|]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
//     let varpatt = /````(html|js|css)\n(\@var\:([a-zA-Z0-9]+))\n((.|\n)+?)\n([ \t]*)````/g;
//     let presetpatt = /````(preset)((\n[\t ]*[a-zA-Z0-9@'"[\]?<>/\-_{}=:.,|!()\u4e00-\u9fa5 ]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
//     let result;
//     let vars = {
//         js : {},
//         html : {}
//     };
//     let blocks = [];
//     let vueContext = {};

//     while ((result = presetpatt.exec(text)) !== null) {

//         let rdata = result[2].replace(/^\n/, '').split('\n');
//         let id = rdata[0].split(':')[1];

//         rdata.shift();

//         for (let item of rdata) {

//             let name = item.split(':')[0].replace(/^@/, '');
//             let valuelist = item.split(':');

//             valuelist.shift();

//             let value = valuelist.join(':');

//             vueContext[name] = value;

//         }

//         let content = presets[id];

//         text = text.slice(0, result.index - 1) + content + text.slice(result.index + result[0].length, text.length);
//         presetpatt.lastIndex = 0;

//     }

//     while ((result = varpatt.exec(text)) !== null) {

//         vars[result[1]][result[3]] = result[4];
//         text = text.slice(0, result.index - 1) + text.slice(result.index + result[0].length, text.length);

//         varpatt.lastIndex = 0;

//     }

//     while ((result = patt.exec(text)) !== null) {

//         let content = result[4];
//         let helpers = result[2].split('\n');

//         helpers.shift();

//         let block = {
//             content,
//             type : result[1],
//             result,
//             context : vueContext,
//             helpers : []
//         };

//         for (let name of helpers) {

//             let list = name.split('|');
//             let group = [];

//             for (let help of list) {

//                 let fn = help.split(':')[0].replace(/^\@/, '');
//                 let param = help.split(':')[1];

//                 group.push({
//                     fn,
//                     param
//                 });

//             }

//             block.helpers.push(group);

//         }

//         blocks.push(block);

//     }

//     return {
//         vars,
//         blocks,
//         text
//     };

// };

// let helpers = {
//     import : opt => {

//         let name = opt.param.split(',');

//         opt.content = window.$(`script#${name[0]}`);
//         opt.context = {
//             uiname : name[1]
//         };

//         return opt;

//     },
//     origin : opt => {

//         return opt;

//     },
//     render : opt => {

//         opt.isText = true;

//         return opt;

//     },
//     use : opt => {

//         let links = opt.param.split(',');

//         opt.content = {};

//         for (let link of links) {

//             let type = link.split('.')[0];
//             let key = link.split('.')[1];

//             opt.content[type] = `&&&&&{$id}|${opt.vars[type][key]}`;

//         }

//         opt.render = sopt => {

//             let list = {};
//             let code = '';
//             let demo = '';
//             let newData = extend(true, {}, sopt.context);
//             let lastType;

//             for (let key of Object.keys(newData)) {

//                 let value = newData[key];
//                 let id = `demo-${_.random(randomRangeMin, randomRangeMax)}`;

//                 if (value instanceof Array) {

//                     for (let svalue of value) {

//                         svalue.id = id;
//                         svalue.el = `#${id}-el`;
//                         svalue.template = `#${id}-tmpl`;

//                     }

//                 } else if (typeof value === 'object') {

//                     value.id = id;
//                     value.el = `#${id}-el`;
//                     value.template = `#${id}-tmpl`;

//                 }

//             }

//         };

//         return opt;

//     }
// };

// let make = {
//     block : block => {

//         return '<div class="demo">\n' + block.content + '</div>\n\n```' + block.type + '\n' + block.content + '\n```\n';

//     },
//     opt : (opts, block) => {

//         let text = '';

//         for (let opt of opts) {

//             let code,
//                 demo;

//             opt.context = extend({}, data, opt.context);

//             if (typeof opt.render === 'function') {

//                 let result = opt.render(opt);

//                 code = result.code;
//                 demo = result.demo;

//             } else {

//                 let template = opt.content;

//                 Mustache.parse(template, ['{$', '}']);

//                 code = Mustache.render(template, opt.context);

//             }

//             if (opt.style.length === 0) {

//                 opt.style = '';

//             } else {

//                 opt.style = opt.style.join(';');

//             }

//             if (block.type === 'vue') {

//                 block.type = 'html';

//             }

//             if (opt.isText) {

//                 text += code;

//             } else {

//                 text += '<div class="demo" style="' + opt.style + '">\n' + (demo || code) + '</div>\n\n```' + block.type + '\n' + code + '\n```\n';

//             }

//         }

//         return text;

//     }
// };

// let runner = tree => {

//     for (let block of tree.blocks) {

//         if (block.helpers.length > 0) {

//             let opts = [];

//             for (let group of block.helpers) {

//                 let opt = {
//                     content : block.content,
//                     vars : tree.vars,
//                     helperlist : group,
//                     context : block.context,
//                     style : []
//                 };

//                 for (let helper of group) {

//                     opt.param = helper.param;
//                     opt = helpers[helper.fn](opt);

//                 }

//                 opts.push(opt);

//             }

//             block._html = make.opt(opts, block);

//         } else {

//             block._html = make.block(block);

//         }

//     }

//     let text = tree.text;
//     let patt = /````(html|js|css|vue|)((\n[\t ]*[\@a-zA-Z0-9\:\.\,\|]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
//     let index = 0;
//     let result;

//     while ((result = patt.exec(text)) !== null) {

//         text = text.slice(0, result.index - 1) + tree.blocks[index++]._html + text.slice(result.index + result[0].length, text.length);

//     }

//     return text;

// };
window.Vue.directive('docmd', {
    bind: function bind(el) {

        var mdScript = el.getElementsByTagName('script')[0];

        if (mdScript && mdScript.type === 'text/markdown') {

            var text = mdScript.innerText;

            /* eslint-disable no-useless-escape */
            text = text.replace(/&lt;\/script>/g, '\<\/script>');
            /* eslint-enable no-useless-escape */

            text = text.replace(/\/`/g, '`');

            // let tree = parser(text, el);
            // text = runner(tree);

            var md = markdown.render(text);

            md = md.replace(/\\`/g, '`');

            md = md.replace(/\{\*([a-zA-Z0-9_.]+)\*\}/g, '{{"\\{\\{$1\\}\\}"}}');
            md = md.replace(/<p>(\[\[\[(.+)\]\]\])<\/p>/g, '$1');
            md = md.replace(/(\[\[\[)/, '<ui-tab class="block noborder">$1');
            md = md.replace(/\[\[\[开始\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="开始">$1</div>$3');
            md = md.replace(/\[\[\[声明\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="声明">$1</div>$3');
            md = md.replace(/\[\[\[配置\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="配置">$1</div>$3');
            md = md.replace(/\[\[\[方法\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="方法">$1</div>$3');
            md = md.replace(/\[\[\[事件\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="事件">$1</div>$3');
            md = md.replace(/\[\[\[表单值\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="表单值">$1</div>$3');
            md = md.replace(/\[\[\[源码\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="源码">$1</div>$3');
            md = md.replace(/(.|\n)$/, '$1</ui-tab>');

            md = md.replace(/<p>---demostart---<\/p>/g, '<div class="demo-area"><p class="demo-title">DEMO</p>');
            md = md.replace(/<p>---demoend---<\/p>/g, '\n</div>');

            var res = window.Vue.compile('<div>' + md + '</div>');
            var instance = new window.Vue({
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

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
            for (var _iterator6 = evals[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var js = _step6.value;


                document.body.appendChild(js);
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
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 636:
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
  }, [_vm._v("\n# 安装\n\n### 安装Vue\n\n由于MorningUI依赖Vue.js，请先安装`2.4.0`以上的Vue.js。\n\n[了解如何安装Vue.js](https://cn.vuejs.org/v2/guide/installation.html)\n\n### 获取MorningUI\n\nMorning UI的构建版本位于`dist`目录，包含四个文件：\n\n- `morning-ui.js` : 开发版本JS\n- `morning-ui.css` : 开发版本CSS\n- `morning-ui.min.js` : 生产版本JS\n- `morning-ui.min.css` : 生产版本CSS\n\n你可以通过下面的方式获取：\n\n##### 直接下载\n\n<ui-btn m new-tab id=\"download\">下载</ui-btn>\n\n##### NPM安装\n\nComing soon.\n\n##### CDN\n\nComing soon.\n\n### 页面引用\n\n##### 使用标签\n\n获取Morning UI后分别使用`<script>`及`<style>`标签在页面中引用：\n\n```html\n<link href=\"path-to-morning/morning-ui.css\" rel=\"stylesheet\">\n<script src=\"path-to-morning/morning-ui.js\">&lt;/script>\n```\n\n##### 使用模块打包器\n\nComing soon.\n\n### 全局变量\n\n无论你采用哪种方式引用Morning UI，都会在全局注册`window.morning`变量。\n\n### 更多\n\n#### 更新日志\n\n查看MorningUI的[更新日志](/guide/logs.html)。\n\n#### 自定义组件库\n\n目前MorningUI不支持自定义组件库，此功能将在稍后支持。\n\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2dcd472a", esExports)
  }
}

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
//
//
//
//
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
            coverageLevel: '-',
            lastupdate: null
        };
    },
    mounted: function mounted() {
        var _this = this;

        var usrs = {};

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

        $.get('/report/updatelog/' + this.page + '.json', function (data) {

            var promises = [];

            data.date = data.date.replace(/((^")|("$))/g, '');

            _this.lastupdate = data;
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

},[291]);