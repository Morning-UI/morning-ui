webpackJsonp([62],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(622);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27e28914_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(625);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(623)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27e28914_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/dropdown/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27e28914", Component.options)
  } else {
    hotAPI.reload("data-v-27e28914", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 623:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 624:
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
            page: 'dropdown'
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

module.exports = exports['default'];

/***/ }),

/***/ 625:
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
  }, [_vm._v("\n# 下拉式按钮组 `<ui-dropdown>`\n\n<doc-component-status page=\"dropdown\"></doc-component-status>\n\n[[[开始]]]\n\n定义下拉式按钮组，这是一个内联块元素。\n\n`ui-dropdown`内包含一组`ui-btn`或`ui-btngroup`，可以标记两个特定的按钮:\n\n- `slot=\"showbtn\"` : 标记默认显示的按钮\n- `emitbtn` : 标记触发按钮组的按钮。\n\n组件内支持一个向下箭头图标，可以通过`<i class=\"morningicon\">&#xe6b1;</i>`使用。\n\n#### 使用\n\n:::democode/html\n<ui-dropdown>\n    <ui-btn slot=\"showbtn\" emitbtn>更多 <i class=\"morningicon\">&#xe6b1;</i></ui-btn>\n    <ui-btn white>收藏</ui-btn>\n    <ui-btn white>修改</ui-btn>\n    <ui-btn danger>删除</ui-btn>\n</ui-dropdown>\n:::\n\n#### 分别标记`showbtn`和`emitbtn`\n\n分开标记`showbtn`和`emitbtn`，再配合`ui-btngroup`可以实现非常棒的效果。\n\n:::democode/html\n<ui-dropdown>\n    <ui-btngroup slot=\"showbtn\">\n        <ui-btn success>立即购买</ui-btn>\n        <!-- 这里的morningicon组件附带，可直接使用 -->\n        <ui-btn minor emitbtn><i class=\"morningicon\">&#xe6b1;</i></ui-btn>\n    </ui-btngroup>\n    <ui-btn info>加入购物车</ui-btn>\n    <!-- 这里的iconfont组件不附带 -->\n    <ui-btn white><i class=\"iconfont\">&#xe6e2;</i> 收藏</ui-btn>\n    <ui-btn white><i class=\"iconfont\">&#xe70a;</i> 分享</ui-btn>\n</ui-dropdown>\n:::\n\n[[[声明]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n下拉式按钮组不支持声明，但可通过`ui-btn` / `ui-btngroup`自身的声明来控制。\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|auto-close|点击下拉菜单中按钮后自动隐藏|`true`<br>`false`|Boolean|`true`|\n\n#### auto-close\n\n点击菜单中按钮后不会自动隐藏，需要点击`更多`来隐藏。\n\n:::democode/html\n<ui-dropdown :auto-close=\"false\">\n    <ui-btn slot=\"showbtn\" emitbtn>更多</ui-btn>\n    <ui-btn white>收藏</ui-btn>\n    <ui-btn white>修改</ui-btn>\n    <ui-btn danger>删除</ui-btn>\n</ui-dropdown>\n:::\n\n[[[方法]]]\n\n#### toggle([show])\n\n切换下拉按钮组是否显示。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|show|YES|指定按钮组需要切换到隐藏或显示，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<ui-dropdown ref=\"demo1\">\n    <ui-btn slot=\"showbtn\" emitbtn>更多 <i class=\"morningicon\">&#xe6b1;</i></ui-btn>\n    <ui-btn white>收藏</ui-btn>\n    <ui-btn white>修改</ui-btn>\n    <ui-btn danger>删除</ui-btn>\n</ui-dropdown>\n<br><br> \n<ui-link js=\"javascript:morning.findVM('demo1').toggle();\">切换相反状态</ui-link>\n<ui-link js=\"javascript:morning.findVM('demo1').toggle(true);\">切换至显示</ui-link>\n<ui-link js=\"javascript:morning.findVM('demo1').toggle(false);\">切换至隐藏</ui-link>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当按钮组显示或隐藏时触发`emit`事件。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo1.console1', 'emit event!');\n        }\n    }\n});\n---\n<div>\n    <ui-dropdown @emit=\"echo\">\n        <ui-btn slot=\"showbtn\" emitbtn>emit事件 <i class=\"morningicon\">&#xe6b1;</i></ui-btn>\n        <ui-btn white>收藏</ui-btn>\n        <ui-btn white>修改</ui-btn>\n        <ui-btn danger>删除</ui-btn>\n    </ui-dropdown>\n</div>\n:::\n\n#### show\n\n当按钮组显示时触发`show`事件。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo2.console1', 'show event!');\n        }\n    }\n});\n---\n<div>\n    <ui-dropdown @show=\"echo\">\n        <ui-btn slot=\"showbtn\" emitbtn>show事件 <i class=\"morningicon\">&#xe6b1;</i></ui-btn>\n        <ui-btn white>收藏</ui-btn>\n        <ui-btn white>修改</ui-btn>\n        <ui-btn danger>删除</ui-btn>\n    </ui-dropdown>\n</div>\n:::\n\n#### hide\n\n当按钮组隐藏时触发`hide`事件。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo3.console1', 'hide event!');\n        }\n    }\n});\n---\n<div>\n    <ui-dropdown @hide=\"echo\">\n        <ui-btn slot=\"showbtn\" emitbtn>hide事件 <i class=\"morningicon\">&#xe6b1;</i></ui-btn>\n        <ui-btn white>收藏</ui-btn>\n        <ui-btn white>修改</ui-btn>\n        <ui-btn danger>删除</ui-btn>\n    </ui-dropdown>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n           text : '下拉式按钮组',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demoEventLifecycle.console1', `${name} event!`);\n        }\n    }\n});\n---\n<div>\n    <ui-dropdown\n        ref=\"demoEventLifecycle\"\n        v-show=\"show\"\n        @created=\"echo('created')\"\n        @mounted=\"echo('mounted')\"\n        @before-update=\"echo('before-update')\"\n        @updated=\"echo('updated')\"\n        @before-destroy=\"echo('before-destroy')\"\n        @destroyed=\"echo('destroyed')\"\n    >\n\n        <ui-btn slot=\"showbtn\" emitbtn>{*text*} <i class=\"morningicon\">&#xe6b1;</i></ui-btn>\n        <ui-btn white>收藏</ui-btn>\n        <ui-btn white>修改</ui-btn>\n        <ui-btn danger>删除</ui-btn>\n\n    </ui-dropdown>\n\n    <br><br>\n\n    <ui-link js=\"javascript:window.demoEventLifecycle.text='生命周期事件';\">触发update</ui-link>\n    <ui-link js=\"javascript:morning.findVM('demoEventLifecycle').$destroy();\">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/dropdown/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-27e28914", esExports)
  }
}

/***/ })

},[621]);