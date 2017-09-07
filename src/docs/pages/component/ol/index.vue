<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 有序列表 `<ui-ol>`
    
    <doc-component-status page="ol"></doc-component-status>

    [[[基础]]]

    定义一个有序列表，支持多层嵌套，列表中每一项使用`<li>`标签。

    #### 使用
    
    ````html
    <ui-ol>
        <li>This is first</li>
        <li>This is second</li>
        <li>This is third</li>
    </ui-ol>
    ````

    #### 三层嵌套
    
    ````html
    <ui-ol>
        <li>This is 1</li>
        <ui-ol>
            <li>This is 2.1</li>
            <ui-ol>
                <li>This is 2.2.1</li>
                <li>This is 2.2.2</li>
            </ui-ol>
            <li>This is 2.3</li>
        </ui-ol>
        <li>This is 3</li>
    </ui-ol>
    ````

    #### 超过三层嵌套

    超过三层的无序列表，项目序号均为`lower-latin`。
    
    ````html
    <ui-ol>
        <li>This is 1</li>
        <ui-ol>
            <li>This is 2.1</li>
            <ui-ol>
                <li>This is 2.2.1</li>
                <ui-ol>
                    <li>This is 2.2.2.1</li>
                    <li>This is 2.2.2.2</li>
                </ui-ol>
                <li>This is 2.2.3</li>
            </ui-ol>
            <li>This is 2.3</li>
        </ui-ol>
        <li>This is 3</li>
    </ui-ol>
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
    <ui-ol {$state}>
        <li>this is {$&name} ui-ol</li>
        <li>this is {$&name} ui-ol</li>
    </ui-ol>

    <br>
    ````

    [[[单元测试]]]

    <iframe src="/coverage/lib/components/ol/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'ol'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
