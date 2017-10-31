webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _markdownIt = __webpack_require__(29);

var _markdownIt2 = _interopRequireDefault(_markdownIt);

var _extend2 = __webpack_require__(28);

var _extend3 = _interopRequireDefault(_extend2);

var _mustache = __webpack_require__(30);

var _mustache2 = _interopRequireDefault(_mustache);

var _underscore = __webpack_require__(31);

var _underscore2 = _interopRequireDefault(_underscore);

var _highlight = __webpack_require__(26);

var _highlight2 = _interopRequireDefault(_highlight);

var _DocHeader = __webpack_require__(7);

var _DocHeader2 = _interopRequireDefault(_DocHeader);

var _DocFooter = __webpack_require__(6);

var _DocFooter2 = _interopRequireDefault(_DocFooter);

var _DocSubmenu = __webpack_require__(18);

var _DocSubmenu2 = _interopRequireDefault(_DocSubmenu);

var _DocComponentStatus = __webpack_require__(17);

var _DocComponentStatus2 = _interopRequireDefault(_DocComponentStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var randomRangeMin = 1e3;
var randomRangeMax = 9e3;

var markdown = new _markdownIt2.default({
    html: true
});

var evals = [];

var data = {
    size: [{
        sizeKey: 'xxl',
        sizeName: 'XXL尺寸'
    }, {
        sizeKey: 'xl',
        sizeName: 'XL尺寸'
    }, {
        sizeKey: 'l',
        sizeName: 'L尺寸'
    }, {
        sizeKey: 'm',
        sizeName: 'M尺寸'
    }, {
        sizeKey: 's',
        sizeName: 'S尺寸'
    }, {
        sizeKey: 'xs',
        sizeName: 'XS尺寸'
    }, {
        sizeKey: 'xxs',
        sizeName: 'XXS尺寸'
    }],
    theme: [{
        colorKey: 'theme',
        colorName: '主题色'
    }, {
        colorKey: 'light-theme',
        colorName: '浅主题色'
    }, {
        colorKey: 'dark-theme',
        colorName: '深主题色'
    }],
    feature: [{
        colorKey: 'success',
        colorName: '成功/正确'
    }, {
        colorKey: 'warning',
        colorName: '警告/注意'
    }, {
        colorKey: 'danger',
        colorName: '错误/危险'
    }, {
        colorKey: 'primary',
        colorName: '主要/关键'
    }, {
        colorKey: 'minor',
        colorName: '次要/不醒目'
    }, {
        colorKey: 'info',
        colorName: '信息/额外'
    }],
    black: [{
        colorKey: 'black',
        colorName: '黑色'
    }, {
        colorKey: 'light-black',
        colorName: '浅黑色'
    }, {
        colorKey: 'extra-light-black',
        colorName: '超浅黑色'
    }],
    blue: [{
        colorKey: 'blue',
        colorName: '青色'
    }, {
        colorKey: 'light-blue',
        colorName: '浅青色'
    }, {
        colorKey: 'extra-light-blue',
        colorName: '超浅青色'
    }],
    silver: [{
        colorKey: 'silver',
        colorName: '银色'
    }, {
        colorKey: 'light-silver',
        colorName: '浅银色'
    }, {
        colorKey: 'extra-light-silver',
        colorName: '超浅银色'
    }],
    gray: [{
        colorKey: 'gray',
        colorName: '灰色'
    }, {
        colorKey: 'light-gray',
        colorName: '浅灰色'
    }, {
        colorKey: 'white',
        colorName: '白色'
    }],
    state: [{
        stateKey: 'normal',
        stateName: '正常'
    }, {
        stateKey: 'hover',
        stateName: 'Hover'
    }, {
        stateKey: 'active',
        stateName: '激活'
    }, {
        stateKey: 'disabled',
        stateName: '禁用'
    }, {
        stateKey: 'apparent',
        stateName: '醒目'
    }, {
        stateKey: 'loading',
        stateName: '载入中'
    }, {
        stateKey: 'processing',
        stateName: '处理中'
    }],
    formConfig: {
        formName: '表单名',
        formKey: 'formKey',
        formGroupOne: 'groupName'
    },
    formValueType: {
        default: [{
            valueType: 'String',
            valueContent: '\'Jim\''
        }, {
            valueType: 'Number',
            valueContent: '5'
        }, {
            valueType: 'Boolean',
            valueContent: 'true'
        }, {
            valueType: 'Null',
            valueContent: 'null'
        }, {
            valueType: 'Undefined',
            valueContent: 'undefined'
        }, {
            valueType: 'Object',
            valueContent: '{}'
        }, {
            valueType: 'Array',
            valueContent: '[]'
        }],
        checkbox: [{
            valueType: 'String',
            valueContent: '\'Tim\''
        }, {
            valueType: 'Number',
            valueContent: '5'
        }, {
            valueType: 'Boolean',
            valueContent: 'true'
        }, {
            valueType: 'Null',
            valueContent: 'null'
        }, {
            valueType: 'Undefined',
            valueContent: 'undefined'
        }, {
            valueType: 'Object',
            valueContent: '{\'Tim\':\'Tim\'}'
        }, {
            valueType: 'Array',
            valueContent: '[\'Tim\']'
        }],
        select: [{
            valueType: 'String',
            valueContent: '\'Tim Boelaars\''
        }, {
            valueType: 'Number',
            valueContent: '5'
        }, {
            valueType: 'Boolean',
            valueContent: 'true'
        }, {
            valueType: 'Null',
            valueContent: 'null'
        }, {
            valueType: 'Undefined',
            valueContent: 'undefined'
        }, {
            valueType: 'Object',
            valueContent: '{\'Tim\':\'Tim\'}'
        }, {
            valueType: 'Array',
            valueContent: '[\'Tim Boelaars\', \'Andrew Colin Beck\']'
        }]
    }
};

var repeater = {
    size: function size(_opt) {

        _opt.content = '{$#size}' + _opt.content + '{$/size}';
        _opt.context = (0, _extend3.default)(true, _opt.context, {
            size: data.size
        });

        return _opt;
    },
    color: function color(_opt) {

        var color = _opt.param;

        _opt.content = '{$#' + color + '}' + _opt.content + '{$/' + color + '}';
        _opt.context = (0, _extend3.default)(true, _opt.context, _defineProperty({}, color, data[color]));

        if (color === 'silver') {

            _opt.style.push('background: #626b75;border-color: #454d57');
        } else if (color === 'gray') {

            _opt.style.push('background:#676767;border-color: #494949');
        }

        return _opt;
    },
    state: function state(_opt) {

        if (_opt.param === undefined) {

            _opt.param = 'all';
        }

        var states = _opt.param.split(',');

        if (states.length > 0 && states.indexOf('all') === -1) {

            var sna = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = data.state[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var state = _step.value;


                    if (states.indexOf(state.stateKey) !== -1) {

                        sna.push(state);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            _opt.context = (0, _extend3.default)(true, _opt.context, {
                state: sna
            });
        } else if (states[0] === 'all') {

            _opt.context = (0, _extend3.default)(true, _opt.context, {
                state: data.state
            });
        }

        // if (typeof opt.content === 'string') {

        _opt.content = '{$#state}' + _opt.content + '{$/state}';

        // } else if (typeof opt.contnet === 'object') {

        //     for (let key in opt.content) {

        //         opt.content[key] = `{$#state}${opt.content[key]}\n{$/state}`;

        //     }

        // }

        return _opt;
    },
    br: function br(_opt) {

        var num = +_opt.param || 1;
        var brs = '';

        while (num--) {

            brs += '<br/>';
        }

        _opt.content = _opt.content + '\n' + brs + '\n';

        return _opt;
    },
    formConfig: function formConfig(_opt) {

        _opt.content = '{$#formConfig}' + _opt.content + '\n{$/formConfig}';
        _opt.context = (0, _extend3.default)(true, _opt.context, {
            formConfig: data.formConfig
        });

        return _opt;
    },
    formValueType: function formValueType(_opt) {

        var key = _opt.param || 'default';

        _opt.content = '{$#formValueType.' + key + '}' + _opt.content + '\n{$/formValueType.' + key + '}';
        _opt.context = (0, _extend3.default)(true, _opt.context, {
            formValueType: data.formValueType
        });

        return _opt;
    }
};

var presets = {
    statementColor: '\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<ui-{%uikey%} {$colorKey}>{$&colorName}</ui-{%uikey%}>\n:::\n',
    formStatement: '\n#### \u652F\u6301\n\n|\u7C7B\u578B|\u652F\u6301|\u9ED8\u8BA4|\n|-|-|-|\n|\u5C3A\u5BF8|\u4E0D\u652F\u6301|-|\n|\u8272\u5F69|\u4E0D\u652F\u6301|-|\n|\u72B6\u6001|`normal`<br/>`disabled`|`normal`|\n\n#### \u72B6\u6001\n\n:::repeat/html\nstate:normal,disabled\n---\n<div style="width:300px;">\n    <ui-{%uikey%} {$stateKey} :default-value="{%&statementDefaultValue%}" form-name="{$&stateName}" {%&statementMoreAttr%}>{%&statementSlot%}</ui-{%uikey%}>\n</div>\n<br>\n:::\n',
    formStatementWithStyle: '\n#### \u652F\u6301\n\n|\u7C7B\u578B|\u652F\u6301|\u9ED8\u8BA4|\n|-|-|-|\n|\u5C3A\u5BF8|\u4E0D\u652F\u6301|-|\n|\u8272\u5F69|\u5168\u90E8|`theme`|\n|\u72B6\u6001|`normal`<br/>`disabled`|`normal`|\n\n\n#### \u8272\u5F69\n\n:::repeat/html\ncolor:theme\ncolor:feature\ncolor:black\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<div style="width:300px;">\n    <ui-{%uikey%} {$colorKey} :default-value="{%&statementDefaultValue%}" form-name="{$&colorName}" {%&statementMoreAttr%}>{%&statementSlot%}</ui-{%uikey%}>\n</div>\n<br>\n:::\n\n#### \u72B6\u6001\n\n:::repeat/html\nstate:normal,disabled\n---\n<div style="width:300px;">\n    <ui-{%uikey%} {$stateKey} :default-value="{%&statementDefaultValue%}" form-name="{$&stateName}" {%&statementMoreAttr%}>{%&statementSlot%}</ui-{%uikey%}>\n</div>\n<br>\n:::\n',
    formConfigDemo: '\n#### form-name\n\n:::repeat/html\nformConfig\n---\n<div style="width:300px;">\n    <ui-{%uikey%} form-name="{$formName}" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>\n</div>\n:::\n\n#### form-key\n\n:::repeat/html\nformConfig\n---\n<div style="width:300px;">\n    <ui-{%uikey%} form-name="{$formName}" form-key="{$formKey}" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>\n</div>\n:::\n\n#### group\n\n\u8BBE\u7F6E\u5355\u4E2A\u7EC4\uFF1A\n\n:::repeat/html\nformConfig\n---\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u5355\u4E2A\u7EC4 -->\n    <ui-{%uikey%} form-name="{$formName}" form-key="{$formKey}" group="{$formGroupOne}" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>\n</div>\n:::\n\n\u8BBE\u7F6E\u591A\u4E2A\u7EC4\uFF1A\n\n:::repeat/html\nformConfig\n---\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{%uikey%} form-name="{$formName}" form-key="{$formKey}" :group="[\'group1\', \'group2\', \'group3\']" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>\n</div>\n:::\n\n#### default-value\n\n:::repeat/html\nformConfig\n---\n<div style="width:300px;">\n    <ui-{%uikey%} form-name="{$formName}" :default-value="{%&configDefaultValue%}" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>\n</div>\n:::\n\n#### hide-name\n\n\u9690\u85CF\u540E\u8868\u5355\u9ED8\u8BA4\u4F4D\u7F6E\u7684\u540D\u5B57\u4E0D\u4F1A\u663E\u793A\uFF0C\u53EF\u4EE5\u5728\u5176\u4ED6\u5730\u65B9\u8BBE\u7F6E\u8868\u5355\u540D\u3002\n\n:::repeat/html\nformConfig\n---\n<div style="width:300px;">\n    <p>{$formName}</p>\n    <ui-{%uikey%} form-name="{$formName}" hide-name {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>\n</div>\n:::\n    ',
    formConfigTable: '\n|KEY|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|\n|form-name|\u8868\u5355\u7684\u540D\u79F0\uFF08\u7528\u4E8E\u663E\u793A\uFF09|\u4EFB\u610F\u5B57\u7B26\u4E32|String|`undefined`|\n|form-key|\u8868\u5355\u7684Key\uFF08\u7528\u4E8E\u903B\u8F91\u4E2D\u4F5C\u4E3A\u8BC6\u522B\u6807\u793A\uFF09|\u4EFB\u610F\u5B57\u7B26\u4E32(\u552F\u4E00)|String|`undefined`|\n|group|\u8868\u5355\u7EC4\uFF0C\u7528\u4E8E\u5C06\u591A\u4E2A\u8868\u5355\u7684\u6570\u503C\u6DFB\u52A0\u5230\u540C\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u3002\u4E00\u4E2A\u8868\u5355\u53EF\u4EE5\u540C\u65F6\u5C5E\u4E8E\u591A\u4E2A\u7EC4|\u82E5\u662F\u5B57\u7B26\u4E32\uFF0C\u5219\u5C06\u8868\u5355\u6DFB\u52A0\u5230\u5355\u4E2A\u7EC4<br>\u82E5\u662F\u6570\u7EC4\uFF0C\u5219\u5C06\u8868\u5355\u6DFB\u52A0\u5230\u591A\u4E2A\u7EC4|String<br/>Array|`[]`|\n|default-value|\u8868\u5355\u7684\u9ED8\u8BA4\u503C|\u4EFB\u610F(\u63A5\u53D7\u8868\u5355\u539F\u59CB\u6570\u503C\uFF0C\u4E5F\u63A5\u53D7JSON\u5E8F\u5217\u5316\u540E\u7684\u8868\u5355\u6570\u503C\uFF0C\u82E5\u6570\u503C\u662FJSON\u5E8F\u5217\u5316\u7684\u4F1A\u81EA\u52A8\u8F6C\u6362\u6210\u539F\u59CB\u6570\u503C)|Any|`undefined`|\n|hide-name|\u9690\u85CF\u8868\u5355\u540D|`true`<br>`false`|Boolean|`false`|\n{%&content%}\n',
    formMethod: '\n#### set([value])\n\n\u8BBE\u7F6E\u8868\u5355\u7684\u503C\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|value|YES|\u9700\u8981\u8BBE\u7F6E\u8868\u5355\u7684\u503C\uFF0C\u5982\u679C\u9700\u8981\u6E05\u7A7A\u8868\u5355\u7684\u503C\uFF0C\u53EF\u4EE5\u4E0D\u4F20\u6B64\u53C2\u6570\u3002|\u63A5\u53D7\u4EFB\u4F55\u6570\u503C\u3002<br/>`undefined`:\u6E05\u7A7A\u8868\u5355\u7684\u503C<br>\u539F\u59CB\u503C:\u8868\u5355\u7684\u539F\u59CB\u503C\uFF0C\u6839\u636E\u8868\u5355\u4E0D\u540C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u3001\u5BF9\u8C61\u3001\u6570\u7EC4\u7B49<br>JSON\u6570\u503C:\u8868\u5355\u539F\u59CB\u503CJSON\u5E8F\u5217\u5316\u540E\u7684\u503C\uFF0C\u4F20\u5165\u540E\u8868\u5355\u4F1A\u81EA\u52A8\u89E3\u6790\u5E76\u8FD8\u539F\u539F\u59CB\u503C\u3002|Any|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoMethodSet" form-name="\u8868\u5355\u540D" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoMethodSet\').set({%&methodValue%})">\u8BBE\u7F6E\u503C</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSet\').set()">\u79FB\u9664\u503C</ui-link>\n</div>\n:::\n\n#### get([json])\n\n\u83B7\u53D6\u8868\u5355\u7684\u503C\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|json|YES|\u8868\u5355\u7684\u503C\u662F\u5426\u9700\u8981JSON\u5E8F\u5217\u5316\u540E\u8FD4\u56DE\uFF0C\u82E5\u4F60\u9700\u8981\u548C\u5176\u4ED6\u7A0B\u5E8F\u8FDB\u884C\u6570\u636E\u4EA4\u4E92\uFF0C\u4F7F\u7528JSON\u662F\u4E00\u79CD\u8F83\u597D\u7684\u65B9\u6CD5\u3002|`true`<br>`false`|Boolean|`true`|\n\n:::democode/html\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoMethodGet" form-name="\u8868\u5355\u540D" :default-value="{%&methodDefaultValue%}" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(window.morning.findVM(\'demoMethodGet\').get(false))">\u83B7\u53D6\u8868\u5355\u539F\u59CB\u503C</ui-link>\n    <ui-link js="alert(window.morning.findVM(\'demoMethodGet\').get())">\u83B7\u53D6\u8868\u5355JSON\u503C</ui-link>\n</div>\n:::\n\n#### setName([name])\n\n\u8BBE\u7F6E\u8868\u5355\u7684\u540D\u79F0\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|name|YES|\u9700\u8981\u8BBE\u7F6E\u8868\u5355\u7684\u540D\u79F0\uFF0C\u5982\u679C\u9700\u8981\u6E05\u7A7A\u8868\u5355\u7684\u540D\u79F0\uFF0C\u53EF\u4EE5\u4E0D\u4F20\u6B64\u53C2\u6570\u3002|\u4EFB\u610F\u5B57\u7B26\u4E32|String|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoMethodSetName" form-name="\u59D3\u540D" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(window.morning.findVM(\'demoMethodSetName\').getName())">\u83B7\u53D6\u8868\u5355\u540D\u79F0</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetName\').setName(\'\u5E74\u9F84\')">\u8BBE\u7F6E\u8868\u5355\u540D\u79F0</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetName\').setName()">\u79FB\u9664\u8868\u5355\u540D\u79F0</ui-link>\n</div>\n:::\n\n#### getName()\n\n\u83B7\u53D6\u8868\u5355\u7684\u540D\u79F0\u3002\n\n:::democode/html\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoMethodGetName" form-name="\u59D3\u540D" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(window.morning.findVM(\'demoMethodGetName\').getName())">\u83B7\u53D6\u8868\u5355\u540D\u79F0</ui-link>\n</div>\n:::\n\n#### setKey([key])\n\n\u8BBE\u7F6E\u8868\u5355\u7684KEY\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|key|YES|\u9700\u8981\u8BBE\u7F6E\u8868\u5355\u7684KEY\uFF0C\u5982\u679C\u9700\u8981\u6E05\u7A7A\u8868\u5355\u7684KEY\uFF0C\u53EF\u4EE5\u4E0D\u4F20\u6B64\u53C2\u6570\u3002|\u4EFB\u610F\u5B57\u7B26\u4E32|String|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoMethodSetKey" form-name="\u8868\u5355\u540D" form-key="name" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(window.morning.findVM(\'demoMethodSetKey\').getKey())">\u83B7\u53D6\u8868\u5355KEY</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetKey\').setKey(\'age\')">\u8BBE\u7F6E\u8868\u5355KEY</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetKey\').setKey()">\u79FB\u9664\u8868\u5355KEY</ui-link>\n</div>\n:::\n\n#### getKey()\n\n\u83B7\u53D6\u8868\u5355\u7684KEY\u3002\n\n:::democode/html\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoMethodGetKey" form-name="\u8868\u5355\u540D" form-key="name" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(window.morning.findVM(\'demoMethodGetKey\').getKey())">\u83B7\u53D6\u8868\u5355KEY</ui-link>\n</div>\n:::\n\n#### setGroup([groups])\n\n\u8BBE\u7F6E\u8868\u5355\u6240\u5C5E\u7684\u8868\u5355\u7EC4\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|groups|YES|\u9700\u8981\u8BBE\u7F6E\u7684\u8868\u5355\u7EC4\u3002\u5982\u679C\u9700\u8981\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4\uFF0C\u53EF\u4EE5\u4E0D\u4F20\u6B64\u53C2\u6570\u3002|`undefined`:\u6E05\u7A7A\u6240\u6709\u8868\u5355\u7EC4<br>String:\u8BBE\u7F6E\u4E00\u4E2A\u8868\u5355\u7EC4<br>Array:\u8BBE\u7F6E\u591A\u4E2A\u8868\u5355\u7EC4\u3002|String<br>Array<br>Undefined|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{%uikey%} ref="demoMethodSetGroup" form-name="\u8868\u5355\u540D" form-key="name" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(JSON.stringify(window.morning.findVM(\'demoMethodSetGroup\').getGroup()))">\u83B7\u53D6\u8868\u5355\u7EC4</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetGroup\').setGroup(\'group1\')">\u8BBE\u7F6E\u5355\u4E2A\u8868\u5355\u7EC4</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetGroup\').setGroup([\'group1\', \'group2\'])">\u8BBE\u7F6E\u591A\u4E2A\u8868\u5355\u7EC4</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodSetGroup\').setGroup()">\u79FB\u9664\u6240\u6709\u8868\u5355\u7EC4</ui-link>\n</div>\n:::\n\n#### getGroup()\n\n\u83B7\u53D6\u8868\u5355\u6240\u5C5E\u7684\u8868\u5355\u7EC4\u3002\n\n:::democode/html\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{%uikey%} ref="demoMethodGetGroup" form-name="\u8868\u5355\u540D" form-key="name" group="group1" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(JSON.stringify(window.morning.findVM(\'demoMethodGetGroup\').getGroup()))">\u83B7\u53D6\u8868\u5355\u7EC4</ui-link>\n</div>\n:::\n\n#### addGroup(group)\n\n\u6DFB\u52A0\u4E00\u4E2A\u6307\u5B9A\u7684\u8868\u5355\u7EC4\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|group|NO|\u6DFB\u52A0\u8868\u5355\u7EC4\u7684KEY|\u8868\u5355\u7EC4\u7684KEY|String|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{%uikey%} ref="demoMethodAddGroup" form-name="\u8868\u5355\u540D" form-key="name" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(JSON.stringify(window.morning.findVM(\'demoMethodAddGroup\').getGroup()))">\u83B7\u53D6\u8868\u5355\u7EC4</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodAddGroup\').addGroup(\'group1\')">\u6DFB\u52A0\u8868\u5355\u7EC4</ui-link>\n</div>\n:::\n\n#### removeGroup(group)\n\n\u79FB\u9664\u4E00\u4E2A\u6307\u5B9A\u7684\u8868\u5355\u7EC4\u3002\n\n|KEY|\u53EF\u9009|\u63CF\u8FF0|\u63A5\u53D7\u503C|\u503C\u7C7B\u578B|\u9ED8\u8BA4\u503C|\n|-|-|-|-|-|-|\n|group|NO|\u79FB\u9664\u8868\u5355\u7EC4\u7684KEY|\u8868\u5355\u7EC4\u7684KEY|String|`undefined`|\n\n:::democode/html\n<div style="width:300px;">\n    <!-- \u8BBE\u7F6E\u591A\u4E2A\u7EC4 -->\n    <ui-{%uikey%} ref="demoMethodRemoveGroup" form-name="\u8868\u5355\u540D" form-key="name" group="group1" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="alert(JSON.stringify(window.morning.findVM(\'demoMethodRemoveGroup\').getGroup()))">\u83B7\u53D6\u8868\u5355\u7EC4</ui-link>\n    <ui-link js="window.morning.findVM(\'demoMethodRemoveGroup\').removeGroup(\'group1\')">\u79FB\u9664\u8868\u5355\u7EC4</ui-link>\n</div>\n:::\n    ',
    formEvent: '\n#### value-change\n\n\u5F53\u8868\u5355\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u3002\n\n:::vue/html\nnew Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    methods : {\n        echo : function () {\n            console.log(\'demoValueChange.console1\', \'value-change event!\');\n        }\n    }\n});\n---\n<div style="width:300px;">\n    <ui-{%uikey%} ref="demoValueChange" form-name="\u8868\u5355\u540D" @value-change="echo" {%&eventMoreAttr%}>{%&eventSlot%}</ui-{%uikey%}>\n    <br>\n    <ui-link js="window.morning.findVM(\'demoValueChange\').set({%&eventValue%})">\u89E6\u53D1value-change\u4E8B\u4EF6</ui-link>\n</div>\n:::\n\n#### \u751F\u547D\u5468\u671F\u4E8B\u4EF6\n\n:::vue/html\nwindow.demoEventLifecycle = new Vue({\n    el : \'{$el}\',\n    template : \'{$template}\',\n    data : function () {\n        return {\n           text : \'\u6309\u94AE\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n});\n---\n<div style="width:300px;">\n    <ui-{%uikey%}\n        ref="demoEventLifecycle"\n        form-name="\u8868\u5355\u540D123"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n        {%&eventMoreAttr%}\n    >{%&eventSlot%}<span style="display:none;">{*text*}</span></ui-{%uikey%}>\n\n    <br><br>\n\n    <ui-link js="javascript:window.demoEventLifecycle.text=\'\u751F\u547D\u5468\u671F\u4E8B\u4EF6\';">\u89E6\u53D1update</ui-link>\n    <ui-link js="javascript:morning.findVM(\'demoEventLifecycle\').$destroy();">\u89E6\u53D1destroy</ui-link>\n</div>\n:::\n'
};

var extRepeat = function extRepeat(content, paramStr, token, md) {

    var params = {};

    params.list = [];

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = paramStr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;


            item = item.split('|');

            params.list.push(item);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var fullContent = '';

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = params.list[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _item = _step3.value;


            var _opt = {
                content: content,
                context: {},
                style: []
            };

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = _item[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var sitem = _step4.value;


                    _opt.param = undefined;

                    if (sitem === 'size') {

                        repeater.size(_opt);
                    } else if (/^color/.test(sitem)) {

                        _opt.param = sitem.split(':')[1];
                        repeater.color(_opt);
                    } else if (/^state/.test(sitem)) {

                        _opt.param = sitem.split(':')[1];
                        repeater.state(_opt);
                    } else if (/^br/.test(sitem)) {

                        _opt.param = sitem.split(':')[1];
                        repeater.br(_opt);
                    } else if (/^formConfig/.test(sitem)) {

                        repeater.formConfig(_opt);
                    } else if (/^formValueType/.test(sitem)) {

                        _opt.param = sitem.split(':')[1];
                        repeater.formValueType(_opt);
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            _mustache2.default.parse(_opt.content, ['{$', '}']);

            var renderContent = _mustache2.default.render(_opt.content, _opt.context);

            fullContent += '<div class="demo" style="' + _opt.style.join('') + '">' + renderContent + '</div><pre><code class="lang-' + token.lang + '">' + md.utils.escapeHtml(renderContent) + '</code></pre>\n';
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    return fullContent;
};

var extVue = function extVue(content, paramStr, token, md) {

    var js = paramStr.join('\n');
    var html = content;
    var demoid = 'demo-' + _underscore2.default.random(randomRangeMin, randomRangeMax);
    var context = {
        id: demoid,
        el: '#' + demoid + '-el',
        template: '#' + demoid + '-tmpl'
    };
    var code = void 0,
        demo = void 0;

    _mustache2.default.parse(js, ['{$', '}']);
    js = _mustache2.default.render(js, context);

    _mustache2.default.parse(html, ['{$', '}']);
    html = _mustache2.default.render(html, context);

    code = '<div id="' + demoid + '-el"><!-- ' + demoid + ' \u5BB9\u5668 --></div>\n\n';
    demo = '<div id="' + demoid + '-el"></div>';

    var htmlScript = document.createElement('script');

    htmlScript.innerHTML = '\n' + html;
    htmlScript.type = 'x-template';
    htmlScript.id = demoid + '-tmpl';

    code += htmlScript.outerHTML + '\n\n';

    htmlScript.innerHTML = htmlScript.innerHTML.replace(/\{\*([a-zA-Z0-9_.]+)\*\}/g, '{{$1}}');
    evals.push(htmlScript);

    var jsScript = document.createElement('script');

    jsScript.innerHTML = '\n' + js + '\n';
    evals.push(jsScript);
    code += jsScript.outerHTML;

    return '<div class="demo">' + demo + '</div><pre><code class="lang-' + token.lang + '">' + md.utils.escapeHtml(code) + '</code></pre>\n';
};

var extPreset = function extPreset(content, paramStr) {

    var context = {
        content: content
    };
    var template = presets[paramStr[0]];

    content = content.split('\n');

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = content[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var item = _step5.value;


            if (item) {

                item = item.split(':');
                context[item.shift()] = item.join(':');
            }
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    _mustache2.default.parse(template, ['{%', '%}']);
    template = _mustache2.default.render(template, context);

    return markdown.render(template);
};

var demoWithCodePlugin = function demoWithCodePlugin(md, opt) {
    md.block.ruler.before('table', 'codeWithDemo', function (state, startLine, endLine) {

        // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {

            return false;
        }

        var charCode = 0x3A;

        var pos = state.bMarks[startLine] + state.tShift[startLine];
        var end = state.eMarks[startLine];
        var marker = state.src.charCodeAt(pos);
        var start = void 0,
            len = void 0,
            markup = void 0,
            method = void 0,
            nextLine = void 0,
            token = void 0,
            haveEndMarker = void 0;

        // 0x3a is :
        if (marker !== charCode) {

            return false;
        }

        // scan marker length
        start = pos;
        pos = state.skipChars(pos, marker);
        len = pos - start;
        markup = state.src.slice(start, pos);
        method = state.src.slice(pos, end);

        if (len !== 3) {

            return false;
        }

        nextLine = startLine;

        for (;;) {

            nextLine++;

            if (nextLine >= endLine) {

                // unclosed block should be autoclosed by end of document.
                // also block seems to be autoclosed by end of parent
                break;
            }

            pos = start = state.bMarks[nextLine] + state.tShift[nextLine];
            end = state.eMarks[nextLine];

            if (pos < end && state.sCount[nextLine] < state.blkIndent) {

                // non-empty line with negative indent should stop the list:
                // - ```
                //  test
                break;
            }

            /* eslint-disable no-continue */
            if (state.src.charCodeAt(pos) !== marker) {

                continue;
            }

            if (state.sCount[nextLine] - state.blkIndent >= 4) {

                // closing fence should be indented less than 4 spaces
                continue;
            }

            pos = state.skipChars(pos, marker);

            // closing code fence must be at least as long as the opening one
            if (pos - start < len) {

                continue;
            }

            // make sure tail has spaces only
            pos = state.skipSpaces(pos);

            if (pos < end) {

                continue;
            }

            /* eslint-enable no-continue */

            haveEndMarker = true;

            break;
        }

        len = state.sCount[startLine];
        state.line = nextLine + (haveEndMarker ? 1 : 0);

        token = state.push('extMethod', 'div', 1);
        token.method = method.split('/')[0];
        token.lang = method.split('/')[1];
        token.content = state.getLines(startLine + 1, nextLine, len, true);
        token.markup = markup;
        token.map = [startLine, state.line];

        return true;
    });

    md.renderer.rules.extMethod = function (tokens, idx) {

        var token = tokens[idx];
        var method = token.method;
        var list = token.content.split('\n---\n');
        var paramStr = '';
        var content = void 0;
        var result = '';

        if (list.length > 1) {

            paramStr = list.shift();
        }

        content = list.join('\n---\n');

        paramStr = paramStr.split('\n');

        if (method === 'democode') {

            result = '<div class="demo">' + content + '</div><pre><code class="lang-' + token.lang + '">' + md.utils.escapeHtml(content) + '</code></pre>\n';
        }

        if (method === 'repeat') {

            result = extRepeat(content, paramStr, token, md);
        }

        if (method === 'vue') {

            result = extVue(content, paramStr, token, md);
        }

        if (method === 'preset') {

            result = extPreset(content, paramStr);
        }

        return result;
    };
};

markdown.use(demoWithCodePlugin);

window.Vue.component('doc-component-status', _DocComponentStatus2.default);

// let parser = (text, el) => {

//     let patt = /````(html|js|css|vue|)((\n[\t ]*[\@a-zA-Z0-9\:\.\,\|]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
//     let varpatt = /````(html|js|css)\n(\@var\:([a-zA-Z0-9]+))\n((.|\n)+?)\n([ \t]*)````/g;
//     let presetpatt = /````(preset)((\n[\t ]*[a-zA-Z0-9@'"[\]?<>/\-_{}=:.,|!()\u4e00-\u9fa5 ]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
//     let result;
//     let vars = {
//         js : {},
//         html : {}
//     };
//     let blocks = [];
//     let vueContext = {};

//     while ((result = presetpatt.exec(text)) !== null) {

//         let rdata = result[2].replace(/^\n/, '').split('\n');
//         let id = rdata[0].split(':')[1];

//         rdata.shift();

//         for (let item of rdata) {

//             let name = item.split(':')[0].replace(/^@/, '');
//             let valuelist = item.split(':');

//             valuelist.shift();

//             let value = valuelist.join(':');

//             vueContext[name] = value;

//         }

//         let content = presets[id];

//         text = text.slice(0, result.index - 1) + content + text.slice(result.index + result[0].length, text.length);
//         presetpatt.lastIndex = 0;

//     }

//     while ((result = varpatt.exec(text)) !== null) {

//         vars[result[1]][result[3]] = result[4];
//         text = text.slice(0, result.index - 1) + text.slice(result.index + result[0].length, text.length);

//         varpatt.lastIndex = 0;

//     }

//     while ((result = patt.exec(text)) !== null) {

//         let content = result[4];
//         let helpers = result[2].split('\n');

//         helpers.shift();

//         let block = {
//             content,
//             type : result[1],
//             result,
//             context : vueContext,
//             helpers : []
//         };

//         for (let name of helpers) {

//             let list = name.split('|');
//             let group = [];

//             for (let help of list) {

//                 let fn = help.split(':')[0].replace(/^\@/, '');
//                 let param = help.split(':')[1];

//                 group.push({
//                     fn,
//                     param
//                 });

//             }

//             block.helpers.push(group);

//         }

//         blocks.push(block);

//     }

//     return {
//         vars,
//         blocks,
//         text
//     };

// };

// let helpers = {
//     import : opt => {

//         let name = opt.param.split(',');

//         opt.content = window.$(`script#${name[0]}`);
//         opt.context = {
//             uiname : name[1]
//         };

//         return opt;

//     },
//     origin : opt => {

//         return opt;

//     },
//     render : opt => {

//         opt.isText = true;

//         return opt;

//     },
//     use : opt => {

//         let links = opt.param.split(',');

//         opt.content = {};

//         for (let link of links) {

//             let type = link.split('.')[0];
//             let key = link.split('.')[1];

//             opt.content[type] = `&&&&&{$id}|${opt.vars[type][key]}`;

//         }

//         opt.render = sopt => {

//             let list = {};
//             let code = '';
//             let demo = '';
//             let newData = extend(true, {}, sopt.context);
//             let lastType;

//             for (let key of Object.keys(newData)) {

//                 let value = newData[key];
//                 let id = `demo-${_.random(randomRangeMin, randomRangeMax)}`;

//                 if (value instanceof Array) {

//                     for (let svalue of value) {

//                         svalue.id = id;
//                         svalue.el = `#${id}-el`;
//                         svalue.template = `#${id}-tmpl`;

//                     }

//                 } else if (typeof value === 'object') {

//                     value.id = id;
//                     value.el = `#${id}-el`;
//                     value.template = `#${id}-tmpl`;

//                 }

//             }

//         };

//         return opt;

//     }
// };

// let make = {
//     block : block => {

//         return '<div class="demo">\n' + block.content + '</div>\n\n```' + block.type + '\n' + block.content + '\n```\n';

//     },
//     opt : (opts, block) => {

//         let text = '';

//         for (let opt of opts) {

//             let code,
//                 demo;

//             opt.context = extend({}, data, opt.context);

//             if (typeof opt.render === 'function') {

//                 let result = opt.render(opt);

//                 code = result.code;
//                 demo = result.demo;

//             } else {

//                 let template = opt.content;

//                 Mustache.parse(template, ['{$', '}']);

//                 code = Mustache.render(template, opt.context);

//             }

//             if (opt.style.length === 0) {

//                 opt.style = '';

//             } else {

//                 opt.style = opt.style.join(';');

//             }

//             if (block.type === 'vue') {

//                 block.type = 'html';

//             }

//             if (opt.isText) {

//                 text += code;

//             } else {

//                 text += '<div class="demo" style="' + opt.style + '">\n' + (demo || code) + '</div>\n\n```' + block.type + '\n' + code + '\n```\n';

//             }

//         }

//         return text;

//     }
// };

// let runner = tree => {

//     for (let block of tree.blocks) {

//         if (block.helpers.length > 0) {

//             let opts = [];

//             for (let group of block.helpers) {

//                 let opt = {
//                     content : block.content,
//                     vars : tree.vars,
//                     helperlist : group,
//                     context : block.context,
//                     style : []
//                 };

//                 for (let helper of group) {

//                     opt.param = helper.param;
//                     opt = helpers[helper.fn](opt);

//                 }

//                 opts.push(opt);

//             }

//             block._html = make.opt(opts, block);

//         } else {

//             block._html = make.block(block);

//         }

//     }

//     let text = tree.text;
//     let patt = /````(html|js|css|vue|)((\n[\t ]*[\@a-zA-Z0-9\:\.\,\|]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
//     let index = 0;
//     let result;

//     while ((result = patt.exec(text)) !== null) {

//         text = text.slice(0, result.index - 1) + tree.blocks[index++]._html + text.slice(result.index + result[0].length, text.length);

//     }

//     return text;

// };
window.Vue.directive('docmd', {
    bind: function bind(el) {

        var mdScript = el.getElementsByTagName('script')[0];

        if (mdScript && mdScript.type === 'text/markdown') {

            var text = mdScript.innerText;

            /* eslint-disable no-useless-escape */
            text = text.replace(/&lt;\/script>/g, '\<\/script>');
            /* eslint-enable no-useless-escape */

            text = text.replace(/\/`/g, '`');

            // let tree = parser(text, el);
            // text = runner(tree);

            var md = markdown.render(text);

            md = md.replace(/\\`/g, '`');

            md = md.replace(/\{\*([a-zA-Z0-9_.]+)\*\}/g, '{{"\\{\\{$1\\}\\}"}}');
            md = md.replace(/<p>(\[\[\[(.+)\]\]\])<\/p>/g, '$1');
            md = md.replace(/(\[\[\[)/, '<ui-tab class="block noborder">$1');
            md = md.replace(/\[\[\[开始\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="开始">$1</div>$3');
            md = md.replace(/\[\[\[声明\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="声明">$1</div>$3');
            md = md.replace(/\[\[\[配置\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="配置">$1</div>$3');
            md = md.replace(/\[\[\[方法\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="方法">$1</div>$3');
            md = md.replace(/\[\[\[事件\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="事件">$1</div>$3');
            md = md.replace(/\[\[\[表单值\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="表单值">$1</div>$3');
            md = md.replace(/\[\[\[源码\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="源码">$1</div>$3');
            md = md.replace(/(.|\n)$/, '$1</ui-tab>');

            md = md.replace(/<p>---demostart---<\/p>/g, '<div class="demo-area"><p class="demo-title">DEMO</p>');
            md = md.replace(/<p>---demoend---<\/p>/g, '\n</div>');

            var res = window.Vue.compile('<div>' + md + '</div>');
            var instance = new window.Vue({
                render: res.render,
                staticRenderFns: res.staticRenderFns
            });

            instance.$mount();
            el.appendChild(instance.$el);
        }
    }
});

exports.default = {
    props: {
        category: String,
        page: String,
        hasPadding: Boolean
    },
    data: function data() {

        return {};
    },
    components: {
        'doc-header': _DocHeader2.default,
        'doc-submenu': _DocSubmenu2.default,
        'doc-footer': _DocFooter2.default
    },
    mounted: function mounted() {

        _highlight2.default.initHighlightingOnLoad();

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
            for (var _iterator6 = evals[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var js = _step6.value;


                document.body.appendChild(js);
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                    _iterator6.return();
                }
            } finally {
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        page: String
    },
    computed: {
        isUnitPass: function isUnitPass() {

            return this.unit === 'pass';
        },
        isE2EPass: function isE2EPass() {

            return this.e2e === 'pass';
        }
    },
    data: function data() {

        return {
            unit: '-',
            unitNote: '',
            unitTitle: '',
            e2e: '-',
            e2eNote: '',
            e2eTitle: '',
            coverage: '-',
            coverageLevel: '-',
            lastupdate: null
        };
    },
    mounted: function mounted() {
        var _this = this;

        var usrs = {};

        $.get('/report/test.json', function (data) {

            var unitAllTest = 0;
            var unitPassTest = 0;
            var unitFailTest = 0;
            var e2eAllTest = 0;
            var e2ePassTest = 0;
            var e2eFailTest = 0;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = data.tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;


                    if (/# SKIP/.test(item.name)) {

                        return;
                    }

                    var unitReg = new RegExp('unit \u203A components \u203A ' + _this.page + ' \u203A ');
                    var e2eReg = new RegExp('e2e \u203A components \u203A ' + _this.page + ' \u203A ');

                    if (unitReg.test(item.name)) {

                        unitAllTest++;
                    }

                    if (e2eReg.test(item.name)) {

                        e2eAllTest++;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = data.pass[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _item = _step2.value;


                    if (/# SKIP/.test(_item.name)) {

                        return;
                    }

                    var unitReg = new RegExp('unit \u203A components \u203A ' + _this.page + ' \u203A ');
                    var e2eReg = new RegExp('e2e \u203A components \u203A ' + _this.page + ' \u203A ');

                    if (unitReg.test(_item.name)) {

                        unitPassTest++;
                    }

                    if (e2eReg.test(_item.name)) {

                        e2ePassTest++;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = data.fail[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _item2 = _step3.value;


                    if (/# SKIP/.test(_item2.name)) {

                        return;
                    }

                    var unitReg = new RegExp('unit \u203A components \u203A ' + _this.page + ' \u203A ');
                    var e2eReg = new RegExp('e2e \u203A components \u203A ' + _this.page + ' \u203A ');

                    if (unitReg.test(_item2.name)) {

                        unitFailTest++;
                    }

                    if (e2eReg.test(_item2.name)) {

                        e2eFailTest++;
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            if (unitAllTest === 0) {

                _this.unit = 'no';
            } else if (unitPassTest === unitAllTest) {

                _this.unit = 'pass';
            } else {

                _this.unit = 'fail';
            }

            _this.unitNote = '(' + unitPassTest + '/' + unitAllTest + ')';
            _this.unitTitle = 'All:' + unitAllTest + ', Pass:' + unitPassTest + ', Fail:' + unitFailTest;

            if (e2eAllTest === 0) {

                _this.e2e = 'no';
            } else if (e2ePassTest === e2eAllTest) {

                _this.e2e = 'pass';
            } else {

                _this.e2e = 'fail';
            }

            _this.e2eNote = '(' + e2ePassTest + '/' + e2eAllTest + ')';
            _this.e2eTitle = 'All:' + e2eAllTest + ', Pass:' + e2ePassTest + ', Fail:' + e2eFailTest;
        });

        $.get('/report/coverage/lib/components/' + this.page + '/index.vue.html', function (data) {

            var lineCoverage = data.match(/>([0-9.]+?)% <\/span>(.|\n)+?Statements/);
            var coverageLevel = data.match(/status-line ([a-z]+?)("|')/);

            if (lineCoverage && lineCoverage[1]) {

                _this.coverage = lineCoverage[1] + '%';
            } else {

                _this.coverage = '0%';
            }

            if (coverageLevel && coverageLevel[1]) {

                _this.coverageLevel = coverageLevel[1];
            } else {

                _this.coverageLevel = 'no';
            }
        });

        $.get('/report/updatelog/' + this.page + '.json', function (data) {

            var promises = [];

            data.date = data.date.replace(/((^")|("$))/g, '');

            _this.lastupdate = data;
        });
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _menu = __webpack_require__(27);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        category: String,
        page: String
    },
    computed: {
        currentMenu: function currentMenu() {

            return this.menuList[this.category] || {};
        }
    },
    data: function data() {

        return {
            menuList: _menu2.default
        };
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

module.exports = exports['default'];

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_555b49ff_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(661);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(350)
}
var normalizeComponent = __webpack_require__(0)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_555b49ff_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/pages/guide/writedoc/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-555b49ff", Component.options)
  } else {
    hotAPI.reload("data-v-555b49ff", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f53ddca_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocBody_vue__ = __webpack_require__(21);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(15)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocBody_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f53ddca_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocBody_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocBody.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocBody.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f53ddca", Component.options)
  } else {
    hotAPI.reload("data-v-6f53ddca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33244de6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocComponentStatus_vue__ = __webpack_require__(19);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(13)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocComponentStatus_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33244de6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocComponentStatus_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocComponentStatus.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocComponentStatus.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33244de6", Component.options)
  } else {
    hotAPI.reload("data-v-33244de6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d3ae136_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocSubmenu_vue__ = __webpack_require__(20);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(14)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocSubmenu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d3ae136_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocSubmenu_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocSubmenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocSubmenu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d3ae136", Component.options)
  } else {
    hotAPI.reload("data-v-3d3ae136", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "doc-status-bar"
  }, [_c('div', {
    staticClass: "item",
    class: {
      pass: _vm.isUnitPass, fail: !_vm.isUnitPass
    },
    attrs: {
      "title": _vm.unitTitle
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("Unit Test")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.unit) + " " + _vm._s(_vm.unitNote))])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: {
      pass: _vm.isE2EPass, fail: !_vm.isE2EPass
    },
    attrs: {
      "title": _vm.e2eTitle
    }
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("E2E Test")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.e2e) + " " + _vm._s(_vm.e2eNote))])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    class: [_vm.coverageLevel]
  }, [_c('span', {
    staticClass: "name"
  }, [_vm._v("Coverage")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.coverage))])])]), _vm._v(" "), (_vm.lastupdate) ? _c('div', {
    staticClass: "last-update"
  }, [_vm._v("\n        Last update : "), _c('a', {
    attrs: {
      "href": 'https://github.com/Morning-UI/morning-ui/releases/tag/' + _vm.lastupdate.version
    }
  }, [_vm._v(_vm._s(_vm.lastupdate.version))]), _vm._v(" by "), _c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.lastupdate.avatar,
      "alt": ""
    }
  }), _vm._v(" "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": _vm.lastupdate.github
    }
  }, [_vm._v(_vm._s(_vm.lastupdate.author))]), _vm._v(" at " + _vm._s(_vm.lastupdate.date) + " (" + _vm._s(_vm.lastupdate.ar) + "), commit id : "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": 'https://github.com/Morning-UI/morning-ui/commit/' + _vm.lastupdate.cid
    }
  }, [_vm._v(_vm._s(_vm.lastupdate.scid))]), _vm._v(" "), _c('br')]) : _vm._e(), _vm._v(" "), (_vm.lastupdate) ? _c('div', {
    staticClass: "contributors"
  }, [_vm._v("\n        Contributors : \n        "), _vm._l((_vm.lastupdate.contributors), function(item) {
    return _c('span', [_c('img', {
      staticClass: "avatar",
      attrs: {
        "src": item.avatar,
        "alt": ""
      }
    }), _vm._v(" "), _c('a', {
      attrs: {
        "target": "_blank",
        "href": item.github
      }
    }, [_vm._v(_vm._s(item.name))])])
  }), _vm._v("   \n    ")], 2) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-33244de6", esExports)
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {};
module.exports = exports["default"];

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "submenu"
  }, _vm._l((_vm.currentMenu), function(link, name) {
    return _c('li', [(link === '/' + _vm.category + '/' + _vm.page + '.html') ? [(typeof link === 'string') ? _c('a', {
      staticClass: "current",
      attrs: {
        "href": link
      },
      domProps: {
        "innerHTML": _vm._s(name)
      }
    }) : _c('p', {
      staticClass: "title",
      domProps: {
        "innerHTML": _vm._s(name)
      }
    })] : [(typeof link === 'string') ? _c('a', {
      attrs: {
        "href": link
      },
      domProps: {
        "innerHTML": _vm._s(name)
      }
    }) : _c('p', {
      staticClass: "title",
      domProps: {
        "innerHTML": _vm._s(name)
      }
    })]], 2)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d3ae136", esExports)
  }
}

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('doc-header', {
    attrs: {
      "category": _vm.category
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [_c('doc-submenu', {
    attrs: {
      "category": _vm.category,
      "page": _vm.page
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "docmd",
      rawName: "v-docmd"
    }],
    staticClass: "content markdown-body",
    class: {
      padding: _vm.hasPadding
    }
  }, [_vm._t("default")], 2)], 1), _vm._v(" "), _c('doc-footer')], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6f53ddca", esExports)
  }
}

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DocGuide = __webpack_require__(34);

var _DocGuide2 = _interopRequireDefault(_DocGuide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {

        return {
            page: 'writedoc'
        };
    },
    components: {
        'doc-guide': _DocGuide2.default
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        category: String
    },
    computed: {
        isIndex: function isIndex() {
            return this.category === 'home';
        },
        isGuide: function isGuide() {
            return this.category === 'guide';
        },
        isComponent: function isComponent() {
            return this.category === 'component';
        },
        isCustom: function isCustom() {
            return this.category === 'custom';
        }
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(131);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#root',
    render: function render(h) {
        return h(_index2.default);
    }
});

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DocBody = __webpack_require__(16);

var _DocBody2 = _interopRequireDefault(_DocBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        page: String,
        hasPadding: Boolean
    },
    data: function data() {

        return {
            category: 'guide'
        };
    },
    components: {
        'doc-body': _DocBody2.default
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

module.exports = exports['default'];

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocGuide_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocGuide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocGuide_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e9905d3_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocGuide_vue__ = __webpack_require__(35);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(33)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocGuide_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e9905d3_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocGuide_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocGuide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocGuide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e9905d3", Component.options)
  } else {
    hotAPI.reload("data-v-7e9905d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('doc-body', _vm._b({
    attrs: {
      "category": _vm.category
    }
  }, 'doc-body', _vm.$props, false), [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7e9905d3", esExports)
  }
}

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocFooter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocFooter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b0281758_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocFooter_vue__ = __webpack_require__(9);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(5)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocFooter_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b0281758_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocFooter_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b0281758", Component.options)
  } else {
    hotAPI.reload("data-v-b0281758", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('doc-guide', {
    attrs: {
      "page": _vm.page,
      "hasPadding": true
    }
  }, [_c('script', {
    attrs: {
      "type": "text/markdown"
    }
  }, [_vm._v("\n\n# 编写文档\n\n文档作为Morning UI的组成部分，是非常重要且必不可少的。\n\nMorning UI使用了一套基于[CommonMark Spec](http://spec.commonmark.org/)扩展的Markdown解析器，这意味着你可以使用任何[CommonMark Spec](http://spec.commonmark.org/)语法。\n\n### 如何编写\n\n#### 创建新文档\n\n在开始使用这些方便的用法前，你需要先为你的组件创建文档。\n\n组件的文档放在项目的`src/docs/pages/component`目录下，每一个文件夹就是一份组件文档。\n\n文件夹中包含:\n\n- index.js : 文档的视图模型\n- index.vue : 文档的内容\n\n为你的组件新建一个文件夹，然后生成这两个文件，`index.js`每个组件都一样只需要从别的组件拷贝一份即可，`index.vue`的模板如下：\n\n```html\n<template>\n    <doc-component\n            :page=\"page\"\n            :hasPadding=\"true\"\n        >\n    <script type=\"text/markdown\">\n\n        <!-- 文档内容 -->\n\n        &lt;/script>\n    </doc-component>\n</template>\n \n<script>\nimport DocComponent                 from 'Docs/common/DocComponent.vue';\n\nexport default {\n    data : function () {\n\n        return {\n            page : '页面KEY'\n        };\n\n    },\n    components : {\n        'doc-component' : DocComponent\n    }\n};\n&lt;/script>\n\n<style lang=\"less\">\n</style>\n```\n\n这里只需要修改两个地方：\n\n1. `<template>`中的`文档内容`部分，你的文档写在这里\n2. `<script>`标签中的`页面KEY`部分，这里需要和组件的KEY保持一致\n\n这两个文件创建完成后，运行`npm run dev`，即可在`http://localhost:8080/component/[页面KEY].html`访问你的文档。\n\n#### 文档格式\n\n为了保证文档的一致性，请遵循下面的文档格式。\n\n##### 标题\n\n- `#` : 用于文档主标题\n- `###` : 用于每个章节的标题\n- `####` : 用于每个二级章节的标题\n- `#####` : 用于每个三级章节的标题\n\n文档中最多只能包含三级章节，且不使用`##`。\n\n##### 代码、演示及示例\n\n- ` ``` ` : 代码区域([CommonMark Spec](http://spec.commonmark.org/)支持)\n- `:::democode` : 演示区域，包含示例和代码(扩展用法，见下面章节)\n- `:::demo` : 示例区域(扩展用法，见下面章节)\n\n##### 链接\n\n- `[标题](链接)` : 采用[CommonMark Spec](http://spec.commonmark.org/)的链接，如果是站内采用`/path/page.html`这样的跟相对路径。\n\n##### 文本样式\n\n- `__ __` : 加粗\n- `_ _` : 斜体\n- `~~ ~~` : 删除，采用[GFM的删除线](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text)\n\n##### 表格\n\n采用[GFM的表格](https://help.github.com/articles/organizing-information-with-tables/)。\n\n##### HTML或组件内容\n\n采用HTML。\n\n### 扩展功能\n\nMorning UI为了让开发者尽可能轻松的写文档，扩展了[CommonMark Spec](http://spec.commonmark.org/)。提供了很多方便的用法：\n\n- [删除线(GFM)](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text)\n- [表格(GFM)](https://help.github.com/articles/organizing-information-with-tables/)\n- 演示 : 一份代码，同时生成可视化的示例和完整展示代码。\n- 重复 : 可以按预设的规则重复你的演示代码。\n- Vue实例 : 快速生成Vue容器、模板和JS，并进行绑定。\n- 预设 : 预设的演示代码，传入配置即可生成演示代码。\n- 示例 : 用虚线框起来的一个区域，告诉使用者这里面是示例。用以区分文档和示例。\n\n现在你对于这些新概念一定很懵逼，下面的章节详细为你解释了这些新的用法。\n\n#### 扩展语法\n\n除示例之外的，演示、重复、Vue实例、预设都基于了同一种扩展语法：使用`:::`声明的区块，格式如下：\n\n```text\n:::[扩展名]/[代码语言]\n[配置部分]\n---\n[内容部分]\n:::\n```\n\n- `扩展名` : 标记需要使用的扩展功能\n- `代码语言` : <ui-badge xxs minor>非必需</ui-badge>声明`内容部分`的语言类型\n- `配置部分` : <ui-badge xxs minor>非必需</ui-badge>可以用来配置不同的扩展功能，不同扩展的配置方式不同，会在后面详细说明\n- `内容部分` : <ui-badge xxs minor>非必需</ui-badge>是扩展的主体内容部分\n\n其中配置和内容采用`---`分隔。\n\n#### 演示\n\n下面这段代码标记了一段演示区域:\n\n```text\n:::democode/html\n<p>这是一个演示区域</p>\n:::\n```\n\n最后会在文档中生成如下的内容:\n\n---demostart---\n\n:::democode/html\n<p>这是一个演示区域</p>\n:::\n\n---demoend---\n\n`演示`会同时生成示例和代码。避免了示例和代码需要重复写两份，这也可以确保示例和代码的一致性。\n\n在上面示例中的`html`你也可以替换成其他语言。\n\n#### 重复\n\n在演示区域中支持使用重复来减少重复文档的书写，比如你的`演示`需要展现所有支持的组件尺寸：\n\n```text\n:::democode/html\n<ui-btn xxl>XXL尺寸</ui-btn>\n<ui-btn xl>XL尺寸</ui-btn>\n<ui-btn l>L尺寸</ui-btn>\n<ui-btn m>M尺寸</ui-btn>\n<ui-btn s>S尺寸</ui-btn>\n<ui-btn xs>XS尺寸</ui-btn>\n<ui-btn xxs>XXS尺寸</ui-btn>\n:::\n```\n\n上面的写法十分繁琐，`重复`让你只需写出一个尺寸的演示，然后循环输出其余的尺寸。通过`size`配置，简写成：\n\n```text\n:::repeat/html\nsize\n---\n<ui-btn {$sizeKey}>{$&sizeName}</ui-btn>\n:::\n```\n\n最终的效果：\n\n---demostart---\n\n:::repeat/html\nsize\n---\n<ui-btn {$sizeKey}>{$&sizeName}</ui-btn>\n:::\n\n---demoend---\n\n`重复`的配置部分声明了需要采用哪种重复方式，`重复`会循环渲染输出内容部分。并且内容部分支持变量，在循环时会动态渲染，语法基于[mustache](https://github.com/janl/mustache.js)，采用`{$`和`}`来包裹变量。\n\n比如上面示例中的的`size`重复，支持`sizeKey`和`sizeName`，所以你可以在下面的内容部分中使用这两个变量，通过`重复`的循环来输出所有的尺寸示例。\n\n##### 配置参数\n\n`重复`的配置支持参数，你可以在配置后通过`:`来添加参数（一条配置仅支持一个参数）。\n\n比如`color`需要传入一个色彩参数，来告诉指令需要渲染哪组色彩：\n\n```text\n:::repeat/html\ncolor:theme\n---\n<ui-btn {$colorKey}>{$&colorName}</ui-btn>\n:::\n```\n\n最终的效果：\n\n---demostart---\n\n:::repeat/html\ncolor:theme\n---\n<ui-btn {$colorKey}>{$&colorName}</ui-btn>\n:::\n\n---demoend---\n\n##### 多个演示区域\n\n有时候在一个演示区域内放太多示例会让使用者难以阅读，所以`重复`也支持循环生成多个演示区域：\n\n```text\n:::repeat/html\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<ui-btn {$colorKey}>{$&colorName}</ui-btn>\n:::\n```\n\n最终的效果：\n\n---demostart---\n\n:::repeat/html\ncolor:blue\ncolor:silver\ncolor:gray\n---\n<ui-btn {$colorKey}>{$&colorName}</ui-btn>\n:::\n\n---demoend---\n\n如同上面的示例，每一行的配置都会生成一个新的演示区域。同时，`重复`也会非常贴心的帮改变演示区域的样式，让示例看起来更易读。\n\n##### 多配置\n\n有些时候为了展示复杂的重复情况，你需要同时使用多个配置进行循环输出示例，你可以这样使用：\n\n```text\n:::repeat/html\nstate|br:2|color:theme\n---\n<ui-btn {$stateKey} {$colorKey}>{$&stateName}</ui-btn>\n:::\n```\n\n最终的效果：\n\n---demostart---\n\n:::repeat/html\nstate|br:2|color:theme\n---\n<ui-btn {$stateKey} {$colorKey}>{$&stateName}</ui-btn>\n:::\n\n---demoend---\n\n通过`|`分隔你可以在一行中使用多个配置，你的文档将会从左向右重复这些配置。其中`br`配置用来向文档插入换行符，让示例更易读。\n\n##### 所有配置\n\n|配置名|参数|说明|支持变量|\n|-|-|-|-|\n|size|无|循环输出尺寸声明|sizeKey / sizeName|\n|color|`theme`:主题色组<br>`feature`:功能色组<br>`black`:黑色组<br>`blue`:青色组<br>`silver`:银色组<br>`gray`:浅色组<br>|循环输出颜色声明|colorKey / colorName|\n|state|需要输出的状态，多个之间用`,`分隔。<br>`normal`:正常状态<br>`hover`:Hover状态<br>`active`:激活状态<br>`disabled`:禁用状态<br>`apparent`:醒目状态<br>`loading`:载入中<br>`processing`:处理中|循环输出状态声明|stateKey / stateName|\n|br|需要插入的换行符数量|在循环中插入换行符`<br>`|无|\n|formConfig|无|输出演示用的表单名称、Key、表单组(由预设使用)|formName / formKey / formGroupOne|\n|formValueType|需要输出一组值的名称|在表单值演示中输出一组包含所有类型的数值|valueType / valueContent|\n\n#### Vue实例\n\n有些时候你的演示会需要使用到Vue的实例，这意味着需要创建Vue的容器、模板、JS并将它们绑定在一起，这时候你可以使用`Vue实例`来简化操作。\n\n扩展中的配置部分变为了初始化`Vue实例`的JS脚本，内容部分为Vue的模板：\n\n```text\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            console.log('emit event!');\n        }\n    }\n});\n---\n<div>\n    <ui-btn @emit=\"echo\">点击触发emit事件</ui-btn>\n</div>\n:::\n```\n\n你一定注意到上面代码中的`{$el}`和`${template}`，这是[mustache](https://github.com/janl/mustache.js)语法，在生成文档时`Vue实例`会自动帮你替换成对应的Vue元素及模板id。\n\n这是为了防止同一个页面中的Vue元素或模板id冲突，`Vue实例`会帮你管理这些id。\n\n最终效果：\n\n---demostart---\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        echo : function () {\n            alert('emit event!');\n        }\n    }\n});\n---\n<div>\n    <ui-btn @emit=\"echo\">点击触发emit事件</ui-btn>\n</div>\n:::\n\n---demoend---\n\n其中的`<div id=\"demo-[id]-el\">`就是`Vue实例`自动帮你生成的Vue实例根节点。\n\n#### 预设\n\n在文档中存在着大量的雷同的文档，不同组件之间仅有几处区别，为了降低这部分重复工作。我们将这些文档做成了预设模板，你只需要传入对应的参数即可生成最终文档。\n\n使用方式如下：\n\n```text\n:::preset/html\nformStatement\n---\nuikey:textinput\nstatementDefaultValue:''\n:::\n```\n\n在扩展的配置区域设置需要使用`预设`的名称，比如上面示例使用了`formStatement`预设。\n\n在内容区域有两种用法：\n\n一种是为`预设`传入的参数，一行一个，格式是`[参数名]:[参数值]`，冒号分隔参数名和参数值，这些参数会填写到预设模板中对应的位置。\n\n另一种是不设置参数，内容区域整个传入。不同的预设支持不同的用法，详见下面的`所有预设`章节。\n\n最终的效果：\n\n---demostart---\n\n:::preset\nformStatement\n---\nuikey:textinput\nstatementDefaultValue:''\n:::\n\n---demoend---\n\n可以看到上面这一大段的文档，仅需6行代码就可以生成，这就是`预设`的效果。\n\n##### 所有预设\n\n下面罗列了所有可以使用的预设及参数：\n\n|预设|参数/内容|说明|\n|-|-|-|\n|statementColor|@uikey：组件的Key|除表单组件外的色彩声明文档(仅简单情况，负责情况请使用自定义模板和`重复`来生成)|\n|formStatement|@uikey：组件的Key<br>@statementDefaultValue：组件的默认值<br>@statementMoreAttr：组件的配置<br>@statementSlot：组件的插值|输出表单组件的声明文档(仅状态)|\n|formStatementWithStyle|@uikey：组件的Key<br>@statementDefaultValue：组件的默认值<br>@statementMoreAttr：组件的配置<br>@statementSlot：组件的插值|输出表单组件的声明文档(包含状态及色彩)|\n|formConfigDemo|@uikey：组件的Key<br>@configDefaultValue：组件的默认值<br>@configMoreAttr：组件的配置<br>@configSlot：组件的插值|表单基本配置示例文档|\n|formConfigTable|组件的其余配置作为内容部分|表单配置说明文档(表格)|\n|formMethod|@uikey：组件的Key<br>@methodDefaultValue：组件的默认值<br>@methodMoreAttr：组件的配置<br>@methodSlot：组件的插值<br>@methodValue：组件的值|表单基本方法示例文档|\n|formEvent|@uikey：组件的Key<br>@eventMoreAttr：组件的配置<br>@eventSlot：组件的插值<br>@eventValue：组件的值|表单基本事件示例文档|\n\n\n#### 示例\n\n有些时候你的示例不需要代码片段，仅仅是一段效果的HTML。这时候示例和文档会难以区分，比如这篇文档上面的那些`最终效果`。\n\n这时候你可以使用`---demostart---`和`---demoend---`将你的演示区域包裹起来，最终整个演示区域会被虚线框起来，用以区分示例和文档。\n\n注意：`---demostart---`和`---demoend---`前后需要空一行。\n\n### 文档编写规范\n\n编写文档时请遵循[开发规范](/guide/devrule.html)中的文档规范，[Code Review](/guide/review.html)将会检查文档编写规范。\n\n### 组件(Component)文档\n\n#### 内容组成\n\n组件的文档从上至下由几部分组成：\n\n- 标题 : 组件的名称及标签。\n- 组件状态栏 : 组件的单元/集成测试情况，测试覆盖率。组件最后更新日期、作者、commid id以及所有贡献者。\n- 开始 : 简单介绍组件，并从组件最简单的用法开始，一一列举组件常见的用法。\n- 声明 : 组件的声明支持情况，及所有声明的演示。\n- 配置 : 组件的配置详情，及配置的演示。\n- 方法 : 组件所有方法的演示及文档。\n- 事件 : 组件所有的事件演示及文档。\n- 表单值 : 组件的值类型、格式、默认值及输入/输出演示。\n- 源码 : 组件的`.vue`文件，及测试覆盖情况。\n\n从`开始`至`源码`部分都在标签页内，需要用添加标签名称。\n\n其中布局组件只需要：`标题`、`组件状态栏`、`开始`、`声明`、`源码`。\n\n交互组件在布局组件的基础上增加：`配置`、`方法`、`事件`。\n\n表单组件在交互组件的基础上增加：`表单值`。\n\n> 注意：所有的演示都要确保最小化的配置和代码，不要添加不必要的配置和代码。\n\n#### 标题\n\n包含组件的中文名及标签，使用`#`标题。比如：`# 多项输入框 <ui-multiinput>`\n\n#### 组件状态栏\n\n只需引入`<doc-component-status page=\"[组件Key]\"></doc-component-status>`，会自动生成组件的状态栏。其中`[组件Key]`，需要替换成对应组件的Key。\n\n#### 开始\n\n在开始中首先要简短的介绍一下组件，然后演示组件最简单的用法，比如：\n\n```md\n\n定义一个标准标题，此组件可以替换原生的`h1-h6`标签，这是一个块级元素。\n\n#### 使用\n\n:::democode/html\n<ui-h>标题</ui-h>\n:::\n```\n\n每一种用法的标题采用`####`，最简单的用法命名：`使用`，其余用法根据情况取名。\n\n#### 声明\n\n声明包含：`支持`、`尺寸`、`色彩`、`状态`四部分，其中`支持`是必需有的部分，`支持`部分的写法如下：\n\n```md\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部|`black`|\n|状态|`normal`<br/>`apparent`|`normal`|\n```\n\n若支持多种值，值之间用`<br/>`分隔。\n\n其余部分若组件支持则需要写出组件在这种声明下的所有情况，具体可参考[标题组件的声明](/component/h.html)。\n\n#### 配置\n\n配置包含：`配置表`、`配置演示`。\n\n配置表需要写清楚配置的Key、描述、接受值、值类型、默认值，其中接受值和值类型中多个值之间用`<br/>`分隔。\n\n配置演示中需要多每一项配做一个演示，如有必要可以增加文本说明，也可以使用多个演示。每个配置演示的标题采用`####`。具体可参考[开关组件的配置](/component/switch.html)。\n\n#### 方法\n\n组件的每个方法都需要有：`方法表达式`(采用`####`作为标题)、`方法说明`、`参数表`、`方法演示`。\n\n其中`方法演示`需要对方法的所有用法都做演示。具体可参考[开关组件的方法](/component/switch.html)。\n\n#### 事件\n\n组件的每个事件都需要有：`事件名`(采用`####`作为标题)、`事件说明`、`事件演示`。\n\n在事件的最后，需要增加组件的生命周期事件。具体可参考[文本输入框组件的事件](/component/textinput.html)。\n\n表单组件都需要包含`value-change`事件。\n\n交互组件大部分都包含`emit`事件，表示该组件被触发。\n\n#### 表单值\n\n表单值部分只有表单组件需要，需要说明：\n\n- 值类型 : 表单支持数值的类型\n- 值过滤 : 表单过滤数值的条件\n- 值格式 : 表单数值格式说明\n- 默认值\n- 输入/输出示例 : 在不同类型数值下，表单处理值的演示。\n\n具体可参考[文本输入框组件的表单值](/component/textinput.html)。\n\n#### 源码\n\n只需引入`<iframe src=\"/report/coverage/lib/components/[组件Key]/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>`，会自动生成组件的源码。其中`[组件Key]`，需要替换成对应组件的Key。\n\n### 指南(Guide)文档\n\nComing soon.\n\n")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-555b49ff", esExports)
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6dc34f74_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocHeader_vue__ = __webpack_require__(8);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(4)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DocHeader_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6dc34f74_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_DocHeader_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/docs/common/DocHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DocHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dc34f74", Component.options)
  } else {
    hotAPI.reload("data-v-6dc34f74", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    class: {
      index: _vm.isIndex
    }
  }, [_c('div', {
    staticClass: "nav"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("Morning UI")]), _vm._v(" "), _c('ul', {
    staticClass: "menu"
  }, [_c('li', [_c('a', {
    class: {
      current: _vm.isIndex
    },
    attrs: {
      "href": "/index.html"
    }
  }, [_vm._v("HOME")])]), _vm._v(" "), _c('li', [_c('a', {
    class: {
      current: _vm.isGuide
    },
    attrs: {
      "href": "/guide/introduction.html"
    }
  }, [_vm._v("GUIDE")])]), _vm._v(" "), _c('li', [_c('a', {
    class: {
      current: _vm.isComponent
    },
    attrs: {
      "href": "/component/h.html"
    }
  }, [_vm._v("COMPONENT")])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": "http://h0.hucdn.com/open/201734/8f299e45f6693260_200x200.png",
      "alt": "morning-ui"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6dc34f74", esExports)
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', [_c('img', {
    attrs: {
      "src": "http://h0.hucdn.com/open/201734/8f299e45f6693260_200x200.png",
      "alt": ""
    }
  }), _c('br'), _vm._v("\n    Under "), _c('a', {
    attrs: {
      "href": "https://opensource.org/licenses/MIT",
      "target": "_blank"
    }
  }, [_vm._v("MIT Licence")]), _vm._v(" "), _c('br'), _vm._v("\n    Copyright © 2015-2017 Early He\n")])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b0281758", esExports)
  }
}

/***/ })

},[307]);