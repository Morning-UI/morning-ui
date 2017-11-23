webpackJsonp([20],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(417);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f4119be_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(420);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(418)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f4119be_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/devenv/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f4119be", Component.options)
  } else {
    hotAPI.reload("data-v-3f4119be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 418:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 419:
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
            page: 'devenv'
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

module.exports = exports['default'];

/***/ }),

/***/ 420:
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
  }, [_vm._v("\n# 开发环境\n\n在开始编写MorningUI的代码前，首先需要安装开发环境。\n\n为了帮助开发者快速开始，我们在项目工程化上倡导开箱即用。\n\n### 推荐MAC OS\n\n我们强烈推荐开发者使用MAC OS来进行开发，以下文档内容仅针对MAC OS。\n\n如果你是一名Windows开发者，非常抱歉，我们目前暂时没有维护Windows下的开发环境。你可以先按照下面流程进行，如果出现问题请联系我们。\n\n### 获取源码\n\nMorningUI的源码托管在github上：\n\n```shell\n$ git clone https://github.com/Morning-UI/morning-ui.git\n```\n\n### 本地安装\n\n由于MorningUI依赖一些npm包，源码获取后需要安装：\n\n```shell\n$ cd morning\n$ export ELECTRON_MIRROR=\"https://npm.taobao.org/mirrors/electron/\"\n$ npm install --registry=https://registry.npm.taobao.org\n```\n\n上面的脚本将部分源切换成了国内，这将有助于你快速安装依赖。\n\n### 检测安装\n\n运行测试来校验安装是否完成：\n\n```shell\n$ npm run test\n```\n\n如果所有测试通过，恭喜你完成了MorningUI的开发环境安装。\n\n### 开始开发\n\n首先执行`npm run dev`，这可能需要一点时间。当`http://localhost:8080/`可以访问时，恭喜你开发环境运行起来了。\n\n然后修改一些代码，当你保存时，webpack会自动重新构建代码，并刷新浏览器。\n\n### 更多\n\n到目前为止你已经成功安装并运行了MorningUI开发环境。下面还有一些进阶的内容，可以帮助你更好的开发MorningUI。\n\n#### 项目结构\n\n```\nmorning\n├─ .babelrc                          // babel配置文件\n├─ .eslintignore                       // eslint检测忽略文件\n├─ .eslintrc.yml                       // eslint配置\n├─ .gitignore                         // git提交忽略文件\n├─ package-lock.json                 // npm包lock文件\n├─ package.json                      // npm配置文件\n├─ README.md                        // 介绍文件\n├─ build/                           // 构建脚本\n├─ dist/                            // UI库成品文件\n├─ docs/                            // 文档\n├─ report/                          // 测试报告\n├─ src/                             // 源码\n│   ├─ docs/                        // 文档源码\n│   └─ lib/                         // UI库源码\n└─ test/                            // 测试\n    ├─ helper                       // 测试辅助文件\n    ├─ unit                         // 单元测试\n    └─ e2e                          // 端点测试\n```\n\n#### 命令行工具\n\nMorningUI为开发者准备了一套命令来帮助快速开发：\n\n```shell\n$ npm run build                                 # 构建项目(库文件及文档)\n$ npm run dev                                   # 运行开发环境(运行后通过http://localhost:8080/访问)\n$ npm run lint                                  # 通过ESLint及StyleLint检查代码\n$ npm run js-lint                               # 通过ESLint检查代码\n$ npm run js-lint-fix                           # 通过ESLint自动修复代码中的问题\n$ npm run css-lint                              # 通过StyleLint检查代码\n$ npm run test                                  # 运行所有测试\n$ npm run test-watch                            # 当文件变化时执行测试\n$ npm run test-snapshot                         # 为所有测试进行快照\n$ npm run test-report                           # 生成测试报告\n$ npm run unit                                  # 运行单元测试\n$ npm run unit-watch                            # 当文件变化时执行单元测试\n$ npm run unit-snapshot                         # 为单元测试进行快照\n$ npm run e2e                                   # 运行端点测试\n$ npm run ci-e2e                                # 运行端点测试(持续集成时使用，限制了进程数)\n$ npm run e2e-watch                             # 当文件变化时执行端点测试\n$ npm run e2e-snapshot                          # 为端点测试进行快照\n$ npm run cover                                 # 检查测试覆盖\n$ npm run ci-cover                              # 检查测试覆盖(持续集成时使用，限制了进程数)\n$ npm run cover-report                          # 生成测试覆盖报告\n$ npm run codecov-report                        # 生成codecov测试覆盖报告\n$ npm run update-log-report                     # 根据Git Log生成组件更新日志\n$ npm run report                                # 生成所有测试报告\n$ npm run commit                                # 提交处理，包含：构建项目、生成测试报告\n$ npm run doc                                   # 启动文档服务，可通过`--port`参数设置服务监听端口\n```\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3f4119be", esExports)
  }
}

/***/ })

},[416]);