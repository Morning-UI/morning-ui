<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 徽章 `<ui-badge>`

    ### 基础

    定义一个徽章，徽章一般跟在内容后面，来标记一些特殊的内容(通常是数字)，这是一个内联块元素。

    徽章内部只能包含文本内容。

    #### 使用

    ````html
    <ui-badge>24</ui-badge>
    ````

    #### 扁平徽章

    ````html
    <ui-badge class="flat">24</ui-badge>
    ````
    
    #### 圆形徽章

    ````html
    <ui-badge class="circle">圆形徽章</ui-badge>
    ````

    #### 无内容隐藏

    当徽章内没有内容时，会自动隐藏。

    ````html
    <ui-badge></ui-badge>
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
    <ui-badge xxl>XXL尺寸</ui-badge>
    <ui-badge xl>XL尺寸</ui-badge>
    <ui-badge l>L尺寸</ui-badge>
    <ui-badge m>M尺寸</ui-badge>
    <ui-badge s>S尺寸</ui-badge>
    <ui-badge xs>XS尺寸</ui-badge>
    <ui-badge xxs>XXS尺寸</ui-badge>

    <br>

    <ui-badge class="circle" xxl>XXL尺寸</ui-badge>
    <ui-badge class="circle" xl>XL尺寸</ui-badge>
    <ui-badge class="circle" l>L尺寸</ui-badge>
    <ui-badge class="circle" m>M尺寸</ui-badge>
    <ui-badge class="circle" s>S尺寸</ui-badge>
    <ui-badge class="circle" xs>XS尺寸</ui-badge>
    <ui-badge class="circle" xxs>XXS尺寸</ui-badge>
    ````
    
    #### 色彩

    ````html
    <ui-badge theme>主题色</ui-badge>
    <ui-badge light-theme>浅主题色</ui-badge>
    <ui-badge dark-theme>深主题色</ui-badge>
    ````

    ````html
    <ui-badge success>成功/正确</ui-badge>
    <ui-badge warning>警告/注意</ui-badge>
    <ui-badge danger>错误/危险</ui-badge>
    <ui-badge primary>主要/关键</ui-badge>
    <ui-badge minor>次要/不醒目</ui-badge>
    <ui-badge info>信息/额外</ui-badge>
    ````

    ````html
    <ui-badge black>黑色</ui-badge>
    <ui-badge light-black>浅黑色</ui-badge>
    <ui-badge extra-light-black>超浅黑色</ui-badge>

    <br>

    <ui-badge blue>青色</ui-badge>
    <ui-badge light-blue>浅青色</ui-badge>
    <ui-badge extra-light-blue>超浅青色</ui-badge>

    <br>

    <ui-badge silver>银色</ui-badge>
    <ui-badge light-silver>浅银色</ui-badge>
    <ui-badge extra-light-silver>超浅银色</ui-badge>

    <br>

    <ui-badge gray>灰色</ui-badge>
    <ui-badge light-gray>浅灰色</ui-badge>
    <ui-badge white>白色</ui-badge>
    ````

    #### 状态
    
    ````html
    <ui-badge normal>正常</ui-badge>
    <ui-badge apparent>醒目</ui-badge>
    ````
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'badge'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
