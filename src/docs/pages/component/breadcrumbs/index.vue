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

    #### 使用

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <ui-breadcrumbs :list="list"></ui-breadcrumbs>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|不支持|-|
    |状态|不支持|-|

    #### 尺寸
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs :list="list" xxs root-name="xxs"></ui-breadcrumbs>
    </div>
    :::
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs :list="list" xs root-name="xs"></ui-breadcrumbs>
    </div>
    :::
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs :list="list" s root-name="s"></ui-breadcrumbs>
    </div>
    :::
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs :list="list" m root-name="m"></ui-breadcrumbs>
    </div>
    :::
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs :list="list" l root-name="l"></ui-breadcrumbs>
    </div>
    :::
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs :list="list" xl root-name="xl"></ui-breadcrumbs>
    </div>
    :::
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs :list="list" xxl root-name="xxl"></ui-breadcrumbs>
    </div>
    :::

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |root-name|根层级名称|名称<br>`false`|String<br>Boolean|`false`|
    |choose-root|可以选择跟层级，选择跟层级将会清空层级列表|`true`<br>`false`|Boolean|`false`|
    |list|默认面包屑层级|一个数组，数组中每一个对象代表一个层级，对象的键名是层级的值，对象的键值是层级的名称。对象的键名必须唯一。|Array|`[]`|
    |max-history|面包屑记录历史步骤最大数，每次切换计一次步骤|步骤数|Boolean|`20`|

    #### root-name

    `root-name`不在层级关系中，仅仅作为一个提示存在。
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <ui-breadcrumbs :list="list" root-name="首页"></ui-breadcrumbs>
    :::

    #### choose-root

    跟层级可被选中，选中时所有层级会被清空。
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <ui-breadcrumbs :list="list" root-name="首页" choose-root></ui-breadcrumbs>
    :::

    #### list
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'},
                {'level4' : '第四级'},
                {'level5' : '第五级'}
            ]
        }
    });
    ---
    <ui-breadcrumbs :list="list"></ui-breadcrumbs>
    :::

    #### max-history

    设置最多可回退步骤数，注意由于操作后立即会记录历史，所以：

    - 如果限制最多回退1步，`max-history`设为2
    - 如果限制不准回退，`max-history`设为1
    
    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <!-- 设置最多回退1步 -->
    <div>
        <ui-breadcrumbs ref="demo6" :list="list" :max-history="2"></ui-breadcrumbs>
        <ui-link js="morning.findVM('demo6').backLast();">回退一步</ui-link>
    </div>
    :::

    [[[方法]]]

    #### toLevel(index)

    锁定按钮，锁定后按钮不会触发`emit`事件。

    注意由于第1级无法切换，所以：

    - 切换到第2级，使用`toLevel(1)`
    - 切换到第n级，使用`toLevel(n - 1)`
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |index|NO|若是数字则切换到指定深度的层级，若是字符串切换到指定键名的层级|数值(指定的层级)<br>字符串(指定键名的层级)|`Number`<br>`String`|`undefined`|

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'},
                {'level4' : '第四级'},
                {'level5' : '第五级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs ref="demo7" :list="list"></ui-breadcrumbs>
        <ui-link js="morning.findVM('demo7').toLevel(1);">切换到第2级</ui-link>
        <ui-link js="morning.findVM('demo7').toLevel('level3');">切换到level3</ui-link>
        <ui-link js="morning.findVM('demo7').backLast();">恢复</ui-link>
    </div>
    :::

    #### getLevel()

    获取当前层级信息，包括：

    - keyList : 层级的key数组
    - nameList : 层级的name数组
    - currentKey : 当前选中的key
    - currentName : 当前选中的name
    - length : 层级长度

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs ref="demo8" :list="list"></ui-breadcrumbs>
        <ui-link js="alert(JSON.stringify(morning.findVM('demo8').getLevel()));">获取层级信息</ui-link>
    </div>
    :::

    #### getHistory()

    获取当前面包屑历史，返回一个数组，数组中每一项都是一个完整的层级信息，可以通过`setLevel()`方法设置。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs ref="demo9" :list="list"></ui-breadcrumbs>
        <ui-link js="alert(JSON.stringify(morning.findVM('demo9').getHistory()));">获取历史步骤</ui-link>
    </div>
    :::

    #### backLast([num])

    回退步骤。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |num|YES|指定要返回的步数，从最后开始，从1开始|回退的步骤数|`Number`|`1`|

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'},
                {'level4' : '第四级'},
                {'level5' : '第五级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs ref="demo10" :list="list"></ui-breadcrumbs>
        <ui-link js="morning.findVM('demo10').backLast(1);">回退一步</ui-link>
        <ui-link js="morning.findVM('demo10').backLast(2);">回退两步</ui-link>
    </div>
    :::

    #### addLevel(level)

    添加一个层级，注意层级的键名不能重复。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |level|NO|添加的层级|对象，键名为层级的值，键值为层级的名称|`Object`|`undefined`|

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs ref="demo11" :list="list"></ui-breadcrumbs>
        <ui-link js="morning.findVM('demo11').addLevel({'level4':'新层级'});">新增一个层级</ui-link>
    </div>
    :::

    #### setLevel(levelList)

    重设整个层级关系。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |levelList|NO|添加的层级|一个数组，数组中每一个对象代表一个层级，对象的键名是层级的值，对象的键值是层级的名称|`Array`|`undefined`|

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : {
            list : [
                {'level1' : '第一级'},
                {'level2' : '第二级'},
                {'level3' : '第三级'}
            ]
        }
    });
    ---
    <div>
        <ui-breadcrumbs ref="demo12" :list="list"></ui-breadcrumbs>
        <ui-link js="morning.findVM('demo12').setLevel([{'level6':'第六级'},{'level7':'第七级'}]);">重设整个层级</ui-link>
        <ui-link js="morning.findVM('demo12').backLast();">恢复</ui-link>
    </div>
    :::

    [[[事件]]]

    #### emit

    当选择层级改变时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <ui-breadcrumbs ref="demo13" :list="list" @emit="echo"></ui-breadcrumbs>
    :::

    #### 生命周期事件

    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
                text : '面包屑',
                show : true,
                list : [
                    {'level1' : '第一级'},
                    {'level2' : '第二级'},
                    {'level3' : '第三级'}
                ]
            };
        },
        methods : {
            echo : function (name) {
                console.log('demoEventLifecycle.console1', `${name} event!`);
            }
        }
    });
    ---
    <div>
        <ui-breadcrumbs
            :list="list"
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-breadcrumbs>

        <br><br>
    
        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
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
