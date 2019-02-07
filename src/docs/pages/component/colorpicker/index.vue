<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 颜色选择器 `<ui-colorpicker>`
    
    <doc-component-status page="colorpicker"></doc-component-status>
    
    [[[开始]]]

    定义颜色选择器。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-colorpicker form-name="颜色选择"></ui-colorpicker>
    </div>
    :::

    [[[形态]]]

    :::preset
    @name:formStatus
    @uikey:colorpicker
    @defaultValue:'#ff0000'
    :::

    [[[配置]]]

    :::preset
    @name:formConfig
    @uikey:colorpicker
    @defaultValue:'#ff0000'
    :::

    :::vue
    @name:value-type
    ---
    #config
    >conf-desc
    通过`get()`方法获取颜色的数值类型。若颜色没有透明度，在数值上会自动过滤透明度。
    >conf-accept
    `'hex'`<br>`'rgba'`<br>`'hsla'`
    >conf-type
    String
    >conf-default
    `'hex'`
    ---
    #demo
    >desc
    获取颜色的HEX。
    >tpl
    <div style="width:300px;">
        <ui-colorpicker ref="demo1" form-name="颜色选择" value-type="hex"></ui-colorpicker><br>
        <ui-link js="alert(window.morning.findVM('demo1').get())">获取颜色值</ui-link>
    </div>
    ---
    #demo
    >desc
    获取颜色的RGBA。
    >tpl
    <div style="width:300px;">
        <ui-colorpicker ref="demo2" form-name="颜色选择" value-type="rgba"></ui-colorpicker><br>
        <ui-link js="alert(window.morning.findVM('demo2').get())">获取颜色值</ui-link>
    </div>
    ---
    #demo
    >desc
    获取颜色的HSLA。
    >tpl
    <div style="width:300px;">
        <ui-colorpicker ref="demo3" form-name="颜色选择" value-type="hsla"></ui-colorpicker><br>
        <ui-link js="alert(window.morning.findVM('demo3').get())">获取颜色值</ui-link>
    </div>
    :::

    :::vue
    @name:allow-alpha
    ---
    #config
    >conf-desc
    是否允许颜色具有透明度。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-colorpicker form-name="颜色选择" :allow-alpha="false"></ui-colorpicker>
    </div>
    :::

    [[[方法]]]

    :::preset
    @name:formMethod
    @uikey:colorpicker
    @value:'#ff0000'
    @defaultValue:'#ff0000'
    :::

    :::vue
    @name:togglePicker([toggle])
    ---
    #method
    >method-desc
    显示/隐藏颜色选择器的下拉框。
    >method-args
    |show|YES|颜色选择器的下拉框切换到隐藏或显示，若不设置则切换到相反的状态。|`undefined`<br>`true`<br>`false`|`Undefined`<br>`Boolean`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <div style="width:300px">
            <ui-colorpicker ref="demo5"></ui-colorpicker>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demo5').togglePicker();">切换相反状态</ui-link>
        <ui-link js="window.morning.findVM('demo5').togglePicker(true);">切换至显示</ui-link>
        <ui-link js="window.morning.findVM('demo5').togglePicker(false);">切换至隐藏</ui-link>
    </div>
    :::

    [[[事件]]]

    :::preset
    @name:formEvent
    @uiname:颜色选择器
    @uikey:colorpicker
    @value:'#ff0000'
    @wrapStyle:width:300px;
    :::

    :::vue
    @name:show-picker
    ---
    #event
    >event-desc
    当颜色选择器的下拉框显示时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-colorpicker ref="demo4" @show-picker="echo"></ui-colorpicker>
        <br> 
        <ui-link js="window.morning.findVM('demo4').togglePicker(true);">点击触发show-picker事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo4.show-picker', 'emit event!');
            }
        }
    }
    :::
    
    :::vue
    @name:hide-picker
    ---
    #event
    >event-desc
    当颜色选择器的下拉框隐藏时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-colorpicker ref="demo6" @hide-picker="echo"></ui-colorpicker>
        <br> 
        <ui-link js="window.morning.findVM('demo4').togglePicker(true);setTimeout(()=>(window.morning.findVM('demo6').togglePicker(false)));">点击触发hide-picker事件</ui-link>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo6.hide-picker', 'emit event!');
            }
        }
    }
    :::
    
    :::vue
    @name:hue-slider-change
    ---
    #event
    >event-desc
    当颜色选择器的HUE滑块移动时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-colorpicker ref="demo7" @hue-slider-change="echo"></ui-colorpicker>
        <br> 
        <p>拖动HUE滑块来触发此事件</p>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo7.hue-slider-change', 'emit event!');
            }
        }
    }
    :::
    
    :::vue
    @name:alpha-slider-change
    ---
    #event
    >event-desc
    当颜色选择器的透明度滑块移动时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-colorpicker ref="demo8" @alpha-slider-change="echo"></ui-colorpicker>
        <br> 
        <p>拖动透明度滑块来触发此事件</p>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo8.alpha-slider-change', 'emit event!');
            }
        }
    }
    :::
    
    :::vue
    @name:input-type-change
    ---
    #event
    >event-desc
    当颜色选择器的色值输入类型变化时触发。
    ---
    #demo
    >tpl
    <div style="width:300px">
        <ui-colorpicker ref="demo9" @input-type-change="echo"></ui-colorpicker>
        <br> 
        <p>切换颜色输入类型来触发此事件</p>
    </div>
    >script
    {
        methods : {
            echo : function () {
                console.log('demo9.input-type-change', 'emit event!');
            }
        }
    }
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

    :::preset
    @name:formValue
    @uikey:colorpicker
    @uiname:颜色选择器
    @valueType:colorpicker
    @wrapStyle:width:300px;
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
