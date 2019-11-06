<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 表单 `<ui-form>`
    
    <doc-component-status page="form"></doc-component-status>
    <!-- <doc-component-experimental></doc-component-not-experimental> -->
    
    [[[开始]]]

    定义一组表单。

    所有的`ui-form`中具有`form-key`的表单组件都会被关联至`ui-form`中，`ui-form`组件的数值为一个对象，对象的键名为关联表单组件的`form-key`，键值为表单组件的值。

    表单组件中可以包含一些子元素：

    - `ui-formitem` : 表单项
    - `ui-formdivider` : 表单分频器

    #### `ui-formitem`表单项

    `ui-formitem`包含以下配置：

    - `label` : (String，支持`Vue Template`)表单项的名称
    - `note` : (String)表单项的备注
    - `required` : (Boolean)必填表单项

    #### `ui-formdivider`表单分频器

    如果一组表单太大，可以通过`ui-formdivider`来分割成多组（仅视觉上）。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:420px;">
        <ui-form>
            <ui-formitem label="姓名">
               <ui-textinput form-key="name"></ui-textinput>
            </ui-formitem>
            <ui-formitem label="简介">
               <ui-textarea form-key="introduction"></ui-textarea>
            </ui-formitem>
        </ui-form>
    </div>
    :::

    :::vue
    @name:单项多表单
    ---
    #demo
    >desc
    可以在一个`ui-formitem`中包含多个表单组件。
    <br>
    多个表单组件可以表单项中垂直排列，也可以行内排列。
    <br><br>
    同时可以配合表单组件的`form-name`和`form-note`一起使用实现更复杂的效果。
    >tpl
    <div style="width:420px;">
        <ui-form>
            <ui-formitem label="基本信息">
               <ui-textinput form-key="firstName" form-name="名字" form-note="请填写名字"></ui-textinput>
               <br>
               <ui-textarea form-key="lastName" form-name="姓氏" form-note="请填写姓氏"></ui-textarea>
            </ui-formitem>
            <ui-formitem label="日期">
                <ui-grid>
                    <ui-row>
                        <ui-col :span="11">
                            <ui-datepicker form-key="startDate"></ui-datepicker>
                        </ui-col>
                        <ui-col :span="2">
                            <ui-center height-fill> - </center>
                        </ui-col>
                        <ui-col :span="11">
                            <ui-datepicker form-key="endDate"></ui-datepicker>
                        </ui-col>
                    </ui-row>
                </ui-grid> 
            </ui-formitem>
        </ui-form>
    </div>
    :::

    :::vue
    @name:表单项的备注
    ---
    #demo
    >desc
    `ui-formitem`支持`note`配置来设置每一项表单的备注。
    >tpl
    <div style="width:420px;">
        <ui-form label-width="120px">
            <ui-formitem label="姓名" note="中文姓名">
               <ui-textinput form-key="name"></ui-textinput>
            </ui-formitem>
            <ui-formitem label="简介" note="小于100字的简介">
               <ui-textarea form-key="introduction"></ui-textarea>
            </ui-formitem>
            <ui-formitem label="导师" note="请选择一位导师">
                <ui-select
                    form-key="tutor"
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
            </ui-formitem>
            <ui-formitem label="日期">
                <ui-grid>
                    <ui-row>
                        <ui-col :span="11">
                            <ui-datepicker form-key="startDate"></ui-datepicker>
                        </ui-col>
                        <ui-col :span="2">
                            <ui-center height-fill> - </center>
                        </ui-col>
                        <ui-col :span="11">
                            <ui-datepicker form-key="endDate"></ui-datepicker>
                        </ui-col>
                    </ui-row>
                </ui-grid> 
            </ui-formitem>
            <ui-formitem label="性别">
                <ui-radio
                    form-key="gender"
                    :list="{
                        male : '男士',
                        female : '女士'
                    }"
                ></ui-radio>
            </ui-formitem>
        </ui-form>
    </div>
    :::

    :::vue
    @name:表单分频器
    ---
    #demo
    >desc
    `ui-formitem`支持`note`配置来设置每一项表单的备注。
    >tpl
    <div style="width:420px;">
        <ui-form label-width="120px">
            <ui-formitem label="姓名" note="中文姓名">
               <ui-textinput form-key="name"></ui-textinput>
            </ui-formitem>
            <ui-formitem label="简介" note="小于100字的简介">
               <ui-textarea form-key="introduction"></ui-textarea>
            </ui-formitem>
            <ui-formdivider></ui-formdivider>
            <ui-formitem label="导师" note="请选择一位导师">
                <ui-select
                    form-key="tutor"
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
            </ui-formitem>
            <ui-formitem label="日期">
                <ui-grid>
                    <ui-row>
                        <ui-col :span="11">
                            <ui-datepicker form-key="startDate"></ui-datepicker>
                        </ui-col>
                        <ui-col :span="2">
                            <ui-center height-fill> - </center>
                        </ui-col>
                        <ui-col :span="11">
                            <ui-datepicker form-key="endDate"></ui-datepicker>
                        </ui-col>
                    </ui-row>
                </ui-grid> 
            </ui-formitem>
            <ui-formitem label="性别">
                <ui-radio
                    form-key="gender"
                    :list="{
                        male : '男士',
                        female : '女士'
                    }"
                ></ui-radio>
            </ui-formitem>
        </ui-form>
    </div>
    :::

    :::vue
    @name:必填表单项
    ---
    #demo
    >desc
    可以在`ui-formitem`中使用`required`配置来设置必填表单项。
    >tpl
    <div style="width:420px;">
        <ui-form>
            <ui-formitem label="姓名" required>
               <ui-textinput form-key="name"></ui-textinput>
            </ui-formitem>
            <ui-formitem label="简介">
               <ui-textarea form-key="introduction"></ui-textarea>
            </ui-formitem>
        </ui-form>
    </div>
    :::

    :::vue
    @name:表单项名称支持Vue Template
    ---
    #demo
    >desc
    `label`配置支持`Vue Template`，同时可以通过`context`来访问到对应的Vue实例。
    >tpl
    <div style="width:420px;">
        <ui-form>
            <ui-formitem label="姓名">
               <ui-textinput form-key="name"></ui-textinput>
            </ui-formitem>
            <ui-formitem label="
                简介
                <i id='demo3' @click='context.echo' class='mo-icon mo-icon-question-cf'></i>
                <ui-tip target='#demo3'>这里是详细的说明</ui-tip>
            ">
               <ui-textarea form-key="introduction"></ui-textarea>
            </ui-formitem>
        </ui-form>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('Hello!');
            }
        }
    }
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|暂不支持(使用单个表单来控制)|-|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:form
    @defaultValue:{name:'Jim',introduction:'这里是简介'}
    @wrapStyle:width:420px;
    @slot:<ui-formitem label="姓名"><ui-textinput form-key="name"></ui-textinput></ui-formitem><ui-formitem label="简介"><ui-textarea form-key="introduction"></ui-textarea></ui-formitem>
    :::

    :::vue
    @name:label-position
    ---
    #config
    >conf-desc
    表单项名称的位置。
    >conf-accept
    `'head-left'` : 头部左对齐<br>`'head-right'` : 头部右对齐<br>`'head-center'` : 头部居中<br>`'left-align'` : 左侧左对齐<br>`'center-align'` : 左侧居中<br>`'right-align'` : 左侧右对齐<br>`'center'` : 左侧垂直居中<br>
    >conf-type
    String
    >conf-default
    `'left-align'`
    ---
    #demo
    >desc
    头部左对齐的表单项名称。
    >tpl
    <div style="width:300px">
        <ui-form label-position="head-left">
            <ui-formitem label="姓名">
               <ui-textinput form-key="name"></ui-textinput>
            </ui-formitem>
            <ui-formitem label="简介">
               <ui-textarea form-key="introduction"></ui-textarea>
            </ui-formitem>
        </ui-form>
    </div>
    :::

    :::vue
    @name:label-width
    ---
    #config
    >conf-desc
    表单项名称的宽度，仅在`label-position`不为`head-left`、`head-right`、`head-center`时有效。
    >conf-accept
    宽度(单位`px`、`%`等合法的CSS单位)
    >conf-type
    String
    >conf-default
    `'left-align'`
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-form label-width="150px">
            <ui-formitem label="姓名">
               <ui-textinput form-key="name"></ui-textinput>
            </ui-formitem>
            <ui-formitem label="简介">
               <ui-textarea form-key="introduction"></ui-textarea>
            </ui-formitem>
        </ui-form>
    </div>
    :::

    :::vue
    @name:rules
    ---
    #config
    >conf-desc
    表单验证规则，采用[async-validator](https://github.com/yiminghe/async-validator)，用法详见：[https://github.com/yiminghe/async-validator](https://github.com/yiminghe/async-validator)。
    >conf-accept
    验证对象
    >conf-type
    Object
    >conf-default
    `{}`
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-form
            ref="demo1"
            :rules="{
                name : {
                    type : 'string',
                    required: true,
                    message : '姓名必须填写'
                }
            }"
        >
            <ui-formitem label="姓名">
               <ui-textinput form-key="name"></ui-textinput>
            </ui-formitem>
            <ui-formitem label="简介">
               <ui-textarea form-key="introduction"></ui-textarea>
            </ui-formitem>
            <ui-btn @emit="$refs.demo1.validator()">提交表单</ui-btn>
        </ui-form>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:form
    @value:{name:'Jim',introduction:'这里是简介'}
    @defaultValue:{name:'Jim',introduction:'这里是简介'}
    @wrapStyle:width:420px;
    @slot:<ui-formitem label="姓名"><ui-textinput form-key="name"></ui-textinput></ui-formitem><ui-formitem label="简介"><ui-textarea form-key="introduction"></ui-textarea></ui-formitem>
    :::
    
    :::vue
    @name:validator(formKey)
    ---
    #method
    >method-desc
    验证表单中的数值。
    >method-args
    |formKey|NO|用于验证某一项表单，需要验证表单的`form-key`|表单KEY|`String`|`undefined`|
    >method-return
    返回一个Promise，若参数是`true`则验证通过，否则为一个Error对象。
    ---
    #demo
    >tpl
    <div style="width:420px;">
        <ui-form
            ref="demo2"
            :rules="{
                name : {
                    type : 'string',
                    required: true,
                    message : '姓名必须填写'
                },
                introduction : {
                    type : 'string',
                    required: true,
                    length : 10,
                    message : '简介必须填写且长度大于10'
                }
            }"
        >
            <ui-formitem label="姓名">
               <ui-textinput form-key="name"></ui-textinput>
            </ui-formitem>
            <ui-formitem label="简介">
               <ui-textarea form-key="introduction"></ui-textarea>
            </ui-formitem>
            <ui-btn @emit="$refs.demo2.validator()">验证表单</ui-btn>
            <ui-btn @emit="$refs.demo2.validator('introduction')">仅验证简介</ui-btn>
        </ui-form>
    </div>
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:表单
    @uikey:form
    @value:{name:'Jim',introduction:'这里是简介'}
    @wrapStyle:width:420px;
    @slot:<ui-formitem label="姓名"><ui-textinput form-key="name"></ui-textinput></ui-formitem><ui-formitem label="简介"><ui-textarea form-key="introduction"></ui-textarea></ui-formitem>
    :::

    [[[表单值]]]

    #### 值类型
    
    `Object` : 对象

    #### 值过滤
    
    - 若为`undefiend`会被转换为`{}`

    #### 值格式

    包含所有子表单组件数值的对象，对象的键名为子表单组件的`form-key`，对象的键值为表单组件的值。

    #### 默认值

    `{}`

    :::preset
    @name:formValue
    @uikey:form
    @uiname:表单
    @valueType:form
    @wrapStyle:width:420px;
    @slot:<ui-formitem label="姓名"><ui-textinput form-key="name"></ui-textinput></ui-formitem><ui-formitem label="简介"><ui-textarea form-key="introduction"></ui-textarea></ui-formitem>
    :::


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/form/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'form'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
