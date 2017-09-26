<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 多项输入框 `<ui-multiinput>`
    
    <doc-component-status page="multiinput"></doc-component-status>
    
    [[[基础]]]

    定义多项输入框。

    #### 使用

    ````html
    <div style="width:300px;">
        <ui-multiinput form-name="输入标签"></ui-multiinput>
    </div>
    ````

    #### 说明回车输入

    多项输入框会在用户按下回车时添加项目，在使用时建议说明使用回车输入。

    ````html
    <div style="width:300px;">
        <ui-multiinput form-name="按下回车输入标签"></ui-multiinput>
    </div>
    ````

    [[[声明]]]

    ````import
    @id:formStatement
    @uikey:multiinput
    @statementDefaultValue:['value1', 'value2']
    ````

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|
    ````import
    @id:formConfigTable
    ````
    |can-move|输入项目是否可以移动|`true`<br>`false`|Boolean|`false`|
    |max|可输入的最大项数|数字<br>`false`:不限制数量|String<br>Boolean|`false`|

    ````import
    @id:formConfigDemo
    @uikey:multiinput
    @configDefaultValue:['value1', 'value2']
    ````

    #### can-move

    ````html
    <div style="width:300px;">
        <ui-multiinput form-name="输入标签" :default-value="['value1', 'value2']" can-move></ui-multiinput>
    </div>
    ````


    [[[单元测试]]]

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
