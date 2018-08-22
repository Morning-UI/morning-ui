<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 多项输入框 `<ui-multiinput>`
    
    <doc-component-status page="multiinput"></doc-component-status>
    
    [[[开始]]]

    定义多项输入框。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-multiinput form-name="输入标签"></ui-multiinput>
    </div>
    :::

    #### 说明回车输入

    多项输入框会在用户按下回车时添加项目，在使用时建议说明使用回车输入。

    :::democode/html
    <div style="width:300px;">
        <ui-multiinput inside-name="按下回车输入标签"></ui-multiinput>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:multiinput
    statusDefaultValue:['value1', 'value2']
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[inside-name](#inside-name)|编辑区域默认显示内容|字符串|String|`''`|
    |[can-move](#can-move)|输入项目是否可以移动|`true`<br>`false`|Boolean|`false`|
    |[max](#max)|可输入的最大项数|数字<br>`false`:不限制数量|String<br>Boolean|`false`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:multiinput
    configDefaultValue:['value1', 'value2']
    :::

    #### inside-name

    :::democode/html
    <div style="width:300px;">
        <ui-multiinput inside-name="输入标签"></ui-multiinput>
    </div>
    :::

    #### can-move

    :::democode/html
    <div style="width:300px;">
        <ui-multiinput form-name="输入标签" :default-value="['value1', 'value2']" can-move></ui-multiinput>
    </div>
    :::

    #### max

    :::democode/html
    <div style="width:300px;">
        <ui-multiinput form-name="输入标签" :default-value="['value1', 'value2', 'value3', 'value4']" :max="3"></ui-multiinput>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:multiinput
    methodValue:['value1']
    methodDefaultValue:['value1']
    :::

    #### add(item, [index])

    在指定位置添加项。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |item|NO|添加项目的内容|内容字符串|`String`|`undefined`|
    |index|YES|添加的位置|`undefined`: 添加为最后一项<br>数字: 添加到指定的index位置|`Undefined`<br>`Number`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiinput ref="demo2" form-name="输入标签"></ui-multiinput>
    </div>
    <br>
    <ui-link js="morning.findVM('demo2').add('value1');">添加到最后</ui-link>
    <ui-link js="morning.findVM('demo2').add('value2', 0);">添加到第0项</ui-link>
    :::

    #### update(item, index)

    更新指定位置的项。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |item|NO|更新的项目内容|内容字符串|`String`|`undefined`|
    |index|NO|更新的位置|更新项目的index位置|`Number`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiinput ref="demo8" form-name="输入标签" :default-value="['value1', 'value2', 'value3', 'value4']"></ui-multiinput>
    </div>
    <br>
    <ui-link js="morning.findVM('demo8').update('newValue', 1);">将第2项的更新为newValue</ui-link>
    :::

    #### del(index)

    删除指定位置的项。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |index|NO|删除指定位置的项目|删除项目的index位置|`Number`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiinput ref="demo3" form-name="输入标签" :default-value="['value1', 'value2', 'value3', 'value4']"></ui-multiinput>
    </div>
    <br>
    <ui-link js="morning.findVM('demo3').del(0);">删除第0项</ui-link>
    :::

    #### move(from, to)

    移动项目。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |from|NO|需要移动的项目位置|移动项目的index位置|`Number`|`undefined`|
    |to|NO|移动之后的项目位置|移动之后的index位置|`Number`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiinput ref="demo4" form-name="输入标签" :default-value="['value1', 'value2', 'value3', 'value4']"></ui-multiinput>
    </div>
    <br>
    <ui-link js="morning.findVM('demo4').move(2, 0);">将第2项移到第0项</ui-link>
    :::

    #### setInput([value])

    设置输入框的内容。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |value|YES|需要设置的内容|字符串：设置字符串内容<br>`undefined`：清空内容|`String`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiinput ref="demo10" form-name="输入标签"></ui-multiinput>
    </div>
    <br>
    <ui-link js="morning.findVM('demo10').setInput('value1');">设置输入框内容</ui-link>
    <ui-link js="morning.findVM('demo10').setInput();">清空输入框内容</ui-link>
    :::

    #### getInput()

    获取输入框的内容。
    
    :::democode/html
    <div style="width:300px;">
        <ui-multiinput ref="demo9" form-name="输入标签"></ui-multiinput>
    </div>
    <br>
    <ui-link js="alert(morning.findVM('demo9').getInput());">获取输入框内容</ui-link>
    :::

    [[[事件]]]
    
    #### input-value-change

    当输入标签内容变化后触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo5.console1', 'input-value-change event!');
            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-multiinput @input-value-change="echo" ref="demo5" form-name="输入标签"></ui-multiinput>
    </div>
    :::
    
    #### input-focus

    当标签内容输入框聚焦后触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo6.console1', 'input-focus event!');
            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-multiinput @input-focus="echo" ref="demo6" form-name="输入标签"></ui-multiinput>
    </div>
    :::

    #### input-blur

    当标签内容输入框失焦后触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo7.console1', 'input-blur event!');
            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-multiinput @input-blur="echo" ref="demo7" form-name="输入标签"></ui-multiinput>
    </div>
    :::

    :::preset/html
    formEvent
    ---
    uikey:multiinput
    eventValue:['value1']
    :::

    [[[表单值]]]

    #### 值类型
    
    `Array` : 数组

    #### 值过滤

    - 所有不支持的值类型，都会被尝试转换成空数组(`[]`)。
    - 若启用`max`，最多不会超过max设置的项目数量。

    #### 值格式

    包含输入项目的数组，数组项目为输入内容(字符串)。

    #### 默认值

    默认值为空字符串：

    `[]`

    #### 输入/输出示例

    :::repeat/html
    formValueType:checkbox
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-multiinput ref="demoType{$valueType}" form-name="输入标签"></ui-multiinput>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/multiinput/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'multiinput'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
