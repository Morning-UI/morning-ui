<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <!-- 如果你使用了类似[Webpack](https://webpack.js.org/)或[Browserify](http://browserify.org/)之类的模块打包工具，你可以使用`require`或`import`等方式引用。
    
    下面拿[Webpack](https://webpack.js.org/)举例，如果你下载了Morning UI并放在了某个目录，直接从那个目录引入即可：

    ```html
    import './path-to-morning/morning-ui.js';
    import './path-to-morning/morning-ui.css';
    
    
    如果你通过NPM安装：

    ```html
    import 'morning-ui';
    ```
    ``` -->
    <script type="text/markdown">
    # 安装

    ### 安装Vue

    由于MorningUI依赖Vue.js，请先安装`2.4.0`以上的Vue.js。

    [了解如何安装Vue.js](https://cn.vuejs.org/v2/guide/installation.html)

    ### 获取MorningUI

    Morning UI的构建版本位于`dist`目录，包含四个文件：

    - `morning-ui.js` : 开发版本JS
    - `morning-ui.css` : 开发版本CSS
    - `morning-ui.min.js` : 生产版本JS
    - `morning-ui.min.css` : 生产版本CSS

    你可以通过下面的方式获取：

    ##### 直接下载

    <ui-btn m new-tab id="download">下载</ui-btn>
    
    ##### NPM安装

    Coming soon.
    
    ##### CDN

    Coming soon.

    ### 页面引用

    ##### 使用标签

    获取Morning UI后分别使用`<script>`及`<style>`标签在页面中引用：

    ```html
    <link href="path-to-morning/morning-ui.css" rel="stylesheet">
    <script src="path-to-morning/morning-ui.js">&lt;/script>
    ```

    ##### 使用模块打包器

    Coming soon.
    
    ### 全局变量

    无论你采用哪种方式引用Morning UI，都会在全局注册`window.morning`变量。

    ### 更多

    #### 更新日志

    查看MorningUI的[更新日志](/guide/logs.html)。

    #### 自定义组件库
    
    目前MorningUI不支持自定义组件库，此功能将在稍后支持。

    
    </script>
    </doc-guide>
</template>
 
<script>
import axios                       from 'axios';
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

            $download._vm.setConf('link', `https://github.com/EarlyH/morning-ui/archive/.${version}.zip`);
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
