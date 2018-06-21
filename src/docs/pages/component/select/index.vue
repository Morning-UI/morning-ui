<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 下拉选择框 `<ui-select>`
    
    <doc-component-status page="select\"></doc-component-status>
    
    [[[开始]]]

    定义下拉选择框。

    下拉选择框的选项通过`list`配置传入，`list.val`是选项的值，`list.name`是选项的名称(支持HTML)。

    在组件中使用`<li>`标签定义选项，使用`value`属性定义选项的值。

    注意`<li>`的`value`属性和纯文本内容(innerText去除两端空格)必须是唯一的，因为这两个值用于标记项目。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    #### 通过其他元素触发的下拉选择框

    通过`separate-emit`你可以指定任意元素来触发下拉选择框，更多用法见：[separate-emit配置](/component/select.html#separate-emit)

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo5">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
            separate-emit=".demo5"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    #### 使用HTML的选项

    :::democode/html
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            :list="{
                tim : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/2489/avatars/normal/702fb51d7c85c8b61628604762ffc21a.jpg?1444639894\'></ui-img>Tim Boelaars',
                andrew : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/108671/avatars/normal/dadb0bd212cc107ad3a1d1baedc46938.jpg?1416997444\'></ui-img>Andrew Colin Beck',
                gustavo : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/60266/avatars/normal/gustavo_avatar.jpg?1402000442\'></ui-img>Gustavo Zambelli',
                victor : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/96387/avatars/normal/debda2342580bda98269c0165054464c.jpg?1435151464\'></ui-img>Victor Erixon',
                shaun : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/2944/avatars/normal/e08c0e446862572facf0e48316d91c8f.png?1429207992\'></ui-img>Shaun Moynihan',
                emir : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/23569/avatars/normal/4c2dc35fbb2e0da85969e49592dfd49d.jpg?1420405934\'></ui-img>Emir Ayouni',
                katherine : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/460187/avatars/normal/eb8e273c036ae93b134b10358c5f19f5.jpg?1418705072\'></ui-img>Katherine Rainey',
                jax : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/119911/avatars/normal/531fd12e5775ed5ac6a07aea7b492151.jpg?1427986143\'></ui-img>Jax Berndt',
                elizabeth : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/857412/avatars/normal/8f5f9fbdd66cc70f22304f2ed3be4fa1.png?1440078204\'></ui-img>Elizabeth Chiu',
                sara : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/162566/avatars/normal/1012292_10104881398564961_565325188_n.jpg?1403561573\'></ui-img>Sara Nicely',
                anna : '<ui-img class=\'circle\' src=\'https://cdn.dribbble.com/users/243797/avatars/normal/657a04cfaeca8f6f5bb7ecf64267bc67.jpg?1416007045\'></ui-img>Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::
    
    #### 可搜索

    :::democode/html
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            can-search
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    #### 多选

    :::democode/html
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            multi-select
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    #### 可搜索的多选

    :::democode/html
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            multi-select
            can-search
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    #### 高性能模式

    当下拉列表的选项超过`200`项时，组件会自动开启高性能模式以减少掉帧的现象。在高性能模式下动画及计算会尽可能减少。

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:select
    statusDefaultValue:['tim']
    statusMoreAttr::list="{ tim:'Tim Boelaars', andrew:'Andrew Colin Beck', gustavo:'Gustavo Zambelli', victor:'Victor Erixon', shaun:'Shaun Moynihan', emir:'Emir Ayouni', katherine:'Katherine Rainey', jax:'Jax Berndt', elizabeth:'Elizabeth Chiu', sara:'Sara Nicely', anna:'Anna Broussard'}"
    :::

    #### 更多`disabled`状态

    多选及可搜索情况下`disabled`。

    :::democode/html
    <!-- 可搜索情况下disabled -->
    <div style="width:300px;">
        <ui-select
            form-name="禁用"
            state="disabled"
            can-search
            :default-value="['tim']"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>

    <br><br>

    <!-- 多选情况下disabled -->
    <div style="width:300px;">
        <ui-select
            form-name="禁用"
            state="disabled"
            multi-select
            :default-value="['tim', 'andrew']"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    #### 更多`readonly`状态

    多选及可搜索情况下`readonly`。

    :::democode/html
    <!-- 可搜索情况下disabled -->
    <div style="width:300px;">
        <ui-select
            form-name="只读"
            state="readonly"
            can-search
            :default-value="['tim']"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>

    <br><br>

    <!-- 多选情况下disabled -->
    <div style="width:300px;">
        <ui-select
            form-name="只读"
            state="readonly"
            multi-select
            :default-value="['tim', 'andrew']"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[list](#list)|TODO|TODO|TODO|TODO|
    |[separate-emit](#separate-emit)|通过其他的元素来触发下拉选择框|元素选择器([MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors))|String|`''`|
    |[align](#align)|内容对齐方式|`'left'` : 左对齐<br>`'center'` : 居中对齐<br>`'right'` : 右对齐|String|`'left'`|
    |[prepend](#prepend)|表单前缀|任意字符串(支持HTML)|String|`undefined`|
    |[max-show](#max-show)|下拉列表最多显示几项(超过出现滚动条)|项目数量|Number|`5`|
    |[auto-close](#auto-close)|点击下拉选择框以外的区域自动关闭下拉选择框|`true`<br>`false`|Boolean|`true`|
    |[can-search](#can-search)|允许通过项目内容搜索项目|`true`<br>`false`|Boolean|`false`|
    |[multi-select](#multi-select)|允许选择多个项目|`true`<br>`false`|Boolean|`false`|
    |[can-move](#can-move)|项目是否可以移动|`true`<br>`false`|Boolean|`false`|
    |[max](#max)|允许多选的最大项数，仅在开启`multi-select`后生效，未开启`multi-select`至多只能选择一项|数字|Number|`Infinity`|
    |[auto-reset-search](#auto-reset-search)|在多选模式下当选中某项或表单值发生变化后，重置搜索内容。(仅在开启`multi-select`及`can-search`时生效)|`true`<br>`false`|Boolean|`false`|
    |[hide-selected](#hide-selected)|开启此配置后当项目被选中时会被隐藏，若关闭此配置则会标记选中的项目。|`true`<br>`false`|Boolean|`true`|
    |[inline-img-size](#inline-img-size)|项目的缩略图大小(这不会影响选中项目的缩略图大小)|px或em为单位的数值字符串|String|'2em'|
    |[item-tip](#item-tip)|允许为下拉菜单设置提示|`true`<br>`false`|Boolean|`false`|
    |[item-tip-direct](#item-tip-direct)|为下拉菜单设置提示的方向，需要开启`list-tip`才有效|`top`<br>`right`<br>`bottom`<br>`left`|String|`top`|
    |[list-width](#list-width)|在开启`separate-emit`的情况下，下拉列表的宽度(单位px)，如果设为`false`则下拉列表会自动调整宽度。<br>若未开启`separate-emit`此配置不会生效，下拉列表的宽度等于组件本身的宽度。|`false`：自动调整宽度<br>数字：下拉列表的宽度(单位px)|Boolean<br>Number|`false`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:select
    configDefaultValue:['tim']
    configMoreAttr::list="{ tim:'Tim Boelaars', andrew:'Andrew Colin Beck', gustavo:'Gustavo Zambelli', victor:'Victor Erixon', shaun:'Shaun Moynihan', emir:'Emir Ayouni', katherine:'Katherine Rainey', jax:'Jax Berndt', elizabeth:'Elizabeth Chiu', sara:'Sara Nicely', anna:'Anna Broussard'}"
    :::

    #### separate-emit

    通过`separate-emit`你可以指定任意元素来触发下拉选择框：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo6">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
            separate-emit=".demo6"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    你可以通过设置`list-width`配置来调整宽度：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo11">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
            separate-emit=".demo11"
            :list-width="180"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    `separate-emit`和`can-search`共同使用：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo7">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
            separate-emit=".demo7"
            can-search
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    `separate-emit`和`multi-select`共同使用：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo8">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
            separate-emit=".demo8"
            can-search
            multi-select
            :max="5"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    `separate-emit`、`multi-select`、`can-search`共同使用：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo9">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
            separate-emit=".demo9"
            can-search
            multi-select
            can-search
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    `separate-emit`、`multi-select`、`can-move`共同使用：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo10">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
            separate-emit=".demo10"
            can-search
            multi-select
            can-move
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    `separate-emit`、`multi-select`、`hide-selected`共同使用：

    :::democode/html
    <div style="width:300px;">
        <ui-btn class="demo13">点击选择</ui-btn>
        <ui-select
            form-name="Select designer"
            separate-emit=".demo13"
            multi-select
            :hide-selected="false"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    #### align

    内容居中对齐：
    
    :::democode/html
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            align="center"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    内容右对齐：
    
    :::democode/html
    <div style="width:300px;">
        <ui-select
            form-name="Select designer"
            align="right"
            :list="{
                tim : 'Tim Boelaars',
                andrew : 'Andrew Colin Beck',
                gustavo : 'Gustavo Zambelli',
                victor : 'Victor Erixon',
                shaun : 'Shaun Moynihan',
                emir : 'Emir Ayouni',
                katherine : 'Katherine Rainey',
                jax : 'Jax Berndt',
                elizabeth : 'Elizabeth Chiu',
                sara : 'Sara Nicely',
                anna : 'Anna Broussard'
            }"
        >
        </ui-select>
    </div>
    :::

    [[[源码]]]

    <iframe src=\"/report/coverage/lib/components/select/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight\"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'select'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
