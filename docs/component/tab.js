!function(n){function i(i){for(var d,s,v=i[0],l=i[1],a=i[2],c=0,u=[];c<v.length;c++)s=v[c],o[s]&&u.push(o[s][0]),o[s]=0;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d]);for(r&&r(i);u.length;)u.shift()();return e.push.apply(e,a||[]),t()}function t(){for(var n,i=0;i<e.length;i++){for(var t=e[i],d=!0,v=1;v<t.length;v++){var l=t[v];0!==o[l]&&(d=!1)}d&&(e.splice(i--,1),n=s(s.s=t[0]))}return n}var d={},o={72:0},e=[];function s(i){if(d[i])return d[i].exports;var t=d[i]={i:i,l:!1,exports:{}};return n[i].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=d,s.d=function(n,i,t){s.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:t})},s.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,i){if(1&i&&(n=s(n)),8&i)return n;if(4&i&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var d in n)s.d(t,d,function(i){return n[i]}.bind(null,d));return t},s.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(i,"a",i),i},s.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},s.p="/";var v=window.webpackJsonp=window.webpackJsonp||[],l=v.push.bind(v);v.push=i,v=v.slice();for(var a=0;a<v.length;a++)i(v[a]);var r=l;e.push([741,0]),t()}({1:function(n,i){n.exports=Vue},131:function(n,i,t){"use strict";t.r(i);var d=t(132),o=t.n(d);for(var e in d)"default"!==e&&function(n){t.d(i,n,function(){return d[n]})}(e);i.default=o.a},132:function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var d,o=t(2),e=(d=o)&&d.__esModule?d:{default:d};i.default={data:function(){return{page:"tab"}},components:{"doc-component":e.default}},n.exports=i.default},343:function(n,i,t){"use strict";var d=function(){var n=this.$createElement,i=this._self._c||n;return i("doc-component",{attrs:{page:this.page,hasPadding:!0}},[i("script",{attrs:{type:"text/markdown"}},[this._v('\n# 标签页 `<ui-tab>`\n\n<doc-component-status page="tab"></doc-component-status>\n\n[[[开始]]]\n\n定义一个标签页，标签页支持嵌套。\n\n标签页支持多种样式，通过不同的样式类来区分。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n使用`slot`属性标记内容对应的标签名，标签名是唯一索引，所以`slot`不能重复。\n>tpl\n<ui-tab>\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n:::vue\n@name:无内边距\n---\n#demo\n>desc\n标签页默认有一定内边距，通过`.no-padding`为标签页内容取消内边距。\n>tpl\n<ui-tab class="no-padding">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n:::vue\n@name:区块标签页\n---\n#demo\n>desc\n通过`.block`定义区块风格的标签页。\n>tpl\n<ui-tab class="block">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n:::vue\n@name:线条标签页\n---\n#demo\n>desc\n通过`.line`定义线条风格的标签页。\n>tpl\n<ui-tab class="line">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n:::vue\n@name:按钮式标签页\n---\n#demo\n>desc\n通过`.btn`定义线条风格的标签页。\n>tpl\n<ui-tab class="btn">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n:::vue\n@name:无边框标签页\n---\n#demo\n>desc\n通过`.noborder`定义无边框标签页，一般配合线条使用。\n>tpl\n<ui-tab class="line noborder">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n:::vue\n@name:嵌套使用\n---\n#demo\n>tpl\n<ui-tab class="block noborder">\n    <div slot="A">\n        <ui-tab class="line noborder">\n            <div slot="A1">\n                <ui-tab>\n                    <div slot="A11">A11</div>\n                    <div slot="A12">A12</div>\n                    <div slot="A13">A13</div>\n                </ui-tab>\n            </div>\n            <div slot="A2">A2</div>\n            <div slot="A3">A3</div>\n        </ui-tab>\n    </div>\n    <div slot="B">B</div>\n    <div slot="C">C</div>\n</ui-tab>\n:::\n\n:::vue\n@name:位于左侧的标签页\n---\n#demo\n>desc\n通过标签页的`position`配置你可以调整标签页的位置。\n<br><br>\n更多用法详见：[position配置](/component/tab.html#position)\n>tpl\n<ui-tab position="left">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n:::vue\n@name:锚点定位\n---\n#demo\n>desc\n开启`anchor-target`配置后，当标签页检测到页面锚点变化时，会自动切换到对应的标签并定位：\n<br><br>\n<a href="#锚点1">定位到第二章的锚点1</a><br>\n<a href="#锚点2">定位到第三章的锚点2</a>\n<br><br>\n如果使用了多个标签页嵌套，组件会切换所有标签直到可以显示锚点定位内容：\n<br><br>\n<a href="#锚点3">定位到`第四章`的`第二节`的`第三页`中的锚点3</a>\n<br><br>\n多层嵌套的标签页进行切换时，如层级中某个标签页组件未开启`anchor-target`配置，则这个标签页不会进行切换。但不影响其他标签页切换。\n>tpl\n<ui-tab class="block noborder" anchor-target>\n    <div slot="第一章">第一章</div>\n    <div slot="第二章">\n        <div style="height:100px;">第二章</div>\n        <div id="锚点1">锚点1</div>\n    </div>\n    <div slot="第三章">\n        <div style="height:200px;">第三章</div>\n        <div id="锚点2">锚点2</div>\n    </div>\n    <div slot="第四章">\n        <ui-tab class="noborder" anchor-target>\n            <div slot="第一节">第一节</div>\n            <div slot="第二节">\n                <ui-tab class="noborder" anchor-target>\n                    <div slot="第一页">第一页</div>\n                    <div slot="第二页">第二页</div>\n                    <div slot="第三页">\n                        <div style="height:200px;">第三页</div>\n                        <div id="锚点3">锚点3</div>\n                    </div>\n                </ui-tab>\n            </div>\n            <div slot="第三节">第三节</div>\n        </ui-tab>\n    </div>\n</ui-tab>\n:::\n\n:::vue\n@name:无内容标签页\n---\n#demo\n>desc\n若某个标签页中没有内容，建议使用空状态组件(`ui-empty`)。\n>tpl\n<ui-tab>\n    <div slot="第一页">第一页</div>\n    <div slot="第二页"><ui-empty></ui-empty></div>\n    <div slot="第三页"><ui-empty></ui-empty></div>\n</ui-tab>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n[[[配置]]]\n\n:::vue\n@name:tab\n---\n#config\n>conf-desc\n默认展示的标签页。<br>无法选中`disabled-options`设置的禁用标签。\n>conf-accept\n`slot`(标签名)\n>conf-type\nString\n>conf-default\n第一个标签名\n---\n#demo\n>tpl\n<ui-tab tab="第三页">\n    \x3c!-- 默认展示第三页 --\x3e\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n:::vue\n@name:prepend\n---\n#config\n>conf-desc\n在对应标签名之前插入内容(可以是HTML，一般用于插入icon)。若标签名在此对象中未找到则什么都不插入。\n>conf-accept\n需要插入内容的hash(键名对应标签名，键值是需要插入的内容)\n>conf-type\nObject\n>conf-default\n`{}`\n---\n#demo\n>tpl\n<div>\n    <ui-tab\n        :prepend="prepend"\n    >\n        <div slot="应用">应用</div>\n        <div slot="标签">标签</div>\n        <div slot="其他">其他</div>\n    </ui-tab>\n</div>\n>script\n{\n    data : function () {\n        return {\n            // 需要插入的内容\n            prepend : {\n                \'应用\' : \''+this._s('<i class="mo-icon mo-icon-block-4"></i> ')+"',\n                '标签' : '"+this._s('<i class="mo-icon mo-icon-star-f"></i> ')+'\'\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:append\n---\n#config\n>conf-desc\n在对应标签名之后插入内容(可以是HTML，一般用于插入icon)。若标签名在此对象中未找到则什么都不插入。\n>conf-accept\n需要插入内容的hash(键名对应标签名，键值是需要插入的内容)\n>conf-type\nObject\n>conf-default\n`{}`\n---\n#demo\n>tpl\n<div>\n    <ui-tab\n        :append="append"\n    >\n        <div slot="应用">应用</div>\n        <div slot="标签">标签</div>\n        <div slot="其他">其他</div>\n    </ui-tab>\n</div>\n>script\n{\n    data : function () {\n        return {\n            // 需要插入的内容\n            append : {\n                \'应用\' : \''+this._s(' <i class="mo-icon mo-icon-block-4"></i>')+"',\n                '标签' : '"+this._s(' <i class="mo-icon mo-icon-star-f"></i>')+'\'\n            }\n        }\n    }\n}\n:::\n\n:::vue\n@name:anchor-target\n---\n#config\n>conf-desc\n是否启用锚点定位。启用后URL中锚点匹配到的元素所在的标签页，会切换标签并滚动到此元素。<br>多层嵌套的标签页进行切换时，如层级中某个标签页组件未开启此配置，则这个标签页不会进行切换。但不影响其他标签页切换。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n开启`anchor-target`配置后，当标签页检测到页面锚点变化时，会自动切换到对应的标签并定位：\n<br><br>\n<a href="#锚点1">定位到第二章的锚点1</a><br>\n<a href="#锚点2">定位到第三章的锚点2</a>\n<br><br>\n如果使用了多个标签页嵌套，组件会切换所有标签直到可以显示锚点定位内容：\n<br><br>\n<a href="#锚点3">定位到`第四章`的`第二节`的`第三页`中的锚点3</a>\n<br><br>\n多层嵌套的标签页进行切换时，如层级中某个标签页组件未开启`anchor-target`配置，则这个标签页不会进行切换。但不影响其他标签页切换。\n>tpl\n<ui-tab class="block noborder" anchor-target>\n    <div slot="第一章">第一章</div>\n    <div slot="第二章">\n        <div style="height:100px;">第二章</div>\n        <div id="锚点1">锚点1</div>\n    </div>\n    <div slot="第三章">\n        <div style="height:200px;">第三章</div>\n        <div id="锚点2">锚点2</div>\n    </div>\n    <div slot="第四章">\n        <ui-tab class="noborder" anchor-target>\n            <div slot="第一节">第一节</div>\n            <div slot="第二节">\n                <ui-tab class="noborder" anchor-target>\n                    <div slot="第一页">第一页</div>\n                    <div slot="第二页">第二页</div>\n                    <div slot="第三页">\n                        <div style="height:200px;">第三页</div>\n                        <div id="锚点3">锚点3</div>\n                    </div>\n                </ui-tab>\n            </div>\n            <div slot="第三节">第三节</div>\n        </ui-tab>\n    </div>\n</ui-tab>\n:::\n\n:::vue\n@name:position\n---\n#config\n>conf-desc\n标签页的位置。\n>conf-accept\n`\'top\'`：上方<br>`\'left\'`：左侧<br>`\'right\'`：右侧<br>`\'bottom\'`：下方\n>conf-type\nString\n>conf-default\n`\'top\'`\n---\n#demo\n>desc\n标签页在上方。\n>tpl\n<ui-tab position="top">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在上方，配合无边框。\n>tpl\n<ui-tab position="top" class="noborder">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在上方，配合区块标签页。\n>tpl\n<ui-tab position="top" class="block">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在上方，配合线条标签页。\n>tpl\n<ui-tab position="top" class="line">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在上方，配合按钮式标签页。\n>tpl\n<ui-tab position="top" class="btn">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在下方。\n>tpl\n<ui-tab position="bottom">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在下方，配合无边框。\n>tpl\n<ui-tab position="bottom" class="noborder">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在下方，配合区块标签页。\n>tpl\n<ui-tab position="bottom" class="block">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在下方，配合线条标签页。\n>tpl\n<ui-tab position="bottom" class="line">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在下方，配合按钮式标签页。\n>tpl\n<ui-tab position="bottom" class="btn">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在左侧。\n>tpl\n<ui-tab position="left">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在左侧，配合无边框。\n>tpl\n<ui-tab position="left" class="noborder">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在左侧，配合区块标签页。\n>tpl\n<ui-tab position="left" class="block">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在左侧，配合线条标签页。\n>tpl\n<ui-tab position="left" class="line">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在左侧，配合按钮式标签页。\n>tpl\n<ui-tab position="left" class="btn">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在右侧。\n>tpl\n<ui-tab position="right">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在右侧，配合无边框。\n>tpl\n<ui-tab position="right" class="noborder">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在右侧，配合区块标签页。\n>tpl\n<ui-tab position="right" class="block">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在右侧，配合线条标签页。\n>tpl\n<ui-tab position="right" class="line">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n标签页在右侧，配合按钮式标签页。\n>tpl\n<ui-tab position="right" class="btn">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n:::\n\n:::vue\n@name:disabled-options\n---\n#config\n>conf-desc\n禁用指定的标签页，禁用后将无法切换到此标签页<br>若在通过`tab`配置指定的标签处于禁用状态，则会切换到下一个最近可用标签。<br>注意：请至少保留一个可选标签。\n>conf-accept\n禁用标签名组成的数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<ui-tab :disabled-options="[\'第二页\']">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n区块标签页。\n>tpl\n<ui-tab :disabled-options="[\'第二页\']" class="block">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n线条标签页。\n>tpl\n<ui-tab :disabled-options="[\'第二页\']" class="line">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n按钮式标签页。\n>tpl\n<ui-tab :disabled-options="[\'第二页\']" class="btn">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n---\n#demo\n>desc\n 使用`tab`无法选中禁用的标签（自动切换下一个最近可选标签）。\n>tpl\n<ui-tab :disabled-options="[\'第二页\']" tab="第二页">\n    <div slot="第一页">第一页</div>\n    <div slot="第二页">第二页</div>\n    <div slot="第三页">第三页</div>\n</ui-tab>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:switch(name)\n---\n#method\n>method-desc\n切换到指定的标签。\n>method-args\n|name|NO|切换到的标签名|标签的名称`slot`|`String`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-tab ref="demo3">\n        <div slot="第一页">第一页</div>\n        <div slot="第二页">第二页</div>\n        <div slot="第三页">第三页</div>\n    </ui-tab>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo3\').switch(\'第一页\');">切换到第一页</ui-link>\n    <ui-link js="morning.findVM(\'demo3\').switch(\'第二页\');">切换到第二页</ui-link>\n    <ui-link js="morning.findVM(\'demo3\').switch(\'第三页\');">切换到第三页</ui-link>\n</div>\n:::\n\n:::vue\n@name:next()\n---\n#method\n>method-desc\n切换到下一个标签，若是最后一个则切换到第一个。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-tab ref="demo4">\n        <div slot="第一页">第一页</div>\n        <div slot="第二页">第二页</div>\n        <div slot="第三页">第三页</div>\n    </ui-tab>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo4\').next();">切换到下一个标签</ui-link>\n</div>\n:::\n\n:::vue\n@name:prev()\n---\n#method\n>method-desc\n切换到上一个标签，若是第一个则切换到最后一个。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-tab ref="demo5">\n        <div slot="第一页">第一页</div>\n        <div slot="第二页">第二页</div>\n        <div slot="第三页">第三页</div>\n    </ui-tab>\n    <br><br>\n    <ui-link js="morning.findVM(\'demo5\').prev();">切换到上一个标签</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:switch\n---\n#event\n>event-desc\n当标签页切换后触发。\n>event-args\n|name|切换到标签的名称`slot`|`String`|\n---\n#demo\n>tpl\n<div>\n    <ui-tab @switch="echo" ref="demo6">\n        <div slot="第一页">第一页</div>\n        <div slot="第二页">第二页</div>\n        <div slot="第三页">第三页</div>\n    </ui-tab>\n    <p>切换标签页触发此事件</p>\n</div>\n>script\n{\n    methods : {\n        echo : function (name) {\n            console.log(\'demo6.console1\', \'switch event!\', name);\n        }\n    }\n}\n:::\n\n:::vue\n@layout:lifecycle-event\n---\ntab\n标签页\n<div slot="第一页">{*text*}</div>\n<div slot="第二页">第二页</div>\n<div slot="第三页">第三页</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/tab/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];d._withStripped=!0,t.d(i,"a",function(){return d}),t.d(i,"b",function(){return o})},741:function(n,i,t){"use strict";var d=e(t(1)),o=e(t(742));function e(n){return n&&n.__esModule?n:{default:n}}new d.default({el:"#root",render:function(n){return n(o.default)}})},742:function(n,i,t){"use strict";t.r(i);var d=t(343),o=t(131);for(var e in o)"default"!==e&&function(n){t.d(i,n,function(){return o[n]})}(e);var s=t(0),v=Object(s.a)(o.default,d.a,d.b,!1,null,null,null);v.options.__file="src/docs/pages/component/tab/index.vue",i.default=v.exports}});