<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 步骤条 `<ui-steps>`
    
    <doc-component-status page="steps"></doc-component-status>
    
    [[[开始]]]

    定义一个步骤条，这是一个块元素。

    #### 使用

    :::democode/html
    <div style="width:500px">
        <ui-steps
            :list="[
                '第一步',
                '第二步',
                '第三步'
            ]"
        ></ui-steps>
    </div>
    :::

    #### 描述

    你可以为每个步骤添加描述：

    :::democode/html
    <div style="width:500px">
        <ui-steps
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    #### 完成的步骤

    通过`done-step`来配置完成的步骤(-1表示没有完成步骤，0表示完成第一步，以此类推)：

    :::democode/html
    <div style="width:500px">
        <ui-steps
            :done-step="0"
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    #### 高亮当前步骤

    通过开启`mark-current`配置来高亮当前步骤：

    :::democode/html
    <div style="width:500px">
        <ui-steps
            mark-current
            :done-step="0"
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    #### 将当前步骤标记为进行中

    在开启`mark-current`后，通过将`current-type`设为`progress`可将当前步骤标记为进行中：

    :::democode/html
    <div style="width:500px">
        <ui-steps
            mark-current
            current-type="progress"
            :done-step="0"
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    #### 标记完成的步骤

    开启`show-icon`配置可以标记完成的步骤：

    :::democode/html
    <div style="width:500px">
        <ui-steps
            show-icon
            :done-step="0"
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::
    
    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |[list](#list)|步骤的列表，这是一个数组，数组中每一项都是一个步骤。项目可以是对象或字符串。<br><br>项目是字符串时，字符串是步骤的标题（这是一种缩写）。<br><br>项目是对象时，这个对象用来描述这个步骤，包含以下字段：<br>`title` : 步骤标题(必须)<br>`desc` : 步骤描述<br>`icon` : 步骤的icon，这是一个HTML片段<br><br>这个列表数组是有序的。|步骤列表数组|Array|`[]`|
    |[done-step](#done-step)|完成的步骤数，`-1`表示未完成，`0`表示完成第一步，`1`表示完成第二步，以此类推|步骤数|Number|`-1`|
    |[mark-current](#mark-current)|是否标记当前的步骤，比较类型通过`current-type`设置|`true`<br>`false`|Boolean|`false`|
    |[current-type](#current-type)|标记当前步骤的方式|`'highlight'` : 高亮<br>`'progress'` : 进行中|String|`'highlight'`|
    |[align](#align)|步骤的标题和描述对齐方式|`'center'` : 居中<br>`'left'` : 左对齐<br>`'right'` : 右对齐|String|`'center'`|
    |[show-icon](#show-icon)|完成时是否显示特定icon|`true`<br>`false`|Boolean|`false`|
    |[failed](#failed)|失败的步骤，这是一个数组，数组中的每一项都是一个数字，表示失败步骤的索引(从0开始)|数组|Array|`[]`|

    #### list

    项目为字符串的简写：

    :::democode/html
    <div style="width:500px">
        <ui-steps
            :list="[
                '第一步',
                '第二步',
                '第三步'
            ]"
        ></ui-steps>
    </div>
    :::

    包含步骤描述的写法：

    :::democode/html
    <div style="width:500px">
        <ui-steps
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    定制步骤icon的写法：

    :::democode/html
    <div style="width:500px">
        <ui-steps
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息',
                    icon : '<i class=\'mo-icon mo-icon-list\'></i>'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号',
                    icon : '<i class=\'mo-icon mo-icon-copy\'></i>'
                },
                {
                    title : '第三步',
                    desc : '开通账号',
                    icon : '<i class=\'mo-icon mo-icon-correct-cf\'></i>'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    #### done-step
    
    :::democode/html
    <div style="width:500px">
        <ui-steps
            :done-step="0"
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    #### mark-current

    :::democode/html
    <div style="width:500px">
        <ui-steps
            mark-current
            :done-step="0"
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    #### current-type

    :::democode/html
    <div style="width:500px">
        <ui-steps
            mark-current
            current-type="progress"
            :done-step="0"
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    #### show-icon

    :::democode/html
    <div style="width:500px">
        <ui-steps
            show-icon
            :done-step="0"
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    #### align

    左对齐：

    :::democode/html
    <div style="width:500px">
        <ui-steps
            align="left"
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    右对齐：

    :::democode/html
    <div style="width:500px">
        <ui-steps
            align="right"
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    #### failed

    :::democode/html
    <div style="width:500px">
        <ui-steps
            :failed="[1]"
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    配合`show-icon`使用：

    :::democode/html
    <div style="width:500px">
        <ui-steps
            :done-step="1"
            :failed="[0]"
            show-icon
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        ></ui-steps>
    </div>
    :::

    [[[方法]]]

    <h1>暂无</h1>

    [[[事件]]]

    #### 生命周期事件

    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
               text : '步骤条',
               show : true
            };
        },
        methods : {
            echo : function (name) {
                console.log('demoEventLifecycle.console1', name + ' event!');
            }
        }
    });
    ---
    <div style="width:500px">
        <ui-steps
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
            :list="[
                {
                    title : '第一步',
                    desc : '填写基本信息'
                },
                {
                    title : '第二步',
                    desc : '绑定手机号'
                },
                {
                    title : '第三步',
                    desc : '开通账号'
                }
            ]"
        >{*text*}</ui-steps>

        <br><br>

        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/steps/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'steps'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
