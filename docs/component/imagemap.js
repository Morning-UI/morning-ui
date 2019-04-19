!function(n){function e(e){for(var a,m,d=e[0],u=e[1],p=e[2],l=0,s=[];l<d.length;l++)m=d[l],i[m]&&s.push(i[m][0]),i[m]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(n[a]=u[a]);for(r&&r(e);s.length;)s.shift()();return o.push.apply(o,p||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],a=!0,d=1;d<t.length;d++){var u=t[d];0!==i[u]&&(a=!1)}a&&(o.splice(e--,1),n=m(m.s=t[0]))}return n}var a={},i={42:0},o=[];function m(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,m),t.l=!0,t.exports}m.m=n,m.c=a,m.d=function(n,e,t){m.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},m.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},m.t=function(n,e){if(1&e&&(n=m(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(m.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)m.d(t,a,function(e){return n[e]}.bind(null,a));return t},m.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return m.d(e,"a",e),e},m.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},m.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var p=0;p<d.length;p++)e(d[p]);var r=u;o.push([765,0]),t()}({1:function(n,e){n.exports=Vue},176:function(n,e,t){"use strict";t.r(e);var a=t(177),i=t.n(a);for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);e.default=i.a},177:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=t(2),o=(a=i)&&a.__esModule?a:{default:a};e.default={data:function(){return{page:"imagemap"}},components:{"doc-component":o.default}},n.exports=e.default},330:function(n,e,t){"use strict";var a=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 图片热区输入 `<ui-imagemap>`\n\n<doc-component-status page=\"imagemap\"></doc-component-status>\n\n[[[开始]]]\n\n定义图片热区输入。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\"></ui-imagemap>\n</div>\n:::\n\n#### 组件数据使用说明\n\n图片热区输入组件仅用于生成图片热区的数据，如果需要展示，需要根据组件的值渲染出最终的热区。\n\n组件的值是一个对象，包含：\n\n- `images` : 数组，组成热区的图片。数组中每一项都是一个对象，包含：\n    - `path` : 图片地址\n    - `name` : 图片名称\n- `zones` : 数组，所有热区。数组中每一项都是一个对象，包含：\n    - `x` : 单个热区的X轴坐标(单位px)\n    - `y` : 热区的Y轴坐标(单位px)\n    - `w` : 热区的宽度(单位px)\n    - `h` : 热区的高度(单位px)\n    - `i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)\n    - `data` : 热区的自定义数据对象(键值对)\n- `w` : 热区容器参考宽度\n- `h` : 热区容器参考高度\n\n最终根据组件数组生成热区时：\n\n1. 热区容器 : 将最终的热区容器宽/高与热区容器参考宽/高进行计算，得到`比例值`\n2. 图片 : 将`images`中的图片从上至下排列，所有图片的宽度与热区容器等宽\n3. 热区 : 将热区的`x`、`y`、`w`、`h`乘以`比例值`，得到真实值，然后绘制热区\n4. 热区自定义数据 : 从热区数据的`data`中可以获取每个热区的自定义数据\n\n:::vue\n@name:自定义数据\n---\n#demo\n>desc\n图片热区组件支持在每个热区中加入自定义数据，首先通过`<slot>`设置数据的表单。\n<br><br>\n数据表单需要注意下面几点：\n<br><br>\n1. 最终数据会存入热区对象的`data`属性中\n2. 数据表单的`form-key`必需设置，若未设置最终数据不会存入热区的`data`中\n3. 数据表单的`group`通过`slot-scope=\"{group}\"`解构获取(Vue.js的[作用域插槽](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD))，并且需要绑定到所有表单上，若未绑定到表单，最终数据不会存入热区的`data`中\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" ref=\"demo1\">\n        <ui-formgroup slot-scope=\"{group}\">\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">自定义数据1</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput :group=\"group\" form-key=\"customdata1\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">自定义数据2</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-switch :group=\"group\" form-key=\"customdata2\"></ui-switch>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-imagemap>\n    <br>\n    <p>首先上传一张图片并绘制一个热区，然后：</p>\n    <ui-link js=\"alert(JSON.stringify(window.morning.findVM('demo1').get().zones[0].data))\">获取第一个热区的自定义数据</ui-link> \n</div>\n:::\n\n:::vue\n@name:热区编辑区缩放\n---\n#demo\n>desc\n若热区的尺寸太大或太小，超出了屏幕的适合展示尺寸，组件会自动缩放将热区编辑区调整大适合的大小。放缩的比例会显示在热区编辑区的左下角，缩放仅针对编辑区域，不会影响表单值中热区的真实尺寸和位置。\n<br><br>\n组件使用热区容器参考宽度来作为判断尺寸的依据。\n<br><br>\n比如下面的热区太小(361x362.5)，组件会将它放大。\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap\n        form-name=\"热区\"\n        v-model=\"value\"\n    ></ui-imagemap>\n</div>\n>script\n{\n    data : {\n    value : {\n            'images' : [\n                {\n                    'name' : '151244303389249797.png',\n                    'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'\n                }\n            ],\n            'zones' : [\n                {'x' : 180.5, 'y' : 58.5, 'h' : 90, 'w' : 137},\n                {'x' : 43, 'y' : 155, 'h' : 90, 'w' : 137.5}\n            ],\n            'w' : 361,\n            'h' : 362.5\n        }\n    }\n}\n---\n#demo\n>desc\n比如下面的热区太大(1444*1450)，组件会将它缩小。\n<br><br>\n热区编辑区的缩放比例也可以在编辑区的左下角调整。\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap\n        form-name=\"热区\"\n        v-model=\"value\"\n    ></ui-imagemap>\n</div>\n>script\n{\n    data : {\n        value : {\n            'images' : [\n                {\n                    'name' : '151244303389249797.png',\n                    'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'\n                }\n            ],\n            'zones' : [\n                {'x' : 722, 'y' : 234, 'h' : 360, 'w' : 548},\n                {'x' : 172, 'y' : 620, 'h' : 360, 'w' : 550}\n            ],\n            'w' : 1444,\n            'h' : 1450\n        }\n    }\n}\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:imagemap\n@defaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:imagemap\n@defaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\n:::\n\n:::vue\n@name:inside-name\n---\n#config\n>conf-desc\n在组件内显示的名称，和`form-name`互为补充。\n>conf-accept\n名称\n>conf-type\nString\n>conf-default\n`''`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap inside-name=\"热区\"></ui-imagemap>\n</div>\n:::\n\n:::vue\n@name:allow-url\n---\n#config\n>conf-desc\n允许从网络地址获取文件并上传图片。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" allow-url></ui-imagemap>\n</div>\n:::\n\n:::vue\n@name:allow-drag\n---\n#config\n>conf-desc\n允许拖拽文件或网络地址上传图片，若拖拽的是网络地址必须开启`allow-url`。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" allow-drag></ui-imagemap>\n</div>\n:::\n\n:::vue\n@name:multi\n---\n#config\n>conf-desc\n允许同时选择多个图片上传。注意由于`max`默认为1，请先设置`max`，否则选择多个图片最终只能上传1张。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" multi :max=\"10\"></ui-imagemap>\n</div>\n:::\n\n:::vue\n@name:validate\n---\n#config\n>conf-desc\n验证上传的图片，详见：[文件上传组件的`validate`配置](/component/upload.html)。\n>conf-accept\n验证函数\n>conf-type\nFunction\n>conf-default\n`() => {}`\n---\n#demo\n>desc\n限制上传大小为30kb的图片。\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" :validate=\"checksize\"></ui-imagemap>\n</div>\n>script\n{\n    methods : {\n        checksize : function (file) {\n                \n            if (file.size > 30000) {\n                \n                return '上传文件的大小不能超过30kb';\n\n            }\n\n        }\n    }\n}\n:::\n\n:::vue\n@name:uploader\n---\n#config\n>conf-desc\n图片上传适配器，详见：[文件上传组件的`uploader`配置](/component/upload.html)。\n>conf-accept\n文件上传适配器函数\n>conf-type\nFunction\n>conf-default\n`undefined`\n---\n#demo\n>desc\n下面的示例的通过指定适配器演示了图片上传失败的情况。\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" :uploader=\"uploader\"></ui-imagemap>\n</div>\n>script\n{\n    methods : {\n        uploader : function (file) {\n\n            return {\n                status : false,\n                message : '文件上传失败，请重试'\n            };\n\n        }\n    }\n}\n:::\n\n:::vue\n@name:clean-zone\n---\n#config\n>conf-desc\n当图片更换时，清空所有的热区。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n当图片发生变化时不清空热区，超出范围的热区会自动移动到新的区域内。\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" multi :max=\"10\" :clean-zone=\"false\"></ui-imagemap>\n</div>\n:::\n\n:::vue\n@name:clean-allzone-btn\n---\n#config\n>conf-desc\n显示清除所有热区的按钮。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n不显示清空所有热区的按钮。\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap\n        form-name=\"热区\"\n        multi\n        :max=\"10\"\n        v-model=\"value\"\n        :clean-allzone-btn=\"false\"\n    ></ui-imagemap>\n</div>\n>script\n{\n    data : {\n        value : {\n            'images' : [\n                {\n                    'name' : '151244303389249797.png',\n                    'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'\n                }\n            ],\n            'zones' : [],\n            'w' : 722,\n            'h' : 725\n        }\n    }\n}\n:::\n\n:::vue\n@name:max\n---\n#config\n>conf-desc\n最多允许上传多少图片。\n>conf-accept\n数字\n>conf-type\nNumber\n>conf-default\n`1`\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" :max=\"3\"></ui-imagemap>\n</div>\n:::\n\n:::vue\n@name:max-spot\n---\n#config\n>conf-desc\n最多允许的热区数量。\n>conf-accept\n数字\n>conf-type\nNumber\n>conf-default\n`Infinity`\n---\n#demo\n>desc\n最多只能画三个热区。\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap\n        form-name=\"热区\"\n        :max-spot=\"3\"\n        v-model=\"value\"\n    ></ui-imagemap>\n</div>\n>script\n{\n    data : {\n        value : {\n            'images' : [\n                {\n                    'name' : '151244303389249797.png',\n                    'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'\n                }\n            ],\n            'zones' : [],\n            'w' : 722,\n            'h' : 725\n        }\n    }\n}\n---\n#demo\n>desc\n如果默认值中的热区数量多于`max-spot`的设置，多于的热区会被丢弃。\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap\n        form-name=\"热区\"\n        :max-spot=\"1\"\n        v-model=\"value\"\n    ></ui-imagemap>\n</div>\n>script\n{\n    data : {\n        value : {\n            'images' : [\n                {\n                    'name' : '151244303389249797.png',\n                    'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'\n                }\n            ],\n            'zones' : [\n                {'x' : 361, 'y' : 117, 'h' : 180, 'w' : 274},\n                {'x' : 86, 'y' : 310, 'h' : 180, 'w' : 275}\n            ],\n            'w' : 722,\n            'h' : 725\n        }\n    }\n}\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:imagemap\n@value:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\n@defaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\n:::\n\n:::vue\n@name:getScale()\n---\n#method\n>method-desc\n获取热区编辑区域的缩放比例(0-1)，1表示100%。\n>method-return\n数字。\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap\n        ref=\"demo6\"\n        form-name=\"热区\"\n        v-model=\"value\"\n    ></ui-imagemap>\n    <br>\n    <ui-link js=\"alert(morning.findVM('demo6').getScale())\">获取缩放比</ui-link>\n</div>\n>script\n{\n    data : {\n        value : {\n            'images' : [\n                {\n                    'name' : '151244303389249797.png',\n                    'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'\n                }\n            ],\n            'zones' : [\n                {'x' : 722, 'y' : 234, 'h' : 360, 'w' : 548},\n                {'x' : 172, 'y' : 620, 'h' : 360, 'w' : 550}\n            ],\n            'w' : 1444,\n            'h' : 1450\n        }\n    }\n}\n:::\n\n:::vue\n@name:addZone([zone])\n---\n#method\n>method-desc\n新增一个热区，返回这个热区的`index`索引位置。\n>method-args\n|zone|YES|热区对象，包含：<br><br>`x` : 单个热区的X轴坐标(单位px)，默认`0`<br>`y` : 热区的Y轴坐标(单位px)，默认`0`<br>`w` : 热区的宽度(单位px)，默认为最小宽度<br>`h` : 热区的高度(单位px)，默认为最小高度<br>`i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)，默认`0`<br>`data` : 热区的自定义数据对象(键值对)，此数据不会做校验，默认`undefined`|热区对象|`Object`|`undefined`|\n>method-return\n数字。\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap\n        ref=\"demo3\"\n        form-name=\"热区\"\n        v-model=\"value\"\n    ></ui-imagemap>\n    <br>\n    <ui-link js=\"morning.findVM('demo3').addZone()\">新增一个默认热区</ui-link><br>\n    <ui-link js=\"morning.findVM('demo3').addZone({x:20, y: 20, w: 50, h: 50})\">新增一个热区</ui-link>\n</div>\n>script\n{\n    data : {\n        value : {\n            'images' : [\n                {\n                    'name' : '151244303389249797.png',\n                    'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'\n                }\n            ],\n            'zones' : [\n                {'x' : 361, 'y' : 117, 'h' : 180, 'w' : 274},\n                {'x' : 86, 'y' : 310, 'h' : 180, 'w' : 275}\n            ],\n            'w' : 722,\n            'h' : 725\n        }\n    }\n}\n:::\n\n:::vue\n@name:removeZone(index)\n---\n#method\n>method-desc\n删除一个热区。\n>method-args\n|index|NO|需要删除热区的索引位置。|索引位置|`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap\n        ref=\"demo4\"\n        form-name=\"热区\"\n        v-model=\"value\"\n    ></ui-imagemap>\n    <br>\n    <ui-link js=\"morning.findVM('demo4').removeZone(0)\">删除第一个热区</ui-link>\n</div>\n>script\n{\n    data : {\n        value : {\n            'images' : [\n                {\n                    'name' : '151244303389249797.png',\n                    'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'\n                }\n            ],\n            'zones' : [\n                {'x' : 361, 'y' : 117, 'h' : 180, 'w' : 274},\n                {'x' : 86, 'y' : 310, 'h' : 180, 'w':275}\n            ],\n            'w' : 722,\n            'h' : 725\n        }\n    }\n}\n:::\n\n:::vue\n@name:updateZone(index, zone)\n---\n#method\n>method-desc\n更新一个热区。\n>method-args\n|index|NO|需要更新热区的索引位置。|索引位置|`Number`|`undefined`|\n|zone|NO|需要更新的热区对象，包含：<br><br>`x` : 单个热区的X轴坐标(单位px)，默认`0`<br>`y` : 热区的Y轴坐标(单位px)，默认`0`<br>`w` : 热区的宽度(单位px)，默认为最小宽度<br>`h` : 热区的高度(单位px)，默认为最小高度<br>`i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)，默认`0`<br>`data` : 热区的自定义数据对象(键值对)，此数据不会做校验，默认`undefined`|热区对象|`Object`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap \n        ref=\"demo5\"\n        form-name=\"热区\"\n        v-model=\"value\"\n    ></ui-imagemap>\n    <br>\n    <ui-link js=\"morning.findVM('demo5').updateZone(0, {x: 10, y: 10, w: 50, h: 50})\">更新第一个热区</ui-link>\n</div>\n>script\n{\n    data : {\n        value : {\n            'images' : [\n                {\n                    'name' : '151244303389249797.png',\n                    'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'\n                }\n            ],\n            'zones' : [\n                {'x' : 361, 'y' : 117, 'h' : 180, 'w' : 274},\n                {'x' : 86, 'y' : 310, 'h' : 180, 'w' : 275}\n            ],\n            'w' : 722,\n            'h' : 725\n        }\n    }\n}\n:::\n\n:::vue\n@name:cleanZones()\n---\n#method\n>method-desc\n清除所有热区。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div style=\"width:300px;\">\n    <ui-imagemap\n        ref=\"demo2\"\n        form-name=\"热区\"\n        v-model=\"value\"\n    ></ui-imagemap>\n    <br>\n    <ui-link js=\"morning.findVM('demo2').cleanZones()\">清除所有热区</ui-link>\n</div>\n>script\n{\n    data : {\n        value : {\n            'images' : [\n                {\n                    'name' : '151244303389249797.png',\n                    'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'\n                }\n            ],\n            'zones' : [\n                {'x' : 361, 'y' : 117, 'h' : 180, 'w' : 274},\n                {'x' : 86, 'y' : 310, 'h' : 180, 'w' : 275}\n            ],\n            'w' : 722,\n            'h' : 725\n        }\n    }\n}\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:图片热区输入\n@uikey:imagemap\n@value:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\n@defultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\n@wrapStyle:width:300px;\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Object` : 对象\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成默认对象。\n- 值对象中属性：`images`、`zones`、`w`、`h`的类型不符合预期，值会被重置成默认对象。\n\n#### 值格式\n\n对象包含属性：\n\n- `images` : 数组，组成热区的图片。数组中每一项都是一个对象，包含：\n    - `path` : 图片地址\n    - `name` : 图片名称\n- `zones` : 数组，所有热区。数组中每一项都是一个对象，包含：\n    - `x` : 单个热区的X轴坐标(单位px)\n    - `y` : 热区的Y轴坐标(单位px)\n    - `w` : 热区的宽度(单位px)\n    - `h` : 热区的高度(单位px)\n    - `i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)\n    - `data` : 热区的自定义数据对象(键值对)\n- `w` : 热区容器参考宽度\n- `h` : 热区容器参考高度\n\n#### 默认值\n\n`{images:[], zones:[], w:0, h:0}`\n\n:::preset\n@name:formValue\n@uikey:imagemap\n@uiname:图片热区输入\n@valueType:imagemap\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/imagemap/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},i=[];a._withStripped=!0,t.d(e,"a",function(){return a}),t.d(e,"b",function(){return i})},765:function(n,e,t){"use strict";var a=o(t(1)),i=o(t(766));function o(n){return n&&n.__esModule?n:{default:n}}new a.default({el:"#root",render:function(n){return n(i.default)}})},766:function(n,e,t){"use strict";t.r(e);var a=t(330),i=t(176);for(var o in i)"default"!==o&&function(n){t.d(e,n,function(){return i[n]})}(o);var m=t(0),d=Object(m.a)(i.default,a.a,a.b,!1,null,null,null);d.options.__file="src/docs/pages/component/imagemap/index.vue",e.default=d.exports}});