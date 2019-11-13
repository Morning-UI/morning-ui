!function(o){function n(n){for(var i,s,d=n[0],u=n[1],a=n[2],p=0,t=[];p<d.length;p++)s=d[p],Object.prototype.hasOwnProperty.call(e,s)&&e[s]&&t.push(e[s][0]),e[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(o[i]=u[i]);for(r&&r(n);t.length;)t.shift()();return l.push.apply(l,a||[]),c()}function c(){for(var o,n=0;n<l.length;n++){for(var c=l[n],i=!0,d=1;d<c.length;d++){var u=c[d];0!==e[u]&&(i=!1)}i&&(l.splice(n--,1),o=s(s.s=c[0]))}return o}var i={},e={34:0},l=[];function s(n){if(i[n])return i[n].exports;var c=i[n]={i:n,l:!1,exports:{}};return o[n].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=o,s.c=i,s.d=function(o,n,c){s.o(o,n)||Object.defineProperty(o,n,{enumerable:!0,get:c})},s.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},s.t=function(o,n){if(1&n&&(o=s(o)),8&n)return o;if(4&n&&"object"==typeof o&&o&&o.__esModule)return o;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:o}),2&n&&"string"!=typeof o)for(var i in o)s.d(c,i,function(n){return o[n]}.bind(null,i));return c},s.n=function(o){var n=o&&o.__esModule?function(){return o.default}:function(){return o};return s.d(n,"a",n),n},s.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},s.p="/";var d=window.webpackJsonp=window.webpackJsonp||[],u=d.push.bind(d);d.push=n,d=d.slice();for(var a=0;a<d.length;a++)n(d[a]);var r=u;l.push([825,0]),c()}({1:function(o,n){o.exports=Vue},222:function(o,n,c){"use strict";c.r(n);var i=c(223),e=c.n(i);for(var l in i)"default"!==l&&function(o){c.d(n,o,(function(){return i[o]}))}(l);n.default=e.a},223:function(o,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i,e=c(2),l=(i=e)&&i.__esModule?i:{default:i};n.default={data:function(){return{page:"grid"}},components:{"doc-component":l.default}},o.exports=n.default},344:function(o,n,c){"use strict";var i=function(){var o=this.$createElement,n=this._self._c||o;return n("doc-component",{attrs:{page:this.page,hasPadding:!0}},[n("script",{attrs:{type:"text/markdown"}},[this._v('\n# 栅格 `<ui-grid>`\n\n<doc-component-status page="grid"></doc-component-status>\n\n[[[开始]]]\n\n定义一个栅格系统，栅格系统支持嵌套。\n\n这是一个24列的栅格系统，支持自适应及响应式。\n\n可以通过两种方式来标记栅格：\n\n- 通过`ui-row`来标记行，`ui-col`来标记列\n- 通过类`.row`来标记行，通过类`.col`或`.col-[n]`来标记列\n\n列之间默认具有空隙，两端无空隙，可以通过两个类来调整空隙：\n\n- `gutter-none` : 生成不具有空隙的栅格\n- `space-around` : 生成两端包含空隙的栅格\n\n__注意：当嵌套使用栅格时，需要保证`ui-col`的父级为`ui-row`、`ui-row`的父级为`ui-grid`。__\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<ui-grid style="background-color: #EDF1F5">\n    <ui-row>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n    </ui-row>\n</ui-grid>\n---\n#demo\n>desc\n也可以使用`.row`和`.col`来标记。\n>tpl\n<ui-grid style="background-color: #EDF1F5">\n    <div class="row">\n        <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>\n        <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>\n        <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>\n        <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>\n    </div>\n</ui-grid>\n:::\n\n:::vue\n@name:栅格组合\n---\n#demo\n>desc\n通过`.col-[n]`或`span`配置来标记栅格所占用的列。\n>tpl\n<ui-grid style="background-color: #EDF1F5">\n    <ui-row>\n        <ui-col :span="24" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-24</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="22" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-22</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="8" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-8</ui-col>\n        <ui-col :span="16" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-16</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n        <ui-col :span="7" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-7</ui-col>\n        <ui-col :span="13" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-13</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>\n    </ui-row>\n    <div class="row">\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n        <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>\n    </div>\n</ui-grid>\n:::\n\n:::vue\n@name:等宽栅格\n---\n#demo\n>desc\n可以通过`.col`或不设置`span`来标记一组等宽栅格。\n>tpl\n<ui-grid style="background-color: #EDF1F5">\n    <ui-row>\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>\n    </ui-row>\n    <div class="row">\n        <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>\n        <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>\n        <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>\n        <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>\n        <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>\n    </div>\n</ui-grid>\n:::\n\n:::vue\n@name:栅格嵌套\n---\n#demo\n>desc\n栅格系统支持多层级嵌套。\n>tpl\n<ui-grid>\n    <ui-row>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        <ui-col :span="18" style="background-color:#D6DDE5;">\n            <ui-grid>\n                <ui-row>\n                    <ui-col :span="9" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-9</ui-col>\n                    <ui-col :span="15" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-15</ui-col>\n                </ui-row>\n            </ui-grid>\n        </ui-col>\n    </ui-row>\n</ui-grid>\n:::\n\n:::vue\n@name:栅格列偏移\n---\n#demo\n>desc\n通过`.offset-[n]`或`offset`配置来标记栅格偏移列数。\n>tpl\n<ui-grid style="background-color: #EDF1F5">\n    <ui-row>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="4" :offset="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</ui-col>\n        <ui-col :span="4" :offset="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</ui-col>\n    </ui-row>\n    <div class="row">\n        <div class="col-4 offset-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-2</div>\n        <div class="col-9 offset-1" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-9 offset-1</div>\n    </div>\n</ui-grid>\n:::\n\n:::vue\n@name:栅格列位移\n---\n#demo\n>desc\n通过`.push-[n]` / `.pull-[n]`和`push` / `pull`配置来标记栅格的位移，位移相对于栅格列当前的位置。\n<br>\n其中`push`可以将栅格向右位移，`pull`可以将栅格向左位移。\n>tpl\n<ui-grid style="background-color: #EDF1F5">\n    <ui-row>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="4" :push="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 push-6</ui-col>\n        <ui-col :span="4" :pull="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 pull-4</ui-col>\n    </ui-row>\n    <div class="row">\n        <div class="col-16 push-8" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-16 push-8</div>\n        <div class="col-8 pull-16" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-8 pull-16</div>\n    </div>\n</ui-grid>\n---\n#demo\n>desc\n`栅格列位移`和`栅格列偏移`的区别为，`栅格列位移`仅对当前列生效(采用`left`或`right`)，不会影响之后的列。而`栅格列偏移`会影响之后的列。\n>tpl\n<ui-grid style="background-color: #EDF1F5">\n    <ui-row>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="4" :offset="8" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-4 offset-8</ui-col>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-4</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="4" :push="8" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-4 push-8</ui-col>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-4</ui-col>\n    </ui-row>\n</ui-grid>\n:::\n\n:::vue\n@name:栅格列水平对齐\n---\n#demo\n>desc\n在栅格行`<div class="row">`或`<ui-row>`中添加不同的类可以实现行内列的水平对齐：\n<br><br>\n- `.justify-start` : 向左对齐(默认)\n- `.justify-end` : 向右对齐\n- `.justify-center` : 居中对齐\n- `.justify-space-between` : 等宽对齐\n- `.justify-space-around` : 分散对齐\n>tpl\n<ui-grid style="background-color: #EDF1F5">\n    <ui-row>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n    </ui-row>\n    <ui-row class="justify-start">\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n    </ui-row>\n    <ui-row class="justify-end">\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n    </ui-row>\n    <ui-row class="justify-center">\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n    </ui-row>\n    <ui-row class="justify-space-between">\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n    </ui-row>\n    <ui-row class="justify-space-around">\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n        <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>\n    </ui-row>\n</ui-grid>\n:::\n\n:::vue\n@name:栅格列垂直对齐\n---\n#demo\n>desc\n在栅格行`<div class="row">`或`<ui-row>`中添加不同的类可以实现行内列的垂直对齐方式：\n<br><br>\n- `.vertical-top` : 向上对齐(默认)\n- `.vertical-bottom` : 向下对齐\n- `.vertical-center` : 居中对齐\n>tpl\n<ui-grid style="background-color: #EDF1F5">\n    <ui-row class="vertical-top" style="height:120px;background-color:#EDF1F5">\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;\nheight: 80px;">col</ui-col>\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;\nheight: 120px;">col</ui-col>\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;\nheight: 40px;">col</ui-col>\n    </ui-row>\n    <ui-row class="vertical-bottom" style="height:120px;background-color:#EDF1F5">\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;\nheight: 80px;">col</ui-col>\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;\nheight: 120px;">col</ui-col>\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;\nheight: 40px;">col</ui-col>\n    </ui-row>\n    <ui-row class="vertical-center" style="height:120px;background-color:#EDF1F5">\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;\nheight: 80px;">col</ui-col>\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;\nheight: 120px;">col</ui-col>\n        <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;\nheight: 40px;">col</ui-col>\n    </ui-row>\n</ui-grid>\n:::\n\n:::vue\n@name:无间隔栅格\n---\n#demo\n>desc\n添加`.gutter-none`的样式类可以使栅格之间无间隔。\n>tpl\n<ui-grid class="gutter-none" style="background-color: #EDF1F5">\n    <ui-row>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="9" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-9</ui-col>\n        <ui-col :span="15" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-15</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="4" :offset="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</ui-col>\n        <ui-col :span="4" :offset="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="4" :push="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 push-6</ui-col>\n        <ui-col :span="4" :pull="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 pull-4</ui-col>\n    </ui-row>\n</ui-grid>\n:::\n\n:::vue\n@name:两端包含空隙栅格\n---\n#demo\n>desc\n添加`.space-around`的样式类可以使栅格两端也有空隙。\n>tpl\n<ui-grid class="space-around" style="background-color: #EDF1F5">\n    <ui-row>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="9" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-9</ui-col>\n        <ui-col :span="15" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-15</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="4" :offset="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</ui-col>\n        <ui-col :span="4" :offset="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</ui-col>\n    </ui-row>\n    <ui-row>\n        <ui-col :span="4" :push="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 push-6</ui-col>\n        <ui-col :span="4" :pull="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 pull-4</ui-col>\n    </ui-row>\n</ui-grid>\n:::\n\n:::vue\n@name:栅格空隙尺寸\n---\n#demo\n>desc\n栅格支持多种尺寸的空隙，通过在`.gutter-[size]`来设置：\n<br><br>\n- `.gutter-xs` : `4px`的水平和垂直空隙(默认)\n- `.gutter-s` : `8px`的水平和垂直空隙\n- `.gutter-m` : `16px`的水平和垂直空隙\n- `.gutter-l` : `24px`的水平和垂直空隙\n- `.gutter-xl` : `36px`的水平和垂直空隙\n>tpl\n<div>\n    <ui-grid class="gutter-xs" style="background-color: #EDF1F5">\n        <ui-row>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        </ui-row>\n        <ui-row>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        </ui-row>\n    </ui-grid>\n\n    <br><br>\n\n    <ui-grid class="gutter-s" style="background-color: #EDF1F5">\n        <ui-row>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        </ui-row>\n        <ui-row>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        </ui-row>\n    </ui-grid>\n\n    <br><br>\n\n    <ui-grid class="gutter-m" style="background-color: #EDF1F5">\n        <ui-row>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>\n        </ui-row>\n        <ui-row>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        </ui-row>\n    </ui-grid>\n\n    <br><br>\n\n    <ui-grid class="gutter-l" style="background-color: #EDF1F5">\n        <ui-row>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        </ui-row>\n        <ui-row>\n            <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>\n            <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>\n        </ui-row>\n    </ui-grid>\n\n    <br><br>\n\n    <ui-grid class="gutter-xl" style="background-color: #EDF1F5">\n        <ui-row>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        </ui-row>\n        <ui-row>\n            <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>\n            <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>\n        </ui-row>\n    </ui-grid>\n</div>\n:::\n\n:::vue\n@name:填满容器的栅格\n---\n#demo\n>desc\n添加`.fill`可使用填满容器的栅格。\n>tpl\n<div style="height:200px">\n    <ui-grid class="fill" style="background-color: #EDF1F5">\n        <ui-row>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>\n        </ui-row>\n    </ui-grid>\n</div>\n:::\n\n:::vue\n@name:响应式栅格\n---\n#demo\n>desc\n参考了 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设六个尺寸：\n<br><br>\n- `xs` : 屏幕宽度小于`576px`\n- `s` : 屏幕宽度介于`576px`和`768px`之间\n- `m` : 屏幕宽度介于`768px`和`992px`之间\n- `l` : 屏幕宽度介于`992px`和`1200px`之间\n- `xl` : 屏幕宽度大于`1200px`\n<br><br>\n使用时在原有的`.col-[n]`、`.offset-[n]`、`.push-[n]`、`.pull-[n]`前加上如`xs-`这样的前缀即可。\n<br>\n若使用了`col`、`offset`、`push`、`pull`配置，也可以通过`xs`、`s`、`m`、`l`、`xl`配置来设置。\n>tpl\n<ui-grid style="background-color: #EDF1F5">\n    <div class="row">\n        <div class="xs-col-2 s-col-4 m-col-6 l-col-8 xl-col-10" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>\n        <div class="xs-col-20 s-col-16 m-col-12 l-col-8 xl-col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>\n        <div class="xs-col-2 s-col-4 m-col-6 l-col-8 xl-col-10" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>\n    </div>\n</ui-grid>\n---\n#demo\n>desc\n`.offset-[n]`也同样支持。\n>tpl\n<div>\n    <ui-grid style="background-color: #EDF1F5">\n        <div class="row">\n            <div class="xs-col-2 s-col-4 m-col-6 l-col-8 xl-col-10" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>\n            <div class="xs-col-20 s-col-16 m-col-12 l-col-8 xl-col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>\n            <div class="xs-col-2 s-col-4 m-col-6 l-col-8 xl-col-10" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>\n        </div>\n    </ui-grid>\n\n    <br>\n    \n    <ui-grid style="background-color: #EDF1F5">\n        <div class="row">\n            <div class="\n                xs-col-20 xs-offset-2\n                s-col-16 s-offset-4\n                m-col-12 m-offset-6\n                l-col-8 l-offset-8\n                xl-col-4 xl-offset-10\n            " style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>\n        </div>\n    </ui-grid>\n</div>\n---\n#demo\n>desc\n若使用了`col`、`offset`、`push`、`pull`配置，也可以通过`xs`、`s`、`m`、`l`、`xl`配置来设置。\n>tpl\n<ui-grid style="background-color: #EDF1F5">\n    <ui-row>\n        <ui-col :xs="{span:2}" :s="{span:4}" :m="{span:6}" :l="{span:8}" :xl="{span:10}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>\n        <ui-col :xs="{span:20}" :s="{span:16}" :m="{span:12}" :l="{span:8}" :xl="{span:4}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>\n        <ui-col :xs="{span:2}" :s="{span:4}" :m="{span:6}" :l="{span:8}" :xl="{span:10}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>\n    </ui-row>\n</ui-grid>\n---\n#demo\n>desc\n`col`、`offset`、`push`、`pull`配置配合使用。\n>tpl\n<div>\n    <ui-grid style="background-color: #EDF1F5">\n        <ui-row>\n            <ui-col :xs="{span:2}" :s="{span:4}" :m="{span:6}" :l="{span:8}" :xl="{span:10}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>\n            <ui-col :xs="{span:20}" :s="{span:16}" :m="{span:12}" :l="{span:8}" :xl="{span:4}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>\n            <ui-col :xs="{span:2}" :s="{span:4}" :m="{span:6}" :l="{span:8}" :xl="{span:10}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>\n        </ui-row>\n    </ui-grid>\n\n    <br>\n\n    <ui-grid style="background-color: #EDF1F5">\n        <ui-row>\n            <ui-col :xs="{span:20, offset:2}" :s="{span:16, offset:4}" :m="{span:12, offset:6}" :l="{span:8, offset:8}" :xl="{span:4, offset:10}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>\n        </ui-row>\n    </ui-grid>\n</div>\n:::\n\n[[[形态]]]\n\n#### 支持\n\n|类型|支持|默认|\n|-|-|-|\n|尺寸|不支持|-|\n|色彩|不支持|-|\n|状态|不支持|-|\n\n<a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/grid/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n')])])},e=[];i._withStripped=!0,c.d(n,"a",(function(){return i})),c.d(n,"b",(function(){return e}))},825:function(o,n,c){"use strict";var i=l(c(1)),e=l(c(826));function l(o){return o&&o.__esModule?o:{default:o}}new i.default({el:"#root",render:function(o){return o(e.default)}})},826:function(o,n,c){"use strict";c.r(n);var i=c(344),e=c(222);for(var l in e)"default"!==l&&function(o){c.d(n,o,(function(){return e[o]}))}(l);var s=c(0),d=Object(s.a)(e.default,i.a,i.b,!1,null,null,null);d.options.__file="src/docs/pages/component/grid/index.vue",n.default=d.exports}});