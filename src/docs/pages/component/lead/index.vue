<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 中心内容 `<ui-lead>`
    
    <doc-component-status page="lead"></doc-component-status>

    [[[开始]]]

    #### 使用

    定义一段中心内容，这是一个块级元素。
    
    :::democode/html
    <ui-lead>中心内容</ui-lead>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`black`|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 色彩

    :::preset/html
    statementColor
    ---
    uikey:lead
    :::

    #### 状态
    
    :::repeat/html
    state:normal,apparent
    ---
    <ui-lead {$stateKey}>{$&stateName}</ui-lead>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/lead/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'lead'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
