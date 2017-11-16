webpackJsonp([50],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(562);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_067569ea_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(565);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(563)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_067569ea_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/load/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-067569ea", Component.options)
  } else {
    hotAPI.reload("data-v-067569ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 563:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 564:
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
            page: 'load'
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

module.exports = exports['default'];

/***/ }),

/***/ 565:
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
  }, [_vm._v("\n# 加载 `<ui-load>`\n\n<doc-component-status page=\"load\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个加载，加载可以通过时间或`Promise`控制载入状态：\n\n- 时间：一定时间后载入内容，一般用来异步载入内容，减少首屏渲染压力。\n- Promise：一般用于异步加载内容，当内容获取后完成`Promise`显示内容。\n\n加载的内容为`ui-load`的内容。\n\n当内容未载入时，加载会在内容区域显示一个`loading`标识，当内容载入后会渲染内容。\n\n当内容载入失败时加载会提示用户载入失败。\n\n#### 使用\n\n:::democode/html\n<div style=\"width:400px;height:200px;background: #f6f6f6\">\n    <!-- 默认0.2秒后加载成功 -->\n    <ui-load>0.2秒后加载成功</ui-load>\n</div>\n:::\n\n#### 5秒后加载成功\n\n:::democode/html\n<div style=\"width:400px;height:200px;background: #f6f6f6\">\n    <ui-load :time=\"5000\">5秒后加载成功</ui-load>\n</div>\n:::\n\n#### 使用Promise完成加载\n\n:::democode/html\n<div style=\"width:400px;height:200px;background: #f6f6f6\">\n    <ui-load ref=\"demo1\" :time=\"false\">加载成功</ui-load>\n</div>\n<ui-link js=\"window.morning.findVM('demo1').resolve();\">完成加载</ui-link>\n:::\n\n#### 使用Promise失败加载\n\n:::democode/html\n<div style=\"width:400px;height:200px;background: #f6f6f6\">\n    <ui-load ref=\"demo2\" :time=\"false\">加载失败</ui-load>\n</div>\n<ui-link js=\"window.morning.findVM('demo2').reject();\">失败加载</ui-link>\n:::\n\n#### 带提示的加载\n\n:::democode/html\n<div style=\"width:400px;height:200px;background: #f6f6f6\">\n    <ui-load :time=\"false\" note=\"加载中\">加载成功</ui-load>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n\n#### 尺寸\n\n:::repeat/html\nsize\n---\n<div style=\"width:400px;height:200px;background: #f6f6f6\">\n    <ui-load {$sizeKey} :time=\"false\" note=\"{$sizeName}\">加载成功</ui-load>\n</div>\n:::\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|time|多少时间(ms)后完成加载，若设为false则需要手动完成或拒绝加载|时间值(ms)<br>`false`|Boolean<br>Number|`200`|\n|note|加载过程中的提示|提示字符串|String|`''`|\n\n#### time\n\n设定一段时间后加载完成。\n\n:::democode/html\n<div style=\"width:400px;height:200px;background: #f6f6f6\">\n    <ui-load :time=\"5000\">5秒后加载成功</ui-load>\n</div>\n:::\n\n#### note\n\n:::democode/html\n<div style=\"width:400px;height:200px;background: #f6f6f6\">\n    <ui-load :time=\"false\" note=\"加载中\">加载成功</ui-load>\n</div>\n:::\n\n[[[方法]]]\n\n#### resolve()\n\n完成加载，一般在远程请求成功获取数据后调用。\n\n:::democode/html\n<div style=\"width:400px;height:200px;background: #f6f6f6\">\n    <ui-load ref=\"demo3\" :time=\"false\">加载成功</ui-load>\n</div>\n<ui-link js=\"window.morning.findVM('demo3').resolve();\">完成加载</ui-link>\n:::\n\n#### reject()\n\n失败加载，一般在远程请求失败后调用。\n\n:::democode/html\n<div style=\"width:400px;height:200px;background: #f6f6f6\">\n    <ui-load ref=\"demo4\" :time=\"false\">加载成功</ui-load>\n</div>\n<ui-link js=\"window.morning.findVM('demo4').reject();\">失败加载</ui-link>\n:::\n\n#### reload()\n\n重新进入加载状态。\n\n:::democode/html\n<div style=\"width:400px;height:200px;background: #f6f6f6\">\n    <ui-load ref=\"demo5\" :time=\"3000\">加载成功</ui-load>\n</div>\n<ui-link js=\"window.morning.findVM('demo5').reload();\">重新加载</ui-link>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当加载完毕时触发，不管加载是否成功都会触发此事件。\n\n:::vue\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo6.console1', 'emit event!');\n        }\n    }\n});\n---\n<div>\n    <div style=\"width:400px;height:200px;background: #f6f6f6\">\n        <ui-load ref=\"demo6\" @emit=\"echo\" :time=\"false\">加载成功</ui-load>\n    </div>\n    <ui-link js=\"window.morning.findVM('demo6').resolve();\">触发emit</ui-link>\n</div>\n:::\n\n#### done\n\n当加载完毕并成功时触发。\n\n:::vue\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo7.console1', 'done event!');\n        }\n    }\n});\n---\n<div>\n    <div style=\"width:400px;height:200px;background: #f6f6f6\">\n        <ui-load ref=\"demo7\" @done=\"echo\" :time=\"false\">加载成功</ui-load>\n    </div>\n    <ui-link js=\"window.morning.findVM('demo7').resolve();\">触发done</ui-link>\n</div>\n:::\n\n#### fail\n\n当加载完毕并成功时触发。\n\n:::vue\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo8.console1', 'fail event!');\n        }\n    }\n});\n---\n<div>\n    <div style=\"width:400px;height:200px;background: #f6f6f6\">\n        <ui-load ref=\"demo8\" @fail=\"echo\" :time=\"false\">加载失败</ui-load>\n    </div>\n    <ui-link js=\"window.morning.findVM('demo8').reject();\">触发fail</ui-link>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n           text : '加载',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demoEventLifecycle.console1', `${name} event!`);\n        }\n    }\n});\n---\n<div>\n    <ui-load\n        ref=\"demoEventLifecycle\"\n        v-show=\"show\"\n        @created=\"echo('created')\"\n        @mounted=\"echo('mounted')\"\n        @before-update=\"echo('before-update')\"\n        @updated=\"echo('updated')\"\n        @before-destroy=\"echo('before-destroy')\"\n        @destroyed=\"echo('destroyed')\"\n    >{*text*}</ui-load>\n\n    <br><br>\n\n    <ui-link js=\"javascript:window.demoEventLifecycle.text='生命周期事件';\">触发update</ui-link>\n    <ui-link js=\"javascript:morning.findVM('demoEventLifecycle').$destroy();\">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/load/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-067569ea", esExports)
  }
}

/***/ })

},[561]);