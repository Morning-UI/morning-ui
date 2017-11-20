<template>
    <div>
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
        </div>
        <doc-footer></doc-footer>
    </div>
</template>

<script>
import MarkdownIt                   from 'markdown-it';
import Anchor                       from 'markdown-it-anchor';
import extend                       from 'extend';
import Mustache                     from 'mustache';
import _                            from 'underscore';
import hljs                         from 'highlight.js';
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocFooter                    from 'Docs/common/DocFooter.vue';
import DocSubmenu                   from 'Docs/common/DocSubmenu.vue';
import DocComponentStatus           from 'Docs/common/DocComponentStatus.vue';

const randomRangeMin = 1e3;
const randomRangeMax = 9e3;

const markdown = new MarkdownIt({
    html : true
});

markdown.use(Anchor, {
    level : [3, 4],
    slugify : s => (s.replace(/[^a-zA-Z0-9-_\u4e00-\u9fa5]/g, '')),
    permalink : true,
    permalinkBefore : true,
    permalinkClass : 'permalink',
    permalinkSymbol : '#'
});

let evals = [];

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
            stateKey : 'apparent',
            stateName : '醒目'
        }
    ],
    formConfig : {
        formName : '表单名',
        formKey : 'formKey',
        formGroupOne : 'groupName'
    },
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
                valueContent : '{\'Tim\':\'Tim\'}'
            },
            {
                valueType : 'Array',
                valueContent : '[\'Tim Boelaars\', \'Andrew Colin Beck\']'
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
        ]
    }
};

let repeater = {
    size : _opt => {

        _opt.content = `{$#size}${_opt.content}{$/size}`;
        _opt.context = extend(true, _opt.context, {
            size : data.size
        });

        return _opt;

    },
    color : _opt => {

        let color = _opt.param;

        _opt.content = `{$#${color}}${_opt.content}{$/${color}}`;
        _opt.context = extend(true, _opt.context, {
            [color] : data[color]
        });

        if (color === 'silver') {

            _opt.style.push('background: #626b75;border-color: #454d57');

        } else if (color === 'gray') {

            _opt.style.push('background:#676767;border-color: #494949');

        }

        return _opt;

    },
    state : _opt => {

        if (_opt.param === undefined) {
            
            _opt.param = 'all';

        }

        let states = _opt.param.split(',');

        if (states.length > 0 &&
            states.indexOf('all') === -1) {

            let sna = [];

            for (let state of data.state) {

                if (states.indexOf(state.stateKey) !== -1) {

                    sna.push(state);

                }

            }

            _opt.context = extend(true, _opt.context, {
                state : sna
            });

        } else if (states[0] === 'all') {

            _opt.context = extend(true, _opt.context, {
                state : data.state
            });

        }

        // if (typeof opt.content === 'string') {

        _opt.content = `{$#state}${_opt.content}{$/state}`;

        // } else if (typeof opt.contnet === 'object') {

        //     for (let key in opt.content) {
                    
        //         opt.content[key] = `{$#state}${opt.content[key]}\n{$/state}`;
                
        //     }

        // }

        return _opt;

    },
    br : _opt => {

        let num = +_opt.param || 1;
        let brs = '';

        while (num--) {

            brs += '<br/>';

        }

        _opt.content = `${_opt.content}\n${brs}\n`;

        return _opt;

    },
    formConfig : _opt => {

        _opt.content = `{$#formConfig}${_opt.content}\n{$/formConfig}`;
        _opt.context = extend(true, _opt.context, {
            formConfig : data.formConfig
        });

        return _opt;

    },
    formValueType : _opt => {

        let key = _opt.param || 'default';

        _opt.content = `{$#formValueType.${key}}${_opt.content}\n{$/formValueType.${key}}`;
        _opt.context = extend(true, _opt.context, {
            formValueType : data.formValueType
        });

        return _opt;

    }
};

