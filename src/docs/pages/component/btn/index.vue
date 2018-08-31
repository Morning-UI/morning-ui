<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 按钮 `<ui-btn>`
    
    <doc-component-status page="btn"></doc-component-status>
    
    [[[开始]]]

    定义一个按钮，这是一个内联块元素。
    
    :::vue
    @name:尺寸
    ---
    #demo
    >repeat
    size
    >tpl
    <ui-btn size="{$sizeKey}">{$&sizeName}</ui-btn>
    ---
    #demo
    >repeat
    size
    >desc
    尺寸配合`locked`一起使用。
    >tpl
    <ui-btn size="{$sizeKey}" locked>{$&sizeName}</ui-btn>
    ---
    #demo
    >repeat
    size
    >desc
    尺寸配合`circle`样式类及`locked`一起使用。
    >tpl
    <ui-btn size="{$sizeKey}" class="circle">
        <i class="mo-icon mo-icon-star-f"></i>
    </ui-btn>
    >tpl
    <ui-btn size="{$sizeKey}" class="circle" locked></ui-btn>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/btn/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'btn'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
