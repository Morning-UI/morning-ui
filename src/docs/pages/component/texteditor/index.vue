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
    |[tools](#tools)|设置富文本编辑工具，这是一个数组，数组中需要再嵌套一个数组。<br>第二层的数组，代表工具组，多个工具组之间会有更多间隙。<br>在第二层的数组中你可以通过字符串或对象来设置使用的工具。(详见[下面的示例](#tools))|数组|Array|默认是包含所有工具的数组|
    |[placeholder](#placeholder)|编辑区域默认显示内容|字符串|String|`''`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:texteditor
    configDefaultValue:'<p>编辑你的文章...</p>'
    configDivStyle:width:100%;height:240px;padding-bottom:40px;
    :::

    #### tools

    `tools`允许你设置富文本编辑工具，工具包含：

    |KEY|说明|值|
    |-|-|-|
    |header|标题设置|数组，完整列表：`[false, 1, 2, 3, 4, 5, 6]`，可选其中部分使用|
    |size|字体大小|数组，完整列表：`[false, '12px', '13px', '14px', '16px', '20px', '28px']`，可选其中部分使用|
    |undo|撤销操作|无|
    |redo|重做操作|无|
    |bold|加粗|无|
    |italic|斜体|无|
    |underline|下划线|无|
    |strike|删除线|无|
    |color|文本颜色|数组，可选颜色列表，如`['#00000', '#999999']`，也可设为空数组则使用默认颜色组|
    |background|背景颜色|数组，可选颜色列表，如`['#00000', '#999999']`，也可设为空数组则使用默认颜色组|
    |align|对齐方式|仅支持空数组：`[]`|
    |list|列表|选项：`ordered`: 有序列表，`bullet`: 无序列表|
    |indent|缩进|选项：`-1`: 减少缩进，`+1`: 增加缩进|
    |script|角标|选项：`sub`: 下标，`super`: 上标|
    |blockquote|引用|无|
    |code-block|代码片段|无|
    |link|链接|无|
    |clean|清除样式|无|

    使用__无值__的工具：

    :::democode/html
    <div style="width:100%;height:240px;">
        <ui-texteditor form-name="文章编辑" :tools="[['bold', 'italic']]"></ui-texteditor>
    </div>
    :::

    使用__值为数组__的工具：

    :::democode/html
    <div style="width:100%;height:240px;">
        <ui-texteditor form-name="文章编辑" :tools="[[{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}]]"></ui-texteditor>
    </div>
    :::

    使用__值为选项__的工具：

    :::democode/html
    <div style="width:100%;height:240px;">
        <ui-texteditor form-name="文章编辑" :tools="[[{header: [false, 1, 2, 3, 4, 5, 6]}]]"></ui-texteditor>
    </div>
    :::

    通过`tools`中嵌套数组将工具分为多个组（多个组时间会有更多的间隙）：

    :::democode/html
    <div style="width:100%;height:240px;">
        <ui-texteditor form-name="文章编辑" :tools="[[{header: [false, 1, 2, 3, 4, 5, 6]}], ['bold', 'italic'], [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}]]"></ui-texteditor>
    </div>
    :::
    

    #### placeholder

    :::democode/html
    <div style="width:100%;height:240px;">
        <ui-texteditor form-name="文章编辑" placeholder="编写文章..."></ui-texteditor>
    </div>
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
