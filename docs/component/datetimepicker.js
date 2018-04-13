webpackJsonp([73],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(682);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_891a0458_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(685);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(683)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_891a0458_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/datetimepicker/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-891a0458", Component.options)
  } else {
    hotAPI.reload("data-v-891a0458", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 683:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 684:
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
            page: 'datetimepicker'
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

module.exports = exports['default'];

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("doc-component", { attrs: { page: _vm.page, hasPadding: true } }, [
    _c("script", { attrs: { type: "text/markdown" } }, [
      _vm._v(
        '\n# 日期时间选择器 `<ui-datetimepicker>`\n\n<doc-component-status page="datetimepicker"></doc-component-status>\n\n[[[开始]]]\n\n定义日期时间选择器。\n\n#### 使用\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间"></ui-datetimepicker>\n</div>\n:::\n\n#### 自定义日期时间格式\n\n日期时间选择器允许用户自定日期时间格式，使用中文时间：\n    \n:::democode/html\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" format="YYYY年MM月DD日 HH点mm分ss秒" default-value="2018年03月23日 18点10分18秒"></ui-datetimepicker>\n</div>\n:::\n\n更多自定义格式见`format`配置。\n\n#### 范围日期时间选择\n\n:::democode/html\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true"></ui-datetimepicker>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset/html\nformStatus\n---\nuikey:datetimepicker\nstatusDefaultValue:\'2018-03-23 18:10:18\'\nstatusMoreAttr::date="+new Date(\'2018-03-23 18:10:18\')"\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[date](#date)|日历所在的日期，日历将会切换到`date`所在的月份|时间戳|Number|`+new Date()`|\n|[format](#format)|格式化展示的日期时间|日期时间格式化字符串(支持日期占位符见下方的演示)|String|`\'YYYY-MM-DD\'`|\n|[align](#align)|日期时间对齐方式|`\'left\'` : 左对齐<br>`\'center\'` : 居中对齐<br>`\'right\'` : 右对齐|String|`\'left\'`|\n|[date-selectable-range](#date-selectable-range)|可选日期时间范围，是一个连续的时间段，可以限制到的时分秒，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始日期, 结束日期]`: 指定单个可选范围<br>`[[开始日期1, 结束日期1], [开始日期2, 结束日期2]]`: 指定多个可选范围<br><br>可选日期将大于等于`开始日期`，小于等于`结束日期`。<br><br>`开始日期`和`结束日期`均为日期字符串需要符合`format`配置的日期格式。|日期范围数组|Array|`undefined`|\n|[time-selectable-range](#time-selectable-range)|可选时间范围，若不设置则不限。这是一个数组，支持以下格式：<br><br>`[开始时间, 结束时间]`: 指定单个可选范围<br><br>可选时间将大于等于`开始时间`，小于等于`结束时间`。<br><br>`开始时间`和`结束时间`均为时间字符串需要符合`format`配置的时间格式。<br><br>此配置用于限制每天可选的时间范围(仅支持一个范围)，若需要限制一个时间段请使用`date-selectable-range`配置。<br><br>如同时配置了`date-selectable-range`则取可选范围的交集。|时间范围数组|Array|`undefined`|\n|[is-range](#is-range)|选择日期时间区间，开启后可以选在一个日期时间段|`true`<br>`false`|Boolean|`false`|\n|[separator](#separator)|日期时间区间选择时中间的分隔内容，只有开启`is-range`才有效|分隔字符串|String|`\'至\'`|\n|[start-name](#start-name)|日期时间区间选择时`开始日期时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效|任意字符串<br>`false`:显示`form-name`|String<br>Boolean|`\'开始日期时间\'`|\n|[end-name](#end-name)|日期时间区间选择时`结束日期时间`表单显示的名称，若设为`false`则显示`form-name`，只有开启`is-range`才有效。若设置了`hide-name`则不会显示|任意字符串`false`:显示`form-name`|String<br>Boolean|`\'结束日期时间\'`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:datetimepicker\nconfigDefaultValue:\'2018-03-23 18:10:18\'\nconfigMoreAttr::date="+new Date(\'2018-03-23 18:10:18\')"\n:::\n\n#### date\n\n:::democode/html\n<div style="width:300px">\n    <ui-datetimepicker :date="+new Date(\'2018-03-23\')"></ui-datetimepicker>\n</div>\n:::\n\n#### format\n    \n`format`允许自定义组件展示的日期时间格式，支持以下占位符：\n\n|单位|占位符|示例|\n|-|-|-|\n|年份|YY|00, 01, ..., 99|\n||YYYY|1900, 1901, ..., 2099|\n|季度|Q|1, 2, 3, 4|\n||Qo|1st, 2nd, 3rd, 4th|\n|月份|M|1, 2, ..., 12|\n||Mo|1st, 2nd, ..., 12th|\n||MM|01, 02, ..., 12|\n||MMM|Jan, Feb, ..., Dec|\n||MMMM|January, February, ..., December|\n|一月中第几天|D|1, 2, ..., 31|\n||Do|1st, 2nd, ..., 31st|\n||DD|01, 02, ..., 31|\n|一周中第几天|d|0, 1, ..., 6|\n||do|0th, 1st, ..., 6th|\n||dd|Su, Mo, ..., Sa|\n||ddd|Sun, Mon, ..., Sat|\n||dddd|Sunday, Monday, ..., Saturday|\n|一年中第几天|DDD|1, 2, ..., 366|\n||DDDo|1st, 2nd, ..., 366th|\n||DDDD|001, 002, ..., 366|\n|上午/下午|A|AM, PM|\n||a|am, pm|\n||aa|a.m., p.m.|\n|小时|H|0, 1, ... 23|\n||HH|00, 01, ... 23|\n||h|0, 1, ... 12|\n||hh|00, 01, ... 12|\n|分钟|mm|00, 01, ... 59|\n||m|0, 1, ... 59|\n|秒|ss|00, 01, ... 59|\n||s|0, 1, ... 59|\n\n采用`|`分隔日期时间：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" format="YYYY | MM | DD | HH | mm | ss" default-value="2018 | 03 | 23 | 18 | 10 | 08"></ui-datetimepicker>\n</div>\n:::\n\n同时显示多种日期时间格式(显示多个日期时，最后一个优先级最高)：\n\n:::democode/html\n<div style="width:400px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" format="YYYY-MM-DD HH:mm:ss | HH:m:s, MMM DD, YYYY" default-value="2018-03-23 18:10:08 | 18:10:8, Mar 23, 2018"></ui-datetimepicker>\n</div>\n:::\n\n#### align\n\n居中对齐：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" default-value="2018-03-23 18:10:18" align="center"></ui-datetimepicker>\n</div>\n:::\n\n右对齐：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" default-value="2018-03-23 18:10:18" align="right"></ui-datetimepicker>\n</div>\n:::\n\n#### date-selectable-range\n\n设置单个可选范围(2018-03-08至2018-03-23)：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :date-selectable-range="[\'2018-03-08 00:00:00\', \'2018-03-23 00:00:00\']"></ui-datetimepicker>\n</div>\n:::\n\n设置具体时间(2018-03-08 12:30:00至2018-03-23 20:59:59)：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :date-selectable-range="[\'2018-03-08 12:30:00\', \'2018-03-23 20:59:59\']"></ui-datetimepicker>\n</div>\n:::\n\n设置多个可选范围(2018-02-10至2018-02-20, 2018-02-20至2018-03-02, 2018-03-15至2018-03-25, 2018-03-20至2018-03-28, 2018-04-02至2018-04-05)：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :date-selectable-range="[[\'2018-02-10 00:00:00\', \'2018-02-20 00:00:00\'], [\'2018-02-23 00:00:00\', \'2018-03-02 00:00:00\'], [\'2018-03-15 12:30:00\', \'2018-03-25 20:00:00\'], [\'2018-03-20 00:00:00\', \'2018-03-28 18:00:00\'], [\'2018-04-02 00:00:00\', \'2018-04-05 00:00:00\']]"></ui-datetimepicker>\n</div>\n:::\n\n#### time-selectable-range\n\n设置每天可选时间为(8:00-18:00)：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :time-selectable-range="[\'08:00:00\', \'18:00:00\']"></ui-datetimepicker>\n</div>\n:::\n\n配合`date-selectable-range`使用时可选时间需要符合两个条件的限制：\n\n:::democode/html\n<div style="width:300px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :date-selectable-range="[\'2018-03-08 12:30:00\', \'2018-03-23 20:00:00\']" :time-selectable-range="[\'08:00:00\', \'18:00:00\']"></ui-datetimepicker>\n</div>\n:::\n\n#### is-range\n\n:::democode/html\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true"></ui-datetimepicker>\n</div>\n:::\n\n在开启`is-range`的情况下设置`default-value`:\n\n:::democode/html\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :date="+new Date(\'2018-03-23\')" :is-range="true" :default-value="[\'2018-03-10 08:00:00\', \'2018-03-20 21:30:30\']"></ui-datetimepicker>\n</div>\n:::\n\n#### separator\n\n:::democode/html\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true" separator="~"></ui-datetimepicker>\n</div>\n:::\n\n#### start-name\n\n:::democode/html\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true" start-name="发车日期"></ui-datetimepicker>\n</div>\n:::\n\n若设为`false`则显示`form-name`：\n\n:::democode/html\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true" :start-name="false"></ui-datetimepicker>\n</div>\n:::\n\n#### end-name\n\n:::democode/html\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true" end-name="到达日期"></ui-datetimepicker>\n</div>\n:::\n\n若设为`false`则显示`form-name`：\n\n:::democode/html\n<div style="width:460px;">\n    <ui-datetimepicker form-name="日期时间" :is-range="true" :end-name="false"></ui-datetimepicker>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:datetimepicker\nmethodValue:\'2018-03-23 12:13:14\'\nmethodDefaultValue:\'2018-03-23 12:13:14\'\n:::\n\n[[[事件]]]\n\n:::preset/html\nformEvent\n---\nuikey:datetimepicker\neventValue:\'2018-03-23 12:13:14\'\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n- `Array` : 数组\n- `String` : 字符串(按`format`配置格式化)\n\n#### 值过滤\n\n- 若是范围日期时间选择(开启`isRange`配置)，则数值是一个字符串，则将数值转换成数组，该字符串作为第一项       \n- 若是单一日期时间选择(未开启`isRange`配置)，且数值是一个数组，则取第一项\n- 若数值的类型是字符串则检测字符串的日期时间格式是否符合`format`配置，若不符合尝试转换成符合的格式，若无法转换则转换成`1971-01-01 00:00:00`的符合`format`的日期时间\n- 若使用了`date-selectable-range`或`time-selectable-range`配置，且数值对应的日期时间不在范围内，则会转换成最近的范围内日期时间\n- 若数值的类型是一个数组，且数组长度为`0`则转换为`undefined`\n- 若数值的类型是一个数组，且数组长度大于`2`，则过滤多余的项目，只保留两项\n- 若数值的类型是一个数组，且数组长度大于`0`且小于`3`，会过滤数组中所有不是字符串类型的项目，然后按照第三条规则，对所有字符串项目进行过滤\n- 若数值的类型是一个数组，且第二项代表的日期时间大于第一项，则对换数组的两项\n\n#### 值格式\n\n若是单一日期时间选择，则是日期时间字时间符串(符合`format`的格式化规则)\n若是范围日期时间选择，则是长度为2的数组，数组中第一项是开始日期时间的日期时间字符串(符合`format`的格式化规则)，数组中第二项是结束日期时间的日期时间字符串(符合`format`的格式化规则)。\n\n#### 默认值\n\n`undefined`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:datetimepicker\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style="width:300px;">\n        <ui-datetimepicker ref="demoType{$valueType}"></ui-datetimepicker>\n    </div>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoType{$valueType}\').set({$&valueContent})">设置{$valueType}类型</ui-link>\n    <ui-link js="alert(window.morning.findVM(\'demoType{$valueType}\').getJson())">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/datetimepicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n'
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
    require("vue-hot-reload-api")      .rerender("data-v-891a0458", esExports)
  }
}

/***/ })

},[681]);