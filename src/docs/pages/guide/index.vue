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
            name : 'guide',
            submenu : {
                '开始使用' : null,
                '介绍' : 'a',
                '安装' : 'a',
                '使用' : 'a',
                '定制化' : 'a',
                '更新日志' : 'b',
                '基础' : null,
                '示例' : 'b',
                '声明' : 'b',
                '配置' : 'b',
                '方法' : 'b',
                '事件' : 'b',
                '表单值' : 'b',
                '进阶' : null,
                '设计思想' : 'a',
                '生命周期' : 'b',
                '贡献代码' : null,
                '开发环境' : 'b',
                '组件及开发规范' : 'b',
                '提交代码' : 'b',
                '版本发布' : 'b'
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
