!function(n){function e(e){for(var d,r,c=e[0],l=e[1],a=e[2],u=0,f=[];u<c.length;u++)r=c[u],i[r]&&f.push(i[r][0]),i[r]=0;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d]);for(s&&s(e);f.length;)f.shift()();return o.push.apply(o,a||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],d=!0,c=1;c<t.length;c++){var l=t[c];0!==i[l]&&(d=!1)}d&&(o.splice(e--,1),n=r(r.s=t[0]))}return n}var d={},i={79:0},o=[];function r(e){if(d[e])return d[e].exports;var t=d[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=d,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var d in n)r.d(t,d,function(e){return n[e]}.bind(null,d));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var s=l;o.push([650,0]),t()}({1:function(n,e){n.exports=Vue},330:function(n,e,t){"use strict";var d=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 树状控件 `<ui-tree>`\n\n<doc-component-status page=\"tree\"></doc-component-status>\n\n[[[开始]]]\n\n定义一个树状控件，这是一个块元素。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n通过`tree`配置来设置树状控件，每一项目可以简写为：`key:name`的形式，也可以完整的写为：`key:[object]`。\n<br>\n详见：`tree`配置\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : '0-2',\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href=\"/guide/status.html\">查看形态文档</a>\n\n[[[配置]]]\n\n:::vue\n@name:tree\n---\n#config\n>conf-desc\n设置树状控件，每一项目可以简写为：`key:name`的形式，也可以完整的写为：`key:[object]`。\n<br><br>\n其中`object`包含两个属性：\n- `name` : 当前节点的名称\n- `disabled` : 禁用这个节点(无法选中及切换展开状态)\n- `unfold` : 默认展开这个节点\n- `icon` : 为节点设置icon(若设为空字符串则无icon，且仅对叶子节点生效)\n- `child` : 子节点对象\n>conf-accept\n对象\n>conf-type\nObject\n>conf-default\n`()=>({})`\n---\n#demo\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : '0-2',\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n---\n#demo\n>desc\n使用`disabled`设置禁用节点。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        disabled : true,\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n---\n#demo\n>desc\n使用`unfold`设置默认展开节点。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        unfold : true,\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n---\n#demo\n>desc\n同时使用`disabled`和`unfold`设置一个展开无法折叠的子树。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        unfold : true,\n                        disabled : true,\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n---\n#demo\n>desc\n使用`icon`单独设置叶子节点Icon。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : {\n                        name : '0-1',\n                        icon : '<i class=\"mo-icon mo-icon-file-o\">'\n                    },\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:foldable\n---\n#config\n>conf-desc\n树状控件的节点是否可以折叠。\n<br>\n此配置开启后，树状控件默认会全部展开。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\" :foldable=\"false\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : '0-2',\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:cable\n---\n#config\n>conf-desc\n显示同层级节点之间的连接线。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\" :cable=\"true\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : '0-2',\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2',\n                            '0-3-3' : '0-3-3'\n                        }\n                    },\n                    '0-4' : '0-4'\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:can-click\n---\n#config\n>conf-desc\n树状控件的节点是否可以点击，若允许点击后会有交互效果及触发`node-emit`事件。一般用于纯展示的树状控件会关闭此配置。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n点击节点后不会触发事件，也不会有交互效果。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\" :can-click=\"false\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : '0-2',\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:can-search\n---\n#config\n>conf-desc\n树的节点是否可以搜索。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n开启后可以搜索内容包含关键字的节点。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\" :can-search=\"true\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:custom-fold-icon\n---\n#config\n>conf-desc\n自定义节点折叠后的图标。\n>conf-accept\n图标的HTML字符串\n>conf-type\nString\n>conf-default\n`''`\n---\n#demo\n>desc\n修改折叠后的图标。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\" custom-fold-icon=\"<i class='mo-icon mo-icon-sub'></i>\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n---\n#demo\n>desc\n同时修改折叠和展开的图标。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\" custom-fold-icon=\"<i class='mo-icon mo-icon-sub'></i>\" custom-unfold-icon=\"<i class='mo-icon mo-icon-add'></i>\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:custom-unfold-icon\n---\n#config\n>conf-desc\n自定义节点未折叠的图标。\n>conf-accept\n图标的HTML字符串\n>conf-type\nString\n>conf-default\n`''`\n---\n#demo\n>desc\n修改折叠后的图标。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\" custom-unfold-icon=\"<i class='mo-icon mo-icon-add'></i>\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n---\n#demo\n>desc\n同时修改折叠和未折叠的图标。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\" custom-fold-icon=\"<i class='mo-icon mo-icon-sub'></i>\" custom-unfold-icon=\"<i class='mo-icon mo-icon-add'></i>\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:custom-leafnode-icon\n---\n#config\n>conf-desc\n自定义叶子节点的图标。若在`tree`配置中单独对某个叶子节点设置了`icon`，则优先级更高。\n>conf-accept\n图标的HTML字符串\n>conf-type\nString\n>conf-default\n`''`\n---\n#demo\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\" custom-leafnode-icon=\"<i class='mo-icon mo-icon-file-o'></i>\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n---\n#demo\n>desc\n配合`cable`一起使用。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\" :cable=\"true\" custom-leafnode-icon=\"<i class='mo-icon mo-icon-file-o'></i>\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:fold-style\n---\n#config\n>conf-desc\n预设的三种风格的折叠/未折叠图标，方便开发者使用。\n<br>\n需要注意若同时配置了`fold-style`和`custom-fold-icon`/`custom-unfold-icon`/`custom-leafnode-icon`配置，则后者的优先级更高。\n>conf-accept\n`arrow`:箭头风格<br>`folder`:文件夹风格<br>`symbol`:加减符号风格\n>conf-type\nString\n>conf-default\n`'arrow'`\n---\n#demo\n>desc\n文件夹风格的图标。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\" fold-style=\"folder\"></i>\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n---\n#demo\n>desc\n加减符号风格的图标。\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree :tree=\"tree\" fold-style=\"symbol\"></i>\"></ui-tree>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : {\n                        name : '0-2',\n                        childs : {\n                            '0-2-1' : '0-2-1',\n                            '0-2-2' : '0-2-2',\n                            '0-2-3' : '0-2-3'\n                        }\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n[[[方法]]]\n\n:::vue\n@name:foldNode(path, [fold])\n---\n#method\n>method-desc\n依次展开某一个节点及其父节点或依次折叠一个节点及其子节点。\n<br><br>\n需要注意的是`path`的数组必须是层级连续的(从根节点开始)，比如有这样的一个层级：`['0', '0-1', '0-1-2']`，需要展开`0-1-2`，`path`必须是`['0', '0-1', '0-1-2']`，下面这样是不行的因为层级没有连续：`['0-1', '0-1-2']`或`['0', '0-1-2']`。\n>method-args\n|path|NO|需要展开或折叠的节点的path，这个是一个数组，数组的index表示节点所在的层级，数组的键值将匹配对应层级的KEY。|目标节点的路径数组|`Array`|`undefined`|\n|fold|展开或折叠，未指定则切换到反向状态。|`undefined`:切换展开/折叠<br>`true`:折叠<br>`false`:展开|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree ref=\"demo1\" :tree=\"tree\"></ui-tree>\n    <br><br>\n    <ui-link js=\"window.morning.findVM('demo1').foldNode(['0'], false);\">展开ROOT节点</ui-link>\n    <br>\n    <ui-link js=\"window.morning.findVM('demo1').foldNode(['0', '0-3', '0-3-1'], false);\">依次展开0-3-1及其父节点</ui-link>\n    <br>\n    <ui-link js=\"window.morning.findVM('demo1').foldNode(['0', '0-3', '0-3-1'], true);\">依次折叠0-3-1及其父节点</ui-link>\n    <br>\n    <ui-link js=\"window.morning.findVM('demo1').foldNode(['0', '0-3']);\">切换0-3节点展开/折叠</ui-link>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : '0-2',\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:foldAllNode()\n---\n#method\n>method-desc\n折叠所有子节点。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree ref=\"demo2\" :tree=\"tree\"></ui-tree>\n    <br><br>\n    <ui-link js=\"window.morning.findVM('demo2').foldAllNode();\">折叠所有节点</ui-link>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                unfold : true,\n                childs : {\n                    '0-1' : {\n                        name : '0-1',\n                        unfold : true\n                    },\n                    '0-2' : {\n                        name : '0-2',\n                        unfold : true\n                    },\n                    '0-3' : {\n                        name : '0-3',\n                        unfold : true,\n                        childs : {\n                            '0-3-1' : {\n                                name : '0-3-1',\n                                unfold : true\n                            },\n                            '0-3-2' : {\n                                name : '0-3-2',\n                                unfold : true\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:unfoldAllNode()\n---\n#method\n>method-desc\n展开所有子节点。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree ref=\"demo3\" :tree=\"tree\"></ui-tree>\n    <br><br>\n    <ui-link js=\"window.morning.findVM('demo3').unfoldAllNode();\">展开所有节点</ui-link>\n</div>\n>script\n{\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : '0-2',\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n[[[事件]]]\n\n:::vue\n@name:node-emit\n---\n#event\n>event-desc\n当节点被点击时触发。\n>event-args\n|path|触发节点的路径数组，这个是一个数组，数组的index表示节点所在的层级，数组的键值是被触发节点的KEY。|`Array`|\n---\n#demo\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree ref=\"demo4\" @node-emit=\"echo\" :tree=\"tree\"></ui-tree>\n</div>\n>script\n{\n    methods : {\n        echo : function (path) {\n            console.log('demo4.console1', 'node-emit event!', path);\n        }\n    },\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : '0-2',\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:node-fold\n---\n#event\n>event-desc\n当节点被折叠时触发。\n>event-args\n|path|触发节点的路径数组，这个是一个数组，数组的index表示节点所在的层级，数组的键值是被触发节点的KEY。|`Array`|\n---\n#demo\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree ref=\"demo4\" @node-fold=\"echo\" :tree=\"tree\"></ui-tree>\n</div>\n>script\n{\n    methods : {\n        echo : function (path) {\n            console.log('demo4.console1', 'node-fold event!', path);\n        }\n    },\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : '0-2',\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:node-unfold\n---\n#event\n>event-desc\n当节点被展开时触发。\n>event-args\n|path|触发节点的路径数组，这个是一个数组，数组的index表示节点所在的层级，数组的键值是被触发节点的KEY。|`Array`|\n---\n#demo\n>tpl\n<div style=\"width: 560px;\">\n    <ui-tree ref=\"demo4\" @node-unfold=\"echo\" :tree=\"tree\"></ui-tree>\n</div>\n>script\n{\n    methods : {\n        echo : function (path) {\n            console.log('demo4.console1', 'node-unfold event!', path);\n        }\n    },\n    data : {\n        tree : {\n            0 : {\n                name : 'ROOT',\n                childs : {\n                    '0-1' : '0-1',\n                    '0-2' : '0-2',\n                    '0-3' : {\n                        name : '0-3',\n                        childs : {\n                            '0-3-1' : '0-3-1',\n                            '0-3-2' : '0-3-2'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <ui-tree\n        target=\"#demoEventLifecycle\"\n        ref=\"demoEventLifecycle\"\n        v-show=\"show\"\n        @created=\"echo('created')\"\n        @mounted=\"echo('mounted')\"\n        @before-update=\"echo('before-update')\"\n        @updated=\"echo('updated')\"\n        @before-destroy=\"echo('before-destroy')\"\n        @destroyed=\"echo('destroyed')\"\n        :tree=\"tree\"\n    >{*text*}</ui-tree>\n    <br><br>\n    <ui-link js=\"this.text='生命周期事件';\">触发update</ui-link>\n    <ui-link js=\"this.$refs['demoEventLifecycle'].$destroy();\">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : '树状控件',\n           show : true,\n            tree : {\n                0 : {\n                    name : 'ROOT',\n                    childs : {\n                        '0-1' : '0-1',\n                        '0-2' : '0-2',\n                        '0-3' : {\n                            name : '0-3',\n                            childs : {\n                                '0-3-1' : '0-3-1',\n                                '0-3-2' : '0-3-2'\n                            }\n                        }\n                    }\n                }\n            }\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log('demoEventLifecycle.console1', name + ' event!');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/tree/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n")])])},i=[];d._withStripped=!0,t.d(e,"a",function(){return d}),t.d(e,"b",function(){return i})},650:function(n,e,t){"use strict";var d=o(t(1)),i=o(t(651));function o(n){return n&&n.__esModule?n:{default:n}}new d.default({el:"#root",render:function(n){return n(i.default)}})},651:function(n,e,t){"use strict";t.r(e);var d=t(330),i=t(86);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);var r=t(0),c=Object(r.a)(i.default,d.a,d.b,!1,null,null,null);c.options.__file="src/docs/pages/component/tree/index.vue",e.default=c.exports},86:function(n,e,t){"use strict";t.r(e);var d=t(87),i=t.n(d);for(var o in d)"default"!==o&&function(n){t.d(e,n,function(){return d[n]})}(o);e.default=i.a},87:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d,i=t(2),o=(d=i)&&d.__esModule?d:{default:d};e.default={data:function(){return{page:"tree"}},components:{"doc-component":o.default}},n.exports=e.default}});