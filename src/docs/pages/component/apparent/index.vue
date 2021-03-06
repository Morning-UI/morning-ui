<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 醒目内容 `<ui-apparent>`
    
    <doc-component-status page="apparent"></doc-component-status>

    [[[开始]]]

    定义醒目的内容，这是一个内联元素。

    此组件作为无醒目状态组件以及HTML元素的补充，若组件自带醒目状态请使用组件自身状态。

    :::vue
    @name:使用
    ---
    #demo
    >desc
    由于`ui-apparent`需要配合其他元素使用，因此你可以通过样式类来修改它的元素类型：
    <br><br>
    - `inline` : 内联元素(默认)
    - `inline-block` : 内联块元素
    - `block` : 块级元素
    >tpl
    <ui-apparent>醒目内容</ui-apparent>
    :::

    :::vue
    @name:配合内联元素
    ---
    #demo
    >desc
    配合内联元素使用时，需要添加`inline`类。
    >tpl
    <ui-apparent class="inline">
        <span>This is inline element</span>
    </ui-apparent>
    :::

    :::vue
    @name:配合内联块元素
    ---
    #demo
    >desc
    配合内联块元素使用时，需要添加`inline-block`类。
    >tpl
    <ui-apparent class="inline-block">
        <div style="background:#eee;display:inline-block">
            This is inline-block element
        </div>
    </ui-apparent>
    :::
    
    :::vue
    @name:配合块级元素
    ---
    #demo
    >desc
    配合块元素使用时，需要添加`block`类。
    >tpl
    <ui-apparent class="block">
        <div style="width:200px;height:50px;background:#eee;">
            This is block element
        </div>
    </ui-apparent>
    :::
    
    :::vue
    @name:配合无`apparent`状态组件
    ---
    #demo
    >desc
    由于`ui-block`是块级元素，需要为`ui-apparent`添加`block`样式类。
    >tpl
    <ui-apparent class="block">
        <ui-block>区块</ui-block>
    </ui-apparent>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/apparent/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'apparent'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
