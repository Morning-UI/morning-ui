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

    </div>
</template>

<script>
import marked                       from 'marked';
import extend                       from 'extend';
import Mustache                     from 'mustache';
import _                            from 'underscore';
import hljs                         from 'highlight.js';
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocSubmenu                   from 'Docs/common/DocSubmenu.vue';
import DocComponentStatus           from 'Docs/common/DocComponentStatus.vue';

const randomRangeMin = 1e3;
const randomRangeMax = 9e3;

window.Vue.component('doc-component-status', DocComponentStatus);

let evals = [];

let imports = {
    formStatement : `
#### 支持

|类型|支持|默认|
|-|-|-|
|尺寸|不支持|-|
|色彩|不支持|-|
|状态|\`normal\`<br/>\`disabled\`|\`normal\`|


#### 状态

\`\`\`\`html
@state:normal,disabled
<div style="width:300px;">
    <ui-{$uikey} {$stateKey} :default-value="{$&statementDefaultValue}" form-name="{$&stateName}" {$&statementMoreAttr}>{$&statementSlot}</ui-{$uikey}>
</div>
<br>
\`\`\`\`
`,
    formStatementWithStyle : `
#### 支持

|类型|支持|默认|
|-|-|-|
|尺寸|不支持|-|
|色彩|全部|\`theme\`|
|状态|\`normal\`<br/>\`disabled\`|\`normal\`|


#### 色彩

\`\`\`\`html
@color:theme
@color:feature
@color:black
@color:blue
@color:silver
@color:gray
<div style="width:300px;">
    <ui-{$uikey} {$colorKey} :default-value="{$&statementDefaultValue}" form-name="{$&colorName}" {$&statementMoreAttr}>{$&statementSlot}</ui-{$uikey}>
</div>
<br>
\`\`\`\`

#### 状态

\`\`\`\`html
@state:normal,disabled
<div style="width:300px;">
    <ui-{$uikey} {$stateKey} :default-value="{$&statementDefaultValue}" form-name="{$&stateName}" {$&statementMoreAttr}>{$&statementSlot}</ui-{$uikey}>
</div>
<br>
\`\`\`\`
`,
    formConfigDemo : `
#### form-name

\`\`\`\`html
@formConfig
<div style="width:300px;">
    <ui-{$uikey} form-name="{$formName}" {$&configMoreAttr}>{$&configSlot}</ui-{$uikey}>
</div>
\`\`\`\`

#### form-key

\`\`\`\`html
@formConfig
<div style="width:300px;">
    <ui-{$uikey} form-name="{$formName}" form-key="{$formKey}" {$&configMoreAttr}>{$&configSlot}</ui-{$uikey}>
</div>
\`\`\`\`

#### group

设置单个组：

\`\`\`\`html
@formConfig
<div style="width:300px;">
    <!-- 设置单个组 -->
    <ui-{$uikey} form-name="{$formName}" form-key="{$formKey}" group="{$formGroupOne}" {$&configMoreAttr}>{$&configSlot}</ui-{$uikey}>
</div>
\`\`\`\`

设置多个组：

\`\`\`\`vue
@use:html.demoGroup,js.demoGroup|@formConfig
\`\`\`\`

\`\`\`\`html
@var:demoGroup
<div style="width:300px;">
    <!-- 设置多个组 -->
    <ui-{$uikey} form-name="{$formName}" form-key="{$formKey}" :group="group" {$&configMoreAttr}>{$&configSlot}</ui-{$uikey}>
</div>
\`\`\`\`

\`\`\`\`js
@var:demoGroup
new Vue({
    el : '{$el}',
    template : '{$template}',
    data : {
        group : ['group1', 'group2', 'group3']
    }
});
\`\`\`\`

#### default-value

\`\`\`\`html
@formConfig
<div style="width:300px;">
    <ui-{$uikey} form-name="{$formName}" :default-value="{$&configDefaultValue}" {$&configMoreAttr}>{$&configSlot}</ui-{$uikey}>
</div>
\`\`\`\`

#### hide-name

隐藏后表单默认位置的名字不会显示，可以在其他地方设置表单名。

\`\`\`\`html
@formConfig
<div style="width:300px;">
    <p>{$formName}</p>
    <ui-{$uikey} form-name="{$formName}" hide-name {$&configMoreAttr}>{$&configSlot}</ui-{$uikey}>
</div>
\`\`\`\`
    `,
    formConfigTable : `
|form-name|表单的名称（用于显示）|任意字符串|String|\`undefined\`|
|form-key|表单的Key（用于逻辑中作为识别标示）|任意字符串(唯一)|String|\`undefined\`|
|group|表单组，用于将多个表单的数值添加到同一个对象中。一个表单可以同时属于多个组|若是字符串，则将表单添加到单个组<br>若是数组，则将表单添加到多个组|String<br/>Array|\`[]\`|
|default-value|表单的默认值|任意(接受表单原始数值，也接受JSON序列化后的表单数值，若数值是JSON序列化的会自动转换成原始数值)|Any|\`undefined\`|
|hide-name|隐藏表单名|\`true\`<br>\`false\`|Boolean|\`false\`|`,
    formMethod : `
#### set([value])

设置表单的值。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|value|YES|需要设置表单的值，如果需要清空表单的值，可以不传此参数。|接受任何数值。<br/>\`undefined\`:清空表单的值<br>原始值:表单的原始值，根据表单不同可以是字符串、对象、数组等<br>JSON数值:表单原始值JSON序列化后的值，传入后表单会自动解析并还原原始值。|Any|\`undefined\`|

\`\`\`\`html
@origin
<div style="width:300px;">
    <ui-{$uikey} ref="demoMethodSet" form-name="表单名" {$&methodMoreAttr}>{$&methodSlot}</ui-{$uikey}>
    <br>
    <a href="javascript:;" onclick="window.morning.findVM('demoMethodSet').set({$&methodValue})">设置值</a>
    <a href="javascript:;" onclick="window.morning.findVM('demoMethodSet').set()">移除值</a>
</div>
\`\`\`\`

#### get([json])

获取表单的值。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|json|YES|表单的值是否需要JSON序列化后返回，若你需要和其他程序进行数据交互，使用JSON是一种较好的方法。|\`true\`<br>\`false\`|Boolean|\`true\`|

\`\`\`\`html
@origin
<div style="width:300px;">
    <ui-{$uikey} ref="demoMethodGet" form-name="表单名" :default-value="{$&methodDefaultValue}" {$&methodMoreAttr}>{$&methodSlot}</ui-{$uikey}>
    <br>
    <a href="javascript:;" onclick="alert(window.morning.findVM('demoMethodGet').get(false))">获取表单原始值</a>
    <a href="javascript:;" onclick="alert(window.morning.findVM('demoMethodGet').get())">获取表单JSON值</a>
</div>
\`\`\`\`

#### setName([name])

设置表单的名称。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|name|YES|需要设置表单的名称，如果需要清空表单的名称，可以不传此参数。|任意字符串|String|\`undefined\`|

\`\`\`\`html
@origin
<div style="width:300px;">
    <ui-{$uikey} ref="demoMethodSetName" form-name="姓名" {$&methodMoreAttr}>{$&methodSlot}</ui-{$uikey}>
    <br>
    <a href="javascript:;" onclick="alert(window.morning.findVM('demoMethodSetName').getName())">获取表单名称</a>
    <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetName').setName('年龄')">设置表单名称</a>
    <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetName').setName()">移除表单名称</a>
</div>
\`\`\`\`

#### getName()

获取表单的名称。

\`\`\`\`html
@origin
<div style="width:300px;">
    <ui-{$uikey} ref="demoMethodGetName" form-name="姓名" {$&methodMoreAttr}>{$&methodSlot}</ui-{$uikey}>
    <br>
    <a href="javascript:;" onclick="alert(window.morning.findVM('demoMethodGetName').getName())">获取表单名称</a>
</div>
\`\`\`\`

#### setKey([key])

设置表单的KEY。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|key|YES|需要设置表单的KEY，如果需要清空表单的KEY，可以不传此参数。|任意字符串|String|\`undefined\`|

\`\`\`\`html
@origin
<div style="width:300px;">
    <ui-{$uikey} ref="demoMethodSetKey" form-name="表单名" form-key="name" {$&methodMoreAttr}>{$&methodSlot}</ui-{$uikey}>
    <br>
    <a href="javascript:;" onclick="alert(window.morning.findVM('demoMethodSetKey').getKey())">获取表单KEY</a>
    <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetKey').setKey('age')">设置表单KEY</a>
    <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetKey').setKey()">移除表单KEY</a>
</div>
\`\`\`\`

#### getKey()

获取表单的KEY。

\`\`\`\`html
@origin
<div style="width:300px;">
    <ui-{$uikey} ref="demoMethodGetKey" form-name="表单名" form-key="name" {$&methodMoreAttr}>{$&methodSlot}</ui-{$uikey}>
    <br>
    <a href="javascript:;" onclick="alert(window.morning.findVM('demoMethodGetKey').getKey())">获取表单KEY</a>
</div>
\`\`\`\`

#### setGroup([groups])

设置表单所属的表单组。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|groups|YES|需要设置的表单组。如果需要清空所有表单组，可以不传此参数。|\`undefined\`:清空所有表单组<br>String:设置一个表单组<br>Array:设置多个表单组。|String<br>Array<br>Undefined|\`undefined\`|

\`\`\`\`html
@origin
<div style="width:300px;">
    <!-- 设置多个组 -->
    <ui-{$uikey} ref="demoMethodSetGroup" form-name="表单名" form-key="name" {$&methodMoreAttr}>{$&methodSlot}</ui-{$uikey}>
    <br>
    <a href="javascript:;" onclick="alert(JSON.stringify(window.morning.findVM('demoMethodSetGroup').getGroup()))">获取表单组</a>
    <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetGroup').setGroup('group1')">设置单个表单组</a>
    <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetGroup').setGroup(['group1', 'group2'])">设置多个表单组</a>
    <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetGroup').setGroup()">移除所有表单组</a>
</div>
\`\`\`\`

#### getGroup()

获取表单所属的表单组。

\`\`\`\`html
@origin
<div style="width:300px;">
    <!-- 设置多个组 -->
    <ui-{$uikey} ref="demoMethodGetGroup" form-name="表单名" form-key="name" group="group1" {$&methodMoreAttr}>{$&methodSlot}</ui-{$uikey}>
    <br>
    <a href="javascript:;" onclick="alert(JSON.stringify(window.morning.findVM('demoMethodGetGroup').getGroup()))">获取表单组</a>
</div>
\`\`\`\`

#### addGroup(group)

添加一个指定的表单组。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|group|NO|添加表单组的KEY|表单组的KEY|String|\`undefined\`|

\`\`\`\`html
@origin
<div style="width:300px;">
    <!-- 设置多个组 -->
    <ui-{$uikey} ref="demoMethodAddGroup" form-name="表单名" form-key="name" {$&methodMoreAttr}>{$&methodSlot}</ui-{$uikey}>
    <br>
    <a href="javascript:;" onclick="alert(JSON.stringify(window.morning.findVM('demoMethodAddGroup').getGroup()))">获取表单组</a>
    <a href="javascript:;" onclick="window.morning.findVM('demoMethodAddGroup').addGroup('group1')">添加表单组</a>
</div>
\`\`\`\`

#### removeGroup(group)

移除一个指定的表单组。

|KEY|可选|描述|接受值|值类型|默认值|
|-|-|-|-|-|-|
|group|NO|移除表单组的KEY|表单组的KEY|String|\`undefined\`|

\`\`\`\`html
@origin
<div style="width:300px;">
    <!-- 设置多个组 -->
    <ui-{$uikey} ref="demoMethodRemoveGroup" form-name="表单名" form-key="name" group="group1" {$&methodMoreAttr}>{$&methodSlot}</ui-{$uikey}>
    <br>
    <a href="javascript:;" onclick="alert(JSON.stringify(window.morning.findVM('demoMethodRemoveGroup').getGroup()))">获取表单组</a>
    <a href="javascript:;" onclick="window.morning.findVM('demoMethodRemoveGroup').removeGroup('group1')">移除表单组</a>
</div>
\`\`\`\`
    `,
    formEvent : `
#### valueChange

当表单值变化时触发。

\`\`\`\`vue
@use:html.demoValueChange,js.demoValueChange
\`\`\`\`

\`\`\`\`html
@var:demoValueChange
<div style="width:300px;">
    <ui-{$uikey} ref="demoValueChange" form-name="表单名" @valueChange="echo" {$&eventMoreAttr}>{$&eventSlot}</ui-{$uikey}>
    <br>
    <a href="javascript:;" onclick="window.morning.findVM('demoValueChange').set({$&eventValue})">触发valueChange事件</a>
</div>
\`\`\`\`

\`\`\`\`js
@var:demoValueChange
new Vue({
    el : '{$el}',
    template : '{$template}',
    methods : {
        echo : function () {
            console.log('demoValueChange.console1', 'valueChange event!');
        }
    }
});
\`\`\`\`

#### 生命周期事件

\`\`\`\`vue
@use:html.demoEventLifecycle,js.demoEventLifecycle
\`\`\`\`

\`\`\`\`html
@var:demoEventLifecycle
<div style="width:300px;">
    <ui-{$uikey}
        ref="demoEventLifecycle"
        form-name="表单名"
        v-show="show"
        @created="echo('created')"
        @mounted="echo('mounted')"
        @beforeUpdate="echo('beforeUpdate')"
        @updated="echo('updated')"
        @beforeDestroy="echo('beforeDestroy')"
        @destroyed="echo('destroyed')"
        {$&eventMoreAttr}
    >{$&eventSlot}<span style="display:none;">{%text%}</span></ui-{$uikey}>

    <br><br>

    <a href="javascript:;" onclick="javascript:window.demoEventLifecycle.text='生命周期事件';">触发update</a>
    <a href="javascript:;" onclick="javascript:morning.findVM('demoEventLifecycle').$destroy();">触发destroy</a>
</div>
\`\`\`\`

\`\`\`\`js
@var:demoEventLifecycle
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
\`\`\`\``
};

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
        },
        {
            stateKey : 'loading',
            stateName : '载入中'
        },
        {
            stateKey : 'processing',
            stateName : '处理中'
        },
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
                valueContent : '[]'
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
                valueContent : '[\'Tim Boelaars\', \'Andrew Colin Beck\']'
            }
        ]
    }
};

