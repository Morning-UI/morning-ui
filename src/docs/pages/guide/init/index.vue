<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 初始化

    在使用Morning UI之前，需要先通过`Vue.use(morning, [options])`方法来初始化。

    初始化方法接受一个`options`对象来对Morning UI进行初始化配置，`options`的参数都是可选的，详见下表：
    
    |参数|描述|类型|
    |-|-|-|
    |prefix|组件标签前缀，默认为ui，可在冲突时使用自定义|`string`|

    ### 更改组件标签前缀

    默认情况下Morning UI采用`ui`作为组件标签的前缀，比如使用按钮组件时，需要使用`<ui-btn></ui-btn>`标签。但在某些场景下可能`<ui-*>`这样的标签已经被占用，因此Morning UI允许你在初始化时修改组件标签的前缀：

    ```js
    Vue.use(morning, {
        prefix : 'v'
    });
    ```

    比如通过上面的代码初始化后，需要使用`<v-btn><v-btn>`来使用按钮组件。注意`前缀`和`组件名`之间的中划线是固定的无法改变。

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'init'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
