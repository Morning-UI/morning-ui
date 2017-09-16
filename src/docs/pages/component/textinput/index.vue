<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 文本输入框 `<ui-textinput>`
    
    <doc-component-status page="textinput"></doc-component-status>
    
    [[[基础]]]

    定义文本输入框。

    #### 使用

    ````html
    <div style="width:300px;">
        <ui-textinput form-name="姓名"></ui-textinput>
    </div>
    ````

    #### 支持前缀、后缀

    ````html
    <div style="width:300px;">
        <ui-textinput form-name="姓名" prepend="@"></ui-textinput>
    </div>
    ````

    ````html
    <div style="width:300px;">
        <ui-textinput form-name="百分比" append="%"></ui-textinput>
    </div>
    ````

    ````html
    <div style="width:300px;">
        <ui-textinput form-name="价格" prepend="价格" append="元"></ui-textinput>
    </div>
    ````

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|`normal`<br/>`disabled`|`normal`|

    
    #### 状态
    
    ````html
    @state:normal,disabled
    <div style="width:300px;">
        <ui-textinput form-name="姓名" {$stateKey} default-value="{$&stateName}"></ui-textinput>
    </div>
    <br>
    ````
    
    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|
    ````
    @render
    {$&formConfigTable}
    ````
    |hide-value|表单的数值不可见，一般用于密码表单|`true`<br>`false`|Boolean|`false`|
    |prepend|表单前缀|任意字符串|String|`undefined`|
    |append|表单后缀|任意字符串|String|`undefined`|
    
    #### form-name
    
    ````html
    @formConfig
    <div style="width:300px;">
        <ui-textinput form-name="{$formName}"></ui-textinput>
    </div>
    ````

    #### form-key
    
    ````html
    @formConfig
    <div style="width:300px;">
        <ui-textinput form-name="{$formName}" form-key="{$formKey}"></ui-textinput>
    </div>
    ````

    #### group

    设置单个组：
    
    ````html
    @formConfig
    <div style="width:300px;">
        <!-- 设置单个组 -->
        <ui-textinput form-name="{$formName}" form-key="{$formKey}" group="{$formGroupOne}"></ui-textinput>
    </div>
    ````

    设置多个组：

    ````mixin
    @use:html.demoGroup,js.demoGroup|@formConfig
    ````

    ````html
    @var:demoGroup
    <div style="width:300px;">
        <!-- 设置多个组 -->
        <ui-textinput form-name="{$formName}" form-key="{$formKey}" :group="group"></ui-textinput>
    </div>
    ````

    ````js
    @var:demoGroup
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            group : ['group1', 'group2', 'group3']
        }
    });
    ````

    #### default-value
    
    ````html
    @formConfig
    <div style="width:300px;">
        <ui-textinput form-name="{$formName}" default-value="默认值"></ui-textinput>
    </div>
    ````

    #### hide-name

    隐藏后表单默认位置的名字不会显示，可以在其他地方设置表单名。
    
    ````html
    @formConfig
    <div style="width:300px;">
        <p>{$formName}</p>
        <ui-textinput form-name="{$formName}" hide-name></ui-textinput>
    </div>
    ````

    #### hide-value
    
    隐藏数值后表单的值在界面中不可见。

    ````html
    <div style="width:300px;">
        <ui-textinput hide-value default-value="this is password"></ui-textinput>
    </div>
    ````

    #### prepend

    ````html
    <div style="width:300px;">
        <ui-textinput form-name="姓名" prepend="@"></ui-textinput>
    </div>
    ````

    #### append

    ````html
    <div style="width:300px;">
        <ui-textinput form-name="百分比" append="%"></ui-textinput>
    </div>
    ````

    [[[方法]]]

    #### set([value])

    设置表单的值。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |value|YES|需要设置表单的值，如果需要清空表单的值，可以不传此参数。|接受任何数值。<br/>`undefined`:清空表单的值<br>原始值:表单的原始值，根据表单不同可以是字符串、对象、数组等<br>JSON数值:表单原始值JSON序列化后的值，传入后表单会自动解析并还原原始值。|Any|`undefined`|

    ````html
    <div style="width:300px;">
        <ui-textinput ref="demoMethodSet" form-name="姓名"></ui-textinput>
        <br>
        <a href="javascript:;" onclick="window.morning.findVM('demoMethodSet').set('Jim')">设置值</a>
        <a href="javascript:;" onclick="window.morning.findVM('demoMethodSet').set()">移除值</a>
    </div>
    ````

    #### get([json])

    获取表单的值。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |json|YES|表单的值是否需要JSON序列化后返回，若你需要和其他程序进行数据交互，使用JSON是一种较好的方法。|`true`<br>`false`|Boolean|`true`|

    ````html
    <div style="width:300px;">
        <ui-textinput ref="demoMethodGet" form-name="姓名" default-value="Jim"></ui-textinput>
        <br>
        <a href="javascript:;" onclick="alert(window.morning.findVM('demoMethodGet').get(false))">获取表单原始值</a>
        <a href="javascript:;" onclick="alert(window.morning.findVM('demoMethodGet').get())">获取表单JSON值</a>
    </div>
    ````

    #### setName([name])

    设置表单的名称。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |name|YES|需要设置表单的名称，如果需要清空表单的名称，可以不传此参数。|任意字符串|String|`undefined`|

    ````html
    <div style="width:300px;">
        <ui-textinput ref="demoMethodSetName" form-name="姓名"></ui-textinput>
        <br>
        <a href="javascript:;" onclick="alert(window.morning.findVM('demoMethodSetName').getName())">获取表单名称</a>
        <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetName').setName('年龄')">设置表单名称</a>
        <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetName').setName()">移除表单名称</a>
    </div>
    ````

    #### getName()

    获取表单的名称。

    ````html
    <div style="width:300px;">
        <ui-textinput ref="demoMethodGetName" form-name="姓名"></ui-textinput>
        <br>
        <a href="javascript:;" onclick="alert(window.morning.findVM('demoMethodGetName').getName())">获取表单名称</a>
    </div>
    ````

    #### setKey([key])

    设置表单的KEY。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |key|YES|需要设置表单的KEY，如果需要清空表单的KEY，可以不传此参数。|任意字符串|String|`undefined`|

    ````html
    <div style="width:300px;">
        <ui-textinput ref="demoMethodSetKey" form-key="name"></ui-textinput>
        <br>
        <a href="javascript:;" onclick="alert(window.morning.findVM('demoMethodSetKey').getKey())">获取表单KEY</a>
        <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetKey').setKey('age')">设置表单KEY</a>
        <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetKey').setKey()">移除表单KEY</a>
    </div>
    ````

    #### getKey()

    获取表单的KEY。

    ````html
    <div style="width:300px;">
        <ui-textinput ref="demoMethodGetKey" form-key="name"></ui-textinput>
        <br>
        <a href="javascript:;" onclick="alert(window.morning.findVM('demoMethodGetKey').getKey())">获取表单KEY</a>
    </div>
    ````

    #### setGroup([groups])

    设置表单所属的表单组。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |groups|YES|需要设置的表单组。如果需要清空所有表单组，可以不传此参数。|`undefined`:清空所有表单组<br>String:设置一个表单组<br>Array:设置多个表单组。|String<br>Array<br>Undefined|`undefined`|

    ````html
    <div style="width:300px;">
        <!-- 设置多个组 -->
        <ui-textinput ref="demoMethodSetGroup" form-key="name"></ui-textinput>
        <br>
        <a href="javascript:;" onclick="alert(JSON.stringify(window.morning.findVM('demoMethodSetGroup').getGroup()))">获取表单组</a>
        <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetGroup').setGroup('group1')">设置单个表单组</a>
        <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetGroup').setGroup(['group1', 'group2'])">设置多个表单组</a>
        <a href="javascript:;" onclick="window.morning.findVM('demoMethodSetGroup').setGroup()">移除所有表单组</a>
    </div>
    ````

    #### getGroup()

    获取表单所属的表单组。

    ````html
    <div style="width:300px;">
        <!-- 设置多个组 -->
        <ui-textinput ref="demoMethodGetGroup" form-key="name" group="group1"></ui-textinput>
        <br>
        <a href="javascript:;" onclick="alert(JSON.stringify(window.morning.findVM('demoMethodGetGroup').getGroup()))">获取表单组</a>
    </div>
    ````

    #### addGroup(group)

    添加一个指定的表单组。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |group|NO|添加表单组的KEY|表单组的KEY|String|`undefined`|

    ````html
    <div style="width:300px;">
        <!-- 设置多个组 -->
        <ui-textinput ref="demoMethodAddGroup" form-key="name"></ui-textinput>
        <br>
        <a href="javascript:;" onclick="alert(JSON.stringify(window.morning.findVM('demoMethodAddGroup').getGroup()))">获取表单组</a>
        <a href="javascript:;" onclick="window.morning.findVM('demoMethodAddGroup').addGroup('group1')">添加表单组</a>
    </div>
    ````

    #### removeGroup(group)

    移除一个指定的表单组。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |group|NO|移除表单组的KEY|表单组的KEY|String|`undefined`|

    ````html
    <div style="width:300px;">
        <!-- 设置多个组 -->
        <ui-textinput ref="demoMethodRemoveGroup" form-key="name" group="group1"></ui-textinput>
        <br>
        <a href="javascript:;" onclick="alert(JSON.stringify(window.morning.findVM('demoMethodRemoveGroup').getGroup()))">获取表单组</a>
        <a href="javascript:;" onclick="window.morning.findVM('demoMethodRemoveGroup').removeGroup('group1')">添加表单组</a>
    </div>
    ````

    [[[事件]]]

    #### valueChange

    当表单值变化时触发。

    ````mixin
    @use:html.demoValueChange,js.demoValueChange
    ````

    ````html
    @var:demoValueChange
    <div style="width:300px;">
        <ui-textinput ref="demoValueChange" @valueChange="echo"></ui-textinput>
        <br>
        <a href="javascript:;" onclick="window.morning.findVM('demoValueChange').set('Jim')">触发valueChange事件</a>
    </div>
    ````

    ````js
    @var:demoValueChange
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo3.console1', 'valueChange event!');
            }
        }
    });
    ````

    #### 生命周期事件

    ````mixin
    @use:html.demoEventLifecycle,js.demoEventLifecycle
    ````

    ````html
    @var:demoEventLifecycle
    <div style="width:300px;">
        <ui-textinput
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @beforeUpdate="echo('beforeUpdate')"
            @updated="echo('updated')"
            @beforeDestroy="echo('beforeDestroy')"
            @destroyed="echo('destroyed')"
        >{%text%}</ui-textinput>

        <br><br>
    
        <a href="javascript:;" onclick="javascript:window.demoEventLifecycle.text='生命周期事件';">触发update</a>
        <a href="javascript:;" onclick="javascript:morning.findVM('demoEventLifecycle').$destroy();">触发destroy</a>
    </div>
    ````

    ````js
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
                console.log('demoEventLifecycle.console1', `${name} event!`);
            }
        }
    });
    ````

    [[[表单值]]]

    #### 值类型

    此表单返回值类型包含:

    - `String` : 字符串

    任何其他类型的数值，都会被尝试转换成这些类型。

    #### 值格式

    内容值字符串。

    #### 默认值

    默认值为空字符串：

    `''`

    #### 输入/输出示例

    ````html
    @formValueType
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-textinput ref="demoType{$valueType}"></ui-textinput>
        </div>
        <br>
        <a href="javascript:;" onclick="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</a>
        <a href="javascript:;" onclick="alert(window.morning.findVM('demoType{$valueType}').get())">获取表单JSON值</a>
    </div>
    <br>
    <br>
    ````

    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/textinput/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'textinput'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
