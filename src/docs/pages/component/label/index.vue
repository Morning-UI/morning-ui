<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 标签 `<ui-label>`

    ### 基础

    定义一个标签，标签和徽章不同在于标签可以插入图片或图标，这是一个内联块元素。

    徽章一般单独使用，而标签一般多个一起使用。

    #### 使用

    ````html
    <ui-label>标签</ui-label>
    ````

    #### 使用图片

    为`ui-label`加上`image`类，然后在标签内通过`<img>`标签插入图片，此时标签文本请使用`<span>`标签。

    > 注意：使用时请确保`<span>`和`<img>`标签之间有空格。


    ````html
    <ui-label class="image">
        <img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/>
        <span>标签</span>
    </ui-label>

    <ui-label class="image">
        <span>标签</span>
        <img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/>
    </ui-label>
    ````

    #### 使用图标

    为`ui-label`加上`icon`类，然后在标签内通过`<i class="iconfont">`标签插入图标，此时标签文本请使用`<span>`标签。

    > 注意：使用时请确保`<span>`和`<img>`标签之间有空格。


    ````html
    <ui-label class="icon">
        <i class="iconfont">&#xe6e2;</i>
        <span>标签</span>
    </ui-label>

    <ui-label class="icon">
        <span>标签</span>
        <i class="iconfont">&#xe6e2;</i>
    </ui-label>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`theme`|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 尺寸

    ````html
    @size
    <ui-label {$key}>{$&name}</ui-label>
    ````

    ````html
    @size
    <ui-label class="icon" {$key}><i class="iconfont">&#xe6e2;</i> <span>{$&name}</span></ui-label>
    ````

    ````html
    @size
    <ui-label class="image" {$key}><img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"/> <span>{$&name}</span></ui-label>
    ````
    
    #### 色彩

    ````html
    @colorTheme
    @colorFeature
    @colorBlack
    @colorBlue
    @colorSilver
    @colorGray
    <ui-label {$key}>{$&name}</ui-label>
    ````

    #### 状态

    ````html
    @stateNA
    <ui-label {$key}>{$&name}</ui-label>
    ````
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
