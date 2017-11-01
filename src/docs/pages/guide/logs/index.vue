<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 更新日志

    ### 版本规范

    Morning UI采用[语义化版本控制规范](http://semver.org/lang/zh-CN/)，同时采用`Stable`、`Beta`、`Canary`三种标记分别来标记版本。详见：[版本计划](/guide/versionplan.html)

    <!-- ### 1.0.0 <ui-badge class="circle" s light-black>Stable</ui-badge> -->

    <!-- ### 0.11.0 <ui-badge class="circle" s light-blue>Beta</ui-badge> -->
    
    ### 更新记录

    ### 0.10.1 <ui-badge class="circle ver-canary" s light-theme>Canary</ui-badge>

    <ui-textcolor light-blue><ui-small>发布于2017年10月31日</ui-small></ui-textcolor>
    
    - 增加codacy代码质量检测
    - 增加Lint、Build、Test、Coverage等CI流程
    - 更新README
    - 优化功能色彩
    - 移除`.npmignore`
    - 修复ESLint和StyleLint检测到的问题
    - 修复表单组的中表单销毁了，但值还可以通过`getGroup`取到的问题

    ### 0.10.0 <ui-badge class="circle ver-canary" s light-theme>Canary</ui-badge>

    <ui-textcolor light-blue><ui-small>发布于2017年10月31日</ui-small></ui-textcolor>

    MorningUI第一个版本，基于HMP UI，规范了定义，实现部分组件。

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'logs'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
.ver-canary{
    background: #f5ab27 !important;
}
</style>
