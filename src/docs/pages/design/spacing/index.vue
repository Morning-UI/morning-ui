<template>

    <doc-design
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">

    # 间距

    ## 行高与段落

    标题行高默认为字号的 1.5 倍，正文行高默认为字号的 1.5 倍，段落间距为字号的 1 倍宽。

    <img src="http://h0.hucdn.com/open201921/ad492e6fe6c8b303_1320x148.jpg">


    ## 间距关系

    ##### 纵向

    通过`小号间距`、`中号间距`、`大号间距`三种规格来划分信息层次，如果信息之间关联性越高，他们之间的距离就应该约接近，也越像一个视觉单元；反之，应该越远。

    <img src="http://h0.hucdn.com/open201921/f7b075cbbf33d2e9_418x90.jpg">

    在这三种规格不适用的情况下，可使用`基础间距 = 4*n`的间距，如 16px 为基础间距。如需要更大倍数的间距，请按照`4*n`规律进行计算。

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201921/cb0022499738ad9d_678x136.jpg" />
    </div>

    ##### 横向

    为了适用不同尺寸的屏幕，在横向采用自适应布局来排布组件，从而保证布局的灵活性。
    
    在一个组件内部，元素的横向间距也应该有所不同。

    <img src="http://h0.hucdn.com/open201921/6cefa977e844fdd9_568x131.jpg">

    在这三种规格不适用的情况下，可使用`基础间距 = 4*n`的间距，如`16px`为基础间距。如需要更大倍数的间距，请按照`4*n`规律进行计算。

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201921/eec13e519d8d14d7_919x189.jpg" />
    </div>

    ## 标点

    1. 默认使用全角中文标点，特殊情况如时间可使用全角英文标点
    2. 遇到完整的英文整句、特殊名词，其内容使用半角标点
    3. 数字使用半角字符
    4. 使用`*`可表示重要性内容
    5. 短句一律不使用句号

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201921/c077149235d417d3_132x77.jpg" />
    </div>

    ## 空格

    1. 中文和英文间需要空格
    2. 正文与链接之间需要空格
    3. 数字与中文、英文之间需要增加空格
    4. 数字与符号之间不需要空格，数字与表示单位的英文字母之间不需要空格（如 2px）

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201921/344548437471dd46_1001x35.jpg" />
    </div>

    </script>
    </doc-design>

</template>

<script>
import DocDesign                   from 'Docs/common/DocDesign.vue';

export default {
    data : function () {

        return {
            page : 'spacing'
        };

    },
    components : {
        'doc-design' : DocDesign
    }
};
</script>

<style lang="less">

</style>
