<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 头像 `<ui-avatar>`
    
    <doc-component-status page="avatar"></doc-component-status>
    
    [[[开始]]]

    定义一个头像，这是一个内联块元素。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-avatar>
        <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>
    </ui-avatar>
    :::

    :::vue
    @name:圆形头像
    ---
    #demo
    >desc
    通过`.circle`可以设置圆形头像。
    >tpl
    <ui-avatar class="circle">
        <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>
    </ui-avatar>
    :::

    :::vue
    @name:不同类型的头像
    ---
    #demo
    >desc
    头像的内容可以是文字、图片、图标。
    >tpl
    <div>
        <!-- 文字头像 -->
        <ui-avatar class="circle">
            EA
        </ui-avatar>

        <!-- 图片头像 -->
        <ui-avatar class="circle">
            <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>
        </ui-avatar>

        <!-- 图标头像 -->
        <ui-avatar class="circle">
            <i class="mo-icon-user-o"></i>
        </ui-avatar>
    </div>
    :::

    :::vue
    @name:配合徽标一起使用
    ---
    #demo
    >desc
    头像中可使用开启`attach`配置的徽标。
    >tpl
    <div>
        <ui-avatar size="l">
            <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>
            <ui-badge type="point" attach="right-top"></ui-badge>
        </ui-avatar>
        <br><br>
        <ui-avatar size="l">
            <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>
            <ui-badge type="counter" :count="19" size="xxs" attach="right-top"></ui-badge>
        </ui-avatar>
        <br><br>
        <ui-avatar size="l" class="circle">
            <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>
            <ui-badge type="point" attach="right-top"></ui-badge>
        </ui-avatar>
    </div>
    :::

    :::vue
    @name:自动调整字符大小
    ---
    #demo
    >desc
    当头像内容是文本时，可自动根据文本长度调整大小。
    >tpl
    <div>
        <ui-avatar class="circle">
            {*name*}
        </ui-avatar>
        <br><br>
        <ui-link js="this.changeName()">更换名字</ui-link>
    </div>
    >script
    {
        data : {
            nameList : ['U', 'Luck', 'Tom', 'Edward'],
            name : 'U',
            index : 0
        },
        methods : {
            changeName : function () {
                this.name = this.nameList[(++this.index)%4];
            }
        }
    }
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`theme`|
    |状态|`normal`<br/>`apparent`|`normal`|

    <a href="/guide/status.html">查看形态文档</a>

    :::vue
    @name:尺寸
    ---
    #renderer
    >name
    size-repeat
    >tpl
    <ui-avatar size="{$sizeKey}">
        EA
    </ui-avatar>
    <ui-avatar size="{$sizeKey}">
        <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>
    </ui-avatar>
    <ui-avatar size="{$sizeKey}">
        <i class="mo-icon-user-o"></i>
    </ui-avatar>
    <br><br>
    ---
    #renderer
    >name
    size-repeat
    >desc
    尺寸配合`.circle`一起使用。
    >tpl
    <ui-avatar class="circle" size="{$sizeKey}">
        EA
    </ui-avatar>
    <ui-avatar class="circle" size="{$sizeKey}">
        <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>
    </ui-avatar>
    <ui-avatar class="circle" size="{$sizeKey}">
        <i class="mo-icon-user-o"></i>
    </ui-avatar>
    <br><br>
    :::

    :::vue
    @layout:color
    ---
    <ui-avatar color="{$colorKey}">
        EA
    </ui-avatar>
    <ui-avatar color="{$colorKey}">
        <i class="mo-icon-user-o"></i>
    </ui-avatar>
    <ui-avatar class="circle" color="{$colorKey}">
        EA
    </ui-avatar>
    <ui-avatar class="circle" color="{$colorKey}">
        <i class="mo-icon-user-o"></i>
    </ui-avatar>
    <br><br>
    :::

    :::vue
    @layout:state-na
    ---
    <ui-avatar class="circle" state="{$stateKey}">
        EA
    </ui-avatar>
    <ui-avatar class="circle" state="{$stateKey}">
        <ui-img src="https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442"></ui-img>
    </ui-avatar>
    <ui-avatar class="circle" state="{$stateKey}">
        <i class="mo-icon-user-o"></i>
    </ui-avatar>
    <br><br>
    :::

    [[[配置]]]
    
    <h1>暂无</h1>
    
    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @layout:lifecycle-event
    ---
    avatar
    头像
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/avatar/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'avatar'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
