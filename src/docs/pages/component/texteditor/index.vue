<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 富文本编辑器 `<ui-texteditor>`
    
    <doc-component-status page="texteditor"></doc-component-status>
    
    [[[开始]]]

    定义富文本编辑器，支持富文本编辑及Markdown编辑。

    富文本编辑器基于[quilljs](https://quilljs.com/)(版本2.0.0-dev.3)打造，Morning UI深度定制并扩展了[quilljs](https://quilljs.com/)。

    富文本编辑器支持`emoji`表情，使用时可以通过顶部的工具栏选择，或输入`:`加字符会出现表情提示。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:100%;height:320px;padding-bottom:70px;">
        <ui-texteditor form-name="文章编辑"></ui-texteditor>
    </div>
    :::

    :::vue
    @name:富文本编辑并渲染HTML
    ---
    #demo
    >desc
    富文本编辑模式的取值自带了基础样式，用于还原富文本内容的样式。所以你可以直接将获取的到数值插入至HTML，即可还原富文本。
    >tpl
    <div>
        <div style="width:100%;height:320px;padding-bottom:70px;">
            <ui-texteditor form-name="文章编辑" @value-change="syncHtml"></ui-texteditor>
        </div>
        <br>
        <br>
        <br>
        <h3>预览</h3>
        <div class="demo1-preview" style="width:100%;height:320px;border:1px #e0e0e0 solid;padding:15px;overflow-x: scroll;">
            
        </div>
    </div>
    >script
    {
        methods : {
            syncHtml : function (value) {

                let $preview = this.$el.querySelector('.demo1-preview');
                
                $preview && ($preview.innerHTML = value);

            }
        }
    }
    :::

    :::vue
    @name:Markdown编辑并渲染HTML
    ---
    #demo
    >desc
    Markdown编辑模式下，编辑器仅输出纯文本，转换成Markdown格式的HTML及样式需要使用第三方库。
    <br><br>
    HTML转换推荐使用：[markdown-it](https://github.com/markdown-it/markdown-it)
    <br>
    Markdown样式：[github-markdown-css](https://www.npmjs.com/package/github-markdown-css)
    >tpl
    <div>
        <div style="width:100%;height:320px;padding-bottom:70px;">
            <ui-texteditor form-name="文章编辑" @value-change="syncHtml" markdown></ui-texteditor>
        </div>
        <br>
        <br>
        <br>
        <h3>预览</h3>
        <div class="demo1-preview" style="width:100%;height:320px;border:1px #e0e0e0 solid;padding:15px;overflow-x: scroll;">
            
        </div>
    </div>
    >script
    {
        methods : {
            syncHtml : function (value) {

                let $preview = this.$el.querySelector('.demo1-preview');
                let markdown = new MarkdownIt({
                    html : true
                });
                
                $preview && ($preview.innerHTML = markdown.render(value));

            }
        }
    }
    :::

    [[[形态]]]

    :::preset
    @name:formStatus
    @uikey:texteditor
    @defaultValue:'<p>编辑你的文章...</p>'
    @wrapStyle:width:100%;
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:texteditor
    @defaultValue:'<p>编辑你的文章...</p>'
    @wrapStyle:width:100%;
    @attrs: :tools="[['bold', 'italic']]"
    :::

    :::vue
    @name:inside-name
    ---
    #config
    >conf-desc
    在组件内显示的名称，和`form-name`互为补充。
    >conf-accept
    名称
    >conf-type
    String
    >conf-default
    `'请输入'`
    ---
    #demo
    >tpl
    <div style="width:100%;height:240px;padding-bottom:70px;">
        <ui-texteditor inside-name="编写文章..."></ui-texteditor>
    </div>
    :::

    :::vue
    @name:tools
    ---
    #config
    >conf-desc
    设置富文本编辑工具，这是一个数组，数组中需要再嵌套一个数组。<br>第二层的数组，代表工具组，多个工具组之间会有更多间隙。<br>在第二层的数组中你可以通过字符串或对象来设置使用的工具。<br><br>注意：因为此配置的默认值包含所有工具，随着版本更新工具会不断的增加。建议配置固定的工具，而不是采用默认值，以免引入不必要的工具。<br><br>下面是可用的工具配置：
    <br><br>
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
    |emoji|emoji表情|无|
    |table|表格|无|
    |clean|清除样式|无|
    >conf-accept
    数组
    >conf-type
    Array
    >conf-default
    默认是包含所有工具的数组
    ---
    #demo
    >desc
    使用<b>无值</b>的工具。
    >tpl
    <div style="width:100%;height:240px;padding-bottom:70px;">
        <ui-texteditor
            form-name="文章编辑"
            :tools="[
                ['bold', 'italic']
            ]"
        ></ui-texteditor>
    </div>
    ---
    #demo
    >desc
    使用<b>值为数组</b>的工具。
    >tpl
    <div style="width:100%;height:240px;padding-bottom:70px;">
        <ui-texteditor
            form-name="文章编辑"
            :tools="[
                [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}]
            ]"
        ></ui-texteditor>
    </div>
    ---
    #demo
    >desc
    使用<b>值为选项</b>的工具。
    >tpl
    <div style="width:100%;height:240px;padding-bottom:70px;">
        <ui-texteditor 
            form-name="文章编辑" 
            :tools="[
                [{header: [false, 1, 2, 3, 4, 5, 6]}]
            ]"
        ></ui-texteditor>
    </div>
    ---
    #demo
    >desc
    通过`tools`中嵌套数组将工具分为多个组（多个组时间会有更多的间隙）。
    >tpl
    <div style="width:100%;height:240px;padding-bottom:70px;">
        <ui-texteditor
            form-name="文章编辑"
            :tools="[
                [{header: [false, 1, 2, 3, 4, 5, 6]}],
                ['bold', 'italic'],
                [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}]
            ]"
        ></ui-texteditor>
    </div>
    ---
    #demo
    >desc
    完整的`tools`配置如下。
    >tpl
    <div style="width:100%;height:240px;padding-bottom:70px;">
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
                ['link', 'image', 'emoji', 'table'],
                ['clean']
            ]"
        ></ui-texteditor>
    </div>
    :::

    :::vue
    @name:markdown
    ---
    #config
    >conf-desc
    开启Markdown编辑模式，开启后会清除所有文本样式，且`tools`和`plain-clipboard`将采用预设配置，自定义配置无效。
    <br>
    注意：开启后编辑器仅输出Markdown文本，转换成Markdown格式的HTML及样式需要使用第三方库。详见：[Markdown编辑并渲染HTML](#Markdown编辑并渲染HTML)。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >tpl
    <div style="width:100%;height:240px;padding-bottom:70px;">
        <ui-texteditor markdown></ui-texteditor>
    </div>
    :::

    :::vue
    @name:plain-clipboard
    ---
    #config
    >conf-desc
    从剪切板粘贴的内容不附带样式，仅粘贴纯文本。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:100%;height:240px;padding-bottom:70px;">
        <ui-texteditor plain-clipboard></ui-texteditor>
    </div>
    :::

    :::vue
    @name:inline-style
    ---
    #config
    >conf-desc
    在输出富文本内容时，将部分格式化输出至`style`中，而不是通过`class`。
    <br>
    当内容较少时`style`的形式可以输出更小的文本，当内容较多时`class`的形式可以输出更小的文本。
    <br>
    目前仅对：`缩进(indent)`有效。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:100%;height:240px;padding-bottom:70px;">
        <ui-texteditor :inline-style="true"></ui-texteditor>
    </div>
    :::

    :::vue
    @name:uploader
    ---
    #config
    >conf-desc
    当使用`image`工具时图片上传适配器，默认采用全局设置。详见：[文件上传 / `uploader`配置](upload.html#uploader)
    >conf-accept
    文件上传适配器函数
    >conf-type
    Function
    >conf-default
    `undefined`
    ---
    #demo
    >desc
    下面的示例的通过指定适配器演示了文件上传失败的情况。
    >tpl
    <div style="width:100%;height:240px;padding-bottom:70px;">
        <ui-texteditor :uploader="uploader"></ui-texteditor>
    </div>
    >script
    {
        methods : {
            uploader : function (file) {

                console.log(55, file);

                return {
                    status : false,
                    message : '文件上传失败，请重试'
                };

            }
        }
    }
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:texteditor
    @value:'<p>编辑你的文章...</p>'
    @defaultValue:'<p>编辑你的文章...</p>'
    @wrapStyle:width:100%;height:260px;padding-bottom:80px;
    :::

    :::vue
    @name:getHtml()
    ---
    #method
    >method-desc
    获取富文本内容。
    >method-return
    富文本内容。
    ---
    #demo
    >tpl
    <div>
        <div style="width:100%;height:240px;padding-bottom:70px;">
            <ui-texteditor ref="demo3"></ui-texteditor>
        </div>
        <br>
        <ui-link js="console.log(morning.findVM('demo3').getHtml());">获取内容</ui-link>
    </div>
    :::

    :::vue
    @name:getHtmlWithoutStyle()
    ---
    #method
    >method-desc
    获取富文本内容（不包含样式）。<br>由于样式大小较大，可以通过此方法获取不包含样式的Html，然后在展示的位置通过外链样式来达到效果（[获取样式文件](/texteditor-style.less)）。
    >method-return
    富文本内容。
    ---
    #demo
    >tpl
    <div>
        <div style="width:100%;height:240px;padding-bottom:70px;">
            <ui-texteditor ref="demo4"></ui-texteditor>
        </div>
        <br>
        <ui-link js="console.log(morning.findVM('demo4').getHtmlWithoutStyle());">获取内容</ui-link>
    </div>
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:富文本编辑器
    @uikey:texteditor
    @value:'<p>编辑你的文章...</p>'
    @wrapStyle:width:100%;height:260px;padding-bottom:80px;
    :::

    :::vue
    @name:selection-change
    ---
    #event
    >event-desc
    当用户选择编辑文字发生变化后触发。
    ---
    #demo
    >tpl
    <div style="width:100%;height:240px;">
        <ui-texteditor @selection-change="echo" ref="demo2"></ui-texteditor>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo2.console1', 'selection-change event!');
            }
        }
    }
    :::
    
    :::vue
    @name:focus
    ---
    #event
    >event-desc
    当表单聚焦后触发。
    ---
    #demo
    >tpl
    <div style="width:100%;height:240px;">
        <ui-texteditor @focus="echo" ref="demo3"></ui-texteditor>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo3.console1', 'focus event!');
            }
        }
    }
    :::

    :::vue
    @name:blur
    ---
    #event
    >event-desc
    当表单失焦后触发。
    ---
    #demo
    >tpl
    <div style="width:100%;height:240px;">
        <ui-texteditor @blur="echo" ref="demo4"></ui-texteditor>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo4.console1', 'blur event!');
            }
        }
    }
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

    :::preset
    @name:formValue
    @uikey:texteditor
    @uiname:富文本编辑器
    @valueType:texteditor
    @wrapStyle:width:100%;height:260px;padding-bottom:80px;
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
