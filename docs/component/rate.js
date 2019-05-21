!function(n){function e(e){for(var r,i,u=e[0],f=e[1],c=e[2],d=0,s=[];d<u.length;d++)i=u[d],o[i]&&s.push(o[i][0]),o[i]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(n[r]=f[r]);for(l&&l(e);s.length;)s.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,u=1;u<t.length;u++){var f=t[u];0!==o[f]&&(r=!1)}r&&(a.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},o={63:0},a=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=f;a.push([743,0]),t()}({1:function(n,e){n.exports=Vue},142:function(n,e,t){"use strict";t.r(e);var r=t(143),o=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,function(){return r[n]})}(a);e.default=o.a},143:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=t(2),a=(r=o)&&r.__esModule?r:{default:r};e.default={data:function(){return{page:"rate"}},components:{"doc-component":a.default}},n.exports=e.default},378:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 评分 `<ui-rate>`\n\n<doc-component-status page="rate"></doc-component-status>\n\n[[[开始]]]\n\n定义评分组件，评分组件输出一个数字。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:200px;">\n    <ui-rate form-name="评分"></ui-rate>\n</div>\n:::\n\n:::vue\n@name:支持半星\n---\n#demo\n>tpl\n<div style="width:200px;">\n    <ui-rate form-name="评分" allow-half></ui-rate>\n</div>\n:::\n\n:::vue\n@name:显示文本\n---\n#demo\n>desc\n通过`show-note`来显示辅助文本，也可以通过`formater`配置来自定义文本。\n>tpl\n<div style="width:200px;">\n    <ui-rate form-name="评分" show-note></ui-rate>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatusWithSize\n@uikey:rate\n@defaultValue:3\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:rate\n@defaultValue:3\n:::\n\n:::vue\n@name:max\n---\n#config\n>conf-desc\n最大评分。\n>conf-accept\n数字，必须是整数且大于0\n>conf-type\nNumber\n>conf-default\n`5`\n---\n#demo\n>tpl\n<div style="width:200px;">\n    <ui-rate form-name="评分" :max="3"></ui-rate>\n</div>\n:::\n\n:::vue\n@name:allow-half\n---\n#config\n>conf-desc\n是否允许半星评分。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:200px;">\n    <ui-rate form-name="评分" allow-half></ui-rate>\n</div>\n:::\n\n:::vue\n@name:show-note\n---\n#config\n>conf-desc\n是否显示辅助文字。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:200px;">\n    <ui-rate form-name="评分" show-note></ui-rate>\n</div>\n:::\n\n:::vue\n@name:formater\n---\n#config\n>conf-desc\n辅助文字格式化函数，此函数接受一个参数，为当前的评分(数字)。<br>此函数的返回值将显示为辅助文字\n>conf-accept\n格式化函数\n>conf-type\nFunction\n>conf-default\n`(rate)=>(rate+\'星\')`\n---\n#demo\n>desc\n根据评分显示满意级别。\n>tpl\n<div style="width:200px;">\n    <ui-rate\n        form-name="评分"\n        show-note\n        :formater="function (rate){\n            \n            if (rate === 0) {\n                return \'未评分\';\n            } else if (rate === 1) {\n                return \'差劲\';\n            } else if (rate === 2) {\n                return \'失望\';\n            } else if (rate === 3) {\n                return \'一般\';\n            } else if (rate === 4) {\n                return \'不错\';\n            } else if (rate === 5) {\n                return \'完美\';\n            } else {\n                return \'未知\';\n            }\n\n        }"\n    ></ui-rate>\n</div>\n---\n#demo\n>desc\n显示评分值。\n>tpl\n<div style="width:250px;">\n    <ui-rate\n        form-name="评分"\n        show-note\n        :formater="function (rate){\n            return \'当前评分：\' + rate;\n        }"\n    ></ui-rate>\n</div>\n:::\n\n:::vue\n@name:icon\n---\n#config\n>conf-desc\n配置评分显示的图标内容，可以是：<br><br>图标：使用`<i>`标签的字体图标<br>文字：使用`<span>`标签包裹的文本。\n>conf-accept\n图标HTML字符串\n>conf-type\nString\n>conf-default\n`<i class="mo-icon mo-icon-star-f"></i>`\n---\n#demo\n>desc\n替换icon。\n>tpl\n<div style="width:250px;">\n    <ui-rate\n        form-name="评分"\n        icon="<i class=\'mo-icon mo-icon-love-f\'></i>"\n    ></ui-rate>\n</div>\n---\n#demo\n>desc\n使用文字。\n>tpl\n<div style="width:250px;">\n    <ui-rate\n        form-name="评分"\n        icon="<span style=\'font-weight:bold\'>A</span>"\n    ></ui-rate>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:rate\n@value:3\n@defaultValue:3\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:评分\n@uikey:rate\n@value:3\n@wrapStyle:width:250px;\n:::\n\n:::vue\n@name:rating\n---\n#event\n>event-desc\n当鼠标切换评分时触发。\n>event-args\n|rate|评分值|`Number`|\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-rate @rating="echo" ref="demo1"></ui-rate>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo1.console1\', \'rating event!\');\n        }\n    }\n}\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Number` : 数字\n\n#### 值过滤\n\n- 如果数值的类型不是数字，会被转换成数字，若转换错误则设为0。\n- 如果数值小于0，则为0。\n- 如果数值大于`max`，则为`max`。\n\n#### 值格式\n\n评分数字(若开启了`allow-half`配置，则可能出现浮点数)。\n\n#### 默认值\n\n`0`\n\n:::preset\n@name:formValue\n@uikey:rate\n@uiname:评分\n@valueType:rate\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/rate/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},o=[];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})},743:function(n,e,t){"use strict";var r=a(t(1)),o=a(t(744));function a(n){return n&&n.__esModule?n:{default:n}}new r.default({el:"#root",render:function(n){return n(o.default)}})},744:function(n,e,t){"use strict";t.r(e);var r=t(378),o=t(142);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);var i=t(0),u=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);u.options.__file="src/docs/pages/component/rate/index.vue",e.default=u.exports}});