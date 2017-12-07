webpackJsonp([30],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(467);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fc484474_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(470);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(468)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fc484474_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/tip/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc484474", Component.options)
  } else {
    hotAPI.reload("data-v-fc484474", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 468:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 469:
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
            page: 'tip'
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

module.exports = exports['default'];

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("doc-component", { attrs: { page: _vm.page, hasPadding: true } }, [
    _c("script", { attrs: { type: "text/markdown" } }, [
      _vm._v(
        '\n# 小提示 `<ui-tip>`\n\n<doc-component-status page="tip"></doc-component-status>\n\n[[[开始]]]\n\n定义一个小提示，为界面的元素提供简要说明。\n\n#### 使用\n\n:::democode/html\n<span id="demo1">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo1">提示内容</ui-tip>\n:::\n\n#### 复杂内容\n\n:::democode/html\n<span id="demo2">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo2">\n    <p>标题</p>\n    <img width=\'160px\' height=\'160px\' src=\'https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg\'>\n</ui-tip>\n:::\n\n#### 目标元素有title属性\n\n如果目标元素具有`title`属性，切`ui-tip`没有设置内容，则会自动显示`title`内容。\n\n:::democode/html\n<span id="demo3" title="This is title">只有title属性, 显示title</span>\n<ui-tip target="#demo3"></ui-tip>\n\n<br>\n\n<span id="demo4" title="This is title">ui-tip中的内容, 优先显示</span>\n<ui-tip target="#demo4">提示内容</ui-tip>\n:::\n\n#### 无内容不显示\n\n不显示的情况下事件也不会触发。\n\n:::democode/html\n<span id="demo5">如果没有提示内容也没有title则不显示</span>\n<ui-tip target="#demo5"></ui-tip>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n#### 色彩\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<span id="demo{$colorKey}"><ui-textcolor color="{$colorKey}">{$&colorName}小提示</ui-textcolor></span>\n<ui-tip color="{$colorKey}" target="#demo{$colorKey}">{$&colorName} 小提示</ui-tip>\n<br>\n:::\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|[target](#target)|触发提示的目标元素，必填项。此配置改变后，若小提示处于显示状态，则会触发一次`hide`和`show`事件，以刷新小提示的位置。|元素选择器|String<br>Null|`null`|\n|[placement](#placement)|提示框位置|`top`:上方<br>`bottom`:下方<br>`left`:左侧<br>`right`:右侧|String|`\'top\'`|\n|[offset](#offset)|偏移量|上下偏移量(单位px/%) 左右偏移量(单位px/%)|String|`\'0 0\'`|\n|[trigger](#trigger)|触发事件类型(支持多触发器，多个触发器之间用空格分开)。触发事件一旦改变，已有的触发状态都会被重置。|`hover`<br>`click`<br>`focus`|String|`\'hover\'`|\n\n#### target\n\n必填项\n\n:::democode/html\n<span id="demo6">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo6">提示内容</ui-tip>\n:::\n\n#### placement\n\n:::democode/html\n<span id="demo7">上方提示</span>\n<ui-tip target="#demo7" placement="top">提示内容</ui-tip>\n\n<br>\n\n<span id="demo8">下方提示</span>\n<ui-tip target="#demo8" placement="bottom">提示内容</ui-tip>\n\n<br>\n\n<span id="demo9">左侧提示</span>\n<ui-tip target="#demo9" placement="left">提示内容</ui-tip>\n\n<br>\n\n<span id="demo10">右侧提示</span>\n<ui-tip target="#demo10" placement="right">提示内容</ui-tip>\n:::\n\n#### offset\n\n:::democode/html\n<span id="demo11">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo11" offset="10px -30px">提示内容</ui-tip>\n:::\n\n#### trigger\n\n:::democode/html\n<span id="demo12">点击显示小提示</span>\n<ui-tip target="#demo12" trigger="click">提示内容</ui-tip>\n\n<br>\n\n<span id="demo13">鼠标悬浮或点击显示小提示</span>\n<ui-tip target="#demo13" trigger="click hover">提示内容</ui-tip>\n:::\n\n[[[方法]]]\n\n#### show()\n\n显示小提示。\n\n:::democode/html\n<span id="demo14">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo14" ref="demo14">提示内容</ui-tip>\n\n<ui-link js="morning.findVM(\'demo14\').show();" onmouseout="morning.findVM(\'demo14\').hide();">显示小提示</ui-link>\n:::\n\n#### hide()\n\n隐藏小提示。\n\n:::democode/html\n<span id="demo15">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo15" ref="demo15">提示内容</ui-tip>\n\n<ui-link js="morning.findVM(\'demo15\').hide();" onmouseenter="morning.findVM(\'demo15\').show();">隐藏小提示</ui-link>\n:::\n\n#### toggle()\n\n切换小提示显示状态。\n\n:::democode/html\n<span id="demo16">鼠标悬浮显示小提示</span>\n<ui-tip target="#demo16" ref="demo16">提示内容</ui-tip>\n\n<ui-link js="morning.findVM(\'demo16\').toggle();">切换小提示</ui-link>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当小提示切换显示状态时时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo17.console1\', \'emit event!\');\n        }\n    }\n});\n---\n<div>\n    <span id="demo17">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo17" @emit="echo">提示内容</ui-tip>\n</div>\n:::\n\n#### show\n\n当小提示显示时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo18.console1\', \'show event!\');\n        }\n    }\n});\n---\n<div>\n    <span id="demo18">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo18" @show="echo">提示内容</ui-tip>\n</div>\n:::\n\n#### hide\n\n当小提示显示时触发。\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demo19.console1\', \'hide event!\');\n        }\n    }\n});\n---\n<div>\n    <span id="demo19">鼠标悬浮显示小提示</span>\n    <ui-tip target="#demo19" @hide="echo">提示内容</ui-tip>\n</div>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'小提示\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', `${name} event!`);\n        }\n    }\n});\n---\n<div>\n    <span id="demoEventLifecycle">鼠标悬浮显示小提示</span>\n    <ui-tip\n        target="#demoEventLifecycle"\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >{*text*}</ui-tip>\n\n    <br><br>\n\n    <ui-link js="window.demoEventLifecycle.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="morning.findVM(\'demoEventLifecycle\').$destroy();">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/tip/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n'
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
    require("vue-hot-reload-api")      .rerender("data-v-fc484474", esExports)
  }
}

/***/ })

},[466]);