<template>
    <doc-component
        :page="page"
        :hasPadding="true"
    >
    <script type="text/markdown">
    # 栅格 `<ui-grid>`
    
    <doc-component-status page="grid"></doc-component-status>

    [[[开始]]]

    定义一个栅格系统，栅格系统支持嵌套。

    这是一个16列的栅格系统，支持自适应，不支持响应式。

    通过类`c-[n]`来标记栅格所占用的列，通过类`offset-[n]`来标记栅格偏移列数。

    列之间默认具有间隙，两端无间隙，可以通过两个类来调整间隙：

    - `nogap` : 生成不具有间隙的栅格
    - `averagegap` : 生成两端包含间隙的栅格

    #### 使用

    :::democode/html
    <ui-grid>
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
    </ui-grid>
    :::

    #### 栅格组合

    :::democode/html
    <ui-grid>
        <div class="c-16" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-16</div>
    </ui-grid>

    <br>

    <ui-grid>
        <div class="c-1" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-1</div>
        <div class="c-15" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-15</div>
    </ui-grid>

    <br>

    <ui-grid>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-14" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-14</div>
    </ui-grid>

    <br>
    
    <ui-grid>
        <div class="c-3" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-3</div>
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
        <div class="c-9" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-9</div>
    </ui-grid>

    <br>
    
    <ui-grid>
        <div class="c-5" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-5</div>
        <div class="c-5" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-5</div>
        <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>
    </ui-grid>
    :::

    #### 栅格偏移

    :::democode/html
    <ui-grid>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
    </ui-grid>

    <br>

    <ui-grid>
        <div class="c-4 offset-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>
        <div class="c-4 offset-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>
    </ui-grid>

    <br>

    <ui-grid>
        <div class="c-4 offset-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-2</div>
        <div class="c-9 offset-1" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-9 offset-1</div>
    </ui-grid>
    :::



    #### 栅格嵌套

    栅格系统支持多层级嵌套。
    
    :::democode/html
    <ui-grid>
        <div class="c-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
        <div class="c-12" style="background-color:#D6DDE5;">
            <ui-grid>
                <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="c-10" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-10</div>
            </ui-grid>
        </div>
    </ui-grid>
    :::

    #### 无间隔栅格

    添加`nogap`的样式类可以使栅格之间无间隔。

    :::democode/html
    <ui-grid class="nogap">
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
    </ui-grid>

    <br>

    <ui-grid class="nogap">
        <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>
        <div class="c-10" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-10</div>
    </ui-grid>

    <br>

    <ui-grid class="nogap">
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
    </ui-grid>

    <br>

    <ui-grid class="nogap">
        <div class="c-4 offset-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>
        <div class="c-4 offset-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>
    </ui-grid>
    :::

    #### 两端包含间隙栅格

    添加`averagegap`的样式类可以使栅格两端也有间隙。

    :::democode/html
    <ui-grid class="averagegap">
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
        <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
    </ui-grid>

    <br>
    
    <ui-grid class="averagegap">
        <div class="c-6" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-6</div>
        <div class="c-10" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-10</div>
    </ui-grid>

    <br>

    <ui-grid class="averagegap">
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
        <div class="c-2" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-2</div>
    </ui-grid>

    <br>

    <ui-grid class="averagegap">
        <div class="c-4 offset-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>
        <div class="c-4 offset-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>
    </ui-grid>
    :::

    #### 填满容器的栅格

    填满容器的栅格高度为100%。

    :::democode/html
    <div style="height:200px;">
        <ui-grid class="fill">
            <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="c-4" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-4</div>
        </ui-grid>
    </div>
    :::


    [[[声明]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|


    [[[源码]]]

    <iframe src="/report/coverage/lib/components/grid/index.vue.html" name="codeFrame" frameborder="0" onload="this.height=codeFrame.document.body.scrollHeight"></iframe>
    </script>
    </doc-component>
</template>
 
<script>
import DocComponent                from 'Docs/common/DocComponent.vue';

export default {
    data : function () {

        return {
            page : 'grid'
        };

    },
    components : {
        'doc-component' : DocComponent
    }
};
</script>

<style lang="less">
</style>
