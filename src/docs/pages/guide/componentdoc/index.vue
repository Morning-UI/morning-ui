<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 查阅文档

    Morning UI的每个组件都有文档，可以帮助你更好的使用组件。下面的内容为你介绍了组件文档的内容结构，可以帮助你更好的阅读文档。

    Morning UI中包含三类组件：

    - 样式组件：只有样式的组件，不包含JS逻辑
    - 交互组件：包含样式及JS逻辑的组件
    - 表单组件：在交互组件的基础上，可以输入/输出值的组件

    不同类型的组件文档内容也不一样：

    - 样式组件包含：标题、组件状态栏、开始、形态、源码
    - 交互组件包含：标题、组件状态栏、开始、形态、配置、方法、事件、源码
    - 表单组件包含：标题、组件状态栏、开始、形态、配置、方法、事件、表单值、源码

    下面拿`多项输入框`组件举例详细介绍这些文档内容，文档地址：[组件/多项输入框](/component/multiinput.html)

    ## 标题

    组件的名称及默认DOM标签。

    <img src="https://h0.hucdn.com/open/201744/e2af23248b761b45_1043x123.png" width="540" alt="">

    ## 组件状态栏

    组件的单元/集成测试情况，测试覆盖率。组件最后更新日期、作者、`commid id`以及所有贡献者。

    其中单元/集成测试标签中，前面的数字表示通过的测试数量，后面的数字表示测试总数。

    <img src="https://h0.hucdn.com/open/201744/815bd2bbc0cf5c7c_809x147.png" width="404" alt="">

    ## 开始

    简单介绍组件，并从组件最简单的用法开始，一一列举组件常见的用法。

    <img src="https://h0.hucdn.com/open/201744/06b2eab34c600af0_1625x1160.png" width="812" alt="">

    ## 形态

    组件的形态支持情况，及所有形态的演示。

    <img src="https://h0.hucdn.com/open/201744/75da76aa5299a1ac_1619x1371.png" width="809" alt="">

    ## 配置

    组件的配置详情，及配置的演示。

    配置详情：

    <img src="https://h0.hucdn.com/open/201744/7ffbd85fd965bba4_1623x1116.png" width="811" alt="">

    配置的演示：

    <img src="https://h0.hucdn.com/open/201744/8ff1598d2430d2ed_1624x438.png" width="812" alt="">

    ## 方法

    组件所有方法的演示及文档。

    <img src="https://h0.hucdn.com/open/201744/78388839eea94807_1619x1266.png" width="808" alt="">

    ## 事件

    组件所有的事件演示及文档。

    <img src="https://h0.hucdn.com/open/201744/f4d532c2c45a4716_1616x1237.png" width="808" alt="">

    ## 表单值

    组件的值类型、格式、默认值及输入/输出演示。

    <img src="https://h0.hucdn.com/open/201744/27a57ff0bb3101f0_1628x877.png" width="814" alt="">

    ## 源码

    组件的`.vue`文件，及测试覆盖情况。

    其中红色的部分表示测试未覆盖。

    <img src="https://h0.hucdn.com/open/201744/67ead81ed079ad1c_1622x1174.png" width="811" alt="">

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'componentdoc'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
