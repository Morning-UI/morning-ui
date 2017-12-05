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

    #### 使用
    
    :::democode/html
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

    #### 自定义数据

    图片热区组件支持在每个热区中加入自定义数据，首先通过`<slot>`设置数据的表单：

    :::democode/html
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

    数据表单需要注意下面几点：

    1. 最终数据会存入热区对象的`data`属性中
    2. 数据表单的`form-key`必需设置，若未设置最终数据不会存入热区的`data`中
    3. 数据表单的`group`通过`slot-scope="{group}"`解构获取(Vue.js的[作用域插槽](https://cn.vuejs.org/v2/guide/components.html#作用域插槽))，并且需要绑定到所有表单上，若未绑定到表单，最终数据不会存入热区的`data`中

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:imagemap
    statusDefaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |allow-url|允许从网络地址获取文件并上传图片|`true`<br>`false`|Boolean|`false`|
    |allow-drag|允许拖拽文件或网络地址上传图片，若拖拽的是网络地址必须开启`allow-url`|`true`<br>`false`|Boolean|`false`|
    |multi|允许同时选择多个图片上传。注意由于`max`默认为1，请先设置`max`，否则选择多个图片最终只能上传1张。|`true`<br>`false`|Boolean|`false`|
    |validate|验证上传的图片，详见：[文件上传组件的`validate`配置](/component/upload.html)|验证函数|Function|`() => {}`|
    |uploader|图片上传适配器，详见：[文件上传组件的`uploader`配置](/component/upload.html)|文件上传适配器函数|Function|`undefined`|
    |clean-zone|当图片更换时，清空所有的热区|`true`<br>`false`|Boolean|`true`|
    |max|最多允许上传多少图片|数字|Number|`1`|

    :::preset/html
    formConfigDemo
    ---
    uikey:imagemap
    configDefaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}
    :::

    #### allow-url

    :::democode/html
    <div style="width:300px;">
        <ui-imagemap form-name="热区" allow-url></ui-imagemap>
    </div>
    :::

    #### allow-drag

    :::democode/html
    <div style="width:300px;">
        <ui-imagemap form-name="热区" allow-drag></ui-imagemap>
    </div>
    :::

    #### multi

    :::democode/html
    <div style="width:300px;">
        <ui-imagemap form-name="热区" multi :max="10"></ui-imagemap>
    </div>
    :::

    #### validate

    限制上传大小为30kb的图片：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            checksize : function (file) {
                    
                if (file.size > 30000) {
                    
                    return '上传文件的大小不能超过30kb';

                }

            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-imagemap form-name="热区" :validate="checksize"></ui-imagemap>
    </div>
    :::

    #### uploader

    下面的示例的通过指定适配器演示了图片上传失败的情况：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            uploader : function (file) {

                return {
                    status : false,
                    message : '文件上传失败，请重试'
                };

            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-imagemap form-name="热区" :uploader="uploader"></ui-imagemap>
    </div>
    :::

    #### clean-zone

    当图片发生变化时不清空热区，超出范围的热区会自动移动到新的区域内：

    :::democode/html
    <div style="width:300px;">
        <ui-imagemap form-name="热区" multi :max="10" :clean-zone="false"></ui-imagemap>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:imagemap
    methodValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}
    methodDefaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}
    :::

    #### addZone([zone])
    
    新增一个热区，返回这个热区的`index`索引位置。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |zone|YES|热区对象，包含：<br><br>`x` : 单个热区的X轴坐标(单位px)，默认`0`<br>`y` : 热区的Y轴坐标(单位px)，默认`0`<br>`w` : 热区的宽度(单位px)，默认为最小宽度<br>`h` : 热区的高度(单位px)，默认为最小高度<br>`i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)，默认`0`<br>`data` : 热区的自定义数据对象(键值对)，此数据不会做校验，默认`undefined`|热区对象|`Object`|`undefined`|
    
    :::democode/html
    <div style="width:300px;">
        <ui-imagemap ref="demo3" form-name="热区" :default-value="{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}"></ui-imagemap>
        <br>
        <ui-link js="morning.findVM('demo3').addZone()">新增一个默认热区</ui-link><br>
        <ui-link js="morning.findVM('demo3').addZone({x:20, y: 20, w: 50, h: 50})">新增一个热区</ui-link>
    </div>
    :::

    #### removeZone(index)
    
    删除一个热区。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |index|NO|需要删除热区的索引位置。|索引位置|`Number`|`undefined`|
    
    :::democode/html
    <div style="width:300px;">
        <ui-imagemap ref="demo4" form-name="热区" :default-value="{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}"></ui-imagemap>
        <br>
        <ui-link js="morning.findVM('demo4').removeZone(0)">删除第一个热区</ui-link>
    </div>
    :::

    #### updateZone(index, zone)
    
    更新一个热区。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |index|NO|需要更新热区的索引位置。|索引位置|`Number`|`undefined`|
    |zone|NO|需要更新的热区对象，包含：<br><br>`x` : 单个热区的X轴坐标(单位px)，默认`0`<br>`y` : 热区的Y轴坐标(单位px)，默认`0`<br>`w` : 热区的宽度(单位px)，默认为最小宽度<br>`h` : 热区的高度(单位px)，默认为最小高度<br>`i` : 热区的z-index层级(如果此属性为0，则取热区在`zones`中的`index`作为层级)，默认`0`<br>`data` : 热区的自定义数据对象(键值对)，此数据不会做校验，默认`undefined`|热区对象|`Object`|`undefined`|
    
    :::democode/html
    <div style="width:300px;">
        <ui-imagemap ref="demo5" form-name="热区" :default-value="{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}"></ui-imagemap>
        <br>
        <ui-link js="morning.findVM('demo5').updateZone(0, {x: 10, y: 10, w: 50, h: 50})">更新第一个热区</ui-link>
    </div>
    :::

    #### cleanZones()

    清除所有热区。
    
    :::democode/html
    <div style="width:300px;">
        <ui-imagemap ref="demo2" form-name="热区" :default-value="{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}"></ui-imagemap>
        <br>
        <ui-link js="morning.findVM('demo2').cleanZones()">清除所有热区</ui-link>
    </div>
    :::

    [[[事件]]]

    :::preset/html
    formEvent
    ---
    uikey:imagemap
    eventValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}
    eventDefaultValue:{'images':[{'name':'151244303389249797.png','path':'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'}],'zones':[{'x':361,'y':117,'h':180,'w':274},{'x':86,'y':310,'h':180,'w':275}],'w':722,'h':725}
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

    #### 输入/输出示例

    :::repeat/html
    formValueType:imagemap
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-imagemap ref="demoType{$valueType}" form-name="热区"></ui-imagemap>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
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
