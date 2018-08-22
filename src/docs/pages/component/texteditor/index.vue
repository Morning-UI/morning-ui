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
        <div class="demo1-preview" style="width:100%;height:320px;border:1px #e0e0e0 solid;padding:15px;overflow-x: scroll;">
            
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
    |[inside-name](#inside-name)|在组件内显示的名称，和`form-name`互为补充。|名称|String|`''`|
    |[tools](#tools)|设置富文本编辑工具，这是一个数组，数组中需要再嵌套一个数组。<br>第二层的数组，代表工具组，多个工具组之间会有更多间隙。<br>在第二层的数组中你可以通过字符串或对象来设置使用的工具。(详见[下面的示例](#tools))<br><br>注意：因为此配置的默认值包含所有工具，随着版本更新工具会不断的增加。建议配置固定的工具，而不是采用默认值，以免引入不必要的工具。|数组|Array|默认是包含所有工具的数组|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:texteditor
    configDefaultValue:'<p>编辑你的文章...</p>'
    configDivStyle:width:100%;height:240px;padding-bottom:40px;
    :::

    #### inside-name

    :::democode/html
    <div style="width:100%;height:240px;">
        <ui-texteditor inside-name="编写文章..."></ui-texteditor>
    </div>
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
    |divider|横划线|无|
    |color|文本颜色|数组，可选颜色列表，如`['#00000', '#999999']`，也可设为空数组则使用默认颜色组|
    |background|背景颜色|数组，可选颜色列表，如`['#00000', '#999999']`，也可设为空数组则使用默认颜色组|
    |align|对齐方式|仅支持空数组：`[]`|
    |list|列表|选项：`ordered`: 有序列表，`bullet`: 无序列表|
    |indent|缩进|选项：`-1`: 减少缩进，`+1`: 增加缩进|
    |script|角标|选项：`sub`: 下标，`super`: 上标|
    |blockquote|引用|无|
    |code-block|代码片段|无|
    |link|链接|无|
    |image|图片|无|
    |clean|清除样式|无|

    使用<b>无值</b>的工具：

    :::democode/html
    <div style="width:100%;height:240px;">
        <ui-texteditor
            form-name="文章编辑"
            :tools="[
                ['bold', 'italic']
            ]"
        ></ui-texteditor>
    </div>
    :::

    使用<b>值为数组</b>的工具：

    :::democode/html
    <div style="width:100%;height:240px;">
        <ui-texteditor
            form-name="文章编辑"
            :tools="[
                [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}]
            ]"
        ></ui-texteditor>
    </div>
    :::

    使用<b>值为选项</b>的工具：

    :::democode/html
    <div style="width:100%;height:240px;">
        <ui-texteditor 
            form-name="文章编辑" 
            :tools="[
                [{header: [false, 1, 2, 3, 4, 5, 6]}]
            ]"
        ></ui-texteditor>
    </div>
    :::

    通过`tools`中嵌套数组将工具分为多个组（多个组时间会有更多的间隙）：

    :::democode/html
    <div style="width:100%;height:240px;">
        <ui-texteditor
            form-name="文章编辑"
            :tools="[
                [{header: [false, 1, 2, 3, 4, 5, 6]}],
                ['bold', 'italic'],
                [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}]
            ]"
        ></ui-texteditor>
    </div>
    :::

    完整的`tools`配置如下：

    :::democode/html
    <div style="width:100%;height:240px;">
        <ui-texteditor
            form-name="文章编辑"
            :tools="[
                [
                    {
                        header : [false, 1, 2, 3, 4, 5, 6]
                    },
                    {
                        size : [false, '12px', '13px', '14px', '16px', '20px', '28px']
                    }
                ],
                ['undo', 'redo'],
                [
                    'bold',
                    'italic',
                    'underline',
                    'strike',
                    {
                        align : []
                    },
                    {
                        indent : '-1'
                    },
                    {
                        indent : '+1'
                    }
                ],
                [
                    {
                        color : []
                    },
                    {
                        background : []
                    }
                ],
                [
                    {
                        list : 'ordered'
                    },
                    {
                        list : 'bullet'
                    },
                    'divider'
                ],
                [
                    {
                        script : 'sub'
                    },
                    {
                        script : 'super'
                    },
                    'blockquote',
                    'code-block'
                ],
                ['link', 'image'],
                ['clean']
            ]"
        ></ui-texteditor>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:texteditor
    methodValue:'<p>编辑你的文章...</p>'
    methodDefaultValue:'<p>编辑你的文章...</p>'
    methodDivStyle:width:100%;height:260px;padding-bottom:80px;
    :::

    [[[事件]]]

    #### selection-change

    当用户选择编辑文字发生变化后触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo2.console1', 'selection-change event!');
            }
        }
    });
    ---
    <div style="width:100%;height:240px;">
        <ui-texteditor @selection-change="echo" ref="demo2"></ui-texteditor>
    </div>
    :::

    :::preset/html
    formEvent
    ---
    uikey:texteditor
    eventValue:'<p>编辑你的文章...</p>'
    eventDivStyle:width:100%;height:260px;padding-bottom:80px;
    :::

    [[[表单值]]]

    #### 值类型
    
    `String` : 字符串

    #### 值过滤
    
    - 如果数值类型为非字符串(`undefined`除外)，会转换成字符串

    #### 值格式

    内容值字符串(HTML)。

    #### 默认值

    `undefined`

    #### 输入/输出示例

    :::repeat/html
    formValueType:texteditor
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:100%;height: 240px;">
            <ui-texteditor ref="demoType{$valueType}"></ui-texteditor>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
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
