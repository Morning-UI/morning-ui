<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 表单组 `<ui-formgroup>`
    
    <doc-component-status page="formgroup"></doc-component-status>

    [[[基础]]]

    定义一个表单组，通过不同的HTML结构表单组可以组合出不同的表单结构，这是一个块级元素。

    表单组内包含了各种表单，一般由表单组抬头、各种表单项、行动栏组成。

    你可以用下面的类或元素来声明不同的表单部分：

    - `header` : 表单组头部
    - `header > h5` : 表单组标题
    - `header > p` : 表单组说明信息
    - `.item` : 表单项
    - `.item > .title` : 表单项名称
    - `.item > .content` : 表单项内容
    - `.item > .content > h6` : 表单项小标题
    - `.item > .content > p` : 表单项说明信息
    - `.item > .content > .form` : 表单容器
    - `.action` : 行动区域
    
    #### 使用

    :::democode/html
    <div style="width:500px;margin:auto">
        <ui-formgroup>
            <!-- .item : 表单项 -->
            <div class="item">
                <!-- .title : 表单项名称 -->
                <h5 class="title">
                    <ui-center class="fill">Name</ui-center>
                </h5>
                <!-- .content : 表单项内容 -->
                <div class="content">
                    <!-- .content : 表单容器 -->
                    <div class="form">
                        <ui-textinput></ui-textinput>
                    </div>
                </div>
            </div>
        </ui-formgroup>
    </div>
    :::

    #### 表单项小标题及说明

    :::democode/html
    <div style="width:500px;margin:auto">
        <ui-formgroup>
            <div class="item">
                <h5 class="title">
                    <ui-center class="fill">Name</ui-center>
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

    #### 多个表单项

    多个表单项之前会有间隔线。

    :::democode/html
    <div style="width:500px;margin:auto">
        <ui-formgroup>
            <!-- .item : 表单项 -->
            <div class="item">
                <h5 class="title">
                    <ui-center class="fill">Name</ui-center>
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
                    <ui-center class="fill">Introduction</ui-center>
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
    
    #### 表单组标题
    
    :::democode/html
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
                    <ui-center class="fill">Name</ui-center>
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
                    <ui-center class="fill">Introduction</ui-center>
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

    #### 行动栏

    在表尾添加行动区域。
    
    :::democode/html
    <div style="width:500px;margin:auto">
        <ui-formgroup>
            <header>
                <h5>YOUR HEALTH</h5>
                <p>Let's talk about your health.</p>
            </header>
            <div class="item">
                <h5 class="title">
                    <ui-center class="fill">Name</ui-center>
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
                    <ui-center class="fill">Introduction</ui-center>
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
                <ui-btn minor>取消</ui-btn>
            </div>
        </ui-formgroup>
    </div>
    :::

    #### 单项多表单
    
    你可以在单个表单项中添加多个表单。
    
    :::democode/html
    <div style="width:500px;margin:auto">
        <ui-formgroup>
            <header>
                <h5>YOUR HEALTH</h5>
                <p>Let's talk about your health.</p>
            </header>
            <div class="item">
                <h5 class="title">
                    <ui-center class="fill">Name</ui-center>
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
                    <ui-center class="fill">Introduction</ui-center>
                </h5>
                <div class="content">
                    <div class="form">
                        <ui-textarea></ui-textarea>
                    </div>
                </div>
            </div>
            <div class="action">
                <ui-btn>提交</ui-btn>&nbsp;
                <ui-btn minor>取消</ui-btn>
            </div>
        </ui-formgroup>
    </div>
    :::

    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|


    [[[单元测试]]]

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
