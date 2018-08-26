<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 评分 `<ui-rate>`
    
    <doc-component-status page="rate"></doc-component-status>
    
    [[[开始]]]

    定义评分组件，评分组件输出一个数字。

    #### 使用

    :::democode/html
    <div style="width:200px;">
        <ui-rate form-name="评分"></ui-rate>
    </div>
    :::

    #### 支持半星

    :::democode/html
    <div style="width:200px;">
        <ui-rate form-name="评分" allow-half></ui-rate>
    </div>
    :::

    #### 显示文本

    通过`show-note`来显示辅助文本，也可以通过`formater`配置来自定义文本。

    :::democode/html
    <div style="width:200px;">
        <ui-rate form-name="评分" show-note></ui-rate>
    </div>
    :::

    [[[形态]]]

    :::preset/html
    formStatus
    ---
    uikey:rate
    statusDefaultValue:3
    :::
    
    [[[配置]]]

    :::preset/html
    formConfigTable
    ---
    |[max](#max)|最大评分|数字，必须是整数且大于0|Number|`5`|
    |[allow-half](#allow-half)|是否允许半星评分|`true`<br>`false`|Boolean|`false`|
    |[show-note](#show-note)|是否显示辅助文字|`true`<br>`false`|Boolean|`false`|
    |[formater](#formater)|辅助文字格式化函数，此函数接受一个参数，为当前的评分(数字)。<br>此函数的返回值将显示为辅助文字|格式化函数|Function|`(rate)=>(rate+'星')`|  
    |[icon](#icon)|配置评分显示的图标内容，可以是：<br><br>图标：使用`<i>`标签的字体图标<br>文字：使用`<span>`标签包裹的文本|图标HTML字符串|String|`<i class="mo-icon mo-icon-star-f"></i>`|
    :::

    #### max

    :::democode/html
    <div style="width:200px;">
        <ui-rate form-name="评分" :max="3"></ui-rate>
    </div>
    :::

    #### allow-half

    :::democode/html
    <div style="width:200px;">
        <ui-rate form-name="评分" allow-half></ui-rate>
    </div>
    :::

    #### show-note

    :::democode/html
    <div style="width:200px;">
        <ui-rate form-name="评分" allow-half></ui-rate>
    </div>
    :::

    #### formater

    根据评分显示满意级别：

    :::democode/html
    <div style="width:200px;">
        <ui-rate
            form-name="评分"
            show-note
            :formater="function (rate){
                
                if (rate === 0) {
                    return '未评分';
                } else if (rate === 1) {
                    return '差劲';
                } else if (rate === 2) {
                    return '失望';
                } else if (rate === 3) {
                    return '一般';
                } else if (rate === 4) {
                    return '不错';
                } else if (rate === 5) {
                    return '完美';
                } else {
                    return '未知';
                }

            }"
        ></ui-rate>
    </div>
    :::

    显示评分值：

    :::democode/html
    <div style="width:250px;">
        <ui-rate
            form-name="评分"
            show-note
            :formater="function (rate){
                return '当前评分：' + rate;
            }"
        ></ui-rate>
    </div>
    :::

    #### icon

    替换icon：

    :::democode/html
    <div style="width:250px;">
        <ui-rate
            form-name="评分"
            icon="<i class='mo-icon mo-icon-love-f'></i>"
        ></ui-rate>
    </div>
    :::
    
    使用文字：

    :::democode/html
    <div style="width:250px;">
        <ui-rate
            form-name="评分"
            icon="<span style='font-weight:bold'>A</span>"
        ></ui-rate>
    </div>
    :::

    [[[方法]]]

    :::preset/html
    formMethod
    ---
    uikey:rate
    methodValue:3
    methodDefaultValue:3
    :::
    
    [[[事件]]]

    #### rating

    当鼠标切换评分时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo1.console1', 'rating event!');
            }
        }
    });
    ---
    <div style="width:300px;">
        <ui-rate @rating="echo" ref="demo1"></ui-rate>
    </div>
    :::

    :::preset/html
    formEvent
    ---
    uikey:rate
    eventValue:3
    :::

    [[[表单值]]]

    #### 值类型
    
    `Number` : 数字

    #### 值过滤
    
    - 如果数值的类型不是数字，会被转换成数字，若转换错误则设为0。
    - 如果数值小于0，则为0。
    - 如果数值大于`max`，则为`max`。

    #### 值格式

    评分数字(若开启了`allow-half`配置，则可能出现浮点数)。

    #### 默认值

    `0`

    #### 输入/输出示例

    :::repeat/html
    formValueType:rate
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-rate ref="demoType{$valueType}"></ui-rate>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/rate/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'rate'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
