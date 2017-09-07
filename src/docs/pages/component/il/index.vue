<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 内联列表 `<ui-il>`

    [[[基础]]]

    定义一个内联列表，不支持嵌套，列表中每一项使用`<li>`标签。

    #### 使用
    
    ````html
    <ui-il>
        <li>This is first</li>
        <li>This is second</li>
        <li>This is third</li>
    </ui-il>
    ````

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 状态    

    ````html
    @stateNA
    <ui-il {$state}>
        <li>this is {$&name} ui-il</li>
        <li>this is {$&name} ui-il</li>
    </ui-il>
    ````
    </script>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'il'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
