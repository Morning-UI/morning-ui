!function(n){function e(e){for(var o,d,u=e[0],l=e[1],p=e[2],s=0,m=[];s<u.length;s++)d=u[s],a[d]&&m.push(a[d][0]),a[d]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);for(r&&r(e);m.length;)m.shift()();return i.push.apply(i,p||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],o=!0,u=1;u<t.length;u++){var l=t[u];0!==a[l]&&(o=!1)}o&&(i.splice(e--,1),n=d(d.s=t[0]))}return n}var o={},a={79:0},i=[];function d(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.m=n,d.c=o,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)d.d(t,o,function(e){return n[e]}.bind(null,o));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var r=l;i.push([677,0]),t()}({1:function(n,e){n.exports=Vue},306:function(n,e,t){"use strict";var o=function(){var n=this.$createElement,e=this._self._c||n;return e("doc-component",{attrs:{page:this.page,hasPadding:!0}},[e("script",{attrs:{type:"text/markdown"}},[this._v('\n# 文件上传 `<ui-upload>`\n\n<doc-component-status page="upload"></doc-component-status>\n\n[[[开始]]]\n\n定义文件上传框。\n\n:::vue\n@name:使用\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:多种风格的上传组件\n---\n#demo\n>desc\n输入框风格的上传组件。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" type="input"></ui-upload>\n</div>\n---\n#demo\n>desc\n区域风格的上传组件，适合图片上传。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" type="box"></ui-upload>\n</div>\n---\n#demo\n>desc\n按钮风格的上传组件。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" type="button"></ui-upload>\n</div>\n:::\n\n#### 文件上传适配器\n\n文件上传适配器用来接收组件上传的文件，并传输到服务端，然后将服务端结果处理后返回给组件：\n\n<img src="http://h0.hucdn.com/open/201747/13c62e5ed487ec48_359x624.png" width="120" alt="">\n\n使用文件上传组件之前，需要在初始化Morning UI的时候配置文件上传适配器`uploader`：\n\n```js\nVue.use(morning, {\n    uploader : (file) => {\n\n        let formData = new FormData();\n\n        formData.append(\'file\', file.file);\n        formData.append(\'filename\', file.name);\n\n        return new Promise((resolve, reject) => {\n\n            $.ajax({\n                type : \'POST\',\n                url : \'/api/uploadfile\',\n                data : formData,\n                processData : false,\n                contentType : false,\n                dataType : \'json\',\n                success : resp => {\n\n                    if (resp.status) {\n\n                        resolve({\n                            status : true,\n                            path : resp.path\n                        });\n\n                    } else {\n\n                        resolve({\n                            status : false,\n                            message : resp.message\n                        });\n\n                    }\n\n                },\n                error : resp => {\n                    reject(\'upload fail.\');\n                }\n            })\n\n        });\n\n    }\n});\n```\n文件上传时会调用`uploader`并将需要上传的文件对象作为参数传入，文件对象`file`，包含下面几个属性：\n\n- `name` : 上传文件的原始名称\n- `file` : 上传的文件的原始对象([FileObject](https://developer.mozilla.org/en-US/docs/Web/API/File))\n- `onUploadProgress()` : 监听上传进度的函数，具体使用方法见：[监听真实上传进度](#使用真实的上传进度)\n\n最后由`uploader`解析文件对象并调用服务端上传接口进行上传。\n\n当文件上传完毕后，`uploader`需要返回一个对象，包含三个属性：\n\n- `status` : 文件是否上传成功(必需，Boolean)\n- `path` : 文件上传后的网络地址(必需，String)\n- `message` : `message` : 文件上传失败的提示信息(String)，仅在`status`为`false`的时候需要\n\n接下来的示例中如没有设置组件的`uploader`配置，均采用了上面这个适配器。\n\n:::vue\n@name:为单个组件指定文件上传适配器\n---\n#demo\n>desc\n你也可以通过组件的`uploader`配置来为组件指定文件上传适配器，下面的示例的通过指定适配器演示了文件上传失败的情况。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" :uploader="uploader"></ui-upload>\n</div>\n>script\n{\n    methods : {\n        uploader : function (file) {\n\n            return {\n                status : false,\n                message : \'文件上传失败，请重试\'\n            };\n\n        }\n    }\n}\n:::\n\n:::vue\n@name:监听真实的上传进度\n---\n#demo\n>desc\n默认情况下文件上传组件中上传进度并不是真实的，你会发现上传文件时会卡在某个点然后突然就完成了，这是因为组件无法获取到真实的上传进度。\n<br><br>\n只需要在文件上传适配器中调用文件对象的`onUploadProgress(xhr)`方法，并把远程上传的`XHR`对象作为参数传入，组件即可获取真实的上传进度。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" :uploader="uploader"></ui-upload>\n</div>\n>script\n{\n    methods : {\n        uploader : function (file) {\n\n            let formData = new FormData();\n\n            formData.append(\'file\', file.file);\n            formData.append(\'filename\', file.name);\n\n            return new Promise((resolve, reject) => {\n\n                $.ajax({\n                    type : \'POST\',\n                    url : \'/api/uploadfile\',\n                    data : formData,\n                    processData : false,\n                    contentType : false,\n                    dataType : \'json\',\n                    beforeSend : jqXHR => {\n                        \n                        // 调用文件对象的`onUploadProgress`方法，并将xhr对象传入\n                        // 文件上传组件就会监听真实的上传进度\n                        file.onUploadProgress(jqXHR);\n\n                    },\n                    success : resp => {\n        \n                        if (resp.status) {\n\n                            resolve({\n                                status : true,\n                                path : resp.path\n                            });\n\n                        } else {\n\n                            resolve({\n                                status : false,\n                                message : resp.message\n                            });\n\n                        }\n\n                    },\n                    error : resp => reject(\'upload fail.\')\n                });\n\n            });\n\n        }\n    }\n}\n:::\n\n[[[形态]]]\n\n:::preset\n@name:formStatus\n@uikey:upload\n@defaultValue:[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\',file:{type:\'image/png\'}}]\n:::\n\n:::vue\n@name:其他风格的禁用状态\n---\n#demo\n>desc\n区域风格的上传组件，适合图片上传。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" type="box" state="disabled" v-model="value"></ui-upload>\n</div>\n>script\n{\n    data : {\n        value : [{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\',file:{type:\'image/png\'}}]\n    }\n}\n---\n#demo\n>desc\n按钮风格的上传组件。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" type="button" state="disabled" v-model="value"></ui-upload>\n</div>\n>script\n{\n    data : {\n        value : [{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\',file:{type:\'image/png\'}}]\n    }\n}\n:::\n\n[[[配置]]]\n\n:::preset\n@name:formConfig\n@uikey:upload\n@defaultValue:[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}]\n:::\n\n:::vue\n@name:inside-name\n---\n#config\n>conf-desc\n在组件内显示的名称，和`form-name`互为补充。\n>conf-accept\n名称\n>conf-type\nString\n>conf-default\n`\'\'`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-upload inside-name="补充说明..."></ui-upload>\n</div>\n---\n#demo\n>desc\n区域和按钮风格上传组件的`inside-name`。\n>tpl\n<div style="width:300px;">\n    <ui-upload inside-name="补充说明..." type="box"></ui-upload>\n    <br><br>\n    <ui-upload inside-name="补充说明..." type="button"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:item-name\n---\n#config\n>conf-desc\n项目的名称，作为添加按钮标题的后缀。\n>conf-accept\n项目的名称\n>conf-type\nString\n>conf-default\n`\'文件\'`\n---\n#demo\n>desc\n项目名称可以告知使用者输入项目的含义。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" item-name="文件"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:type\n---\n#config\n>conf-desc\n上传组件的风格。\n>conf-accept\n`\'input\'` : 输入框<br>`\'box\'` : 区域<br>`\'button\'` : 按钮\n>conf-type\nString\n>conf-default\n`\'input\'`\n---\n#demo\n>desc\n输入框风格的上传组件。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" type="input"></ui-upload>\n</div>\n---\n#demo\n>desc\n区域风格的上传组件，适合图片上传。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" type="box"></ui-upload>\n</div>\n---\n#demo\n>desc\n按钮风格的上传组件。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" type="button"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:accept-type\n---\n#config\n>conf-desc\n指导用户上传指定文件扩展名或MIME类型的文件，多个类型之间采用逗号分隔。比如：<br><br>`\'image/png\'` 或 `\'.png\'` : 允许上传png文件<br>`\'image/png, image/jpeg\'` 或 `\'.png, .jpg, .jpeg\'` : 允许上传png或jpg图片<br>`\'image/*\'` : 允许所有MIME类型为`image/*`的文件上传。<br><br>需要注意的是此配置并不验证文件的类型，它只指导用户选择正确类型的文件。用户可以在文件选择器中切换类型来上传其他类型的文件。\n>conf-accept\n文件扩展名<br>MIME类型\n>conf-type\nString\n>conf-default\n`undefined`\n---\n#demo\n>desc\n指导用户上传PNG图片。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" accept-type="image/png"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:multi\n---\n#config\n>conf-desc\n允许同时选择多个文件上传。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" multi></ui-upload>\n</div>\n---\n#demo\n>desc\n`multi`和`max`配置一起使用，超出数量的文件将会上传失败。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" multi :max="2"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:max\n---\n#config\n>conf-desc\n最多允许上传多少文件。\n>conf-accept\n数字\n>conf-type\nNumber\n>conf-default\n`Infinity`\n---\n#demo\n>desc\n设置最多上传两个文件。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" :max="2"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:keep-over-limit-file\n---\n#config\n>conf-desc\n当开启`multi`和`max`配置时，一次选择超过`max`限制的文件时的行为。\n>conf-accept\n`true`:保留多余文件并提示上传失败(删除其余文件后仍可继续上传)<br/>`false`:中断选择并提示\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n一次上传超过两个文件，会中断选择并提示。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" multi :max="2" :keep-over-limit-file="false"></ui-upload>\n</div>\n---\n#demo\n>desc\n一次上传超过两个文件，会保留多余文件并提示上传失败(删除其余文件后仍可继续上传)。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" multi :max="2" :keep-over-limit-file="true"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:keep-origin-name\n---\n#config\n>conf-desc\n文件上传后显示的文件名会变为文件URL中的名字。开启此选项后组件将会保留文件原始的名字。<br>若无法获取文件原始的名字则仍然会从文件URL中获取名字。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>desc\n显示的文件名将会是文件原始的名字。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" :keep-origin-name="true"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:allow-url\n---\n#config\n>conf-desc\n允许从网络地址获取文件并上传。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" :allow-url="true"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:allow-drag\n---\n#config\n>conf-desc\n允许拖拽文件或网络地址上传，若拖拽的是网络地址必须开启`allow-url`。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" :allow-drag="true"></ui-upload>\n</div>\n---\n#demo\n>desc\n开启`allow-url`后，可以拖拽网络地址上传。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" :allow-drag="true" :allow-url="true"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:validate\n---\n#config\n>conf-desc\n验证上传的文件，这是一个函数。函数包含两个入参：<br><br>第一个参数是上传文件的原始`File`对象<br>第二个参数是一个扩展对象，包含了以下这些信息：<br>&nbsp; &nbsp; `size` : 文件的大小<br>&nbsp; &nbsp; `width` : 图片的宽度(仅文件是图片时有效)<br>&nbsp; &nbsp; `height` : 图片的高度(仅文件是图片时有效)<br><br>通过这两个参数来验证文件。<br><br>此函数的返回值为验证结果，有两种：<br><br>非字符串：认为验证通过，开始上传文件<br>字符串：验证失败，字符串的内容作为提示信息展现给用户<br><br>如果是异步的验证，也可以返回Promise。\n>conf-accept\n验证函数\n>conf-type\nFunction\n>conf-default\n`() => {}`\n---\n#demo\n>desc\n限制上传大小为30kb的文件。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" :validate="checksize"></ui-upload>\n</div>\n>script\n{\n    methods : {\n        checksize : function (file) {\n                \n            if (file.size > 30000) {\n                \n                return \'上传文件的大小不能超过30kb\';\n\n            }\n\n        }\n    }\n}\n---\n#demo\n>desc\n限制上传宽度和高度小于100px的图片。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" :validate="checksize"></ui-upload>\n</div>\n>script\n{\n    methods : {\n        checksize : function (file, ext) {\n                \n            if (ext.width > 100) {\n                \n                return \'上传图片的宽度不能超过100px\';\n\n            }\n                \n            if (ext.height > 100) {\n                \n                return \'上传图片的高度不能超过100px\';\n\n            }\n\n        }\n    }\n}\n:::\n\n:::vue\n@name:uploader\n---\n#config\n>conf-desc\n文件上传适配器，默认采用全局设置。`uploader`是一个函数，第一个参数是上传文件的`File`对象，需要返回一个对象：<br><br>`status` : 文件是否上传成功(必需，Boolean)<br>`path` : 文件上传后的网络地址(必需，String)<br>`message` : 文件上传失败的提示信息(String)，仅在`status`为`false`的时候需要。\n>conf-accept\n文件上传适配器函数\n>conf-type\nFunction\n>conf-default\n`undefined`\n---\n#demo\n>desc\n下面的示例的通过指定适配器演示了文件上传失败的情况。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" :uploader="uploader"></ui-upload>\n</div>\n>script\n{\n    methods : {\n        uploader : function (file) {\n\n            return {\n                status : false,\n                message : \'文件上传失败，请重试\'\n            };\n\n        }\n    }\n}\n:::\n\n:::vue\n@name:list-type\n---\n#config\n>conf-desc\n上传后文件列表的显示类型，仅在`type`为`box`和`button`时有效。\n>conf-accept\n`\'filename\'` : 显示文件名<br>`\'thumbnail\'` : 显示缩略图\n>conf-type\nString\n>conf-default\n`\'filename\'`\n---\n#demo\n>desc\n上传后显示文件缩略图列表。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" type="box" list-type="thumbnail"></ui-upload>\n</div>\n---\n#demo\n>desc\n配合`type="button"`一起使用。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" type="button" list-type="thumbnail"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:show-list\n---\n#config\n>conf-desc\n是否显示上传文件列表。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`true`\n---\n#demo\n>desc\n显示上传文件列表。\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" type="box" :show-list="false"></ui-upload>\n</div>\n:::\n\n:::vue\n@name:hidden-max-alert\n---\n#config\n>conf-desc\n当上传文件达到`max`限制时隐藏提示。\n>conf-accept\n`true`<br>`false`\n>conf-type\nBoolean\n>conf-default\n`false`\n---\n#demo\n>tpl\n<div style="width:300px;">\n    <ui-upload form-name="文件" :max="2" :hidden-max-alert="true"></ui-upload>\n</div>\n:::\n\n[[[方法]]]\n\n:::preset\n@name:formMethod\n@uikey:upload\n@value:[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}]\n@defaultValue:[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}]\n:::\n\n:::vue\n@name:uploadUrl(url)\n---\n#method\n>method-desc\n上传网络文件，使用此方法需要开启组件的`allow-url`配置。\n>method-args\n|url|NO|需要上传网络文件的URL地址|URL|`String`|`undefined`|\n>method-return\n当前组件VM实例。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-upload ref="demo1" form-name="网络文件" :allow-url="true"></ui-upload>\n    </div>\n    <br>\n    <ui-link js="morning.findVM(\'demo1\').uploadUrl(\'http://morning-ui-image.test.upcdn.net/logo.png\');">上传Morning的logo</ui-link>\n</div>\n:::\n\n:::vue\n@name:isUploading()\n---\n#method\n>method-desc\n组件是否仍在上传文件，返回布尔值。\n>method-return\n布尔值。\n---\n#demo\n>tpl\n<div>\n    <div style="width:300px;">\n        <ui-upload ref="demo2" form-name="文件"></ui-upload>\n    </div>\n    <br>\n    <ui-link js="alert(morning.findVM(\'demo2\').isUploading());">获取上传状态</ui-link>\n</div>\n:::\n\n[[[事件]]]\n\n:::preset\n@name:formEvent\n@uiname:文件上传\n@uikey:upload\n@value:[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}]\n@defaultValue:[{path:\'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png\',name:\'1511259398095810608.png\'}]\n@wrapStyle:width:300px;\n:::\n\n[[[表单值]]]\n\n#### 值类型\n\n`Array` : 数组\n\n#### 值过滤\n\n- 所有不支持的值类型，都会被尝试转换成空数组([])。\n- 若启用`max`，最多不会超过max设置的项目数量。\n\n#### 值格式\n\n数组由对象组成，对象包含两个属性：\n\n- `path` : 文件上传之后的路径(必需)\n- `name` : 文件的名称(非必需)\n\n#### 默认值\n\n`[]`\n\n:::preset\n@name:formValue\n@uikey:upload\n@uiname:文件上传\n@valueType:upload\n@wrapStyle:width:300px;\n:::\n\n[[[源码]]]\n\n<iframe src="/report/coverage/lib/components/upload/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>\n\n')])])},a=[];o._withStripped=!0,t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},677:function(n,e,t){"use strict";var o=i(t(1)),a=i(t(678));function i(n){return n&&n.__esModule?n:{default:n}}new o.default({el:"#root",render:function(n){return n(a.default)}})},678:function(n,e,t){"use strict";t.r(e);var o=t(306),a=t(97);for(var i in a)"default"!==i&&function(n){t.d(e,n,function(){return a[n]})}(i);var d=t(0),u=Object(d.a)(a.default,o.a,o.b,!1,null,null,null);u.options.__file="src/docs/pages/component/upload/index.vue",e.default=u.exports},97:function(n,e,t){"use strict";t.r(e);var o=t(98),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);e.default=a.a},98:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,a=t(2),i=(o=a)&&o.__esModule?o:{default:o};e.default={data:function(){return{page:"upload"}},components:{"doc-component":i.default}},n.exports=e.default}});