let presets = {
    statusColor : `
:::repeat/html
color:theme
color:feature
color:black
color:blue
color:silver
color:gray
---
<ui-{%uikey%} color="{$colorKey}">{$&colorName}</ui-{%uikey%}>
:::
`,
    formStatus : `
#### 支持

|类型|支持|默认|
|-|-|-|
|尺寸|不支持|-|
|色彩|不支持|-|
|状态|\`normal\`<br/>\`disabled\`|\`normal\`|

<a href="/guide/status.html">查看形态文档</a>

#### 状态

:::repeat/html
state:normal,disabled
---
<div style="width:300px;">
    <ui-{%uikey%} state="{$stateKey}" :default-value="{%&statusDefaultValue%}" form-name="{$&stateName}" {%&statusMoreAttr%}>{%&statusSlot%}</ui-{%uikey%}>
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
|状态|\`normal\`<br/>\`disabled\`|\`normal\`|

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
<div style="width:300px;">
    <ui-{%uikey%} color="{$colorKey}" :default-value="{%&statusDefaultValue%}" form-name="{$&colorName}" {%&statusMoreAttr%}>{%&statusSlot%}</ui-{%uikey%}>
</div>
<br>
:::

#### 状态

:::repeat/html
state:normal,disabled
---
<div style="width:300px;">
    <ui-{%uikey%} state="{$stateKey}" :default-value="{%&statusDefaultValue%}" form-name="{$&stateName}" {%&statusMoreAttr%}>{%&statusSlot%}</ui-{%uikey%}>
</div>
<br>
:::
`,
    formConfigDemo : `
#### form-name

:::repeat/html
formConfig
---
<div style="width:300px;">
    <ui-{%uikey%} form-name="{$formName}" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>
</div>
:::

#### form-key

:::repeat/html
formConfig
---
<div style="width:300px;">
    <ui-{%uikey%} form-name="{$formName}" form-key="{$formKey}" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>
</div>
:::

#### group

设置单个组：

:::repeat/html
formConfig
---
<div style="width:300px;">
    <!-- 设置单个组 -->
    <ui-{%uikey%} form-name="{$formName}" form-key="{$formKey}" group="{$formGroupOne}" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>
</div>
:::

设置多个组：

:::repeat/html
formConfig
---
<div style="width:300px;">
    <!-- 设置多个组 -->
    <ui-{%uikey%} form-name="{$formName}" form-key="{$formKey}" :group="['group1', 'group2', 'group3']" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>
</div>
:::

#### default-value

:::repeat/html
formConfig
---
<div style="width:300px;">
    <ui-{%uikey%} form-name="{$formName}" :default-value="{%&configDefaultValue%}" {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>
</div>
:::

#### hide-name

隐藏后表单默认位置的名字不会显示，可以在其他地方设置表单名。

:::repeat/html
formConfig
---
<div style="width:300px;">
    <p>{$formName}</p>
    <ui-{%uikey%} form-name="{$formName}" hide-name {%&configMoreAttr%}>{%&configSlot%}</ui-{%uikey%}>
</div>
:::
    `,
    formConfigTable : `
|KEY|描述|接受值|值类型|默认值|
|-|-|-|-|-|
|form-name|表单的名称（用于显示）|任意字符串|String|\`undefined\`|
|form-key|表单的Key（用于逻辑中作为识别标示）|任意字符串(唯一)|String|\`undefined\`|
|group|表单组，用于将多个表单的数值添加到同一个对象中。一个表单可以同时属于多个组|若是字符串，则将表单添加到单个组<br>若是数组，则将表单添加到多个组|String<br/>Array|\`[]\`|
|default-value|表单的默认值(注意：\`default-value\`不支持单向数据流，此配置仅在表单初次创建时生效，修改表单值需要使用\`set()\`方法或使用\`v-model\`指令， 详见：[表单数据双向绑定](/guide/form.html#表单数据双向绑定))|任意(接受表单原始数值，也接受JSON序列化后的表单数值，若数值是JSON序列化的会自动转换成原始数值)|Any|\`undefined\`|
|hide-name|隐藏表单名|\`true\`<br>\`false\`|Boolean|\`false\`|
{%&content%}
`,
    formMethod : `
#### set([value])

设置表单的值。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|value|YES|需要设置表单的值，如果需要清空表单的值，可以不传此参数。|接受任何数值。<br/>\`undefined\`:清空表单的值<br>原始值:表单的原始值，根据表单不同可以是字符串、对象、数组等<br>JSON数值:表单原始值JSON序列化后的值，传入后表单会自动解析并还原原始值。|Any|\`undefined\`|

:::democode/html
<div style="width:300px;">
    <ui-{%uikey%} ref="demoMethodSet" form-name="表单名" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>
    <br>
    <ui-link js="window.morning.findVM('demoMethodSet').set({%&methodValue%})">设置值</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSet').set()">移除值</ui-link>
</div>
:::

#### get()

获取表单的原始值。

:::democode/html
<div style="width:300px;">
    <ui-{%uikey%} ref="demoMethodGet" form-name="表单名" :default-value="{%&methodDefaultValue%}" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>
    <br>
    <ui-link js="console.log(window.morning.findVM('demoMethodGet').get())">获取表单原始值</ui-link>
</div>
:::

#### getJson()

获取表单值的JSON序列化字符串。若你需要和其他程序进行数据交互，使用JSON是一种较好的方法。

:::democode/html
<div style="width:300px;">
    <ui-{%uikey%} ref="demoMethodGetJson" form-name="表单名" :default-value="{%&methodDefaultValue%}" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>
    <br>
    <ui-link js="console.log(window.morning.findVM('demoMethodGetJson').getJson())">获取表单值的JSON序列化字符串</ui-link>
</div>
:::

#### setName([name])

设置表单的名称。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|name|YES|需要设置表单的名称，如果需要清空表单的名称，可以不传此参数。|任意字符串|String|\`undefined\`|

:::democode/html
<div style="width:300px;">
    <ui-{%uikey%} ref="demoMethodSetName" form-name="姓名" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(window.morning.findVM('demoMethodSetName').getName())">获取表单名称</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetName').setName('年龄')">设置表单名称</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetName').setName()">移除表单名称</ui-link>
</div>
:::

#### getName()

获取表单的名称。

:::democode/html
<div style="width:300px;">
    <ui-{%uikey%} ref="demoMethodGetName" form-name="姓名" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(window.morning.findVM('demoMethodGetName').getName())">获取表单名称</ui-link>
</div>
:::

#### setKey([key])

设置表单的KEY。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|key|YES|需要设置表单的KEY，如果需要清空表单的KEY，可以不传此参数。|任意字符串|String|\`undefined\`|

:::democode/html
<div style="width:300px;">
    <ui-{%uikey%} ref="demoMethodSetKey" form-name="表单名" form-key="name" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(window.morning.findVM('demoMethodSetKey').getKey())">获取表单KEY</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetKey').setKey('age')">设置表单KEY</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetKey').setKey()">移除表单KEY</ui-link>
</div>
:::

#### getKey()

获取表单的KEY。

:::democode/html
<div style="width:300px;">
    <ui-{%uikey%} ref="demoMethodGetKey" form-name="表单名" form-key="name" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(window.morning.findVM('demoMethodGetKey').getKey())">获取表单KEY</ui-link>
</div>
:::

#### setGroup([groups])

设置表单所属的表单组。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|groups|YES|需要设置的表单组。如果需要清空所有表单组，可以不传此参数。|\`undefined\`:清空所有表单组<br>String:设置一个表单组<br>Array:设置多个表单组。|String<br>Array<br>Undefined|\`undefined\`|

:::democode/html
<div style="width:300px;">
    <!-- 设置多个组 -->
    <ui-{%uikey%} ref="demoMethodSetGroup" form-name="表单名" form-key="name" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(JSON.stringify(window.morning.findVM('demoMethodSetGroup').getGroup()))">获取表单组</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetGroup').setGroup('group1')">设置单个表单组</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetGroup').setGroup(['group1', 'group2'])">设置多个表单组</ui-link>
    <ui-link js="window.morning.findVM('demoMethodSetGroup').setGroup()">移除所有表单组</ui-link>
</div>
:::

#### getGroup()

获取表单所属的表单组。

:::democode/html
<div style="width:300px;">
    <!-- 设置多个组 -->
    <ui-{%uikey%} ref="demoMethodGetGroup" form-name="表单名" form-key="name" group="group1" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(JSON.stringify(window.morning.findVM('demoMethodGetGroup').getGroup()))">获取表单组</ui-link>
</div>
:::

#### addGroup(group)

添加一个指定的表单组。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|group|NO|添加表单组的KEY|表单组的KEY|String|\`undefined\`|

:::democode/html
<div style="width:300px;">
    <!-- 设置多个组 -->
    <ui-{%uikey%} ref="demoMethodAddGroup" form-name="表单名" form-key="name" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(JSON.stringify(window.morning.findVM('demoMethodAddGroup').getGroup()))">获取表单组</ui-link>
    <ui-link js="window.morning.findVM('demoMethodAddGroup').addGroup('group1')">添加表单组</ui-link>
</div>
:::

#### removeGroup(group)

移除一个指定的表单组。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|group|NO|移除表单组的KEY|表单组的KEY|String|\`undefined\`|

:::democode/html
<div style="width:300px;">
    <!-- 设置多个组 -->
    <ui-{%uikey%} ref="demoMethodRemoveGroup" form-name="表单名" form-key="name" group="group1" {%&methodMoreAttr%}>{%&methodSlot%}</ui-{%uikey%}>
    <br>
    <ui-link js="alert(JSON.stringify(window.morning.findVM('demoMethodRemoveGroup').getGroup()))">获取表单组</ui-link>
    <ui-link js="window.morning.findVM('demoMethodRemoveGroup').removeGroup('group1')">移除表单组</ui-link>
</div>
:::
    `,
    formEvent : `
#### value-change

当表单值变化时触发。

:::vue/html
new Vue({
    el : '{$el}',
    template : '{$template}',
    methods : {
        echo : function () {
            console.log('demoValueChange.console1', 'value-change event!');
        }
    }
});
---
<div style="width:300px;">
    <ui-{%uikey%} ref="demoValueChange" form-name="表单名" @value-change="echo" {%&eventMoreAttr%}>{%&eventSlot%}</ui-{%uikey%}>
    <br>
    <ui-link js="window.morning.findVM('demoValueChange').set({%&eventValue%})">触发value-change事件</ui-link>
</div>
:::

#### 生命周期事件

:::vue/html
window.demoEventLifecycle = new Vue({
    el : '{$el}',
    template : '{$template}',
    data : function () {
        return {
           text : '按钮',
           show : true
        };
    },
    methods : {
        echo : function (name) {
            console.log('demoEventLifecycle.console1', name + ' event!');
        }
    }
});
---
<div style="width:300px;">
    <ui-{%uikey%}
        ref="demoEventLifecycle"
        form-name="表单名"
        v-show="show"
        @created="echo('created')"
        @mounted="echo('mounted')"
        @before-update="echo('before-update')"
        @updated="echo('updated')"
        @before-destroy="echo('before-destroy')"
        @destroyed="echo('destroyed')"
        {%&eventMoreAttr%}
    >{%&eventSlot%}<span style="display:none;">{*text*}</span></ui-{%uikey%}>

    <br><br>

    <ui-link js="javascript:window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
    <ui-link js="javascript:morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
</div>
:::
`
};

