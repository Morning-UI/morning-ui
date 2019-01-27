<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 面包屑 `<ui-breadcrumbs>`
    
    <doc-component-status page="breadcrumbs"></doc-component-status>
    
    [[[开始]]]

    定义一个模面包屑导航。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-breadcrumbs :list="list"></ui-breadcrumbs>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    }
    :::
    
    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    :::vue
    @name:尺寸
    ---
    #renderer
    >name
    size-repeat
    >tpl
    <ui-breadcrumbs
        :list="[
            {'level1' : '第一级'},
            {'level2' : '第二级'},
            {'level3' : '第三级'}
        ]" 
        size="{$sizeKey}" 
        root-name="{$&sizeName}"
    ></ui-breadcrumbs>
    :::

    [[[配置]]]

    :::vue
    @name:root-name
    ---
    #config
    >conf-desc
    根层级名称。
    >conf-accept
    名称<br>`false` : 不显示
    >conf-type
    String<br>Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    `root-name`不在层级关系中，仅仅作为一个提示存在。
    >tpl
    <ui-breadcrumbs :list="list" root-name="首页"></ui-breadcrumbs>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    }
    :::

    :::vue
    @name:choose-root
    ---
    #config
    >conf-desc
    可以选择跟层级，选择跟层级将会清空层级列表。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    跟层级可被选中，选中时所有层级会被清空。
    >tpl
    <ui-breadcrumbs :list="list" root-name="首页" choose-root></ui-breadcrumbs>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    }
    :::

    :::vue
    @name:list
    ---
    #config
    >conf-desc
    默认面包屑层级。
    >conf-accept
    一个数组，数组中每一个对象代表一个层级，对象的键名是层级的值，对象的键值是层级的名称。对象的键名必须唯一。
    >conf-type
    Array
    >conf-default
    `[]`
    ---
    #demo
    >desc
    跟层级可被选中，选中时所有层级会被清空。
    >tpl
    <ui-breadcrumbs :list="list"></ui-breadcrumbs>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'},
                {'level4' : '第四级'},
                {'level5' : '第五级'}
            ]
        }
    }
    :::

    :::vue
    @name:max-history
    ---
    #config
    >conf-desc
    面包屑记录历史步骤最大数，每次切换计一次步骤。
    >conf-accept
    步骤数
    >conf-type
    Boolean
    >conf-default
    `20`
    ---
    #demo
    >desc
    设置最多可回退步骤数，注意由于操作后立即会记录历史，所以：
    <br><br>
    - 如果限制最多回退1步，`max-history`设为2
    - 如果限制不准回退，`max-history`设为1
    >tpl
    <div>
        <!-- 设置最多回退1步 -->
        <ui-breadcrumbs ref="demo6" :list="list" :max-history="2"></ui-breadcrumbs>
        <ui-link js="morning.findVM('demo6').backLast();">回退一步</ui-link>
    </div>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    }
    :::

    :::vue
    @name:separator
    ---
    #config
    >conf-desc
    指定分隔的文字及图标。如果是图标需要使用`<i>`标签，支持所有[图标](/component/iconfont.html)。
    >conf-accept
    文字<br>`<i>`图标
    >conf-type
    String
    >conf-default
    `'/'`
    ---
    #demo
    >desc
    使用`>`来分隔。
    >tpl
    <ui-breadcrumbs :list="list" separator=">"></ui-breadcrumbs>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    }
    ---
    #demo
    >desc
    使用图标来分隔。
    >tpl
    <ui-breadcrumbs :list="list" separator="<i class='mo-icon-arrow-right'></i>"></ui-breadcrumbs>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    }
    :::

    [[[方法]]]

    :::vue
    @name:toLevel(index)
    ---
    #method
    >method-desc
    锁定按钮，锁定后按钮不会触发`emit`事件。
    <br><br>
    注意由于第1级无法切换，所以：
    <br><br>
    - 切换到第2级，使用`toLevel(1)`
    - 切换到第n级，使用`toLevel(n - 1)`
    >method-args
    |index|NO|若是数字则切换到指定深度的层级，若是字符串切换到指定键名的层级|数值(指定的层级)<br>字符串(指定键名的层级)|`Number`<br>`String`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-breadcrumbs ref="demo7" :list="list"></ui-breadcrumbs>
        <ui-link js="morning.findVM('demo7').toLevel(1);">切换到第2级</ui-link>
        <ui-link js="morning.findVM('demo7').toLevel('level3');">切换到level3</ui-link>
        <ui-link js="morning.findVM('demo7').backLast();">恢复</ui-link>
    </div>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'},
                {'level4' : '第四级'},
                {'level5' : '第五级'}
            ]
        }
    }
    :::

    :::vue
    @name:getLevel()
    ---
    #method
    >method-desc
    获取当前层级信息，包括：
    <br><br>
    - keyList : 层级的key数组
    - nameList : 层级的name数组
    - currentKey : 当前选中的key
    - currentName : 当前选中的name
    - length : 层级长度
    >method-return
    返回一个层级信息对象。
    ---
    #demo
    >tpl
    <div>
        <ui-breadcrumbs ref="demo8" :list="list"></ui-breadcrumbs>
        <ui-link js="alert(JSON.stringify(morning.findVM('demo8').getLevel()));">获取层级信息</ui-link>
    </div>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    }
    :::

    :::vue
    @name:getHistory()
    ---
    #method
    >method-desc
    获取当前面包屑历史。
    >method-return
    返回一个数组，数组中每一项都是一个完整的层级信息，可以通过`setLevel()`方法设置。
    ---
    #demo
    >tpl
    <div>
        <ui-breadcrumbs ref="demo9" :list="list"></ui-breadcrumbs>
        <ui-link js="alert(JSON.stringify(morning.findVM('demo9').getHistory()));">获取历史步骤</ui-link>
    </div>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    }
    :::

    :::vue
    @name:backLast([num])
    ---
    #method
    >method-desc
    回退步骤。
    >method-args
    |num|YES|指定要返回的步数，从最后开始，从1开始|回退的步骤数|`Number`|`1`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-breadcrumbs ref="demo10" :list="list"></ui-breadcrumbs>
        <ui-link js="morning.findVM('demo10').backLast(1);">回退一步</ui-link>
        <ui-link js="morning.findVM('demo10').backLast(2);">回退两步</ui-link>
    </div>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'},
                {'level4' : '第四级'},
                {'level5' : '第五级'}
            ]
        }
    }
    :::

    :::vue
    @name:addLevel(level)
    ---
    #method
    >method-desc
    添加一个层级，注意层级的键名不能重复。
    >method-args
    |level|NO|添加的层级|对象，键名为层级的值，键值为层级的名称|`Object`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-breadcrumbs ref="demo11" :list="list"></ui-breadcrumbs>
        <ui-link js="morning.findVM('demo11').addLevel({'level4':'新层级'});">新增一个层级</ui-link>
    </div>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    }
    :::

    :::vue
    @name:setLevel(levelList)
    ---
    #method
    >method-desc
    重设整个层级关系。
    >method-args
    |levelList|NO|添加的层级|一个数组，数组中每一个对象代表一个层级，对象的键名是层级的值，对象的键值是层级的名称|`Array`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-breadcrumbs ref="demo12" :list="list"></ui-breadcrumbs>
        <ui-link js="morning.findVM('demo12').setLevel([{'level6':'第六级'},{'level7':'第七级'}]);">重设整个层级</ui-link>
        <ui-link js="morning.findVM('demo12').backLast();">恢复</ui-link>
    </div>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    }
    :::

    [[[事件]]]

    :::vue
    @name:emit
    ---
    #event
    >event-desc
    当选择层级改变时触发。
    ---
    #demo
    >tpl
    <ui-breadcrumbs ref="demo13" :list="list" @emit="echo"></ui-breadcrumbs>
    >script
    {
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        },
        methods : {
            echo : function (name) {
                console.log('demo13.console1', `emit event!`);
            }
        }
    }
    :::

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
        <ui-breadcrumbs
            ref="demoEventLifecycle"
            v-show="show"
            :list="[
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-breadcrumbs>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '面包屑',
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

    <iframe src="/report/coverage/lib/components/breadcrumbs/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'breadcrumbs'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
