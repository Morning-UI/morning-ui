<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    
    # 定制化

    Morning UI有着一套统一的色彩、圆角、边框规范标准。Mogning UI支持以下内容定制，以应对不同的使用场景：

    - 使用的组件
    - 色彩
    - 圆角
    - 表单组件的样式

    ### 定制方式

    #### Webpack

    #### Morning Customize

    #### 配置LESS变量文件

    ### LESS变量

    Morning UI的样式使用了LESS，样式上可定制化的内容均通过样式变量实现，你可以在[这里](https://github.com/Morning-UI/morning-ui/blob/dev/src/lib/common/var.less)找到。



    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'customize'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
