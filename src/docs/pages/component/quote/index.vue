<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 引用文本 `<ui-quote>`

    ### 基础

    #### 使用

    定义一段引用的内容，这是一个块级元素。
    
    ````html
    <ui-quote>引用文本</ui-quote>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`light-blue`|
    |状态|不支持|-|

    #### 色彩

    ````html
    <ui-quote theme>主题色</ui-quote>
    <ui-quote light-theme>浅主题色</ui-quote>
    <ui-quote dark-theme>深主题色</ui-quote>
    ````

    ````html
    <ui-quote success>成功/正确</ui-quote>
    <ui-quote warning>警告/注意</ui-quote>
    <ui-quote danger>错误/危险</ui-quote>
    <ui-quote primary>主要/关键</ui-quote>
    <ui-quote minor>次要/不醒目</ui-quote>
    <ui-quote info>信息/额外</ui-quote>
    ````

    ````html
    <ui-quote black>黑色</ui-quote>
    <ui-quote light-black>浅黑色</ui-quote>
    <ui-quote extra-light-black>超浅黑色</ui-quote>

    <ui-quote blue>青色</ui-quote>
    <ui-quote light-blue>浅青色</ui-quote>
    <ui-quote extra-light-blue>超浅青色</ui-quote>

    <ui-quote silver>银色</ui-quote>
    <ui-quote light-silver>浅银色</ui-quote>
    <ui-quote extra-light-silver>超浅银色</ui-quote>

    <div style="background: #fff">
        <ui-quote gray>灰色</ui-quote>
    </div>

    <div style="background: #aaa">
        <ui-quote light-gray>浅灰色</ui-quote>
    </div>

    <div style="background: #ccc">
        <ui-quote white>白色</ui-quote>
    </div>
    ````

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'quote'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
