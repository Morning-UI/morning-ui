<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 大写文本 `<ui-uppercase>`
    
    <doc-component-status page="uppercase"></doc-component-status>

    [[[开始]]]

    大写文本组件，这是一个内联元素。

    #### 使用
    
    :::democode/html
    <div><ui-uppercase>大写的英文文本: tHere is A LEtter</ui-uppercase></div>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/uppercase/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'uppercase'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
