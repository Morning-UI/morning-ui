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
    
    |标记|名称|说明|更新<br>频率|生产环境|
    |-|-|-|-|-|
    |<ui-badge class="circle ver-stable" s theme>Stable</ui-badge>|稳定版本|此版本中的各个功能都经过一段时间的测试及使用，非常稳定|month|推荐使用|
    |<ui-badge class="circle ver-beta" s extra-light-black>Beta</ui-badge>|公开测试版本|包含了一些新的特性，并且修复了大部分问题的版本，相对较为稳定|week|可用<br>不推荐|
    |<ui-badge class="circle ver-canary" s>Canary</ui-badge>|金丝雀版本|包含大量新特性的版本，这个版本是实验性的，可能存在较多的问题<br><ui-small><ui-textcolor extra-light-blue>为开发者及早期用户设计的版本</ui-textcolor></ui-small>|~daily|请勿使用|


    <!-- ### 1.0.0 <ui-badge class="circle" s light-black>Stable</ui-badge> -->

    <!-- ### 0.11.0 <ui-badge class="circle" s light-blue>Beta</ui-badge> -->

    <!-- ### 0.10.1 <ui-badge class="circle" s light-theme>Forerunner</ui-badge> -->
    
    ### 更新记录

    ### 0.10.1 <ui-badge class="circle ver-canary" s light-theme>Canary</ui-badge>

    <ui-textcolor light-blue><ui-small>发布于2017年10月12日</ui-small></ui-textcolor>

    - 文档更新
    - 增加组件单元测试

    ### 0.10.0 <ui-badge class="circle ver-canary" s light-theme>Canary</ui-badge>

    <ui-textcolor light-blue><ui-small>发布于2017年10月11日</ui-small></ui-textcolor>

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
