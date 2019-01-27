!function(n){function l(l){for(var e,p,a=l[0],r=l[1],c=l[2],m=0,s=[];m<a.length;m++)p=a[m],i[p]&&s.push(i[p][0]),i[p]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e]);for(h&&h(l);s.length;)s.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var n,l=0;l<o.length;l++){for(var t=o[l],e=!0,a=1;a<t.length;a++){var r=t[a];0!==i[r]&&(e=!1)}e&&(o.splice(l--,1),n=p(p.s=t[0]))}return n}var e={},i={38:0};var o=[];function p(l){if(e[l])return e[l].exports;var t=e[l]={i:l,l:!1,exports:{}};return n[l].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.m=n,p.c=e,p.d=function(n,l,t){p.o(n,l)||Object.defineProperty(n,l,{configurable:!1,enumerable:!0,get:t})},p.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},p.n=function(n){var l=n&&n.__esModule?function(){return n.default}:function(){return n};return p.d(l,"a",l),l},p.o=function(n,l){return Object.prototype.hasOwnProperty.call(n,l)},p.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],r=a.push.bind(a);a.push=l,a=a.slice();for(var c=0;c<a.length;c++)l(a[c]);var h=r;o.push([327,0]),t()}({1:function(n,l){n.exports=Vue},159:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t.d(l,"b",function(){return i});var e=function(){var n=this.$createElement,l=this._self._c||n;return l("doc-component",{attrs:{page:this.page,hasPadding:!0}},[l("script",{attrs:{type:"text/markdown"}},[this._v('\n# 组件导览\n\n下面根据不同的诉求对组件进行分组，可以帮助你更快的选择需要的组件。\n\n<div class="group">\n    <h2>样式组件(纯CSS，无JavaScript)</h2>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe959;</i>文本</h3>\n        <ul>\n            <li><a href="/component/h.html">标题<p>&lt;b></p></a></li>\n            <li><a href="/component/lead.html">中心内容<p>&lt;lead></p></a></li>\n            <li><a href="/component/mark.html">标记的文本<p>&lt;mark></p></a></li>\n            <li><a href="/component/del.html">删除的文本<p>&lt;del></p></a></li>\n            <li><a href="/component/u.html">带下划线的文本<p>&lt;u></p></a></li>\n            <li><a href="/component/small.html">小号文本<p>&lt;small></p></a></li>\n            <li><a href="/component/strong.html">着重文本<p>&lt;strong></p></a></li>\n            <li><a href="/component/em.html">斜体文本<p>&lt;em></p></a></li>\n            <li><a href="/component/textleft.html">左对齐文本<p>&lt;textleft></p></a></li>\n            <li><a href="/component/textcenter.html">居中对齐文本<p>&lt;textcenter></p></a></li>\n            <li><a href="/component/textright.html">右对齐文本<p>&lt;textright></p></a></li>\n            <li><a href="/component/lowercase.html">小写文本<p>&lt;lowercase></p></a></li>\n            <li><a href="/component/uppercase.html">大写文本<p>&lt;uppercase></p></a></li>\n            <li><a href="/component/capitalize.html">首字大写文本<p>&lt;capitalize></p></a></li>\n            <li><a href="/component/quote.html">引用<p>&lt;quote></p></a></li>\n            <li><a href="/component/textcolor.html">文本颜色<p>&lt;textcolor></p></a></li>\n            <li><a href="/component/apparent.html">醒目文本<p>&lt;apparent></p></a></li>\n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe625;</i>列表</h3>\n        <ul>\n            <li><a href="/component/ol.html">有序列表<p>&lt;ol></p></a></li>\n            <li><a href="/component/ul.html">无序列表<p>&lt;ul></p></a></li>\n            <li><a href="/component/il.html">内联列表<p>&lt;il></p></a></li>\n            <li><a href="/component/dl.html">描述列表<p>&lt;dl></p></a></li>\n            <li><a href="/component/itemlist.html">项目列表<p>&lt;itemlist></p></a></li>\n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe679;</i>布局</h3>\n        <ul>\n            <li><a href="/component/grid.html">栅格<p>&lt;grid></p></a></li>\n            <li><a href="/component/card.html">卡片<p>&lt;card></p></a></li>\n            <li><a href="/component/box.html">容器<p>&lt;box></p></a></li>\n            <li><a href="/component/block.html">区块<p>&lt;block></p></a></li>\n            <li><a href="/component/divider.html">分频器<p>&lt;divider></p></a></li>\n            <li><a href="/component/center.html">居中容器<p>&lt;center></p></a></li>\n            <li><a href="/component/header.html">页头<p>&lt;header></p></a></li>\n            <li><a href="/component/action.html">行动栏<p>&lt;action></p></a></li>\n            <li><a href="/component/formgroup.html">表单组<p>&lt;formgroup></p></a></li>\n            <li><a href="/component/btngroup.html">按钮组<p>&lt;btngroup></p></a></li>\n            <li><a href="/component/jumbotron.html">巨幕<p>&lt;jumbotron></p></a></li>\n            <li><a href="/component/article.html">文章<p>&lt;article></p></a></li>\n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe624;</i>数值</h3>\n        <ul>\n            <li><a href="/component/badge.html">徽章<p>&lt;badge></p></a></li>\n            <li><a href="/component/label.html">标签<p>&lt;label></p></a></li>\n            <li><a href="/component/statistic.html">统计<p>&lt;statistic></p></a></li>\n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe669;</i>图片</h3>\n        <ul>\n            <li><a href="/component/img.html">图片<p>&lt;img></p></a></li>\n        </ul>\n    </div>\n</div>\n\n<div class="group">\n    <h2>交互组件</h2>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe6e5;</i>基础</h3>\n        <ul>\n            <li><a href="/component/btn.html">按钮<p>&lt;btn></p></a></li>\n            <li><a href="/component/link.html">链接<p>&lt;link></p></a></li>\n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe60b;</i>导航</h3>\n        <ul>\n            <li><a href="/component/menu.html">导航菜单<p>&lt;menu></p></a></li>\n            <li><a href="/component/anchor.html">锚点导航<p>&lt;anchor></p></a></li>\n            <li><a href="/component/dropdown.html">下拉菜单<p>&lt;dropdown></p></a></li>\n            <li><a href="/component/tab.html">标签页<p>&lt;tab></p></a></li>\n            <li><a href="/component/collapse.html">折叠面板<p>&lt;collapse></p></a></li>\n            <li><a href="/component/pagination.html">分页<p>&lt;pagination></p></a></li>\n            <li><a href="/component/breadcrumbs.html">面包屑<p>&lt;breadcrumbs></p></a></li>\n            <li><a href="/component/steps.html">步骤条<p>&lt;steps></p></a></li>\n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe60a;</i>反馈</h3>\n        <ul>\n            <li><a href="/component/dialog.html">模拟盒<p>&lt;dialog></p></a></li>\n            <li><a href="/component/message.html">消息<p>&lt;message></p></a></li>\n            <li><a href="/component/tip.html">小提示<p>&lt;tip></p></a></li>\n            <li><a href="/component/alert.html">告示<p>&lt;alert></p></a></li>\n            <li><a href="/component/load.html">加载<p>&lt;load></p></a></li>\n            <li><a href="/component/progress.html">进度条<p>&lt;progress></p></a></li> \n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe769;</i>展示</h3>\n        <ul>\n            <li><a href="/component/table.html">表格<p>&lt;table></p></a></li>\n            <li><a href="/component/carousel.html">轮播<p>&lt;carousel></p></a></li>\n            <li><a href="/component/calendar.html">日历<p>&lt;calendar></p></a></li>\n            <li><a href="/component/audio.html">音频<p>&lt;audio></p></a></li>\n            <li><a href="/component/video.html">视频<p>&lt;video></p></a></li>\n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe645;</i>其他</h3>\n        <ul>\n            <li><a href="/component/sticky.html">吸附<p>&lt;sticky></p></a></li>\n        </ul>\n    </div>\n</div>\n\n<div class="group">\n    <h2>表单组件</h2>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe959;</i>文本</h3>\n        <ul>\n            <li><a href="/component/textinput.html">文本输入<p>&lt;textinput></p></a></li>\n            <li><a href="/component/textarea.html">段落输入<p>&lt;textarea></p></a></li>\n            <li><a href="/component/texteditor.html">富文本编辑器<p>&lt;texteditor></p></a></li>\n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe646;</i>选项</h3>\n        <ul>\n            <li><a href="/component/switch.html">开关<p>&lt;switch></p></a></li>\n            <li><a href="/component/select.html">下拉选择<p>&lt;select></p></a></li>\n            <li><a href="/component/checkbox.html">复选框组<p>&lt;checkbox></p></a></li>\n            <li><a href="/component/radio.html">单选框组<p>&lt;radio></p></a></li>\n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe624;</i>数值</h3>\n        <ul>\n            <li><a href="/component/counter.html">计数器<p>&lt;counter></p></a></li>\n            <li><a href="/component/rate.html">评分<p>&lt;rate></p></a></li>\n            <li><a href="/component/slider.html">滑块输入<p>&lt;slider></p></a></li>\n            <li><a href="/component/colorpicker.html">颜色选择器<p>&lt;colorpicker></p></a></li>\n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe71e;</i>日期时间</h3>\n        <ul>\n            <li><a href="/component/timepicker.html">时间选择器<p>&lt;timepicker></p></a></li>\n            <li><a href="/component/datepicker.html">日期选择器<p>&lt;datepicker></p></a></li>\n            <li><a href="/component/datetimepicker.html">日期时间选择器<p>&lt;datetimepicker></p></a></li>\n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe603;</i>结构数据</h3>\n        <ul>\n            <li><a href="/component/multiinput.html">多项输入<p>&lt;multiinput></p></a></li>\n            <li><a href="/component/multiform.html">多项表单输入<p>&lt;multiform></p></a></li>\n        </ul>\n    </div>\n    <div class="sub-group">\n        <h3><i class="iconfont">&#xe645;</i>其他</h3>\n        <ul>\n            <li><a href="/component/upload.html">文件上传<p>&lt;upload></p></a></li>\n            <li><a href="/component/imagemap.html">图片热区输入<p>&lt;imagemap></p></a></li>\n        </ul>\n    </div>\n</div>\n')])])},i=[];e._withStripped=!0},326:function(n,l,t){"use strict";t.r(l);var e=t(41),i=t.n(e);for(var o in e)"default"!==o&&function(n){t.d(l,n,function(){return e[n]})}(o);var p=t(159),a=t(0),r=!1;var c=function(n){r||t(727)},h=Object(a.a)(i.a,p.a,p.b,!1,c,null,null);h.options.__file="src/docs/pages/component/index/index.vue",l.default=h.exports},327:function(n,l,t){"use strict";var e=o(t(1)),i=o(t(326));function o(n){return n&&n.__esModule?n:{default:n}}new e.default({el:"#root",render:function(n){return n(i.default)}})},41:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e,i=t(2),o=(e=i)&&e.__esModule?e:{default:e};l.default={data:function(){return{page:"index"}},components:{"doc-component":o.default}},n.exports=l.default},727:function(n,l){}});