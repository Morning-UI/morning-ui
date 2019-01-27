!function(n){function e(e){for(var i,d,s=e[0],v=e[1],c=e[2],a=0,u=[];a<s.length;a++)d=s[a],o[d]&&u.push(o[d][0]),o[d]=0;for(i in v)Object.prototype.hasOwnProperty.call(v,i)&&(n[i]=v[i]);for(r&&r(e);u.length;)u.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var n,e=0;e<l.length;e++){for(var t=l[e],i=!0,s=1;s<t.length;s++){var v=t[s];0!==o[v]&&(i=!1)}i&&(l.splice(e--,1),n=d(d.s=t[0]))}return n}var i={},o={19:0};var l=[];function d(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.m=n,d.c=i,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},d.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},d.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],v=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var r=v;l.push([289,0]),t()}({1:function(n,e){n.exports=Vue},140:function(n,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return o});var i=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 折叠面板 `<ui-collapse>`\n\n<doc-component-status page="collapse"></doc-component-status>\n\n[[[开始]]]\n\n定义一个折叠面板，折叠面板支持嵌套，这是一个块元素。\n\n折叠面板支持多种样式，通过不同的样式类来区分。\n\n:::vue\n@name:使用\n---\n#demo\n>desc\n使用`slot`的`name`属性标记内容对应的折叠面板的KEY，面板的KEY是唯一索引，所以`slot`不能重复。\n>tpl\n<div style="width: 560px;">\n    <ui-collapse>\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n</div>\n:::\n\n:::vue\n@name:使用HTML标题\n---\n#demo\n>desc\n标题支持使用HTML，但不支持使用Morning或VUE组件。\n>tpl\n<div style="width: 560px;">\n    <ui-collapse>\n        <div slot="app" :title="\'<i class=\\\'iconfont\\\'>&#xe601;</i>应用\'">\n            这里是应用内容\n        </div>\n        <div slot="tag" :title="\'<i class=\\\'iconfont\\\'>&#xe815;</i>标签\'">\n            这里是标签内容\n        </div>\n        <div slot="more" title="更多">\n            这里是更多内容\n        </div>\n    </ui-collapse>\n</div>\n:::\n\n:::vue\n@name:手风琴效果\n---\n#demo\n>desc\n通过将`max-show`配置设为`1`可以实现手风琴效果。\n>tpl\n<div style="width: 560px;">\n    <ui-collapse :max-show="1">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n</div>\n:::\n\n:::vue\n@name:线条风格的折叠面板\n---\n#demo\n>desc\n通过`line`样式类可以显示线条风格的折叠面板。\n>tpl\n<div style="width: 560px;">\n    <ui-collapse class="line">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n</div>\n:::\n\n:::vue\n@name:区块风格的折叠面板\n---\n#demo\n>desc\n通过`block`样式类可以显示区块风格的折叠面板。\n>tpl\n<div style="width: 560px;">\n    <ui-collapse class="block">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n</div>\n:::\n\n:::vue\n@name:不显示右侧箭头\n---\n#demo\n>desc\n通过`no-arrow`样式类可以不显示右侧箭头。\n>tpl\n<div style="width: 560px;">\n    <ui-collapse class="no-arrow">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n</div>\n:::\n\n:::vue\n@name:支持嵌套\n---\n#demo\n>tpl\n<div style="width: 560px;">\n    <ui-collapse>\n        <div slot="one" title="第一组">\n            这里是第一组内容\n        </div>\n        <div slot="two" title="第二组">\n            <ui-collapse>\n                <div slot="one" title="第二组第一个">\n                    这里是第二组第一个内容\n                </div>\n                <div slot="two" title="第二组第二个">\n                    这里是第二组第二个内容\n                </div>\n                <div slot="three" title="第二组第三个">\n                    这里是第二组第三个内容\n                </div>\n            </ui-collapse>\n        </div>\n        <div slot="three" title="第三组">\n            这里是第三组内容\n        </div>\n    </ui-collapse>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a>\n\n[[[配置]]]\n\n:::vue\n@name:shows\n---\n#config\n>conf-desc\n需要打开的面板。\n>conf-accept\n`slot`名(面板的KEY)组成的数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>desc\n打开单个面板。\n>tpl\n<div style="width: 560px;">\n    <ui-collapse :shows="[\'two\']">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n</div>\n---\n#demo\n>desc\n打开多个面板。\n>tpl\n<div style="width: 560px;">\n    <ui-collapse :shows="[\'two\', \'three\']">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n</div>\n---\n#demo\n>desc\n无法打开被`disabled-options`禁止的面板。\n>tpl\n<div style="width: 560px;">\n    <ui-collapse :shows="[\'two\', \'three\']" :disabled-options="[\'three\']">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n</div>\n:::\n\n:::vue\n@name:max-show\n---\n#config\n>conf-desc\n最多同时打开几个面板。\n>conf-accept\n数字\n>conf-type\nNumber\n>conf-default\n`Infinity`\n---\n#demo\n>desc\n设置为`1`可以实现手风琴效果。\n>tpl\n<div style="width: 560px;">\n    <ui-collapse :max-show="1">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n</div>\n---\n#demo\n>desc\n也可以设为更多，关闭时会按照打开顺序依次关闭。\n>tpl\n<div style="width: 560px;">\n    <ui-collapse :max-show="2">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n</div>\n:::\n\n:::vue\n@name:disabled-options\n---\n#config\n>conf-desc\n禁止打开指定的面板<br>被禁止的面板内容不会被渲染。\n>conf-accept\n禁用面板的KEY组成的数组\n>conf-type\nArray\n>conf-default\n`[]`\n---\n#demo\n>tpl\n<div style="width: 560px;">\n    <ui-collapse :disabled-options="[\'two\']">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n</div>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:switch(key)\n---\n#method\n>method-desc\n切换指定面板的显示状态。\n>method-args\n|key|NO|需要切换显示状态的面板的KEY|面板的KEY，即`slot`的`name`|`String`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width: 560px;">\n        <ui-collapse ref="demo1">\n            <div slot="one" title="第一个">\n                这里是第一个内容\n            </div>\n            <div slot="two" title="第二个">\n                这里是第二个内容\n            </div>\n            <div slot="three" title="第三个">\n                这里是第三个内容\n            </div>\n        </ui-collapse>\n    </div>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo1\').switch(\'one\');">切换第一个的显示状态</ui-link>\n    <ui-link js="morning.findVM(\'demo1\').switch(\'two\');">切换第二个的显示状态</ui-link>\n</div>\n:::\n\n:::vue\n@name:show(key)\n---\n#method\n>method-desc\n显示指定面板。\n>method-args\n|key|NO|需要显示面板的KEY|面板的KEY，即`slot`的`name`|`String`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width: 560px;">\n        <ui-collapse ref="demo2">\n            <div slot="one" title="第一个">\n                这里是第一个内容\n            </div>\n            <div slot="two" title="第二个">\n                这里是第二个内容\n            </div>\n            <div slot="three" title="第三个">\n                这里是第三个内容\n            </div>\n        </ui-collapse>\n    </div>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo2\').show(\'one\');">显示第一个面板</ui-link>\n</div>\n:::\n\n:::vue\n@name:hide(key)\n---\n#method\n>method-desc\n隐藏指定面板。\n>method-args\n|key|NO|需要隐藏面板的KEY|面板的KEY，即`slot`的`name`|`String`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width: 560px;">\n        <ui-collapse ref="demo3" :shows="[\'one\']">\n            <div slot="one" title="第一个">\n                这里是第一个内容\n            </div>\n            <div slot="two" title="第二个">\n                这里是第二个内容\n            </div>\n            <div slot="three" title="第三个">\n                这里是第三个内容\n            </div>\n        </ui-collapse>\n    </div>\n    <br><br> \n    <ui-link js="morning.findVM(\'demo3\').hide(\'one\');">隐藏第一个面板</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:switch\n---\n#event\n>event-desc\n当有面板显示/隐藏状态变化时触发。\n>event-args\n|key|切换面板的slot值|`String`|\n---\n#demo\n>tpl\n<div style="width: 560px;">\n    <ui-collapse ref="demo4" @switch="echo">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n    <br>\n    <p>点击面板触发此事件</p>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo4.console1\', \'switch event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:show\n---\n#event\n>event-desc\n当有面板显示时触发。\n>event-args\n|key|显示面板的slot值|`String`|\n---\n#demo\n>tpl\n<div style="width: 560px;">\n    <ui-collapse ref="demo5" @show="echo">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n    <br>\n    <p>点击面板触发此事件</p>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo5.console1\', \'show event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:hide\n---\n#event\n>event-desc\n当有面板隐藏时触发。\n>event-args\n|key|隐藏面板的slot值|`String`|\n---\n#demo\n>tpl\n<div style="width: 560px;">\n    <ui-collapse ref="demo6" @hide="echo">\n        <div slot="one" title="第一个">\n            这里是第一个内容\n        </div>\n        <div slot="two" title="第二个">\n            这里是第二个内容\n        </div>\n        <div slot="three" title="第三个">\n            这里是第三个内容\n        </div>\n    </ui-collapse>\n    <br>\n    <p>点击面板触发此事件</p>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo6.console1\', \'hide event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@layout:lifecycle-event\n---\ncollapse\n折叠面板\n<div slot="one" title="第一个">\n    {*text*}\n</div>\n<div slot="two" title="第二个">\n    这里是第二个内容\n</div>\n<div slot="three" title="第三个">\n    这里是第三个内容\n</div>\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/collapse/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];i._withStripped=!0},22:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(2),l=(i=o)&&i.__esModule?i:{default:i};e.default={data:function(){return{page:"collapse"}},components:{"doc-component":l.default}},n.exports=e.default},288:function(n,e,t){"use strict";t.r(e);var i=t(22),o=t.n(i);for(var l in i)"default"!==l&&function(n){t.d(e,n,function(){return i[n]})}(l);var d=t(140),s=t(0),v=!1;var c=function(n){v||t(689)},r=Object(s.a)(o.a,d.a,d.b,!1,c,null,null);r.options.__file="src/docs/pages/component/collapse/index.vue",e.default=r.exports},289:function(n,e,t){"use strict";var i=l(t(1)),o=l(t(288));function l(n){return n&&n.__esModule?n:{default:n}}new i.default({el:"#root",render:function(n){return n(o.default)}})},689:function(n,e){}});