!function(n){function e(e){for(var t,m,u=e[0],d=e[1],p=e[2],r=0,s=[];r<u.length;r++)m=u[r],i[m]&&s.push(i[m][0]),i[m]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(n[t]=d[t]);for(l&&l(e);s.length;)s.shift()();return o.push.apply(o,p||[]),a()}function a(){for(var n,e=0;e<o.length;e++){for(var a=o[e],t=!0,u=1;u<a.length;u++){var d=a[u];0!==i[d]&&(t=!1)}t&&(o.splice(e--,1),n=m(m.s=a[0]))}return n}var t={},i={28:0};var o=[];function m(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return n[e].call(a.exports,a,a.exports,m),a.l=!0,a.exports}m.m=n,m.c=t,m.d=function(n,e,a){m.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:a})},m.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},m.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return m.d(e,"a",e),e},m.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},m.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var l=d;o.push([269,0]),a()}({1:function(n,e){n.exports=Vue},130:function(n,e,a){"use strict";a.d(e,"a",function(){return t}),a.d(e,"b",function(){return i});var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v("\n# 图片热区输入 `<ui-imagemap>`\n\n<doc-component-status page=\"imagemap\"></doc-component-status>\n\n[[[开始]]]\n\n定义图片热区输入。\n\n#### 使用\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\"></ui-imagemap>\n</div>\n:::\n\n#### 组件数据使用说明\n\n图片热区输入组件仅用于生成图片热区的数据，如果需要展示，需要根据组件的值渲染出最终的热区。\n\n组件的值是一个对象，包含：\n\n- `images` : 数组，组成热区的图片。数组中每一项都是一个对象，包含：\n    - `path` : 图片地址\n    - `name` : 图片名称\n- `zones` : 数组，所有热区。数组中每一项都是一个对象，包含：\n    - `x` : 单个热区的X轴坐标(单位px)\n    - `y` : 热区的Y轴坐标(单位px)\n    - `w` : 热区的宽度(单位px)\n    - `h` : 热区的高度(单位px)\n    - `i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)\n    - `data` : 热区的自定义数据对象(键值对)\n- `w` : 热区容器参考宽度\n- `h` : 热区容器参考高度\n\n最终根据组件数组生成热区时：\n\n1. 热区容器 : 将最终的热区容器宽/高与热区容器参考宽/高进行计算，得到`比例值`\n2. 图片 : 将`images`中的图片从上至下排列，所有图片的宽度与热区容器等宽\n3. 热区 : 将热区的`x`、`y`、`w`、`h`乘以`比例值`，得到真实值，然后绘制热区\n4. 热区自定义数据 : 从热区数据的`data`中可以获取每个热区的自定义数据\n\n#### 自定义数据\n\n图片热区组件支持在每个热区中加入自定义数据，首先通过`<slot>`设置数据的表单：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" ref=\"demo1\">\n        <ui-formgroup slot-scope=\"{group}\">\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">自定义数据1</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-textinput :group=\"group\" form-key=\"customdata1\"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class=\"item\">\n                <h5 class=\"title\">\n                    <ui-center class=\"fill\">自定义数据2</ui-center>\n                </h5>\n                <div class=\"content\">\n                    <div class=\"form\">\n                        <ui-switch :group=\"group\" form-key=\"customdata2\"></ui-switch>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-imagemap>\n    <br>\n    <p>首先上传一张图片并绘制一个热区，然后：</p>\n    <ui-link js=\"alert(JSON.stringify(window.morning.findVM('demo1').get().zones[0].data))\">获取第一个热区的自定义数据</ui-link> \n</div>\n:::\n\n数据表单需要注意下面几点：\n\n1. 最终数据会存入热区对象的`data`属性中\n2. 数据表单的`form-key`必需设置，若未设置最终数据不会存入热区的`data`中\n3. 数据表单的`group`通过`slot-scope=\"{group}\"`解构获取(Vue.js的[作用域插槽](https://cn.vuejs.org/v2/guide/components.html#作用域插槽))，并且需要绑定到所有表单上，若未绑定到表单，最终数据不会存入热区的`data`中\n\n[[[形态]]]\n\n:::preset/html\nformStatus\n---\nuikey:imagemap\nstatusDefaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\n:::\n\n[[[配置]]]\n\n:::preset/html\nformConfigTable\n---\n|[allow-url](#allow-url)|允许从网络地址获取文件并上传图片|`true`<br>`false`|Boolean|`false`|\n|[allow-drag](#allow-drag)|允许拖拽文件或网络地址上传图片，若拖拽的是网络地址必须开启`allow-url`|`true`<br>`false`|Boolean|`false`|\n|[multi](#multi)|允许同时选择多个图片上传。注意由于`max`默认为1，请先设置`max`，否则选择多个图片最终只能上传1张。|`true`<br>`false`|Boolean|`false`|\n|[validate](#validate)|验证上传的图片，详见：[文件上传组件的`validate`配置](/component/upload.html)|验证函数|Function|`() => {}`|\n|[uploader](#uploader)|图片上传适配器，详见：[文件上传组件的`uploader`配置](/component/upload.html)|文件上传适配器函数|Function|`undefined`|\n|[clean-zone](#clean-zone)|当图片更换时，清空所有的热区|`true`<br>`false`|Boolean|`true`|\n|[clean-allzone-btn](#clean-allzone-btn)|显示清除所有热区的按钮|`true`<br>`false`|Boolean|`true`|\n|[max](#max)|最多允许上传多少图片|数字|Number|`1`|\n|[max-spot](#max-spot)|最多允许的热区数量|数字|Number|`Infinity`|\n\n:::preset/html\nformConfigDemo\n---\nuikey:imagemap\nconfigDefaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\n:::\n\n#### allow-url\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" allow-url></ui-imagemap>\n</div>\n:::\n\n#### allow-drag\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" allow-drag></ui-imagemap>\n</div>\n:::\n\n#### multi\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" multi :max=\"10\"></ui-imagemap>\n</div>\n:::\n\n#### validate\n\n限制上传大小为30kb的图片：\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        checksize : function (file) {\n                \n            if (file.size > 30000) {\n                \n                return '上传文件的大小不能超过30kb';\n\n            }\n\n        }\n    }\n});\n---\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" :validate=\"checksize\"></ui-imagemap>\n</div>\n:::\n\n#### uploader\n\n下面的示例的通过指定适配器演示了图片上传失败的情况：\n\n:::vue/html\nnew Vue({\n    el : '{$el}',\n    template : '{$template}',\n    methods : {\n        uploader : function (file) {\n\n            return {\n                status : false,\n                message : '文件上传失败，请重试'\n            };\n\n        }\n    }\n});\n---\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" :uploader=\"uploader\"></ui-imagemap>\n</div>\n:::\n\n#### clean-zone\n\n当图片发生变化时不清空热区，超出范围的热区会自动移动到新的区域内：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" multi :max=\"10\" :clean-zone=\"false\"></ui-imagemap>\n</div>\n:::\n\n#### clean-allzone-btn\n\n不显示清空所有热区的按钮：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" multi :max=\"10\" :default-value=\"{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[],'w':722,'h':725}\" :clean-allzone-btn=\"false\"></ui-imagemap>\n</div>\n:::\n\n#### max\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" :max=\"3\"></ui-imagemap>\n</div>\n:::\n\n#### max-spot\n\n最多只能画三个热区：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" :max-spot=\"3\" :default-value=\"{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[],'w':722,'h':725}\"></ui-imagemap>\n</div>\n:::\n\n如果默认值中的热区数量多于`max-spot`的设置，多于的热区会被丢弃：\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap form-name=\"热区\" :max-spot=\"1\" :default-value=\"{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\"></ui-imagemap>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset/html\nformMethod\n---\nuikey:imagemap\nmethodValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\nmethodDefaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\n:::\n\n#### addZone([zone])\n\n新增一个热区，返回这个热区的`index`索引位置。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|zone|YES|热区对象，包含：<br><br>`x` : 单个热区的X轴坐标(单位px)，默认`0`<br>`y` : 热区的Y轴坐标(单位px)，默认`0`<br>`w` : 热区的宽度(单位px)，默认为最小宽度<br>`h` : 热区的高度(单位px)，默认为最小高度<br>`i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)，默认`0`<br>`data` : 热区的自定义数据对象(键值对)，此数据不会做校验，默认`undefined`|热区对象|`Object`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap ref=\"demo3\" form-name=\"热区\" :default-value=\"{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\"></ui-imagemap>\n    <br>\n    <ui-link js=\"morning.findVM('demo3').addZone()\">新增一个默认热区</ui-link><br>\n    <ui-link js=\"morning.findVM('demo3').addZone({x:20, y: 20, w: 50, h: 50})\">新增一个热区</ui-link>\n</div>\n:::\n\n#### removeZone(index)\n\n删除一个热区。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|index|NO|需要删除热区的索引位置。|索引位置|`Number`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap ref=\"demo4\" form-name=\"热区\" :default-value=\"{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\"></ui-imagemap>\n    <br>\n    <ui-link js=\"morning.findVM('demo4').removeZone(0)\">删除第一个热区</ui-link>\n</div>\n:::\n\n#### updateZone(index, zone)\n\n更新一个热区。\n\n|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n|index|NO|需要更新热区的索引位置。|索引位置|`Number`|`undefined`|\n|zone|NO|需要更新的热区对象，包含：<br><br>`x` : 单个热区的X轴坐标(单位px)，默认`0`<br>`y` : 热区的Y轴坐标(单位px)，默认`0`<br>`w` : 热区的宽度(单位px)，默认为最小宽度<br>`h` : 热区的高度(单位px)，默认为最小高度<br>`i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)，默认`0`<br>`data` : 热区的自定义数据对象(键值对)，此数据不会做校验，默认`undefined`|热区对象|`Object`|`undefined`|\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap ref=\"demo5\" form-name=\"热区\" :default-value=\"{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\"></ui-imagemap>\n    <br>\n    <ui-link js=\"morning.findVM('demo5').updateZone(0, {x: 10, y: 10, w: 50, h: 50})\">更新第一个热区</ui-link>\n</div>\n:::\n\n#### cleanZones()\n\n清除所有热区。\n\n:::democode/html\n<div style=\"width:300px;\">\n    <ui-imagemap ref=\"demo2\" form-name=\"热区\" :default-value=\"{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\"></ui-imagemap>\n    <br>\n    <ui-link js=\"morning.findVM('demo2').cleanZones()\">清除所有热区</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset/html\nformEvent\n---\nuikey:imagemap\neventValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\neventDefaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Object` : 对象\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成默认对象。\n- 值对象中属性：`images`、`zones`、`w`、`h`的类型不符合预期，值会被重置成默认对象。\n\n#### 值格式\n\n对象包含属性：\n\n- `images` : 数组，组成热区的图片。数组中每一项都是一个对象，包含：\n    - `path` : 图片地址\n    - `name` : 图片名称\n- `zones` : 数组，所有热区。数组中每一项都是一个对象，包含：\n    - `x` : 单个热区的X轴坐标(单位px)\n    - `y` : 热区的Y轴坐标(单位px)\n    - `w` : 热区的宽度(单位px)\n    - `h` : 热区的高度(单位px)\n    - `i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)\n    - `data` : 热区的自定义数据对象(键值对)\n- `w` : 热区容器参考宽度\n- `h` : 热区容器参考高度\n\n#### 默认值\n\n`{images:[], zones:[], w:0, h:0}`\n\n#### 输入/输出示例\n\n:::repeat/html\nformValueType:imagemap\n---\n<div>\n    <p>{$valueType}类型</p>\n    <div style=\"width:300px;\">\n        <ui-imagemap ref=\"demoType{$valueType}\" form-name=\"热区\"></ui-imagemap>\n    </div>\n    <br>\n    <ui-link js=\"window.morning.findVM('demoType{$valueType}').set({$&valueContent})\">设置{$valueType}类型</ui-link>\n    <ui-link js=\"alert(window.morning.findVM('demoType{$valueType}').getJson())\">获取表单JSON值</ui-link>\n</div>\n<br>\n<br>\n:::\n\n\n[[[源码]]]\n\n<iframe src=\"/report/coverage/lib/components/imagemap/index.vue.html\" name=\"codeFrame\" frameborder=\"0\" onload=\"this.height=codeFrame.document.body.scrollHeight\"></iframe>\n\n")])])},i=[];t._withStripped=!0},268:function(n,e,a){"use strict";a.r(e);var t=a(31),i=a.n(t);for(var o in t)"default"!==o&&function(n){a.d(e,n,function(){return t[n]})}(o);var m=a(130),u=a(0),d=!1;var p=function(n){d||a(630)},l=Object(u.a)(i.a,m.a,m.b,!1,p,null,null);l.options.__file="src/docs/pages/component/imagemap/index.vue",e.default=l.exports},269:function(n,e,a){"use strict";var t=o(a(1)),i=o(a(268));function o(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(i.default)}})},31:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,i=a(2),o=(t=i)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"imagemap"}},components:{"doc-component":o.default}},n.exports=e.default},630:function(n,e){}});