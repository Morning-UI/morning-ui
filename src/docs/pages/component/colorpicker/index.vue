<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 颜色选择器 `<ui-colorpicker>`
    
    <doc-component-status page="colorpicker"></doc-component-status>
    
    [[[开始]]]

    定义文本输入框。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-colorpicker form-name="颜色选择"></ui-colorpicker>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:colorpicker
    statusDefaultValue:'#ff0000'
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[value-type](#value-type)|通过`set()`方法获取颜色的数值类型。若颜色没有透明度，在数值上会自动过滤透明度。|`'hex'`<br>`'rgba'`<br>`'hsla'`|String|`'hex'`|
    |[allow-alpha](#allow-alpha)|是否允许颜色具有透明度|`true`<br>`false`|Boolean|`true`|
    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:colorpicker
    configDefaultValue:'#ff0000'
    :::

    #### value-type

    获取颜色的HEX：

    :::democode/html
    <div style="width:300px;">
        <ui-colorpicker ref="demo1" form-name="颜色选择" value-type="hex"></ui-colorpicker><br>
        <ui-link js="alert(window.morning.findVM('demo1').get())">获取颜色值</ui-link>
    </div>
    :::
    

    获取颜色的RGBA：

    :::democode/html
    <div style="width:300px;">
        <ui-colorpicker ref="demo2" form-name="颜色选择" value-type="rgba"></ui-colorpicker><br>
        <ui-link js="alert(window.morning.findVM('demo2').get())">获取颜色值</ui-link>
    </div>
    :::

    获取颜色的HSLA：

    :::democode/html
    <div style="width:300px;">
        <ui-colorpicker ref="demo3" form-name="颜色选择" value-type="hsla"></ui-colorpicker><br>
        <ui-link js="alert(window.morning.findVM('demo3').get())">获取颜色值</ui-link>
    </div>
    :::

    #### allow-alpha

    :::democode/html
    <div style="width:300px;">
        <ui-colorpicker form-name="颜色选择" :allow-alpha="false"></ui-colorpicker>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:colorpicker
    methodValue:'#ff0000'
    methodDefaultValue:'#ff0000'
    :::

    [[[事件]]]

    :::preset/html
    formEvent
    ---
    uikey:colorpicker
    eventValue:'#ff0000'
    :::

    [[[表单值]]]

    #### 值类型
    
    - `String` : 字符串

    #### 值过滤
    
    - 转换成字符串类型
    - 检测值是否是合法的颜色值字符串(采用[color-string](https://www.npmjs.com/package/color-string)检测)，若不合法则返回纯黑色的值
    
    #### 值格式

    颜色值的字符串，根据`value-type`配置角色是哪种颜色标准。

    #### 默认值

    `#000000`(若设置了`value-type`则是纯黑色的其他表达形式)

    #### 输入/输出示例

    :::repeat/html
    formValueType:colorpicker
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-colorpicker ref="demoType{$valueType}"></ui-colorpicker>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/colorpicker/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'colorpicker'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
