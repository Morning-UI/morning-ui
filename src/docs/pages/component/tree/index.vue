<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 树状控件 `<ui-tree>`
    
    <doc-component-status page="tree"></doc-component-status>

    [[[开始]]]

    定义一个树状控件，这是一个块元素。

    :::vue
    @name:使用
    ---
    #demo
    >desc
    通过`tree`配置来设置树状控件，每一项目可以简写为：`key:name`的形式，也可以完整的写为：`key:[object]`。
    <br><br>
    其中`object`包含两个属性：
    - `name` : 当前节点的名称
    - `child` : 子节点对象
    >tpl
    <div style="width: 560px;">
        <ui-tree :tree="tree"></ui-tree>
    </div>
    >script
    {
        data : {
            tree : {
                0 : {
                    name : 'ROOT',
                    childs : {
                        '0-1' : '0-1',
                        '0-2' : '0-2',
                        '0-3' : {
                            name : '0-3',
                            childs : {
                                '0-3-1' : '0-3-1',
                                '0-3-2' : '0-3-2'
                            }
                        }
                    }
                }
            }
        }
    }
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|`m` `s` `xs` `xxs`|`m`|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/tree/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'tree'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
