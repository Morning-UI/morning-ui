<template>

    <doc-design
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">

    # 布局

    ## 画板统一

    为了尽可能减少沟通与理解的成本，统一的画板尺寸为`1440px`宽。

    ## 适配

    #### 左右布局

    导航区域不缩放，内容区域自动缩放，缩小至最小尺寸时，不再缩放。最小尺寸为`1280px`。

    非表格型页面按照内容区缩放的规则展示：

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201922/44094f4c41cafdc0_736x319.jpg" />
    </div>

    表格型页面按照内容区缩放+表格缩放的规则展示：

    注：因表格的缩放规则比较复杂，因此建议在设定表头宽度时，按照内容区宽度的百分比进行设置

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201922/2a7e2967f5c864b6_736x319.jpg" />
    </div>

    #### 上下布局

    对两边留白区域进行最小值的定义，当留白区域到达限定值之后再对中间的主内容区域进行动态缩放。

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201922/46a999891317db4e_736x319.jpg" />
    </div>

    </script>
    </doc-design>

</template>

<script>
import DocDesign                   from 'Docs/common/DocDesign.vue';

export default {
    data : function () {

        return {
            page : 'layout'
        };

    },
    components : {
        'doc-design' : DocDesign
    }
};
</script>

<style lang="less">
.markdown-body img{
    border: none !important;
}
</style>
