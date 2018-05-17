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

    #### 使用

    :::democode/html
    <ui-pagination :total="10"></ui-pagination>
    :::

    #### 自动计算总页码
    
    当配置`list`时组件会根据`page-size`自动计算总页码。

    :::democode/html
    <ui-pagination :list="[1,2,3,4,5,6,7,8]" :page-size="3"></ui-pagination>
    :::

    #### 关联列表使用

    关联列表时，把内容模板放到`ui-pagination`标签内，当页码切换时，会根据页面选取`list`中指定的项目作为上下文渲染内容。

    这里用到了Vue.js的[作用域插槽](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD)。

    通过`slot-scope`解构可以在内容模板中获取到的变量：

    - `page` : 当前页码(从1开始)
    - `items` : 当前页的数据(数组，`list`中的区间)

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
    <ui-pagination :list="list" :page-size="3">
        <template slot-scope="{page, items}">
            <h5>这是第{*page*}页，内容是：</h5>
            <ul>
                <li v-for="item in items">Name : {*item.name*}, Age : {*item.age*}</li>
            </ul>
        </template>
    </ui-pagination>
    :::

    #### 单独使用

    单独使用时，通过监听分页的`emit`事件来获取页码变化，并在页码变化后通过修改`slot`来改变内容。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
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
        }
    });
    ---
    <ui-pagination ref="demo1" :total="3" @emit="rerender">
        <div v-html="content"></div>
    </ui-pagination>
    :::

    #### 页面跳转

    当总页数大于设置的显示页数，则默认启用页面跳转框。在右侧框中输入数字（非数字会被忽略，小数则向下取整），可快速跳转到该页面。
    
    当输入值大于总页数则显示最后一页，输入负值则倒序跳转。
    
    :::democode/html
    <ui-pagination :total='16'></ui-pagination>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`theme`|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

    #### 尺寸

    :::repeat/html
    size
    ---
    <ui-pagination :total='10' size="{$sizeKey}"></ui-pagination> &nbsp;&nbsp; <span>{$&sizeName}</span>
    <br>
    :::

    #### 色彩

    :::repeat/html
    color:theme
    color:feature
    color:black
    color:blue
    color:silver
    color:gray
    ---
    <ui-pagination :total='10' color="{$colorKey}"></ui-pagination> &nbsp;&nbsp; <span>{$&colorName}</span>
    <br>
    :::

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |[total](#total)|设置分页总页数，当设置list时，会根据`page-size`和`list`的长度自动计算total|总页数|Number|`1`|
    |[list](#list)|需要分页的数据组，一个数组或对象|数据对象<br>数据数组|Object<br>Array|`undefined`|
    |[page-size](#page-size)|每页多少条记录，只有设置`list`时才有效|每页记录数量|Number|`10`|
    |[page](#page)|默认在第几页|页码|Number|`1`|
    |[max-show](#max-show)|分页栏最多显示几页，超过的页码会隐藏|页码数，一般为奇数|Number|`9`|
    |[jump-page](#jump-page)|是否允许输入页码跳转|`true`<br>`false`|Boolean|`true`|

    #### total

    :::democode/html
    <ui-pagination :total="10"></ui-pagination>
    :::

    #### list
    
    当配置`list`时组件会根据`page-size`自动计算总页码。
    
    :::democode/html
    <ui-pagination :list="[1,2,3,4,5,6,7,8]" :page-size='3'></ui-pagination>
    :::

    #### page-size
    
    :::democode/html
    <ui-pagination :list="[1,2,3,4,5,6,7,8]" :page-size='5'></ui-pagination>
    :::

    #### page
    
    :::democode/html
    <ui-pagination :total="10" :page="4"></ui-pagination>
    :::

    #### max-show
    
    :::democode/html
    <ui-pagination :total="10" :page="4" :max-show="3"></ui-pagination>
    :::

    #### jump-page

    可以关闭通过页码跳转页面。
    
    :::democode/html
    <ui-pagination :total="10" :max-show="5" :jump-page="false"></ui-pagination>
    :::

    [[[方法]]]

    #### getPage()

    获取当前页码。

    :::democode/html
    <ui-pagination ref="demo2" :total="10"></ui-pagination>
    <br><br> 
    <ui-link js="alert(morning.findVM('demo2').getPage());">获取当前页码</ui-link>
    :::

    #### to(num)

    跳转到指定页码。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |num|NO|需要跳转的页码|大于最大页数：跳转到最后一页<br>小于0：跳转到从最后开始往前`num`页<br>等于0：跳转到第一页|`Number`|`undefined`|

    :::democode/html
    <ui-pagination ref="demo3" :total="10"></ui-pagination>
    <br><br> 
    <ui-link js="morning.findVM('demo3').to(5);">跳转到第5页</ui-link><br>
    <ui-link js="morning.findVM('demo3').to(20);">跳转到大于最大页数</ui-link><br>
    <ui-link js="morning.findVM('demo3').to(-5);">跳转到从后往前第5页</ui-link><br>
    <ui-link js="morning.findVM('demo3').to(1);">跳转到第1页(输入1)</ui-link><br>
    <ui-link js="morning.findVM('demo3').to(0);">跳转到第1页(输入0)</ui-link>
    :::

    #### next([offset])

    跳转到后几页。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |offset|YES|需要往后跳转的页码数|页码数|`Number`|`1`|

    :::democode/html
    <ui-pagination ref="demo4" :total="10"></ui-pagination>
    <br><br> 
    <ui-link js="morning.findVM('demo4').next();">往后跳转1页</ui-link><br>
    <ui-link js="morning.findVM('demo4').next(3);">往后跳转3页</ui-link>
    :::

    #### prev([offset])

    跳转到前几页。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |offset|YES|需要往前跳转的页码数|页码数|`Number`|`1`|

    :::democode/html
    <ui-pagination ref="demo5" :total="10" :page="8"></ui-pagination>
    <br><br> 
    <ui-link js="morning.findVM('demo5').prev();">往前跳转1页</ui-link><br>
    <ui-link js="morning.findVM('demo5').prev(3);">往前跳转3页</ui-link>
    :::

    #### setTotal(num)

    重新设置总页数。如果设置了`list`此方法无效。

    如果新的页数小于当前所在的页码，则会跳到新页数的最后一页。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |num|NO|总页码数|页码数|`Number`|`undefined`|

    :::democode/html
    <ui-pagination ref="demo6" :total="2"></ui-pagination>
    <br><br> 
    <ui-link js="morning.findVM('demo6').setTotal(10);">总页数设为10</ui-link><br>
    <ui-link js="morning.findVM('demo6').setTotal(3);">总页数设为3</ui-link><br>
    :::
    
    [[[事件]]]

    #### emit

    当页码改变时时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo7.console1', 'emit event!');
            }
        }
    });
    ---
    <div>
        <p>切换页码触发emit事件</p>
        <ui-pagination @emit="echo" :total="10"></ui-pagination>
    </div>
    :::

    #### 生命周期事件

    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
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
    });
    ---
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

        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
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
