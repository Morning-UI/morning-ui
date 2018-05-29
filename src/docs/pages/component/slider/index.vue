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
        <ui-slider show-point></ui-slider>
    </div>
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
