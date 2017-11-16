<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 统计 `<ui-statistic>`
    
    <doc-component-status page="statistic"></doc-component-status>

    [[[开始]]]

    定义统计区域，统计包含数值和名称，这是一个内联块标签。

    统计可包含：

    - 数值 .value
    - 名称 .label

    #### 使用

    :::democode/html
    <ui-statistic>
        <div class="value">5,550</div>
        <div class="label">downloads</div>
    </ui-statistic>
    :::

    #### 带图片统计

    :::democode/html
    <ui-statistic>
        <div class="value"><img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg" /><span>5,550</span></div>
        <div class="label">downloads</div>
    </ui-statistic>
    :::

    #### 带图标统计

    :::democode/html
    <ui-statistic>
        <div class="value"><i class="iconfont">&#xe6e2;</i><span>5,550</span></div>
        <div class="label">downloads</div>
    </ui-statistic>
    :::

    #### 水平名称

    :::democode/html
    <ui-statistic class="horizontal">
        <div class="value">5,550</div>
        <div class="label">downloads</div>
    </ui-statistic>


    <ui-statistic class="horizontal">
        <div class="label">downloads</div>
        <div class="value">5,550</div>
    </ui-statistic>
    :::

    #### 上方名称

    :::democode/html
    <ui-statistic>
        <div class="label">downloads</div>
        <div class="value">5,550</div>
    </ui-statistic>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`black`|
    |状态|`normal`<br/>`apparent`|`normal`|

    #### 尺寸
    
    :::repeat/html
    size
    ---
    <ui-statistic size="{$sizeKey}">
        <div class="value">5,550</div>
        <div class="label">{$&sizeName}</div>
    </ui-statistic>
    :::

    #### 色彩

    :::repeat/html
    color:theme
    color:feature
    color:black
    color:blue
    color:silver
    color:gray
    ---
    <ui-statistic color="{$colorKey}">
        <div class="value">5,550</div>
        <div class="label">{$&colorName}</div>
    </ui-statistic>
    :::

    #### 状态
    
    :::repeat/html
    state:normal,apparent
    ---
    <ui-statistic state="{$stateKey}">
        <div class="value">5,550</div>
        <div class="label">{$&stateName}</div>
    </ui-statistic>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/statistic/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'statistic'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
