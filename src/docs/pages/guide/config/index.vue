<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 配置

    配置可以为组件提供不同的JS逻辑或样式。只有交互和表单组件支持配置，因为布局组件不支持JS逻辑。

    配置与声明的区别：

    - 声明是一种通用的组件属性，可以区分样式及JS逻辑，有一套全局的规范，大部分组件都支持。
    - 不通的组件可以有不同的配置，常用于区分JS逻辑，也可以区分样式，全局仅在命名上有规范，只有交互和表单组件支持。

    ### 初始化配置

    在使用组件时，可以在组件标签`<ui-*>`的`attr`属性中传入初始化配置：

    :::democode/html
    <!-- ui-btn设置link配置 -->
    <!-- 配置名称是: link -->
    <!-- 配置数值是: https://www.google.com -->
    <ui-btn new-tab link="https://www.google.com">Google</ui-btn>
    :::

    键名为配置的名称，键值是配置的数值。

    由于初始化配置基于`Vue`的`props`，你也可以使用`v-bind`来传入配置，或使用JavaScript表达式。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            link : 'https://www.google.com'
        }
    });
    ---
    <div>
        <!-- 通过v-bind为ui-btn设置link -->
        <ui-btn new-tab :link="link">Google</ui-btn>

        <!-- 通过JavaScript表达式为ui-btn设置link -->
        <ui-btn new-tab :link="'https://www.google.com'">Google</ui-btn>
    </div>
    :::

    更多用法见:[Vue/模板语法](https://cn.vuejs.org/v2/guide/syntax.html)。

    ### camelCase 和 kebab-case

    HTML特性是不区分大小写的。所以，当配置的名称是camelCased(驼峰式)命名的prop，在HTML中需要转换为相对应的kebab-case(短横线隔开式)命名：

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            link : 'https://www.google.com'
        }
    });
    ---
    <div>
        <!-- new-tab在HTML中是kebab-case命名 -->
        <ui-btn ref="demo3" new-tab :link="link">Google</ui-btn>
    </div>
    :::

    ### 单次初始化

    使用`v-bind`初始化配置时，要注意的是虽然采用了`v-bind`语法，但是这里传入的`link`配置仅用于初始化，这意味着：

    - 当组件的配置`link`发生变更时，并不会同步到父VM的`link`中
    - 当父VM的`link`发生变更时，也不会同步到组件的配置`link`中

    :::vue/html
    var demo2 = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            link : 'https://www.google.com'
        }
    });

    // 通过组件的`setConf`方法改变配置，父VM获取不到变化的配置
    morning.findVM('demo2').setConf('link', 'https://www.baidu.com');
    console.log('demo2.console1', demo2.link); // `https://www.google.com`

    // 父VM`link`的改变也不会同步到组件的配置中
    demo2.link = 'https://bing.com';
    console.log('demo2.console2', morning.findVM('demo2').getConf('link')); // `https://www.baidu.com`
    ---
    <div>
        <!-- 通过v-bind为ui-btn设置link -->
        <ui-btn ref="demo2" new-tab :link="link">Google</ui-btn>
    </div>
    :::

    ### 配置生命周期

    下图是整个组件配置的生命周期，可以帮助你更好的理解上面的概念：

    <img src="https://h0.hucdn.com/open/201736/5c4e0e68a9f4c192_1370x851.png" width="600" alt="">

    `props`在组件`mounted`时会被初始化成`vm.conf`，所以之后无论是`props`或`vm.conf`更改互相之间都不会同步。应该使用`setConf()`/`getConf()`方法来设置和获取配置。

    ### 获取配置

    获取组件的配置应该使用组件上的`getConf()`方法，这是因为组件配置在初始化之后可能会被组件内部的逻辑修改，也可能被`setConf()`方法重新设置。

    #### getConf([name])
    
    ##### 参数

    |参数|可选|描述|类型|
    |-|-|-|-|
    |name|YES|获取的配置key，若不传则返回包含所有配置的对象|`undefined` `string`|

    ##### 返回值

    单项配置数值，或包含所有配置的对象，键名是配置的名称，键值是配置的数值。返回的配置内容经过拷贝，所以修改返回值并不会影响组件当前的配置。

    ### 设置配置

    当组件初始化完成后，组件的`Props`变更将不再影响组件配置。这时可以通过组件的`setConf()`方法来再次设置组件的配置。

    #### setConf(nameOrObj, [value])
    
    ##### 参数

    |参数|可选|描述|类型|
    |-|-|-|-|
    |nameOrObj|NO|若此参数是一个对象，会遍历整个对象的key/value，并以key为配置的名称进行设置。若此参数是字符串，则以此参数作为配置的名称，`value`参数作为配置的数值进行设置。|`object` `string`|
    |value|YES|当`nameOrObj`为字符串时，此参数作为配置的数值进行设置。|Any|

    ##### 返回值

    不管成功与否都将返回组件的vm对象。

    ##### 示例

    ```js
    // 设置单个配置
    vm.setConf('link', 'https://baidu.com');

    // 设置多个配置
    vm.setConf({
        link : 'https://baidu.com',
        newTab : true
    });
    ```

    ### 配置属性

    任何一项配置都包含五个关键属性：

    - key : 配置的名称
    - desc : 配置描述
    - accept : 接受值(可以是一个范围，也可以是几个值)
    - type : 值类型
    - default : 默认值

    组件的逻辑及文档必须响应这些关键属性。

    ### 独立性

    不同的配置之间应该是相互独立的，尽可能是无依赖的。

    ### 配置全局命名规范

    配置在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。

    在为组件添加配置前应先检查下面的列表，是否有含义相同的配置，若有请使用，若没有请将新的配置添加到下面列表并注明它的含义。

    - `link` : 链接
    - `js` : JS代码
    - `locked` : 锁定
    - `new-tab` : 新标签
    - `auto-close` : 点击组件外区域关闭
    - `tab` : 标签
    - `prepend` : 在之后插入
    - `append` : 在之前插入
    - `width` : 宽度
    - `height` : 高度
    - `show-type` : 展示方式
    - `time` : 时间
    - `note` : 提示
    - `root-name` : 跟节点名称
    - `choose-root` : 选择跟节点
    - `list` : 内容列表
    - `max-history` : 最大历史纪录
    - `target` : 目标
    - `placement` : 位置
    - `offset` : 偏移量
    - `trigger` : 触发类型
    - `form-name` : 表单名
    - `form-key` : 表单Key
    - `group` : 表单组
    - `default-value` : 表单默认值
    - `hide-name` : 隐藏表单名
    - `hide-value` : 表单数值不可见
    - `rows` : 行数
    - `auto-hide-name` : 自动隐藏表单名
    - `max-show` : 最大显示项目
    - `can-search` : 可搜索
    - `multi-select` : 多选
    - `max` : 最大可输入项目
    - `clean-btn` : 清空按钮
    - `inline-img-size` : 内联图片尺寸
    - `item-tip` : 项目提示
    - `item-tip-direct` : 项目提示方向
    - `accept-html` : 可使用HTML
    - `can-move` : 可移动
    - `total` : 总数
    - `page-size` : 每页数量
    - `page` : 页数
    - `jump-page` : 跳转页面

    </script>
    </doc-guide>
</template>

<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'config'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
