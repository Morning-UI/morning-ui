!function(n){function i(i){for(var o,l,u=i[0],r=i[1],s=i[2],g=0,a=[];g<u.length;g++)l=u[g],Object.prototype.hasOwnProperty.call(d,l)&&d[l]&&a.push(d[l][0]),d[l]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);for(c&&c(i);a.length;)a.shift()();return t.push.apply(t,s||[]),e()}function e(){for(var n,i=0;i<t.length;i++){for(var e=t[i],o=!0,u=1;u<e.length;u++){var r=e[u];0!==d[r]&&(o=!1)}o&&(t.splice(i--,1),n=l(l.s=e[0]))}return n}var o={},d={26:0},t=[];function l(i){if(o[i])return o[i].exports;var e=o[i]={i:i,l:!1,exports:{}};return n[i].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=n,l.c=o,l.d=function(n,i,e){l.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:e})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,i){if(1&i&&(n=l(n)),8&i)return n;if(4&i&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var o in n)l.d(e,o,function(i){return n[i]}.bind(null,o));return e},l.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(i,"a",i),i},l.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},l.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],r=u.push.bind(u);u.push=i,u=u.slice();for(var s=0;s<u.length;s++)i(u[s]);var c=r;t.push([816,0]),e()}({1:function(n,i){n.exports=Vue},215:function(n,i,e){"use strict";e.r(i);var o=e(216),d=e.n(o);for(var t in o)"default"!==t&&function(n){e.d(i,n,(function(){return o[n]}))}(t);i.default=d.a},216:function(n,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o,d=e(2),t=(o=d)&&o.__esModule?o:{default:o};i.default={data:function(){return{page:"dialog"}},components:{"doc-component":t.default}},n.exports=i.default},377:function(n,i,e){"use strict";var o=function(){var n=this.$createElement,i=this._self._c||n;return i("doc-component",{attrs:{page:this.page,hasPadding:!0}},[i("script",{attrs:{type:"text/markdown"}},[this._v('\n# 模拟盒 `<ui-dialog>`\n\n<doc-component-status page="dialog"></doc-component-status>\n\n[[[开始]]]\n\n定义一个模拟盒，标准的模拟盒分为三部分：\n\n- 头部\n- 主体\n- 操作区(尾部)\n\n模拟盒支持三种不同的出现形式：\n\n- 上方出现：一般用在信息确认时，提供是或否的选择，较弱，尺寸一般较小。\n- 中间出现：一般用在填写内容或阅读内容时，较强，尺寸较大。\n- 直接出现：一般用在页面内容较多，对性能有要求的页面，较快(去除了动画带来的性能负担)。\n\n当你需要展现更多内容时，模拟盒组件的空间可能会显得不足，可以使用[抽屉](/component/drawer.html)组件。\n\n若展现的内容仅仅只有几句话，模拟盒会显的十分重，这时候可以使用[弹出框](/component/popover.html)组件。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo1"></ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo1\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:带头部的模拟盒\n---\n#demo\n>desc\n通过`slot="header"`标签标记一个头部内容。\n>tpl\n<div>\n    <ui-dialog ref="demo2">\n        <div slot="header">This is title</div>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo2\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:带关闭的头部\n---\n#demo\n>desc\n头部标题也可以在`<h1>`标签中，通过`<ui-link>`来增加关闭按钮。。\n>tpl\n<div>\n    <ui-dialog ref="demo3">\n        <div slot="header">\n            <h1>This is title</h1>\n            <ui-link color="white" js="window.morning.findVM(\'demo3\').toggle();"><i class="mo-icon mo-icon-close"></i></ui-link>\n        </div>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo3\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:当头尾部无内容时自动隐藏\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo4">\n        <div slot="header"></div>\n        <div slot="footer"></div>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo4\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:带尾部的模拟盒\n---\n#demo\n>desc\n通过`slot="footer"`标签标记一个尾部内容。\n>tpl\n<div>\n    <ui-dialog ref="demo5">\n        <div slot="footer">This is footer</div>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo5\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:带操作的尾部\n---\n#demo\n>desc\n你可以在尾部的`.operate`元素中加入`ui-btn`和`ui-link`来实现可选操作。\n>tpl\n<div>\n    <ui-dialog ref="demo6">\n        <div slot="footer">\n            <span>This is footer</span>\n            <div class="operate">\n                <ui-link class="margin" color="minor" js="window.morning.findVM(\'demo6\').toggle();">取消</ui-link>\n                <ui-btn color="success">确认</ui-btn>\n            </div>\n        </div>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo6\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:包含内容的模拟盒\n---\n#demo\n>desc\n在组件内添加除`slot="header"`和`slot="footer"`以外的元素会加载到模拟盒的主体部分。\n>tpl\n<div>\n    <ui-dialog ref="demo7">\n        This is body.\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo7\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:包含HTML内容的模拟盒\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo8">\n        <ui-grid height-fill>\n            <div class="row">\n                <div class="col-11">\n                    <ui-center height-fill><p>LEFT</p></ui-center>\n                </div>\n                <div class="col-2">\n                    <ui-divider>OR</ui-divider>\n                </div>\n                <div class="col-11">\n                    <ui-center height-fill><p>RIGHT</p></ui-center>\n                </div>\n            </div>\n        </ui-grid>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo8\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:包含头部/主体/尾部的模拟盒\n---\n#demo\n>desc\n下面是一个完整的模拟盒内容推荐布局。\n>tpl\n<div>\n    <ui-dialog ref="demo9" color="neutral-1">\n        <div slot="header">选择一张图片</div>\n        <ui-grid height-fill>\n            <div class="row">\n                <div class="col-11">\n                    <ui-center height-fill><ui-img class="round" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img></ui-center>\n                </div>\n                <div class="col-2">\n                    <ui-divider>OR</ui-divider>\n                </div>\n                <div class="col-11">\n                    <ui-center height-fill><ui-img class="round" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img></ui-center>\n                </div>\n            </div>\n        </ui-grid>\n        <div slot="footer">\n            <span>\n                需要帮助? <ui-link color="info" size="xxs">获取帮助</ui-link>\n            </span>\n            <div class="operate">\n                <ui-link class="margin" color="minor" js="window.morning.findVM(\'demo9\').toggle(false);">取消</ui-link>\n                <ui-btn color="success">左边</ui-btn>\n                <ui-btn color="success">右边</ui-btn>\n            </div>\n        </div>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo9\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:多层模拟盒\n---\n#demo\n>desc\n模拟盒支持多层嵌套打开，组件会自动按照打开的顺序设置层级。(注意：使用时不用嵌套)\n>tpl\n<div>\n    <ui-dialog ref="demo10" color="black" width="60%" height="60%">\n        <div slot="header">第一级</div>\n        <ui-link js="window.morning.findVM(\'demo11\').toggle(true);">显示第二级模拟盒</ui-link>\n    </ui-dialog>\n\n    <ui-dialog ref="demo11" color="neutral-10" width="40%" height="40%">\n        <div slot="header">第二级</div>\n        <ui-link js="window.morning.findVM(\'demo12\').toggle(true);">显示第三级模拟盒</ui-link>\n    </ui-dialog>\n\n    <ui-dialog ref="demo12" color="neutral-7" width="20%" height="20%">\n        <div slot="header">第三级</div>\n    </ui-dialog>\n\n    <ui-link js="window.morning.findVM(\'demo10\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:纯白的模拟盒\n---\n#demo\n>desc\n使用`class="white-footer"`和`color="white"`，可以设置纯白的模拟盒。\n>tpl\n<div>\n    <ui-dialog ref="demo28" color="white" class="white-footer">\n        <div slot="header">选择一张图片</div>\n        <ui-grid height-fill>\n            <div class="row">\n                <div class="col-11">\n                    <ui-center height-fill><ui-img class="round" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img></ui-center>\n                </div>\n                <div class="col-2">\n                    <ui-divider>OR</ui-divider>\n                </div>\n                <div class="col-11">\n                    <ui-center height-fill><ui-img class="round" src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img></ui-center>\n                </div>\n            </div>\n        </ui-grid>\n        <div slot="footer">\n            <span>\n                需要帮助? <ui-link color="info" size="xxs">获取帮助</ui-link>\n            </span>\n            <div class="operate">\n                <ui-link class="margin" color="minor" js="window.morning.findVM(\'demo28\').toggle(false);">取消</ui-link>\n                <ui-btn color="success">左边</ui-btn>\n                <ui-btn color="success">右边</ui-btn>\n            </div>\n        </div>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo28\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|全部(除`transparent`)|`theme`|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@layout:color\n---\n<ui-dialog ref="demo{$colorKey}" color="{$colorKey}">\n    <div slot="header">This is title</div>\n    <div slot="footer">This is footer</div>\n</ui-dialog>\n<ui-link js="window.morning.findVM(\'demo{$colorKey}\').toggle(true);" color="{$colorKey}">{$colorName}模拟盒</ui-link>\n\n<br>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:width\n---\n#config\n>conf-desc\n模拟盒宽度。\n>conf-accept\n宽度数值（可以是`px`、`em`、`%`等任何css合法单位）\n>conf-type\nString\n>conf-default\n`\'50%\'`\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo13" width="200px"></ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo13\').toggle(true);">显示模拟盒</ui-link>\n</div>\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo14" width="80%"></ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo14\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:height\n---\n#config\n>conf-desc\n模拟盒高度。\n>conf-accept\n高度数值（可以是`px`、`em`、`%`等任何css合法单位）\n>conf-type\nString\n>conf-default\n`\'50%\'`\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo15" height="50px"></ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo15\').toggle(true);">显示模拟盒</ui-link>\n</div>\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo16" height="80%"></ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo16\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:auto-close\n---\n#config\n>conf-desc\n点击模拟盒以外的区域自动关闭模拟盒。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n设为`false`点击模拟盒以外的区域不会关闭模拟盒。\n>tpl\n<div>\n    <ui-dialog ref="demo17" :auto-close="false">\n        <div slot="header">\n            <h1>点击外部区域不会关闭，需要点击右侧关闭</h1>\n            <ui-link color="white" js="window.morning.findVM(\'demo17\').toggle();"><i class="mo-icon mo-icon-close"></i></ui-link>\n        </div>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo17\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:show-type\n---\n#config\n>conf-desc\n模拟盒打开的方式(使用`no`可以提升性能)。\n>conf-accept\n`top`:从上往下弹出<br>`center`:从中间弹出<br>`no`:无动画直接出现\n>conf-type\nString\n>conf-default\n`\'top\'`\n---\n#demo\n>desc\n从上往下弹出。\n>tpl\n<div>\n    <ui-dialog ref="demo18" show-type="top"></ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo18\').toggle(true);">显示模拟盒</ui-link>\n</div>\n---\n#demo\n>desc\n从中间弹出。\n>tpl\n<div>\n    <ui-dialog ref="demo19" show-type="center"></ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo19\').toggle(true);">显示模拟盒</ui-link>\n</div>\n---\n#demo\n>desc\n无动画直接出现。\n>tpl\n<div>\n    <ui-dialog ref="demo20" show-type="no"></ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo20\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:show-mask\n---\n#config\n>conf-desc\n模拟盒打开后显示背景遮罩。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n不显示背景遮罩。\n>tpl\n<div>\n    <ui-dialog ref="demo25" :show-mask="false">\n        <div style="background-color: #EAEAEA;width: 100%;height: 100%"></div>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo25\').toggle(true);">显示模拟盒</ui-link>\n</div>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:show()\n---\n#method\n>method-desc\n显示模拟盒。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo26">\n        <ui-center height-fill>\n            <ui-link js="window.morning.findVM(\'demo26\').hide();">隐藏模拟盒</ui-link>\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo26\').show();">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:hide()\n---\n#method\n>method-desc\n隐藏模拟盒。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo27">\n        <ui-center height-fill>\n            <ui-link js="window.morning.findVM(\'demo27\').hide();">隐藏模拟盒</ui-link>\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo27\').show();">显示模拟盒</ui-link>\n</div>\n:::\n\n:::vue\n@name:toggle([show])\n---\n#method\n>method-desc\n切换模拟盒显示状态。\n>method-args\n|show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo21">\n        <ui-center height-fill>\n            <ui-link js="window.morning.findVM(\'demo21\').toggle(false);">隐藏模拟盒</ui-link> &nbsp;\n            <ui-link js="window.morning.findVM(\'demo21\').toggle();">切换到反向状态</ui-link>\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo21\').toggle(true);">显示模拟盒</ui-link>\n    <ui-link js="window.morning.findVM(\'demo21\').toggle();">切换到反向状态</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当模拟盒切换显示状态时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo22" @emit="echo">\n        <ui-center height-fill>\n            <ui-link js="window.morning.findVM(\'demo22\').toggle();">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo22\').toggle();">显示模拟盒</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo22.console1\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:show\n---\n#event\n>event-desc\n当模拟盒显示时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo23" @show="echo">\n        <ui-center height-fill>\n            <ui-link js="window.morning.findVM(\'demo23\').toggle();">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo23\').toggle();">显示模拟盒</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo23.console1\', \'show event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:hide\n---\n#event\n>event-desc\n当模拟盒隐藏时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo24" @hide="echo">\n        <ui-center height-fill>\n            <ui-link js="window.morning.findVM(\'demo24\').toggle();">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo24\').toggle();">显示模拟盒</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo24.console1\', \'hide event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:after-show\n---\n#event\n>event-desc\n当模拟盒完成显示动画时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo30" @after-show="echo">\n        <ui-center height-fill>\n            <ui-link js="window.morning.findVM(\'demo30\').toggle();">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo30\').toggle();">显示模拟盒</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo30.console1\', \'after-show event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:after-hide\n---\n#event\n>event-desc\n当模拟盒完成隐藏动画时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-dialog ref="demo31" @after-hide="echo">\n        <ui-center height-fill>\n            <ui-link js="window.morning.findVM(\'demo31\').toggle();">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demo31\').toggle();">显示模拟盒</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo31.console1\', \'after-hide event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <ui-dialog\n        ref="demoEventLifecycle"\n        v-show="show"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >\n        <ui-center height-fill>\n            {*text*}\n            <ui-link js="window.morning.findVM(\'demoEventLifecycle\').toggle();">隐藏模拟盒</ui-link> &nbsp;\n        </ui-center>\n    </ui-dialog>\n    <ui-link js="window.morning.findVM(\'demoEventLifecycle\').toggle();">显示模拟盒</ui-link>\n    <br><br>\n    <ui-link js="this.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="this.$refs[\'demoEventLifecycle\'].$destroy();">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : \'模拟盒\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/dialog/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},d=[];o._withStripped=!0,e.d(i,"a",(function(){return o})),e.d(i,"b",(function(){return d}))},816:function(n,i,e){"use strict";var o=t(e(1)),d=t(e(817));function t(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(d.default)}})},817:function(n,i,e){"use strict";e.r(i);var o=e(377),d=e(215);for(var t in d)"default"!==t&&function(n){e.d(i,n,(function(){return d[n]}))}(t);var l=e(0),u=Object(l.a)(d.default,o.a,o.b,!1,null,null,null);u.options.__file="src/docs/pages/component/dialog/index.vue",i.default=u.exports}});