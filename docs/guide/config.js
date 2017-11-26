webpackJsonp([22],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(427);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40113070_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(430);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(428)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40113070_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/config/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40113070", Component.options)
  } else {
    hotAPI.reload("data-v-40113070", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 428:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 429:
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
            page: 'config'
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 430:
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
  }, [_vm._v("\n# 配置\n\n配置可以为组件提供不同的JS逻辑或样式。只有交互和表单组件支持配置，因为样式组件不支持JS逻辑。\n\n配置与形态的区别：\n\n- 形态是一种通用的组件属性，可以区分样式及JS逻辑，有一套全局的规范，大部分组件都支持。\n- 不通的组件可以有不同的配置，常用于区分JS逻辑，也可以区分样式，全局仅在命名上有规范，只有交互和表单组件支持。\n\n### 初始化配置\n\n在使用组件时，可以在组件标签`<ui-*>`的`attr`属性中传入初始化配置：\n\n:::democode/html\n<!-- ui-btn设置link配置 -->\n<!-- 配置名称是: link -->\n<!-- 配置数值是: https://www.google.com -->\n<ui-btn new-tab link=\"https://www.google.com\">Google</ui-btn>\n:::\n\n键名为配置的名称，键值是配置的数值。\n\n由于初始化配置基于`Vue`的`props`，你也可以使用`v-bind`来传入配置，或使用JavaScript表达式。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        link : 'https://www.google.com'\n    }\n});\n---\n<div>\n    <!-- 通过v-bind为ui-btn设置link -->\n    <ui-btn new-tab :link=\"link\">Google</ui-btn>\n\n    <!-- 通过JavaScript表达式为ui-btn设置link -->\n    <ui-btn new-tab :link=\"'https://www.google.com'\">Google</ui-btn>\n</div>\n:::\n\n更多用法见:[Vue/模板语法](https://cn.vuejs.org/v2/guide/syntax.html)。\n\n### camelCase 和 kebab-case\n\nHTML特性是不区分大小写的。所以，当配置的名称是camelCased(驼峰式)命名的prop，在HTML中需要转换为相对应的kebab-case(短横线隔开式)命名：\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        link : 'https://www.google.com'\n    }\n});\n---\n<div>\n    <!-- new-tab在HTML中是kebab-case命名 -->\n    <ui-btn ref=\"demo3\" new-tab :link=\"link\">Google</ui-btn>\n</div>\n:::\n\n### 单向数据流\n\n配置是基于Vue的[Prop](https://cn.vuejs.org/v2/guide/components.html#Prop)实现的，所以具有`Prop`的特性。\n\n使用`v-bind`初始化配置时，配置会和父实例的数据发生变化时，将传导给组件的配置，但是反过来不会。在上面的示例中这意味着：\n\n- 当组件的配置`link`发生变更时，并不会同步到父实例的`link`中\n- 当父实例的`link`发生变更时，会同步到组件的配置`link`中\n\n:::vue/html\nvar demo2 = new Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        link : 'https://www.google.com'\n    }\n});\n\n// 组件的配置`link`改变时，父实例获取不到变化的配置\nmorning.findVM('demo2').conf.link = 'https://www.baidu.com';\nconsole.log('demo2.console1', demo2.link); // `https://www.google.com`\n\n// 父实例的`link`改变会同步到组件的配置中\ndemo2.link = 'https://bing.com';\nVue.nextTick(() => {\n    console.log('demo2.console2', morning.findVM('demo2').getConf().link); // `https://bing.com`\n});\n---\n<div>\n    <!-- 通过v-bind为ui-btn设置link -->\n    <ui-btn ref=\"demo2\" new-tab :link=\"link\">Google</ui-btn>\n</div>\n:::\n\n下面有张图可以帮助你更好的理解上面的概念：\n\n<img src=\"http://h0.hucdn.com/open/201746/cd9651aaab8bcc76_1300x213.png\" width=\"650\" alt=\"\">\n\n父实例的配置变化时，会引起`Prop`的变化，`Prop`的变化会同步到组件的配置`vm.conf`中。\n\n### 获取配置\n\n获取组件的配置应该使用组件上的`getConf()`方法，这个方法会对组件的配置进行一次拷贝然后返回，避免对配置的意外修改。\n\n#### getConf([name])\n\n##### 参数\n\n|参数|可选|描述|类型|\n|-|-|-|-|\n|name|YES|获取的配置key，若不传则返回包含所有配置的对象|`undefined` `string`|\n\n##### 返回值\n\n单项配置数值，或包含所有配置的对象，键名是配置的名称，键值是配置的数值。返回的配置内容经过拷贝，所以修改返回值并不会影响组件当前的配置。\n\n### 配置属性\n\n任何一项配置都包含五个关键属性：\n\n- key : 配置的名称\n- desc : 配置描述\n- accept : 接受值(可以是一个范围，也可以是几个值)\n- type : 值类型\n- default : 默认值\n\n组件的逻辑及文档必须响应这些关键属性。\n\n### 独立性\n\n不同的配置之间应该是相互独立的，尽可能是无依赖的。\n\n### 配置全局命名规范\n\n配置在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。\n\n在为组件添加配置前应先检查下面的列表，是否有含义相同的配置，若有请使用，若没有请将新的配置添加到下面列表并注明它的含义。\n\n- `size` : 尺寸\n- `color` : 颜色\n- `state` : 状态\n- `link` : 链接\n- `js` : JS代码\n- `locked` : 锁定\n- `new-tab` : 新标签\n- `auto-close` : 点击组件外区域关闭\n- `tab` : 标签\n- `prepend` : 在之后插入\n- `append` : 在之前插入\n- `width` : 宽度\n- `height` : 高度\n- `show-type` : 展示方式\n- `time` : 时间\n- `note` : 提示\n- `root-name` : 跟节点名称\n- `choose-root` : 选择跟节点\n- `list` : 内容列表\n- `max-history` : 最大历史纪录\n- `target` : 目标\n- `placement` : 位置\n- `offset` : 偏移量\n- `trigger` : 触发类型\n- `form-name` : 表单名\n- `form-key` : 表单Key\n- `group` : 表单组\n- `default-value` : 表单默认值\n- `hide-name` : 隐藏表单名\n- `hide-value` : 表单数值不可见\n- `rows` : 行数\n- `auto-hide-name` : 自动隐藏表单名\n- `max-show` : 最大显示项目\n- `can-search` : 可搜索\n- `multi-select` : 多选\n- `max` : 最大可输入项目\n- `clean-btn` : 清空按钮\n- `inline-img-size` : 内联图片尺寸\n- `item-tip` : 项目提示\n- `item-tip-direct` : 项目提示方向\n- `accept-html` : 可使用HTML\n- `can-move` : 可移动\n- `total` : 总数\n- `page-size` : 每页数量\n- `page` : 页数\n- `jump-page` : 跳转页面\n- `item-name` : 项目名称\n- `item-filler` : 项目填充\n- `input-type` : 输入类型\n- `batch-reg` : 批量输入正则表达式\n- `batch-filler` : 批量输入填充\n- `batch-uniq` : 批量输入去重\n- `empty-cell-value` : 空单元格的数值\n- `title` : 标题\n- `zebra-pattern` : 斑马线\n- `vertical-border` : 竖向边框\n- `horizontal-border` : 横向边框\n- `align` : 对齐\n- `show-col-name` : 显示列名称\n- `fixed-title-col` : 固定标题列\n- `col-set` : 列设置\n- `row-set` : 行设置\n- `cell-set` : 单元格设置\n- `export-csv` : 导出CSV文件\n- `csv-name` : CSV文件的名称\n- `close-btn` : 关闭按钮\n- `close-time` : 关闭时间\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-40113070", esExports)
  }
}

/***/ })

},[426]);