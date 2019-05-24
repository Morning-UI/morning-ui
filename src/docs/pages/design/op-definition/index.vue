<template>

    <doc-design
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">

    # 操作定义

    ## 鼠标操作

    鼠标在不同操作时，应呈现对应的状态：

    1. 默认状态：`箭头`
    2. 经过可点击元素：`手指`
    3. 可输入的元素：`光标`
    4. 无法点击/不可操作状态下：`禁用`
    5. 可拖拽的形状：`十字拖动/左右/上下箭头`

    ## 键盘操作

    键盘操作快捷，方便：
    
    1. 支持回车键提交表单
    2. 支持回车键查询数据
    3. 支持`Tab`键及`上、下、左、右`箭头移动光标焦点，遵循从左到右、从上到下的原则

    ## 页面返回

    应该允许用户不依赖浏览器返回，提供更快捷的返回入口：
    
    当从一个页面点击按钮或链接进入子页面时，子页面必须提供返回按钮。

    ## 当前窗口/新窗口

    定义本窗口打开或新窗口打开：

    1. 本窗口打开：查询结果、上下翻页、新增条目、编辑条目等操作在本窗口打开
    2. 新窗口打开：各类详情、提示说明页、预览页面等采用新窗口打开
    
    如有特殊，可视情况而定。

    ## 页面兼容

    1. 页面宽度`1440px`
    2. 弹窗要保证`900px`的高度下显示正常，同时能滑动查看弹出框内容。浏览器头部地址栏、工具栏总高预计`120px`，上下各预留`30px`的空间，因此弹出框高度不超过`720px`，并显示在页面内相对水平、垂直居中的位置。

    </script>
    </doc-design>

</template>

<script>
import DocDesign                   from 'Docs/common/DocDesign.vue';

export default {
    data : function () {

        return {
            page : 'op-definition'
        };

    },
    components : {
        'doc-design' : DocDesign
    }
};
</script>

<style lang="less">
</style>
