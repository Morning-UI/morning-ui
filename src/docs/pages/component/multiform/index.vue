<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 多项表单输入 `<ui-multiform>`
    
    <doc-component-status page="multiform"></doc-component-status>
    
    [[[开始]]]

    定义多项表单输入。

    多项表单输入组件是一个强大的组件，通过和其他表单组件的组合，它允许用户输入复杂的对象结构数据。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-multiform form-name="城市">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">名称</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">省份</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="province"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">备注</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textarea form-key="note"></ui-textarea>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    [[[声明]]]

    :::preset/html
    formStatement
    ---
    uikey:multiform
    statementDefaultValue:[{name:'Jim'}, {name:'Sam'}]
    statementMoreAttr:item-title-key="name"
    statementSlot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |item-name|项目的名称，如果没有设置`item-title-key`，会作为每项的标题显示。同时会作为添加按钮标题的后缀。|项目的名称|String|`'项目'`|
    |item-title-key|每一项内容标题的取值。设置为某个表单的`key`后，项目的标题将取这个表单的值。|表单的`key`|String|`undefined`|
    |can-move|输入项目是否可以移动|`true`<br>`false`|Boolean|`false`|
    |max|可输入的最大项目数|数字：最大项目数<br>`undefined`：无限制|Number|`undefined`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:multiform
    configDefaultValue:'默认值'
    configDefaultValue:[{name:'Jim'}, {name:'Sam'}]
    configMoreAttr:item-title-key="name"
    configSlot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
    :::


    #### item-name
    
    项目名称可以告知使用者输入项目的含义。建议和`item-title-key`一起使用。

    :::democode/html
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-name="使用者">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    #### item-title-key

    `item-title-key`是某项表单的`key`，这个表单的值将作为项目的标题。设置后可以让使用者更好区分每一项。

    :::democode/html
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-title-key="name">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    建议和`item-name`一起使用：

    :::democode/html
    <div style="width:300px;">
        <ui-multiform form-name="名单" item-name="使用者" item-title-key="name">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    #### can-move

    :::democode/html
    <div style="width:300px;">
        <ui-multiform form-name="名单" can-move item-title-key="name" :default-value="[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:multiform
    methodValue:[{name:'Jim'}, {name:'Sam'}]
    methodDefaultValue:[{name:'Jim'}, {name:'Sam'}]
    methodMoreAttr:item-title-key="name"
    methodSlot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
    :::

    #### add(item, [index])

    在指定位置添加项。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |item|NO|添加项目的内容|和表单对应的`key` / `value`对象|`Object`|`undefined`|
    |index|YES|添加的位置|`undefined`: 添加为最后一项<br>数字: 添加到指定的index位置|`Undefined`<br>`Number`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiform ref="demo2" form-name="名单" item-title-key="name" :default-value="[{name:'Jim'}]">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    <br>
    <ui-link js="javascript:morning.findVM('demo2').add({name: 'Sam'});">添加到最后</ui-link>
    <ui-link js="javascript:morning.findVM('demo2').add({name: 'Gustavo'}, 0);">添加到第0项</ui-link>
    :::

    #### update(item, index)

    更新指定位置的项。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |item|NO|更新的项目内容|和表单对应的`key` / `value`对象|`Object`|`undefined`|
    |index|NO|更新的位置|更新项目的index位置|`Number`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiform ref="demo4" form-name="名单" item-title-key="name" :default-value="[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    <br>
    <ui-link js="javascript:morning.findVM('demo4').update({name: 'Katherine'}, 1);">将第1项的name更新为Katherine</ui-link>
    :::

    #### del(index)

    删除指定位置的项。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |index|NO|删除指定位置的项目|删除项目的index位置|`Number`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiform ref="demo3" form-name="名单" item-title-key="name" :default-value="[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    <br>
    <ui-link js="javascript:morning.findVM('demo3').del(0);">删除第0项</ui-link>
    :::

    #### move(from, to)

    移动项目。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |from|NO|需要移动的项目位置|移动项目的index位置|`Number`|`undefined`|
    |to|NO|移动之后的项目位置|移动之后的index位置|`Number`|`undefined`|

    :::democode/html
    <div style="width:300px;">
        <ui-multiform ref="demo5" form-name="名单" item-title-key="name" :default-value="[{name:'Jim'}, {name:'Sam'}, {name:'Gustavo'}]">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    <br>
    <ui-link js="javascript:morning.findVM('demo5').move(2, 0);">将第2项移到第0项</ui-link>
    :::

    [[[事件]]]

    #### show

    当表单填写框显示时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo6.console1', 'show event!');
            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-multiform ref="demo6" form-name="名单" @show="echo">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    #### hide

    当表单填写框隐藏时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo7.console1', 'hide event!');
            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-multiform ref="demo7" form-name="名单" @hide="echo">
            <ui-formgroup>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">姓名</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput form-key="name"></ui-textinput>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-multiform>
    </div>
    :::

    :::preset/html
    formEvent
    ---
    uikey:multiform
    eventValue:[{name:'Jim'}, {name:'Sam'}]
    eventDefaultValue:[{name:'Jim'}, {name:'Sam'}]
    eventMoreAttr:item-title-key="name"
    eventSlot:<ui-formgroup><div class="item"><h5 class="title"><ui-center class="fill">名称</ui-center></h5><div class="content"><div class="form"><ui-textinput form-key="name"></ui-textinput></div></div></div></ui-formgroup>
    :::

    [[[表单值]]]

    #### 值类型
    
    `Array` : 数组

    #### 值过滤

    - 所有不支持的值类型，都会被尝试转换成空数组([])。
    - 若启用`max`，最多不会超过max设置的项目数量。

    #### 值格式

    数组由项目的对象组成，项目对象由表单的`key` / `value`组成。

    #### 默认值

    `[]`

    #### 输入/输出示例

    :::repeat/html
    formValueType:multiform
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-multiform ref="demoType{$valueType}" form-name="名单">
                <ui-formgroup>
                    <div class="item">
                        <h5 class="title">
                            <ui-center class="fill">姓名</ui-center>
                        </h5>
                        <div class="content">
                            <div class="form">
                                <ui-textinput form-key="name"></ui-textinput>
                            </div>
                        </div>
                    </div>
                </ui-formgroup>
            </ui-multiform>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/multiform/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'multiform'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
