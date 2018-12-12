<template>
    <div @click="onClick">
        <doc-header :category="category"></doc-header>
        <div class="body">
            <doc-submenu
                :category="category"
                :page="page"
            ></doc-submenu>
            <div
                class="content markdown-body"
                :class="{padding : hasPadding}"
                v-docmd
            >
                <slot></slot>
            </div>

            <ui-message ref="copied"></ui-message>
        </div>
        <doc-footer></doc-footer>
    </div>
</template>

<script>
// 优化webpack打包加载
import MarkdownIt                   from 'Npm/markdown-it/dist/markdown-it.min.js';
import hljs                         from 'Npm/highlight.js/lib/highlight.js';
import _                            from 'Npm/underscore/underscore-min.js';
import Mustache                     from 'Npm/mustache/mustache.min.js';

// 正常加载
import Anchor                       from 'markdown-it-anchor';
import extend                       from 'extend';
import copy                         from 'clipboard-copy';
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocFooter                    from 'Docs/common/DocFooter.vue';
import DocSubmenu                   from 'Docs/common/DocSubmenu.vue';
import DocComponentStatus           from 'Docs/common/DocComponentStatus.vue';

const randomRangeMin = 1e4;
const randomRangeMax = 9e4;

const markdown = new MarkdownIt({
    html : true
});

