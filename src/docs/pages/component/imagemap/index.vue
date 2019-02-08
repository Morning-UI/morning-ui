<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 图片热区输入 `<ui-imagemap>`
    
    <doc-component-status page="imagemap"></doc-component-status>
    
    [[[开始]]]

    定义图片热区输入。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-imagemap form-name="热区"></ui-imagemap>
    </div>
    :::

    #### 组件数据使用说明

    图片热区输入组件仅用于生成图片热区的数据，如果需要展示，需要根据组件的值渲染出最终的热区。

    组件的值是一个对象，包含：

    - `images` : 数组，组成热区的图片。数组中每一项都是一个对象，包含：
        - `path` : 图片地址
        - `name` : 图片名称
    - `zones` : 数组，所有热区。数组中每一项都是一个对象，包含：
        - `x` : 单个热区的X轴坐标(单位px)
        - `y` : 热区的Y轴坐标(单位px)
        - `w` : 热区的宽度(单位px)
        - `h` : 热区的高度(单位px)
        - `i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)
        - `data` : 热区的自定义数据对象(键值对)
    - `w` : 热区容器参考宽度
    - `h` : 热区容器参考高度

    最终根据组件数组生成热区时：

    1. 热区容器 : 将最终的热区容器宽/高与热区容器参考宽/高进行计算，得到`比例值`
    2. 图片 : 将`images`中的图片从上至下排列，所有图片的宽度与热区容器等宽
    3. 热区 : 将热区的`x`、`y`、`w`、`h`乘以`比例值`，得到真实值，然后绘制热区
    4. 热区自定义数据 : 从热区数据的`data`中可以获取每个热区的自定义数据

    :::vue
    @name:自定义数据
    ---
    #demo
    >desc
    图片热区组件支持在每个热区中加入自定义数据，首先通过`<slot>`设置数据的表单。
    <br><br>
    数据表单需要注意下面几点：
    <br><br>
    1. 最终数据会存入热区对象的`data`属性中
    2. 数据表单的`form-key`必需设置，若未设置最终数据不会存入热区的`data`中
    3. 数据表单的`group`通过`slot-scope="{group}"`解构获取(Vue.js的[作用域插槽](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD))，并且需要绑定到所有表单上，若未绑定到表单，最终数据不会存入热区的`data`中
    >tpl
    <div style="width:300px;">
        <ui-imagemap form-name="热区" ref="demo1">
            <ui-formgroup slot-scope="{group}">
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">自定义数据1</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-textinput :group="group" form-key="customdata1"></ui-textinput>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h5 class="title">
                        <ui-center class="fill">自定义数据2</ui-center>
                    </h5>
                    <div class="content">
                        <div class="form">
                            <ui-switch :group="group" form-key="customdata2"></ui-switch>
                        </div>
                    </div>
                </div>
            </ui-formgroup>
        </ui-imagemap>
        <br>
        <p>首先上传一张图片并绘制一个热区，然后：</p>
        <ui-link js="alert(JSON.stringify(window.morning.findVM('demo1').get().zones[0].data))">获取第一个热区的自定义数据</ui-link> 
    </div>
    :::

    :::vue
    @name:热区编辑区缩放
    ---
    #demo
    >desc
    若热区的尺寸太大或太小，超出了屏幕的适合展示尺寸，组件会自动缩放将热区编辑区调整大适合的大小。放缩的比例会显示在热区编辑区的左下角，缩放仅针对编辑区域，不会影响表单值中热区的真实尺寸和位置。
    <br><br>
    组件使用热区容器参考宽度来作为判断尺寸的依据。
    <br><br>
    比如下面的热区太小(361x362.5)，组件会将它放大。
    >tpl
    <div style="width:300px;">
        <ui-imagemap
            form-name="热区"
            v-model="value"
        ></ui-imagemap>
    </div>
    >script
    {
        data : {
        value : {
                'images' : [
                    {
                        'name' : '151244303389249797.png',
                        'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
                    }
                ],
                'zones' : [
                    {'x' : 180.5, 'y' : 58.5, 'h' : 90, 'w' : 137},
                    {'x' : 43, 'y' : 155, 'h' : 90, 'w' : 137.5}
                ],
                'w' : 361,
                'h' : 362.5
            }
        }
    }
    ---
    #demo
    >desc
    比如下面的热区太大(1444*1450)，组件会将它缩小。
    <br><br>
    热区编辑区的缩放比例也可以在编辑区的左下角调整。
    >tpl
    <div style="width:300px;">
        <ui-imagemap
            form-name="热区"
            v-model="value"
        ></ui-imagemap>
    </div>
    >script
    {
        data : {
            value : {
                'images' : [
                    {
                        'name' : '151244303389249797.png',
                        'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
                    }
                ],
                'zones' : [
                    {'x' : 722, 'y' : 234, 'h' : 360, 'w' : 548},
                    {'x' : 172, 'y' : 620, 'h' : 360, 'w' : 550}
                ],
                'w' : 1444,
                'h' : 1450
            }
        }
    }
    :::

    [[[形态]]]

    :::preset
    @name:formStatus
    @uikey:imagemap
    @defaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:imagemap
    @defaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}
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
        <ui-imagemap inside-name="热区"></ui-imagemap>
    </div>
    :::
    
    :::vue
    @name:allow-url
    ---
    #config
    >conf-desc
    允许从网络地址获取文件并上传图片。
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
        <ui-imagemap form-name="热区" allow-url></ui-imagemap>
    </div>
    :::
    
    :::vue
    @name:allow-drag
    ---
    #config
    >conf-desc
    允许拖拽文件或网络地址上传图片，若拖拽的是网络地址必须开启`allow-url`。
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
        <ui-imagemap form-name="热区" allow-drag></ui-imagemap>
    </div>
    :::
    
    :::vue
    @name:multi
    ---
    #config
    >conf-desc
    允许同时选择多个图片上传。注意由于`max`默认为1，请先设置`max`，否则选择多个图片最终只能上传1张。
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
        <ui-imagemap form-name="热区" multi :max="10"></ui-imagemap>
    </div>
    :::
    
    :::vue
    @name:validate
    ---
    #config
    >conf-desc
    验证上传的图片，详见：[文件上传组件的`validate`配置](/component/upload.html)。
    >conf-accept
    验证函数
    >conf-type
    Function
    >conf-default
    `() => {}`
    ---
    #demo
    >desc
    限制上传大小为30kb的图片。
    >tpl
    <div style="width:300px;">
        <ui-imagemap form-name="热区" :validate="checksize"></ui-imagemap>
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
    :::

    :::vue
    @name:uploader
    ---
    #config
    >conf-desc
    图片上传适配器，详见：[文件上传组件的`uploader`配置](/component/upload.html)。
    >conf-accept
    文件上传适配器函数
    >conf-type
    Function
    >conf-default
    `undefined`
    ---
    #demo
    >desc
    下面的示例的通过指定适配器演示了图片上传失败的情况。
    >tpl
    <div style="width:300px;">
        <ui-imagemap form-name="热区" :uploader="uploader"></ui-imagemap>
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
    @name:clean-zone
    ---
    #config
    >conf-desc
    当图片更换时，清空所有的热区。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    当图片发生变化时不清空热区，超出范围的热区会自动移动到新的区域内。
    >tpl
    <div style="width:300px;">
        <ui-imagemap form-name="热区" multi :max="10" :clean-zone="false"></ui-imagemap>
    </div>
    :::

    :::vue
    @name:clean-allzone-btn
    ---
    #config
    >conf-desc
    显示清除所有热区的按钮。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    不显示清空所有热区的按钮。
    >tpl
    <div style="width:300px;">
        <ui-imagemap
            form-name="热区"
            multi
            :max="10"
            v-model="value"
            :clean-allzone-btn="false"
        ></ui-imagemap>
    </div>
    >script
    {
        data : {
            value : {
                'images' : [
                    {
                        'name' : '151244303389249797.png',
                        'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
                    }
                ],
                'zones' : [],
                'w' : 722,
                'h' : 725
            }
        }
    }
    :::

    :::vue
    @name:max
    ---
    #config
    >conf-desc
    最多允许上传多少图片。
    >conf-accept
    数字
    >conf-type
    Number
    >conf-default
    `1`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-imagemap form-name="热区" :max="3"></ui-imagemap>
    </div>
    :::

    :::vue
    @name:max-spot
    ---
    #config
    >conf-desc
    最多允许的热区数量。
    >conf-accept
    数字
    >conf-type
    Number
    >conf-default
    `Infinity`
    ---
    #demo
    >desc
    最多只能画三个热区。
    >tpl
    <div style="width:300px;">
        <ui-imagemap
            form-name="热区"
            :max-spot="3"
            v-model="value"
        ></ui-imagemap>
    </div>
    >script
    {
        data : {
            value : {
                'images' : [
                    {
                        'name' : '151244303389249797.png',
                        'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
                    }
                ],
                'zones' : [],
                'w' : 722,
                'h' : 725
            }
        }
    }
    ---
    #demo
    >desc
    如果默认值中的热区数量多于`max-spot`的设置，多于的热区会被丢弃。
    >tpl
    <div style="width:300px;">
        <ui-imagemap
            form-name="热区"
            :max-spot="1"
            v-model="value"
        ></ui-imagemap>
    </div>
    >script
    {
        data : {
            value : {
                'images' : [
                    {
                        'name' : '151244303389249797.png',
                        'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
                    }
                ],
                'zones' : [
                    {'x' : 361, 'y' : 117, 'h' : 180, 'w' : 274},
                    {'x' : 86, 'y' : 310, 'h' : 180, 'w' : 275}
                ],
                'w' : 722,
                'h' : 725
            }
        }
    }
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:imagemap
    @value:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}
    @defaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}
    :::

    :::vue
    @name:getScale()
    ---
    #method
    >method-desc
    获取热区编辑区域的缩放比例(0-1)，1表示100%。
    >method-return
    数字。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-imagemap
            ref="demo6"
            form-name="热区"
            v-model="value"
        ></ui-imagemap>
        <br>
        <ui-link js="alert(morning.findVM('demo6').getScale())">获取缩放比</ui-link>
    </div>
    >script
    {
        data : {
            value : {
                'images' : [
                    {
                        'name' : '151244303389249797.png',
                        'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
                    }
                ],
                'zones' : [
                    {'x' : 722, 'y' : 234, 'h' : 360, 'w' : 548},
                    {'x' : 172, 'y' : 620, 'h' : 360, 'w' : 550}
                ],
                'w' : 1444,
                'h' : 1450
            }
        }
    }
    :::

    :::vue
    @name:addZone([zone])
    ---
    #method
    >method-desc
    新增一个热区，返回这个热区的`index`索引位置。
    >method-args
    |zone|YES|热区对象，包含：<br><br>`x` : 单个热区的X轴坐标(单位px)，默认`0`<br>`y` : 热区的Y轴坐标(单位px)，默认`0`<br>`w` : 热区的宽度(单位px)，默认为最小宽度<br>`h` : 热区的高度(单位px)，默认为最小高度<br>`i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)，默认`0`<br>`data` : 热区的自定义数据对象(键值对)，此数据不会做校验，默认`undefined`|热区对象|`Object`|`undefined`|
    >method-return
    数字。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-imagemap
            ref="demo3"
            form-name="热区"
            v-model="value"
        ></ui-imagemap>
        <br>
        <ui-link js="morning.findVM('demo3').addZone()">新增一个默认热区</ui-link><br>
        <ui-link js="morning.findVM('demo3').addZone({x:20, y: 20, w: 50, h: 50})">新增一个热区</ui-link>
    </div>
    >script
    {
        data : {
            value : {
                'images' : [
                    {
                        'name' : '151244303389249797.png',
                        'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
                    }
                ],
                'zones' : [
                    {'x' : 361, 'y' : 117, 'h' : 180, 'w' : 274},
                    {'x' : 86, 'y' : 310, 'h' : 180, 'w' : 275}
                ],
                'w' : 722,
                'h' : 725
            }
        }
    }
    :::

    :::vue
    @name:removeZone(index)
    ---
    #method
    >method-desc
    删除一个热区。
    >method-args
    |index|NO|需要删除热区的索引位置。|索引位置|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-imagemap
            ref="demo4"
            form-name="热区"
            v-model="value"
        ></ui-imagemap>
        <br>
        <ui-link js="morning.findVM('demo4').removeZone(0)">删除第一个热区</ui-link>
    </div>
    >script
    {
        data : {
            value : {
                'images' : [
                    {
                        'name' : '151244303389249797.png',
                        'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
                    }
                ],
                'zones' : [
                    {'x' : 361, 'y' : 117, 'h' : 180, 'w' : 274},
                    {'x' : 86, 'y' : 310, 'h' : 180, 'w':275}
                ],
                'w' : 722,
                'h' : 725
            }
        }
    }
    :::

    :::vue
    @name:updateZone(index, zone)
    ---
    #method
    >method-desc
    更新一个热区。
    >method-args
    |index|NO|需要更新热区的索引位置。|索引位置|`Number`|`undefined`|
    |zone|NO|需要更新的热区对象，包含：<br><br>`x` : 单个热区的X轴坐标(单位px)，默认`0`<br>`y` : 热区的Y轴坐标(单位px)，默认`0`<br>`w` : 热区的宽度(单位px)，默认为最小宽度<br>`h` : 热区的高度(单位px)，默认为最小高度<br>`i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)，默认`0`<br>`data` : 热区的自定义数据对象(键值对)，此数据不会做校验，默认`undefined`|热区对象|`Object`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-imagemap 
            ref="demo5"
            form-name="热区"
            v-model="value"
        ></ui-imagemap>
        <br>
        <ui-link js="morning.findVM('demo5').updateZone(0, {x: 10, y: 10, w: 50, h: 50})">更新第一个热区</ui-link>
    </div>
    >script
    {
        data : {
            value : {
                'images' : [
                    {
                        'name' : '151244303389249797.png',
                        'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
                    }
                ],
                'zones' : [
                    {'x' : 361, 'y' : 117, 'h' : 180, 'w' : 274},
                    {'x' : 86, 'y' : 310, 'h' : 180, 'w' : 275}
                ],
                'w' : 722,
                'h' : 725
            }
        }
    }
    :::

    :::vue
    @name:cleanZones()
    ---
    #method
    >method-desc
    清除所有热区。
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-imagemap
            ref="demo2"
            form-name="热区"
            v-model="value"
        ></ui-imagemap>
        <br>
        <ui-link js="morning.findVM('demo2').cleanZones()">清除所有热区</ui-link>
    </div>
    >script
    {
        data : {
            value : {
                'images' : [
                    {
                        'name' : '151244303389249797.png',
                        'path' : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
                    }
                ],
                'zones' : [
                    {'x' : 361, 'y' : 117, 'h' : 180, 'w' : 274},
                    {'x' : 86, 'y' : 310, 'h' : 180, 'w' : 275}
                ],
                'w' : 722,
                'h' : 725
            }
        }
    }
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:图片热区输入
    @uikey:imagemap
    @value:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}
    @defultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}
    @wrapStyle:width:300px;
    :::

    [[[表单值]]]

    #### 值类型
    
    `Object` : 对象

    #### 值过滤

    - 所有不支持的值类型，都会被尝试转换成默认对象。
    - 值对象中属性：`images`、`zones`、`w`、`h`的类型不符合预期，值会被重置成默认对象。

    #### 值格式

    对象包含属性：
    
    - `images` : 数组，组成热区的图片。数组中每一项都是一个对象，包含：
        - `path` : 图片地址
        - `name` : 图片名称
    - `zones` : 数组，所有热区。数组中每一项都是一个对象，包含：
        - `x` : 单个热区的X轴坐标(单位px)
        - `y` : 热区的Y轴坐标(单位px)
        - `w` : 热区的宽度(单位px)
        - `h` : 热区的高度(单位px)
        - `i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)
        - `data` : 热区的自定义数据对象(键值对)
    - `w` : 热区容器参考宽度
    - `h` : 热区容器参考高度

    #### 默认值

    `{images:[], zones:[], w:0, h:0}`

    :::preset
    @name:formValue
    @uikey:imagemap
    @uiname:图片热区输入
    @valueType:imagemap
    @wrapStyle:width:300px;
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/imagemap/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'imagemap'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
