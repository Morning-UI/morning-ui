<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 标签页 `<ui-tab>`
    
    <doc-component-status page="tab"></doc-component-status>

    [[[开始]]]

    定义一个标签页，标签页支持嵌套。

    使用`slot`属性标记内容对应的标签名，标签名是唯一索引，所以`slot`不能重复。

    标签页支持多种样式，通过不同的样式类来区分。

    #### 使用

    :::democode/html
    <ui-tab>
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    #### 无内边距

    标签页默认有一定内边距，通过`no-padding`样式类为标签页内容取消内边距：

    :::democode/html
    <ui-tab class="no-padding">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    #### 区块标签页

    通过`block`样式类定义区块风格的标签页：

    :::democode/html
    <ui-tab class="block">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    #### 线条标签页

    通过`line`样式类定义线条风格的标签页：

    :::democode/html
    <ui-tab class="line">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    #### 按钮式标签页

    :::democode/html
    <ui-tab class="btn">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::
    
    #### 无边框标签页

    通过`noborder`样式类定义无边框标签页，一般配合线条使用。

    :::democode/html
    <ui-tab class="line noborder">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    #### 嵌套使用

    :::democode/html
    <ui-tab class="block noborder">
        <div slot="A">
            <ui-tab class="line noborder">
                <div slot="A1">
                    <ui-tab>
                        <div slot="A11">A11</div>
                        <div slot="A12">A12</div>
                        <div slot="A13">A13</div>
                    </ui-tab>
                </div>
                <div slot="A2">A2</div>
                <div slot="A3">A3</div>
            </ui-tab>
        </div>
        <div slot="B">B</div>
        <div slot="C">C</div>
    </ui-tab>
    :::

    #### 位于左侧的标签页

    通过标签页的`position`配置你可以调整标签页的位置：

    :::democode/html
    <ui-tab position="left">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    更多用法详见：[position配置](/component/tab.html#position)

    #### 锚点定位
    
    开启`anchor-target`配置后，当标签页检测到页面锚点变化时，会自动切换到对应的标签并定位：

    <a href="#锚点1">定位到第二章的锚点1</a><br>
    <a href="#锚点2">定位到第三章的锚点2</a>
    
    如果使用了多个标签页嵌套，组件会切换所有标签直到可以显示锚点定位内容：

    <a href="#锚点3">定位到`第四章`的`第二节`的`第三页`中的锚点3</a>

    多层嵌套的标签页进行切换时，如层级中某个标签页组件未开启`anchor-target`配置，则这个标签页不会进行切换。但不影响其他标签页切换。

    :::democode/html
    <ui-tab class="block noborder" anchor-target>
        <div slot="第一章">第一章</div>
        <div slot="第二章">
            <div style="height:100px;">第二章</div>
            <div id="锚点1">锚点1</div>
        </div>
        <div slot="第三章">
            <div style="height:200px;">第三章</div>
            <div id="锚点2">锚点2</div>
        </div>
        <div slot="第四章">
            <ui-tab class="noborder" anchor-target>
                <div slot="第一节">第一节</div>
                <div slot="第二节">
                    <ui-tab class="noborder" anchor-target>
                        <div slot="第一页">第一页</div>
                        <div slot="第二页">第二页</div>
                        <div slot="第三页">
                            <div style="height:200px;">第三页</div>
                            <div id="锚点3">锚点3</div>
                        </div>
                    </ui-tab>
                </div>
                <div slot="第三节">第三节</div>
            </ui-tab>
        </div>
    </ui-tab>
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
    |[tab](#tab)|需要展示的标签页<br>无法选中`disabled-options`设置的禁用标签。|`slot`(标签名)|String|第一个标签名|
    |[prepend](#prepend)|在对应标签名之前插入内容(可以是HTML，一般用于插入icon)。若标签名在此对象中未找到则什么都不插入。|需要插入内容的hash(键名对应标签名，键值是需要插入的内容)|Object|`{}`|
    |[append](#append)|在对应标签名之后插入内容(可以是HTML，一般用于插入icon)。若标签名在此对象中未找到则什么都不插入。|需要插入内容的hash(键名对应标签名，键值是需要插入的内容)|Object|`{}`|
    |[anchor-target](#anchor-target)|是否启用锚点定位。启用后URL中锚点匹配到的元素所在的标签页，会切换标签并滚动到此元素。<br>多层嵌套的标签页进行切换时，如层级中某个标签页组件未开启此配置，则这个标签页不会进行切换。但不影响其他标签页切换。|`true`<br>`false`|Boolean|`false`|
    |[position](#position)|标签页的位置|`'top'`：上方<br>`'left'`：左侧|String|`'top'`|
    |[disabled-options](#disabled-options)|禁用指定的标签页，禁用后将无法切换到此标签页<br>若在通过`tab`配置指定的标签处于禁用状态，则会切换到下一个最近可用标签。<br>注意：请至少保留一个可选标签|禁用标签名组成的数组|Array|`[]`|

    #### tab

    :::democode/html
    <!-- 默认展示第三页 -->
    <ui-tab tab="第三页">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    #### prepend

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
                // 需要插入的内容
                prepend : {
                    '应用' : '{{'<i class="iconfont">&#xe601;</i> '}}',
                    '标签' : '{{'<i class="iconfont">&#xe815;</i> '}}'
                }
            }
        }
    });
    ---
    <div>
        <ui-tab
            :prepend="prepend"
        >
            <div slot="应用">应用</div>
            <div slot="标签">标签</div>
            <div slot="其他">其他</div>
        </ui-tab>
    </div>
    :::

    #### append

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
                // 需要插入的内容
                append : {
                    '应用' : '{{' <i class="iconfont">&#xe601;</i>'}}',
                    '标签' : '{{' <i class="iconfont">&#xe815;</i>'}}'
                }
            }
        }
    });
    ---
    <div>
        <ui-tab
            :append="append"
        >
            <div slot="应用">应用</div>
            <div slot="标签">标签</div>
            <div slot="其他">其他</div>
        </ui-tab>
    </div>
    :::

    #### anchor-target

    开启`anchor-target`配置后，当标签页检测到页面锚点变化时，会自动切换到对应的标签并定位：

    <a href="#锚点2-1">定位到第二章的锚点2-1</a><br>
    <a href="#锚点2-2">定位到第三章的锚点2-2</a>
    
    如果使用了多个标签页嵌套，组件会切换所有标签直到可以显示锚点定位内容：

    <a href="#锚点2-3">定位到`第四章`的`第二节`的`第三页`中的锚点2-3</a>

    多层嵌套的标签页进行切换时，如层级中某个标签页组件未开启`anchor-target`配置，则这个标签页不会进行切换。但不影响其他标签页切换。

    :::democode/html
    <ui-tab class="block noborder" anchor-target>
        <div slot="第一章">第一章</div>
        <div slot="第二章">
            <div style="height:100px;">第二章</div>
            <div id="锚点2-1">锚点2-1</div>
        </div>
        <div slot="第三章">
            <div style="height:200px;">第三章</div>
            <div id="锚点2-2">锚点2-2</div>
        </div>
        <div slot="第四章">
            <ui-tab class="noborder" anchor-target>
                <div slot="第一节">第一节</div>
                <div slot="第二节">
                    <ui-tab class="noborder" anchor-target>
                        <div slot="第一页">第一页</div>
                        <div slot="第二页">第二页</div>
                        <div slot="第三页">
                            <div style="height:200px;">第三页</div>
                            <div id="锚点2-3">锚点2-3</div>
                        </div>
                    </ui-tab>
                </div>
                <div slot="第三节">第三节</div>
            </ui-tab>
        </div>
    </ui-tab>
    :::
    
    #### position
    
    标签页在上方：

    :::democode/html
    <ui-tab>
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::
    
    标签页在左侧：

    :::democode/html
    <ui-tab position="left">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::
    
    配合无边框：

    :::democode/html
    <ui-tab position="left" class="noborder">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    配合区块标签页：

    :::democode/html
    <ui-tab position="left" class="block">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    配合线条标签页：

    :::democode/html
    <ui-tab position="left" class="line">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    配合按钮式标签页：

    :::democode/html
    <ui-tab position="left" class="btn">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
    <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    #### disabled-options

    :::democode/html
    <ui-tab :disabled-options="['第二页']">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    区块标签页：

    :::democode/html
    <ui-tab :disabled-options="['第二页']" class="block">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    线条标签页：

    :::democode/html
    <ui-tab :disabled-options="['第二页']" class="line">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    按钮式标签页：

    :::democode/html
    <ui-tab :disabled-options="['第二页']" class="btn">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    使用`tab`无法选中禁用的标签（自动切换下一个最近可选标签）：

    :::democode/html
    <ui-tab :disabled-options="['第二页']" tab="第二页">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    :::

    [[[方法]]]

    #### switch(name)

    切换到指定的标签。

    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |name|NO|切换到的标签名|标签的名称`slot`|`String`|`undefined`|
    
    :::democode/html
    <ui-tab ref="demo3">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    <br><br> 
    <ui-link js="morning.findVM('demo3').switch('第一页');">切换到第一页</ui-link>
    <ui-link js="morning.findVM('demo3').switch('第二页');">切换到第二页</ui-link>
    <ui-link js="morning.findVM('demo3').switch('第三页');">切换到第三页</ui-link>
    :::

    #### next()

    切换到下一个标签，若是最后一个则切换到第一个。
    
    :::democode/html
    <ui-tab ref="demo4">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    <br><br> 
    <ui-link js="morning.findVM('demo4').next();">切换到下一个标签</ui-link>
    :::

    #### prev()

    切换到上一个标签，若是第一个则切换到最后一个。
    
    :::democode/html
    <ui-tab ref="demo5">
        <div slot="第一页">第一页</div>
        <div slot="第二页">第二页</div>
        <div slot="第三页">第三页</div>
    </ui-tab>
    <br><br>
    <ui-link js="morning.findVM('demo5').prev();">切换到上一个标签</ui-link>
    :::
   
    [[[事件]]]

    #### switch

    当标签页切换后触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo6.console1', 'switch event!');
            }
        }
    });
    ---
    <div>
        <ui-tab @switch="echo" ref="demo6">
            <div slot="第一页">第一页</div>
            <div slot="第二页">第二页</div>
            <div slot="第三页">第三页</div>
        </ui-tab>
        <p>切换标签页触发此事件</p>
    </div>
    :::

    #### 生命周期事件

    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
               text : '标签页',
               show : true
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
        <ui-tab
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >
            <div slot="第一页">{*text*}</div>
            <div slot="第二页">第二页</div>
            <div slot="第三页">第三页</div>
        </ui-tab>

        <br><br>
    
        <ui-link js="window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/tab/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'tab'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
