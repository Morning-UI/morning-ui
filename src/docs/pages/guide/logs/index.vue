<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 更新日志

    ### 说明

    MorningUI采用[语义化版本控制规范](http://semver.org/lang/zh-CN/)。

    同时采用以下三种标记标示不同的版本：

    - `Stable` : 稳定版本，各个功能都经过一段时间的测试，非常稳定，建议在生成环境使用。
    - `Beta` : 公开测试版本，里面包含了一些新的特性，相对较为稳定。
    - `Forerunner` : 先行者版本，包含大量新特性的版本，这个版本是实验性的，不适合用于生产环境。

    <!-- ### 1.0.0 <ui-badge class="circle" s light-black>Stable</ui-badge> -->

    <!-- ### 0.11.0 <ui-badge class="circle" s light-blue>Beta</ui-badge> -->

    <!-- ### 0.10.1 <ui-badge class="circle" s light-theme>Forerunner</ui-badge> -->

    ### 0.10.0 <ui-badge class="circle" s light-theme>Forerunner</ui-badge>

    <ui-textcolor light-blue><ui-small>发布于2017年9月17日</ui-small></ui-textcolor>

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
