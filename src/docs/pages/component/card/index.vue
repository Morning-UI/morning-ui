<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 卡片 `<ui-card>`
    
    <doc-component-status page="card"></doc-component-status>

    [[[开始]]]

    定义一张卡片，卡片包含头部和主体部分。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:180px;height:240px;">
        <ui-card>
            <header>头部</header>
            <div>卡片</div>
        </ui-card>
    </div>
    :::

    :::vue
    @name:没有头部的卡片
    ---
    #demo
    >tpl
    <div style="width:180px;height:240px;">
        <ui-card>卡片</ui-card>
    </div>
    :::

    :::vue
    @name:无间隙卡片
    ---
    #demo
    >desc
    卡片内容部分默认具有间隙，可以通过`full`类来去除间隙。
    >tpl
    <div>
        <div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">
            <ui-card class="full">卡片</ui-card>
        </div>

        <div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">
            <ui-card class="full">
                <header>头部</header>
                <div>卡片</div>
            </ui-card>
        </div>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    :::vue
    @layout:color
    ---
    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card color="{$colorKey}">
            <header>{$&colorName}</header>
            <div>卡片</div>
        </ui-card>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/card/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'card'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
