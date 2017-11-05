<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 全局方法
    
    Morning UI引入后会返回一个`morning`对象，这个对象上有一些有用的属性及方法。

    > 注意`morning`对象上以下划线开头的都是私有属性，用法及变动不会再文档中提及，不应该访问及使用。

    ### 属性

    - isMorning : Morning组件被引用的标记，数值为`true`。
    - version : Morning UI当前的版本，使用者可以根据不同版本增加不同的逻辑。
    - map : 所有组件的vm对象都会挂载到map对象上，对象的键名是组件的`_uiid`。

    ### 方法

    #### findVM(ref)

    ##### 参数

    |参数|可选|描述|类型|
    |-|-|-|-|
    |ref|NO|通过组件的`ref`名称来找到组件的vm对象|`string`|

    ##### 返回值

    匹配组件的vm对象。

    #### getGroup(groupName)

    获取一组表单的数值，详见：[表单](/guide/form.html)中的表单组章节。

    ##### 参数

    |参数|可选|描述|类型|
    |-|-|-|-|
    |groupName|NO|需要获取数据表单组的名称|`string`|

    ##### 返回值

    查找到的表单数据对象，键名是表单的KEY，键值是表单的值

    #### getGroupJson(groupName)

    获取一组表单的数值(JSON)，详见：[表单](/guide/form.html)中的表单组章节。

    ##### 参数

    |参数|可选|描述|类型|
    |-|-|-|-|
    |groupName|NO|需要获取数据表单组的名称|`string`|

    ##### 返回值

    查找到的表单数据对象的JSON字符串

    #### setGroup(groupName, dataObject)

    设置一组表单的数值(采用JSON)，详见：[表单](/guide/form.html)中的表单组章节。

    ##### 参数

    |参数|可选|描述|类型|
    |-|-|-|-|
    |groupName|NO|需要设置数据表单组的名称|`string`|
    |dataObject|NO|一组键值对，键名为表单的KEY，键值是需要设置的表单值。可以只设置部分KEY。如果显示的设置键值为`undefined`则会清空对应的表单。|`object`|

    ##### 返回值

    Morning对象

    #### setGroupJson(groupName, dataJson)

    设置一组表单的数值(采用JSON)，详见：[表单](/guide/form.html)中的表单组章节。

    ##### 参数

    |参数|可选|描述|类型|
    |-|-|-|-|
    |groupName|NO|需要设置数据表单组的名称|`string`|
    |dataJson|NO|一组键值对的JSON字符串，键名为表单的KEY，键值是需要设置的表单值。可以只设置部分KEY。如果显示的设置键值为`undefined`则会清空对应的表单。|`object`|

    ##### 返回值

    Morning对象。

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'morning'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