let extRepeat = (content, paramStr, token, md) => {

    let params = {};

    params.list = [];

    for (let item of paramStr) {

        item = item.split('|');

        params.list.push(item);

    }

    let fullContent = '';

    for (let item of params.list) {

        let _opt = {
            content,
            context : {},
            style : []
        };

        for (let sitem of item) {

            _opt.param = undefined;

            if (sitem === 'size') {

                repeater.size(_opt);

            } else if (/^color/.test(sitem)) {

                _opt.param = sitem.split(':')[1];
                repeater.color(_opt);

            } else if (/^state/.test(sitem)) {

                _opt.param = sitem.split(':')[1];
                repeater.state(_opt);

            } else if (/^br/.test(sitem)) {

                _opt.param = sitem.split(':')[1];
                repeater.br(_opt);

            } else if (/^formConfig/.test(sitem)) {

                repeater.formConfig(_opt);

            } else if (/^formValueType/.test(sitem)) {

                _opt.param = sitem.split(':')[1];
                repeater.formValueType(_opt);

            }

        }

        Mustache.parse(_opt.content, ['{$', '}']);

        let renderContent = Mustache.render(_opt.content, _opt.context);

        fullContent += `<div class="demo" style="${_opt.style.join('')}">${renderContent}</div><pre><code class="lang-${token.lang}">${md.utils.escapeHtml(renderContent)}</code></pre>\n`;

    }

    return fullContent;

};

