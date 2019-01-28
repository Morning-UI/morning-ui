<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 安装

    ## 安装Vue

    由于MorningUI依赖Vue.js，请先安装`2.5.3`以上的Vue.js（推荐使用`2.5.17`版本的Vue.js）。

    [了解如何安装Vue.js](https://cn.vuejs.org/v2/guide/installation.html)

    ## 获取MorningUI

    Morning UI的构建版本位于`dist`目录，包含四个文件：

    - `morning-ui.js` : 开发版本JS
    - `morning-ui.css` : 开发版本CSS
    - `morning-ui.min.js` : 生产版本JS
    - `morning-ui.min.css` : 生产版本CSS

    <ui-quote color="theme">我们建议在生产环境锁定版本并使用稳定版本的Morning UI，详见：<a href="/guide/versionplan.html">版本计划</a> 及 <a href="/guide/logs.html">更新日志</a></ui-quote>

    你可以通过下面的方式获取：

    #### 直接下载

    <ui-btn size="m" new-tab id="download">下载</ui-btn>

    <a href="/guide/logs.html">下载历史版本(Package)</a>
    
    #### NPM安装
    
    推荐使用NPM的方式安装，它能很好地和诸如`Webpack`或`Rollup`模块打包器配合使用。

    ```shell
    # 最新版
    $ npm install morning-ui
    ```
    
    #### CDN

    - 最新版Morning UI：
        - jsdelivr
            - [https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.js](https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.js) 
            - [https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.css](https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.css)
            - [https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.js](https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.js) 
            - [https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.css](https://cdn.jsdelivr.net/npm/morning-ui/dist/morning-ui.min.css)
        - unpkg
            - [https://unpkg.com/morning-ui/dist/morning-ui.js](https://unpkg.com/morning-ui/dist/morning-ui.js) 
            - [https://unpkg.com/morning-ui/dist/morning-ui.css](https://unpkg.com/morning-ui/dist/morning-ui.css)
            - [https://unpkg.com/morning-ui/dist/morning-ui.min.js](https://unpkg.com/morning-ui/dist/morning-ui.min.js) 
            - [https://unpkg.com/morning-ui/dist/morning-ui.min.css](https://unpkg.com/morning-ui/dist/morning-ui.min.css)

    - 历史版本：[https://cdn.jsdelivr.net/npm/morning-ui/](https://cdn.jsdelivr.net/npm/morning-ui/)

    我们建议在生产环境锁定版本并使用稳定版本的Morning UI，以免Mroning UI升级时受到兼容性影响。锁定方法是增加`@[锁定的版本号]`关键词，例如锁定在`0.10.21`版本：

    - jsdelivr : https://cdn.jsdelivr.net/npm/morning-ui@0.10.21/dist/morning-ui.js
    - unpkg : https://unpkg.com/morning-ui@0.10.21/dist/morning-ui.js

    ## 页面引用

    #### 使用标签

    分别使用`<script>`及`<style>`标签在页面中引用：

    ```html
    <!-- 引入Vue.js -->
    <script src="path-to-vue/vue.js">&lt;/script>

    <!-- 引入Morning UI -->
    <link href="path-to-morning/morning-ui.css" rel="stylesheet">
    <script src="path-to-morning/morning-ui.js">&lt;/script>

    <!-- 初始化Morning UI -->
    <script>
    Vue.use(morning);

    // ...
    &lt;/script>
    ```

    这种方式会在全局注册`window.morning`变量。

    #### 使用模块打包器
    
    在JS文件中通过`import`引入：
    
    ```js
    // 引入Vue.js
    import Vue from 'vue';

    // 引入Morning UI
    import morning from 'morning-ui';
    import 'morning-ui/dist/morning-ui.css';

    // 初始化Morning UI
    Vue.use(morning);
    ```

    ## 更多

    #### 更新日志

    查看MorningUI的[更新日志](/guide/logs.html)。

    #### 自定义组件库
    
    目前MorningUI不支持自定义组件库，此功能将在稍后支持。

    </script>
    </doc-guide>
</template>
 
<script>
import axios                       from 'Npm/axios/dist/axios.min.js';
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'install',
            version : '-'
        };

    },
    components : {
        'doc-guide' : DocGuide
    },
    mounted : function () {
    
        axios.get('/package.json')
        .then(response => {
    
            let version = response.data.version;
            let $download = this.$el.querySelector('#download');


            $download._vm.conf.link = `https://github.com/Morning-UI/morning-ui/archive/${version}.zip`;
            $download.innerText = `下载v${version}`;
        
        })
        .catch(error => {

            throw new Error(error);

        });

    }
};
</script>

<style lang="less">
</style>
