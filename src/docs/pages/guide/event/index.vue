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

    组件的事件监听，基于Vue的自定义事件，你可以在模板中通过`v-on`指令监听事件：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo1.console1', 'emit event!');
            }
        }
    });
    ---
    <div>
        <!-- 监听emit事件，并调用echo方法 -->
        <ui-btn v-on:emit="echo">监听emit事件</ui-btn>
    </div>
    :::

    #### v-on缩写

    你也可以通过`@`来缩写`v-on`用法：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo2.console1', 'emit event!');
            }
        }
    });
    ---
    <div>
        <!-- 监听emit事件，并调用echo方法 -->
        <ui-btn @emit="echo">监听emit事件</ui-btn>
    </div>
    :::

    #### $on监听

    你还可以通过组件vm上的`$on`方法来监听事件：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}'
    });
    
    // 通过$on监听事件
    window.morning.findVM('demo3').$on('emit', () => {
        console.log('demo3.console1', 'emit event!');
    });
    ---
    <div>
        <ui-btn ref="demo3">监听emit事件</ui-btn>
    </div>
    :::
    
    你可以查看[Vue/事件处理](https://vuejs.org/v2/guide/events.html)获取更多细节，但是需要注意Vue中的事件修饰符、键值修饰符、鼠标按钮修饰符等特性在MorningUI中并不支持。

    ### 生命周期事件

    组件的生命周期事件是Vue生命周期钩子函数的子集，所有组件都支持，包含：

    - `created` : 创建之后
    - `mounted` : 挂载之后
    - `before-update` : 更新之前
    - `updated` : 更新之后
    - `before-destroy` : 销毁之前

    通过生命周期事件，可以让组件在不同周期中执行父vm的逻辑。

    ### 值变更事件

    表单组件的值发生变化时会触发值变更事件：`value-change`。

    ### 组件事件

    组件事件是不同组件根据自身的情况支持的额外事件，仅交互和表单组件支持，每个都有不同的组件事件，你可以在组件文档中查看该组件支持的事件及触发时机。

    ### 事件全局命名规范

    事件在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。

    由于Vue支持in-DOM template，所以请勿使用驼峰法命名事件名称，这是因为在HTML的标签中属性名不区分大小写。

    在为组件添加事件前应先检查下面的列表，是否有含义相同的事件，若有请使用，若没有请将新的事件添加到下面列表并注明它的含义。

    - `created` : 创建之后
    - `mounted` : 挂载之后
    - `before-update` : 更新之前
    - `updated` : 更新之后
    - `before-destroy` : 销毁之前
    - `emit` : 组件被触发
    - `switch` : 切换
    - `show` : 显示
    - `hide` : 隐藏
    - `done` : 完成
    - `fail` : 失败
    - `value-change` : 表单值改变
    - `focus` : 表单聚焦
    - `blur` : 表单失焦
    - `list-show` : 列表显示
    - `list-hide` : 列表隐藏
    - `input-value-change` : 输入框值变化
    - `input-focus` : 输入框聚焦
    - `input-blur` : 输入框失焦
    - `list-change` : 列表数值变化

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