let parser = (text, el) => {

    let patt = /````(html|js|css|vue|)((\n[\t ]*[\@a-zA-Z0-9\:\.\,\|]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
    let varpatt = /````(html|js|css)\n(\@var\:([a-zA-Z0-9]+))\n((.|\n)+?)\n([ \t]*)````/g;
    let importpatt = /````(import)((\n[\t ]*[a-zA-Z0-9@'"[\]?<>/\-_{}=:.,|!()\u4e00-\u9fa5 ]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
    let result;
    let vars = {
        js : {},
        html : {}
    };
    let blocks = [];
    let vueContext = {};

    while ((result = importpatt.exec(text)) !== null) {

        let rdata = result[2].replace(/^\n/, '').split('\n');
        let id = rdata[0].split(':')[1];

        rdata.shift();

        for (let item of rdata) {

            let name = item.split(':')[0].replace(/^@/, '');
            let valuelist = item.split(':');

            valuelist.shift();

            let value = valuelist.join(':');

            vueContext[name] = value;

        }

        let content = imports[id];

        text = text.slice(0, result.index - 1) + content + text.slice(result.index + result[0].length, text.length);
        importpatt.lastIndex = 0;

    }

    while ((result = varpatt.exec(text)) !== null) {

        vars[result[1]][result[3]] = result[4];
        text = text.slice(0, result.index - 1) + text.slice(result.index + result[0].length, text.length);

        varpatt.lastIndex = 0;

    }

    while ((result = patt.exec(text)) !== null) {

        let content = result[4];
        let helpers = result[2].split('\n');

        helpers.shift();
        
        let block = {
            content,
            type : result[1],
            result,
            context : vueContext,
            helpers : []
        };

        for(let name of helpers) {

            let list = name.split('|');
            let group = [];

            for (let help of list) {

                let fn = help.split(':')[0].replace(/^\@/, '');
                let param = help.split(':')[1];

                group.push({
                    fn,
                    param
                });

            }

            block.helpers.push(group);

        }

        blocks.push(block);

    }

    return {
        vars,
        blocks,
        text
    };

};

let helpers = {
    import : opt => {

        let name = opt.param.split(',');

        opt.content = window.$(`script#${name[0]}`);
        opt.context = {
            uiname : name[1]
        };

        return opt;

    },
    origin : opt => {

        return opt;

    },
    render : opt => {

        opt.isText = true;

        return opt;

    },
    size : opt => {

        if (typeof opt.content === 'string') {

            opt.content = `{$#size}${opt.content}\n{$/size}`;

        } else if (typeof opt.content === 'object') {

            for (let key in opt.content) {

                opt.content[key] = `{$#size}${opt.content[key]}\n{$/size}`;

            }

        }

        return opt;

    },
    color : opt => {

        let color = opt.param;
        
        if (typeof opt.content === 'string') {

            opt.content = `{$#${color}}${opt.content}\n{$/${color}}`;

        } else if (typeof opt.contnet === 'object') {

            for (let key in opt.content) {
                    
                opt.content[key] = `{$#${color}}${opt.content[key]}\n{$/${color}}`;
                
            }

        }

        if (color === 'silver') {

            opt.style.push('background: #626b75;border-color: #454d57');

        } else if (color === 'gray') {

            opt.style.push('background:#676767;border-color: #494949');
        
        }

        return opt;

    },
    state : opt => {

        if (opt.param === undefined) {
            
            opt.param = 'all';

        }

        let states = opt.param.split(',');

        if (states.length > 0 &&
            states.indexOf('all') === -1) {

            let sna = [];

            for (let state of data.state) {

                if (states.indexOf(state.stateKey) !== -1) {

                    sna.push(state);

                }

            }

            opt.context = extend(true, opt.context, {
                state : sna
            });

        }

        if (typeof opt.content === 'string') {

            opt.content = `{$#state}${opt.content}\n{$/state}`;

        } else if (typeof opt.contnet === 'object') {

            for (let key in opt.content) {
                    
                opt.content[key] = `{$#state}${opt.content[key]}\n{$/state}`;
                
            }

        }

        return opt;

    },
    br : opt => {

        let num = +opt.param || 1;
        let brs = '';

        while (num--) {

            brs += '<br/>';

        }

        if (typeof opt.content === 'string') {

            opt.content = `${opt.content}\n${brs}\n`;

        } else if (typeof opt.content === 'object') {

            for (let key in opt.content) {

                opt.content[key] = `${opt.content[key]}\n${brs}\n`;

            }

        }

        return opt;

    },
    use : opt => {

        let links = opt.param.split(',');

        opt.content = {};

        for (let link of links) {

            let type = link.split('.')[0];
            let key = link.split('.')[1];

            opt.content[type] = `&&&&&{$id}|${opt.vars[type][key]}`;

        }

        opt.render = sopt => {

            let list = {};
            let code = '';
            let demo = '';
            let newData = extend(true, {}, sopt.context);
            let lastType;

            for (let key of Object.keys(newData)) {

                let value = newData[key];
                let id = `demo-${_.random(randomRangeMin, randomRangeMax)}`;

                if (value instanceof Array) {

                    for (let svalue of value) {

                        svalue.id = id;
                        svalue.el = `#${id}-el`;
                        svalue.template = `#${id}-tmpl`;

                    }

                } else if (typeof value === 'object') {

                    value.id = id;
                    value.el = `#${id}-el`;
                    value.template = `#${id}-tmpl`;

                }

            }

            let id = `demo-${_.random(randomRangeMin, randomRangeMax)}`;

            newData.id = id;
            newData.el = `#${id}-el`;
            newData.template = `#${id}-tmpl`;

            for (let type of Object.keys(sopt.content)) {

                Mustache.parse(sopt.content[type], ['{$', '}']);
                
                list[type] = Mustache.render(sopt.content[type], newData).split('&&&&&');
                list[type].shift();
                lastType = type;

            }

            for (let i in list[lastType]) {

                let html = list.html[i];
                let js = list.js[i];
                let demoid = html.match(/^([0-9a-z-]+?)\|/)[1];

                html = html.replace(/^[0-9a-z-]+?\|/, '');
                js = js.replace(/^[0-9a-z-]+?\|/, '');

                code += `<div id="${demoid}-el"><!-- ${demoid} 容器 --></div>\n\n`;
                demo += `<div id="${demoid}-el"></div>\n`;

                // html
                let htmlScript = document.createElement('script');

                html = html.replace(/[\n]*?$/, '');
                htmlScript.innerHTML = `\n${html}\n`;
                htmlScript.type = 'x-template';
                htmlScript.id = `${demoid}-tmpl`;

                code += `${htmlScript.outerHTML}\n\n`;

                htmlScript.innerHTML = htmlScript.innerHTML.replace(/\{%([a-zA-Z0-9_]+)%\}/g, '{{$1}}');
                evals.push(htmlScript);

                // js

                let jsScript = document.createElement('script');

                js = js.replace(/[\n]*?$/, '');
                jsScript.innerHTML = `\n${js}\n`;
                
                evals.push(jsScript);

                code += jsScript.outerHTML;

                if (i < list[lastType].length - 1) {

                    code += '\n\n------------------------------------------------\n\n';

                }

            }

            return {
                demo,
                code 
            };

        };

        return opt;

    },
    formConfig : opt => {

        if (typeof opt.content === 'string') {

            opt.content = `{$#formConfig}${opt.content}\n{$/formConfig}`;

        } else if (typeof opt.content === 'object') {

            for (let key in opt.content) {

                opt.content[key] = `{$#formConfig}${opt.content[key]}\n{$/formConfig}`;

            }

        }

        return opt;

    },
    formValueType : opt => {

        let key = opt.param || 'default';

        if (typeof opt.content === 'string') {

            opt.content = `{$#formValueType.${key}}${opt.content}\n{$/formValueType.${key}}`;

        } else if (typeof opt.content === 'object') {

            for (let key in opt.content) {

                opt.content[key] = `{$#formValueType.${key}}${opt.content[key]}\n{$/formValueType.${key}}`;

            }

        }

        return opt;

    }
};

let make = {
    block : block => {

        return '<div class="demo">\n' + block.content + '</div>\n\n```' + block.type + '\n' + block.content + '\n```\n';

    },
    opt : (opts, block) => {

        let text = '';

        for (let opt of opts) {

            let code,
                demo;

            opt.context = extend({}, data, opt.context);

            if (typeof opt.render === 'function') {

                let result = opt.render(opt);

                code = result.code;
                demo = result.demo;

            } else {

                let template = opt.content;

                Mustache.parse(template, ['{$', '}']);

                code = Mustache.render(template, opt.context);

            }

            if (opt.style.length === 0) {

                opt.style = '';

            } else {

                opt.style = opt.style.join(';');
            
            }

            if (block.type === 'vue') {

                block.type = 'html';

            }

            if (opt.isText) {

                text += code;

            } else {

                text += '<div class="demo" style="' + opt.style + '">\n' + (demo || code) + '</div>\n\n```' + block.type + '\n' + code + '\n```\n';

            }

        }

        return text;

    }
};

let runner = tree => {

    for (let block of tree.blocks) {

        if (block.helpers.length > 0) {

            let opts = [];

            for (let group of block.helpers) {

                let opt = {
                    content : block.content,
                    vars : tree.vars,
                    helperlist : group,
                    context : block.context,
                    style : []
                };

                for (let helper of group) {

                    opt.param = helper.param;
                    opt = helpers[helper.fn](opt);

                }

                opts.push(opt);

            }

            block._html = make.opt(opts, block);

        } else {

            block._html = make.block(block);
        
        }

    }

    let text = tree.text;
    let patt = /````(html|js|css|vue|)((\n[\t ]*[\@a-zA-Z0-9\:\.\,\|]+)*)\n((.|\n)*?)(\n)*([ \t]*)````/g;
    let index = 0;
    let result;

    while ((result = patt.exec(text)) !== null) {

        text = text.slice(0, result.index - 1) + tree.blocks[index++]._html + text.slice(result.index + result[0].length, text.length);

    }

    return text;
    
};
window.Vue.directive('docmd', {
    bind : el => {

        let mdScript = el.getElementsByTagName('script')[0];

        if (mdScript && mdScript.type === 'text/markdown') {

            let text = mdScript.innerText;
            text = text.replace(/\&lt\;\/script\>/g, '<\/script>');
            text = text.replace(/\/`/g, '`');

            let tree = parser(text, el);

            text = runner(tree);

            let md = marked(text);
            
            console.log(md);
            md = md.replace(/\\`/g, '`');
            
            md = md.replace(/\{\%([a-zA-Z0-9\_]+)\%\}/g, '{{"\\\{\\\{$1\\\}\\\}"}}');
            md = md.replace(/\<p\>(\[\[\[(.+)\]\]\])\<\/p\>/g, '$1');
            md = md.replace(/(\[\[\[)/, '<ui-tab class="block noborder">$1');
            md = md.replace(/\[\[\[基础\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="开始">$1</div>$3');
            md = md.replace(/\[\[\[声明\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="声明">$1</div>$3');
            md = md.replace(/\[\[\[配置\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="配置">$1</div>$3');
            md = md.replace(/\[\[\[方法\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="方法">$1</div>$3');
            md = md.replace(/\[\[\[事件\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="事件">$1</div>$3');
            md = md.replace(/\[\[\[表单值\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="表单值">$1</div>$3');
            md = md.replace(/\[\[\[单元测试\]\]\]((.|\n)+?)(\[\[\[|$)/g, '<div slot="源码">$1</div>$3');
            md = md.replace(/(.|\n)$/, '$1</ui-tab>');

            let res = Vue.compile(`<div>${md}</div>`);
            let instance = new Vue({
                render: res.render,
                staticRenderFns: res.staticRenderFns
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
        'doc-submenu' : DocSubmenu
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
