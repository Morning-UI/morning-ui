<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 安装

    ### 安装Vue

    由于MorningUI依赖Vue.js，请先安装`2.0.0`以上的Vue.js。

    [了解如何安装Vue.js](https://cn.vuejs.org/v2/guide/installation.html)

    ### 获取MorningUI

    MorningUI包含两个文件(JS及CSS)。

    你可以直接下载MorningUI使用：

    <ui-btn m >开发版本</ui-btn> <ui-btn m>生产版本</ui-btn>

    也可以通过npm进行安装：

    `npm install morning-ui`

    ### 页面引用

    获取MorningUI后分别使用`<script>`及`<style>`标签在页面中引用。MorningUI会在全局注册`window.morning`变量。

    ### 更多

    #### 更新日志

    查看MorningUI的[更新日志](/guide/logs.html)。

    #### 自定义组件库
    
    目前MorningUI不支持自定义组件库，此功能将在稍后支持。

    
    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'install'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
