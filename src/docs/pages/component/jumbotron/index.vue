<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 巨幕 `<ui-jumbotron>`
    
    <doc-component-status page="jumbotron"></doc-component-status>

    [[[开始]]]

    定义一个巨幕，巨幕包含标题、内容和一组按钮或链接，巨幕往往用来定义一个显眼的行动区域。

    :::vue
    @name:使用
    ---
    #demo
    >desc
    巨幕可包含：
    <br><br>
    - 标题: `h1`
    - 说明: `p`
    - 行动区域
    >tpl
    <ui-jumbotron>
        <h1>标题</h1>
        <p>这个一个介绍区域，用来放置一些介绍内容。<br>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <ui-btn size="m">行动</ui-btn> &nbsp;
        <ui-link color="minor" size="m">查看更多</ui-link>
    </ui-jumbotron>
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

    <iframe src="/report/coverage/lib/components/jumbotron/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
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
