<template>

    <doc-design
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">

    # 对比

    对比是增加信息展示优先级最有效方法之一，让用户快速识别关键信息。

    ## 主次关系对比

    为了让用户能在操作上（类似表单、弹出框等场景）快速做出判断， 来突出其中一项相对更重要或者更高频的操作or弱化其中一项相对不重要或更低频的操作。

    注：在使用对比时，尽量保证被突出的元素只有1个

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201921/874a3469c72498a1_396x74.jpg" />
    </div>

    在一些需要用户慎重决策的场景中，系统应该保持中立，不能替用户或者诱导用户做出判断。

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201921/c18cf657bd640782_1152x295.jpg" />
    </div>

    ## 状态关系对比

    通过改变颜色的方法来实现状态关系的对比，以便用户更好的区分信息。

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201921/db345a5b5066b832_1152x509.jpg" />
    </div>

    </script>
    </doc-design>

</template>

<script>
import DocDesign                   from 'Docs/common/DocDesign.vue';

export default {
    data : function () {

        return {
            page : 'compared'
        };

    },
    components : {
        'doc-design' : DocDesign
    }
};
</script>

<style lang="less">
</style>
