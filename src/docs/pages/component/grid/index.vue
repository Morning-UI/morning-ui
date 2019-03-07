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

    这是一个24列的栅格系统，支持自适应及响应式，通过`.row`来标记行，通过`.col`或`.col-[n]`来标记列。

    列之间默认具有空隙，两端无空隙，可以通过两个类来调整空隙：

    - `gutter-none` : 生成不具有空隙的栅格
    - `space-around` : 生成两端包含空隙的栅格

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <div class="row">
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
        </div>
    </ui-grid>
    :::

    :::vue
    @name:栅格组合
    ---
    #demo
    >desc
    通过`.col-[n]`来标记栅格所占用的列。
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <div class="row">
            <div class="col-24" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-24</div>
        </div>
        <div class="row">
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-22" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-22</div>
        </div>
        <div class="row">
            <div class="col-8" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-8</div>
            <div class="col-16" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-16</div>
        </div>
        <div class="row">
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="col-7" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-7</div>
            <div class="col-13" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-13</div>
        </div>
        <div class="row">
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            <div class="col-12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</div>
        </div>
        <div class="row">
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
            <div class="col-1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></div>
        </div>
    </ui-grid>
    :::

    :::vue
    @name:等宽栅格
    ---
    #demo
    >desc
    可以通过`.col`来标记一组等宽栅格。
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <div class="row">
            <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>
            <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>
        </div>
        <div class="row">
            <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>
            <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>
            <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>
        </div>
        <div class="row">
            <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>
            <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>
            <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>
            <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>
            <div class="col" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</div>
        </div>
    </ui-grid>
    :::

    :::vue
    @name:栅格嵌套
    ---
    #demo
    >desc
    栅格系统支持多层级嵌套。
    >tpl
    <ui-grid>
        <div class="row">
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            <div class="col-18" style="background-color:#D6DDE5;">
                <ui-grid>
                    <div class="row">
                        <div class="col-9" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-9</div>
                        <div class="col-15" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-15</div>
                    </div>
                </ui-grid>
            </div>
        </div>
    </ui-grid>
    :::
    
    :::vue
    @name:栅格列偏移
    ---
    #demo
    >desc
    通过`.offset-[n]`来标记栅格偏移列数。
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <div class="row">
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
        </div>
        <div class="row">
            <div class="col-4 offset-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>
            <div class="col-4 offset-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>
        </div>
        <div class="row">
            <div class="col-4 offset-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-2</div>
            <div class="col-9 offset-1" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-9 offset-1</div>
        </div>
    </ui-grid>
    :::
    
    :::vue
    @name:栅格列位移
    ---
    #demo
    >desc
    通过`.push-[n]`和`.pull-[n]`来标记栅格的位移，位移相对于栅格列当前的位置。
    <br>
    其中`.push-[n]`可以将栅格向右位移，`.pull-[n]`可以将栅格向左位移。
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <div class="row">
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
        </div>
        <div class="row">
            <div class="col-4 push-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 push-6</div>
            <div class="col-4 pull-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 pull-4</div>
        </div>
        <div class="row">
            <div class="col-16 push-8" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-16 push-8</div>
            <div class="col-8 pull-16" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-8 pull-16</div>
        </div>
    </ui-grid>
    ---
    #demo
    >desc
    `栅格列位移`和`栅格列偏移`的区别为，`栅格列位移`仅对当前列生效(采用`left`或`right`)，不会影响之后的列。而`栅格列偏移`会影响之后的列。
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <div class="row">
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
        </div>
        <div class="row">
            <div class="col-4 offset-8" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-4 offset-8</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-4</div>
        </div>
        <div class="row">
            <div class="col-4 push-8" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-4 push-8</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-4</div>
        </div>
    </ui-grid>
    :::

    :::vue
    @name:栅格列水平对齐
    ---
    #demo
    >desc
    在栅格行`<div class="row">`中添加不同的类可以实现行内列的水平对齐：
    <br><br>
    - `.justify-start` : 向左对齐(默认)
    - `.justify-end` : 向右对齐
    - `.justify-center` : 居中对齐
    - `.justify-space-between` : 等宽对齐
    - `.justify-space-around` : 分散对齐
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <div class="row">
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
        </div>
        <div class="row justify-start">
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
        </div>
        <div class="row justify-end">
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
        </div>
        <div class="row justify-center">
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
        </div>
        <div class="row justify-space-between">
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
        </div>
        <div class="row justify-space-around">
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</div>
        </div>
    </ui-grid>
    :::

    :::vue
    @name:栅格列垂直对齐
    ---
    #demo
    >desc
    在栅格行`<div class="row">`中添加不同的类可以实现行内列的垂直对齐方式：
    <br><br>
    - `.vertical-top` : 向上对齐(默认)
    - `.vertical-bottom` : 向下对齐
    - `.vertical-center` : 居中对齐
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <div class="row vertical-top" style="height:120px;background-color:#EDF1F5">
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 80px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 120px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 40px;">c-4</div>
        </div>
        <div class="row vertical-bottom" style="height:120px;background-color:#EDF1F5">
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 80px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 120px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 40px;">c-4</div>
        </div>
        <div class="row vertical-center" style="height:120px;background-color:#EDF1F5">
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 80px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 120px;">c-4</div>
            <div class="col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 40px;">c-4</div>
        </div>
    </ui-grid>
    :::

    :::vue
    @name:无间隔栅格
    ---
    #demo
    >desc
    添加`.gutter-none`的样式类可以使栅格之间无间隔。
    >tpl
    <ui-grid class="gutter-none" style="background-color: #EDF1F5">
        <div class="row">
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
        </div>
        <div class="row">
            <div class="col-9" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-9</div>
            <div class="col-15" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-15</div>
        </div>
        <div class="row">
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
        </div>
        <div class="row">
            <div class="col-4 offset-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>
            <div class="col-4 offset-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>
        </div>
        <div class="row">
            <div class="col-4 push-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 push-6</div>
            <div class="col-4 pull-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 pull-4</div>
        </div>
    </ui-grid>
    :::

    :::vue
    @name:两端包含空隙栅格
    ---
    #demo
    >desc
    添加`.space-around`的样式类可以使栅格两端也有空隙。
    >tpl
    <ui-grid class="space-around" style="background-color: #EDF1F5">
        <div class="row">
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
        </div>
        <div class="row">
            <div class="col-9" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-9</div>
            <div class="col-15" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-15</div>
        </div>
        <div class="row">
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
        </div>
        <div class="row">
            <div class="col-4 offset-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>
            <div class="col-4 offset-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</div>
        </div>
        <div class="row">
            <div class="col-4 push-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 push-6</div>
            <div class="col-4 pull-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 pull-4</div>
        </div>
    </ui-grid>
    :::

    :::vue
    @name:栅格空隙尺寸
    ---
    #demo
    >desc
    栅格支持多种尺寸的空隙，通过在`.gutter-[size]`来设置：
    <br><br>
    - `.gutter-xs` : `4px`的水平和垂直空隙(默认)
    - `.gutter-s` : `8px`的水平和垂直空隙
    - `.gutter-m` : `16px`的水平和垂直空隙
    - `.gutter-l` : `24px`的水平和垂直空隙
    - `.gutter-xl` : `36px`的水平和垂直空隙
    >tpl
    <div>
        <ui-grid class="gutter-xs" style="background-color: #EDF1F5">
            <div class="row">
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            </div>
            <div class="row">
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            </div>
        </ui-grid>

        <br><br>

        <ui-grid class="gutter-s" style="background-color: #EDF1F5">
            <div class="row">
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            </div>
            <div class="row">
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            </div>
        </ui-grid>

        <br><br>

        <ui-grid class="gutter-m" style="background-color: #EDF1F5">
            <div class="row">
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
                <div class="col-2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</div>
            </div>
            <div class="row">
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            </div>
        </ui-grid>

        <br><br>

        <ui-grid class="gutter-l" style="background-color: #EDF1F5">
            <div class="row">
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            </div>
            <div class="row">
                <div class="col-12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</div>
                <div class="col-12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</div>
            </div>
        </ui-grid>

        <br><br>

        <ui-grid class="gutter-xl" style="background-color: #EDF1F5">
            <div class="row">
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            </div>
            <div class="row">
                <div class="col-12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</div>
                <div class="col-12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</div>
            </div>
        </ui-grid>
    </div>
    :::

    :::vue
    @name:填满容器的栅格
    ---
    #demo
    >desc
    添加`.fill`可使用填满容器的栅格。
    >tpl
    <div style="height:200px">
        <ui-grid class="fill" style="background-color: #EDF1F5">
            <div class="row">
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
                <div class="col-6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</div>
            </div>
        </ui-grid>
    </div>
    :::
    
    :::vue
    @name:响应式栅格
    ---
    #demo
    >desc
    参考了 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设六个尺寸：
    <br><br>
    - `xs` : 屏幕宽度小于`576px`
    - `s` : 屏幕宽度介于`576px`和`768px`之间
    - `m` : 屏幕宽度介于`768px`和`992px`之间
    - `l` : 屏幕宽度介于`992px`和`1200px`之间
    - `xl` : 屏幕宽度大于`1200px`
    <br><br>
    使用时在原有的`.col-[n]`、`.offset-[n]`、`.push-[n]`、`.pull-[n]`前加上如`xs-`这样的前缀即可。
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <div class="row">
            <div class="xs-col-2 s-col-4 m-col-6 l-col-8 xl-col-10" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>
            <div class="xs-col-20 s-col-16 m-col-12 l-col-8 xl-col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>
            <div class="xs-col-2 s-col-4 m-col-6 l-col-8 xl-col-10" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>
        </div>
    </ui-grid>
    ---
    #demo
    >desc
    `.offset-[n]`也同样支持。
    >tpl
    <div>
        <ui-grid style="background-color: #EDF1F5">
            <div class="row">
                <div class="xs-col-2 s-col-4 m-col-6 l-col-8 xl-col-10" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>
                <div class="xs-col-20 s-col-16 m-col-12 l-col-8 xl-col-4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>
                <div class="xs-col-2 s-col-4 m-col-6 l-col-8 xl-col-10" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>
            </div>
        </ui-grid>

        <br>
        
        <ui-grid style="background-color: #EDF1F5">
            <div class="row">
                <div class="
                    xs-col-20 xs-offset-2
                    s-col-16 s-offset-4
                    m-col-12 m-offset-6
                    l-col-8 l-offset-8
                    xl-col-4 xl-offset-10
                " style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</div>
            </div>
        </ui-grid>
    </div>
    :::

    [[[形态]]]

    #### 支持

    |类型|支持|默认|
    |-|-|-|
    |尺寸|不支持|-|
    |色彩|不支持|-|
    |状态|不支持|-|

    <a href="/guide/status.html">查看形态文档</a>

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
