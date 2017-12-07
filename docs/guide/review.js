webpackJsonp([10],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(342);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07993cf8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(345);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(343)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_07993cf8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/review/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07993cf8", Component.options)
  } else {
    hotAPI.reload("data-v-07993cf8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 343:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 344:
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
            page: 'review'
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

module.exports = exports['default'];

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("doc-guide", { attrs: { page: _vm.page, hasPadding: true } }, [
    _c("script", { attrs: { type: "text/markdown" } }, [
      _vm._v(
        "\n   # 检视代码(Review)\n\n   Review其他开发者贡献的代码也是一项非常重要的工作，带来的价值和贡献代码是一致的。\n\n   ### 成为一名Code Reviewer\n\n   请发送邮件至`chenchao.he@husor.com`。\n\n   ### 请求Review\n\n   当你开发并提交需要贡献的代码后，请在`Pull Request`中发起一个新的合并请求，合并的源分支是你的贡献分支，目标分支是`dev`。\n\n   在你的合并请求创建时，请添加`Request Review`标签。这个标签表示你的合并请求需要Review，你可以在`Reviewers`中指定特定的人来为你Review，否则将由任意贡献者为你Review代码。\n\n   详见：[Requesting a pull request review](https://help.github.com/articles/requesting-a-pull-request-review/)\n\n   > `dev`是项目的主开发分支，所有的贡献最终都会合并至此。最终由项目管理员通过版本发布的形式将代码提交至`master`分支。\n\n   ### 申请Review别人的代码\n\n   打开`Pull Request`页面，筛选出包含`Request Review`标签的合并请求，然后：\n\n   - 如果这个请求指定了`Reviewers`，并且不是你：请交给指定的人来Review，跳过这个合并请求\n   - 如果这个请求指定了`Reviewers`，并且是你：请打开这个合并请求，然后开始Review\n   - 如果这个请求没有指定`Reviewers`：打开它，然后将`Reviewers`改成你，然后开始Review\n\n   > 一个合并请求的`Reviewers`表明了当前正在Review的人是谁。\n\n   请务必逐条确认以上的事项，经过你Review的文档未来将会开发者指明方向。\n\n   ### 检视变更\n\n   Review需要耐心和细心，除了代码内容外，提交的文档、测试等内容也是Review的重点。\n\n   请务必确保`Pull Request`中的变更符合[开发规范](/guide/devrule.html)，经过你Review的代码未来将会构建成千上万的应用。\n\n   ### 指出问题及沟通\n\n   你可以在有问题的代码上开启一个`Review`，指出你的疑问或纠正错误。代码贡献者需要会在这个`Review`上和你沟通，直到达成一致。\n   \n   详见：\n   \n   - [About pull request reviews](https://help.github.com/articles/about-pull-request-reviews/)\n   - [Reviewing proposed changes in a pull request](https://help.github.com/articles/reviewing-proposed-changes-in-a-pull-request/)\n   - [Viewing a pull request review](https://help.github.com/articles/viewing-a-pull-request-review/)\n   - [Approving a pull request with required reviews](https://help.github.com/articles/approving-a-pull-request-with-required-reviews/)\n   - [Dismissing a pull request review](https://help.github.com/articles/dismissing-a-pull-request-review/)\n   - [Checking out pull requests locally](https://help.github.com/articles/checking-out-pull-requests-locally/)\n\n   ### 持续集成\n\n   持续集成中包含了很多自动化的检查，如果一个合并请求未通过持续集成，请通知代码贡献者。在持续集成通过后再开始Review。\n\n   ### 允许合并\n\n   当所有的`Review`都达成一致后，且通过持续集成，这个合并请求可被合并。添加`Accept Pull Request`标签并移除`Request Review\n`标签，恭喜你完成了一次代码Review贡献。后续会有项目管理员对代码进行合并。\n\n   > 合并前请务必确认目标分支是`dev`，否则通知代码贡献者修改合并请求。\n   \n   "
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-07993cf8", esExports)
  }
}

/***/ })

},[341]);