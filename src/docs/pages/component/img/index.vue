<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 图片 `<ui-img>`
    
    <doc-component-status page="img"></doc-component-status>

    [[[基础]]]

    定义图片容器，支持三种不同形状的图片，可为图片添加文字说明。

    `ui-img`仅支持下面这些属性：

    - src : 图片地址
    - width : 图片宽度
    - height : 图片高度
    - alt : 图片加载失败显示内容
    - title : 图标标题

    #### 使用

    标记一段斜体内容，这是一个内联元素。
    
    ````html
    <ui-img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    ````

    #### 带文字说明图片

    ````html
    <ui-img src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg">说明文字</ui-img>
    ````

    #### 不同形状
    
    支持三种：

    - `rounded` : 圆角
    - `circle` : 圆形
    - `thumbnail` : 相框

    ````html
    <ui-img class="rounded" src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    <ui-img class="circle" src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    <ui-img class="thumbnail" src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>
    ````

    #### 支持的属性

    ````html
    <!-- 添加width属性，自动设置图片宽度 -->
    <ui-img width="130" src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>

    <!-- 添加height属性，自动设置图片高度 -->
    <ui-img height="150" src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>

    <!-- 添加title属性，自动设置图片title -->
    <ui-img title="这里是title" src="https://d13yacurqjgara.cloudfront.net/users/1333/avatars/normal/48fc612216b4fd2112a6bcd7d0db6eba.jpeg"></ui-img>

    <!-- 添加alt属性，自动设置图片alt属性，当图片无法显示时候，显示alt内容。 -->
    <ui-img alt="这里是alt" src="https://d13yacurqjgar.cloudfront.net/noimg.jpeg"></ui-img>
    ````

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|


    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/img/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'img'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
