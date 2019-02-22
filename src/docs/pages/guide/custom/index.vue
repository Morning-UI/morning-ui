<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 定制化

    Morning UI目前仅支持主题色自定义。

    ## 主题色定制

    Morning UI默认使用了以下的主题色：

    ```less
    @colorTheme : #F33D5D;
    @colorLightTheme : #F86F88;
    @colorDarkTheme : #D22343;
    ```

    #### 使用模块打包器

    若你的工程采用了类似`Webpack`这样的模块打包器，可以通过LESS变量覆盖的方式来实现主题色定制。

    首先在项目中创建一个主题样式文件，比如：`my-theme.less`，在文件中写入以下内容：

    ```less
    @import '~morning-ui/src/lib/styles/index.less';

    // 覆写主题色
    @colorTheme : #2890DA;
    @colorLightTheme : #3594D8;
    @colorDarkTheme : #0672BF;
    ```

    需要注意的是Morning UI中除了主题色之外，分别有浅主题色、深主题色总共三种颜色，都需要进行覆写。

    然后在项目中引入Morning UI时，将`import 'morning-ui/dist/morning-ui.css';`替换成`my-theme.less`这个文件，比如：

    ```js
    // 引入Vue.js
    import Vue from 'vue';

    // 引入Morning UI
    import morning from 'morning-ui';

    // 引入定制化的主题色
    import './theme/my-theme.less';

    // 初始化Morning UI
    Vue.use(morning);
    ```

    由于Morning UI的样式中引用了`less`及`woff`文件，请确保你的模块打包器配置可处理此类型的文件。

    注意：若你的项目未使用模块打包器，则暂时不支持主题色定制。

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'custom'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
