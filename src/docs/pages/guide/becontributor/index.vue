<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 成为贡献者

    首先非常感谢你愿意为MorningUI贡献自己的时间及能力。

    ## 成为哪种贡献者

    目前你可以通过两种方式为项目做出贡献：

    - 检视代码(Review)
    - 编写代码(Coding)

    如果你决定通过检视代码(Review)的方式来提供贡献，请直接查阅：[检视代码](/guide/review.html)章节。
    
    如果你决定编写代码至项目请发送邮件至`earlyhe0@gmail.com`我们会联系你，在等待回复的时候请阅读以下章节了解详细情况：
    
    - [开发环境](/guide/devenv.html)
    - [开发规范](/guide/devrule.html)
    - [编写文档](/guide/writedoc.html)
    - [编写测试](/guide/writetest.html)
    - [检视代码](/guide/review.html)
    - [提交代码](/guide/commitcode.html)
    - [版本计划](/guide/versionplan.html)

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'becontributor'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
