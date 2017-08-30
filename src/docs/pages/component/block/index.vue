<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 区块 `<ui-block>`

    ### 基础

    定义一个区块，区块一般包含标题和正文内容，区块与其他布局组件不同的是可以用来定义一个带风格的区域。

    #### 使用
    
    ````html
    <ui-block>区块</ui-block>
    ````

    #### 常用示例
    
    ````html
    <ui-block>
        <ui-h white xs>标题内容</ui-h>
        <ui-color white>正文内容</ui-color>
    </ui-block>
    ````

    #### 无间隙的区块

    可以通过添加`full`类来标记一个无间隙的区块。

    ````html
    <ui-block class="full">无间隙的区块</ui-block>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|不支持|-|

    #### 色彩

    ````html
    <ui-block theme>主题色</ui-block>
    <ui-block light-theme>浅主题色</ui-block>
    <ui-block dark-theme>深主题色</ui-block>
    ````

    ````html
    <ui-block success>成功/正确</ui-block>
    <ui-block warning>警告/注意</ui-block>
    <ui-block danger>错误/危险</ui-block>
    <ui-block primary>主要/关键</ui-block>
    <ui-block minor>次要/不醒目</ui-block>
    <ui-block info>信息/额外</ui-block>
    ````

    ````html
    <ui-block black>黑色</ui-block>
    <ui-block light-black>浅黑色</ui-block>
    <ui-block extra-light-black>超浅黑色</ui-block>

    <ui-block blue>青色</ui-block>
    <ui-block light-blue>浅青色</ui-block>
    <ui-block extra-light-blue>超浅青色</ui-block>

    <ui-block silver>银色</ui-block>
    <ui-block light-silver>浅银色</ui-block>
    <ui-block extra-light-silver>超浅银色</ui-block>

    <ui-block gray>灰色</ui-block>
    <ui-block light-gray>浅灰色</ui-block>
    <ui-block white>白色</ui-block>
    ````

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'em'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
