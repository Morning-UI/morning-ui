webpackJsonp([38],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(507);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57641eb4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(510);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(508)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57641eb4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/tab/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57641eb4", Component.options)
  } else {
    hotAPI.reload("data-v-57641eb4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 508:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 509:
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
            page: 'tab'
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

module.exports = exports['default'];

/***/ }),

/***/ 510:
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
  }, [_vm._v("\n# 标签页 `<ui-tab>`\n\n<doc-component-status page=\"tab\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个标签页，标签页支持嵌套。\n\n使用`slot`属性标记内容对应的标签名，标签名是唯一索引，所以`slot`不能重复。\n\n标签页支持多种样式，通过不同的样式类来区分。\n\n#### 使用\n\n:::democode/html\n<ui-tab>\n    <div slot=\"第一页\">第一页</div>\n    <div slot=\"第二页\">第二页</div>\n    <div slot=\"第三页\">第三页</div>\n</ui-tab>\n:::\n\n#### 区块标签页\n\n:::democode/html\n<ui-tab class=\"block\">\n    <div slot=\"第一页\">第一页</div>\n    <div slot=\"第二页\">第二页</div>\n    <div slot=\"第三页\">第三页</div>\n</ui-tab>\n:::\n\n#### 下划线标签页\n\n:::democode/html\n<ui-tab class=\"underline\">\n    <div slot=\"第一页\">第一页</div>\n    <div slot=\"第二页\">第二页</div>\n    <div slot=\"第三页\">第三页</div>\n</ui-tab>\n:::\n\n#### 无边框标签页\n\n无边框标签页一般配合下划线使用。\n\n:::democode/html\n<ui-tab class=\"underline noborder\">\n    <div slot=\"第一页\">第一页</div>\n    <div slot=\"第二页\">第二页</div>\n    <div slot=\"第三页\">第三页</div>\n</ui-tab>\n:::\n\n#### 嵌套使用\n\n:::democode/html\n<ui-tab class=\"block noborder\">\n    <div slot=\"A\">\n        <ui-tab class=\"underline noborder\">\n            <div slot=\"A1\">\n                <ui-tab>\n                    <div slot=\"A11\">A11</div>\n                    <div slot=\"A12\">A12</div>\n                    <div slot=\"A13\">A13</div>\n                </ui-tab>\n            </div>\n            <div slot=\"A2\">A2</div>\n            <div slot=\"A3\">A3</div>\n        </ui-tab>\n    </div>\n    <div slot=\"B\">B</div>\n    <div slot=\"C\">C</div>\n</ui-tab>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href=\"/guide/status.html\">查看形态文档</a>\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|tab|需要展示的tab|`slot`(标签名)|String|第一个标签名|\n|prepend|在对应标签名之前插入内容(可以是HTML，一般用于插入icon)。若标签名在此对象中未找到则什么都不插入。|需要插入内容的hash(键名对应标签名，键值是需要插入的内容)|Object|`{}`|\n|append|在对应标签名之后插入内容(可以是HTML，一般用于插入icon)。若标签名在此对象中未找到则什么都不插入。|需要插入内容的hash(键名对应标签名，键值是需要插入的内容)|Object|`{}`|\n\n#### tab\n\n:::democode/html\n<!-- 默认展示第三页 -->\n<ui-tab tab=\"第三页\">\n    <div slot=\"第一页\">第一页</div>\n    <div slot=\"第二页\">第二页</div>\n    <div slot=\"第三页\">第三页</div>\n</ui-tab>\n:::\n\n#### prepend\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n            // 需要插入的内容\n            prepend : {\n                '应用' : '" + _vm._s('<i class="iconfont">&#xe601;</i> ') + "',\n                '标签' : '" + _vm._s('<i class="iconfont">&#xe815;</i> ') + "'\n            }\n        }\n    }\n});\n---\n<div>\n    <ui-tab\n        :prepend=\"prepend\"\n    >\n        <div slot=\"应用\">应用</div>\n        <div slot=\"标签\">标签</div>\n        <div slot=\"其他\">其他</div>\n    </ui-tab>\n</div>\n:::\n\n#### append\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n            // 需要插入的内容\n            append : {\n                '应用' : '" + _vm._s(' <i class="iconfont">&#xe601;</i>') + "',\n                '标签' : '" + _vm._s(' <i class="iconfont">&#xe815;</i>') + "'\n            }\n        }\n    }\n});\n---\n<div>\n    <ui-tab\n        :append=\"append\"\n    >\n        <div slot=\"应用\">应用</div>\n        <div slot=\"标签\">标签</div>\n        <div slot=\"其他\">其他</div>\n    </ui-tab>\n</div>\n:::\n\n[[[方法]]]\n\n#### switch(name)\n\n切换到指定的标签。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|name|NO|切换到的标签名|标签的名称`slot`|`String`|`undefined`|\n\n:::democode/html\n<ui-tab ref=\"demo3\">\n    <div slot=\"第一页\">第一页</div>\n    <div slot=\"第二页\">第二页</div>\n    <div slot=\"第三页\">第三页</div>\n</ui-tab>\n<br><br> \n<ui-link js=\"morning.findVM('demo3').switch('第一页');\">切换到第一页</ui-link>\n<ui-link js=\"morning.findVM('demo3').switch('第二页');\">切换到第二页</ui-link>\n<ui-link js=\"morning.findVM('demo3').switch('第三页');\">切换到第三页</ui-link>\n:::\n\n#### next()\n\n切换到下一个标签，若是最后一个则切换到第一个。\n\n:::democode/html\n<ui-tab ref=\"demo4\">\n    <div slot=\"第一页\">第一页</div>\n    <div slot=\"第二页\">第二页</div>\n    <div slot=\"第三页\">第三页</div>\n</ui-tab>\n<br><br> \n<ui-link js=\"morning.findVM('demo4').next();\">切换到下一个标签</ui-link>\n:::\n\n#### prev()\n\n切换到上一个标签，若是第一个则切换到最后一个。\n\n:::democode/html\n<ui-tab ref=\"demo5\">\n    <div slot=\"第一页\">第一页</div>\n    <div slot=\"第二页\">第二页</div>\n    <div slot=\"第三页\">第三页</div>\n</ui-tab>\n<br><br>\n<ui-link js=\"morning.findVM('demo5').prev();\">切换到上一个标签</ui-link>\n:::\n\n[[[事件]]]\n\n#### switch\n\n当标签页切换后触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo6.console1', 'switch event!');\n        }\n    }\n});\n---\n<div>\n    <ui-tab @switch=\"echo\" ref=\"demo6\">\n        <div slot=\"第一页\">第一页</div>\n        <div slot=\"第二页\">第二页</div>\n        <div slot=\"第三页\">第三页</div>\n    </ui-tab>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n           text : '标签页',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demoEventLifecycle.console1', `${name} event!`);\n        }\n    }\n});\n---\n<div>\n    <ui-tab\n        ref=\"demoEventLifecycle\"\n        v-show=\"show\"\n        @created=\"echo('created')\"\n        @mounted=\"echo('mounted')\"\n        @before-update=\"echo('before-update')\"\n        @updated=\"echo('updated')\"\n        @before-destroy=\"echo('before-destroy')\"\n        @destroyed=\"echo('destroyed')\"\n    >\n        <div slot=\"第一页\">{*text*}</div>\n        <div slot=\"第二页\">第二页</div>\n        <div slot=\"第三页\">第三页</div>\n    </ui-tab>\n\n    <br><br>\n\n    <ui-link js=\"window.demoEventLifecycle.text='生命周期事件';\">触发update</ui-link>\n    <ui-link js=\"morning.findVM('demoEventLifecycle').$destroy();\">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/tab/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57641eb4", esExports)
  }
}

/***/ })

},[506]);