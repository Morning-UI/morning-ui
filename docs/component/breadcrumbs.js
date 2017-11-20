webpackJsonp([75],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(692);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac0343be_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(695);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(693)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac0343be_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/component/breadcrumbs/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ac0343be", Component.options)
  } else {
    hotAPI.reload("data-v-ac0343be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 693:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 694:
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
            page: 'breadcrumbs'
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 695:
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
  }, [_vm._v("\n# 面包屑 `<ui-breadcrumbs>`\n\n<doc-component-status page=\"breadcrumbs\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个模面包屑导航。\n\n#### 使用\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<ui-breadcrumbs :list=\"list\"></ui-breadcrumbs>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href=\"/guide/status.html\">查看形态文档</a>\n\n#### 尺寸\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs :list=\"list\" size=\"xxs\" root-name=\"xxs\"></ui-breadcrumbs>\n</div>\n:::\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs :list=\"list\" size=\"xs\" root-name=\"xs\"></ui-breadcrumbs>\n</div>\n:::\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs :list=\"list\" size=\"s\" root-name=\"s\"></ui-breadcrumbs>\n</div>\n:::\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs :list=\"list\" size=\"m\" root-name=\"m\"></ui-breadcrumbs>\n</div>\n:::\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs :list=\"list\" size=\"l\" root-name=\"l\"></ui-breadcrumbs>\n</div>\n:::\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs :list=\"list\" size=\"xl\" root-name=\"xl\"></ui-breadcrumbs>\n</div>\n:::\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs :list=\"list\" size=\"xxl\" root-name=\"xxl\"></ui-breadcrumbs>\n</div>\n:::\n\n[[[配置]]]\n\n|KEY|描述|接受值|值类型|默认值|\n|-|-|-|-|-|\n|root-name|根层级名称|名称<br>`false`|String<br>Boolean|`false`|\n|choose-root|可以选择跟层级，选择跟层级将会清空层级列表|`true`<br>`false`|Boolean|`false`|\n|list|默认面包屑层级|一个数组，数组中每一个对象代表一个层级，对象的键名是层级的值，对象的键值是层级的名称。对象的键名必须唯一。|Array|`[]`|\n|max-history|面包屑记录历史步骤最大数，每次切换计一次步骤|步骤数|Boolean|`20`|\n\n#### root-name\n\n`root-name`不在层级关系中，仅仅作为一个提示存在。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<ui-breadcrumbs :list=\"list\" root-name=\"首页\"></ui-breadcrumbs>\n:::\n\n#### choose-root\n\n跟层级可被选中，选中时所有层级会被清空。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<ui-breadcrumbs :list=\"list\" root-name=\"首页\" choose-root></ui-breadcrumbs>\n:::\n\n#### list\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'},\n            {'level4' : '第四级'},\n            {'level5' : '第五级'}\n        ]\n    }\n});\n---\n<ui-breadcrumbs :list=\"list\"></ui-breadcrumbs>\n:::\n\n#### max-history\n\n设置最多可回退步骤数，注意由于操作后立即会记录历史，所以：\n\n- 如果限制最多回退1步，`max-history`设为2\n- 如果限制不准回退，`max-history`设为1\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<!-- 设置最多回退1步 -->\n<div>\n    <ui-breadcrumbs ref=\"demo6\" :list=\"list\" :max-history=\"2\"></ui-breadcrumbs>\n    <ui-link js=\"morning.findVM('demo6').backLast();\">回退一步</ui-link>\n</div>\n:::\n\n[[[方法]]]\n\n#### toLevel(index)\n\n锁定按钮，锁定后按钮不会触发`emit`事件。\n\n注意由于第1级无法切换，所以：\n\n- 切换到第2级，使用`toLevel(1)`\n- 切换到第n级，使用`toLevel(n - 1)`\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|index|NO|若是数字则切换到指定深度的层级，若是字符串切换到指定键名的层级|数值(指定的层级)<br>字符串(指定键名的层级)|`Number`<br>`String`|`undefined`|\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'},\n            {'level4' : '第四级'},\n            {'level5' : '第五级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs ref=\"demo7\" :list=\"list\"></ui-breadcrumbs>\n    <ui-link js=\"morning.findVM('demo7').toLevel(1);\">切换到第2级</ui-link>\n    <ui-link js=\"morning.findVM('demo7').toLevel('level3');\">切换到level3</ui-link>\n    <ui-link js=\"morning.findVM('demo7').backLast();\">恢复</ui-link>\n</div>\n:::\n\n#### getLevel()\n\n获取当前层级信息，包括：\n\n- keyList : 层级的key数组\n- nameList : 层级的name数组\n- currentKey : 当前选中的key\n- currentName : 当前选中的name\n- length : 层级长度\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs ref=\"demo8\" :list=\"list\"></ui-breadcrumbs>\n    <ui-link js=\"alert(JSON.stringify(morning.findVM('demo8').getLevel()));\">获取层级信息</ui-link>\n</div>\n:::\n\n#### getHistory()\n\n获取当前面包屑历史，返回一个数组，数组中每一项都是一个完整的层级信息，可以通过`setLevel()`方法设置。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs ref=\"demo9\" :list=\"list\"></ui-breadcrumbs>\n    <ui-link js=\"alert(JSON.stringify(morning.findVM('demo9').getHistory()));\">获取历史步骤</ui-link>\n</div>\n:::\n\n#### backLast([num])\n\n回退步骤。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|num|YES|指定要返回的步数，从最后开始，从1开始|回退的步骤数|`Number`|`1`|\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'},\n            {'level4' : '第四级'},\n            {'level5' : '第五级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs ref=\"demo10\" :list=\"list\"></ui-breadcrumbs>\n    <ui-link js=\"morning.findVM('demo10').backLast(1);\">回退一步</ui-link>\n    <ui-link js=\"morning.findVM('demo10').backLast(2);\">回退两步</ui-link>\n</div>\n:::\n\n#### addLevel(level)\n\n添加一个层级，注意层级的键名不能重复。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|level|NO|添加的层级|对象，键名为层级的值，键值为层级的名称|`Object`|`undefined`|\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs ref=\"demo11\" :list=\"list\"></ui-breadcrumbs>\n    <ui-link js=\"morning.findVM('demo11').addLevel({'level4':'新层级'});\">新增一个层级</ui-link>\n</div>\n:::\n\n#### setLevel(levelList)\n\n重设整个层级关系。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|levelList|NO|添加的层级|一个数组，数组中每一个对象代表一个层级，对象的键名是层级的值，对象的键值是层级的名称|`Array`|`undefined`|\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    }\n});\n---\n<div>\n    <ui-breadcrumbs ref=\"demo12\" :list=\"list\"></ui-breadcrumbs>\n    <ui-link js=\"morning.findVM('demo12').setLevel([{'level6':'第六级'},{'level7':'第七级'}]);\">重设整个层级</ui-link>\n    <ui-link js=\"morning.findVM('demo12').backLast();\">恢复</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n#### emit\n\n当选择层级改变时触发。\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : {\n        list : [\n            {'level1' : '第一级'},\n            {'level2' : '第二级'},\n            {'level3' : '第三级'}\n        ]\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demo13.console1', `emit event!`);\n        }\n    }\n});\n---\n<ui-breadcrumbs ref=\"demo13\" :list=\"list\" @emit=\"echo\"></ui-breadcrumbs>\n:::\n\n#### 生命周期事件\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : '{$el}',\n    template : '{$template}',\n    data : function () {\n        return {\n            text : '面包屑',\n            show : true,\n            list : [\n                {'level1' : '第一级'},\n                {'level2' : '第二级'},\n                {'level3' : '第三级'}\n            ]\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demoEventLifecycle.console1', `${name} event!`);\n        }\n    }\n});\n---\n<div>\n    <ui-breadcrumbs\n        :list=\"list\"\n        ref=\"demoEventLifecycle\"\n        v-show=\"show\"\n        @created=\"echo('created')\"\n        @mounted=\"echo('mounted')\"\n        @before-update=\"echo('before-update')\"\n        @updated=\"echo('updated')\"\n        @before-destroy=\"echo('before-destroy')\"\n        @destroyed=\"echo('destroyed')\"\n    >{*text*}</ui-breadcrumbs>\n\n    <br><br>\n\n    <ui-link js=\"window.demoEventLifecycle.text='生命周期事件';\">触发update</ui-link>\n    <ui-link js=\"morning.findVM('demoEventLifecycle').$destroy();\">触发destroy</ui-link>\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/breadcrumbs/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ac0343be", esExports)
  }
}

/***/ })

},[691]);