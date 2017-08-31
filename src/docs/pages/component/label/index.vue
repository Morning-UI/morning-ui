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
        <img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg?1408070984"/>
        <span>标签</span>
    </ui-label>

    <ui-label class="image">
        <span>标签</span>
        <img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg?1408070984"/>
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
    <ui-label xxl>XXL尺寸</ui-label>
    <ui-label xl>XL尺寸</ui-label>
    <ui-label l>L尺寸</ui-label>
    <ui-label m>M尺寸</ui-label>
    <ui-label s>S尺寸</ui-label>
    <ui-label xs>XS尺寸</ui-label>
    <ui-label xxs>XXS尺寸</ui-label>

    <br>

    <ui-label class="icon" xxl><i class="iconfont">&#xe6e2;</i> <span>XXL尺寸</span></ui-label>
    <ui-label class="icon" xl><i class="iconfont">&#xe6e2;</i> <span>XL尺寸</span></ui-label>
    <ui-label class="icon" l><i class="iconfont">&#xe6e2;</i> <span>L尺寸</span></ui-label>
    <ui-label class="icon" m><i class="iconfont">&#xe6e2;</i> <span>M尺寸</span></ui-label>
    <ui-label class="icon" s><i class="iconfont">&#xe6e2;</i> <span>S尺寸</span></ui-label>
    <ui-label class="icon" xs><i class="iconfont">&#xe6e2;</i> <span>XS尺寸</span></ui-label>
    <ui-label class="icon" xxs><i class="iconfont">&#xe6e2;</i> <span>XXS尺寸</span></ui-label>

    <br>

    <ui-label class="image" xxl><img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg?1408070984"/> <span>XXL尺寸</span></ui-label>
    <ui-label class="image" xl><img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg?1408070984"/> <span>XL尺寸</span></ui-label>
    <ui-label class="image" l><img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg?1408070984"/> <span>L尺寸</span></ui-label>
    <ui-label class="image" m><img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg?1408070984"/> <span>M尺寸</span></ui-label>
    <ui-label class="image" s><img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg?1408070984"/> <span>S尺寸</span></ui-label>
    <ui-label class="image" xs><img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg?1408070984"/> <span>XS尺寸</span></ui-label>
    <ui-label class="image" xxs><img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg?1408070984"/> <span>XXS尺寸</span></ui-label>
    ````
    
    #### 色彩

    ````html
    <ui-label theme>主题色</ui-label>
    <ui-label light-theme>浅主题色</ui-label>
    <ui-label dark-theme>深主题色</ui-label>
    ````

    ````html
    <ui-label success>成功/正确</ui-label>
    <ui-label warning>警告/注意</ui-label>
    <ui-label danger>错误/危险</ui-label>
    <ui-label primary>主要/关键</ui-label>
    <ui-label minor>次要/不醒目</ui-label>
    <ui-label info>信息/额外</ui-label>
    ````

    ````html
    <ui-label black>黑色</ui-label>
    <ui-label light-black>浅黑色</ui-label>
    <ui-label extra-light-black>超浅黑色</ui-label>

    <ui-label blue>青色</ui-label>
    <ui-label light-blue>浅青色</ui-label>
    <ui-label extra-light-blue>超浅青色</ui-label>

    <br><br>

    <ui-label silver>银色</ui-label>
    <ui-label light-silver>浅银色</ui-label>
    <ui-label extra-light-silver>超浅银色</ui-label>

    <ui-label gray>灰色</ui-label>
    <ui-label light-gray>浅灰色</ui-label>
    <ui-label white>白色</ui-label>
    ````

    #### 状态
    
    ````html
    <ui-label normal>正常</ui-label>
    <ui-label apparent>醒目</ui-label>
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
