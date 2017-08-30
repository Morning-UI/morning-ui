<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 文本颜色 `<ui-textcolor>`

    ### 基础

    定义文本的颜色，这是一个内联元素。

    #### 使用

    ````html
    <ui-textcolor>This is ui-textcolor</ui-textcolor>
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
    <ui-textcolor theme>主题色</ui-textcolor>
    <ui-textcolor light-theme>浅主题色</ui-textcolor>
    <ui-textcolor dark-theme>深主题色</ui-textcolor>
    ````

    ````html
    <ui-textcolor success>成功/正确</ui-textcolor>
    <ui-textcolor warning>警告/注意</ui-textcolor>
    <ui-textcolor danger>错误/危险</ui-textcolor>
    <ui-textcolor primary>主要/关键</ui-textcolor>
    <ui-textcolor minor>次要/不醒目</ui-textcolor>
    <ui-textcolor info>信息/额外</ui-textcolor>
    ````

    ````html
    <ui-textcolor black>黑色</ui-textcolor>
    <ui-textcolor light-black>浅黑色</ui-textcolor>
    <ui-textcolor extra-light-black>超浅黑色</ui-textcolor>

    <ui-textcolor blue>青色</ui-textcolor>
    <ui-textcolor light-blue>浅青色</ui-textcolor>
    <ui-textcolor extra-light-blue>超浅青色</ui-textcolor>

    <ui-textcolor silver>银色</ui-textcolor>
    <ui-textcolor light-silver>浅银色</ui-textcolor>
    <ui-textcolor extra-light-silver>超浅银色</ui-textcolor>

    <ui-textcolor gray>灰色</ui-textcolor>

    <span style="background: #aaa">
        <ui-textcolor light-gray>浅灰色</ui-textcolor>
    </span>

    <span style="background: #ccc">
        <ui-textcolor white>白色</ui-textcolor>
    </span>
    ````
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'textcolor'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
