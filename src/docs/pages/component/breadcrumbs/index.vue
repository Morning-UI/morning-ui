<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 面包屑 `<ui-breadcrumbs>`
    
    <doc-component-status page="breadcrumbs"></doc-component-status>
    
    [[[基础]]]

    定义一个模面包屑导航。

    #### 使用

    ````mixin
    @use:html.demo1,js.demo1
    ````

    ````html
    @var:demo1
    <ui-breadcrumbs :list="list"></ui-breadcrumbs>
    ````

    ````js
    @var:demo1
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
    ````
    
    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|不支持|-|
    |状态|不支持|-|

    #### 尺寸

    ````mixin
    @use:html.demo2,js.demo2|@size
    ````

    ````html
    @var:demo2
    <div>
        <ui-breadcrumbs :list="list" {$sizeKey} root-name="{$sizeName}"></ui-breadcrumbs>
        <br>
    </div>
    ````

    ````js
    @var:demo2
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
    ````

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|
    |root-name|根层级名称|名称<br>`false`|String<br>Boolean|`false`|
    |choose-root|可以选择跟层级，选择跟层级将会清空层级列表|`true`<br>`false`|Boolean|`false`|
    |list|默认面包屑层级|一个数组，数组中每一个对象代表一个层级，对象的键名是层级的值，对象的键值是层级的名称。对象的键名必须唯一。|Array|`[]`|
    |max-history|面包屑记录历史步骤最大数，每次切换计一次步骤|步骤数|Boolean|`20`|

    #### root-name

    `root-name`不在层级关系中，仅仅作为一个提示存在。

    ````mixin
    @use:html.demo3,js.demo3
    ````

    ````html
    @var:demo3
    <ui-breadcrumbs :list="list" root-name="首页"></ui-breadcrumbs>
    ````

    ````js
    @var:demo3
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
    ````

    #### choose-root

    跟层级可被选中，选中时所有层级会被清空。

    ````mixin
    @use:html.demo4,js.demo4
    ````

    ````html
    @var:demo4
    <ui-breadcrumbs :list="list" root-name="首页" choose-root></ui-breadcrumbs>
    ````

    ````js
    @var:demo4
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
    ````

    #### list

    ````mixin
    @use:html.demo5,js.demo5
    ````

    ````html
    @var:demo5
    <ui-breadcrumbs :list="list"></ui-breadcrumbs>
    ````

    ````js
    @var:demo5
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
    ````

    #### max-history

    设置最多可回退步骤数，注意由于操作后立即会记录历史，所以：

    - 如果限制最多回退1步，`max-history`设为2
    - 如果限制不准回退，`max-history`设为1


    ````mixin
    @use:html.demo6,js.demo6
    ````

    ````html
    @var:demo6
    <!-- 设置最多回退1步 -->
    <div>
        <ui-breadcrumbs ref="demo6" :list="list" :max-history="2"></ui-breadcrumbs>
        <a href="javascript:;" onclick="javascript:morning.findVM('demo6').backLast();">回退一步</a>
    </div>
    ````

    ````js
    @var:demo6
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
    ````

    [[[方法]]]

    #### toLevel(index)

    锁定按钮，锁定后按钮不会触发`emit`事件。

    注意由于第1级无法切换，所以：

    - 切换到第2级，使用`toLevel(1)`
    - 切换到第n级，使用`toLevel(n - 1)`
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |index|NO|若是数字则切换到指定深度的层级，若是字符串切换到指定键名的层级|数值(指定的层级)<br>字符串(指定键名的层级)|`Number`<br>`String`|`undefined`|

    ````mixin
    @use:html.demo7,js.demo7
    ````

    ````html
    @var:demo7
    <div>
        <ui-breadcrumbs ref="demo7" :list="list"></ui-breadcrumbs>
        <a href="javascript:;" onclick="javascript:morning.findVM('demo7').toLevel(1);">切换到第2级</a>
        <a href="javascript:;" onclick="javascript:morning.findVM('demo7').toLevel('level3');">切换到level3</a>
        <a href="javascript:;" onclick="javascript:morning.findVM('demo7').backLast();">恢复</a>
    </div>
    ````

    ````js
    @var:demo7
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
    ````

    #### getLevel()

    获取当前层级信息，包括：

    - keyList : 层级的key数组
    - nameList : 层级的name数组
    - currentKey : 当前选中的key
    - currentName : 当前选中的name
    - length : 层级长度


    ````mixin
    @use:html.demo8,js.demo8
    ````

    ````html
    @var:demo8
    <div>
        <ui-breadcrumbs ref="demo8" :list="list"></ui-breadcrumbs>
        <a href="javascript:;" onclick="javascript:alert(JSON.stringify(morning.findVM('demo8').getLevel()));">获取层级信息</a>
    </div>
    ````

    ````js
    @var:demo8
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
    ````

    #### getHistory()

    获取当前面包屑历史，返回一个数组，数组中每一项都是一个完整的层级信息，可以通过`setLevel()`方法设置。

    ````mixin
    @use:html.demo9,js.demo9
    ````

    ````html
    @var:demo9
    <div>
        <ui-breadcrumbs ref="demo9" :list="list"></ui-breadcrumbs>
        <a href="javascript:;" onclick="javascript:alert(JSON.stringify(morning.findVM('demo9').getHistory()));">获取历史步骤</a>
    </div>
    ````

    ````js
    @var:demo9
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
    ````

    #### backLast([num])

    回退步骤。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |num|YES|指定要返回的步数，从最后开始，从1开始|回退的步骤数|`Number`|`1`|


    ````mixin
    @use:html.demo10,js.demo10
    ````

    ````html
    @var:demo10
    <div>
        <ui-breadcrumbs ref="demo10" :list="list"></ui-breadcrumbs>
        <a href="javascript:;" onclick="javascript:morning.findVM('demo10').backLast(1);">回退一步</a>
        <a href="javascript:;" onclick="javascript:morning.findVM('demo10').backLast(2);">回退两步</a>
    </div>
    ````

    ````js
    @var:demo10
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
    ````


    #### addLevel(level)

    添加一个层级，注意层级的键名不能重复。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |level|NO|添加的层级|对象，键名为层级的值，键值为层级的名称|`Object`|`undefined`|

    ````mixin
    @use:html.demo11,js.demo11
    ````

    ````html
    @var:demo11
    <div>
        <ui-breadcrumbs ref="demo11" :list="list"></ui-breadcrumbs>
        <a href="javascript:;" onclick="javascript:morning.findVM('demo11').addLevel({'level4':'新层级'});">新增一个层级</a>
    </div>
    ````

    ````js
    @var:demo11
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
    ````

    #### setLevel(levelList)

    重设整个层级关系。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |levelList|NO|添加的层级|一个数组，数组中每一个对象代表一个层级，对象的键名是层级的值，对象的键值是层级的名称|`Array`|`undefined`|

    ````mixin
    @use:html.demo12,js.demo12
    ````

    ````html
    @var:demo12
    <div>
        <ui-breadcrumbs ref="demo12" :list="list"></ui-breadcrumbs>
        <a href="javascript:;" onclick="javascript:morning.findVM('demo12').setLevel([{'level6':'第六级'},{'level7':'第七级'}]);">重设整个层级</a>
        <a href="javascript:;" onclick="javascript:morning.findVM('demo12').backLast();">恢复</a>
    </div>
    ````

    ````js
    @var:demo12
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
    ````

    [[[事件]]]

    #### emit

    当选择层级改变时触发。

    ````mixin
    @use:html.demo13,js.demo13
    ````

    ````html
    @var:demo13
    <ui-breadcrumbs ref="demo13" :list="list" @emit="echo"></ui-breadcrumbs>
    ````

    ````js
    @var:demo13
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
    ````

    #### 生命周期事件

    ````mixin
    @use:html.demoEventLifecycle,js.demoEventLifecycle
    ````

    ````html
    @var:demoEventLifecycle
    <div>
        <ui-breadcrumbs
            :list="list"
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @beforeUpdate="echo('beforeUpdate')"
            @updated="echo('updated')"
            @beforeDestroy="echo('beforeDestroy')"
            @destroyed="echo('destroyed')"
        >{%text%}</ui-breadcrumbs>

        <br><br>
    
        <a href="javascript:;" onclick="javascript:window.demoEventLifecycle.text='生命周期事件';">触发update</a>
        <a href="javascript:;" onclick="javascript:morning.findVM('demoEventLifecycle').$destroy();">触发destroy</a>
    </div>
    ````

    ````js
    @var:demoEventLifecycle
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
                text : '按钮',
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
    ````

    [[[单元测试]]]

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
