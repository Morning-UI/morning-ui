<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 标题 `<ui-h>`

    ### 基础

    定义一个标准标题，此组件可以替换原生的`h1-h6`标签，这是一个块级元素。

    #### 使用
    
    ````html
    <ui-h>标题</ui-h>
    ````

    ### 声明

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`black`|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 尺寸

    ````html
    <ui-h xxl>XXL尺寸</ui-h>
    <ui-h xl>XL尺寸</ui-h>
    <ui-h l>L尺寸</ui-h>
    <ui-h m>M尺寸</ui-h>
    <ui-h s>S尺寸</ui-h>
    <ui-h xs>XS尺寸</ui-h>
    <ui-h xxs>XXS尺寸</ui-h>
    ````

    #### 色彩

    ````html
    <ui-h theme>主题色</ui-h>
    <ui-h light-theme>浅主题色</ui-h>
    <ui-h dark-theme>深主题色</ui-h>
    ````

    ````html
    <ui-h success>成功/正确</ui-h>
    <ui-h warning>警告/注意</ui-h>
    <ui-h danger>错误/危险</ui-h>
    <ui-h primary>主要/关键</ui-h>
    <ui-h minor>次要/不醒目</ui-h>
    <ui-h info>信息/额外</ui-h>
    ````

    ````html
    <ui-h black>黑色</ui-h>
    <ui-h light-black>浅黑色</ui-h>
    <ui-h extra-light-black>超浅黑色</ui-h>

    <ui-h blue>青色</ui-h>
    <ui-h light-blue>浅青色</ui-h>
    <ui-h extra-light-blue>超浅青色</ui-h>

    <ui-h silver>银色</ui-h>
    <ui-h light-silver>浅银色</ui-h>
    <ui-h extra-light-silver>超浅银色</ui-h>

    <div style="background: #fff">
        <ui-h gray>灰色</ui-h>
    </div>

    <div style="background: #aaa">
        <ui-h light-gray>浅灰色</ui-h>
    </div>

    <div style="background: #ccc">
        <ui-h white>白色</ui-h>
    </div>
    ````

    #### 状态
    
    ````html
    <ui-h normal>正常</ui-h>
    <ui-h apparent>醒目</ui-h>
    ````
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'h'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
