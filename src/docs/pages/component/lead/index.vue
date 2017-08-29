<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 中心内容 `<ui-lead>`

    ### 基础

    #### 使用

    定义一段中心内容，这是一个块级元素。
    
    ````html
    <ui-lead>中心内容</ui-lead>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`black`|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 色彩

    ````html
    <ui-lead theme>主题色</ui-lead>
    <ui-lead light-theme>浅主题色</ui-lead>
    <ui-lead dark-theme>深主题色</ui-lead>
    ````

    ````html
    <ui-lead success>成功/正确</ui-lead>
    <ui-lead warning>警告/注意</ui-lead>
    <ui-lead danger>错误/危险</ui-lead>
    <ui-lead primary>主要/关键</ui-lead>
    <ui-lead minor>次要/不醒目</ui-lead>
    <ui-lead info>信息/额外</ui-lead>
    ````

    ````html
    <ui-lead black>黑色</ui-lead>
    <ui-lead light-black>浅黑色</ui-lead>
    <ui-lead extra-light-black>超浅黑色</ui-lead>

    <ui-lead blue>青色</ui-lead>
    <ui-lead light-blue>浅青色</ui-lead>
    <ui-lead extra-light-blue>超浅青色</ui-lead>

    <ui-lead silver>银色</ui-lead>
    <ui-lead light-silver>浅银色</ui-lead>
    <ui-lead extra-light-silver>超浅银色</ui-lead>

    <div style="background: #fff">
        <ui-lead gray>灰色</ui-lead>
    </div>

    <div style="background: #aaa">
        <ui-lead light-gray>浅灰色</ui-lead>
    </div>

    <div style="background: #ccc">
        <ui-lead white>白色</ui-lead>
    </div>
    ````

    #### 状态
    
    ````html
    <ui-lead normal>正常</ui-lead>
    <ui-lead apparent>醒目</ui-lead>
    ````
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'lead'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
