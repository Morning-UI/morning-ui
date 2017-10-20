<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 多项输入框 `<ui-multiinput>`
    
    <doc-component-status page="multiinput"></doc-component-status>
    
    [[[基础]]]

    定义多项输入框。

    #### 使用

    ````html
    <div style="width:300px;">
        <ui-multiinput form-name="输入标签"></ui-multiinput>
    </div>
    ````

    #### 说明回车输入

    多项输入框会在用户按下回车时添加项目，在使用时建议说明使用回车输入。

    ````html
    <div style="width:300px;">
        <ui-multiinput form-name="按下回车输入标签"></ui-multiinput>
    </div>
    ````

    [[[声明]]]

    ````import
    @id:formStatement
    @uikey:multiinput
    @statementDefaultValue:['value1', 'value2']
    ````

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|
    ````import
    @id:formConfigTable
    ````
    |can-move|输入项目是否可以移动|`true`<br>`false`|Boolean|`false`|
    |max|可输入的最大项数|数字<br>`false`:不限制数量|String<br>Boolean|`false`|

    ````import
    @id:formConfigDemo
    @uikey:multiinput
    @configDefaultValue:['value1', 'value2']
    ````

    #### can-move

    ````html
    <div style="width:300px;">
        <ui-multiinput form-name="输入标签" :default-value="['value1', 'value2']" can-move></ui-multiinput>
    </div>
    ````

    #### max

    ````html
    <div style="width:300px;">
        <ui-multiinput form-name="输入标签" :default-value="['value1', 'value2', 'value3', 'value4']" :max="3"></ui-multiinput>
    </div>
    ````

    [[[方法]]]

    ````import
    @id:formMethod
    @uikey:multiinput
    @methodValue:['value1']
    @methodDefaultValue:['value1']
    ````

    #### add(item, [index])

    切换单个选项的选中状态。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |item|NO|添加项目的内容|内容字符串|`String`|`undefined`|
    |index|YES|添加的位置|`undefined`: 添加为最后一项<br>数字: 添加到指定的index位置|`Undefined`<br>`Number`|`undefined`|

    ````html
    <div style="width:300px;">
        <ui-multiinput ref="demo2" form-name="输入标签"></ui-multiinput>
    </div>
    <br>
    <a href="javascript:;" onclick="javascript:morning.findVM('demo2').add('value1');">添加到最后</a>
    <a href="javascript:;" onclick="javascript:morning.findVM('demo2').add('value2', 0);">添加到第0项</a>
    ````

    #### del(index)

    切换单个选项的选中状态。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |index|NO|删除指定位置的项目|删除项目的index位置|`Number`|`undefined`|

    ````html
    <div style="width:300px;">
        <ui-multiinput ref="demo3" form-name="输入标签" :default-value="['value1', 'value2', 'value3', 'value4']"></ui-multiinput>
    </div>
    <br>
    <a href="javascript:;" onclick="javascript:morning.findVM('demo3').del(0);">删除第0项</a>
    ````

    #### move(from, to)

    切换单个选项的选中状态。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |from|NO|需要移动的项目位置|移动项目的index位置|`Number`|`undefined`|
    |to|NO|移动之后的项目位置|移动之后的index位置|`Number`|`undefined`|

    ````html
    <div style="width:300px;">
        <ui-multiinput ref="demo4" form-name="输入标签" :default-value="['value1', 'value2', 'value3', 'value4']"></ui-multiinput>
    </div>
    <br>
    <a href="javascript:;" onclick="javascript:morning.findVM('demo4').move(2, 0);">将第2项移到第0项</a>
    ````

    #### setInput([value])

    设置输入框的内容。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |value|YES|需要设置的内容|字符串：设置字符串内容<br>`undefined`：清空内容|`String`|`undefined`|

    ````html
    <div style="width:300px;">
        <ui-multiinput ref="demo8" form-name="输入标签"></ui-multiinput>
    </div>
    <br>
    <a href="javascript:;" onclick="javascript:morning.findVM('demo8').setInput('value1');">设置输入框内容</a>
    <a href="javascript:;" onclick="javascript:morning.findVM('demo8').setInput();">清空输入框内容</a>
    ````

    #### getInput()

    获取输入框的内容。
    
    ````html
    <div style="width:300px;">
        <ui-multiinput ref="demo9" form-name="输入标签"></ui-multiinput>
    </div>
    <br>
    <a href="javascript:;" onclick="javascript:alert(morning.findVM('demo9').getInput());">获取输入框内容</a>
    ````

    [[[事件]]]

    ````import
    @id:formEvent
    @uikey:multiinput
    @eventValue:['value1']
    ````
    
    #### inputValueChange

    当输入标签内容变化后触发。

    ````vue
    @use:html.demo5,js.demo5
    ````

    ````html
    @var:demo5
    <div style="width:300px;">
        <ui-multiinput @inputValueChange="echo" ref="demo5" form-name="输入标签"></ui-multiinput>
    </div>
    ````

    ````js
    @var:demo5
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo5.console1', 'inputValueChange event!');
            }
        }
    });
    ````
    
    #### inputFocus

    当标签内容输入框聚焦后触发。

    ````vue
    @use:html.demo6,js.demo6
    ````

    ````html
    @var:demo6
    <div style="width:300px;">
        <ui-multiinput @inputFocus="echo" ref="demo6" form-name="输入标签"></ui-multiinput>
    </div>
    ````

    ````js
    @var:demo6
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo6.console1', 'inputFocus event!');
            }
        }
    });
    ````

    #### inputBlur

    当标签内容输入框失焦后触发。

    ````vue
    @use:html.demo7,js.demo7
    ````

    ````html
    @var:demo7
    <div style="width:300px;">
        <ui-multiinput @inputBlur="echo" ref="demo7" form-name="输入标签"></ui-multiinput>
    </div>
    ````

    ````js
    @var:demo7
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo7.console1', 'inputBlur event!');
            }
        }
    });
    ````

    [[[表单值]]]

    #### 值类型

    此表单返回值类型包含:

    - `Array` : 数组

    任何其他类型的数值，都会被转换成空数组(`[]`)。

    #### 值格式

    包含输入项目的数组，数组项目为输入内容。

    #### 默认值

    默认值为空字符串：

    `[]`

    #### 输入/输出示例

    ````html
    @formValueType:checkbox
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-multiinput ref="demoType{$valueType}" form-name="输入标签"></ui-multiinput>
        </div>
        <br>
        <a href="javascript:;" onclick="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</a>
        <a href="javascript:;" onclick="alert(window.morning.findVM('demoType{$valueType}').get())">获取表单JSON值</a>
    </div>
    <br>
    <br>
    ````

    [[[单元测试]]]

    <iframe src="/report/coverage/lib/components/multiinput/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'multiinput'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
