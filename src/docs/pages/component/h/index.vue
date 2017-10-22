<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    > 
    <script type="text/markdown">

    # 标题 `<ui-h>`
    
    <doc-component-status page="h"></doc-component-status>
    
    [[[基础]]]

    定义一个标准标题，此组件可以替换原生的`h1-h6`标签，这是一个块级元素。

    #### 使用
    
    :::democode/html
    <ui-h>标题</ui-h>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`black`|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 尺寸
    
    :::repeat/html
    size
    ---
    <ui-h {$sizeKey}>{$&sizeName}</ui-h>
    :::

    #### 色彩

    :::preset/html
    statementColor
    ---
    uikey:h
    :::

    #### 状态
    
    :::repeat/html
    state:normal,apparent
    ---
    <ui-h {$stateKey}>{$&stateName}</ui-h>
    :::

    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/h/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {
        return {
            page : 'h'
        };

    },
    components : {
        'doc-component' : DocComponent
    },
    mounted : function () {
        window.a = this;
    }
};
</script>

<style lang="less">
</style>
