<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    
    # 介绍

    ### Morning UI是什么？

    Morning UI是一套桌面Web端的UI库，基于[Vue.js](https://vuejs.org/)。

    ### 快速开始

    首先确保你的页面采用了Vue.js，然后只需简单四步即可使用Morning UI:

    1. [获取Morning UI](/dist/morning-ui.latest.gzip)
    2. 在页面中引用Vue.js以及Morning UI的JS和CSS：
        - `<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue">&lt;/script>`
        - `<script type="text/javascript" src="path-to-morning/morning-ui.js">&lt;/script>`
        - `<style rel="stylesheet" link="path-to-morning/morning-ui.css">&lt;/style>`
    3. 初始化Morning UI： `window.morning.init();`
    4. 在Vue的模板中使用：`<ui-btn>Hello Mroning.</ui-btn>`

    完整的代码如下：

    ```html
    <html>
        <head>
            <!-- ... -->
            <!-- 引入Morning UI的css -->
            <style rel="stylesheet" link="path-to-morning/morning-ui.css">&lt;/style>
        </head>
        <body>
            <!-- 使用组件 -->
            <ui-btn>Hello Mroning.</ui-btn>

            <!-- 引入Vue.js和Morning UI的js  -->
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue">&lt;/script>
            <script type="text/javascript" src="path-to-morning/morning-ui.js">&lt;/script>

            <!-- 初始化Morning UI -->
            <script type="text/javascript">
            window.morning.init();
            &lt;/script>
        </body>
    </html>
    ```

    然后即可看到：

    <ui-btn>Hello Mroning.</ui-btn>

    恭喜你使用了第一个Morning UI组件。

    ### 接下来

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
