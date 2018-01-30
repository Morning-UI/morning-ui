<template>    
    [[[表单值]]]

    #### 值类型
    
    `Array` : 数组

    #### 值过滤
    
    - 如果数值的类型是非数组，会被转换成空数组。
    - 若数组中第一项将会被尝试转换成`Date`对象，若结果是非法`Date`对象，则会被转换成当前时间`Date`对象。
    - 若数组中第二项将会被尝试转换成`Date`对象，若结果是非法`Date`对象且开启`is-range`配置，则会被转换成当前时间`Date`对象。
    - 若数组长度为2且未开启`is-range`配置，则数组只保留第一项。
    - 数组中所有的`Date`对象的年/月/日都会统一。

    #### 值格式

    若是单一时间选择，则是长度为1的数组，数组中第一项是选中时间点的`Date`对象。
    若是范围时间选择，则是长度为2的数组，数组中第一项是开始时间点的`Date`对象，数组中第二项是结束时间点的`Date`对象。

    #### 默认值

    `[]`

    #### 输入/输出示例

    :::repeat/html
    formValueType:timepicker
    ---
    <div>
        <p>{$valueType}类型</p>
        <div style="width:300px;">
            <ui-timepicker ref="demoType{$valueType}"></ui-timepicker>
        </div>
        <br>
        <ui-link js="window.morning.findVM('demoType{$valueType}').set({$&valueContent})">设置{$valueType}类型</ui-link>
        <ui-link js="alert(window.morning.findVM('demoType{$valueType}').getJson())">获取表单JSON值</ui-link>
    </div>
    <br>
    <br>
    :::
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'timepicker'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
