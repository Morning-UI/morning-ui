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

    :::vue
    @name:使用
    ---
    #demo
    >tpl
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

    :::vue
    @name:描述
    ---
    #demo
    >desc
    你可以为每个步骤添加描述。
    >tpl
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

    :::vue
    @name:完成的步骤
    ---
    #demo
    >desc
    通过`done-step`来配置完成的步骤(-1表示没有完成步骤，0表示完成第一步，以此类推)。
    >tpl
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

    :::vue
    @name:高亮当前步骤
    ---
    #demo
    >desc
    通过开启`mark-current`配置来高亮当前步骤。
    >tpl
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

    :::vue
    @name:将当前步骤标记为进行中
    ---
    #demo
    >desc
    在开启`mark-current`后，通过将`current-type`设为`progress`可将当前步骤标记为进行中。
    >tpl
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

    :::vue
    @name:标记完成的步骤
    ---
    #demo
    >desc
    开启`show-icon`配置可以标记完成的步骤。
    >tpl
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

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    [[[配置]]]

    :::vue
    @name:list
    ---
    #config
    >conf-desc
    步骤的列表，这是一个数组，数组中每一项都是一个步骤。项目可以是对象或字符串。<br><br>项目是字符串时，字符串是步骤的标题（这是一种缩写）。<br><br>项目是对象时，这个对象用来描述这个步骤，包含以下字段：<br>`title` : 步骤标题(必须)<br>`desc` : 步骤描述<br>`icon` : 步骤的icon，这是一个HTML片段<br><br>这个列表数组是有序的。
    >conf-accept
    步骤列表数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >desc
    项目为字符串的简写。
    >tpl
    <div style="width:500px">
        <ui-steps
            :list="[
                '第一步',
                '第二步',
                '第三步'
            ]"
        ></ui-steps>
    </div>
    ---
    #demo
    >desc
    包含步骤描述的写法。
    >tpl
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
    ---
    #demo
    >desc
    定制步骤icon的写法。
    >tpl
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

    :::vue
    @name:done-step
    ---
    #config
    >conf-desc
    完成的步骤数，`-1`表示未完成，`0`表示完成第一步，`1`表示完成第二步，以此类推。
    >conf-accept
    步骤数
    >conf-type
    Number
    >conf-default
    `-1`
    ---
    #demo
    >tpl
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

    :::vue
    @name:mark-current
    ---
    #config
    >conf-desc
    是否标记当前的步骤，比较类型通过`current-type`设置。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
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

    :::vue
    @name:current-type
    ---
    #config
    >conf-desc
    标记当前步骤的样式。
    >conf-accept
    `'highlight'` : 高亮<br>`'progress'` : 进行中<br>`'hollow'` : 中空
    >conf-type
    String
    >conf-default
    `'highlight'`
    ---
    #demo
    >tpl
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
    ---
    #demo
    >desc
    中空当前步骤。
    >tpl
    <div style="width:500px">
        <ui-steps
            mark-current
            current-type="hollow"
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

    :::vue
    @name:done-type
    ---
    #config
    >conf-desc
    标记完成步骤的样式。
    >conf-accept
    `'highlight'` : 高亮<br>`'hollow'` : 中空
    >conf-type
    String
    >conf-default
    `'hollow'`
    ---
    #demo
    >tpl
    <div style="width:500px">
        <ui-steps
            done-type="highlight"
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

    :::vue
    @name:show-icon
    ---
    #config
    >conf-desc
    完成时是否显示特定icon。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >tpl
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

    :::vue
    @name:align
    ---
    #config
    >conf-desc
    步骤的标题和描述对齐方式。
    >conf-accept
    `'center'` : 居中<br>`'left'` : 左对齐<br>`'right'` : 右对齐
    >conf-type
    String
    >conf-default
    `'center'`
    ---
    #demo
    >desc
    左对齐。
    >tpl
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
    ---
    #demo
    >desc
    右对齐。
    >tpl
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

    :::vue
    @name:failed
    ---
    #config
    >conf-desc
    失败的步骤，这是一个数组，数组中的每一项都是一个数字，表示失败步骤的索引(从0开始)。
    >conf-accept
    数组
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >tpl
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
    ---
    #demo
    >desc
    配合`show-icon`使用。
    >tpl
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

    :::vue
    @name:生命周期事件
    ---
    #event
    >event-desc
    组件的生命周期事件，详见:[基础/事件/生命周期事件](/guide/event.html#生命周期事件)。
    ---
    #demo
    >tpl
    <div>
        <ui-steps
            ref="demoEventLifecycle"
            v-show="show"
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
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-steps>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
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
    }
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
