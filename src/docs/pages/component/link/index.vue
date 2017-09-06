<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 链接 `<ui-link>`
    
    [[[基础]]]

    定义一个链接，这是一个内联块元素。

    #### 使用

    ````html
    <ui-link>链接</ui-link>
    ````
    
    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|全部|`m`|
    |色彩|全部|`theme`|
    |状态|全部|`normal`|

    #### 尺寸

    ````html
    @size
    <ui-link {$size}>{$&name}</ui-link>
    ````

    ````html
    @size
    <ui-link {$size} loading>{$&name}</ui-link>
    ````

    #### 色彩

    ````html
    @colorTheme
    @colorFeature
    @colorBlack
    @colorBlue
    @colorSilver
    @colorGray
    <ui-link {$color}>{$&name}</ui-link>
    ````
    
    #### 状态
    
    ````html
    @stateALLwithTheme
    @stateALLwithFeature
    @stateALLwithBlack
    @stateALLwithBlue
    @stateALLwithSilver
    @stateALLwithGray
    <ui-link {$state} {$color}>{$&name}</ui-link>
    ````

    [[[配置]]]

    |KEY|描述|接受值|值类型|默认值|
    |-|-|-|
    |link|链接地址，若为空则不跳转|url地址|String|`''`|
    |locked|锁定模式，用来防止组件在短时间内被重复触发。若设置一个时间数值(ms)，该组件在时间内只触发一次。也可设为`true`，触发后需要通过`unlock()`方法来解锁组件。|`true`<br>`false`<br>数值(单位ms)|Number<br>Boolean|`false`|
    |new-tab|是否在新窗口中打开链接|`true`<br>`false`|Boolean|`false`|

    #### link

    ````html
    <ui-link :link="'http://www.google.com'">链接</ui-link>
    ````

    #### locked

    ````html
    <ui-link :locked="3000">3秒后自动解锁</ui-link>
    ````

    ````html
    <ui-link ref="demo1" locked>手动解锁</ui-link>
    <a href="javascript:;" onclick="javascript:morning.findVM('demo1').unlock();">解锁</a>
    ````

    #### new-tab

    ````html
    <ui-link new-tab :link="'http://www.google.com'">新窗口打开链接</ui-link>
    ````

    [[[方法]]]

    #### lock([time])

    锁定按钮，锁定后按钮不会触发`emit`事件。
    
    |KEY|可选|描述|接受值|值类型|默认值|
    |-|-|-|-|-|-|
    |time|YES|解锁的时间，单位ms。设置后组件将在解锁时间后自动解锁，不设置则需要调用`unlock()`方法解锁|`undefined`<br>数值(单位ms)|`Undefined`<br>`Number`|`undefined`|

    ````html
    <ui-link ref="demo2">按钮</ui-link>
    <br><br> 
    <a href="javascript:;" onclick="javascript:morning.findVM('demo2').lock();">锁定</a>
    <a href="javascript:;" onclick="javascript:morning.findVM('demo2').lock(2000);">锁定2s</a>
    <a href="javascript:;" onclick="javascript:morning.findVM('demo2').unlock();">解锁</a>
    ````

    #### unlock()

    解锁按钮，解锁后按钮可触发`emit`事件。

    ````html
    <ui-link ref="demo3" locked>按钮</ui-link>
    <br><br> 
    <a href="javascript:;" onclick="javascript:morning.findVM('demo3').unlock();">解锁</a>
    ````

    [[[事件]]]

    #### emit

    当按钮被点击时触发。

    ````mixin
    @use:html.demo3,js.demo3
    ````

    ````html
    @var:demo3
    <div>
        <ui-link @emit="echo">点击触发emit事件</ui-link>
    </div>
    ````

    ````js
    @var:demo3
    new Vue({
        el : '{$el}',
        template : '{$template}',
        methods : {
            echo : function () {
                console.log('demo3.console1', 'emit event!');
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
        <ui-link
            ref="demoEventLifecycle"
            v-show="show"
            @created="echo('created')"
            @mounted="echo('mounted')"
            @beforeUpdate="echo('beforeUpdate')"
            @updated="echo('updated')"
            @beforeDestroy="echo('beforeDestroy')"
            @destroyed="echo('destroyed')"
        >{%text%}</ui-link>

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
               show : true
            };
        },
        methods : {
            echo : function (name) {
                console.log('demoEventLifecycle.console1', `${name} event!`);
            }
        }
    });
    ````
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'link'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
