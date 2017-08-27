<template>
    <div>
        <doc-header :menu="name"></doc-header>
        <doc-body>
            <doc-submenu :menu="submenu" name="subMenu"></doc-submenu>
        </doc-body>
    </div>
</template>
 
<script>
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocBody                      from 'Docs/common/DocBody.vue';
import DocSubmenu                   from 'Docs/common/DocSubmenu.vue';

export default {
    data : function () {

        return {
            name : 'component',
            submenu : {
                '布局组件' : null,
                '标题' : 'a',
                '中心内容' : 'b',
                '标记的文本' : 'b',
                '删除的文本' : 'b',
                '带下划线的文本' : 'b',
                '小号文本' : 'b',
                '着重' : 'b',
                '斜体' : 'b',
                '文本对其' : 'b',
                '大小写' : 'b',
                '引用' : 'b',
                '有序列表' : 'b',
                '内联列表' : 'b',
                '描述列表' : 'b',
                '文本颜色' : 'b',
                '栅格' : 'b',
                '卡片' : 'b',
                '容器' : 'b',
                '区块' : 'b',
                '分频器' : 'b',
                '居中容器' : 'b',
                '页头' : 'b',
                '徽章' : 'b',
                '标签' : 'b',
                '统计' : 'b',
                '行动栏' : 'b',
                '表单组' : 'b',
                '按钮组' : 'b',
                '巨幕' : 'b',
                '工具条' : 'b',
                '文章' : 'b',
                '图片' : 'b',
                '项目列表' : 'b',
                '代码' : 'b',
                '交互组件' : null,
                '按钮' : 'b',
                '链接' : 'b',
                '下拉式按钮组' : 'b',
                '级联菜单NEW' : 'b',
                '标签页' : 'b',
                '表格' : 'b',
                '分页' : 'b',
                '模拟盒' : 'b',
                '日历' : 'b',
                '载入' : 'b',
                '进度条NEW' : 'b',
                '滚动跟随' : 'b',
                '面包屑' : 'b',
                '提示框' : 'b',
                '视频' : 'b',
                '音频NEW' : 'b',
                '表单组件' : null,
                '文本输入' : 'b',
                '段落输入' : 'b',
                '开关' : 'b',
                '计数器NEW' : 'b',
                '下拉选择' : 'b',
                '级联选择UPDATE' : 'b',
                '滑块输入NEW' : 'b',
                '复选框组' : 'b',
                '单选框组' : 'b',
                '多项输入' : 'b',
                '多项表单输入' : 'b',
                '多项文本输入' : 'b',
                '批量表单输入' : 'b',
                '时间输入NEW' : 'b',
                '日期输入NEW' : 'b',
                '日期时间输入UPDATE' : 'b',
                '文件上传' : 'b',
                '图片热区输入' : 'b',
                '颜色选择' : 'b'
            }
        };

    },
    components : {
        'doc-header' : DocHeader,
        'doc-body' : DocBody,
        'doc-submenu' : DocSubmenu
    }
};
</script>

<style lang="less">
</style>
