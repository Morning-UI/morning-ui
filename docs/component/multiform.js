!function(n){function i(i){for(var t,u,o=i[0],m=i[1],s=i[2],c=0,d=[];c<o.length;c++)u=o[c],l[u]&&d.push(l[u][0]),l[u]=0;for(t in m)Object.prototype.hasOwnProperty.call(m,t)&&(n[t]=m[t]);for(a&&a(i);d.length;)d.shift()();return r.push.apply(r,s||[]),e()}function e(){for(var n,i=0;i<r.length;i++){for(var e=r[i],t=!0,o=1;o<e.length;o++){var m=e[o];0!==l[m]&&(t=!1)}t&&(r.splice(i--,1),n=u(u.s=e[0]))}return n}var t={},l={54:0},r=[];function u(i){if(t[i])return t[i].exports;var e=t[i]={i:i,l:!1,exports:{}};return n[i].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=n,u.c=t,u.d=function(n,i,e){u.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:e})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,i){if(1&i&&(n=u(n)),8&i)return n;if(4&i&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var t in n)u.d(e,t,function(i){return n[i]}.bind(null,t));return e},u.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(i,"a",i),i},u.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},u.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],m=o.push.bind(o);o.push=i,o=o.slice();for(var s=0;s<o.length;s++)i(o[s]);var a=m;r.push([730,0]),e()}({1:function(n,i){n.exports=Vue},148:function(n,i,e){"use strict";e.r(i);var t=e(149),l=e.n(t);for(var r in t)"default"!==r&&function(n){e.d(i,n,function(){return t[n]})}(r);i.default=l.a},149:function(n,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t,l=e(2),r=(t=l)&&t.__esModule?t:{default:t};i.default={data:function(){return{page:"multiform"}},components:{"doc-component":r.default}},n.exports=i.default},322:function(n,i,e){"use strict";var t=function(){var n=this.$createElement,i=this._self._c||n;return i("doc-component",{attrs:{page:this.page,hasPadding:!0}},[i("script",{attrs:{type:"text/markdown"}},[this._v('\n# 多项表单输入 `<ui-multiform>`\n\n<doc-component-status page="multiform"></doc-component-status>\n\n[[[开始]]]\n\n定义多项表单输入。\n\n多项表单输入组件是一个强大的组件，通过和其他表单组件的组合，它允许用户输入复杂的对象结构数据。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-multiform form-name="城市">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">名称</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">省份</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="province"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">备注</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textarea form-key="note"></ui-textarea>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:multiform\n@defaultValue:[{name:\'Jim\'}, {name:\'Sam\'}]\n@attrs: :item-filler="item => ({title: item.name})"\n@slot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:multiform\n@defaultValue:[{name:\'Jim\'}, {name:\'Sam\'}]\n@attrs: :item-filler="item => ({title: item.name})"\n@slot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>\n:::\n\n:::vue\n@name:inside-name\n---\n#config\n>conf-desc\n在组件内显示的名称，和`form-name`互为补充。\n>conf-accept\n字符串\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-multiform inside-name="名单">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">姓名</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n:::\n\n:::vue\n@name:item-name\n---\n#config\n>conf-desc\n项目的名称，如果没有设置`item-filler`，会作为每项的标题显示。同时会作为添加按钮标题的后缀。\n>conf-accept\n项目的名称\n>conf-type\nString\n>conf-default\n`\'项目\'`\n---\n#demo\n>desc\n项目名称可以告知使用者输入项目的含义。建议和`item-filler`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-multiform form-name="名单" item-name="使用者">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">姓名</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n:::\n\n:::vue\n@name:item-filler\n---\n#config\n>conf-desc\n项目内容填充函数，此函数有一个参数：<br>`item`：每一项的数据对象<br><br>此函数通过`item`获取项目的标题及缩略图，然后返回给组件，最终将标题和缩略图显示在项目上。<br><br>返回值是一个对象，包含两个KEY：`title`、`thumb`(缩略图地址)。\n>conf-accept\n填充函数\n>conf-type\nFunction\n>conf-default\n`() => {}`\n---\n#demo\n>desc\n`item-filler`可以中项目中选出标题和缩略图，显示在项目的区块中。设置后可以让使用者更好区分每一项。<br><br>下面是使用`item-filler`选出项目的标题及缩略图。\n>tpl\n<div style="width:300px;">\n    <ui-multiform form-name="名单" :item-filler="item => ({title: item.name, thumb: item.img})">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">姓名</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">图片URL</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="img" v-model="inputValue"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n>script\n{\n    data : {\n        inputValue : \'https://cdn.dribbble.com/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934\'\n    }\n}\n---\n#demo\n>desc\n和`item-name`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-multiform form-name="名单" item-name="使用者" :item-filler="item => ({title: item.name})">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">姓名</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n:::\n\n:::vue\n@name:item-validator\n---\n#config\n>conf-desc\n项目添加或更新时，验证或二次处理项目的值，此函数有一个参数：<br>`value`：新增或更新项目的值<br><br>返回值(除`false`以外)作为项目添加或更新的值，若返回为`false`，则表示未通过验证，此项目不会被添加或更新。\n>conf-accept\n验证函数\n>conf-type\nFunction\n>conf-default\n`value => value`\n---\n#demo\n>desc\n`item-validator`第一种用法是对值进行二次处理，比如在名称前加上`Mr.`。\n>tpl\n<div style="width:300px;">\n    <ui-multiform form-name="名单" item-name="使用者" :item-validator="validator">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">姓名</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n>script\n{\n    methods : {\n        validator : function (value) {\n            \n            if (!/^Mr\\./.test(value.name)) {\n\n                value.name = `Mr.${value.name}`;\n        \n            }\n\n            return value;\n\n        }\n    }\n}\n---\n#demo\n>desc\n`item-validator`第二种用法是对值进行校验。\n>tpl\n<div style="width:300px;">\n    <ui-multiform form-name="名单" item-name="使用者" :item-validator="validator">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">姓名</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n>script\n{\n    methods : {\n        validator : function (value) {\n\n            if (!/[0-9]/.test(value.name)) {\n\n                alert(\'名称中必须包含数字\');\n                \n                return false;\n        \n            }\n\n            return value;\n\n        }\n    }\n}\n:::\n\n:::vue\n@name:can-move\n---\n#config\n>conf-desc\n输入项目是否可以移动。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-multiform form-name="名单" can-move :item-filler="item => ({title: item.name})" v-model="value">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">姓名</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n>script\n{\n    data : {\n        value : [{name:\'Jim\'}, {name:\'Sam\'}, {name:\'Gustavo\'}]\n    }\n}\n:::\n\n:::vue\n@name:max\n---\n#config\n>conf-desc\n可输入的最大项目数。\n>conf-accept\n数字：最大项目数<br>`undefined`：无限制\n>conf-type\nNumber\n>conf-default\n`undefined`\n---\n#demo\n>desc\n下面的演示中设置了最多输入3项。\n>tpl\n<div style="width:300px;">\n    <ui-multiform form-name="名单" max=3 v-model="value">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">姓名</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n>script\n{\n    data : {\n        value : [{name:\'Jim\'}, {name:\'Sam\'}, {name:\'Gustavo\'}]\n    }\n}\n:::\n\n:::vue\n@name:input-type\n---\n#config\n>conf-desc\n表单的输入模式<br><br>在批量输入模式下会进行下面操作：<br>1. 将用户输入的字符串解析成id数组(按一定的规则)<br>2. 将id数组会输入一个填值函数(用户定义填值函数)<br>3. 填值函数解析id后，返回由多个项目对象组成的数组<br>4. 这些项目会被添加到表单中<br><br>批量输入必需添加：<br>`batch-reg`将字符串解析为id数组的正则表达式<br>`batch-filler`来将输入数组转换成项目对象数组。\n>conf-accept\n`\'single\'`：每次输入一项<br>`\'batch-separate\'`：批量输入，通过内容分割得到id数组<br>`\'batch-pluck\'`：批量输入，通过内容匹配选取得到id数组\n>conf-type\nString\n>conf-default\n`\'single\'`\n---\n#demo\n>desc\n下面是`input-type`为`batch-separate`的情况。\n>tpl\n<div style="width:300px;">\n    <p>点击添加城市，输入城市的拼音缩写(使用逗号分隔)<code>hz,sh,sz</code>，然后查看效果</p>\n    <ui-multiform\n        form-name="地区"\n        item-name="城市"\n        :item-filler="item => ({title: item.city})"\n        input-type="batch-separate"\n        :batch-filler="filler"\n    >\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">城市</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="city"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">省份</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="province"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n>script\n{\n    data : {\n        list : {\n            hz : {\n                city : \'杭州\',\n                province : \'浙江\'\n            },\n            sh : {\n                city : \'上海\',\n                province : \'上海\'\n            },\n            sz : {\n                city : \'深圳\',\n                province : \'广东\'\n            }\n        }\n    },\n    methods : {\n        filler : function (ids) {\n            let list = [];\n            for (let id of ids) {\n                if (this.list[id]) {\n                    list.push(this.list[id]);\n                }\n            }\n            return list;\n        }\n    }\n}\n---\n#demo\n>desc\n下面是`input-type`为`batch-pluck`的情况，输入的内容混入了数字，采用了正则匹配并选取城市的字母。\n>tpl\n<div style="width:300px;">\n    <p>点击添加城市，输入城市的拼音缩写(混入数字)<code>hz1sh23sz45</code>，然后查看效果</p>\n    <ui-multiform\n        form-name="地区"\n        item-name="城市"\n        :item-filler="item => ({title: item.city})"\n        input-type="batch-pluck"\n        batch-reg="(hz|sh|sz)"\n        :batch-filler="filler"\n    >\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">城市</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="city"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">省份</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="province"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n>script\n{\n    data : {\n        list : {\n            hz : {\n                city : \'杭州\',\n                province : \'浙江\'\n            },\n            sh : {\n                city : \'上海\',\n                province : \'上海\'\n            },\n            sz : {\n                city : \'深圳\',\n                province : \'广东\'\n            }\n        }\n    },\n    methods : {\n        filler : function (ids) {\n            let list = [];\n            for (let id of ids) {\n                if (this.list[id]) {\n                    list.push(this.list[id]);\n                }\n            }\n            return list;\n        }\n    }\n}\n:::\n\n:::vue\n@name:batch-reg\n---\n#config\n>conf-desc\n解析用户输入字符串的正则表达式<br>在`batch-separate`模式下通过这个正则分割字符串得到id数组<br>在`batch-pluck`模式下通过匹配这个正则得到id数组(每匹配到一项添加到数组中)。\n>conf-accept\n正则表达式字符串\n>conf-type\nString\n>conf-default\n`\',\'`\n---\n#demo\n>desc\n通过`batch-reg`你可以修改输入id字符串的分隔符或是选取条件。\n>tpl\n<div style="width:300px;">\n    <p>点击添加城市，输入城市的拼音缩写(使用斜线分隔)<code>hz/sh/sz</code>，然后查看效果</p>\n    <ui-multiform\n        form-name="地区"\n        item-name="城市"\n        :item-filler="item => ({title: item.city})"\n        input-type="batch-separate"\n        batch-reg="\\/"\n        :batch-filler="filler"\n    >\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">城市</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="city"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">省份</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="province"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n>script\n{\n    data : {\n        list : {\n            hz : {\n                city : \'杭州\',\n                province : \'浙江\'\n            },\n            sh : {\n                city : \'上海\',\n                province : \'上海\'\n            },\n            sz : {\n                city : \'深圳\',\n                province : \'广东\'\n            }\n        }\n    },\n    methods : {\n        filler : function (ids) {\n            let list = [];\n            for (let id of ids) {\n                if (this.list[id]) {\n                    list.push(this.list[id]);\n                }\n            }\n            return list;\n        }\n    }\n}\n:::\n\n:::vue\n@name:batch-filler\n---\n#config\n>conf-desc\n批量输入的填值函数，此函数有一个参数：<br>`ids`：用户输入的id数组<br><br>通过解析这些id，此函数返回多个项目对象组成的数组<br><br>如果解析是异步的，此函数也可以返回一个`Promise`对象。\n>conf-accept\n填值函数\n>conf-type\nFunction\n>conf-default\n`value => value`\n---\n#demo\n>desc\n在上面的`batch-reg`中已经演示同步的`batch-filler`下面来看看异步的情况，异步的`batch-filler`允许你通过输入的id数组从远程拉取数据。\n>tpl\n<div style="width:300px;">\n    <p>点击添加城市，输入城市的拼音缩写(使用逗号分隔)<code>hz,sh,sz</code>，等待3秒查看效果</p>\n    <ui-multiform\n        form-name="地区"\n        item-name="城市"\n        :item-filler="item => ({title: item.city})"\n        input-type="batch-separate"\n        :batch-filler="filler"\n    >\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">城市</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="city"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">省份</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="province"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n>script\n{\n    data : {\n        list : {\n            hz : {\n                city : \'杭州\',\n                province : \'浙江\'\n            },\n            sh : {\n                city : \'上海\',\n                province : \'上海\'\n            },\n            sz : {\n                city : \'深圳\',\n                province : \'广东\'\n            }\n        }\n    },\n    methods : {\n        filler : function (ids) {\n            let list = [];\n            for (let id of ids) {\n                if (this.list[id]) {\n                    list.push(this.list[id]);\n                }\n            }\n            return new Promise(resolve => {\n                setTimeout(()=>{\n                    resolve(list);\n                }, 3000);\n            });\n        }\n    }\n}\n:::\n\n:::vue\n@name:batch-uniq\n---\n#config\n>conf-desc\n对用户输入解析后的id数组进行去重。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <p>点击添加城市，输入城市的拼音缩写(使用逗号分隔)<code>hz,sh,sz,hz,sh,sz</code>，然后查看效果</p>\n    <ui-multiform\n        form-name="地区"\n        item-name="城市"\n        :item-filler="item => ({title: item.city})"\n        input-type="batch-separate"\n        :batch-uniq="true"\n        :batch-filler="filler"\n    >\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">城市</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="city"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">省份</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="province"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n>script\n{\n    data : {\n        list : {\n            hz : {\n                city : \'杭州\',\n                province : \'浙江\'\n            },\n            sh : {\n                city : \'上海\',\n                province : \'上海\'\n            },\n            sz : {\n                city : \'深圳\',\n                province : \'广东\'\n            }\n        }\n    },\n    methods : {\n        filler : function (ids) {\n            let list = [];\n            for (let id of ids) {\n                if (this.list[id]) {\n                    list.push(this.list[id]);\n                }\n            }\n            return list;\n        }\n    }\n}\n:::\n\n:::vue\n@name:show-type\n---\n#config\n>conf-desc\n组件中模拟盒打开的方式(使用`no`可以提升性能)。\n>conf-accept\n`top`:从上往下弹出<br>`center`:从中间弹出<br>`no`:无动画直接出现\n>conf-type\nString\n>conf-default\n`\'top\'`\n---\n#demo\n>desc\n从中间弹出的模拟盒。\n>tpl\n<div style="width:300px;">\n    <ui-multiform form-name="名单" item-name="使用者" show-type="center">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">姓名</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n---\n#demo\n>desc\n无动画直接出现的模拟盒。\n>tpl\n<div style="width:300px;">\n    <ui-multiform form-name="名单" item-name="使用者" show-type="no">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">姓名</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:multiform\n@value:[{name:\'Jim\'}, {name:\'Sam\'}]\n@defaultValue:[{name:\'Jim\'}, {name:\'Sam\'}]\n@attrs: :item-filler="item => ({title: item.name})"\n@slot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>\n:::\n\n:::vue\n@name:add(item, [index])\n---\n#method\n>method-desc\n在指定位置添加项。\n>method-args\n|item|NO|添加项目的内容|和表单对应的`key` / `value`对象|`Object`|`undefined`|\n|index|YES|添加的位置|`undefined`: 添加为最后一项<br>数字: 添加到指定的index位置|`Undefined`<br>`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-multiform ref="demo2" form-name="名单" :item-filler="item => ({title: item.name})" v-model="value">\n            <ui-formgroup>\n                <div class="item">\n                    <h5 class="title">\n                        <ui-center class="fill">姓名</ui-center>\n                    </h5>\n                    <div class="content">\n                        <div class="form">\n                            <ui-textinput form-key="name"></ui-textinput>\n                        </div>\n                    </div>\n                </div>\n            </ui-formgroup>\n        </ui-multiform>\n    </div>\n    <br>\n    <ui-link js="morning.findVM(\'demo2\').add({name: \'Sam\'});">添加到最后</ui-link>\n    <ui-link js="morning.findVM(\'demo2\').add({name: \'Gustavo\'}, 0);">添加到第0项</ui-link>\n</div>\n>script\n{\n    data : {\n        value : [{name:\'Jim\'}]\n    }\n}\n:::\n\n:::vue\n@name:update(item, index)\n---\n#method\n>method-desc\n更新指定位置的项。\n>method-args\n|item|NO|更新的项目内容|和表单对应的`key` / `value`对象|`Object`|`undefined`|\n|index|NO|更新的位置|更新项目的index位置|`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-multiform ref="demo4" form-name="名单" :item-filler="item => ({title: item.name})" v-model="value">\n            <ui-formgroup>\n                <div class="item">\n                    <h5 class="title">\n                        <ui-center class="fill">姓名</ui-center>\n                    </h5>\n                    <div class="content">\n                        <div class="form">\n                            <ui-textinput form-key="name"></ui-textinput>\n                        </div>\n                    </div>\n                </div>\n            </ui-formgroup>\n        </ui-multiform>\n    </div>\n    <br>\n    <ui-link js="morning.findVM(\'demo4\').update({name: \'Katherine\'}, 1);">将第2项的name更新为Katherine</ui-link>\n</div>\n>script\n{\n    data : {\n        value : [{name:\'Jim\'}, {name:\'Sam\'}, {name:\'Gustavo\'}]\n    }\n}\n:::\n\n:::vue\n@name:del(index)\n---\n#method\n>method-desc\n删除指定位置的项。\n>method-args\n|index|NO|删除指定位置的项目|删除项目的index位置|`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-multiform ref="demo3" form-name="名单" :item-filler="item => ({title: item.name})" v-model="value">\n            <ui-formgroup>\n                <div class="item">\n                    <h5 class="title">\n                        <ui-center class="fill">姓名</ui-center>\n                    </h5>\n                    <div class="content">\n                        <div class="form">\n                            <ui-textinput form-key="name"></ui-textinput>\n                        </div>\n                    </div>\n                </div>\n            </ui-formgroup>\n        </ui-multiform>\n    </div>\n    <br>\n    <ui-link js="morning.findVM(\'demo3\').del(0);">删除第0项</ui-link>\n</div>\n>script\n{\n    data : {\n        value : [{name:\'Jim\'}, {name:\'Sam\'}, {name:\'Gustavo\'}]\n    }\n}\n:::\n\n:::vue\n@name:move(from, to)\n---\n#method\n>method-desc\n移动项目。\n>method-args\n|from|NO|需要移动的项目位置|移动项目的index位置|`Number`|`undefined`|\n|to|NO|移动之后的项目位置|移动之后的index位置|`Number`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-multiform ref="demo5" form-name="名单" :item-filler="item => ({title: item.name})" v-model="value">\n            <ui-formgroup>\n                <div class="item">\n                    <h5 class="title">\n                        <ui-center class="fill">姓名</ui-center>\n                    </h5>\n                    <div class="content">\n                        <div class="form">\n                            <ui-textinput form-key="name"></ui-textinput>\n                        </div>\n                    </div>\n                </div>\n            </ui-formgroup>\n        </ui-multiform>\n    </div>\n    <br>\n    <ui-link js="morning.findVM(\'demo5\').move(2, 0);">将第2项移到第0项</ui-link>\n</div>\n>script\n{\n    data : {\n        value : [{name:\'Jim\'}, {name:\'Sam\'}, {name:\'Gustavo\'}]\n    }\n}\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:多项表单输入\n@uikey:multiform\n@value:[{name:\'Jim\'}, {name:\'Sam\'}]\n@defaultValue:[{name:\'Jim\'}, {name:\'Sam\'}]\n@attrs: :item-filler="item => ({title: item.name})"\n@slot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>\n@wrapStyle:width:300px;\n:::\n\n:::vue\n@name:show\n---\n#event\n>event-desc\n当表单填写框显示时触发。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-multiform ref="demo6" form-name="名单" @show="echo">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">姓名</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo6.console1\', \'show event!\');\n        }\n    }\n}\n:::\n\n:::vue\n@name:hide\n---\n#event\n>event-desc\n当表单填写框隐藏时触发。\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-multiform ref="demo7" form-name="名单" @hide="echo">\n        <ui-formgroup>\n            <div class="item">\n                <h5 class="title">\n                    <ui-center class="fill">姓名</ui-center>\n                </h5>\n                <div class="content">\n                    <div class="form">\n                        <ui-textinput form-key="name"></ui-textinput>\n                    </div>\n                </div>\n            </div>\n        </ui-formgroup>\n    </ui-multiform>\n</div>\n>script\n{\n    methods : {\n        echo : function () {\n            console.log(\'demo7.console1\', \'hide event!\');\n        }\n    }\n}\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Array` : 数组\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成空数组([])。\n- 若启用`max`，最多不会超过max设置的项目数量。\n\n#### 值格式\n\n数组由项目的对象组成，项目对象由表单的`key` / `value`组成。\n\n#### 默认值\n\n`[]`\n\n:::preset\n@name:formValue\n@uikey:multiform\n@uiname:多项表单输入\n@valueType:multiform\n@attrs: :item-filler="item => ({title: item.name})"\n@slot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/multiform/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},l=[];t._withStripped=!0,e.d(i,"a",function(){return t}),e.d(i,"b",function(){return l})},730:function(n,i,e){"use strict";var t=r(e(1)),l=r(e(731));function r(n){return n&&n.__esModule?n:{default:n}}new t.default({el:"#root",render:function(n){return n(l.default)}})},731:function(n,i,e){"use strict";e.r(i);var t=e(322),l=e(148);for(var r in l)"default"!==r&&function(n){e.d(i,n,function(){return l[n]})}(r);var u=e(0),o=Object(u.a)(l.default,t.a,t.b,!1,null,null,null);o.options.__file="src/docs/pages/component/multiform/index.vue",i.default=o.exports}});