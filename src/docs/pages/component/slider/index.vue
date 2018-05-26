<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 滑块输入 `<ui-slider>`
    
    <doc-component-status page="slider"></doc-component-status>
    
    [[[开始]]]

    定义一个滑块输入。

    #### 使用

    :::democode/html
    <div style="width:400px;">
        <ui-slider form-name="进度"></ui-slider>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:slider
    statusDefaultValue:40
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[rows](#rows)|段落输入框的默认高度对应的行数，若设置了`max-rows`则此数值不会超过`max-rows`。|大于0的数字|Number|`4`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:slider
    configDefaultValue:40
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/slider/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'slider'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
