<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 致谢

    #### HmpUI贡献者

    MorningUI的诞生离不开HmpUI，在此感谢曾为HmpUI付出贡献的开发者：

    - 冯春艳(chunyan.feng@husor.com)
    - 杜金金(jinjin.du@husor.com)
    - 赵朋(peng.zhao@husor.com)
    - 张桠鑫(yaxin.zhang@husor.com)
    - 童颖(ying.tong@husor.com)
    - 段俊杰(junjie.duan@husor.com)

    #### MorningUI贡献者

    - 贺晨超(chenchao.he) <ui-textcolor minor><ui-small>Coding/Review</ui-small></ui-textcolor>

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'thank'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
