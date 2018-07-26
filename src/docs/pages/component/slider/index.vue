<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 滑块输入 `<ui-slider>`
    
    <doc-component-status page="slider"></doc-component-status>
    
    [[[开始]]]

    定义一个滑块输入。

    #### 使用

    :::democode/html
    <div style="width:300px;">
        <ui-slider form-name="进度"></ui-slider>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:slider
    statusDefaultValue:40
    :::

    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[max](#max)|滑块输入允许输入的最大值。|数字|Number|`100`|
    |[min](#min)|滑块输入允许输入的最小值。|数字|Number|`0`|
    |[step](#step)|滑动的步长，用户移动滑块时最小的数值调整单位。|大于0的数字|Number|`1`|
    |[show-tip](#show-tip)|在移动时显示滑块当前的数值。|`true`<br/>`false`|Boolean|`true`|
    |[tip-formatter](#tip-formatter)|格式化滑块显示的数值。<br/>接受一个函数，函数的第一个参数是滑块的数值(数字)。<br/>如果开启了`is-range`则是一个数组，数组包含两个数字，分别是开始和结束两个滑块的数值。<br/><br/>此函数必须返回数字或字符串内容，将会显示在滑块上方。|格式化函数|Function|`value => value`|
    |[prepend](#prepend)|滑块前部显示内容（太长的内容会被隐藏）|内容字符串(可使用HTML)|String|`''`|
    |[append](#append)|滑块后部显示内容（太长的内容会被隐藏）|内容字符串(可使用HTML)|String|`''`|
    |[show-point](#show-point)|显示步长的间断点(按`step`配置)。若间断点过于密集，组件会自动调整隐藏部分间断点。|`true`<br/>`false`|Boolean|`true`|
    |[mark-range](#mark-range)|标记滑动条的某部分。这是一个数组每项都是一个标记段，标记段是一个长度为2的数组，分别表示开始和结束。<br>比如：`[[10, 20], [30, 40]]`会标记两段，第一段从数值10开始到20结束，第二段从数值30开始到40结束。|数组|Array|`[]`|
    |[show-counter](#show-counter)|显示计数器。|`true`<br/>`false`|Boolean|`true`|

    :::

    :::preset/html
    formConfigDemo
    ---
    uikey:slider
    configDefaultValue:40
    :::

    #### max

    :::democode/html
    <div style="width:300px;">
        <ui-slider :max="10"></ui-slider>
    </div>
    :::

    #### min

    :::democode/html
    <div style="width:300px;">
        <ui-slider :min="50"></ui-slider>
    </div>
    :::
    
    `max`和`min`一起使用：

    :::democode/html
    <div style="width:300px;">
        <ui-slider :min="1000" max="2000"></ui-slider>
    </div>
    :::

    #### step

    每次调整以5为最小单位：

    :::democode/html
    <div style="width:300px;">
        <ui-slider :step="5"></ui-slider>
    </div>
    :::

    `step`也可以不是正数：

    :::democode/html
    <div style="width:300px;">
        <ui-slider :step="1.2"></ui-slider>
    </div>
    :::

    `step`配合`max`、`min`一起使用：

    :::democode/html
    <div style="width:300px;">
        <ui-slider :step="100" :min="1000" :max="2000"></ui-slider>
    </div>
    :::

    #### show-tip

    不显示数值：

    :::democode/html
    <div style="width:300px;">
        <ui-slider :show-tip="false"></ui-slider>
    </div>
    :::

    #### tip-formatter

    :::democode/html
    <div style="width:300px;">
        <ui-slider :tip-formatter="(value) => `进度：${value}%`"></ui-slider>
    </div>
    :::

    #### prepend

    :::democode/html
    <div style="width:300px;">
        <ui-slider prepend="进度"></ui-slider>
    </div>
    :::

    也可以使用HTML内容：

    :::democode/html
    <div style="width:300px;">
        <ui-slider :prepend="'<i class=\'mo-icon-set\'></i>'"></ui-slider>
    </div>
    :::

    #### append

    :::democode/html
    <div style="width:300px;">
        <ui-slider append="进度"></ui-slider>
    </div>
    :::

    也可以使用HTML内容：

    :::democode/html
    <div style="width:300px;">
        <ui-slider :append="'<i class=\'mo-icon-set\'></i>'"></ui-slider>
    </div>
    :::
    
    `prepend`和`append`一起使用：

    :::democode/html
    <div style="width:300px;">
        <ui-slider :prepend="'<i class=\'mo-icon-love-o\'></i>'" :append="'<i class=\'mo-icon-love-f\'></i>'"></ui-slider>
    </div>
    :::
    
    #### show-point

    :::democode/html
    <div style="width:300px;">
        <ui-slider :step="10" show-point></ui-slider>
    </div>
    :::
    
    如果间断点过于密集，会自动隐藏部分间断点：

    :::democode/html
    <div style="width:300px;">
        <ui-slider show-point :min="30" :max="260" :step="2"></ui-slider>
    </div>
    :::
    
    #### mark-range

    :::democode/html
    <div style="width:300px;">
        <ui-slider :mark-range="[[0, 20], [50, 70]]"></ui-slider>
    </div>
    :::

    #### show-counter

    :::democode/html
    <div style="width:300px;">
        <ui-slider show-counter></ui-slider>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:slider
    methodValue:40
    methodDefaultValue:40
    :::

    [[[事件]]]

    :::preset/html
    formEvent
    ---
    uikey:slider
    eventValue:40
    :::

    [[[表单值]]]

    #### 值类型
    
    `Number` : 数字

    #### 值过滤
    
    - 如果数值的类型不是数字，会被转换成数字(通过`Number(n)`)
    - 如果数字是NaN，则取`min`配置的最小值
    - 如果数字小于`min`配置，则取`min`配置的最小值
    - 如果数字大于`max`配置，则取`max`配置的最大值

    #### 值格式

    取值的数字。

    #### 默认值

    `0`(`min`配置的最小值)

    #### 输入/输出示例

    :::repeat/html
    formValueType:slider
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-slider ref="demoType{$valueType}"></ui-slider>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/slider/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'slider'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
