webpackJsonp([25],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(442);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_006c2360_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(445);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(443)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_006c2360_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/commitcode/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-006c2360", Component.options)
  } else {
    hotAPI.reload("data-v-006c2360", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 443:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 444:
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
            page: 'commitcode'
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

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("doc-guide", { attrs: { page: _vm.page, hasPadding: true } }, [
    _c("script", { attrs: { type: "text/markdown" } }, [
      _vm._v(
        '\n\n# 提交代码\n\nMorning UI的协作开发基于Git的分支。\n\n### Git分支\n\nMorning UI的分支分为：\n\n- `master` : 正式版本发布的分支。\n- `dev` : 主开发分支，所有开发完毕但未发布的功能都会先合并至此。\n- `issue-[id]` : Issue开发分支，所有正在开发中的功能代码都会被提交至此分支。\n\n当你从一个issue开始，开发代码，提交代码到版本发布分为以下几个步骤：\n\n1. 标记Issue : 找到Issue，将Assignees指向你，并添加`in progress`标签，表示你正在开发中。\n2. 新建分支 : 从`dev`分支切出一个新的分支`issue-[id]`，其中id是issue的编号。\n3. 提交代码 : 将开发代码提交到这个分支上。\n4. Pull Request : 当所有开发完成之后，发起一个新的Pull Request来将代码合并到`dev`。\n5. 合入主开发分支 : 当Pull Request完成后，代码会被自动合入主开发分支`dev`。\n6. 版本发布 : 当一个版本下的所有Issue代码都被合入`dev`后，这些改动会被合入master，并添加版本tag，代码被正式发布。\n\n下面的内容将会进一步说明提交代码每一步需要做什么及注意的事项。\n\n### 标记Issue\n\n找到你想要处理的Issue，在标记之前请先确保此Issue**未处于**以下任何一个状态：\n\n- `need repro` : 需要提供更多信息复现内容，以确认问题\n- `pending` : 处于待定的Issue\n- `wont solve` : 暂时不会解决的Issue\n- `in progress` : 已经有人在处理\n- `in review` : 正在Code Review的Issue\n- `launched` : 已解决并发布的Issue\n- `discussion` : 这是一个讨论\n\n一般你可以选择处于下面这些状态，且没有指定Assignees的Issue：\n\n- `bug report` : BUG 报告，但还未确认是否是BUG\n- `bug confirmed` : 已经确认的Bug\n- `intend to solve` : 计划解决\n- `feature request` : 功能请求\n\n若一个Issue被指定了Assignees，请先和那个人商量到底由谁来处理。\n\n针对上面四个标签的Issue，在开始着手处理前，你需要添加一些额外的标记来告示别人你开始处理了：\n\n1. 首先将Assignees指向你自己\n2. 根据不同的标签做不同的处理：\n    - `bug confirmed` : 添加`in progress`\n    - `intend to solve` : 添加`in progress`，并移除`intend to solve`\n    - `feature request` : 添加`in progress` `feature`，并移除`feature request`\n    - `bug report` : 首先先确认BUG是存在的：\n        - 复现条件不足：请添加`need repro`标签\n        - 确认不是BUG：关闭Issue\n        - 可被复现：添加`bug confirmed` `in progress` `fix`，并移除`bug report`。若你只想确认这个BUG不想修复，也可以不添加`in progress` `fix`。\n\n完成上面的操作后，你需要创建一个新的分支来处理Issue。\n\n> 注意：目前新增功能、优化代码、更新逻辑等处理都被认为是`feature`。\n\n### 新建分支\n\n在你的本地项目中切换到`dev`分支：`git checkout dev`，然后执行`git pull`确保代码库是最新的。\n\n接下来为要处理的Issue新建一个名为`issue-[Issue ID]`的分支，其中`[Issue ID]`替换成Git上的Issue ID，你可以在下面的地方找到：\n\n<img src="https://h0.hucdn.com/open/201743/9498878cf00b0e68_922x180.png" width="300" alt="">\n\n注意不需要加上`#`，比如上图中的Issue你需要执行：`git checkout -b issue-1`。\n\n接下来就可以正式编码了。\n\n### 提交代码\n\n当你完成改动后，使用`git add`和`git commit`命令提交你的改动，请在提交前确保处在正确的分支上。\n\n`git commit`的信息请确保是可以描述你改动的一句话，避免使用无意义的提交信息，比如：`update`等。\n\n然后通过`git push`将代码推送到Github，首次推送新分支时需要使用`git push --set-upstream origin [分支名]`。\n\n### Pull Request\n\n当你完成了所有的编码工作，前往：`https://github.com/Morning-UI/morning-ui/pulls`，点击`New pull request`：\n\n<img src="https://h0.hucdn.com/open/201743/7e973819a866761f_2010x240.png" alt="" width="700">\n\n然后`base`选择`dev`，`compare`选择你的分支，然后你可以看到：\n\n<img src="https://h0.hucdn.com/open/201743/5e4e7f5309fbc627_1708x456.png" alt="" width="600">\n\n> 若显示无法自动合并分支，请先在本地处理完冲突的改动。\n\n点击`Create pull request`：\n\n<img src="https://h0.hucdn.com/open/201743/7ad9a3006740642f_1988x828.png" alt="" width="600">\n\n按照上面的示例，写清楚你改动的内容及注意事项，指定贡献者为你Code Review。或者也可以添加`Request Review`标签让其他贡献者为你Code Review。\n\n若Review中存在问题你们可在`pull request`下面进行讨论，当进行Code Review的贡献者通过后，会增加`Accept Pull Request`的标签，接下来项目管理员会对代码进行合并。\n\n关于Reviwe详见：[指出问题及沟通](/guide/review.html#指出问题及沟通)\n\n### 合入主开发分支\n\n当你的`pull request`满足下面的条件：\n\n- 可被自动合并\n- 通过Code Review并有`Accept Pull Request`标签\n- 通过持续集成\n\n项目管理员会将你的代码合并至主开发分支。\n\n### 版本发布\n\n当项目管理员合并完版本中的所有`pull request`之后，会将主开发分支代码合入`master`。然后发布版本。\n\n'
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
    require("vue-hot-reload-api")      .rerender("data-v-006c2360", esExports)
  }
}

/***/ })

},[441]);