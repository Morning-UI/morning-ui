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
    |uploader|文件上传组件的适配器，用来将文件上传到服务端|`function`|

    ### 更改组件标签前缀

    默认情况下Morning UI采用`ui`作为组件标签的前缀，比如使用按钮组件时，需要使用`<ui-btn></ui-btn>`标签。但在某些场景下可能`<ui-*>`这样的标签已经被占用，因此Morning UI允许你在初始化时修改组件标签的前缀：

    ```js
    Vue.use(morning, {
        prefix : 'v'
    });
    ```

    比如通过上面的代码初始化后，需要使用`<v-btn><v-btn>`来使用按钮组件。注意`前缀`和`组件名`之间的中划线是固定的无法改变。

    由于Morning UI最终生成的HTML标签以`mor-`为前缀，所以`prefix`无法设置为`mor`。

    ### 全局文件上传适配器

    你可以设置全局的文件上传适配器，在没有为文件组件指定适配器时，将使用全局的适配器。

    ```js
    Vue.use(morning, {
        uploader : () => {
            // 上传文件逻辑...
        }
    });
    ```

    详见：[文件上传适配器](/component/upload.html#文件上传适配器)

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
