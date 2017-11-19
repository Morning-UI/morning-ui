<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 配色

    在某些场景下组件之外的元素需要和Morning UI保持一致的配色，为此Morning UI提供了CSS类供组件外的元素添加形态中的颜色。

    配色支持[形态/颜色](/guide/status.html)中的所有色彩。

    ### 文字配色

    如果你需要对元素内的文字，通过`morning-co-font-*`这样的CSS类来进行配色，比如：`morning-co-font-theme`：

    :::democode/html
    <p class="morning-co-font-theme">这里是非组件元素</p>
    :::

    ### 边框配色

    如果你需要对元素的边框配色，通过`morning-co-border-*`这样的CSS类来进行配色，比如：`morning-co-border-theme`：

    :::democode/html
    <div style="width:200px;height:50px;border-width:3px;border-style: solid;" class="morning-co-border-theme">这里是非组件元素</div>
    :::

    ### 背景配色

    如果你需要对元素的边框配色，通过`morning-co-bg-*`这样的CSS类来进行配色，比如：`morning-co-bg-theme`：

    :::democode/html
    <div style="width:200px;height:200px;color: #FFF;" class="morning-co-bg-theme">这里是非组件元素</div>
    :::

    ### 一起使用

    所有的配色都可以一起使用：

    :::democode/html
    <div style="width:200px;height:50px;border-width:3px;border-style: dashed;" class="morning-co-bg-silver morning-co-border-light-black morning-co-font-black">这里是非组件元素</div>
    :::

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'uniformcolor'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
