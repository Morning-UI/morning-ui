<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 时间轴 `<ui-timeline>`
    
    <doc-component-status page="timeline"></doc-component-status>
    
    [[[开始]]]

    定义一个时间轴组件，这是一个块级元素。
    
    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-timeline :list="list"></ui-timeline>
    >script
    {
        data : {
            list : [
                '发布Alpha版本',
                '发布Beta版本',
                '发布1.0版本',
                '发布2.0版本'
            ]
        }
    }
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    [[[配置]]]

    :::vue
    @name:list
    ---
    #config
    >conf-desc
    里程碑的列表，这是一个数组，数组中每一项都是一个里程碑。项目可以是对象或字符串。<br><br>项目是字符串时，字符串是里程碑的标题（这是一种缩写）。<br><br>项目是对象时，这个对象用来描述这个步骤，包含以下字段：<br>`title` : 标题(必须)<br>`desc` : 描述<br>`icon` : icon，这是一个HTML片段，未设置时显示默认icon<br>`pointColor` : 用于设置默认icon的颜色(仅在未设置`icon`时有效)<br>`pedding` : 表示这个节点还未完成，数值为`true`或`false`(默认)<br><br>这个列表数组是有序的。
    >conf-accept
    里程碑列表数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >desc
    通过字符串简写里程碑列表。
    >tpl
    <ui-timeline :list="list"></ui-timeline>
    >script
    {
        data : {
            list : [
                '发布Alpha版本',
                '发布Beta版本',
                '发布1.0版本',
                '发布2.0版本'
            ]
        }
    }
    ---
    #demo
    >desc
    完整写法。
    >tpl
    >tpl
    <ui-timeline :list="list"></ui-timeline>
    >script
    {
        data : {
            list : [
                {
                    title : '发布Alpha版本',
                    desc : '这是最早期版本'
                },
                {
                    title : '发布Beta版本'
                },
                {
                    title : '发布1.0版本',
                    desc : '第一个可以向用户开放的版本',
                    pedding : true
                },
                {
                    title : '发布2.0版本',
                    pedding : true
                }
            ]
        }
    }
    ---
    #demo
    >desc
    使用`point-color`。
    >tpl
    >tpl
    <ui-timeline :list="list"></ui-timeline>
    >script
    {
        data : {
            list : [
                {
                    title : '发布Alpha版本',
                    desc : '这是最早期版本',
                    pointColor : 'warning'
                },
                {
                    title : '发布Beta版本',
                    pointColor : 'warning'
                },
                {
                    title : '发布1.0版本',
                    desc : '第一个可以向用户开放的版本',
                    pointColor : 'primary'
                },
                {
                    title : '发布2.0版本',
                    pointColor : 'success'
                }
            ]
        }
    }
    ---
    #demo
    >desc
    使用`icon`。
    >tpl
    >tpl
    <ui-timeline :list="list"></ui-timeline>
    >script
    {
        data : {
            list : [
                {
                    title : '发布Alpha版本',
                    desc : '这是最早期版本',
                    pointColor : 'danger',
                    icon : '<i class="mo-icon mo-icon-warn-f"></i>'
                },
                {
                    title : '发布Beta版本',
                    pointColor : 'warning',
                    icon : '<i class="mo-icon mo-icon-warn-f"></i>'
                },
                {
                    title : '发布1.0版本',
                    desc : '第一个可以向用户开放的版本'
                },
                {
                    title : '发布2.0版本'
                }
            ]
        }
    }
    ---
    #demo
    >desc
    通过`pending`标记未完成的里程碑。
    >tpl
    >tpl
    <ui-timeline :list="list"></ui-timeline>
    >script
    {
        data : {
            list : [
                {
                    title : '发布Alpha版本',
                    desc : '这是最早期版本'
                },
                {
                    title : '发布Beta版本'
                },
                {
                    title : '发布1.0版本',
                    desc : '第一个可以向用户开放的版本',
                    pending : true
                },
                {
                    title : '发布2.0版本',
                    pending : true
                }
            ]
        }
    }
    :::

    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @layout:lifecycle-event
    ---
    timeline
    时间轴
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/timeline/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'timeline'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
