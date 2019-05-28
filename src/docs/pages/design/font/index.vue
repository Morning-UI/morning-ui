<template>

    <doc-design
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">

    # 字体

    Morning UI 字体应用原则如下：
    
    1. 英文优先，mac 优先（ mac 字体对 win 用户无影响）
    2. 兼顾不同的操作系统
    3. 浏览器向下兼容

    ## 字体

    建议字体声明：`font-family:  Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", sans-serif;`

    <img src="http://h0.hucdn.com/open201922/e3a6cbc7b43e7d37_1310x326.jpg">

    ## 字号

    力求在各个页面下有最佳展示效果，普通文本字号不得小于`14px`。

    <img src="http://h0.hucdn.com/open201922/45d0f2933cf077ec_1310x812.jpg">

    ## 字重

    多数情况下，只出现`regular(400)`以及`bold(700)`的两种字重。

    <img src="http://h0.hucdn.com/open201922/ed476b2b6c6cb8ff_868x326.jpg">

    ## 特殊样式

    在特殊情况下，若需要对文字进行特殊强调，可使用以下样式：

    <img src="http://h0.hucdn.com/open201922/b6ea179b6b35df78_252x142.jpg">

    </script>
    </doc-design>

</template>

<script>
import DocDesign                   from 'Docs/common/DocDesign.vue';

export default {
    data : function () {

        return {
            page : 'font'
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
