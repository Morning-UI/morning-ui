<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    
    # 介绍

    ## Morning UI是什么？

    Morning UI是一套桌面端UI组件库，基于[Vue.js](https://vuejs.org/)。

    ## 快速开始

    首先确保你的页面采用了Vue.js，然后只需简单三步即可使用Morning UI:

    > 注意：请使用`2.5.3`版本以上的Vue.js

    1. 首先[获取Morning UI](/guide/install.html)，并在页面中引用Vue.js以及Morning UI的JS和CSS：
        - `<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue">&lt;/script>`
        - `<script type="text/javascript" src="path-to-morning/morning-ui.js">&lt;/script>`
        - `<style rel="stylesheet" link="path-to-morning/morning-ui.css"></style>`
    2. 在Vue的模板中使用组件： `<ui-btn>Hello Mroning.</ui-btn>`
    3. 初始化Morning UI及Vue模板：

    ```js
    Vue.use(morning);
    new Vue({
        el : '#vue-template'
    });
    ```

    完整的代码如下：

    ```html
    <html>
        <head>
            <!-- ... -->
            <!-- 引入Morning UI的css -->
            <style rel="stylesheet" link="path-to-morning/morning-ui.css">&lt;/style>
        </head>
        <body>
            <!-- 引入Vue.js和Morning UI的js  -->
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue">&lt;/script>
            <script type="text/javascript" src="path-to-morning/morning-ui.js">&lt;/script>

            <!-- 在Vue的模板中使用组件 -->
            <div id="vue-template">
                <ui-btn>Hello Mroning.</ui-btn>
            </div>

            <!-- 初始化Morning UI及Vue模板 -->
            <script type="text/javascript">
            Vue.use(morning);
            new Vue({
                el : '#vue-template'
            });
            &lt;/script>
        </body>
    </html>
    ```

    然后即可看到：

    <ui-btn>Hello Mroning.</ui-btn>

    恭喜你使用了第一个Morning UI组件。

    ## 接下来

    通过CDN、Webpack或更多途径使用Morning UI，见：[安装](/guide/install.html)

    使用Morning UI的更多特性，见：[使用](/guide/usage.html)

    为Morning UI贡献自己的力量，见：[成为贡献者](/guide/becontributor.html)

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'introduction'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
