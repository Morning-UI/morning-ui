<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 下拉选择框 `<ui-select>`
    
    <doc-component-status page="select"></doc-component-status>
    
    [[[开始]]]

    定义下拉选择框。

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
    
    #### 可选项目有顺序
    


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/select/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

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
