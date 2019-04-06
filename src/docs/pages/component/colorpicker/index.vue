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
    @name:formStatusWithSize
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

    :::vue
    @name:palettes
    ---
    #config
    >conf-desc
    显示调色板，调色板包含一组或多组预设颜色，让用户可以快速选择。
    >conf-accept
    包含颜色色值(支持`hex`、`rgba`、`hsla`)的数组。<br>包含一组色值对象的数组，色值对象包含两个属性：`name`：调色板名称，`colors`：预设颜色色值(支持`hex`、`rgba`、`hsla`)数组。
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >tpl
    <div style="width:300px;">
        <ui-colorpicker form-name="颜色选择"
            :palettes="[
                '#f44336',
                '#e91e63',
                '#9c27b0',
                '#3f51b5',
                '#2196f3',
                '#009688',
                '#8bc34a',
                '#ff9800'
            ]"
        ></ui-colorpicker>
    </div>
    ---
    #demo
    >desc
    预设颜色也支持`hex`、`rgba`、`hsla`类型，若和`value-type`不一致则会自动转换。
    >tpl
    <div style="width:300px;">
        <ui-colorpicker form-name="颜色选择"
            value-type="hex"
            :palettes="[
                'rgb(244, 67, 54)',
                'rgb(233, 30, 99)',
                'rgb(156, 39, 176)',
                'rgb(63, 81, 181)',
                'rgb(33, 150, 243)',
                'hsl(174, 100%, 29%)',
                'hsl(88, 50%, 53%)',
                'hsl(36, 100%, 50%)'
            ]"
        ></ui-colorpicker>
    </div>
    ---
    #demo
    >desc
    预设颜色也支持透明度。
    >tpl
    <div style="width:300px;">
        <ui-colorpicker form-name="颜色选择"
            :palettes="[
                'rgb(244, 67, 54, 0.7)',
                'rgb(233, 30, 99, 0.7)',
                'rgb(156, 39, 176, 0.7)',
                'rgb(63, 81, 181, 0.7)',
                'rgb(33, 150, 243, 0.7)',
                '#009688aa',
                '#8bc34aaa',
                '#ff9800aa'
            ]"
        ></ui-colorpicker>
    </div>
    ---
    #demo
    >desc
    设置多个调色板。
    <br>
    需要注意当使用多个调色板时`palettes`数组中的每一项都必须是对象，不能混用色值字符串和对象两种写法。
    <br>
    <br>
    在调色板选择界面，最多可以预览每组颜色的前6个颜色。
    >tpl
    <div style="width:300px;">
        <ui-colorpicker form-name="颜色选择"
            :palettes="[
                {
                    name : '红色系',
                    colors : ['#b71c1c', '#c62828', '#d32f2f', '#e53935', '#f44336', '#ef5350', '#e57373', '#ef9a9a', '#ffcdd2', '#ffebee']
                },
                {
                    name : '蓝色系',
                    colors : ['#0d47a1', '#1565c0', '#1976d2', '#1e88e5', '#2196f3', '#42a5f5', '#64b5f6', '#90caf9', '#bbdefb', '#e3f2fd']
                },
                {
                    name : '绿色系',
                    colors : ['#1b5e20', '#2e7d32', '#388e3c', '#43a047', '#4caf50', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9', '#e8f5e9']
                },
                {
                    name : '橙色系',
                    colors : ['#e65100', '#ef6c00', '#f57c00', '#fb8c00', '#ff9800', '#ffa726', '#ffb74d', '#ffcc80', '#ffe0b2', '#fff3e0']
                }
            ]"
        ></ui-colorpicker>
    </div>
    :::

    :::vue
    @name:only-palettes
    ---
    #config
    >conf-desc
    仅使用色板选取颜色。使用此配置时需要确保`palettes`配置中至少有一组色彩，否则此配置不生效。
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
        <ui-colorpicker form-name="颜色选择"
            :only-palettes="true"
            :palettes="[
                '#f44336',
                '#e91e63',
                '#9c27b0',
                '#3f51b5',
                '#2196f3',
                '#009688',
                '#8bc34a',
                '#ff9800'
            ]"
        ></ui-colorpicker>
    </div>
    ---
    #demo
    >desc
    可通过`palettes`配置设置多个调色板。
    >tpl
    <div style="width:300px;">
        <ui-colorpicker form-name="颜色选择"
            :only-palettes="true"
            :palettes="[
                {
                    name : '红色系',
                    colors : ['#b71c1c', '#c62828', '#d32f2f', '#e53935', '#f44336', '#ef5350', '#e57373', '#ef9a9a', '#ffcdd2', '#ffebee']
                },
                {
                    name : '蓝色系',
                    colors : ['#0d47a1', '#1565c0', '#1976d2', '#1e88e5', '#2196f3', '#42a5f5', '#64b5f6', '#90caf9', '#bbdefb', '#e3f2fd']
                },
                {
                    name : '绿色系',
                    colors : ['#1b5e20', '#2e7d32', '#388e3c', '#43a047', '#4caf50', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9', '#e8f5e9']
                },
                {
                    name : '橙色系',
                    colors : ['#e65100', '#ef6c00', '#f57c00', '#fb8c00', '#ff9800', '#ffa726', '#ffb74d', '#ffcc80', '#ffe0b2', '#fff3e0']
                }
            ]"
        ></ui-colorpicker>
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
