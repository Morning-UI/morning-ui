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

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件"></ui-upload>
    </div>
    :::
    
    #### 文件上传适配器

    文件上传适配器用来接收组件上传的文件，并传输到服务端，然后将服务端结果处理后返回给组件：

    <img src="http://h0.hucdn.com/open/201747/13c62e5ed487ec48_359x624.png" width="120" alt="">

    使用文件上传组件之前，需要在初始化Morning UI的时候配置文件上传适配器`uploader`：

    ```js
    Vue.use(morning, {
        uploader : (file) => {

            let formData = new FormData();

            formData.append('file', file.file);
            formData.append('filename', file.name);

            return new Promise((resolve, reject) => {

                $.ajax({
                    type : 'POST',
                    url : '/api/uploadfile',
                    data : formData,
                    processData : false,
                    contentType : false,
                    dataType : 'json',
                    success : resp => {
    
                        if (resp.status) {

                            resolve({
                                status : true,
                                path : resp.path
                            });

                        } else {
    
                            resolve({
                                status : false,
                                message : resp.message
                            });

                        }

                    },
                    error : resp => {
                        reject('upload fail.');
                    }
                })

            });

        }
    });
    ```

    文件上传时会调用`uploader`并将需要上传的文件对象作为参数传入，文件对象`file`，包含下面几个属性：

    - `name` : 上传文件的原始名称
    - `file` : 上传的文件的原始对象([FileObject](https://developer.mozilla.org/en-US/docs/Web/API/File))
    - `onUploadProgress()` : 监听上传进度的函数，具体使用方法见：[监听真实上传进度](#使用真实的上传进度)
    
    最后由`uploader`解析文件对象并调用服务端上传接口进行上传。

    当文件上传完毕后，`uploader`需要返回一个对象，包含三个属性：

    - `status` : 文件是否上传成功(必需，Boolean)
    - `path` : 文件上传后的网络地址(必需，String)
    - `message` : `message` : 文件上传失败的提示信息(String)，仅在`status`为`false`的时候需要

    接下来的示例中如没有设置组件的`uploader`配置，均采用了上面这个适配器。

    :::vue
    @name:为单个组件指定文件上传适配器
    ---
    #demo
    >desc
    你也可以通过组件的`uploader`配置来为组件指定文件上传适配器，下面的示例的通过指定适配器演示了文件上传失败的情况。
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件" :uploader="uploader"></ui-upload>
    </div>
    >script
    {
        methods : {
            uploader : function (file) {

                return {
                    status : false,
                    message : '文件上传失败，请重试'
                };

            }
        }
    }
    :::

    :::vue
    @name:监听真实的上传进度
    ---
    #demo
    >desc
    默认情况下文件上传组件中上传进度并不是真实的，你会发现上传文件时会卡在某个点然后突然就完成了，这是因为组件无法获取到真实的上传进度。
    <br><br>
    只需要在文件上传适配器中调用文件对象的`onUploadProgress(xhr)`方法，并把远程上传的`XHR`对象作为参数传入，组件即可获取真实的上传进度。
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件" :uploader="uploader"></ui-upload>
    </div>
    >script
    {
        methods : {
            uploader : function (file) {

                let formData = new FormData();

                formData.append('file', file.file);
                formData.append('filename', file.name);

                return new Promise((resolve, reject) => {

                    $.ajax({
                        type : 'POST',
                        url : '/api/uploadfile',
                        data : formData,
                        processData : false,
                        contentType : false,
                        dataType : 'json',
                        beforeSend : jqXHR => {
                            
                            // 调用文件对象的`onUploadProgress`方法，并将xhr对象传入
                            // 文件上传组件就会监听真实的上传进度
                            file.onUploadProgress(jqXHR);

                        },
                        success : resp => {
            
                            if (resp.status) {

                                resolve({
                                    status : true,
                                    path : resp.path
                                });

                            } else {

                                resolve({
                                    status : false,
                                    message : resp.message
                                });

                            }

                        },
                        error : resp => reject('upload fail.')
                    });

                });

            }
        }
    }
    :::

    [[[形态]]]

    :::preset
    @name:formStatus
    @uikey:upload
    @defaultValue:[{path:'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png',name:'1511259398095810608.png'}]
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:upload
    @defaultValue:[{path:'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png',name:'1511259398095810608.png'}]
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
    `''`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-upload inside-name="文件"></ui-upload>
    </div>
    :::

    :::vue
    @name:item-name
    ---
    #config
    >conf-desc
    项目的名称，作为添加按钮标题的后缀。
    >conf-accept
    项目的名称
    >conf-type
    String
    >conf-default
    `'文件'`
    ---
    #demo
    >desc
    项目名称可以告知使用者输入项目的含义。
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件" item-name="文件"></ui-upload>
    </div>
    :::

    :::vue
    @name:accept-type
    ---
    #config
    >conf-desc
    指导用户上传指定文件扩展名或MIME类型的文件，多个类型之间采用逗号分隔。比如：<br><br>`'image/png'` 或 `'.png'` : 允许上传png文件<br>`'image/png, image/jpeg'` 或 `'.png, .jpg, .jpeg'` : 允许上传png或jpg图片<br>`'image/*'` : 允许所有MIME类型为`image/*`的文件上传。<br><br>需要注意的是此配置并不验证文件的类型，它只指导用户选择正确类型的文件。用户可以在文件选择器中切换类型来上传其他类型的文件。
    >conf-accept
    文件扩展名<br>MIME类型
    >conf-type
    String
    >conf-default
    `undefined`
    ---
    #demo
    >desc
    指导用户上传PNG图片。
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件" accept-type="image/png"></ui-upload>
    </div>
    :::

    :::vue
    @name:multi
    ---
    #config
    >conf-desc
    允许同时选择多个文件上传。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件" multi></ui-upload>
    </div>
    :::

    :::vue
    @name:max
    ---
    #config
    >conf-desc
    最多允许上传多少文件。
    >conf-accept
    数字
    >conf-type
    Number
    >conf-default
    `Infinity`
    ---
    #demo
    >desc
    设置最多上传两个文件。
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件" :max="2"></ui-upload>
    </div>
    :::

    :::vue
    @name:allow-url
    ---
    #config
    >conf-desc
    允许从网络地址获取文件并上传。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    设置最多上传两个文件。
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件" :allow-url="true"></ui-upload>
    </div>
    :::

    :::vue
    @name:allow-drag
    ---
    #config
    >conf-desc
    允许拖拽文件或网络地址上传，若拖拽的是网络地址必须开启`allow-url`。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件" :allow-drag="true"></ui-upload>
    </div>
    ---
    #demo
    >desc
    开启`allow-url`后，可以拖拽网络地址上传。
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件" :allow-drag="true" :allow-url="true"></ui-upload>
    </div>
    :::

    :::vue
    @name:validate
    ---
    #config
    >conf-desc
    验证上传的文件，这是一个函数。函数包含两个入参：<br><br>第一个参数是上传文件的原始`File`对象<br>第二个参数是一个扩展对象，包含了以下这些信息：<br>&nbsp; &nbsp; `size` : 文件的大小<br>&nbsp; &nbsp; `width` : 图片的宽度(仅文件是图片时有效)<br>&nbsp; &nbsp; `height` : 图片的高度(仅文件是图片时有效)<br><br>通过这两个参数来验证文件。<br><br>此函数的返回值为验证结果，有两种：<br><br>非字符串：认为验证通过，开始上传文件<br>字符串：验证失败，字符串的内容作为提示信息展现给用户<br><br>如果是异步的验证，也可以返回Promise。
    >conf-accept
    验证函数
    >conf-type
    Function
    >conf-default
    `() => {}`
    ---
    #demo
    >desc
    限制上传大小为30kb的文件。
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件" :validate="checksize"></ui-upload>
    </div>
    >script
    {
        methods : {
            checksize : function (file) {
                    
                if (file.size > 30000) {
                    
                    return '上传文件的大小不能超过30kb';

                }

            }
        }
    }
    ---
    #demo
    >desc
    限制上传宽度和高度小于100px的图片。
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件" :validate="checksize"></ui-upload>
    </div>
    >script
    {
        methods : {
            checksize : function (file, ext) {
                    
                if (ext.width > 100) {
                    
                    return '上传图片的宽度不能超过100px';

                }
                    
                if (ext.height > 100) {
                    
                    return '上传图片的高度不能超过100px';

                }

            }
        }
    }
    :::

    :::vue
    @name:uploader
    ---
    #config
    >conf-desc
    文件上传适配器，默认采用全局设置。`uploader`是一个函数，第一个参数是上传文件的`File`对象，需要返回一个对象：<br><br>`status` : 文件是否上传成功(必需，Boolean)<br>`path` : 文件上传后的网络地址(必需，String)<br>`message` : 文件上传失败的提示信息(String)，仅在`status`为`false`的时候需要。
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
    <div style="width:300px;">
        <ui-upload form-name="文件" :uploader="uploader"></ui-upload>
    </div>
    >script
    {
        methods : {
            uploader : function (file) {

                return {
                    status : false,
                    message : '文件上传失败，请重试'
                };

            }
        }
    }
    :::

    :::vue
    @name:keep-origin-name
    ---
    #config
    >conf-desc
    文件上传后显示的文件名会变为文件URL中的名字。开启此选项后组件将会保留文件原始的名字。<br>若无法获取文件原始的名字则仍然会从文件URL中获取名字。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    显示的文件名将会是文件原始的名字。
    >tpl
    <div style="width:300px;">
        <ui-upload form-name="文件" :keep-origin-name="true"></ui-upload>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:upload
    @value:[{path:'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png',name:'1511259398095810608.png'}]
    @defaultValue:[{path:'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png',name:'1511259398095810608.png'}]
    :::
    
    :::vue
    @name:uploadUrl(url)
    ---
    #method
    >method-desc
    上传网络文件，使用此方法需要开启组件的`allow-url`配置。
    >method-args
    |url|NO|需要上传网络文件的URL地址|URL|`String`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-upload ref="demo1" form-name="网络文件" :allow-url="true"></ui-upload>
        </div>
        <br>
        <ui-link js="morning.findVM('demo1').uploadUrl('https://cn.vuejs.org/images/logo.png');">上传Vue的logo</ui-link>
    </div>
    :::
    
    :::vue
    @name:isUploading()
    ---
    #method
    >method-desc
    组件是否仍在上传文件，返回布尔值。
    >method-return
    布尔值。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px;">
            <ui-upload ref="demo2" form-name="文件"></ui-upload>
        </div>
        <br>
        <ui-link js="alert(morning.findVM('demo2').isUploading());">获取上传状态</ui-link>
    </div>
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:文件上传
    @uikey:upload
    @value:[{path:'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png',name:'1511259398095810608.png'}]
    @defaultValue:[{path:'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png',name:'1511259398095810608.png'}]
    @wrapStyle:width:300px;
    :::

    [[[表单值]]]

    #### 值类型
    
    `Array` : 数组

    #### 值过滤

    - 所有不支持的值类型，都会被尝试转换成空数组([])。
    - 若启用`max`，最多不会超过max设置的项目数量。

    #### 值格式

    数组由对象组成，对象包含两个属性：

    - `path` : 文件上传之后的路径(必需)
    - `name` : 文件的名称(非必需)

    #### 默认值

    `[]`

    :::preset
    @name:formValue
    @uikey:upload
    @uiname:文件上传
    @valueType:upload
    @wrapStyle:width:300px;
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
