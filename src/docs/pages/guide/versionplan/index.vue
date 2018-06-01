<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 版本计划

    ### 版本规范

    Morning UI采用[语义化版本控制规范](http://semver.org/lang/zh-CN/)。

    同时采用以下三种标记标示不同的版本：
    
    |标记|名称|说明|更新<br>频率|生产环境|
    |-|-|-|-|-|
    |<ui-badge class="circle ver-stable" size="s" color="theme">Stable</ui-badge>|稳定版本|此版本中的各个功能都经过一段时间的测试及使用，非常稳定|month|推荐使用|
    |<ui-badge class="circle ver-beta" size="s" color="extra-light-black">Beta</ui-badge>|公开测试版本|包含了一些新的特性，并且修复了大部分问题的版本，相对较为稳定|week|可用<br>不推荐|
    |<ui-badge class="circle ver-canary" size="s">Canary</ui-badge>|金丝雀版本|包含大量新特性的版本，这个版本是实验性的，可能存在较多的问题<br><ui-small><ui-textcolor color="extra-light-blue">为开发者及早期用户设计的版本</ui-textcolor></ui-small>|~daily|请勿使用|

    版本发布情况请查看：[更新日志](/guide/logs.html)。

    ### 更新日志规范

    更新日志包含了单个版本的变动，按变动类型分为：

    - 新特性
    - 改进
    - 修复
    - 废弃
    - 其他(包含文档、测试等变动)

    若是某个组件变动，需要写明组件的名字，如`ui-btn`。

    如果变动中包含了不兼容的变动，需要增加`升级注意事项`来写清楚变动情况及替代方案。
    
    ### ROAD MAP

    - `0.10.0` : <ui-badge size="xxs" color="success">DONE</ui-badge>Morning UI的首个版本
    - `0.11.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>同步HMP的所有组件，计划2018年春季发布
    - `0.12.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>同步Element UI组件，计划2018年夏季发布
    - `0.13.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>同步AntD组件，计划2018年夏季发布
    - `0.14.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>组件性能提升，计划2018年秋季发布
    - `0.15.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>完成所有组件的测试覆盖，计划2018年冬季发布
    - `0.16.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>支持构建自定义的组件库，计划2019年春季发布
    - `1.0.0` : <ui-badge size="xxs" color="gray">PLAN</ui-badge>第一个正式版本，计划2019年夏季发布

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'versionplan'
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
