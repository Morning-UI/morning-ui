<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 事件

    组件改变状态时会触发事件，通过监听事件，外部逻辑可以响应组件的变化。

    事件包含三类：

    - 生命周期事件 : 基于Vue生命周期的钩子函数，所有组件都支持。
    - 值变更事件 : 只有表单组件有，并且所有的表单组件都支持，当表单的数值发生变化时触发。
    - 组件事件 : 只有交互及表单组件有，每个组件根据的自身情况触发的事件。

    所有的事件都需要遵循全局命名规范。

    ### 监听事件

    ### 生命周期事件

    ### 值变更事件

    TODO

    ### 组件事件

    ### 事件全局命名规范

    事件在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。

    在为组件添加事件前应先检查下面的列表，是否有含义相同的事件，若有请使用，若没有请将新的事件添加到下面列表并注明它的含义。

    - `beforeCretae` : 创建之前
    - `created` : 创建之后
    - `mounted` : 挂载之后
    - `beforeUpdate` : 更新之前
    - `updated` : 更新之后
    - `beforeDestroy` : 销毁之前
    - `destroyed` : 销毁之后

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'event'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
