webpackJsonp([47],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 173:
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
            page: 'multiform'
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(67);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8673e7e4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(694);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(374)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8673e7e4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/multiform/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8673e7e4", Component.options)
  } else {
    hotAPI.reload("data-v-8673e7e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 694:
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
  }, [_vm._v("\n# 多项表单输入 `<ui-multiform>`\n\n<doc-component-status page=\"multiform\"></doc-component-status>\n\n[[[开始]]]\n\n定义多项表单输入。\n\n多项表单输入组件是一个强大的组件，通过和其他表单组件的组合，它允许用户输入复杂的对象结构数据。\n\n#### 使用\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiform form-name=\"城市\">\n        <ui-formgroup>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">名称</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput form-key=\"name\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">省份</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput form-key=\"province\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">备注</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textarea form-key=\"note\"></ui-textarea>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n:::\n\n[[[声明]]]\n\n:::preset/html\nformStatement\n---\nuikey:multiform\nstatementDefaultValue:[{name:'Jim'}, {name:'Sam'}]\nstatementMoreAttr:item-title-key=\"name\"\nstatementSlot:<ui-formgroup><div class=\"item\"><h5 class=\"title\"><ui-center class=\"fill\">名称</ui-center></h5><div class=\"content\"><div class=\"form\"><ui-textinput form-key=\"name\"></ui-textinput></div></div></div></ui-formgroup>\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|item-name|项目的名称，如果没有设置`item-title-key`，会作为每项的标题显示。同时会作为添加按钮标题的后缀。|项目的名称|String|`'项目'`|\n|item-title-key|每一项内容标题的取值。设置为某个表单的`key`后，项目的标题将取这个表单的值。|表单的`key`|String|`undefined`|\n|can-move|输入项目是否可以移动|`true`<br>`false`|Boolean|`false`|\n|max|可输入的最大项目数|数字：最大项目数<br>`undefined`：无限制|Number|`undefined`|\n:::\n\n:::preset/html\nformConfigDemo\n---\nuikey:multiform\nconfigDefaultValue:'默认值'\nconfigDefaultValue:[{name:'Jim'}, {name:'Sam'}]\nconfigMoreAttr:item-title-key=\"name\"\nconfigSlot:<ui-formgroup><div class=\"item\"><h5 class=\"title\"><ui-center class=\"fill\">名称</ui-center></h5><div class=\"content\"><div class=\"form\"><ui-textinput form-key=\"name\"></ui-textinput></div></div></div></ui-formgroup>\n:::\n\n\n#### item-name\n\n项目名称可以告知使用者输入项目的含义。建议和`item-title-key`一起使用。\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiform form-name=\"名单\" item-name=\"使用者\">\n        <ui-formgroup>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">姓名</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput form-key=\"name\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n:::\n\n#### item-title-key\n\n`item-title-key`是某项表单的`key`，这个表单的值将作为项目的标题。设置后可以让使用者更好区分每一项。\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiform form-name=\"名单\" item-title-key=\"name\">\n        <ui-formgroup>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">姓名</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput form-key=\"name\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n:::\n\n建议和`item-name`一起使用：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiform form-name=\"名单\" item-name=\"使用者\" item-title-key=\"name\">\n        <ui-formgroup>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">姓名</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput form-key=\"name\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n:::\n\n#### can-move\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiform form-name=\"名单\" can-move item-title-key=\"name\" :default-value=\"[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]\">\n        <ui-formgroup>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">姓名</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput form-key=\"name\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:multiform\nmethodValue:[{name:'Jim'}, {name:'Sam'}]\nmethodDefaultValue:[{name:'Jim'}, {name:'Sam'}]\nmethodMoreAttr:item-title-key=\"name\"\nmethodSlot:<ui-formgroup><div class=\"item\"><h5 class=\"title\"><ui-center class=\"fill\">名称</ui-center></h5><div class=\"content\"><div class=\"form\"><ui-textinput form-key=\"name\"></ui-textinput></div></div></div></ui-formgroup>\n:::\n\n#### add(item, [index])\n\n在指定位置添加项。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|item|NO|添加项目的内容|和表单对应的`key` / `value`对象|`Object`|`undefined`|\n|index|YES|添加的位置|`undefined`: 添加为最后一项<br>数字: 添加到指定的index位置|`Undefined`<br>`Number`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiform ref=\"demo2\" form-name=\"名单\" item-title-key=\"name\" :default-value=\"[{name:'Jim'}]\">\n        <ui-formgroup>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">姓名</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput form-key=\"name\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n<br>\n<ui-link js=\"javascript:morning.findVM('demo2').add({name: 'Sam'});\">添加到最后</ui-link>\n<ui-link js=\"javascript:morning.findVM('demo2').add({name: 'Gustavo'}, 0);\">添加到第0项</ui-link>\n:::\n\n#### update(item, index)\n\n更新指定位置的项。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|item|NO|更新的项目内容|和表单对应的`key` / `value`对象|`Object`|`undefined`|\n|index|NO|更新的位置|更新项目的index位置|`Number`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiform ref=\"demo4\" form-name=\"名单\" item-title-key=\"name\" :default-value=\"[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]\">\n        <ui-formgroup>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">姓名</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput form-key=\"name\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n<br>\n<ui-link js=\"javascript:morning.findVM('demo4').update({name: 'Katherine'}, 1);\">将第1项的name更新为Katherine</ui-link>\n:::\n\n#### del(index)\n\n删除指定位置的项。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|index|NO|删除指定位置的项目|删除项目的index位置|`Number`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiform ref=\"demo3\" form-name=\"名单\" item-title-key=\"name\" :default-value=\"[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]\">\n        <ui-formgroup>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">姓名</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput form-key=\"name\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n<br>\n<ui-link js=\"javascript:morning.findVM('demo3').del(0);\">删除第0项</ui-link>\n:::\n\n#### move(from, to)\n\n移动项目。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|from|NO|需要移动的项目位置|移动项目的index位置|`Number`|`undefined`|\n|to|NO|移动之后的项目位置|移动之后的index位置|`Number`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-multiform ref=\"demo5\" form-name=\"名单\" item-title-key=\"name\" :default-value=\"[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]\">\n        <ui-formgroup>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">姓名</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput form-key=\"name\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n<br>\n<ui-link js=\"javascript:morning.findVM('demo5').move(2, 0);\">将第2项移到第0项</ui-link>\n:::\n\n[[[事件]]]\n\n#### show\n\n当表单填写框显示时触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo6.console1', 'show event!');\n        }\n    }\n});\n---\n<div style=\"width:300px;\">\n    <ui-multiform ref=\"demo6\" form-name=\"名单\" @show=\"echo\">\n        <ui-formgroup>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">姓名</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput form-key=\"name\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n:::\n\n#### hide\n\n当表单填写框隐藏时触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('demo7.console1', 'hide event!');\n        }\n    }\n});\n---\n<div style=\"width:300px;\">\n    <ui-multiform ref=\"demo7\" form-name=\"名单\" @hide=\"echo\">\n        <ui-formgroup>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">姓名</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput form-key=\"name\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n:::\n\n:::preset/html\nformEvent\n---\nuikey:multiform\neventValue:[{name:'Jim'}, {name:'Sam'}]\neventDefaultValue:[{name:'Jim'}, {name:'Sam'}]\neventMoreAttr:item-title-key=\"name\"\neventSlot:<ui-formgroup><div class=\"item\"><h5 class=\"title\"><ui-center class=\"fill\">名称</ui-center></h5><div class=\"content\"><div class=\"form\"><ui-textinput form-key=\"name\"></ui-textinput></div></div></div></ui-formgroup>\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Array` : 数组\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成空数组([])。\n- 若启用`max`，最多不会超过max设置的项目数量。\n\n#### 值格式\n\n数组由项目的对象组成，项目对象由表单的`key` / `value`组成。\n\n#### 默认值\n\n`[]`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:multiform\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style=\"width:300px;\">\n        <ui-multiform ref=\"demoType{$valueType}\" form-name=\"名单\">\n            <ui-formgroup>\n                <div class=\"item\">\n                    <h5 class=\"title\">\n                        <ui-center class=\"fill\">姓名</ui-center>\n                    </h5>\n                    <div class=\"content\">\n                        <div class=\"form\">\n                            <ui-textinput form-key=\"name\"></ui-textinput>\n                        </div>\n                    </div>\n                </div>\n            </ui-formgroup>\n        </ui-multiform>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demoType{$valueType}').set({$&valueContent})\">设置{$valueType}类型</ui-link>\n    <ui-link js=\"alert(window.morning.findVM('demoType{$valueType}').getJson())\">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/multiform/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8673e7e4", esExports)
  }
}

/***/ })

},[254]);