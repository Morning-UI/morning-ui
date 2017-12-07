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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c7b5e32_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(570);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(568)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c7b5e32_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/message/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c7b5e32", Component.options)
  } else {
    hotAPI.reload("data-v-7c7b5e32", Component.options)
' + '  }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("doc-component", { attrs: { page: _vm.page, hasPadding: true } }, [
    _c("script", { attrs: { type: "text/markdown" } }, [
      _vm._v(
        "\n# 消息 `<ui-message>`\n\n<doc-component-status page=\"message\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个消息组件，这是一个块元素。\n\n由于消息组件是固定展示在页面的几个位置中的，所以同位置一般只会存在一个消息组件，可以通过`show-type`配置来设置。如果将两个消息组件配置在同一位置，同时有消息时，后使用的消息组件将会覆盖之前的消息组件。\n\n消息的推送通过`.push()`方法，主要有两种情况：\n\n- 仅消息 : 调用消息组件的`.push(message)`方法并传入一个字符串座位消息内容。\n- 有标题或配色 : 调用消息组件的`.push(option)`方法传入一个配置对象，对象的属性包括：\n    - `title` : 消息标题(String，可选)，若为空则不显示消息的标题\n    - `message` : 消息内容(String，必需)\n    - `color` : 消息的配色(String，可选，默认`theme`配色)，支持[形态/颜色](/guide/status.html#颜色)中的所有颜色。\n\n> 使用时应注意，消息组件仅用于向用户传到信息，不应该包括可交互的行动元素。\n\n#### 使用\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo1\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo1').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n:::\n\n#### 标题\n\n通过配置消息对象的`title`属性来添加标题：\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo1\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo1').push({title:'这是标题', message: '这是消息的内容'});\">推送一条消息</ui-link>\n</div>\n:::\n\n#### 配色\n\n通过配置消息对象的`color`属性来添加配置：\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo1\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo1').push({color:'success', message: '这是消息的内容'});\">推送一条消息</ui-link>\n</div>\n:::\n\n#### 消息的位置\n\n你可以设置`show-type`配置，决定消息从哪个方向展示，消息组件支持的位置有：\n\n- `top`\n- `topleft`\n- `topright`\n- `bottom`\n- `bottomleft`\n- `bottomright`\n\n当消息展示在屏幕上方时，越靠上的消息越新。当消息展示在屏幕下方时，越靠下的消息越新。\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo2\" show-type=\"topleft\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo2').push('屏幕左上消息('+new Date()+')');\">屏幕左上消息</ui-link>\n</div>\n<div>\n    <ui-message ref=\"demo3\" show-type=\"top\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo3').push('屏幕上方消息('+new Date()+')');\">屏幕上方消息</ui-link>\n</div>\n<div>\n    <ui-message ref=\"demo4\" show-type=\"topright\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo4').push('屏幕右上消息('+new Date()+')');\">屏幕右上消息</ui-link>\n</div>\n<div>\n    <ui-message ref=\"demo5\" show-type=\"bottomright\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo5').push('屏幕右上消息('+new Date()+')');\">屏幕右下消息</ui-link>\n</div>\n<div>\n    <ui-message ref=\"demo6\" show-type=\"bottom\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo6').push('屏幕右上消息('+new Date()+')');\">屏幕下方消息</ui-link>\n</div>\n<div>\n    <ui-message ref=\"demo7\" show-type=\"bottomleft\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo7').push('屏幕右上消息('+new Date()+')');\">屏幕左下消息</ui-link>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n消息组件本身不支持形态，但在发送消息时可以通过`color`来对每条消息的色彩进行控制。\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<div>\n    <ui-message ref=\"demo{$colorKey}\"></ui-message>\n    <ui-link color=\"{$colorKey}\" js=\"window.morning.findVM('demo{$colorKey}').push({color:'{$colorKey}', message: '这是{$colorName}的消息'});\">推送一条{$colorName}消息</ui-link>\n</div>\n:::\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[close-btn](#close-btn)|是否显示关闭消息的按钮，开启后用户可以主动关闭消息，否则消息会在`close-time`设置的时间后消失|`true`<br>`false`|Boolean|`false`|\n|[close-time](#close-time)|消息在多久之后关闭|数字：时间(毫秒)<br>`false` : 不会定时关闭，需要通过`close-btn`关闭|Number<br>Boolean|`4000`|\n|[show-type](#show-type)|消息出现的位置|`'top'` : 上方<br>`'topleft'` : 左上角<br>`'topright'` : 右上角<br>`'bottom'` : 下方<br>`'bottomleft'` : 左下角<br>`'bottomright'` : 右下角|String|`'top'`|\n|[max-show](#max-show)|同时最多显示几条消息(仅针对当前的消息组件)，当有新的消息时，超出`max-show`的消息会被暂时隐藏。如果新的消息被手动关闭，被暂时隐藏的消息会重新显示，直至超过`close-time`。若设为`false`时则显示全部消息|Number : 最多显示消息的数量<br>`false` : 显示所有|Number<br>Boolean|`2`|\n\n#### close-btn\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo8\" :close-btn=\"true\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo8').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n:::\n\n#### close-time\n\n将关闭时间缩短到1秒：\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo9\" :close-time=\"1000\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo9').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n:::\n\n将关闭时间设置为`false`，必需通过关闭按钮来关闭消息：\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo17\" :close-time=\"false\" :close-btn=\"true\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo17').push('必需通过按钮关闭的消息');\">推送一条新消息</ui-link>\n</div>\n:::\n\n#### show-type\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo10\" show-type=\"bottom\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo10').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n:::\n\n#### max-show\n\n最多显示1条：\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo11\" :max-show=\"1\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo11').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n:::\n\n不限制显示条数：\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo12\" :max-show=\"false\" show-type=\"topleft\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo12').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n:::\n\n[[[方法]]]\n\n#### push(option)\n\n推送一条消息，这个方法将返回一个消息ID，调用`.close`方法并传入消息ID可以关闭这条消息。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|option|NO|如果是字符串，则将字符串内容作为消息内容发送。<br><br>如果是对象，则认为是消息配置对象，包含：<br>`title` : 消息标题(String，可选)，若为空则不显示消息的标题<br>`message` : 消息内容(String，必需)<br>`color` : 消息的配色(String，可选，默认`theme`配色)，支持[形态/颜色](/guide/status.html#颜色)中的所有颜色。|消息内容的字符串<br>消息配置对象|`String`<br>`Object`|`undefined`|\n\n直接发送消息：\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo13\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo13').push('一条新消息('+new Date()+')');\">推送一条新消息</ui-link>\n</div>\n:::\n\n通过配置对象发送：\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo14\" show-type=\"topleft\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo14').push({title:'这是标题', message: '这是消息的内容', color: 'warning'});\">推送一条消息</ui-link>\n</div>\n:::\n\n#### close(id)\n\n推送一条消息，这个方法将返回一个消息ID，调用`.close`方法并传入消息ID可以关闭这条消息。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|id|NO|需要关闭消息的ID，通过`.push`方法获取。|消息ID|`Number`|`undefined`|\n\n:::democode/html\n<div>\n    <ui-message ref=\"demo14\" :close-time=\"30000\" show-type=\"topright\"></ui-message>\n    <ui-link js=\"alert(window.demo15id = window.morning.findVM('demo14').push('一条新消息('+new Date()+')'))\">推送一条新消息，并获取消息ID</ui-link><br>\n    <ui-link js=\"window.morning.findVM('demo14').close(window.demo15id)\">通过消息ID关闭消息</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n#### push\n\n当新消息推送时触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo15.console1', 'push event!');\n        }\n    }\n});\n---\n<div>\n    <ui-message ref=\"demo15\" @push=\"echo\"></ui-message>\n    <ui-link js=\"window.morning.findVM('demo15').push('一条新消息('+new Date()+')');\">点击触发push事件</ui-link>\n</div>\n:::\n\n#### close\n\n当消息关闭时触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo16.console1', 'close event!');\n        }\n    }\n});\n---\n<div>\n    <ui-message ref=\"demo16\" @close=\"echo\"></ui-message>\n    <ui-link js=\"window.demo16id=window.morning.findVM('demo16').push('一条新消息('+new Date()+')');window.morning.findVM('demo16').close(window.demo16id)\">点击触发close事件</ui-link>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n           text : '消息',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demoEventLifecycle.console1', name + ' event!');\n        }\n    }\n});\n---\n<div>\n    <ui-message\n        ref=\"demoEventLifecycle\"\n        v-show=\"show\"\n        @created=\"echo('created')\"\n        @mounted=\"echo('mounted')\"\n        @before-update=\"echo('before-update')\"\n        @updated=\"echo('updated')\"\n        @before-destroy=\"echo('before-destroy')\"\n        @destroyed=\"echo('destroyed')\"\n    >{*text*}</ui-message>\n\n    <br><br>\n\n    <ui-link js=\"window.demoEventLifecycle.text='生命周期事件';\">触发update</ui-link>\n    <ui-link js=\"morning.findVM('demoEventLifecycle').$destroy();\">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/message/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n"
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
    require("vue-hot-reload-api")      .rerender("data-v-7c7b5e32", esExports)
  }
}

/***/ })

},[566]);