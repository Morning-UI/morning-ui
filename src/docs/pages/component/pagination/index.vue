<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 分页 `<ui-pagination>`
    
    <doc-component-status page="pagination"></doc-component-status>
    
    [[[开始]]]

    定义分页，这是一个内联块标签。

    分页组件有两种用法，后面示例中会演示：

    - 关联列表：必须配置`list`，会自动计算总页码。页码切换时，会根据页面从`list`中获取项目渲染内容。
    - 单独使用：必须配置`total`。页码切换时，会触发事件，页面内容由外部逻辑控制。

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-pagination :total="10"></ui-pagination>
    :::

    :::vue
    @name:自动计算总页码
    ---
    #demo
    >desc
    当配置`list`时组件会根据`page-size`自动计算总页码。
    >tpl
    <ui-pagination :list="[1,2,3,4,5,6,7,8]" :page-size="3"></ui-pagination>
    :::

    :::vue
    @name:关联列表使用
    ---
    #demo
    >desc
    关联列表时，把内容模板放到`ui-pagination`标签内，当页码切换时，会根据页面选取`list`中指定的项目作为上下文渲染内容。
    <br><br>
    这里用到了Vue.js的[作用域插槽](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD)和[解构插槽 Prop](https://cn.vuejs.org/v2/guide/components-slots.html#%E8%A7%A3%E6%9E%84%E6%8F%92%E6%A7%BD-Prop)。
    <br><br>
    通过`v-slot`可以在内容模板中获取到的变量：
    <br><br>
    - `page` : 当前页码(从1开始)
    - `items` : 当前页的数据(数组，`list`中的区间)
    >tpl
    <ui-pagination :list="list" :page-size="3">
        <template v-slot="{page, items}">
            <h5>这是第{*page*}页，内容是：</h5>
            <ul>
                <li v-for="item in items">Name : {*item.name*}, Age : {*item.age*}</li>
            </ul>
        </template>
    </ui-pagination>
    >script
    {
        data : {
            list : [
                {name : 'Tim', age : 15},
                {name : 'Andrew', age : 20},
                {name : 'Gustavo', age : 17},
                {name : 'Victor', age : 11},
                {name : 'Shaun', age : 30},
                {name : 'Emir', age : 24},
                {name : 'Katherine', age : 18},
                {name : 'Jax', age : 10}
            ]
        }
    }
    :::

    :::vue
    @name:单独使用
    ---
    #demo
    >desc
    单独使用时，通过监听分页的`emit`事件来获取页码变化，并在页码变化后通过修改`slot`来改变内容。
    >tpl
    <ui-pagination ref="demo1" :total="3" @emit="rerender">
        <div v-html="content"></div>
    </ui-pagination>
    >script
    {
        data : {
            list : [
                {name : 'Tim', age : 15},
                {name : 'Andrew', age : 20},
                {name : 'Gustavo', age : 17},
                {name : 'Victor', age : 11},
                {name : 'Shaun', age : 30},
                {name : 'Emir', age : 24},
                {name : 'Katherine', age : 18},
                {name : 'Jax', age : 10}
            ],
            content : ''
        },
        methods : {
            rerender : function () {
    
                // 通过组件实例获取当前页码信息
                let vm = window.morning.findVM('demo1');
                let page = vm.getPage();
                let list = this.list.slice((page-1)*3, page*3);
                let content = '';
                
                // 生成内容
                content = `<h5>这是第${page}页，内容是：</h5><ul>`;
                
                for (let item of list) {

                    content += `<li>Name : ${item.name}, Age : ${item.age}</li>`;

                }
                
                content += `</ul>`;

                this.content = content;

            }
        },
        mounted : function () {
            
            this.rerender();

        }
    }
    :::

    :::vue
    @name:页面跳转
    ---
    #demo
    >desc
    当总页数大于设置的显示页数，则默认启用页面跳转框。在右侧框中输入数字（非数字会被忽略，小数则向下取整），可快速跳转到该页面。
    <br><br>
    当输入值大于总页数则显示最后一页，输入负值则倒序跳转。
    >tpl
    <ui-pagination :total='16'></ui-pagination>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部(除`transparent`)|`theme`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    :::vue
    @name:尺寸
    ---
    #renderer
    >name
    size-repeat
    >tpl
    <ui-pagination :total="10" size="{$sizeKey}"></ui-pagination> &nbsp;&nbsp; <span>{$&sizeName}</span>
    <br>
    <ui-pagination :total="10" :page="2" size="{$sizeKey}" type="simple"></ui-pagination> &nbsp;&nbsp; <span>{$&sizeName}</span>
    <br>
    <ui-pagination :total="10" :page="2" size="{$sizeKey}" type="mini" :jump-page="false"></ui-pagination> &nbsp;&nbsp; <span>{$&sizeName}</span>
    <br><br>
    :::

    :::vue
    @layout:color
    ---
    <ui-pagination :total="10" color="{$colorKey}"></ui-pagination> &nbsp;&nbsp; <span>{$&colorName}</span>
    <br>
    <ui-pagination :total="10" :page="2" color="{$colorKey}" type="simple"></ui-pagination> &nbsp;&nbsp; <span>{$&colorName}</span>
    <br>
    <ui-pagination :total="10" :page="2" color="{$colorKey}" type="mini" :jump-page="false"></ui-pagination> &nbsp;&nbsp; <span>{$&colorName}</span>
    <br><br>
    :::

    [[[配置]]]

    :::vue
    @name:total
    ---
    #config
    >conf-desc
    设置分页总页数，当设置`list`时，会根据`page-size`和`list`的长度自动计算total。
    >conf-accept
    总页数
    >conf-type
    Number
    >conf-default
    `1`
    ---
    #demo
    >tpl
    <ui-pagination :total="10"></ui-pagination>
    :::

    :::vue
    @name:list
    ---
    #config
    >conf-desc
    需要分页的数据组，一个数组或对象。
    >conf-accept
    数据对象<br>数据数组
    >conf-type
    Object<br>Array
    >conf-default
    `undefined`
    ---
    #demo
    >desc
    当配置`list`时组件会根据`page-size`自动计算总页码。
    >tpl
    <ui-pagination :list="[1,2,3,4,5,6,7,8]" :page-size='3'></ui-pagination>
    :::

    :::vue
    @name:page-size
    ---
    #config
    >conf-desc
    每页多少条记录，只有设置`list`时才有效。
    >conf-accept
    每页记录数量
    >conf-type
    Number
    >conf-default
    `10`
    ---
    #demo
    >tpl
    <ui-pagination :list="[1,2,3,4,5,6,7,8]" :page-size='5'></ui-pagination>
    :::

    :::vue
    @name:page
    ---
    #config
    >conf-desc
    默认在第几页。
    >conf-accept
    页码
    >conf-type
    Number
    >conf-default
    `1`
    ---
    #demo
    >tpl
    <ui-pagination :total="10" :page="4"></ui-pagination>
    :::

    :::vue
    @name:max-show
    ---
    #config
    >conf-desc
    分页栏最多显示几页，超过的页码会隐藏。
    >conf-accept
    页码数，一般为奇数
    >conf-type
    Number
    >conf-default
    `9`
    ---
    #demo
    >tpl
    <ui-pagination :total="10" :page="4" :max-show="3"></ui-pagination>
    :::

    :::vue
    @name:jump-page
    ---
    #config
    >conf-desc
    是否允许输入页码跳转。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >desc
    可以关闭通过页码跳转页面。
    >tpl
    <ui-pagination :total="10" :max-show="5" :jump-page="false"></ui-pagination>
    :::

    :::vue
    @name:type
    ---
    #config
    >conf-desc
    分页组件的展现风格。
    >conf-accept
    `'normal'` : 正常<br>`'compact'` : 紧凑<br>`'block'` : 区块<br>`'simple'` : 简洁<br>`'mini'` : 迷你
    >conf-type
    Boolean
    >conf-default
    `'normal'`
    ---
    #demo
    >desc
    正常风格的分页。
    >tpl
    <ui-pagination :total="10" type="normal"></ui-pagination>
    ---
    #demo
    >desc
    紧凑风格的分页。
    >tpl
    <ui-pagination :total="10" type="compact"></ui-pagination>
    ---
    #demo
    >desc
    区块风格的分页。
    >tpl
    <ui-pagination :total="10" type="block"></ui-pagination>
    ---
    #demo
    >desc
    简洁风格的分页。
    >tpl
    <ui-pagination :total="10" type="simple"></ui-pagination>
    ---
    #demo
    >desc
    简洁模式的分页组件配合`jump-page`一起使用。
    >tpl
    <ui-pagination :total="10" type="simple" :jump-page="false"></ui-pagination>
    ---
    #demo
    >desc
    迷你风格的分页。
    >tpl
    <ui-pagination :total="10" type="mini"></ui-pagination>
    :::

    :::vue
    @name:always-show-nav-arrow
    ---
    #config
    >conf-desc
    是否一直显示翻页导航按钮(如果关闭则会在需要时显示)。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `true`
    ---
    #demo
    >tpl
    <ui-pagination :total="10" :always-show-nav-arrow="false"></ui-pagination>
    :::

    [[[方法]]]

    :::vue
    @name:getPage()
    ---
    #method
    >method-desc
    获取当前页码。
    >method-return
    返回当前页码。
    ---
    #demo
    >tpl
    <div>
        <ui-pagination ref="demo2" :total="10"></ui-pagination>
        <br><br>
        <ui-link js="alert(morning.findVM('demo2').getPage());">获取当前页码</ui-link>
    </div>
    :::

    :::vue
    @name:to(num)
    ---
    #method
    >method-desc
    跳转到指定页码。
    >method-args
    |num|NO|需要跳转的页码|大于最大页数：跳转到最后一页<br>小于0：跳转到从最后开始往前`num`页<br>等于0：跳转到第一页|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-pagination ref="demo3" :total="10"></ui-pagination>
        <br><br>
        <ui-link js="morning.findVM('demo3').to(5);">跳转到第5页</ui-link>
        <br>
        <ui-link js="morning.findVM('demo3').to(20);">跳转到大于最大页数</ui-link>
        <br>
        <ui-link js="morning.findVM('demo3').to(-5);">跳转到从后往前第5页</ui-link>
        <br>
        <ui-link js="morning.findVM('demo3').to(1);">跳转到第1页(输入1)</ui-link>
        <br>
        <ui-link js="morning.findVM('demo3').to(0);">跳转到第1页(输入0)</ui-link>
    </div>
    :::

    :::vue
    @name:next([offset])
    ---
    #method
    >method-desc
    跳转到后几页。
    >method-args
    |offset|YES|需要往后跳转的页码数|页码数|`Number`|`1`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-pagination ref="demo4" :total="10"></ui-pagination>
        <br><br> 
        <ui-link js="morning.findVM('demo4').next();">往后跳转1页</ui-link>
        <ui-link js="morning.findVM('demo4').next(3);">往后跳转3页</ui-link>
    </div>
    :::

    :::vue
    @name:prev([offset])
    ---
    #method
    >method-desc
    跳转到前几页。
    >method-args
    |offset|YES|需要往前跳转的页码数|页码数|`Number`|`1`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-pagination ref="demo5" :total="10" :page="8"></ui-pagination>
        <br><br> 
        <ui-link js="morning.findVM('demo5').prev();">往前跳转1页</ui-link>
        <ui-link js="morning.findVM('demo5').prev(3);">往前跳转3页</ui-link>
    </div>
    :::

    :::vue
    @name:setTotal(num)
    ---
    #method
    >method-desc
    重新设置总页数。如果设置了`list`此方法无效。
    <br><br>
    如果新的页数小于当前所在的页码，则会跳到新页数的最后一页。
    >method-args
    |num|NO|总页码数|页码数|`Number`|`undefined`|
    >method-return
    当前组件VM实例。
    ---
    #demo
    >tpl
    <div>
        <ui-pagination ref="demo6" :total="2"></ui-pagination>
        <br><br>
        <ui-link js="morning.findVM('demo6').setTotal(10);">总页数设为10</ui-link>
        <ui-link js="morning.findVM('demo6').setTotal(3);">总页数设为3</ui-link>
    </div>
    :::

    [[[事件]]]

    :::vue
    @name:emit
    ---
    #event
    >event-desc
    当页码改变时时触发。
    >event-args
    |page|当前页码|`Number`|
    ---
    #demo
    >tpl
    <div>
        <p>切换页码触发emit事件</p>
        <ui-pagination @emit="echo" :total="10"></ui-pagination>
    </div>
    >script
    {
        methods : {
            echo : function (page) {
                console.log('demo7.console1', 'emit event!', page);
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
        <ui-pagination
            ref="demoEventLifecycle"
            v-show="show"
            :total="10"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-pagination>
        <br><br>
        <ui-link js="this.text='生命周期事件';">触发update</ui-link>
        <ui-link js="this.$refs['demoEventLifecycle'].$destroy();">触发destroy</ui-link>
    </div>
    >script
    {
        data : function () {
            return {
               text : '分页',
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

    <iframe src="/report/coverage/lib/components/pagination/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'pagination'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
