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

    ````html
    <!-- ui-btn设置link配置 -->
    <!-- 配置名称是: link -->
    <!-- 配置数值是: http://www.google.com -->
    <ui-btn new-tab link="http://www.google.com">Google</ui-btn>
    ````

    键名为配置的名称，键值是配置的数值。

    由于初始化配置基于`Vue`的`props`，你也可以使用`v-bind`来传入配置，或使用JavaScript表达式。

    ````mixin
    @use:html.demo1,js.demo1
    ````

    ````html
    @var:demo1
    <div>
        <!-- 通过v-bind为ui-btn设置link -->
        <ui-btn new-tab :link="link">Google</ui-btn>

        <!-- 通过JavaScript表达式为ui-btn设置link -->
        <ui-btn new-tab :link="'http://www.google.com'">Google</ui-btn>
    </div>
    ````

    ````js
    @var:demo1
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            link : 'http://www.google.com'
        }
    });
    ````

    更多用法见:[Vue/模板语法](https://cn.vuejs.org/v2/guide/syntax.html)。

    ### camelCase 和 kebab-case

    HTML特性是不区分大小写的。所以，当配置的名称是camelCased(驼峰式)命名的prop，在HTML中需要转换为相对应的kebab-case(短横线隔开式)命名：

    ````mixin
    @use:html.demo3,js.demo3
    ````

    ````html
    @var:demo3
    <div>
        <!-- new-tab在HTML中是kebab-case命名 -->
        <ui-btn ref="demo3" new-tab :link="link">Google</ui-btn>
    </div>
    ````

    ````js
    @var:demo3
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            link : 'http://www.google.com'
        }
    });

    // 在JS中通过newTab来获取(camelCased命名)
    console.log('demo3.console1', morning.findVM('demo3').conf.newTab); // `true`
    ````

    ### 单次初始化

    使用`v-bind`初始化配置时，要注意的是虽然采用了`v-bind`语法，但是这里传入的`link`配置仅用于初始化，这意味着：

    - 当组件的配置`link`发生变更时，并不会同步到父VM的`link`中
    - 当父VM的`link`发生变更时，也不会同步到组件的配置`link`中


    ````mixin
    @use:html.demo2,js.demo2
    ````

    ````html
    @var:demo2
    <div>
        <!-- 通过v-bind为ui-btn设置link -->
        <ui-btn ref="demo2" new-tab :link="link">Google</ui-btn>
    </div>
    ````

    ````js
    @var:demo2
    var demo2 = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            link : 'http://www.google.com'
        }
    });

    // 通过组件的`setConf`方法改变配置，父VM获取不到变化的配置
    morning.findVM('demo2').setConf('link', 'http://www.baidu.com');
    console.log('demo2.console1', demo2.link); // `http://www.google.com`

    // 父VM`link`的改变也不会同步到组件的配置中
    demo2.link = 'http://bing.com';
    console.log('demo2.console2', morning.findVM('demo2').getConf('link')); // `http://www.baidu.com`
    ````

    ### 配置生命周期

    下图是整个组件配置的生命周期，可以帮助你更好的理解上面的概念：

    <img src="http://h0.hucdn.com/open/201736/5c4e0e68a9f4c192_1370x851.png" width="600" alt="">

    `props`在组件`mounted`时会被初始化成`vm.conf`，所以之后无论是`props`或`vm.conf`更改互相之间都不会同步。应该使用`setConf()`/`getConf()`方法来设置和获取配置。

    ### 获取配置

    获取组件的配置应该使用组件上的`getConf()`方法，这是因为组件配置在初始化之后可能会被组件内部的逻辑修改，也可能被`setConf()`方法重新设置。

    #### .getConf([name])
    
    ##### 参数

    |参数|可选|描述|类型|
    |-|-|-|
    |name|YES|获取的配置key，若不传则返回包含所有配置的对象|`undefined` `string`|

    ##### 返回值

    单项配置数值，或包含所有配置的对象，键名是配置的名称，键值是配置的数值。返回的配置内容经过拷贝，所以修改返回值并不会影响组件当前的配置。

    ### 设置配置

    当组件初始化完成后，组件的`Props`变更将不再影响组件配置。这时可以通过组件的`setConf()`方法来再次设置组件的配置。

    #### .setConf(nameOrObj, [value])
    
    ##### 参数

    |参数|可选|描述|类型|
    |-|-|-|
    |nameOrObj|NO|若此参数是一个对象，会遍历整个对象的key/value，并以key为配置的名称进行设置。若此参数是字符串，则以此参数作为配置的名称，`value`参数作为配置的数值进行设置。|`object` `string`|
    |value|YES|当`nameOrObj`为字符串时，此参数作为配置的数值进行设置。|Any|

    ##### 返回值

    不管成功与否都将返回组件的vm对象。

    ##### 示例

    ```js
    // 设置单个配置
    vm.setConf('link', 'http://baidu.com');

    // 设置多个配置
    vm.setConf({
        link : 'http://baidu.com',
        newTab : true
    });
    ```

    ### 配置全局命名规范

    配置在全局有一套命名规范，这样是为了防止不同的组件对于某个名词理解不同，导致同一名词在不同组件的不同行为。

    在为组件添加配置前应先检查下面的列表，是否有含义相同的配置，若有请使用，若没有请将新的配置添加到下面列表并注明它的含义。

    - `c-[*]` : 栅格用，标记所占用的列

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
