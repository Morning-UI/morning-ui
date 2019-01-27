<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 标签 `<ui-label>`
    
    <doc-component-status page="label"></doc-component-status>

    [[[开始]]]

    定义一个标签，标签和徽章不同在于标签可以插入图片或图标，这是一个内联块元素。

    徽章一般单独使用，而标签一般多个一起使用。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-label>标签</ui-label>
    :::

    :::vue
    @name:使用图片
    ---
    #demo
    >desc
    为`ui-label`加上`image`类，然后在标签内通过`<img>`标签插入图片，此时标签文本请使用`<span>`标签。
    <br><br>
    注意：使用时请确保`<span>`和`<img>`标签之间有空格。
    >tpl
    <div>
        <ui-label class="image">
            <img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/>
            <span>标签</span>
        </ui-label>

        <ui-label class="image">
            <span>标签</span>
            <img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/>
        </ui-label>
    </div>
    :::

    :::vue
    @name:使用图标
    ---
    #demo
    >desc
    为`ui-label`加上`icon`类，然后在标签内通过`<i class="iconfont">`标签插入图标，此时标签文本请使用`<span>`标签。
    <br><br>
    注意：使用时请确保`<span>`和`<img>`标签之间有空格。
    >tpl
    <div>
        <ui-label class="icon">
            <i class="mo-icon mo-icon-star-f"></i>
            <span>标签</span>
        </ui-label>

        <ui-label class="icon">
            <span>标签</span>
            <i class="mo-icon mo-icon-star-f"></i>
        </ui-label>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`theme`|
    |状态|`normal`<br/>`apparent`|`normal`|

    <a href="/guide/status.html">查看形态文档</a>

    :::vue
    @name:尺寸
    ---
    #renderer
    >name
    size-repeat
    >tpl
    <ui-label size="{$sizeKey}">{$&sizeName}</ui-label>
    ---
    #renderer
    >name
    size-repeat
    >desc
    不同尺寸带图标的标签。
    >tpl
    <ui-label class="icon" size="{$sizeKey}"><i class="mo-icon mo-icon-star-f"></i> <span>{$&sizeName}</span></ui-label>
    ---
    #renderer
    >name
    size-repeat
    >desc
    不同尺寸带图片的标签。
    >tpl
    <ui-label class="image" size="{$sizeKey}"><img src="http://morning-ui-image.test.upcdn.net/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/> <span>{$&sizeName}</span></ui-label>
    :::

    :::vue
    @layout:color
    ---
    <ui-label color="{$colorKey}">{$&colorName}</ui-label>
    :::

    :::vue
    @layout:state-na
    ---
    <ui-label state="{$stateKey}">{$&stateName}</ui-label>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/label/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'label'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
