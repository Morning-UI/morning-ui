<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 富文本编辑器 `<ui-texteditor>`
    
    <doc-component-status page="texteditor"></doc-component-status>
    
    [[[开始]]]

    定义富文本编辑器。

    富文本编辑器基于[quilljs](https://quilljs.com/)(版本1.3.6)打造，Morning UI深度定制并扩展了[quilljs](https://quilljs.com/)。

    #### 使用

    :::democode/html
    <div style="width:100%;height:320px;">
        <ui-texteditor form-name="文章编辑"></ui-texteditor>
    </div>
    :::

    #### 获取富文本并渲染HTML
    
    富文本编辑器的取值自带了基础样式，用于还原富文本内容的样式。所以你可以直接将获取的到数值插入至HTML，即可还原富文本。
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            syncHtml : function (value) {

                let $preview = this.$el.querySelector('.demo1-preview');
                
                $preview && ($preview.innerHTML = value);

            }
        }
    });
    ---
    <div>
        <div style="width:100%;height:320px;">
            <ui-texteditor form-name="文章编辑" @value-change="syncHtml"></ui-texteditor>
        </div>
        <br>
        <h3>预览</h3>
        <div class="demo1-preview" style="width:100%;height:320px;border:1px #e0e0e0 solid;padding:15px">
            
        </div>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:texteditor
    statusDefaultValue:'<p>编辑你的文章...</p>'
    statusDivStyle:width:100%;height:160px;
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[hide-value](#hide-value)|表单的数值不可见，一般用于密码表单|`true`<br>`false`|Boolean|`false`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:texteditor
    configDefaultValue:'<p>编辑你的文章...</p>'
    configDivStyle:width:100%;height:240px;padding-bottom:40px;
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/texteditor/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'texteditor'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
