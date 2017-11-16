webpackJsonp([66],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(642);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cca91326_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(645);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(643)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cca91326_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/dialog/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cca91326", Component.options)
  } else {
    hotAPI.reload("data-v-cca91326", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 643:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 644:
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
            page: 'dialog'
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 645:
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
  }, [_vm._v("\n# 模拟盒 `<ui-dialog>`\n\n<doc-component-status page=\"dialog\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个模拟盒，标准的模拟盒分为三部分：\n\n- 头部\n- 主体\n- 操作区(尾部)\n\n模拟盒支持两种不同的出现形式：\n\n- 上方出现：一般用在信息确认时，提供是或否的选择，较弱，尺寸一般较小。\n- 中间出现：一般用在填写内容或阅读内容时，较强，尺寸较大。\n- 直接出现：一般用在页面内容较多，对性能有要求的页面，较快(去除了动画带来的性能负担)。\n\n#### 使用\n\n:::democode/html\n<ui-dialog ref=\"demo1\"></ui-dialog>\n<ui-link js=\"window.morning.findVM('demo1').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n#### 带头部的模拟盒\n\n通过`<header slot=\"header\">`标签标记一个头部内容。\n\n:::democode/html\n<ui-dialog ref=\"demo2\">\n    <header slot=\"header\">This is title</header>\n</ui-dialog>\n<ui-link js=\"window.morning.findVM('demo2').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n#### 带关闭的头部\n\n头部标题也可以在`<h1>`标签中。\n\n:::democode/html\n<ui-dialog ref=\"demo3\">\n    <header slot=\"header\">\n        <h1>This is title</h1>\n        <ui-link dark-theme js=\"window.morning.findVM('demo3').toggle();\"><i class=\"iconfont\">&#xe62e;</i></ui-link>\n    </header>\n</ui-dialog>\n<ui-link js=\"window.morning.findVM('demo3').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n#### 当头部无内容时自动隐藏\n\n:::democode/html\n<ui-dialog ref=\"demo4\">\n    <header slot=\"header\"></header>\n</ui-dialog>\n<ui-link js=\"window.morning.findVM('demo4').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n#### 带尾部的模拟盒\n\n通过`<footer slot=\"footer\">`标签标记一个尾部内容。\n\n:::democode/html\n<ui-dialog ref=\"demo5\">\n    <footer slot=\"footer\">This is footer</footer>\n</ui-dialog>\n<ui-link js=\"window.morning.findVM('demo5').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n#### 带操作的尾部\n\n你可以在尾部的`<div>`中加入`ui-btn`和`ui-link`来实现可选操作。\n\n:::democode/html\n<ui-dialog ref=\"demo6\">\n    <footer slot=\"footer\">\n        <span>This is footer</span>\n        <div>\n            <ui-link class=\"margin\" minor js=\"window.morning.findVM('demo6').toggle();\">取消</ui-link>\n            <ui-btn success>确认</ui-btn>\n        </div>\n    </footer>\n</ui-dialog>\n<ui-link js=\"window.morning.findVM('demo6').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n#### 包含内容的模拟盒\n\n在组件内添加除`<header slot=\"header\">`和`<footer slot=\"footer\">`以外的元素会加载到模拟盒的主体部分。\n\n:::democode/html\n<ui-dialog ref=\"demo7\">\n    This is body.\n</ui-dialog>\n<ui-link js=\"window.morning.findVM('demo7').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n#### 包含HTML内容的模拟盒\n\n:::democode/html\n<ui-dialog ref=\"demo8\">\n    <ui-grid class=\"fill\">\n        <div class=\"c-7\">\n            <ui-center class=\"fill\"><p>LEFT</p></ui-center>\n        </div>\n        <div class=\"c-2\">\n            <ui-divider>OR</ui-divider>\n        </div>\n        <div class=\"c-7\">\n            <ui-center class=\"fill\"><p>RIGHT</p></ui-center>\n        </div>\n    </ui-grid>\n</ui-dialog>\n<ui-link js=\"window.morning.findVM('demo8').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n\n#### 包含头部/主体/尾部的模拟盒\n\n下面是一个完整的模拟盒内容推荐布局。\n\n:::democode/html\n<ui-dialog ref=\"demo9\" light-gray>\n    <header slot=\"header\">选择一张图片</header>\n    <ui-grid class=\"fill\">\n        <div class=\"c-7\">\n            <ui-center class=\"fill\"><ui-img class=\"rounded\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img></ui-center>\n        </div>\n        <div class=\"c-2\">\n            <ui-divider>OR</ui-divider>\n        </div>\n        <div class=\"c-7\">\n            <ui-center class=\"fill\"><ui-img class=\"rounded\" src=\"https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\"></ui-img></ui-center>\n        </div>\n    </ui-grid>\n    <footer slot=\"footer\">\n        <span>\n            需要帮助? <ui-link info xxs >获取帮助</ui-link>\n        </span>\n        <div>\n            <ui-link class=\"margin\" minor action=\"emit:toggle\">取消</ui-link>\n            <ui-btn success>左边</ui-btn>\n            <ui-btn success>右边</ui-btn>\n        </div>\n    </footer>\n</ui-dialog>\n<ui-link js=\"window.morning.findVM('demo9').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n#### 多层模拟盒\n\n模拟盒支持多层嵌套打开，组件会自动按照打开的顺序设置层级。(注意：使用时不用嵌套)\n\n:::democode/html\n<ui-dialog ref=\"demo10\" black width=\"60%\" height=\"60%\">\n    <header slot=\"header\">第一级</header>\n    <ui-link js=\"javascript:window.morning.findVM('demo11').toggle(true);\">显示第二级模拟盒</ui-link>\n</ui-dialog>\n\n<ui-dialog ref=\"demo11\" extra-light-black width=\"40%\" height=\"40%\">\n    <header slot=\"header\">第二级</header>\n    <ui-link js=\"javascript:window.morning.findVM('demo12').toggle(true);\">显示第三级模拟盒</ui-link>\n</ui-dialog>\n\n<ui-dialog ref=\"demo12\" light-blue width=\"20%\" height=\"20%\">\n    <header slot=\"header\">第三级</header>\n</ui-dialog>\n\n<ui-link js=\"window.morning.findVM('demo10').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|不支持|-|\n\n#### 色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<ui-dialog ref=\"demo{$colorKey}\" {$colorKey}>\n    <header slot=\"header\">This is title</header>\n    <footer slot=\"footer\">This is footer</footer>\n</ui-dialog>\n<ui-link js=\"window.morning.findVM('demo{$colorKey}').toggle(true);\" {$colorKey}>{$colorName}模拟盒</ui-link>\n\n<br>\n:::\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|width|模拟盒宽度|宽度数值（可以是`px`、`em`、`%`等任何css合法单位）|String|`'50%'`|\n|height|模拟盒高度|高度数值（可以是`px`、`em`、`%`等任何css合法单位）|String|`'50%'`|\n|auto-close|点击模拟盒以外的区域自动关闭模拟盒|`true`<br>`false`|Boolean|`true`|\n|show-type|模拟盒打开的方式|`top`:从上往下弹出<br>`center`:从中间弹出<br>`no`:无动画直接出现|String|`'top'`|\n\n#### width\n\n:::democode/html\n<ui-dialog ref=\"demo13\" width=\"200px\"></ui-dialog>\n<ui-link js=\"window.morning.findVM('demo13').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n:::democode/html\n<ui-dialog ref=\"demo14\" width=\"80%\"></ui-dialog>\n<ui-link js=\"window.morning.findVM('demo14').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n#### height\n\n:::democode/html\n<ui-dialog ref=\"demo15\" height=\"50px\"></ui-dialog>\n<ui-link js=\"window.morning.findVM('demo15').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n:::democode/html\n<ui-dialog ref=\"demo16\" height=\"80%\"></ui-dialog>\n<ui-link js=\"window.morning.findVM('demo16').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n#### auto-close\n\n设为`false`点击模拟盒以外的区域不会关闭模拟盒。\n\n:::democode/html\n<ui-dialog ref=\"demo17\" :auto-close=\"false\">\n    <header slot=\"header\">\n        <h1>点击外部区域不会关闭，需要点击右侧关闭</h1>\n        <ui-link dark-theme js=\"window.morning.findVM('demo17').toggle();\"><i class=\"iconfont\">&#xe62e;</i></ui-link>\n    </header>\n</ui-dialog>\n<ui-link js=\"window.morning.findVM('demo17').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n#### show-type\n\n:::democode/html\n<!-- 从上往下弹出 -->\n<ui-dialog ref=\"demo18\" show-type=\"top\"></ui-dialog>\n<ui-link js=\"window.morning.findVM('demo18').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n:::democode/html\n<!-- 从中间弹出 -->\n<ui-dialog ref=\"demo19\" show-type=\"center\"></ui-dialog>\n<ui-link js=\"window.morning.findVM('demo19').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n:::democode/html\n<!-- 无动画直接出现 -->\n<ui-dialog ref=\"demo20\" show-type=\"no\"></ui-dialog>\n<ui-link js=\"window.morning.findVM('demo20').toggle(true);\">显示模拟盒</ui-link>\n:::\n\n[[[方法]]]\n\n#### toggle([show])\n\n切换模拟盒显示状态。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n\n:::democode/html\n<ui-dialog ref=\"demo21\">\n    <ui-center class=\"fill\">\n        <ui-link js=\"window.morning.findVM('demo21').toggle(false);\">隐藏模拟盒</ui-link> &nbsp;\n        <ui-link js=\"window.morning.findVM('demo21').toggle();\">切换到反向状态</ui-link>\n    </ui-center>\n</ui-dialog>\n<ui-link js=\"window.morning.findVM('demo21').toggle(true);\">显示模拟盒</ui-link>\n<ui-link js=\"window.morning.findVM('demo21').toggle();\">切换到反向状态</ui-link>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当模拟盒切换显示状态时触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo22.console1', 'emit event!');\n        }\n    }\n});\n---\n<div>\n    <ui-dialog ref=\"demo22\" @emit=\"echo\">\n        <ui-center class=\"fill\">\n            <ui-link js=\"window.morning.findVM('demo22').toggle();\">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js=\"window.morning.findVM('demo22').toggle();\">显示模拟盒</ui-link>\n</div>\n:::\n\n#### show\n\n当模拟盒显示时触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo23.console1', 'show event!');\n        }\n    }\n});\n---\n<div>\n    <ui-dialog ref=\"demo23\" @show=\"echo\">\n        <ui-center class=\"fill\">\n            <ui-link js=\"window.morning.findVM('demo23').toggle();\">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js=\"window.morning.findVM('demo23').toggle();\">显示模拟盒</ui-link>\n</div>\n:::\n\n#### hide\n\n当模拟盒隐藏时触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo24.console1', 'hide event!');\n        }\n    }\n});\n---\n<div>\n    <ui-dialog ref=\"demo24\" @hide=\"echo\">\n        <ui-center class=\"fill\">\n            <ui-link js=\"window.morning.findVM('demo24').toggle();\">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js=\"window.morning.findVM('demo24').toggle();\">显示模拟盒</ui-link>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n           text : '模拟盒',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demoEventLifecycle.console1', `${name} event!`);\n        }\n    }\n});\n---\n<div>\n    <ui-dialog\n        ref=\"demoEventLifecycle\"\n        v-show=\"show\"\n        @created=\"echo('created')\"\n        @mounted=\"echo('mounted')\"\n        @before-update=\"echo('before-update')\"\n        @updated=\"echo('updated')\"\n        @before-destroy=\"echo('before-destroy')\"\n        @destroyed=\"echo('destroyed')\"\n    >\n        <ui-center class=\"fill\">\n            {*text*}\n            <ui-link js=\"window.morning.findVM('demoEventLifecycle').toggle();\">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js=\"window.morning.findVM('demoEventLifecycle').toggle();\">显示模拟盒</ui-link>\n\n    <br><br>\n\n    <ui-link js=\"javascript:window.demoEventLifecycle.text='生命周期事件';\">触发update</ui-link>\n    <ui-link js=\"javascript:morning.findVM('demoEventLifecycle').$destroy();\">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/dialog/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cca91326", esExports)
  }
}

/***/ })

},[641]);