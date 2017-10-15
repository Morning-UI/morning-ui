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

    首先确保你的页面采用了Vue.js，然后只需简单三步即可使用Morning UI:

    1. [下载Morning UI](/dist/morning-ui.latest.gzip)
    2. 在页面中引用JS和CSS：
        - `<script type="text/javascript" src="path-to-morning/morning-ui.js">&lt;/script>`
        - `<style rel="stylesheet" link="path-to-morning/morning-ui.css">&lt;/style>`
    3. 在Vue的模板中使用：`<ui-btn>Hello Mroning.</ui-btn>`

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