let extVue = (content, paramStr, token, md) => {

    let js = paramStr.join('\n');
    let html = content;
    let demoid = `demo-${_.random(randomRangeMin, randomRangeMax)}`;
    let context = {
        id : demoid,
        el : `#${demoid}-el`,
        template : `#${demoid}-tmpl`
    };
    let code,
        demo;

    Mustache.parse(js, ['{$', '}']);
    js = Mustache.render(js, context);

    Mustache.parse(html, ['{$', '}']);
    html = Mustache.render(html, context);

    code = `<div id="${demoid}-el"><!-- ${demoid} 容器 --></div>\n\n`;
    demo = `<div id="${demoid}-el"></div>`;

    let htmlScript = document.createElement('script');

    htmlScript.innerHTML = `\n${html}`;
    htmlScript.type = 'x-template';
    htmlScript.id = `${demoid}-tmpl`;

    code += `${htmlScript.outerHTML}\n\n`;

    htmlScript.innerHTML = htmlScript.innerHTML.replace(/\{\*([a-zA-Z0-9_.]+)\*\}/g, '{{$1}}');
    evals.push(htmlScript);

    let jsScript = document.createElement('script');

    jsScript.innerHTML = `\n${js}\n`;
    evals.push(jsScript);
    code += jsScript.outerHTML;

    return `<div class="demo">${demo}</div><pre><code class="lang-${token.lang}">${md.utils.escapeHtml(code)}</code></pre>\n`;

};

