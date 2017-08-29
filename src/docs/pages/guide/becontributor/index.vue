<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 成为贡献者

    首先非常感谢你愿意为MorningUI贡献自己的时间及能力。

    ### 成为哪种贡献者

    目前你可以通过两种方式为项目做出贡献：

    - 检视代码(Review)
    - 提交代码(Coding)

    如果你决定通过检视代码(Review)的方式来提供贡献，请直接查阅：<a href="/docs/guide/review.html">检视代码</a>章节。
    
    如果你决定提交代码至项目请发送邮件至`chenchao.he@husor.com`我们会帮助你，在等待回复的时候请阅读以下章节了解详细情况：
    
    - 开发环境
    - 组件及开发规范
    - 文档及测试
    - 提交代码
    - 检视代码
    - 版本发布

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
