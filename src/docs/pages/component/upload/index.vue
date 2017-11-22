<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 文件上传 `<ui-upload>`
    
    <doc-component-status page="upload"></doc-component-status>
    
    [[[开始]]]

    定义文件上传框。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-upload form-name="文件"></ui-upload>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:upload
    statusDefaultValue:[{path:'//morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png',name:'1511259398095810608.png'}]
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |item-name|项目的名称，作为添加按钮标题的后缀。|项目的名称|String|`'文件'`|
    |multi|允许同时选择多个文件上传|`true`<br>`false`|Boolean|`false`|
    |max|最多允许上传多少文件|数字|Number|`Infinity`|
    |allow-url|允许从网络地址获取文件并上传|`true`<br>`false`|Boolean|`false`|
    |allow-drag|允许拖拽文件上传|`true`<br>`false`|Boolean|`false`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:upload
    configDefaultValue:[{path:'//morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png',name:'1511259398095810608.png'}]
    :::

    #### item-name
    
    项目名称可以告知使用者输入项目的含义。

    :::democode/html
    <div style="width:300px;">
        <ui-upload form-name="文件" item-name="文件"></ui-upload>
    </div>
    :::

    #### multi

    :::democode/html
    <div style="width:300px;">
        <ui-upload form-name="文件" multi></ui-upload>
    </div>
    :::

    #### max

    设置最多上传两个文件。

    :::democode/html
    <div style="width:300px;">
        <ui-upload form-name="文件" :max="2"></ui-upload>
    </div>
    :::

    #### allowUrl

    :::democode/html
    <div style="width:300px;">
        <ui-upload form-name="文件" :allow-url="true"></ui-upload>
    </div>
    :::

    #### allowDrag

    :::democode/html
    <div style="width:300px;">
        <ui-upload form-name="文件" :allow-drag="true"></ui-upload>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/upload/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'upload'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
