<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 标记的文本 `<ui-mark>`

    ### 基础

    #### 使用

    定义标记内容，这是一个内联元素。
    
    ````html
    <ui-mark>标记的文本</ui-mark>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|全部|`theme`|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 色彩

    ````html
    <ui-mark theme>主题色</ui-mark>
    <ui-mark light-theme>浅主题色</ui-mark>
    <ui-mark dark-theme>深主题色</ui-mark>
    ````

    ````html
    <ui-mark success>成功/正确</ui-mark>
    <ui-mark warning>警告/注意</ui-mark>
    <ui-mark danger>错误/危险</ui-mark>
    <ui-mark primary>主要/关键</ui-mark>
    <ui-mark minor>次要/不醒目</ui-mark>
    <ui-mark info>信息/额外</ui-mark>
    ````

    ````html
    <div style="background: #fff;color: #fff;padding: 5px">
        <ui-mark black>黑色</ui-mark>
        <ui-mark light-black>浅黑色</ui-mark>
        <ui-mark extra-light-black>超浅黑色</ui-mark>
    </div>

    <div style="background: #fff;padding: 5px">
        <ui-mark blue>青色</ui-mark>
        <ui-mark light-blue>浅青色</ui-mark>
        <ui-mark extra-light-blue>超浅青色</ui-mark>
    </div>

    <div style="background: #fff;padding: 5px">
        <ui-mark silver>银色</ui-mark>
        <ui-mark light-silver>浅银色</ui-mark>
        <ui-mark extra-light-silver>超浅银色</ui-mark>
    </div>

    <div style="background: #ccc;padding: 5px">
        <ui-mark gray>灰色</ui-mark>
        <ui-mark light-gray>浅灰色</ui-mark>
        <ui-mark white>白色</ui-mark>
    </div>
    ````

    #### 状态
    
    ````html
    <ui-mark normal>正常</ui-mark>
    <ui-mark apparent>醒目</ui-mark>
    ````
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'mark'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
