!function(n){function e(e){for(var t,d,r=e[0],c=e[1],l=e[2],s=0,p=[];s<r.length;s++)d=r[s],a[d]&&p.push(a[d][0]),a[d]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(n[t]=c[t]);for(u&&u(e);p.length;)p.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var n,e=0;e<o.length;e++){for(var i=o[e],t=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(t=!1)}t&&(o.splice(e--,1),n=d(d.s=i[0]))}return n}var t={},a={9:0},o=[];function d(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,d),i.l=!0,i.exports}d.m=n,d.c=t,d.d=function(n,e,i){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},d.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(d.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)d.d(i,t,function(e){return n[e]}.bind(null,t));return i},d.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([875,0]),i()}({1:function(n,e){n.exports=Vue},259:function(n,e,i){"use strict";i.r(e);var t=i(260),a=i.n(t);for(var o in t)"default"!==o&&function(n){i.d(e,n,function(){return t[n]})}(o);e.default=a.a},260:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,a=i(2),o=(t=a)&&t.__esModule?t:{default:t};e.default={data:function(){return{page:"badge"}},components:{"doc-component":o.default}},n.exports=e.default},293:function(n,e,i){"use strict";var t=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 徽标 `<ui-badge>`\n\n<doc-component-status page="badge"></doc-component-status>\n\n[[[开始]]]\n\n定义一个徽标，徽标一般跟在内容后面，来标记一些特殊的内容(通常是数字)，这是一个内联块元素。\n\n徽标内部只能包含文本内容。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-badge>24</ui-badge>\n:::\n\n:::vue\n@name:扁平徽标\n---\n#demo\n>desc\n通过`.flat`可以设置扁平徽标。\n>tpl\n<ui-badge class="flat">24</ui-badge>\n:::\n\n:::vue\n@name:圆形徽标\n---\n#demo\n>desc\n通过`.circle`可以设置圆形徽标。\n>tpl\n<ui-badge class="circle">圆形徽标</ui-badge>\n:::\n\n:::vue\n@name:朴素徽标\n---\n#demo\n>desc\n通过`.plain`可以设置朴素徽标。\n>tpl\n<ui-badge class="plain">朴素徽标</ui-badge>\n:::\n\n:::vue\n@name:附着在父辈元素\n---\n#demo\n>desc\n徽标可以附着在父辈元素的四个角上，详见：[配置/attach](#attach)\n>tpl\n<div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n    <ui-badge type="normal" size="xs" attach="right-top" class="circle">New</ui-badge>\n</div>\n:::\n\n:::vue\n@name:无内容隐藏\n---\n#demo\n>desc\n当徽标内没有内容时，会自动隐藏。\n>tpl\n<ui-badge></ui-badge>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|全部|`m`|\n|色彩|全部(除`transparent`)|`theme`|\n|状态|`normal`<br/>`apparent`|`normal`|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n:::vue\n@name:尺寸\n---\n#renderer\n>name\nsize-repeat\n>tpl\n<ui-badge size="{$sizeKey}">{$&sizeName}</ui-badge>\n---\n#renderer\n>name\nsize-repeat\n>desc\n尺寸配合`circle`样式类一起使用。\n>tpl\n<ui-badge class="circle" size="{$sizeKey}">{$&sizeName}</ui-badge>\n---\n#renderer\n>name\nsize-repeat\n>desc\n尺寸配合`circle`和`plain`样式类一起使用。\n>tpl\n<ui-badge class="circle plain" size="{$sizeKey}">{$&sizeName}</ui-badge>\n---\n#renderer\n>name\nsize-repeat\n>desc\n小圆点模式的徽标。\n>tpl\n<ui-badge type="point" size="{$sizeKey}">{$&sizeName}</ui-badge>\n:::\n\n:::vue\n@layout:color\n---\n<ui-badge color="{$colorKey}">{$&colorName}</ui-badge>\n<ui-badge color="{$colorKey}" class="plain">{$&colorName}</ui-badge>\n<ui-badge color="{$colorKey}" class="circle">{$&colorName}</ui-badge>\n<ui-badge color="{$colorKey}" class="plain circle">{$&colorName}</ui-badge>\n<br><br>\n:::\n\n:::vue\n@layout:state-na\n---\n<ui-badge state="{$stateKey}">{$&stateName}</ui-badge>\n:::\n\n[[[配置]]]\n\n:::vue\n@name:type\n---\n#config\n>conf-desc\n徽标的显示模式：\n\n- `normal` : 默认模式，支持显示纯文本的徽标（通过`slot`）\n- `counter` : 计数器模式，配合`count`和`max-show`配置一起使用，仅展现`count`的数字不会显示`slot`内容\n- `point` : 小圆点模式，不显示任何内容\n- `icon` : 图标模式，请在`slot`中填写`<i>`作为字体图标\n\n>conf-accept\n`\'normal\'`<br>`\'counter\'`<br>`\'point\'`\n>conf-type\nString\n>conf-default\n`\'normal\'`\n---\n#demo\n>desc\n正常模式，可以显示`slot`的内容。\n>tpl\n<div>\n    <ui-badge type="normal">这里是内容</ui-badge>\n    <ui-badge type="normal" class="plain">这里是内容</ui-badge>\n</div>\n---\n#demo\n>desc\n计数器模式，仅显示`count`的数字。\n>tpl\n<div>\n    <ui-badge type="counter" :count="36">这里是内容</ui-badge>\n    <ui-badge type="counter" :count="36" class="plain">这里是内容</ui-badge>\n</div>\n---\n#demo\n>desc\n小圆点模式，不显示任何内容。\n>tpl\n<div>\n    <ui-badge type="point">这里是内容</ui-badge>\n    <ui-badge type="point" class="plain">这里是内容</ui-badge>\n</div>\n---\n#demo\n>desc\n图标模式，在配合`.plain`样式使用时，图标会放大1.2倍。\n>tpl\n<div>\n    <ui-badge type="icon">\n        <i class="mo-icon mo-icon-time-co"></i>\n    </ui-badge>\n    <ui-badge type="icon" class="plain">\n        <i class="mo-icon mo-icon-time-co"></i>\n    </ui-badge>\n</div>\n:::\n\n:::vue\n@name:count\n---\n#config\n>conf-desc\n徽标的计数，仅在`type`为`counter`时有效。计数将显示在徽标上，若计数大于`max-show`配置，则会显示`max-show`的数值加上`+`。\n>conf-accept\n数字\n>conf-type\nNumber\n>conf-default\n`0`\n---\n#demo\n>tpl\n<div>\n    <ui-badge type="counter" :count="count"></ui-badge>\n    <ui-badge color="primary" class="circle" type="counter" :count="count"></ui-badge>\n    <ui-badge color="neutral-8" class="plain" type="counter" :count="count"></ui-badge>\n    <br>\n    <ui-link js="this.count++">计数+1</ui-link>\n</div>\n>script\n{\n    data : {\n        count : 5\n    }\n}\n---\n#demo\n>desc\n配合`max-show`一起使用。\n>tpl\n<ui-badge type="counter" :count="103" :max-show="99"></ui-badge>\n:::\n\n:::vue\n@name:max-show\n---\n#config\n>conf-desc\n徽标的最大计数，仅在`type`为`counter`时有效。当`count`配置的数字大于`max-show`时，会显示`max-show`的数值加上`+`。\n>conf-accept\n数字\n>conf-type\nNumber\n>conf-default\n`99`\n---\n#demo\n>tpl\n<ui-badge type="counter" :count="103" :max-show="99"></ui-badge>\n:::\n\n:::vue\n@name:attach\n---\n#config\n>conf-desc\n徽标可以附着在父辈元素的四个角上（被附着的父辈元素`position`不能为`static`）。\n>conf-accept\n`false` : 不附着<br>`\'left-top\'` : 附着在左上角<br>`\'left-bottom\'` : 附着在左下角<br>`\'right-top\'` : 附着在右上角<br>`\'right-bottom\'` : 附着在右下角\n>conf-type\nBoolean<br>String\n>conf-default\n`false`\n---\n#demo\n>desc\n分别附着在父辈元素的四个角上（建议使用`xs`尺寸）。\n>tpl\n<div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="counter" size="xs" :count="6" attach="left-top"></ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="counter" size="xs" :count="6" attach="left-bottom"></ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="counter" size="xs" :count="6" attach="right-top"></ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="counter" size="xs" :count="6" attach="right-bottom"></ui-badge>\n    </div>\n</div>\n---\n#demo\n>desc\n配合`.circle`一起使用。\n>tpl\n<div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="normal" size="xs" attach="left-top" class="circle">New</ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="normal" size="xs" attach="left-bottom" class="circle">New</ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="normal" size="xs" attach="right-top" class="circle">New</ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="normal" size="xs" attach="right-bottom" class="circle">New</ui-badge>\n    </div>\n</div>\n---\n#demo\n>desc\n配合`.plain`和`.circle`一起使用。\n>tpl\n<div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="counter" size="xs" :count="6" attach="left-top" class="circle plain"></ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="counter" size="xs" :count="6" attach="left-bottom" class="circle plain"></ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="counter" size="xs" :count="6" attach="right-top" class="circle plain"></ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="counter" size="xs" :count="6" attach="right-bottom" class="circle plain"></ui-badge>\n    </div>\n</div>\n---\n#demo\n>desc\n配合`type`为`point`一起使用（建议使用`m`尺寸）。\n>tpl\n<div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="point" attach="left-top"></ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="point" attach="left-bottom"></ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="point" attach="right-top"></ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="point" attach="right-bottom"></ui-badge>\n    </div>\n</div>\n---\n#demo\n>desc\n配合`type`为`icon`及`.plain`一起使用（建议使用`l`尺寸）。\n>tpl\n<div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="icon" size="l" class="plain" attach="left-top">\n            <i class="mo-icon mo-icon-time-co"></i>\n        </ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="icon" size="l" class="plain" attach="left-bottom">\n            <i class="mo-icon mo-icon-time-co"></i>\n        </ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="icon" size="l" class="plain" attach="right-top">\n            <i class="mo-icon mo-icon-time-co"></i>\n        </ui-badge>\n    </div>\n    <div style="display:inline-block;width:50px;height:50px;border-radius:3px;background:#E2E8EE;position: relative;">\n        <ui-badge type="icon" size="l" class="plain" attach="right-bottom">\n            <i class="mo-icon mo-icon-time-co"></i>\n        </ui-badge>\n    </div>\n</div>\n:::\n\n[[[方法]]]\n\n<h1>暂无</h1>\n\n[[[事件]]]\n\n:::vue\n@layout:lifecycle-event\n---\nempty\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/badge/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},a=[];t._withStripped=!0,i.d(e,"a",function(){return t}),i.d(e,"b",function(){return a})},875:function(n,e,i){"use strict";var t=o(i(1)),a=o(i(876));function o(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(a.default)}})},876:function(n,e,i){"use strict";i.r(e);var t=i(293),a=i(259);for(var o in a)"default"!==o&&function(n){i.d(e,n,function(){return a[n]})}(o);var d=i(0),r=Object(d.a)(a.default,t.a,t.b,!1,null,null,null);r.options.__file="src/docs/pages/component/badge/index.vue",e.default=r.exports}});