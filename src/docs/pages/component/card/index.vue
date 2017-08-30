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
    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card theme>
            <header>主题色</header>
            <div>卡片</div>
        </ui-card>
    </div>
    
    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card light-theme>
            <header>浅主题色</header>
            <div>卡片</div>
        </ui-card>
    </div>
    
    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card dark-theme>
            <header>深主题色</header>
            <div>卡片</div>
        </ui-card>
    </div>
    ````

    ````html
    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card success>
            <header>成功/正确</header>
            <div>卡片</div>
        </ui-card>
    </div>
    
    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card warning>
            <header>警告/注意</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card danger>
            <header>错误/危险</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card primary>
            <header>主要/关键</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card minor>
            <header>次要/不醒目</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card info>
            <header>信息/额外</header>
            <div>卡片</div>
        </ui-card>
    </div>
    ````

    ````html
    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card black>
            <header>黑色</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card light-black>
            <header>浅黑色</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card extra-light-black>
            <header>超浅黑色</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card blue>
            <header>青色</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card light-blue>
            <header>浅青色</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card extra-light-blue>
            <header>超浅青色</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card silver>
            <header>银色</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card light-silver>
            <header>浅银色</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card extra-light-silver>
            <header>超浅银色</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card gray>
            <header>灰色</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card light-gray>
            <header>浅灰色</header>
            <div>卡片</div>
        </ui-card>
    </div>

    <div style="width:180px;height:240px;display:inline-block;margin:10px;">
        <ui-card white>
            <header>白色</header>
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
