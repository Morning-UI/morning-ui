<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 开发环境

    在开始编写MorningUI的代码前，首先需要安装开发环境。

    为了帮助开发者快速开始，我们在项目工程化上倡导开箱即用。

    ### 推荐MAC OS

    我们强烈推荐开发者使用MAC OS来进行开发，以下文档内容仅针对MAC OS。

    如果你是一名Windows开发者，非常抱歉，我们目前暂时没有精力维护Windows下的开发环境。你可以先按照下面流程进行，如果出现问题请联系我们。

    ### 获取源码

    ### 本地安装

    ### 检测安装

    ### 开始吧!
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
