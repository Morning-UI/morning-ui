!function(n){function e(e){for(var d,r,l=e[0],u=e[1],s=e[2],c=0,m=[];c<l.length;c++)r=l[c],o[r]&&m.push(o[r][0]),o[r]=0;for(d in u)Object.prototype.hasOwnProperty.call(u,d)&&(n[d]=u[d]);for(a&&a(e);m.length;)m.shift()();return t.push.apply(t,s||[]),i()}function i(){for(var n,e=0;e<t.length;e++){for(var i=t[e],d=!0,l=1;l<i.length;l++){var u=i[l];0!==o[u]&&(d=!1)}d&&(t.splice(e--,1),n=r(r.s=i[0]))}return n}var d={},o={29:0},t=[];function r(e){if(d[e])return d[e].exports;var i=d[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=n,r.c=d,r.d=function(n,e,i){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var d in n)r.d(i,d,function(e){return n[e]}.bind(null,d));return i},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var a=u;t.push([805,0]),i()}({1:function(n,e){n.exports=Vue},207:function(n,e,i){"use strict";i.r(e);var d=i(208),o=i.n(d);for(var t in d)"default"!==t&&function(n){i.d(e,n,function(){return d[n]})}(t);e.default=o.a},208:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d,o=i(2),t=(d=o)&&d.__esModule?d:{default:d};e.default={data:function(){return{page:"drawer"}},components:{"doc-component":t.default}},n.exports=e.default},308:function(n,e,i){"use strict";var d=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 抽屉 `<ui-drawer>`\n\n<doc-component-status page="drawer"></doc-component-status>\n\n[[[开始]]]\n\n定义一个抽屉，此组件是从父元素边缘滑出的浮层面板。\n\n一般抽屉分为三部分：\n\n- 头部\n- 主体\n- 操作区(尾部)\n\n抽屉支持两种不同的出现形式：\n\n- 滑动出现：从父元素边缘滑出，交互效果较好。\n- 直接出现：一般用在页面内容较多，对性能有要求的页面，较快(去除了动画带来的性能负担)。\n\n当你需要展现的内容较少时，可以使用[模拟盒](/component/dialog.html)组件。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo1"></ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo1\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:带头部的抽屉\n---\n#demo\n>desc\n通过`slot="header"`标签标记一个头部内容。\n>tpl\n<div>\n    <ui-drawer ref="demo2">\n        <div slot="header">This is title</div>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo2\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:自定义头部\n---\n#demo\n>desc\n组件自带的头部的内容比较固定，只能包含标题和关闭按钮等一些简单元素，高度也是固定的。在个性化的场景，可以不使用组件自带的头部。\n>tpl\n<div>\n    <ui-drawer ref="demo3">\n        <div style="\n            width:100%;\n            background:#D22343;\n            color:#fff;\n            font-size:36px;\n            text-align:center;\n            padding: 1em 0;\n        ">Custom title</div>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo3\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:带关闭的头部\n---\n#demo\n>desc\n头部标题也可以在`<h1>`标签中，通过`<ui-link>`来增加关闭按钮。\n>tpl\n<div>\n    <ui-drawer ref="demo4">\n        <div slot="header">\n            <h1>This is title</h1>\n            <ui-link color="neutral-4" js="window.morning.findVM(\'demo4\').toggle();"><i class="mo-icon mo-icon-close"></i></ui-link>\n        </div>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo4\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:当头尾部无内容时自动隐藏\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo5">\n        <div slot="header"></div>\n        <div slot="footer"></div>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo5\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:带尾部的抽屉\n---\n#demo\n>desc\n通过`slot="footer"`标签标记一个尾部内容。\n>tpl\n<div>\n    <ui-drawer ref="demo6">\n        <div slot="footer">This is footer</div>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo6\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:带操作的尾部\n---\n#demo\n>desc\n你可以在尾部的`.operate`元素中加入`ui-btn`和`ui-link`来实现可选操作。\n>tpl\n<div>\n    <ui-drawer ref="demo7">\n        <div slot="footer">\n            <span>This is footer</span>\n            <div class="operate">\n                <ui-link class="margin" color="minor" js="window.morning.findVM(\'demo7\').toggle();">取消</ui-link>\n                <ui-btn color="success">确认</ui-btn>\n            </div>\n        </div>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo7\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:包含内容的抽屉\n---\n#demo\n>desc\n在组件内添加除`slot="header"`和`slot="footer"`以外的元素会加载到抽屉的主体部分。\n>tpl\n<div>\n    <ui-drawer ref="demo8">\n        This is body.\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo8\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:包含HTML内容的抽屉\n---\n#demo\n>desc\n信息展示型的HTML内容。\n>tpl\n<div>\n    <ui-drawer ref="demo9" width="400px">\n        <ui-box class="margin">\n            <ui-header size="xs" color="neutral-10" class="underline">\n                个人资料\n            </ui-header>\n            <ui-dl class="horizontal" style="margin-top:1.5em;">\n                <dt>用户名</dt>\n                <dd>EarlyHe</dd>\n                <dt>出生日期</dt>\n                <dd>6月13日</dd>\n                <dt>性别</dt>\n                <dd>男</dd>\n                <dt>国家</dt>\n                <dd>中国</dd>\n                <dt>城市</dt>\n                <dd>杭州</dd>\n            </ui-dl>\n        </ui-box>\n        <ui-box class="margin">\n            <ui-header size="xs" color="neutral-10" class="underline">\n                支付信息\n            </ui-header>\n            <ui-dl class="horizontal" style="margin-top:1.5em;">\n                <dt>付款方式</dt>\n                <dd>支付宝</dd>\n                <dt>账户</dt>\n                <dd>19191919</dd>\n                <dt>扣款方式</dt>\n                <dd>按月支持</dd>\n                <dt>更多</dt>\n                <dd>\n                    <ui-link>查看账单</ui-link> / <ui-link color="minor">修改支付方式</ui-link>\n                </dd>\n            </ui-dl>\n        </ui-box>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo9\').toggle(true);">显示抽屉</ui-link>\n</div>\n---\n#demo\n>desc\n表单填写型的HTML内容。\n>tpl\n<div>\n    <ui-drawer ref="demo10" width="560px">\n        <div slot="header">填写个人资料</div>\n        <ui-box class="margin">\n            <ui-formgroup class="inline">\n                <header>\n                    <h5>基本信息</h5>\n                    <p>请填写一些基础资料</p>\n                </header>\n                <div class="row">\n                    <div class="item" style="width:50%">\n                        <h5 class="title">姓氏</h5>\n                        <div class="content">\n                            <div class="form">\n                                <ui-textinput></ui-textinput>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class="item">\n                        <h5 class="title">名字</h5>\n                        <div class="content">\n                            <div class="form">\n                                <ui-textinput></ui-textinput>\n                            </div>\n                        </div>\n                    </div>\n        \n                    <div class="item">\n                        <h5 class="title">昵称</h5>\n                        <div class="content">\n                            <div class="form">\n                                <ui-textinput></ui-textinput>\n                            </div>\n                            <p>其他用户将看到你的昵称.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class="row">\n                    <div class="item">\n                        <h5 class="title">简介</h5>\n                        <div class="content">\n                            <div class="form">\n                                <ui-textarea></ui-textarea>\n                            </div>\n                            <p>详细的介绍你自己.</p>\n                        </div>\n                    </div>\n                </div>\n            </ui-formgroup>\n\n            <ui-formgroup class="inline">\n                <header>\n                    <h5>付款信息</h5>\n                    <p>用于支付费用的账户信息</p>\n                </header>\n                <div class="row">\n                  \n                    <div class="item">\n                        <h5 class="title">卡号</h5>\n                        <div class="content">\n                            <div class="form">\n                                <ui-textinput></ui-textinput>\n                            </div>\n                        </div>\n                    </div>\n        \n                    <div class="item">\n                        <h5 class="title">密码</h5>\n                        <div class="content">\n                            <div class="form">\n                                <ui-textinput hide-value></ui-textinput>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="row">\n                    <div class="item">\n                        <h5 class="title">支付计划</h5>\n                        <div class="content">\n                            <div class="form">\n                                <ui-select\n                                    :list="{\n                                        day : \'按日计费\',\n                                        month : \'按月计费\',\n                                        year : \'按年计费\'\n                                    }"\n                                >\n                                </ui-select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="item">\n                        <h5 class="title">自动扣费</h5>\n                        <div class="content">\n                            <div class="form">\n                                <ui-radio\n                                    :list="{\n                                        0 : \'关闭\',\n                                        1 : \'启用\'\n                                    }"\n                                >\n                                </ui-radio>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ui-formgroup>\n        </ui-box>\n        <div slot="footer">\n            <div class="operate">\n                <ui-link class="margin" color="minor" js="window.morning.findVM(\'demo10\').toggle();">取消</ui-link>\n                <ui-btn color="success">保存</ui-btn>\n            </div>\n        </div>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo10\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:多层抽屉\n---\n#demo\n>desc\n抽屉支持多层嵌套打开，组件会自动按照打开的顺序设置层级。(注意：使用时必须嵌套且所有抽屉的`position`一致，才会出现多层级的效果)\n>tpl\n<div>\n    <ui-drawer ref="demo11">\n        <div slot="header">第一级</div>\n        <ui-link js="window.morning.findVM(\'demo12\').toggle(true);">显示第二级抽屉</ui-link>\n\n        <ui-drawer ref="demo12">\n            <div slot="header">第二级</div>\n            <ui-link js="window.morning.findVM(\'demo13\').toggle(true);">显示第三级抽屉</ui-link>\n\n            <ui-drawer ref="demo13">\n                <div slot="header">第三级</div>\n            </ui-drawer>\n        </ui-drawer>\n    </ui-drawer>\n\n    <ui-link js="window.morning.findVM(\'demo11\').toggle(true);">显示抽屉</ui-link>\n</div>\n---\n#demo\n>desc\n若嵌套的抽屉`position`不一致，则仅同样`position`的抽屉会出现多层级交互效果。\n>tpl\n<div>\n    <ui-drawer ref="demo26">\n        <div slot="header">第一级</div>\n        <ui-link js="window.morning.findVM(\'demo27\').toggle(true);">显示第二级抽屉</ui-link>\n\n        <ui-drawer ref="demo27" position="left">\n            <div slot="header">第二级</div>\n            <ui-link js="window.morning.findVM(\'demo28\').toggle(true);">显示第三级抽屉</ui-link>\n\n            <ui-drawer ref="demo28" position="left">\n                <div slot="header">第三级</div>\n            </ui-drawer>\n        </ui-drawer>\n    </ui-drawer>\n\n    <ui-link js="window.morning.findVM(\'demo26\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n[[[配置]]]\n\n:::vue\n@name:width\n---\n#config\n>conf-desc\n抽屉的宽度，仅在`position`配置为`left`或`right`时有效。\n>conf-accept\n宽度数值（可以是`px`、`em`、`%`等任何css合法单位）\n>conf-type\nString\n>conf-default\n`\'240px\'`\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo14" width="400px"></ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo14\').toggle(true);">显示抽屉</ui-link>\n</div>\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo15" width="50%"></ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo15\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:height\n---\n#config\n>conf-desc\n抽屉的高度，仅在`position`配置为`top`或`bottom`时有效。\n>conf-accept\n高度数值（可以是`px`、`em`、`%`等任何css合法单位）\n>conf-type\nString\n>conf-default\n`\'200px\'`\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo16" position="top" height="50px"></ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo16\').toggle(true);">显示抽屉</ui-link>\n</div>\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo17" position="top" height="10%"></ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo17\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:auto-close\n---\n#config\n>conf-desc\n点击抽屉以外的区域自动关闭抽屉。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n设为`false`点击抽屉以外的区域不会关闭抽屉。\n>tpl\n<div>\n    <ui-drawer ref="demo18" :auto-close="false" width="400px">\n        <div slot="header">\n            <h1>点击遮照区域不会关闭，需点右侧关闭</h1>\n            <ui-link color="neutral-4" js="window.morning.findVM(\'demo18\').toggle();"><i class="mo-icon mo-icon-close"></i></ui-link>\n        </div>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo18\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:position\n---\n#config\n>conf-desc\n抽屉出现的位置。\n>conf-accept\n`\'top\'`：上方<br>`\'left\'`：左侧<br>`\'right\'`：右侧<br>`\'bottom\'`：下方\n>conf-type\nString\n>conf-default\n`\'top\'`\n---\n#demo\n>desc\n出现在上方。\n>tpl\n<div>\n    <ui-drawer ref="demo19" position="top"></ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo19\').toggle(true);">显示抽屉</ui-link>\n</div>\n---\n#demo\n>desc\n出现在下方。\n>tpl\n<div>\n    <ui-drawer ref="demo20" position="bottom"></ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo20\').toggle(true);">显示抽屉</ui-link>\n</div>\n---\n#demo\n>desc\n出现在左侧。\n>tpl\n<div>\n    <ui-drawer ref="demo21" position="left"></ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo21\').toggle(true);">显示抽屉</ui-link>\n</div>\n---\n#demo\n>desc\n出现在右侧。\n>tpl\n<div>\n    <ui-drawer ref="demo22" position="right"></ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo22\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:show-type\n---\n#config\n>conf-desc\n抽屉打开的效果(使用`no`可以提升性能)。\n>conf-accept\n`slideout`:滑出<br>`no`:无动画直接出现\n>conf-type\nString\n>conf-default\n`\'slideout\'`\n---\n#demo\n>desc\n无动画直接出现的抽屉。\n>tpl\n<div>\n    <ui-drawer ref="demo24" show-type="no"></ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo24\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:show-mask\n---\n#config\n>conf-desc\n抽屉打开后显示背景遮罩。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n不显示背景遮罩。\n>tpl\n<div>\n    <ui-drawer ref="demo23" :show-mask="false"></ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo23\').toggle(true);">显示抽屉</ui-link>\n</div>\n:::\n\n[[[方法]]]\n\n:::vue\n@name:show()\n---\n#method\n>method-desc\n显示抽屉。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo34">\n        <ui-center class="fill">\n            <ui-link js="window.morning.findVM(\'demo34\').hide();">隐藏抽屉</ui-link> &nbsp;\n        </ui-center>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo34\').show();">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:hide()\n---\n#method\n>method-desc\n隐藏抽屉。\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo35">\n        <ui-center class="fill">\n            <ui-link js="window.morning.findVM(\'demo35\').hide();">隐藏抽屉</ui-link> &nbsp;\n        </ui-center>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo35\').show();">显示抽屉</ui-link>\n</div>\n:::\n\n:::vue\n@name:toggle([show])\n---\n#method\n>method-desc\n切换抽屉的显示状态。\n>method-args\n|show|YES|切换到显示或隐藏状态，不输入则切换到反向状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo30">\n        <ui-center class="fill">\n            <ui-link js="window.morning.findVM(\'demo30\').toggle(false);">隐藏抽屉</ui-link> &nbsp;\n            <ui-link js="window.morning.findVM(\'demo30\').toggle();">切换到反向状态</ui-link>\n        </ui-center>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo30\').toggle(true);">显示抽屉</ui-link>\n    <ui-link js="window.morning.findVM(\'demo30\').toggle();">切换到反向状态</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::vue\n@name:emit\n---\n#event\n>event-desc\n当抽屉切换显示状态时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo31" @emit="echo">\n        <ui-center class="fill">\n            <ui-link js="window.morning.findVM(\'demo31\').toggle();">隐藏抽屉</ui-link> &nbsp;\n        </ui-center>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo31\').toggle();">显示抽屉</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo31.console1\', \'emit event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:show\n---\n#event\n>event-desc\n当抽屉显示时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo32" @show="echo">\n        <ui-center class="fill">\n            <ui-link js="window.morning.findVM(\'demo32\').toggle();">隐藏抽屉</ui-link> &nbsp;\n        </ui-center>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo32\').toggle();">显示抽屉</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo32.console1\', \'show event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:hide\n---\n#event\n>event-desc\n当抽屉隐藏时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo33" @hide="echo">\n        <ui-center class="fill">\n            <ui-link js="window.morning.findVM(\'demo33\').toggle();">隐藏抽屉</ui-link> &nbsp;\n        </ui-center>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo33\').toggle();">显示抽屉</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo33.console1\', \'hide event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:after-show\n---\n#event\n>event-desc\n当抽屉完成显示动画时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo36" @after-show="echo">\n        <ui-center class="fill">\n            <ui-link js="window.morning.findVM(\'demo36\').toggle();">隐藏抽屉</ui-link> &nbsp;\n        </ui-center>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo36\').toggle();">显示抽屉</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo36.console1\', \'after-show event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:after-hide\n---\n#event\n>event-desc\n当抽屉完成隐藏动画时触发。\n---\n#demo\n>tpl\n<div>\n    <ui-drawer ref="demo37" @after-hide="echo">\n        <ui-center class="fill">\n            <ui-link js="window.morning.findVM(\'demo37\').toggle();">隐藏抽屉</ui-link> &nbsp;\n        </ui-center>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demo37\').toggle();">显示抽屉</ui-link>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo37.console1\', \'after-hide event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:生命周期事件\n---\n#event\n>event-desc\n组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。\n---\n#demo\n>tpl\n<div>\n    <ui-drawer\n        ref="demoEventLifecycle"\n        v-show="show"\n        :total="10"\n        @created="echo(\'created\')"\n        @mounted="echo(\'mounted\')"\n        @before-update="echo(\'before-update\')"\n        @updated="echo(\'updated\')"\n        @before-destroy="echo(\'before-destroy\')"\n        @destroyed="echo(\'destroyed\')"\n    >\n        <ui-center class="fill">\n            {*text*}\n            <ui-link js="window.morning.findVM(\'demoEventLifecycle\').toggle();">隐藏抽屉</ui-link> &nbsp;\n        </ui-center>\n    </ui-drawer>\n    <ui-link js="window.morning.findVM(\'demoEventLifecycle\').toggle();">显示抽屉</ui-link>\n    <br><br>\n    <ui-link js="this.text=\'生命周期事件\';">触发update</ui-link>\n    <ui-link js="this.$refs[\'demoEventLifecycle\'].$destroy();">触发destroy</ui-link>\n</div>\n>script\n{\n    data : function () {\n        return {\n           text : \'抽屉\',\n           show : true\n        };\n    },\n    methods : {\n        echo : function (name) {\n            console.log(\'demoEventLifecycle.console1\', name + \' event!\');\n        }\n    }\n}\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/drawer/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},o=[];d._withStripped=!0,i.d(e,"a",function(){return d}),i.d(e,"b",function(){return o})},805:function(n,e,i){"use strict";var d=t(i(1)),o=t(i(806));function t(n){return n&&n.__esModule?n:{default:n}}new d.default({el:"#root",render:function(n){return n(o.default)}})},806:function(n,e,i){"use strict";i.r(e);var d=i(308),o=i(207);for(var t in o)"default"!==t&&function(n){i.d(e,n,function(){return o[n]})}(t);var r=i(0),l=Object(r.a)(o.default,d.a,d.b,!1,null,null,null);l.options.__file="src/docs/pages/component/drawer/index.vue",e.default=l.exports}});