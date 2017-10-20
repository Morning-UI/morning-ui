<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 段落输入框 `<ui-textarea>`
    
    <doc-component-status page="textarea"></doc-component-status>
    
    [[[基础]]]

    定义段落输入框。

    #### 使用

    ````html
    <div style="width:300px;">
        <ui-textarea form-name="姓名"></ui-textarea>
    </div>
    ````

    [[[声明]]]

    ````import
    @id:formStatement
    @uikey:textarea
    @statementDefaultValue:''
    ````
    
    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|
    ````import
    @id:formConfigTable
    ````
    |rows|段落输入框的高度对应的行数|大于0的数字|Number|`4`|

    ````import
    @id:formConfigDemo
    @uikey:textarea
    @configDefaultValue:'默认值'
    ````

    #### rows

    ````html
    <div style="width:300px;">
        <ui-textarea :rows="8"></ui-textarea>
    </div>
    ````

    [[[方法]]]

    ````import
    @id:formMethod
    @uikey:textarea
    @methodValue:'Jim'
    @methodDefaultValue:'Jim'
    ````

    #### setRows(num)

    增加或减少表单的行数。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |num|NO|指定行数，或增加/减少指定行数|以加号开头的字符串:增加指定行数<br>以减号开头的字符串:减少指定行数<br>数字:设置为指定行数|String<br>Number|`undefined`|

    ````html
    <div style="width:300px;">
        <ui-textarea ref="demo1"></ui-textarea>
        <br>
        <ui-link js="window.morning.findVM('demo1').setRows(2)">设置为2行</ui-link>
        <ui-link js="window.morning.findVM('demo1').setRows('+1')">增加1行</ui-link>
        <ui-link js="window.morning.findVM('demo1').setRows('-1')">减少1行</ui-link>
    </div>
    ````

    [[[事件]]]

    #### focus

    当表单聚焦后触发。

    ````vue
    @use:html.demo2,js.demo2
    ````

    ````html
    @var:demo2
    <div style="width:300px;">
        <ui-textarea @focus="echo" ref="demo2"></ui-textarea>
    </div>
    ````

    ````js
    @var:demo2
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo2.console1', 'focus event!');
            }
        }
    });
    ````

    #### blur

    当表单失焦后触发。

    ````vue
    @use:html.demo3,js.demo3
    ````

    ````html
    @var:demo3
    <div style="width:300px;">
        <ui-textarea @blur="echo" ref="demo3"></ui-textarea>
    </div>
    ````

    ````js
    @var:demo3
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo3.console1', 'blur event!');
            }
        }
    });
    ````

    ````import
    @id:formEvent
    @uikey:textarea
    @eventValue:'Jim'
    ````

    [[[表单值]]]

    #### 值类型

    此表单返回值类型包含:

    - `String` : 字符串

    任何其他类型的数值，都会被尝试转换成这些类型。

    #### 值格式

    内容值字符串。

    #### 默认值

    `''`

    #### 输入/输出示例

    ````html
    @formValueType
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-textarea ref="demoType{$valueType}"></ui-textarea>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').get())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    ````

    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/textarea/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'textarea'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
