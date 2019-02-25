!function(n){function t(t){for(var i,o,s=t[0],a=t[1],l=t[2],c=0,d=[];c<s.length;c++)o=s[c],m[o]&&d.push(m[o][0]),m[o]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var n,t=0;t<r.length;t++){for(var e=r[t],i=!0,s=1;s<e.length;s++){var a=e[s];0!==m[a]&&(i=!1)}i&&(r.splice(t--,1),n=o(o.s=e[0]))}return n}var i={},m={79:0},r=[];function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=i,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)o.d(e,i,function(t){return n[t]}.bind(null,i));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=a;r.push([655,0]),e()}({1:function(n,t){n.exports=Vue},291:function(n,t,e){"use strict";var i=function(){var n=this.$createElement,t=this._self._c||n;return t("doc-component",{attrs:{page:this.page,hasPadding:!0}},[t("script",{attrs:{type:"text/markdown"}},[this._v("\n# 穿梭框 `<ui-transfer>`\n\n<doc-component-status page=\"transfer\"></doc-component-status>\n\n[[[开始]]]\n\n定义穿梭框，穿梭框是一个处理结构化数据的组件，数值中包含`source`和`target`两个数组，用于区分一组KEY分别属于哪一个数组。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer form-name=\"选择\" :list=\"list\" v-model=\"value\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        },\n        value : {\n            source : [\n                'item2',\n                'item3',\n                'item4',\n                'item5',\n                'item6',\n                'item7',\n                'item8',\n                'item9'\n            ],\n            target : [\n                'item1'\n            ]\n        }\n    }\n}\n:::\n\n:::vue\n@name:定义两侧底部额外内容\n---\n#demo\n>desc\n可以通过`target-footer`和`source-footer`两个`slot`来分别定义左右两侧的底部内容。\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer form-name=\"选择\" :list=\"list\" v-model=\"value\">\n        <div slot=\"target-footer\">\n            <ui-btn size=\"xxs\">操作1</ui-btn>\n            <ui-link size=\"xxs\" color=\"minor\">操作2</ui-link>\n        </div>\n        <div slot=\"source-footer\">\n            <ui-btn size=\"xxs\">操作1</ui-btn>\n            <ui-link size=\"xxs\" color=\"minor\">操作2</ui-link>\n        </div>\n    </ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        },\n        value : {\n            source : [\n                'item2',\n                'item3',\n                'item4',\n                'item5',\n                'item6',\n                'item7',\n                'item8',\n                'item9'\n            ],\n            target : [\n                'item1'\n            ]\n        }\n    }\n}\n:::\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:transfer\n@defaultValue:{source:['item2','item3','item4','item5','item6','item7','item8','item9'],target:['item1']}\n@attrs: :list=\"{item1:'备选项-1',item2:'备选项-2',item3:'备选项-3',item4:'备选项-4',item5:'备选项-5',item6:'备选项-6',item7:'备选项-7',item8:'备选项-8',item9:'备选项-9'}\"\n@wrapStyle:width:500px;height:280px;\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:transfer\n@defaultValue:{source:['item2','item3','item4','item5','item6','item7','item8','item9'],target:['item1']}\n@attrs: :list=\"{item1:'备选项-1',item2:'备选项-2',item3:'备选项-3',item4:'备选项-4',item5:'备选项-5',item6:'备选项-6',item7:'备选项-7',item8:'备选项-8',item9:'备选项-9'}\"\n@wrapStyle:width:500px;height:280px;\n:::\n\n:::vue\n@name:list\n---\n#config\n>conf-desc\n通过此配置来设置可选项目，这是一个对象。\n<br>\n对象中的键名是选项的值，键值是字符串为选项的名称。\n<br>\n所有`list`中的选项，默认位于左侧区域。\n>conf-accept\n对象\n>conf-type\nObject\n>conf-default\n`{}`\n---\n#demo\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer :list=\"list\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        }\n    }\n}\n:::\n\n:::vue\n@name:source-title\n---\n#config\n>conf-desc\n穿梭框左侧的标题。\n>conf-accept\n名称\n>conf-type\nString\n>conf-default\n`'可选'`\n---\n#demo\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer source-title=\"可选人员\" :list=\"list\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        }\n    }\n}\n---\n#demo\n>desc\n标题也可以是HTML，比如包含图标。\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer source-title=\"<i class='mo-icon mo-icon-list'></i> 可选人员\" :list=\"list\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        }\n    }\n}\n:::\n\n:::vue\n@name:target-title\n---\n#config\n>conf-desc\n穿梭框右侧的标题。\n>conf-accept\n名称\n>conf-type\nString\n>conf-default\n`'选中'`\n---\n#demo\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer target-title=\"参与人员\" :list=\"list\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        }\n    }\n}\n---\n#demo\n>desc\n标题也可以是HTML，比如包含图标。\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer target-title=\"<i class='mo-icon mo-icon-star-f'></i> 参与人员\" :list=\"list\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        }        }\n}\n:::\n\n:::vue\n@name:can-search\n---\n#config\n>conf-desc\n是否可以搜索选项。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer :can-search=\"true\" :list=\"list\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        }\n    }\n}\n:::\n\n:::vue\n@name:disabled-options\n---\n#config\n>conf-desc\n禁止选中的项目。\n>conf-accept\n由禁止修改项目键名(key)组成的数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer :disabled-options=\"['item6', 'item8', 'item2']\" :list=\"list\" v-model=\"value\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        },\n        value : {\n            source : [\n                'item5',\n                'item6',\n                'item7',\n                'item8',\n                'item9'\n            ],\n            target : [\n                'item1',\n                'item2',\n                'item3',\n                'item4',\n            ]\n        }\n    }\n}\n:::\n\n:::vue\n@name:checked-options\n---\n#config\n>conf-desc\n选中的项目。\n>conf-accept\n由选中项目键名(key)组成的数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer :checked-options=\"['item6', 'item8', 'item2']\" :list=\"list\" v-model=\"value\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        },\n        value : {\n            source : [\n                'item5',\n                'item6',\n                'item7',\n                'item8',\n                'item9'\n            ],\n            target : [\n                'item1',\n                'item2',\n                'item3',\n                'item4',\n            ]\n        }\n    }\n}\n---\n#demo\n>desc\n`checked-options`和`disabled-options`一起使用。\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer :checked-options=\"['item6', 'item8', 'item2', 'item4']\" :disabled-options=\"['item6', 'item9', 'item4']\" :list=\"list\" v-model=\"value\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        },\n        value : {\n            source : [\n                'item5',\n                'item6',\n                'item7',\n                'item8',\n                'item9'\n            ],\n            target : [\n                'item1',\n                'item2',\n                'item3',\n                'item4',\n            ]\n        }\n    }\n}\n:::\n\n:::vue\n@name:source-to-target-text\n---\n#config\n>conf-desc\n左侧至右侧按钮文案。\n>conf-accept\n文案\n>conf-type\nString\n>conf-default\n`undefined`\n---\n#demo\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer :list=\"list\" v-model=\"value\" source-to-target-text=\"移至右侧\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        },\n        value : {\n            source : [\n                'item5',\n                'item6',\n                'item7',\n                'item8',\n                'item9'\n            ],\n            target : [\n                'item1',\n                'item2',\n                'item3',\n                'item4',\n            ]\n        }\n    }\n}\n---\n#demo\n>desc\n`source-to-target-text`和`target-to-source-text`一起使用。\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer :list=\"list\" v-model=\"value\" source-to-target-text=\"移至右侧\" target-to-source-text=\"移至左侧\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        },\n        value : {\n            source : [\n                'item5',\n                'item6',\n                'item7',\n                'item8',\n                'item9'\n            ],\n            target : [\n                'item1',\n                'item2',\n                'item3',\n                'item4',\n            ]\n        }\n    }\n}\n:::\n\n:::vue\n@name:target-to-source-text\n---\n#config\n>conf-desc\n右侧至左侧按钮文案。\n>conf-accept\n文案\n>conf-type\nString\n>conf-default\n`undefined`\n---\n#demo\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer :list=\"list\" v-model=\"value\" target-to-source-text=\"移至左侧\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        },\n        value : {\n            source : [\n                'item5',\n                'item6',\n                'item7',\n                'item8',\n                'item9'\n            ],\n            target : [\n                'item1',\n                'item2',\n                'item3',\n                'item4',\n            ]\n        }\n    }\n}\n---\n#demo\n>desc\n`source-to-target-text`和`target-to-source-text`一起使用。\n>tpl\n<div style=\"width:500px;height:280px;\">\n    <ui-transfer :list=\"list\" v-model=\"value\" source-to-target-text=\"移至右侧\" target-to-source-text=\"移至左侧\"></ui-transfer>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        },\n        value : {\n            source : [\n                'item5',\n                'item6',\n                'item7',\n                'item8',\n                'item9'\n            ],\n            target : [\n                'item1',\n                'item2',\n                'item3',\n                'item4',\n            ]\n        }\n    }\n}\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:transfer\n@value:{source:['item2','item3','item4','item5','item6','item7','item8','item9'],target:['item1']}\n@defaultValue:{source:['item2','item3','item4','item5','item6','item7','item8','item9'],target:['item1']}\n@attrs: :list=\"{item1:'备选项-1',item2:'备选项-2',item3:'备选项-3',item4:'备选项-4',item5:'备选项-5',item6:'备选项-6',item7:'备选项-7',item8:'备选项-8',item9:'备选项-9'}\"\n@wrapStyle:width:500px;height:280px;box-sizing:content-box;padding-bottom:50px;\n:::\n\n:::vue\n@name:toggle(key, [checked])\n---\n#method\n>method-desc\n切换单个选项的选中状态。\n>method-args\n|key|NO|需要切换状态的选项的键值|键值字符串|`String`|`undefined`|\n|checked|YES|需要切换的状态|`undefined`: 切换到相反的状态<br>`true`: 切换到选中状态<br>`false`: 切换到未选中状态|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style=\"width:500px;height:280px;\">\n        <ui-transfer :list=\"list\" v-model=\"value\" ref=\"demo1\"></ui-transfer>\n    </div>\n    <br>\n    <ui-link js=\"morning.findVM('demo1').toggle('item5');\">切换 备选项-5 至相反状态</ui-link>\n    <ui-link js=\"morning.findVM('demo1').toggle('item5', true);\">切换 备选项-5 至选中</ui-link>\n    <ui-link js=\"morning.findVM('demo1').toggle('item5', false);\">切换 备选项-5 至未选中</ui-link>\n</div>\n>script\n{\n    data : {\n        list : {\n            item1 : '备选项-1',\n            item2 : '备选项-2',\n            item3 : '备选项-3',\n            item4 : '备选项-4',\n            item5 : '备选项-5',\n            item6 : '备选项-6',\n            item7 : '备选项-7',\n            item8 : '备选项-8',\n            item9 : '备选项-9'\n        },\n        value : {\n            source : [\n                'item5',\n                'item6',\n                'item7',\n                'item8',\n                'item9'\n            ],\n            target : [\n                'item1',\n                'item2',\n                'item3',\n                'item4',\n            ]\n        }\n    }\n}\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:穿梭框\n@uikey:transfer\n@value:{source:['item2','item3','item4','item5','item6','item7','item8','item9'],target:['item1']}\n@attrs: :list=\"{item1:'备选项-1',item2:'备选项-2',item3:'备选项-3',item4:'备选项-4',item5:'备选项-5',item6:'备选项-6',item7:'备选项-7',item8:'备选项-8',item9:'备选项-9'}\"\n@wrapStyle:width:500px;height:280px;box-sizing:content-box;padding-bottom:50px;\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Object` : 对象\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成默认对象（其中`source`的值为`list`配置的键名数组）。\n- 数值对象的`target`属性类型若不为数组，则会被转换成空数组。\n- 数值对象的`source`属性类型若不为数组，则会被转换成数组，并且数组内容为`list`配置的键名数组和`target`属性数组的差集。\n\n#### 值格式\n\n对象包含属性：\n\n- `source` : 左侧存在的项目，这是一个数组，数组中每一项的值都是`list`配置中某一项的键名。\n- `target` : 右侧存在的项目，这是一个数组，数组中每一项的值都是`list`配置中某一项的键名。\n\n且`source`和`target`两个数组的合集等同于`list`配置的键名数组。\n\n#### 默认值\n\n`{source:[ (list配置的键名数组) ], target:[]}`\n\n:::preset\n@name:formValue\n@uikey:transfer\n@uiname:穿梭框\n@valueType:transfer\n@attrs: :list=\"{item1:'备选项-1',item2:'备选项-2',item3:'备选项-3',item4:'备选项-4',item5:'备选项-5',item6:'备选项-6',item7:'备选项-7'}\"\n@wrapStyle:width:500px;\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/transfer/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},m=[];i._withStripped=!0,e.d(t,"a",function(){return i}),e.d(t,"b",function(){return m})},655:function(n,t,e){"use strict";var i=r(e(1)),m=r(e(656));function r(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(m.default)}})},656:function(n,t,e){"use strict";e.r(t);var i=e(291),m=e(88);for(var r in m)"default"!==r&&function(n){e.d(t,n,function(){return m[n]})}(r);var o=e(0),s=Object(o.a)(m.default,i.a,i.b,!1,null,null,null);s.options.__file="src/docs/pages/component/transfer/index.vue",t.default=s.exports},88:function(n,t,e){"use strict";e.r(t);var i=e(89),m=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,function(){return i[n]})}(r);t.default=m.a},89:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,m=e(2),r=(i=m)&&i.__esModule?i:{default:i};t.default={data:function(){return{page:"transfer"}},components:{"doc-component":r.default}},n.exports=t.default}});