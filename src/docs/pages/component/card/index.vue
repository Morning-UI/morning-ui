<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 卡片 `<ui-card>`

    ### 基础

    定义一张卡片，卡片包含头部和主体部分。

    #### 使用

    ````html
    <div style="width:180px;height:240px;">
        <ui-card>卡片</ui-card>
    </div>
    ````

    #### 带头部的卡片

    ````html
    <div style="width:180px;height:240px;">
        <ui-card>
            <header>头部</header>
            <div>卡片</div>
        </ui-card>
    </div>
    ````

    #### 无间隙卡片

    卡片内容部分默认具有间隙，可以通过full类来去除间隙。

    ````html
    <div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">
        <ui-card class="full">卡片</ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;vertical-align: top;">
        <ui-card class="full">
            <header>头部</header>
            <div>卡片</div>
        </ui-card>
    </div>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|-|
    |状态|不支持|-|

    #### 色彩

    ````html
    @colorTheme
    @colorFeature
    @colorBlack
    @colorBlue
    @colorSilver
    @colorGray
    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card {$color}>
            <header>{$&name}</header>
            <div>卡片</div>
        </ui-card>
    </div>
    ````
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