hljs.registerLanguage('accesslog',      require('highlight.js/lib/languages/accesslog'));
hljs.registerLanguage('xml',            require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('bash',           require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('markdown',       require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('diff',           require('highlight.js/lib/languages/diff'));
hljs.registerLanguage('handlebars',     require('highlight.js/lib/languages/handlebars'));
hljs.registerLanguage('http',           require('highlight.js/lib/languages/http'));
hljs.registerLanguage('javascript',     require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('json',           require('highlight.js/lib/languages/json'));
hljs.registerLanguage('less',           require('highlight.js/lib/languages/less'));
hljs.registerLanguage('makefile',       require('highlight.js/lib/languages/makefile'));
hljs.registerLanguage('shell',          require('highlight.js/lib/languages/shell'));

markdown.use(Anchor, {
    level : [3, 4],
    slugify : s => (s.replace(/[^a-zA-Z0-9-_\u4e00-\u9fa5]/g, '')),
    permalink : true,
    permalinkBefore : true,
    permalinkClass : 'permalink',
    permalinkSymbol : '#'
});

let evals = [];
let livedata = {};
let outputcode = {};

let data = {
    size : [
        {
            sizeKey : 'xxl',
            sizeName : 'XXL尺寸'
        },
        {
            sizeKey : 'xl',
            sizeName : 'XL尺寸'
        },
        {
            sizeKey : 'l',
            sizeName : 'L尺寸'
        },
        {
            sizeKey : 'm',
            sizeName : 'M尺寸'
        },
        {
            sizeKey : 's',
            sizeName : 'S尺寸'
        },
        {
            sizeKey : 'xs',
            sizeName : 'XS尺寸'
        },
        {
            sizeKey : 'xxs',
            sizeName : 'XXS尺寸'
        }
    ],
    theme : [
        {
            colorKey : 'theme',
            colorName : '主题色'
        },
        {
            colorKey : 'light-theme',
            colorName : '浅主题色'
        },
        {
            colorKey : 'dark-theme',
            colorName : '深主题色'
        }
    ],
    feature : [
        {
            colorKey : 'success',
            colorName : '成功/正确'
        },
        {
            colorKey : 'warning',
            colorName : '警告/注意'
        },
        {
            colorKey : 'danger',
            colorName : '错误/危险'
        },
        {
            colorKey : 'primary',
            colorName : '主要/关键'
        },
        {
            colorKey : 'minor',
            colorName : '次要/不醒目'
        },
        {
            colorKey : 'info',
            colorName : '信息/额外'
        }
    ],
    black : [
        {
            colorKey : 'black',
            colorName : '黑色'
        },
        {
            colorKey : 'light-black',
            colorName : '浅黑色'
        },
        {
            colorKey : 'extra-light-black',
            colorName : '超浅黑色'
        }
    ],
    blue : [
        {
            colorKey : 'blue',
            colorName : '青色'
        },
        {
            colorKey : 'light-blue',
            colorName : '浅青色'
        },
        {
            colorKey : 'extra-light-blue',
            colorName : '超浅青色'
        }
    ],
    silver : [
        {
            colorKey : 'silver',
            colorName : '银色'
        },
        {
            colorKey : 'light-silver',
            colorName : '浅银色'
        },
        {
            colorKey : 'extra-light-silver',
            colorName : '超浅银色'
        }
    ],
    gray : [
        {
            colorKey : 'gray',
            colorName : '灰色'
        },
        {
            colorKey : 'light-gray',
            colorName : '浅灰色'
        },
        {
            colorKey : 'white',
            colorName : '白色'
        }
    ],
    state : [
        {
            stateKey : 'normal',
            stateName : '正常'
        },
        {
            stateKey : 'hover',
            stateName : 'Hover'
        },
        {
            stateKey : 'active',
            stateName : '激活'
        },
        {
            stateKey : 'disabled',
            stateName : '禁用'
        },
        {
            stateKey : 'readonly',
            stateName : '只读'
        },
        {
            stateKey : 'apparent',
            stateName : '醒目'
        }
    ],
    formValueType : {
        default : [
            {
                valueType : 'String',
                valueContent : `'Jim'`
            },
            {
                valueType : 'Number',
                valueContent : '5'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{}'
            },
            {
                valueType : 'Array',
                valueContent : `['Jim', 'Tom']`
            }
        ],
        colorpicker : [
            {
                valueType : 'String',
                valueContent : `'#ff0000'`
            },
            {
                valueType : 'Number',
                valueContent : '0'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{\'#ff0000\':\'#ff0000\'}'
            },
            {
                valueType : 'Array',
                valueContent : '[\'#ff0000\']'
            }
        ],
        checkbox : [
            {
                valueType : 'String',
                valueContent : `'Tim'`
            },
            {
                valueType : 'Number',
                valueContent : '5'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{\'Tim\':\'Tim\'}'
            },
            {
                valueType : 'Array',
                valueContent : '[\'Tim\']'
            }
        ],
        select : [
            {
                valueType : 'String',
                valueContent : `'tim'`
            },
            {
                valueType : 'Number',
                valueContent : '5'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{\'tim\':\'tim\'}'
            },
            {
                valueType : 'Array',
                valueContent : '[\'tim\', \'andrew\']'
            }
        ],
        multiform : [
            {
                valueType : 'String',
                valueContent : `'Tim Boelaars'`
            },
            {
                valueType : 'Number',
                valueContent : '5'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{\'name\':\'Tim Boelaars\'}'
            },
            {
                valueType : 'Array',
                valueContent : '[{\'name\':\'Tim Boelaars\'}]'
            }
        ],
        timepicker : [
            {
                valueType : 'String',
                valueContent : `'10:30:23'`
            },
            {
                valueType : 'Number',
                valueContent : '5'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{}'
            },
            {
                valueType : 'Array',
                valueContent : `['10:30:23', '12:30:23']`
            }
        ],
        datepicker : [
            {
                valueType : 'String',
                valueContent : `'2018-03-23'`
            },
            {
                valueType : 'Number',
                valueContent : '2018'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{}'
            },
            {
                valueType : 'Array',
                valueContent : `['2018-03-10', '2018-03-20']`
            }
        ],
        datetimepicker : [
            {
                valueType : 'String',
                valueContent : `'2018-03-23 12:13:14'`
            },
            {
                valueType : 'Number',
                valueContent : '2018'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{}'
            },
            {
                valueType : 'Array',
                valueContent : `['2018-03-10 12:13:14', '2018-03-20 12:13:14']`
            }
        ],
        upload : [
            {
                valueType : 'String',
                valueContent : `'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png'`
            },
            {
                valueType : 'Number',
                valueContent : '5'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}'
            },
            {
                valueType : 'Array',
                valueContent : '[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}]'
            }
        ],
        slider : [
            {
                valueType : 'String',
                valueContent : `'40'`
            },
            {
                valueType : 'Number',
                valueContent : '40'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{}'
            },
            {
                valueType : 'Array',
                valueContent : `[40]`
            }
        ],
        rate : [
            {
                valueType : 'String',
                valueContent : `'3'`
            },
            {
                valueType : 'Number',
                valueContent : '3'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{}'
            },
            {
                valueType : 'Array',
                valueContent : `['3']`
            }
        ],
        counter : [
            {
                valueType : 'String',
                valueContent : `'a4.2.2'`
            },
            {
                valueType : 'Number',
                valueContent : '40'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{}'
            },
            {
                valueType : 'Array',
                valueContent : `['a4.2.2']`
            }
        ],
        texteditor : [
            {
                valueType : 'String',
                valueContent : `'文章内容...'`
            },
            {
                valueType : 'Number',
                valueContent : '40'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : `{a:'文章内容...'}`
            },
            {
                valueType : 'Array',
                valueContent : `['文章内容...']`
            }
        ],
        imagemap : [
            {
                valueType : 'String',
                valueContent : `'{\\'images\\':[{\\'name\\':\\'151244303389249797.png\\',\\'path\\':\\'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png\\'}],\\'zones\\':[{\\'x\\':361,\\'y\\':117,\\'h\\':180,\\'w\\':274},{\\'x\\':86,\\'y\\':310,\\'h\\':180,\\'w\\':275}],\\'w\\':722,\\'h\\':725}'`
            },
            {
                valueType : 'Number',
                valueContent : '5'
            },
            {
                valueType : 'Boolean',
                valueContent : 'true'
            },
            {
                valueType : 'Null',
                valueContent : 'null'
            },
            {
                valueType : 'Undefined',
                valueContent : 'undefined'
            },
            {
                valueType : 'Object',
                valueContent : '{\'images\':[{\'name\':\'151244303389249797.png\',\'path\':\'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png\'}],\'zones\':[{\'x\':361,\'y\':117,\'h\':180,\'w\':274},{\'x\':86,\'y\':310,\'h\':180,\'w\':275}],\'w\':722,\'h\':725}'
            },
            {
                valueType : 'Array',
                valueContent : '[{\'images\':[{\'name\':\'151244303389249797.png\',\'path\':\'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png\'}],\'zones\':[{\'x\':361,\'y\':117,\'h\':180,\'w\':274},{\'x\':86,\'y\':310,\'h\':180,\'w\':275}],\'w\':722,\'h\':725}]'
            }
        ]
    }
};

let presets = {
    formStatus : `
#### 支持

|类型|支持|默认|
|-|-|-|
|尺寸|不支持|-|
|色彩|不支持|-|
|状态|\`normal\`<br/>\`disabled\`<br>\`readonly\`|\`normal\`|

<a href="/guide/status.html">查看形态文档</a>

:::vue
@name:状态
---
#renderer
>name
state-repeat
>rules
normal,disabled,readonly
>tpl
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} state="{$stateKey}" :default-value="{%&defaultValue%}" form-name="{$&stateName}" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
</div>
<br>
:::
`,
    formStatusWithStyle : `
#### 支持

|类型|支持|默认|
|-|-|-|
|尺寸|不支持|-|
|色彩|全部|\`theme\`|
|状态|\`normal\`<br/>\`disabled\`<br>\`readonly\`|\`normal\`|

<a href="/guide/status.html">查看形态文档</a>

#### 色彩

:::repeat/html
color:theme
color:feature
color:black
color:blue
color:silver
color:gray
---
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} color="{$colorKey}" :default-value="{%&defaultValue%}" form-name="{$&colorName}" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
</div>
<br>
:::

#### 状态

:::repeat/html
state:normal,disabled,readonly
---
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} state="{$stateKey}" :default-value="{%&defaultValue%}" form-name="{$&stateName}" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
</div>
<br>
:::
`,
    formConfig : `
:::vue
@name:form-name
---
#config
>conf-desc
表单的名称（用于显示）。
>conf-accept
任意字符串
>conf-type
String
>conf-default
\`undefined\`
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} form-name="{%formName%}" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
</div>
:::

:::vue
@name:form-key
---
#config
>conf-desc
表单的Key（用于逻辑中作为识别标示）。
>conf-accept
任意字符串(唯一)
>conf-type
String
>conf-default
\`undefined\`
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} form-name="{%formName%}" form-key="{%formKey%}" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
</div>
:::

:::vue
@name:group
---
#config
>conf-desc
表单组，用于将多个表单的数值添加到同一个对象中。一个表单可以同时属于多个组。
>conf-accept
若是字符串，则将表单添加到单个组<br>若是数组，则将表单添加到多个组
>conf-type
String<br/>Array
>conf-default
\`[]\`
---
#demo
>desc
设置单个组。
>tpl
<div style="width:300px;{%wrapStyle%}">
    <!-- 设置单个组 -->
    <ui-{%uikey%} form-name="{%formName%}" form-key="{%formKey%}" group="{%formGroupOne%}" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
</div>
---
#demo
>desc
设置多个组。
>tpl
<div style="width:300px;{%wrapStyle%}">
    <!-- 设置多个组 -->
    <ui-{%uikey%} form-name="{$formName}" form-key="{%formKey%}" :group="{%&formGroupMore%}" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
</div>
:::

:::vue
@name:default-value
---
#config
>conf-desc
表单的默认值(注意：\`default-value\`不支持单向数据流，此配置仅在表单初次创建时生效，修改表单值需要使用\`set()\`方法或使用\`v-model\`指令， 详见：[表单数据双向绑定](/guide/form.html#表单数据双向绑定))。
>conf-accept
任意(接受表单原始数值，也接受JSON序列化后的表单数值，若数值是JSON序列化的会自动转换成原始数值)
>conf-type
Any
>conf-default
\`undefined\`
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} form-name="{%formName%}" :default-value="{%&defaultValue%}" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
</div>
:::

:::vue
@name:hide-name
---
#config
>conf-desc
隐藏表单名。
>conf-accept
\`true\`<br>\`false\`
>conf-type
Boolean
>conf-default
\`false\`
---
#demo
>desc
隐藏后表单默认位置的名字不会显示，可以在其他地方设置表单名。
>tpl
<div style="width:300px;{%wrapStyle%}">
    <p>{%formName%}</p>
    <ui-{%uikey%} form-name="{%formName%}" hide-name {%&attrs%}>{%&slot%}</ui-{%uikey%}>
</div>
:::

:::vue
@name:clearable
---
#config
>conf-desc
显示表单清空按钮。
>conf-accept
\`true\`<br>\`false\`
>conf-type
Boolean
>conf-default
\`false\`
---
#demo
>desc
隐藏后表单默认位置的名字不会显示，可以在其他地方设置表单名。
>tpl
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} form-name="{%formName%}" :clearable="true" :default-value="{%&defaultValue%}" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
</div>
:::
`,
    formMethod : `
:::vue
@name:set([value])
---
#method
>method-desc
设置表单的值。
>method-args
|value|YES|需要设置表单的值，如果需要清空表单的值，可以不传此参数。|接受任何数值。<br/>\`undefined\`:清空表单的值<br>原始值:表单的原始值，根据表单不同可以是字符串、对象、数组等<br>JSON数值:表单原始值JSON序列化后的值，传入后表单会自动解析并还原原始值。|Any|\`undefined\`|
>method-return
当前组件VM实例。
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} ref="demoMethodSet" form-name="表单名" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
    <br>
    <ui-link js="window.morning.findVM('demoMethodSet').set({%&value%})">设置值</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSet').set()">移除值</ui-link>
</div>
:::

:::vue
@name:get()
---
#method
>method-desc
获取表单的原始值。
>method-return
返回表单组件的值。
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} ref="demoMethodGet" form-name="表单名" :default-value="{%&defaultValue%}" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
    <br>
    <ui-link js="console.log(window.morning.findVM('demoMethodGet').get())">获取表单原始值</ui-link>
</div>
:::

:::vue
@name:getJson()
---
#method
>method-desc
获取表单值的JSON序列化字符串。若你需要和其他程序进行数据交互，使用JSON是一种较好的方法。
>method-return
返回表单组件值的JSON序列化字符串。
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} ref="demoMethodGetJson" form-name="表单名" :default-value="{%&defaultValue%}" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
    <br>
    <ui-link js="console.log(window.morning.findVM('demoMethodGetJson').getJson())">获取表单值的JSON序列化字符串</ui-link>
</div>
:::

:::vue
@name:setName([name])
---
#method
>method-desc
设置表单的名称。
>method-args
|name|YES|需要设置表单的名称，如果需要清空表单的名称，可以不传此参数。|任意字符串|String|\`undefined\`|
>method-return
当前组件VM实例。
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} ref="demoMethodSetName" form-name="姓名" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(window.morning.findVM('demoMethodSetName').getName())">获取表单名称</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetName').setName('年龄')">设置表单名称</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetName').setName()">移除表单名称</ui-link>
</div>
:::

:::vue
@name:getName()
---
#method
>method-desc
获取表单的名称。
>method-return
返回表单的名称。
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} ref="demoMethodGetName" form-name="姓名" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(window.morning.findVM('demoMethodGetName').getName())">获取表单名称</ui-link>
</div>
:::

:::vue
@name:setKey([key])
---
#method
>method-desc
设置表单的KEY。
>method-args
|key|YES|需要设置表单的KEY，如果需要清空表单的KEY，可以不传此参数。|任意字符串|String|\`undefined\`|
>method-return
当前组件VM实例。
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} ref="demoMethodSetKey" form-name="表单名" form-key="name" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(window.morning.findVM('demoMethodSetKey').getKey())">获取表单KEY</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetKey').setKey('age')">设置表单KEY</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetKey').setKey()">移除表单KEY</ui-link>
</div>
:::

:::vue
@name:getKey()
---
#method
>method-desc
获取表单的KEY。
>method-return
返回组件的KEY。
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <ui-{%uikey%} ref="demoMethodGetKey" form-name="表单名" form-key="name" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(window.morning.findVM('demoMethodGetKey').getKey())">获取表单KEY</ui-link>
</div>
:::

:::vue
@name:setGroup([groups])
---
#method
>method-desc
设置表单所属的表单组。
>method-args
|groups|YES|需要设置的表单组。如果需要清空所有表单组，可以不传此参数。|\`undefined\`:清空所有表单组<br>String:设置一个表单组<br>Array:设置多个表单组。|String<br>Array<br>Undefined|\`undefined\`|
>method-return
当前组件VM实例。
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <!-- 设置多个组 -->
    <ui-{%uikey%} ref="demoMethodSetGroup" form-name="表单名" form-key="name" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(JSON.stringify(window.morning.findVM('demoMethodSetGroup').getGroup()))">获取表单组</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetGroup').setGroup('group1')">设置单个表单组</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetGroup').setGroup(['group1', 'group2'])">设置多个表单组</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetGroup').setGroup()">移除所有表单组</ui-link>
</div>
:::

:::vue
@name:getGroup()
---
#method
>method-desc
获取表单所属的表单组。
>method-return
返回组件的表单组。
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <!-- 设置多个组 -->
    <ui-{%uikey%} ref="demoMethodGetGroup" form-name="表单名" form-key="name" group="group1" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(JSON.stringify(window.morning.findVM('demoMethodGetGroup').getGroup()))">获取表单组</ui-link>
</div>
:::

:::vue
@name:addGroup(group)
---
#method
>method-desc
添加一个指定的表单组。
>method-args
|group|NO|添加表单组的KEY|表单组的KEY|String|\`undefined\`|
>method-return
当前组件VM实例。
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <!-- 设置多个组 -->
    <ui-{%uikey%} ref="demoMethodAddGroup" form-name="表单名" form-key="name" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(JSON.stringify(window.morning.findVM('demoMethodAddGroup').getGroup()))">获取表单组</ui-link>
    <ui-link js="window.morning.findVM('demoMethodAddGroup').addGroup('group1')">添加表单组</ui-link>
</div>
:::

:::vue
@name:removeGroup(group)
---
#method
>method-desc
移除一个指定的表单组。
>method-args
|group|NO|移除表单组的KEY|表单组的KEY|String|\`undefined\`|
>method-return
当前组件VM实例。
---
#demo
>tpl
<div style="width:300px;{%wrapStyle%}">
    <!-- 设置多个组 -->
    <ui-{%uikey%} ref="demoMethodRemoveGroup" form-name="表单名" form-key="name" group="group1" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(JSON.stringify(window.morning.findVM('demoMethodRemoveGroup').getGroup()))">获取表单组</ui-link>
    <ui-link js="window.morning.findVM('demoMethodRemoveGroup').removeGroup('group1')">移除表单组</ui-link>
</div>
:::
`,
    formEvent : `
:::vue
@name:value-change
---
#event
>event-desc
当表单值变化时触发。
---
#demo
>tpl
<div style="{%wrapStyle%}">
    <ui-{%uikey%} ref="demoValueChange" form-name="表单名" @value-change="echo" {%&attrs%}>{%&slot%}</ui-{%uikey%}>
    <br>
    <ui-link js="window.morning.findVM('demoValueChange').set({%&value%})">触发value-change事件</ui-link>
</div>
>script
{
    methods : {
        echo : function () {
            console.log('demoValueChange.console1', 'value-change event!');
        }
    }
}
:::

:::vue
@name:生命周期事件
---
#event
>event-desc
组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。
---
#demo
>tpl
<div style="{%wrapStyle%}">
    <ui-{%uikey%}
        ref="demoEventLifecycle"
        v-show="show"
        @created="echo('created')"
        @mounted="echo('mounted')"
        @before-update="echo('before-update')"
        @updated="echo('updated')"
        @before-destroy="echo('before-destroy')"
        @destroyed="echo('destroyed')"
        {%&attrs%}
    >{%&slot%}<span style="display:none;">{*text*}</span></ui-{%uikey%}>

   <br><br>

    <ui-link js="this.text='生命周期事件';">触发update</ui-link>
    <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
</div>
>script
{
    data : function () {
        return {
           text : '{%uiname%}',
           show : true
        };
    },
    methods : {
        echo : function (name) {
            console.log('demoEventLifecycle.console1', name + ' event!');
        }
    }
}
:::
`,
    formValue : `
:::vue
@name:输入/输出示例
---
#renderer
>name
value-type
>rules
{%uikey%}
{%uiname%}
{%valueType%}
{%wrapStyle%}
{%&attrs%}
{%&slot%}
:::
`
};

let addSpace = (content, tabs) => {

    let prepend = '';

    for (;tabs--;){

        prepend += ' ';

    }

    return content.replace(/(^|\n)/g, `$1${prepend}`);

};

let rmEndWrap = content => (content.replace(/\n$/, ''));

let extVueLayout = {
    color : (paramStr) => {

        return [
            '@name:色彩',
            [
                '#renderer',
                '>name',
                'color-repeat',
                '>rules',
                'color:theme',
                'color:feature',
                'color:black',
                'color:blue',
                'color:silver',
                'color:gray',
                '>tpl'
            ].concat(paramStr).join('\n')
        ];

    },
    size : (paramStr) => {

        return [
            '@name:尺寸',
            [
                '#renderer',
                '>name',
                'size-repeat',
                '>tpl'
            ].concat(paramStr).join('\n')
        ];

    },
    'state-na' : (paramStr) => {

        return [
            '@name:状态',
            [
                '#renderer',
                '>name',
                'state-repeat',
                '>rules',
                'normal,apparent',
                '>tpl'
            ].concat(paramStr).join('\n')
        ];

    },
    'lifecycle-event' : (paramStr) => {

        return [
            '@name:生命周期事件',
            [
                '#renderer',
                '>name',
                'lifecycle-event',
                '>rules',
            ].concat(paramStr).join('\n')
        ];

    }
};

let extVueRenderer = {
    'color-repeat' : (parts) => {

        let newParamStr = [];
        let colorTitleMap = {
            theme : '主题色彩',
            feature : '功能色彩',
            other : '辅助色彩'
        };
        let colorDescMap = {
            theme : '通过`color`来设置组件的主题色彩，可用色彩详见[形态/色彩/主题色](/guide/status.html#主题色)',
            feature : '通过`color`来设置组件的功能色彩，可用色彩详见[形态/色彩/功能色](/guide/status.html#功能色)',
            other : '通过`color`来设置组件的辅助色彩，可用色彩详见[形态/色彩/辅助色](/guide/status.html#辅助色)'
        };

        if (!parts.rules) {

            parts.rules = [
                'color:theme',
                'color:feature',
                'color:black',
                'color:blue',
                'color:silver',
                'color:gray'
            ];

        }

        for (let rule of parts.rules) {

            if (/^color/.test(rule)) {

                let color = rule.split(':')[1];
                let colorPreset = [
                    '#demo',
                    '>data',
                    color,
                    '>title',
                    (parts.title || colorTitleMap[color] || colorTitleMap.other),
                    '>desc',
                    (parts.desc || colorDescMap[color] || colorDescMap.other),
                    '>tpl'
                ];

                if (color === 'silver') {

                    colorPreset.push(`<div style="background: #626b75;border-color: #454d57;padding: 5px;">{$#${color}}\n${addSpace(rmEndWrap(parts.tpl.join('\n')), 4)}{$/${color}}\n</div>`);

                } else if (color === 'gray') {

                    colorPreset.push(`<div style="background:#676767;border-color: #494949;padding: 5px;">{$#${color}}\n${addSpace(rmEndWrap(parts.tpl.join('\n')), 4)}{$/${color}}\n</div>`);

                } else {

                    colorPreset.push(`<div>{$#${color}}\n${addSpace(rmEndWrap(parts.tpl.join('\n')), 4)}{$/${color}}\n</div>`);

                }
                
                newParamStr.push(colorPreset.join('\n'));

            }

        }

        return newParamStr;

    },
    'size-repeat' : (parts) => {

        let newParamStr = [];
        let sizeList;
        let sizeData = [];
        let sizePreset = [
            '#demo'
        ];

        if (parts.rules && parts.rules[0]) {

            sizeList = parts.rules[0];

        }

        if (sizeList === undefined) {

            sizePreset.push('>data');
            sizePreset.push('size');

        } else {

            sizeList = sizeList.split(',');

            for (let size of data.size) {

                if (sizeList.indexOf(size.sizeKey) !== -1) {

                    sizeData.push(size);

                }

            }

            sizePreset.push('>data-json');
            sizePreset.push(JSON.stringify({
                size : sizeData
            }));

        }

        sizePreset = sizePreset.concat([
            '>title',
            (parts.title || '尺寸'),
            '>desc',
            (parts.desc || '通过`size`来设置组件的尺寸，可用尺寸详见[形态/尺寸](/guide/status.html#尺寸)'),
            '>tpl',
            `<div>{$#size}\n${addSpace(rmEndWrap(parts.tpl.join('\n')), 4)}{$/size}\n</div>`
        ]);

        newParamStr.push(sizePreset.join('\n'));
        
        return newParamStr;

    },
    'state-repeat' : (parts) => {

        let newParamStr = [];
        let stateData = [];

        if (parts.rules[0] === 'all' || !parts.rules) {

            stateData = data.state;

        } else {

            let states = parts.rules[0].split(',');

            for (let state of data.state) {

                if (states.indexOf(state.stateKey) !== -1) {

                    stateData.push(state);

                }

            }

        }

        stateData = {
            state : stateData
        };

        let statePreset = [
            '#demo',
            '>data-json',
            JSON.stringify(stateData),
            '>title',
            (parts.title || '状态'),
            '>desc',
            (parts.desc || '通过`state`来设置组件的状态，可用状态详见[形态/状态](/guide/status.html#状态)'),
            '>tpl',
            `<div>{$#state}\n${addSpace(rmEndWrap(parts.tpl.join('\n')), 4)}{$/state}\n</div>`
        ];

        newParamStr.push(statePreset.join('\n'));
        
        return newParamStr;

    },
    'state-color-repeat' : (parts) => {

        let newParamStr = [];

        parts.rules = [
            'color:theme',
            'color:feature',
            'color:black',
            'color:blue',
            'color:silver',
            'color:gray'
        ];

        for (let rule of parts.rules) {

            if (/^color/.test(rule)) {

                let color = rule.split(':')[1];
                let colorPreset = [
                    '#demo',
                    '>data',
                    color,
                    '>data-json',
                    JSON.stringify({
                        state : data.state
                    }),
                    '>title',
                    (parts.title || '状态'),
                    '>desc',
                    (parts.desc || '通过`state`来设置组件的状态，可用状态详见[形态/状态](/guide/status.html#状态)'),
                    '>tpl'
                ];

                if (color === 'silver') {

                    colorPreset.push(`<div style="background: #626b75;border-color: #454d57;padding: 5px;">{$#${color}}{$#state}\n${addSpace(rmEndWrap(parts.tpl.join('\n')), 4)}{$/state}\n\n<br><br>\n{$/${color}}\n</div>`);

                } else if (color === 'gray') {

                    colorPreset.push(`<div style="background:#676767;border-color: #494949;padding: 5px;">{$#${color}}{$#state}\n${addSpace(rmEndWrap(parts.tpl.join('\n')), 4)}{$/state}\n\n<br><br>\n{$/${color}}\n</div>`);

                } else {

                    colorPreset.push(`<div>{$#${color}}{$#state}\n${addSpace(rmEndWrap(parts.tpl.join('\n')), 4)}{$/state}\n\n<br><br>\n{$/${color}}\n</div>`);

                }
                
                newParamStr.push(colorPreset.join('\n'));

            }

        }

        return newParamStr;

    },
    'lifecycle-event' : (parts) => {

        let key = parts.rules.shift();
        let name = parts.rules.shift();
        let slot = parts.rules;

        let newParamStr = [
            [
                `#event`,
                `>event-desc`,
                `组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。`
            ],
            [
                `#demo`,
                `>tpl`,
                `<div>`,
                `    <ui-${key}`,
                `        ref="demoEventLifecycle"`,
                `        v-show="show"`,
                `        @created="echo('created')"`,
                `        @mounted="echo('mounted')"`,
                `        @before-update="echo('before-update')"`,
                `        @updated="echo('updated')"`,
                `        @before-destroy="echo('before-destroy')"`,
                `        @destroyed="echo('destroyed')"`,
                `    >{*text*}</ui-${key}>`,
                ``,
                `   <br><br>`,
                ``,
                `    <ui-link js="this.text='生命周期事件';">触发update</ui-link>`,
                `    <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>`,
                `</div>`,
                `>script`,
                `{`,
                `    data : function () {`,
                `        return {`,
                `           text : '${name}',`,
                `           show : true`,
                `        };`,
                `    },`,
                `    methods : {`,
                `        echo : function (name) {`,
                `            console.log('demoEventLifecycle.console1', name + ' event!');`,
                `        }`,
                `    }`,
                `}`,
                ``
            ]
        ];

        if (slot[slot.length - 1] === '') {

            slot.pop();

        }

        if (slot.length > 0) {

            let oneSlot;

            newParamStr[1].splice(12, 1, '    >');
            newParamStr[1].splice(13, 0, `    </ui-${key}>`);

            while ((oneSlot = slot.pop()) !== undefined) {

                newParamStr[1].splice(13, 0, addSpace(oneSlot, 8));

            }

        }

        newParamStr[0] = newParamStr[0].join('\n');
        newParamStr[1] = newParamStr[1].join('\n');

        return newParamStr;

    },
    'value-type' : (parts) => {

        let key = parts.rules.shift();
        let name = parts.rules.shift();
        let type = parts.rules.shift() || 'default';
        let wrapStyle = parts.rules.shift() || '';
        let attrs = parts.rules.shift() || '';
        let slot = parts.rules.shift() || '';
        let typeData = data.formValueType[type];

        typeData = {
            types : typeData
        };

        let newParamStr = [
            [
                `#demo`,
                `>data-json`,
                JSON.stringify(typeData),
                `>desc`,
                `输入各种类型的表单值，${name}组件的值过滤。`,
                `>tpl`,
                `<div>{$#types}`,
                `    <div style="${wrapStyle}">`,
                `        <p>{$valueType}类型</p>`,
                `        <div>`,
                `            <ui-${key} ref="demoType{$valueType}" ${attrs}>${slot}</ui-${key}>`,
                `        </div>`,
                `        <br>`,
                `        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>`,
                `        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>`,
                `    </div>`,
                `    <br><br>`,
                `{$/types}</div>`
            ]
        ];

        newParamStr[0] = newParamStr[0].join('\n');

        return newParamStr;

    }
};

let extVueParser = {
    vars : data => {

        let vars = {};
        let line;
        let ctx;

        data = data.split('\n');

        while (line = data.shift()) {

            if (/^@/.test(line)) {

                let tokens = line.replace(/^@/, '').split(':');

                ctx = tokens.shift();

                if (tokens[0] === '') {

                    tokens.shift();

                }

                vars[ctx] = [tokens.join(':')];

            } else if (ctx) {

                vars[ctx].push(line);

            }

        }

        for (let key in vars) {

            vars[key] = vars[key].join('\n');

        }

        return vars;

    },
    section : data => {

        data = data.split('\n');

        return {
            type : data.shift().replace(/^\#/, ''),
            parts : extVueParser.part(data)
        };

    },
    part : data => {

        let typeMap = [
            'tpl',
            'title',
            'desc',
            'conf-desc',
            'conf-accept',
            'conf-type',
            'conf-default',
            'method-desc',
            'method-args',
            'method-return',
            'event-desc',
            'event-args',
            'script',
            'repeat',
            'rules',
            'name',
            'data',
            'data-json'
        ];
        let item;
        let curType;
        let parts = {};
        let partIndex = 0;

        while ((item = data.shift()) !== undefined) {

            let index = typeMap.indexOf(item.replace(/^\>/, ''));

            if (index !== -1 && /^\>/.test(item)) {

                curType = typeMap[index];
                parts[curType] = [];

            } else {

                if (curType) {

                    parts[curType].push(item);

                }

            }

        }

        return parts;

    }
};

let extVueTranslater = {
    _tpl : (_data, _ctx) => {

        if (!_data) {

            return {
                exec : '',
                print : '',
                live : ''
            };

        }

        _data = _data.join('\n');
        Mustache.parse(_data, ['{$', '}']);
        _data = Mustache.render(_data, _ctx);
        _data = _data.replace(/\{\*([a-zA-Z0-9_.]+)\*\}/g, '{{$1}}');

        let template = {
            exec : '',
            print : '',
            live : ''
        };

        template.exec = _data;
        template.print = addSpace(rmEndWrap(_data), 4).replace(/\{\{([a-zA-Z0-9_.]+)\}\}/g, '{*$1*}');
        template.live = _data.replace(/\n$/, '');
        template.live = addSpace(rmEndWrap(template.live), 4);
        template.live = `<div id="${_ctx.demoid}-el">\n${template.live}\n</div>`;

        return template;

    },
    _script : (_data, _ctx) => {


        if (!_data) {

            _data = ['{}'];

        }

        let exec = extend(true, [], _data);

        if (exec[exec.length - 1] === '') {

            exec.pop();

        }

        exec.shift();
        exec.pop();
        exec = exec.join('\n');

        let script = {};

        script.exec = `new Vue({
                id : '${_ctx.demoid}',
                el : '#${_ctx.demoid}-el',
                template : '#${_ctx.demoid}-tmpl',${exec}
            });`;

        if (exec.length > 0) {
            script.print = `    export default {\n${addSpace(rmEndWrap(exec), 4)}\n    };`;
        } else {
            script.print = `    export default {};`;
        }


        if (exec.length > 0) {
            script.live = `Vue.use(morning);\n\nnew Vue({\n    el : '#${_ctx.demoid}-el',\n${exec}\n});`;
        } else {
            script.live = `Vue.use(morning);\n\nnew Vue({\n    el : '#${_ctx.demoid}-el'\n});`;
        }

        Mustache.parse(script.exec, ['{$', '}']);
        Mustache.parse(script.print, ['{$', '}']);
        Mustache.parse(script.live, ['{$', '}']);
        script.exec = Mustache.render(script.exec, _ctx);
        script.print = Mustache.render(script.print, _ctx);
        script.live = Mustache.render(script.live, _ctx);

        script.exec = script.exec.replace(/\{\*([a-zA-Z0-9_.]+)\*\}/g, '{{$1}}');
        // script.print = script.print.replace(/\{\*([a-zA-Z0-9_.]+)\*\}/g, '{{$1}}');
        // script.print = addSpace(rmEndWrap(_data), 4).replace(/\{\{([a-zA-Z0-9_.]+)\}\}/g, '{*$1*}');
        script.live = script.live.replace(/\{\*([a-zA-Z0-9_.]+)\*\}/g, '{{$1}}');

        return script;

    },
    _title : (_data, _ctx) => {

        if (!_data) {

            return '';

        }
        
        _data = _data.join('\n');
        _data = markdown.render(_data);
        _data = _data.replace(/(^\<p\>|\<\/p\>)/g, '');

        return `<h5>${_data}</h5>`;

    },
    _desc : (_data, _ctx) => {

        if (!_data) {

            return '';

        }
        
        _data = _data.join('\n');
        _data = _data.replace(/\\n/g, '\n');
        _data = markdown.render(_data);

        return `<div>${_data}</div>`;

    },
    _conf_accept : (_data, _ctx) => {

        if (!_data) {

            return '|接受值|-|';

        }

        _data = _data.join('\n');
        _data = _data.replace(/\\n/g, '<br>');

        return `|接受值|${_data}|`;


    },
    _conf_type : (_data, _ctx) => {

        if (!_data) {

            return '|值类型|-|';

        }

        _data = _data.join('\n');
        _data = _data.replace(/\\n/g, '<br>');

        return `|值类型|${_data}|`;


    },
    _conf_default : (_data, _ctx) => {

        if (!_data) {

            return '|默认值|-|';

        }

        _data = _data.join('\n');
        _data = _data.replace(/\\n/g, '<br>');

        return `|默认值|${_data}|`;


    },
    _method_args : (_data, _ctx) => {

        if (!_data) {

            _data = `|参数|\n|-|\n|无参数|`;
            _data = markdown.render(_data);
            _data = _data.replace(/^<table/, '<table class="no-args" frame="void"');

            return _data;

        }

        _data = _data.join('\n');
        _data = `|KEY|可选|描述|接受值|值类型|默认值|\n|-|-|-|-|-|-|\n${_data}`;
        _data = markdown.render(_data);
        _data = _data.replace(/<thead>/, '<thead><tr><th colspan="6">参数</th></tr>');
        _data = _data.replace(/^<table/, '<table frame="void"');

        return _data;

    },
    _method_return : (_data, _ctx) => {

        if (!_data) {

            return '无返回值';

        }

        _data = _data.join('\n');
        _data = `|返回值|\n|-|\n|${_data}|`;
        _data = markdown.render(_data);
        _data = _data.replace(/^<table/, '<table frame="void"');

        return _data;

    },
    _event_args : (_data, _ctx) => {

        if (!_data) {

            _data = `|事件参数|\n|-|\n|无参数|`;
            _data = markdown.render(_data);
            _data = _data.replace(/^<table/, '<table class="no-args" frame="void"');

            return _data;

        }

        _data = _data.join('\n');
        _data = `|KEY|描述|值类型|\n|-|-|-|\n${_data}`;
        _data = markdown.render(_data);
        _data = _data.replace(/<thead>/, '<thead><tr><th colspan="3">参数</th></tr>');
        _data = _data.replace(/^<table/, '<table frame="void"');

        return _data;

    },
    demo : (_data, _ctx) => {

        if (_data.parts.data) {

            let mountData = _data.parts.data[0];

            _ctx[mountData] = data[mountData];

        }

        if (_data.parts['data-json']) {

            let mountData = JSON.parse(_data.parts['data-json'][0]);

            extend(_ctx, mountData);

        }

        return [{
            type : _data.type,
            tpl : extVueTranslater._tpl(_data.parts.tpl, _ctx),
            script : extVueTranslater._script(_data.parts.script, _ctx),
            title : extVueTranslater._title(_data.parts.title, _ctx),
            desc : extVueTranslater._desc(_data.parts.desc, _ctx)
        }];

    },
    renderer : (_data, _ctx) => {

        let paramStr = [];
        let unparseSection;
        let sections = [];
        let translateSection;
        let translate = [];
        let demoid;

        paramStr = extVueRenderer[_data.parts.name[0]](_data.parts);
        _ctx.index--;

        while (unparseSection = paramStr.shift()) {

            sections.push(extVueParser.section(unparseSection));

        }

        while (translateSection = sections.shift()) {

            _ctx.demoid = `${_ctx.oriDemoid}-${_ctx.index++}`;
            translate = translate.concat(extVueTranslater[translateSection.type](translateSection, _ctx));

        }

        return translate;

    },
    config : (_data, _ctx) => {

        return [{
            type : _data.type,
            desc : extVueTranslater._desc(_data.parts.desc, _ctx),
            'conf-desc' : extVueTranslater._desc(_data.parts['conf-desc'], _ctx),
            'conf-accept' : extVueTranslater._conf_accept(_data.parts['conf-accept'], _ctx),
            'conf-type' : extVueTranslater._conf_type(_data.parts['conf-type'], _ctx),
            'conf-default' : extVueTranslater._conf_default(_data.parts['conf-default'], _ctx)
        }];

    },
    method : (_data, _ctx) => {

        return [{
            type : _data.type,
            desc : extVueTranslater._desc(_data.parts.desc, _ctx),
            'method-desc' : extVueTranslater._desc(_data.parts['method-desc'], _ctx),
            'method-args' : extVueTranslater._method_args(_data.parts['method-args'], _ctx),
            'method-return' : extVueTranslater._method_return(_data.parts['method-return'], _ctx)
        }];

    },
    event : (_data, _ctx) => {

        return [{
            type : _data.type,
            desc : extVueTranslater._desc(_data.parts.desc, _ctx),
            'event-desc' : extVueTranslater._desc(_data.parts['event-desc'], _ctx),
            'event-args' : extVueTranslater._event_args(_data.parts['event-args'], _ctx)
        }];

    }
};

let extVueCompiler = {
    demo : (_data, _ctx) => {

        let printCode = `<template>\n${_data.tpl.print}\n</template>\n\n<script>\n${_data.script.print}\n<\/script>`;

        outputcode[_ctx.demoid] = printCode;

        let templateScript = document.createElement('script');

        templateScript.innerHTML = `\n${_data.tpl.exec}`;
        templateScript.type = 'x-template';
        templateScript.id = `${_ctx.demoid}-tmpl`;

        evals.push(templateScript);

        let scriptScript = document.createElement('script');

        scriptScript.innerHTML = _data.script.exec;
        evals.push(scriptScript);

        livedata[_ctx.demoid] = {
            js : _data.script.live,
            html : _data.tpl.live
        };

        return `
            <div class="section-demo">
                <div class="demo-con">
                    <div id="${_ctx.demoid}-el"></div>
                </div>
                <div class="code-con">
                    <div class="code">
                        <pre><code class="lang-html lang-vue">${_ctx.md.utils.escapeHtml(printCode)}</code></pre>
                        <div class="demo-tools">
                            <a href="javascript:;" class="live" demo-id="${_ctx.demoid}" id="live-demo-${_ctx.demoid}">
                                <i class="iconfont">&#xe616;</i>
                            </a>
                            <ui-tip color="extra-light-black" target="#live-demo-${_ctx.demoid}">在 JSFiddle 中查看</ui-tip>
                            <a href="javascript:;" class="copy" demo-id="${_ctx.demoid}" id="copy-demo-${_ctx.demoid}">
                                <i class="iconfont">&#xe632;</i>
                            </a>
                            <ui-tip id="copy-tip-${_ctx.demoid}" color="extra-light-black" target="#copy-demo-${_ctx.demoid}">复制代码</ui-tip>
                        </div>
                    </div>
                    <div class="note">${_data.title}${_data.desc}</div>
                </div>
            </div>
        `;

    },
    config : (_data, _ctx) => {

        let table = `|A|B|\n|-|-|\n${_data['conf-accept']}\n${_data['conf-type']}\n${_data['conf-default']}`;

        table = markdown.render(table);
        table = table.replace(/^<table/, '<table frame="void"');

        return `
            <div class="section-config">
                <div class="desc">${_data['conf-desc']}</div>
                <div class="config">${table}</div>
            </div>
        `;

    },
    method : (_data, _ctx) => {

        return `
            <div class="section-method">
                <div class="desc">${_data['method-desc']}</div>
                <div class="args-return">
                    ${_data['method-args']}
                    ${_data['method-return']}
                </div>
            </div>
        `;

    },
    event : (_data, _ctx) => {

        return `
            <div class="section-event">
                <div class="desc">${_data['event-desc']}</div>
                <div class="args-return">
                    ${_data['event-args']}
                </div>
            </div>
        `;

    }
};

let extVue = (content, paramStr, token, md) => {

    let demoid = `demo-${_.random(randomRangeMin, randomRangeMax)}`;
    let ctx = {
        _ctx : {
            demoid : '',
            oriDemoid : demoid,
            md,
            index : 0,
            paramStr
        }
    };

    if (paramStr.length > 1) {
        ctx._ctx.vars = extVueParser.vars(paramStr.shift());
    } else {
        ctx._ctx.vars = {};
    }

    if (ctx._ctx.vars.layout) {

        paramStr = extVueLayout[ctx._ctx.vars.layout](paramStr);
        ctx._ctx.vars = extVueParser.vars(paramStr.shift());
        delete ctx._ctx.vars.layout;

    }

    ctx.sections = [];

    while (ctx.unparseSection = paramStr.shift()) {

        ctx.sections.push(extVueParser.section(ctx.unparseSection));

    }

    ctx.translate = [];

    while (ctx.translateSection = ctx.sections.shift()) {

        ctx._ctx.demoid = `${demoid}-${ctx._ctx.index++}`;
        ctx.translate = ctx.translate.concat(extVueTranslater[ctx.translateSection.type](ctx.translateSection, ctx._ctx));

    }

    ctx.compiled = [];
    ctx._ctx.index = 0;

    while (ctx.compileSection = ctx.translate.shift()) {

        ctx._ctx.demoid = `${demoid}-${ctx._ctx.index++}`;
        ctx.compiled.push(extVueCompiler[ctx.compileSection.type](ctx.compileSection, ctx._ctx));

    }

    let name = ctx._ctx.vars.name;

    if (name) {
        
        name = markdown.render(name);
        name = name.replace(/(^\<p\>|\<\/p\>)/g, '');
        name = name.replace(/\n$/, '');

        return `
        <div class="demo-root">
            <h4 id="${name.replace(/(\<[\/]*\w+?\>|\]|\[|\}|\{|\>|\<|\)|\()/g, '-')}"><a href="#${name.replace(/(\<[\/]*\w+?\>|\]|\[|\}|\{|\>|\<|\)|\()/g, '-')}" aria-hidden="true" class="permalink">#</a> ${name}</h4>
            ${ctx.compiled.join('\n')}
        </div>
        `;

    } else {

        return `
        <div class="demo-root">
            ${ctx.compiled.join('\n')}
        </div>
        `;

    }

};

let extPreset = (content, paramStr) => {

    let vars = extVueParser.vars(content);
    let template = presets[vars.name];

    vars.formName = '表单名';
    vars.formKey = 'formKey';
    vars.formGroupOne = 'groupName'; 
    vars.formGroupMore = `['group1', 'group2', 'group3']`;

    Mustache.parse(template, ['{%', '%}']);
    template = Mustache.render(template, vars);

    return markdown.render(template);

};

let mdExtendPlugin = (md, opt) => {
    md.block.ruler.before('table', 'mdExtend', (state, startLine, endLine) => {

        // if it's indented more than 3 spaces, it should be a code block
        if (state.sCount[startLine] - state.blkIndent >= 4) {

            return false;

        }

        const charCode = 0x3A;

        let pos = state.bMarks[startLine] + state.tShift[startLine];
        let end = state.eMarks[startLine];
        let marker = state.src.charCodeAt(pos);
        let start,
            len,
            markup,
            method,
            nextLine,
            token,
            haveEndMarker;

        // 0x3a is :
        if (marker !== charCode) {

            return false;

        }

        // scan marker length
        start = pos;
        pos = state.skipChars(pos, marker);
        len = pos - start;
        markup = state.src.slice(start, pos);
        method = state.src.slice(pos, end);

        if (len !== 3) {

            return false;
        
        }

        nextLine = startLine;

        for (;;) {

            nextLine++;

            if (nextLine >= endLine) {

                // unclosed block should be autoclosed by end of document.
                // also block seems to be autoclosed by end of parent
                break;

            }

            pos = start = state.bMarks[nextLine] + state.tShift[nextLine];
            end = state.eMarks[nextLine];

            if (pos < end && state.sCount[nextLine] < state.blkIndent) {
                
                // non-empty line with negative indent should stop the list:
                // - ```
                //  test
                break;
            
            }

            /* eslint-disable no-continue */
            if (state.src.charCodeAt(pos) !== marker) {

                continue;

            }

            if (state.sCount[nextLine] - state.blkIndent >= 4) {
                
                // closing fence should be indented less than 4 spaces
                continue;
        
            }

            pos = state.skipChars(pos, marker);

            // closing code fence must be at least as long as the opening one
            if (pos - start < len) {

                continue;

            }

            // make sure tail has spaces only
            pos = state.skipSpaces(pos);

            if (pos < end) {

                continue;

            }

            /* eslint-enable no-continue */

            haveEndMarker = true;

            break;

        }

        len = state.sCount[startLine];
        state.line = nextLine + (haveEndMarker ? 1 : 0);

        token = state.push('extMethod', 'div', 1);
        token.method = method.split('/')[0];
        token.lang = method.split('/')[1];
        token.content = state.getLines(startLine + 1, nextLine, len, true);
        token.markup = markup;
        token.map = [startLine, state.line];

        return true;

    });

    md.renderer.rules.extMethod = (tokens, idx) => {

        let token = tokens[idx];
        let method = token.method;
        let list = token.content.split('\n---\n');
        let paramStr = '';
        let content;
        let result = '';

        if (method !== 'vue') {

            if (list.length > 1) {

                paramStr = list.shift();

            }

            content = list.join('\n---\n');

            paramStr = paramStr.split('\n');

        } else {

            paramStr = list;

        }

        if (method === 'democode') {

            result = `
            <div class="demo-box">
                <div class="demo">${content}</div>
                <div class="code">
                    <pre><code class="lang-${token.lang}">${md.utils.escapeHtml(content)}</code></pre>
                </div>
            </div>\n`;

        }

        if (method === 'vue') {

            result = extVue(content, paramStr, token, md);

        }

        if (method === 'preset') {

            result = extPreset(content, paramStr);

        }

        return result;

    };

};

markdown.use(mdExtendPlugin);

window.Vue.component('doc-component-status', DocComponentStatus);

window.Vue.directive('docmd', {
    bind : el => {

        let mdScript = el.getElementsByTagName('script')[0];

        if (mdScript && mdScript.type === 'text/markdown') {

            let text = mdScript.innerText;
            
            /* eslint-disable no-useless-escape */
            text = text.replace(/&lt;\/script>/g, '\<\/script>');
            /* eslint-enable no-useless-escape */

            text = text.replace(/\/`/g, '`');

            // let tree = parser(text, el);
            // text = runner(tree);

            let md = markdown.render(text);
            
            md = md.replace(/\\`/g, '`');
            
            md = md.replace(/\{\*([a-zA-Z0-9_.]+)\*\}/g, '{{"\\{\\{$1\\}\\}"}}');
            md = md.replace(/<p>(\[\[\[(.+)\]\]\])<\/p>/g, '$1');
            md = md.replace(/(\[\[\[)/, '<ui-tab class="block noborder no-padding" anchor-target>$1');
            md = md.replace(/\[\[\[开始\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="开始"><div class="content-title">开始</div>$1</div>$3');
            md = md.replace(/\[\[\[形态\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="形态"><div class="content-title">形态</div>$1</div>$3');
            md = md.replace(/\[\[\[配置\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="配置"><div class="content-title">配置</div>$1</div>$3');
            md = md.replace(/\[\[\[方法\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="方法"><div class="content-title">方法</div>$1</div>$3');
            md = md.replace(/\[\[\[事件\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="事件"><div class="content-title">事件</div>$1</div>$3');
            md = md.replace(/\[\[\[表单值\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="表单值"><div class="content-title">表单值</div>$1</div>$3');
            // window.location.search !== \'?istest\'
            // cause: e2e test use chrome 59, if both has vue and iframe, get a bug.(when version update may remove this code)
            md = md.replace(/\[\[\[源码\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="源码"><div class="content-title">源码</div><div v-if="window.location.search !== \'?istest\'">$1</div></div>$3');
            md = md.replace(/(.|\n)$/, '$1</ui-tab>');

            md = md.replace(/<p>---demostart---<\/p>/g, '<div class="demo-area"><p class="demo-title">DEMO</p>');
            md = md.replace(/<p>---demoend---<\/p>/g, '\n</div>');

            let res = window.Vue.compile(`<div>${md}</div>`);
            let instance = new window.Vue({
                render : res.render,
                staticRenderFns : res.staticRenderFns,
                data : {
                    window : window
                }
            });

            instance.$mount();
            el.appendChild(instance.$el);

        }

    }
});

export default {
    props : {
        category : String,
        page : String,
        hasPadding : Boolean
    },
    data : function () {

        return {};

    },
    components : {
        'doc-header' : DocHeader,
        'doc-submenu' : DocSubmenu,
        'doc-footer' : DocFooter
    },
    mounted : function () {

        hljs.initHighlightingOnLoad();

        for (let js of evals) {

            document.body.appendChild(js);

        }

        let $demos = document.querySelectorAll('.demo');

        $demos.forEach(($demo, i) => {

            $demo.style.zIndex = 9 + $demos.length - i;

        });

    },
    methods : {
        onClick : function (event) {

            let $target;
            let type;

            const copyShowtime = 1500;

            if (event.target &&
                event.target.parentElement &&
                event.target.parentElement.classList.value.indexOf('copy') !== -1) {

                $target = event.target.parentElement;
                type = 'copy';

            } else if (event.target &&
                event.target.parentElement &&
                event.target.parentElement.classList.value.indexOf('live') !== -1) {

                $target = event.target.parentElement;
                type = 'live';

            } else if (event.target &&
                event.target.classList.value.indexOf('copy') !== -1) {

                $target = event.target.parentElement;
                type = 'copy';

            } else if (event.target &&
                event.target.classList.value.indexOf('live') !== -1) {

                $target = event.target.parentElement;
                type = 'live';

            }

            if ($target && type) {

                let demoid = $target.getAttribute('demo-id');

                if (type === 'live') {

                    this.showJsfiddle(livedata[demoid]);

                } else if (type === 'copy') {

                    copy(outputcode[demoid]);
                    window.morning.findVM('copied').push({
                        message : '<span style=\'display:inline-block;text-align:center;\'><i class=\'mo-icon mo-icon-check\' style=\'font-size:13px;vertical-align:top;margin-right:4px;\'></i> 已复制</span>',
                        color : 'success'
                    });

                }

            }

        },
        showJsfiddle : function (data) {

            let form = document.createElement("form");
            
            form.setAttribute('method', 'post');
            form.setAttribute('action', 'http://jsfiddle.net/api/post/library/pure/');
            form.setAttribute("target", "_blank");

            let fieldPanelJs = document.createElement("textarea");
            let fieldResources = document.createElement("textarea");
            let fieldHtml = document.createElement("textarea");
            let fieldJs = document.createElement("textarea");
            let fieldWrap = document.createElement("textarea");

            fieldPanelJs.setAttribute('name', 'panel_js');
            fieldPanelJs.value = '0';
            fieldResources.setAttribute('name', 'resources');
            fieldResources.value = 'https://cdn.jsdelivr.net/npm/vue@2.5.17,https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.js,https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.css,https://morning-ui.com/iconfont.woff';
            fieldHtml.setAttribute('name', 'html');
            fieldHtml.value = data.html;
            fieldJs.setAttribute('name', 'js');

            if (window.demodata) {

                fieldJs.value = `// demo data\nwindow.demodata = ${JSON.stringify(window.demodata, null, '    ')}\n\n${data.js}`;

            } else {

                fieldJs.value = `${data.js}`;
    
            }

            fieldWrap.setAttribute('name', 'wrap');
            fieldWrap.value = 'd';

            form.appendChild(fieldPanelJs);
            form.appendChild(fieldResources);
            form.appendChild(fieldHtml);
            form.appendChild(fieldJs);
            form.appendChild(fieldWrap);
            document.body.appendChild(form);       
            form.submit();
            form.remove();

        }
    }
};
</script>

<style lang="less">
@import '~github-markdown-css';
@import '~Npm/highlight.js/styles/hopscotch.css';
@import '~Docs/common/common.less';
@import '~Docs/common/markdown.less';
@import '~Docs/common/highlight.less';

a{ }

.body {
    width: 1100px;
    margin: 0 auto;
    font-size: 0;
}

.contents{
    > .item > div{
        > h4,
        > p,
        > table{
            padding-left: 12px;
        }

        > ul,
        > ol{
            padding-left: ~'calc(2em + 14px)';
        }
    }
}

.content {
    width: 900px;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    box-sizing: border-box;

    div > h1 > code{
        vertical-align: 6px;
    }

    &.padding {
        padding: 50px;
    }

    .content-title{
        display: none;
    }

    .permalink{
        color: #9F9F9F;
        transform: scale(0.9);
        display: inline-block;
        transform-origin: bottom;
        margin-right: -0.15em;
    }
}

.demo-root{
    border: 1px #E9ECEF solid;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    font-size: 0;
    margin: 20px 0 40px 0;

    &:hover{
        box-shadow: 0 0 8px rgba(194, 204, 212, 0.42);
        border: 1px #e3e8ea solid;
    }

    > h4{
        margin: 0;
        padding: 8px 12px;
        background: #f6f8fa;
        font-size: 18px;

        > code{
            vertical-align: middle;
        }
    }

    .section-demo,
    .section-config,
    .section-method,
    .section-event{
        border-top: 4px #E9ECEF solid;

        &:first-child{
            border-top: none;
        }

        &:nth-child(2){
            border-top: 2px #E9ECEF solid;
        }
    }

    .section-demo{
        .demo-con{
            padding: 20px 10px;
            position: relative;
            display: block;
            background: #fff;
            margin: 0;
            border-bottom: 1px #E9ECEF dashed;
            font-size: 14px;
        }

        .code-con{
            position: relative;
            display: flex;

            > .code{
                background-color: #F6F8FA;
                width: 100%;
                margin: 0;
                border-radius: 0;
                vertical-align: top;
                display: block;
                position: relative;

                > pre{
                    font-size: 12px;
                    margin: 0;
                }

                > .demo-tools{
                    position: absolute;
                    right: 0;
                    top: 23px;
                    width: 16px;
                    line-height: 1.5em;
                    font-size: 13px;
                    padding-right: 8px;
                    box-sizing: content-box;

                    > a{
                        color: #83888e;
                        text-decoration: none;

                        &:hover{
                            text-decoration: none;
                            color: #18191b;
                        }
                    }
                }
            }

            > .note{
                width: 50%;
                display: block;
                border: none;
                vertical-align: top;
                box-sizing: border-box;
                border-left: 1px #e5e9ec dashed;

                &:empty{
                    display: none;
                    width: 0;
                }

                > h5{
                    margin: 0;
                    padding: 14px 14px 0 14px;
                    font-size: 14px !important;
                    color: #45505C;
                    font-weight: 700;

                    &:empty{
                        display: none;
                    }
                }

                > div{
                    padding: 14px;
                    margin: 0;
                    font-size: 13px;

                    p {
                        margin: 0;
                    }
                }
            }
        }
    }

    .section-config,
    .section-method,
    .section-event{
        min-height: 100px;
        font-size: 14px;
        padding: 0;
        display: flex;

        .config,
        .args-return{
            width: 35%;

            table{
                margin: 0;
                display: table;
                font-size: 12px;
                
                thead{
                    display: none;
                }

                tr:first-child{
                    td{
                        border-top: none;
                    }
                }

                tr:last-child{
                    td{
                        border-bottom: none;
                    }
                }

                th,
                td{
                    padding: 10px 15px;
                    border-right: 1px solid #e5e9ec;
                    border-bottom: 1px solid #e5e9ec;

                    &:first-child{
                        border-left: 1px solid #e5e9ec;
                        white-space: nowrap;
                        background: #f6f8fa;
                    }

                    &:last-child{
                        border-right: none;
                    }
                }

                tr:nth-child(2n){
                    background: #fff !important;
                }
            }
        }

        .desc{
            width: 65%;
            box-sizing: border-box;
            border-right: 1px #e5e9ec solid;
            padding: 10px;

            table{
                margin: 0;
                display: table;
                font-size: 12px;

                tbody{
                    td{
                        padding: 3px 5px;
                    }

                    td:nth-child(2){
                        word-break: break-word;
                    }
                }
            }

            > div{
                margin: 0;

                p {
                    margin: 0;
                }
            }
        }
    }

    .section-method,
    .section-event{
        .args-return{
            width: 65%;
            
            table{
                thead{
                    display: table-header-group;
                }

                tr:first-child > th:first-child{
                    font-size: 14px;
                }

                th,
                td{
                    padding: 4px;
                }
            }

            table:first-child > thead > tr:nth-child(2) > th{
                white-space: nowrap;
            }

            table + table{
                border-top: 1px #e5e9ec solid;
            }

            table + table,
            table.no-args{
                td{
                    background: #fff !important;
                    text-align: center;
                }
            }
        }

        .desc{
            width: 35%;
        }
    }

    .section-event{
        .args-return{
            width: 50%;
        }

        .desc{
            width: 50%;
        }
    }
}

.demo-box{
    border: 1px #E9ECEF solid;
    border-radius: 3px;
    overflow: hidden;
    position: relative;

    &:hover{
        box-shadow: 0 0 8px rgba(194, 204, 212, 0.42);
        border: 1px #e3e8ea solid;
    }

    .demo{
        margin: 0;
        position: relative;
        display: block;
        background: #fff;
        padding: 10px;
        border-bottom: 1px #E9ECEF solid;
    }

    .code{
        font-size: 0;

        > pre{
            background-color: #F6F8FA;
            font-size: 12px;
            width: 100%;
            margin: 0;
            border-radius: 0;
            vertical-align: top;
            display: block;
        }

        > .note{
            display: none;
        }
    }
}

// .demo{
//     padding: 10px;
//     box-sizing: border-box;
//     border: 1px #F1F4F6 solid;
//     border-radius: 3px 3px 0 0;
//     z-index: 9;
//     position: relative;

//     &+pre{
//         border-radius: 0 0 3px 3px;
//     }

//     mor-btn{
//         vertical-align: top; 
//     }
// }
</style>
