<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 表单组 `<ui-formgroup>`
    
    <doc-component-status page="formgroup"></doc-component-status>

    [[[开始]]]

    定义一个表单组，通过不同的HTML结构表单组可以组合出不同的表单结构，这是一个块级元素。

    表单组通过`.inline`样式类来实现内联的表单样式。

    :::vue
    > title
    使用
    > desc
    表单组内包含了各种表单，一般由表单组抬头、各种表单项、行动栏组成。
    <br><br>
    你可以用下面的类或元素来标记不同的表单部分：
    <br><br>
    - `.item` : 表单项
    - `.item > .title` : 表单项名称
    - `.item > .content` : 表单项内容
    - `.item > .content > .form` : 表单容器
    ---
    <div style="width:500px;margin:auto">
        <ui-formgroup>
            <!-- .item : 表单项 -->
            <div class="item">
                <!-- .title : 表单项名称 -->
                <h5 class="title">
                    Name
                </h5>
                <!-- .content : 表单项内容 -->
                <div class="content">
                    <!-- .form : 表单容器 -->
                    <div class="form">
                        <ui-textinput></ui-textinput>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::

    :::vue
    > title
    表单项小标题及说明
    > desc
    你可以用下面的类或元素来标记小标题及说明：
    <br><br>
    - `.item > .content > h6` : 表单项小标题
    - `.item > .content > p` : 表单项说明信息
    ---
    <div style="width:500px;margin:auto">
        <ui-formgroup>
            <div class="item">
                <h5 class="title">
                    Name
                </h5>
                <div class="content">
                    <!-- h6 : 小标题 -->
                    <h6>Full Name?</h6>
                    <!-- p : 说明信息 -->
                    <p>Please fill in your full name.</p>
                    <div class="form">
                        <ui-textinput></ui-textinput>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::

    :::vue
    > title
    多个表单项
    > desc
    多个表单项之前会有间隔线。
    ---
    <div style="width:500px;margin:auto">
        <ui-formgroup>
            <!-- .item : 表单项 -->
            <div class="item">
                <h5 class="title">
                    Name
                </h5>
                <div class="content">
                    <h6>Full Name</h6>
                    <p>Please fill in your full name.</p>
                    <div class="form">
                        <ui-textinput></ui-textinput>
                    </div>
                </div>
            </div>
            <!-- .item : 表单项 -->
            <div class="item">
                <h5 class="title">
                    Introduction
                </h5>
                <div class="content">
                    <div class="form">
                        <ui-textarea></ui-textarea>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::
    
    :::vue
    > title
    表单组标题
    > desc
    你可以用下面的类或元素来标记表单组标题：
    <br><br>
    - `header` : 表单组头部
    - `header > h5` : 表单组标题
    - `header > p` : 表单组说明信息
    ---
    <div style="width:500px;margin:auto">
        <ui-formgroup>
            <!-- header : 表单组头部 -->
            <header>
                <!-- h5 : 表单组标题 -->
                <h5>YOUR HEALTH</h5>
                <!-- p : 表单组说明信息 -->
                <p>Let's talk about your health.</p>
            </header>
            <div class="item">
                <h5 class="title">
                    Name
                </h5>
                <div class="content">
                    <h6>Full Name</h6>
                    <p>Please fill in your full name.</p>
                    <div class="form">
                        <ui-textinput></ui-textinput>
                    </div>
                </div>
            </div>
            <div class="item">
                <h5 class="title">
                    Introduction
                </h5>
                <div class="content">
                    <div class="form">
                        <ui-textarea></ui-textarea>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::

    :::vue
    > title
    行动栏
    > desc
    你可以用下面的类或元素在表尾添加行动区域：
    <br><br>
    - `.action` : 行动区域
    ---
    <div style="width:500px;margin:auto">
        <ui-formgroup>
            <header>
                <h5>YOUR HEALTH</h5>
                <p>Let's talk about your health.</p>
            </header>
            <div class="item">
                <h5 class="title">
                    Name
                </h5>
                <div class="content">
                    <h6>Full Name</h6>
                    <p>Please fill in your full name.</p>
                    <div class="form">
                        <ui-textinput></ui-textinput>
                    </div>
                </div>
            </div>
            <div class="item">
                <h5 class="title">
                    Introduction
                </h5>
                <div class="content">
                    <div class="form">
                        <ui-textarea></ui-textarea>
                    </div>
                </div>
            </div>
            <!-- .action : 行动区域 -->
            <div class="action">
                <ui-btn>提交</ui-btn>&nbsp;
                <ui-btn color="minor">取消</ui-btn>
            </div>
        </ui-formgroup>
    </div>
    :::
    
    :::vue
    > title
    单项多表单
    > desc
    你可以在单个表单项中添加多个表单。
    ---
    <div style="width:500px;margin:auto">
        <ui-formgroup>
            <header>
                <h5>YOUR HEALTH</h5>
                <p>Let's talk about your health.</p>
            </header>
            <div class="item">
                <h5 class="title">
                    Name
                </h5>
                <div class="content">
                    <!-- 第一个表单 -->
                    <h6>First Name</h6>
                    <p>Please fill in your first name.</p>
                    <div class="form">
                        <ui-textinput></ui-textinput>
                    </div>
                    <!-- 第二个表单 -->
                    <h6>Last Name</h6>
                    <p>Please fill in your last name.</p>
                    <div class="form">
                        <ui-textinput></ui-textinput>
                    </div>
                </div>
            </div>
            <div class="item">
                <h5 class="title">
                    Introduction
                </h5>
                <div class="content">
                    <div class="form">
                        <ui-textarea></ui-textarea>
                    </div>
                </div>
            </div>
            <div class="action">
                <ui-btn>提交</ui-btn>&nbsp;
                <ui-btn color="minor">取消</ui-btn>
            </div>
        </ui-formgroup>
    </div>
    :::

    :::vue
    > title
    内联表单组
    > desc
    表单组支持内联方式，这种方式一行支持多个表单。表单的宽度会根据一行中表单的数量适配。
    <br><br>
    添加`.inline`样式类来使用内联的表单样式。
    <br><br>
    你可以用下面的类或元素来标记单行表单：
    <br><br>
    - `.row` : 单行(仅内联表单组可用)
    ---
    <div style="width:600px;margin:auto">
        <ui-formgroup class="inline">
            <!-- .row : 单行 -->
            <div class="row">
                <!-- .item : 表单项 -->
                <div class="item">
                    <!-- .title : 表单项名称 -->
                    <h5 class="title">Name</h5>
                    <!-- .content : 表单项内容 -->
                    <div class="content">
                        <!-- .content : 表单容器 -->
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <h5 class="title">Introduction</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::
    
    :::vue
    > title
    内联表单组的小标题及说明
    ---
    <div style="width:600px;margin:auto">
        <ui-formgroup class="inline">
            <div class="row">
                <div class="item">
                    <h5 class="title">Name</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                        <!-- h6 : 小标题 -->
                        <h6>Full Name?</h6>
                        <!-- p : 说明信息 -->
                        <p>Please fill in your full name.</p>
                    </div>
                </div>

                <div class="item">
                    <h5 class="title">Introduction</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                        <!-- 仅使用说明信息 -->
                        <p>You introduction.</p>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::
    
    :::vue
    > title
    多行内联表单组
    > desc
    通过多个`.row`可以实现多行的内联表单组。
    ---
    <div style="width:600px;margin:auto">
        <ui-formgroup class="inline">
            <div class="row">
                <div class="item">
                    <h5 class="title">First Name</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                        <h6>First Name?</h6>
                        <p>Please fill in your first name.</p>
                    </div>
                </div>

                <div class="item">
                    <h5 class="title">Last Name</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="item">
                    <h5 class="title">Introduction</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textarea></ui-textarea>
                        </div>
                        <p>You introduction.</p>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::
    
    :::vue
    > title
    内联表单组加表单组标题
    ---
    <div style="width:600px;margin:auto">
        <ui-formgroup class="inline">
            <!-- header : 表单组头部 -->
            <header>
                <!-- h5 : 表单组标题 -->
                <h5>YOUR HEALTH</h5>
                <!-- p : 表单组说明信息 -->
                <p>Let's talk about your health.</p>
            </header>
            <div class="row">
                <div class="item">
                    <h5 class="title">First Name</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                        <h6>First Name?</h6>
                        <p>Please fill in your first name.</p>
                    </div>
                </div>

                <div class="item">
                    <h5 class="title">Last Name</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="item">
                    <h5 class="title">Introduction</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textarea></ui-textarea>
                        </div>
                        <p>You introduction.</p>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::

    :::vue
    > title
    内联表单组加行动栏
    ---
    <div style="width:600px;margin:auto">
        <ui-formgroup class="inline">
            <header>
                <h5>YOUR HEALTH</h5>
                <p>Let's talk about your health.</p>
            </header>
            <div class="row">
                <div class="item">
                    <h5 class="title">First Name</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                        <h6>First Name?</h6>
                        <p>Please fill in your first name.</p>
                    </div>
                </div>

                <div class="item">
                    <h5 class="title">Last Name</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="item">
                    <h5 class="title">Introduction</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textarea></ui-textarea>
                        </div>
                        <p>You introduction.</p>
                    </div>
                </div>
            </div>
            <div class="action">
                <ui-btn>提交</ui-btn>&nbsp;
                <ui-btn color="minor">取消</ui-btn>
            </div>
        </ui-formgroup>
    </div>
    :::
    
    :::vue
    > title
    内联表单组调整表单宽度
    > desc
    默认情况下所有表单会均分一行，你也可以通过样式按比例调整宽度占比。
    <br><br>
    注意由于采用了`flex`布局，样式的宽度只能影响比例，并不能设置固定值。
    ---
    <div style="width:600px;margin:auto">
        <ui-formgroup class="inline">
            <header>
                <h5>YOUR HEALTH</h5>
                <p>Let's talk about your health.</p>
            </header>
            <div class="row">
                <!-- 通过50%的宽度样式来缩短这个表单的宽度占比 -->
                <div class="item" style="width:50%">
                    <h5 class="title">First Name</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                        <h6>First Name?</h6>
                        <p>Please fill in your first name.</p>
                    </div>
                </div>
                
                <div class="item">
                    <h5 class="title">Middle Name</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <h5 class="title">Last Name</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="item">
                    <h5 class="title">Introduction</h5>
                    <div class="content">
                        <div class="form">
                            <ui-textarea></ui-textarea>
                        </div>
                        <p>You introduction.</p>
                    </div>
                </div>
            </div>
            <div class="action">
                <ui-btn>提交</ui-btn>&nbsp;
                <ui-btn color="minor">取消</ui-btn>
            </div>
        </ui-formgroup>
    </div>
    :::

    :::vue
    > title
    非内联表单项标题左对齐
    > desc
    默认情况下，如果是非内联表单项的标题是居中对齐，内联表单项的标题是左对齐。
    <br><br>
    你可以通过`item-title-left`、`item-title-center`、`item-title-right`三个样式类来重新设置。
    ---
    <div style="width:500px;margin:auto">
        <ui-formgroup class="item-title-left">
            <div class="item">
                <h5 class="title">
                    Name
                </h5>
                <div class="content">
                    <div class="form">
                        <ui-textinput></ui-textinput>
                    </div>
                </div>
            </div>
            <div class="item">
                <h5 class="title">
                    Introduction
                </h5>
                <div class="content">
                    <div class="form">
                        <ui-textarea></ui-textarea>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::

    :::vue
    > title
    非内联表单项标题右对齐
    > desc
    默认情况下，如果是非内联表单项的标题是居中对齐，内联表单项的标题是左对齐。
    <br><br>
    你可以通过`item-title-left`、`item-title-center`、`item-title-right`三个样式类来重新设置。
    ---
    <div style="width:500px;margin:auto">
        <ui-formgroup class="item-title-right">
            <div class="item">
                <h5 class="title">
                    Name
                </h5>
                <div class="content">
                    <div class="form">
                        <ui-textinput></ui-textinput>
                    </div>
                </div>
            </div>
            <div class="item">
                <h5 class="title">
                    Introduction
                </h5>
                <div class="content">
                    <div class="form">
                        <ui-textarea></ui-textarea>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::

    :::vue
    > title
    内联表单项标题居中对齐
    > desc
    默认情况下，如果是非内联表单项的标题是居中对齐，内联表单项的标题是左对齐。
    <br><br>
    你可以通过`item-title-left`、`item-title-center`、`item-title-right`三个样式类来重新设置。
    ---
    <div style="width:500px;margin:auto">
        <ui-formgroup class="inline item-title-center">
            <div class="row">
                <div class="item">
                    <h5 class="title">
                        Name
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        Introduction
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textarea></ui-textarea>
                        </div>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::

    :::vue
    > title
    内联表单项标题右对齐
    > desc
    默认情况下，如果是非内联表单项的标题是居中对齐，内联表单项的标题是左对齐。
    <br><br>
    你可以通过`item-title-left`、`item-title-center`、`item-title-right`三个样式类来重新设置。
    ---
    <div style="width:500px;margin:auto">
        <ui-formgroup class="inline item-title-right">
            <div class="row">
                <div class="item">
                    <h5 class="title">
                        Name
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        Introduction
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textarea></ui-textarea>
                        </div>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/formgroup/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'formgroup'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
