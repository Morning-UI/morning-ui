<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 巨幕 `<ui-jumbotron>`

    ### 基础

    定义一个巨幕，巨幕包含标题、内容和一组按钮或链接，巨幕往往用来定义一个显眼的行动区域。

    巨幕可包含：
    
    - 标题 h1
    - 说明 p
    - 行动区域

    #### 使用

    ````html
    <ui-jumbotron>
        <h1>标题</h1>
        <p>这个一个介绍区域，用来放置一些介绍内容。<br>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <ui-btn m>行动</ui-btn> &nbsp;
        <ui-link minor m>查看更多</ui-link>
    </ui-jumbotron>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'jumbotron'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
