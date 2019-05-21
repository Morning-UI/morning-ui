<template>

    <doc-design
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">

    # 对齐

    ## 文案类内容对齐

    ##### 普通对齐样式/有序列表

    1. 均采用左对齐方式
    2. 通过采用增加段落间距的方式区分段落，而不是首行缩进

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201921/1bbf70d4f2a89a23_607x151.jpg" />
    </div>

    ##### 分层列表

    1. 均采用分层级左对齐方式
    2. 分层列表包含有序、无序两种状态

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201921/cd45be8afe5e39c4_606x397.jpg" />
    </div>

    ## 表单类内容对齐

    冒号对齐（右对齐）能让内容锁定在一定范围内，让用户眼球顺着冒号的视觉流，就能找到所有填写项，从而提高填写效率。

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201921/f9419f7d5571aba6_317x183.jpg" />
    </div>

    ## 数字类内容对齐

    数字末尾对齐。

    <div class="example">
        <p>示例：</p>
        <img src="http://h0.hucdn.com/open201921/6f59f035b01815ad_174x116.jpg" />
    </div>


    </script>
    </doc-design>

</template>

<script>
import DocDesign                   from 'Docs/common/DocDesign.vue';

export default {
    data : function () {

        return {
            page : 'align'
        };

    },
    components : {
        'doc-design' : DocDesign
    }
};
</script>

<style lang="less">
</style>
