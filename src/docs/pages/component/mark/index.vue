<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 标记的文本 `<ui-mark>`
    
    <doc-component-status page="mark"></doc-component-status>

    [[[开始]]]

    定义标记内容，这是一个内联元素。

    :::vue
    > title
    使用
    ---
    <ui-mark>标记的文本</ui-mark>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|`normal`<br/>`apparent`|`normal`|

    <a href="/guide/status.html">查看形态文档</a>

    #### 色彩

    :::preset/html
    statusColor
    ---
    uikey:mark
    :::

    #### 状态
    
    :::repeat/html
    state:normal,apparent
    ---
    <ui-mark state="{$stateKey}">{$&stateName}</ui-mark>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/mark/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'mark'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
