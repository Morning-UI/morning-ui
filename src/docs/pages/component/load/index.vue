<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 加载 `<ui-load>`
    
    <doc-component-status page="load"></doc-component-status>
    
    [[[开始]]]

    定义一个加载，加载可以通过时间或`Promise`控制载入状态：

    - 时间：一定时间后载入内容，一般用来异步载入内容，减少首屏渲染压力。
    - Promise：一般用于异步加载内容，当内容获取后完成`Promise`显示内容。
    
    加载的内容为`ui-load`的内容。

    当内容未载入时，加载会在内容区域显示一个`loading`标识，当内容载入后会渲染内容。

    当内容载入失败时加载会提示用户载入失败。

    #### 使用

    :::democode/html
    <div style="width:400px;height:200px;background: #f6f6f6">
        <!-- 默认0.2秒后加载成功 -->
        <ui-load>0.2秒后加载成功</ui-load>
    </div>
    :::

    #### 5秒后加载成功

    :::democode/html
    <div style="width:400px;height:200px;background: #f6f6f6">
        <ui-load :time="5000">5秒后加载成功</ui-load>
    </div>
    :::

    #### 使用Promise完成加载

    :::democode/html
    <div style="width:400px;height:200px;background: #f6f6f6">
        <ui-load ref="demo1" :time="false">加载成功</ui-load>
    </div>
    <ui-link js="window.morning.findVM('demo1').resolve();">完成加载</ui-link>
    :::

    #### 使用Promise失败加载

    :::democode/html
    <div style="width:400px;height:200px;background: #f6f6f6">
        <ui-load ref="demo2" :time="false">加载失败</ui-load>
    </div>
    <ui-link js="window.morning.findVM('demo2').reject();">失败加载</ui-link>
    :::

    #### 带提示的加载

    :::democode/html
    <div style="width:400px;height:200px;background: #f6f6f6">
        <ui-load :time="false" note="加载中">加载成功</ui-load>
    </div>
    :::
    
    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|不支持|-|
    |状态|不支持|-|


    #### 尺寸

    :::repeat/html
    size
    ---
    <div style="width:400px;height:200px;background: #f6f6f6">
        <ui-load size="{$sizeKey}" :time="false" note="{$sizeName}">加载成功</ui-load>
    </div>
    :::

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|-|-|
    |time|多少时间(ms)后完成加载，若设为false则需要手动完成或拒绝加载。如果当前正处于加载中，`time`改变后需要下次加载生效。|时间值(ms)<br>`false`|Boolean<br>Number|`200`|
    |note|加载过程中的提示|提示字符串|String|`''`|

    #### time

    设定一段时间后加载完成。

    :::democode/html
    <div style="width:400px;height:200px;background: #f6f6f6">
        <ui-load :time="5000">5秒后加载成功</ui-load>
    </div>
    :::

    #### note

    :::democode/html
    <div style="width:400px;height:200px;background: #f6f6f6">
        <ui-load :time="false" note="加载中">加载成功</ui-load>
    </div>
    :::

    [[[方法]]]

    #### resolve()

    完成加载，一般在远程请求成功获取数据后调用。

    :::democode/html
    <div style="width:400px;height:200px;background: #f6f6f6">
        <ui-load ref="demo3" :time="false">加载成功</ui-load>
    </div>
    <ui-link js="window.morning.findVM('demo3').resolve();">完成加载</ui-link>
    :::

    #### reject()

    失败加载，一般在远程请求失败后调用。

    :::democode/html
    <div style="width:400px;height:200px;background: #f6f6f6">
        <ui-load ref="demo4" :time="false">加载成功</ui-load>
    </div>
    <ui-link js="window.morning.findVM('demo4').reject();">失败加载</ui-link>
    :::

    #### reload()

    重新进入加载状态，若组件仍在加载状态，此方法无效。

    :::democode/html
    <div style="width:400px;height:200px;background: #f6f6f6">
        <ui-load ref="demo5" :time="3000">加载成功</ui-load>
    </div>
    <ui-link js="window.morning.findVM('demo5').reload();">重新加载</ui-link>
    :::

    [[[事件]]]

    #### emit

    当加载完毕时触发，不管加载是否成功都会触发此事件。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo6.console1', 'emit event!');
            }
        }
    });
    ---
    <div>
        <div style="width:400px;height:200px;background: #f6f6f6">
            <ui-load ref="demo6" @emit="echo" :time="false">加载成功</ui-load>
        </div>
        <ui-link js="window.morning.findVM('demo6').resolve();">触发emit</ui-link>
    </div>
    :::

    #### done

    当加载完毕并成功时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo7.console1', 'done event!');
            }
        }
    });
    ---
    <div>
        <div style="width:400px;height:200px;background: #f6f6f6">
            <ui-load ref="demo7" @done="echo" :time="false">加载成功</ui-load>
        </div>
        <ui-link js="window.morning.findVM('demo7').resolve();">触发done</ui-link>
    </div>
    :::

    #### fail

    当加载完毕并成功时触发。

    :::vue/html
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo8.console1', 'fail event!');
            }
        }
    });
    ---
    <div>
        <div style="width:400px;height:200px;background: #f6f6f6">
            <ui-load ref="demo8" @fail="echo" :time="false">加载失败</ui-load>
        </div>
        <ui-link js="window.morning.findVM('demo8').reject();">触发fail</ui-link>
    </div>
    :::

    #### 生命周期事件
    
    :::vue/html
    window.demoEventLifecycle = new Vue({
        el : '{$el}',
        template : '{$template}',
        data : function () {
            return {
               text : '加载',
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
        <ui-load
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @before-update="echo('before-update')"
            @updated="echo('updated')"
            @before-destroy="echo('before-destroy')"
            @destroyed="echo('destroyed')"
        >{*text*}</ui-load>

        <br><br>
    
        <ui-link js="javascript:window.demoEventLifecycle.text='生命周期事件';">触发update</ui-link>
        <ui-link js="javascript:morning.findVM('demoEventLifecycle').$destroy();">触发destroy</ui-link>
    </div>
    :::

    [[[源码]]]

    <iframe src="/report/coverage/lib/components/load/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>

    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                 from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'load'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
