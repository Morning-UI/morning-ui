<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 着重文本 `<ui-strong>`
    
    <doc-component-status page="strong"></doc-component-status>

    [[[开始]]]

    标记一段着重内容，这是一个内联元素。

    #### 使用
    
    :::democode/html
    <ui-strong>着重文本</ui-strong>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/strong/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'strong'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