let extPreset = (content, paramStr) => {

    let context = {
        content : content
    };
    let template = presets[paramStr[0]];

    content = content.split('\n');

    for (let item of content) {
        
        if (item) {

            item = item.split(':');
            context[item.shift()] = item.join(':');

        }

    }

    Mustache.parse(template, ['{%', '%}']);
    template = Mustache.render(template, context);

    return markdown.render(template);

};

let demoWithCodePlugin = (md, opt) => {
    md.block.ruler.before('table', 'codeWithDemo', (state, startLine, endLine) => {

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

        if (list.length > 1) {

            paramStr = list.shift();

        }

        content = list.join('\n---\n');

        paramStr = paramStr.split('\n');

        if (method === 'democode') {

            result = `<div class="demo">${content}</div><pre><code class="lang-${token.lang}">${md.utils.escapeHtml(content)}</code></pre>\n`;

        }

        if (method === 'repeat') {

            result = extRepeat(content, paramStr, token, md);

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

markdown.use(demoWithCodePlugin);

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
            md = md.replace(/(\[\[\[)/, '<ui-tab class="block noborder">$1');
            md = md.replace(/\[\[\[开始\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="开始"><div class="content-title">开始</div>$1</div>$3');
            md = md.replace(/\[\[\[形态\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="形态"><div class="content-title">形态</div>$1</div>$3');
            md = md.replace(/\[\[\[配置\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="配置"><div class="content-title">配置</div>$1</div>$3');
            md = md.replace(/\[\[\[方法\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="方法"><div class="content-title">方法</div>$1</div>$3');
            md = md.replace(/\[\[\[事件\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="事件"><div class="content-title">事件</div>$1</div>$3');
            md = md.replace(/\[\[\[表单值\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="表单值"><div class="content-title">表单值</div>$1</div>$3');
            md = md.replace(/\[\[\[源码\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="源码"><div class="content-title">源码</div>$1</div>$3');
            md = md.replace(/(.|\n)$/, '$1</ui-tab>');

            md = md.replace(/<p>---demostart---<\/p>/g, '<div class="demo-area"><p class="demo-title">DEMO</p>');
            md = md.replace(/<p>---demoend---<\/p>/g, '\n</div>');

            let res = window.Vue.compile(`<div>${md}</div>`);
            let instance = new window.Vue({
                render : res.render,
                staticRenderFns : res.staticRenderFns
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

    }
};
</script>

<style lang="less">
@import '~Docs/common/common.less';
@import '~github-markdown-css';
@import '~Docs/common/markdown.less';
@import '~Npm/highlight.js/styles/hopscotch.css';
@import '~Docs/common/highlight.less';

a{ }

.body {
    width: 1100px;
    margin: 0 auto;
    font-size: 0;
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
.demo{
    padding: 10px;
    box-sizing: border-box;
    border: 1px #F1F4F6 solid;
    border-radius: 3px 3px 0 0;
    z-index: 9;
    position: relative;

    &+pre{
        border-radius: 0 0 3px 3px;
    }
}
</style>
