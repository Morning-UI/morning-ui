<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 文章 `<ui-article>`
    
    <doc-component-status page="article"></doc-component-status>

    [[[开始]]]

    定义文章内容区域，支持多种类来格式化文章标题、元信息及内容。

    :::vue
    @name:使用
    ---
    #demo
    >desc
    文章可包含：
    <br><br>
    - 标题: `.title`
    - 元信息: `.meta`
    - 核心内容: `.lead`
    - 正文: `.body`
    >tpl
    <ui-article>
        <div class="title">A Guide to Upgrading to Polymer 1.0</div>
        <div class="meta">July 15, 2015 by Pankaj Parashar</div>
        <div class="lead">At the recently concluded Google IO 2015, Google released the much awaited 1.0 version of Polymer and declared it production-ready.</div>
        <div class="body">
            <p>For those of you who have been using the Polymer library while it was still in developer preview, this article will serve as a guide to migrate your existing application to the latest version of Polymer.</p>
            <p>The steps to install the latest version of Polymer remain exactly the same as described in this article. To update an existing installation of Polymer, navigate to the app directory and run the following command in your terminal</p>
        </div>
    </ui-article>
    :::

    :::vue
    @name:带下划线的元信息
    ---
    #demo
    >desc
    添加`underline`样式类可为文章的元信息添加下划线。
    >tpl
    <ui-article class="underline">
        <div class="title">A Guide to Upgrading to Polymer 1.0</div>
        <div class="meta">July 15, 2015 by Pankaj Parashar</div>
        <div class="lead">At the recently concluded Google IO 2015, Google released the much awaited 1.0 version of Polymer and declared it production-ready.</div>
        <div class="body">
            <p>For those of you who have been using the Polymer library while it was still in developer preview, this article will serve as a guide to migrate your existing application to the latest version of Polymer.</p>
            <p>The steps to install the latest version of Polymer remain exactly the same as described in this article. To update an existing installation of Polymer, navigate to the app directory and run the following command in your terminal</p>
        </div>
    </ui-article>
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

    <iframe src="/report/coverage/lib/components/article/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'article'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
