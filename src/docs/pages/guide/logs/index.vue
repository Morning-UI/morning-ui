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

    <!-- ### 0.10.1 <ui-badge class="circle" s light-theme>Forerunner</ui-badge> -->
    
    ### 更新记录

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
</style>
