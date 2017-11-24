webpackJsonp([50],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(567);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4677bf98_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(570);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(568)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4677bf98_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/message/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4677bf98", Component.options)
  } else {
    hotAPI.reload("data-v-4677bf98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 568:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 569:
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
            page: 'message'
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

module.exports = exports['default'];

/***/ }),

/***/ 570:
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
  }, [_vm._v("\n# 消息 `<ui-message>`\n\n<doc-component-status page=\"message\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个消息组件，这是一个块元素。\n\n由于消息组件是固定展示在页面的几个位置中的，所以同位置一般只会存在一个消息组件，可以通过`show-type`配置来设置。\n\n消息的推送通过`.push()`方法，主要有两种情况：\n\n- 仅消息 : 调用消息组件的`.push(message)`方法并传入一个字符串座位消息内容。\n- 有标题或配色 : 调用消息组件的`.push(option)`方法传入一个配置对象，对象的属性包括：\n    - `title` : 消息标题(String，可选)，若为空则不显示消息的标题\n    - `message` : 消息内容(String，必需)\n    - `color` : 消息的配色(String，可选，默认`theme`配色)，支持[形态/颜色](/guide/status.html#颜色)中的所有颜色。\n\n#### 使用\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo1\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo1').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n:::\n\n#### 标题\n\n通过配置消息对象的`title`属性来添加标题：\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo1\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo1').push({title:'这是标题', message: '这是消息的内容'});\">推送一条消息</ui-link>\n</div>\n:::\n\n#### 配色\n\n通过配置消息对象的`color`属性来添加配置：\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo1\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo1').push({color:'success', message: '这是消息的内容'});\">推送一条消息</ui-link>\n</div>\n:::\n\n#### 消息的位置\n\n你可以设置`show-type`配置，决定消息从哪个方向展示，消息组件支持的位置有：\n\n- `top`\n- `topleft`\n- `topright`\n- `bottom`\n- `bottomleft`\n- `bottomright`\n\n当消息展示在屏幕上方时，越靠上的消息越新。当消息展示在屏幕下方时，越靠下的消息越新。\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo2\" show-type=\"topleft\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo2').push('屏幕左上消息('+new Date()+')');\">屏幕左上消息</ui-link>\n</div>\n<div>\n    <ui-message ref=\"demo3\" show-type=\"top\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo3').push('屏幕上方消息('+new Date()+')');\">屏幕上方消息</ui-link>\n</div>\n<div>\n    <ui-message ref=\"demo4\" show-type=\"topright\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo4').push('屏幕右上消息('+new Date()+')');\">屏幕右上消息</ui-link>\n</div>\n<div>\n    <ui-message ref=\"demo5\" show-type=\"bottomright\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo5').push('屏幕右上消息('+new Date()+')');\">屏幕右下消息</ui-link>\n</div>\n<div>\n    <ui-message ref=\"demo6\" show-type=\"bottom\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo6').push('屏幕右上消息('+new Date()+')');\">屏幕下方消息</ui-link>\n</div>\n<div>\n    <ui-message ref=\"demo7\" show-type=\"bottomleft\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo7').push('屏幕右上消息('+new Date()+')');\">屏幕左下消息</ui-link>\n</div>\n:::\n\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/message/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4677bf98", esExports)
  }
}

/***/ })

},[566]);