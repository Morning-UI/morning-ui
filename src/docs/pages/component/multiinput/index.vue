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

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiinput form-name="输入标签"></ui-multiinput>
    </div>
    :::

    :::vue
    @name:说明回车输入
    ---
    #demo
    >desc
    多项输入框会在用户按下回车时添加项目，在使用时建议说明使用回车输入。
    >tpl
    <div style="width:300px;">
        <ui-multiinput inside-name="按下回车输入标签"></ui-multiinput>
    </div>
    :::

    [[[形态]]]

    :::preset
    @name:formStatus
    @uikey:multiinput
    @defaultValue:['value1', 'value2']
    :::

    [[[配置]]]
    
    :::preset
    @name:formConfig
    @uikey:multiinput
    @defaultValue:['value1', 'value2']
    :::

    :::vue
    @name:inside-name
    ---
    #config
    >conf-desc
    编辑区域默认显示内容。
    >conf-accept
    字符串
    >conf-type
    String
    >conf-default
    `''`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiinput inside-name="输入标签"></ui-multiinput>
    </div>
    :::

    :::vue
    @name:can-move
    ---
    #config
    >conf-desc
    输入项目是否可以移动。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiinput form-name="输入标签" :default-value="['value1', 'value2']" can-move></ui-multiinput>
    </div>
    :::

    :::vue
    @name:max
    ---
    #config
    >conf-desc
    可输入的最大项数。
    >conf-accept
    数字<br>`false`:不限制数量
    >conf-type
    String<br>Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiinput form-name="输入标签" :default-value="['value1', 'value2', 'value3', 'value4']" :max="3"></ui-multiinput>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:multiinput
    @value:['value1']
    @defaultValue:['value1']
    :::

    :::vue
    @name:add(item, [index])
    ---
    #method
    >method-desc
    在指定位置添加项。
    >method-args
    |item|NO|添加项目的内容|内容字符串|`String`|`undefined`|
    |index|YES|添加的位置|`undefined`: 添加为最后一项<br>数字: 添加到指定的index位置|`Undefined`<br>`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-multiinput ref="demo2" form-name="输入标签"></ui-multiinput>
        </div>
        <br>
        <ui-link js="morning.findVM('demo2').add('value1');">添加到最后</ui-link>
        <ui-link js="morning.findVM('demo2').add('value2', 0);">添加到第0项</ui-link>
    </div>
    :::

    :::vue
    @name:update(item, index)
    ---
    #method
    >method-desc
    更新指定位置的项。
    >method-args
    |item|NO|更新的项目内容|内容字符串|`String`|`undefined`|
    |index|NO|更新的位置|更新项目的index位置|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-multiinput ref="demo8" form-name="输入标签" :default-value="['value1', 'value2', 'value3', 'value4']"></ui-multiinput>
        </div>
        <br>
        <ui-link js="morning.findVM('demo8').update('newValue', 1);">将第2项的更新为newValue</ui-link>
    </div>
    :::

    :::vue
    @name:del(index)
    ---
    #method
    >method-desc
    删除指定位置的项。
    >method-args
    |index|NO|删除指定位置的项目|删除项目的index位置|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-multiinput ref="demo3" form-name="输入标签" :default-value="['value1', 'value2', 'value3', 'value4']"></ui-multiinput>
        </div>
        <br>
        <ui-link js="morning.findVM('demo3').del(0);">删除第0项</ui-link>
    </div>
    :::

    :::vue
    @name:move(from, to)
    ---
    #method
    >method-desc
    移动项目。
    >method-args
    |from|NO|需要移动的项目位置|移动项目的index位置|`Number`|`undefined`|
    |to|NO|移动之后的项目位置|移动之后的index位置|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-multiinput ref="demo4" form-name="输入标签" :default-value="['value1', 'value2', 'value3', 'value4']"></ui-multiinput>
        </div>
        <br>
        <ui-link js="morning.findVM('demo4').move(2, 0);">将第2项移到第0项</ui-link>
    </div>
    :::

    :::vue
    @name:setInput([value])
    ---
    #method
    >method-desc
    设置输入框的内容。
    >method-args
    |value|YES|需要设置的内容|字符串：设置字符串内容<br>`undefined`：清空内容|`String`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-multiinput ref="demo10" form-name="输入标签"></ui-multiinput>
        </div>
        <br>
        <ui-link js="morning.findVM('demo10').setInput('value1');">设置输入框内容</ui-link>
        <ui-link js="morning.findVM('demo10').setInput();">清空输入框内容</ui-link>
    </div>
    :::
    
    :::vue
    @name:getInput()
    ---
    #method
    >method-desc
    获取输入框的内容。
    >method-return
    输入框内容。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-multiinput ref="demo9" form-name="输入标签"></ui-multiinput>
        </div>
        <br>
        <ui-link js="alert(morning.findVM('demo9').getInput());">获取输入框内容</ui-link>
    </div>
    :::

    [[[事件]]]
    
    :::preset
    @name:formEvent
    @uiname:多项输入框
    @uikey:multiinput
    @value:['value1']
    @wrapStyle:width:300px;
    :::

    :::vue
    @name:input-value-change
    ---
    #event
    >event-desc
    当输入标签内容变化后触发。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiinput @input-value-change="echo" ref="demo5" form-name="输入标签"></ui-multiinput>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo5.console1', 'input-value-change event!');
            }
        }
    }
    :::

    :::vue
    @name:input-focus
    ---
    #event
    >event-desc
    当标签内容输入框聚焦后触发。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiinput @input-focus="echo" ref="demo6" form-name="输入标签"></ui-multiinput>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo6.console1', 'input-focus event!');
            }
        }
    }
    :::

    :::vue
    @name:input-blur
    ---
    #event
    >event-desc
    当标签内容输入框失焦后触发。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-multiinput @input-blur="echo" ref="demo7" form-name="输入标签"></ui-multiinput>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo7.console1', 'input-blur event!');
            }
        }
    }
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
    
    :::preset
    @name:formValue
    @uikey:multiinput
    @uiname:多项输入框
    @valueType:checkbox
    @wrapStyle:width:300px;
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
