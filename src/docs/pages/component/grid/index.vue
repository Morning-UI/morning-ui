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

    这是一个24列的栅格系统，支持自适应及响应式。

    栅格组件支持两个子组件：

    - `ui-row`：栅格行
    - `ui-col`：栅格列

    #### `ui-row`栅格行

    `ui-row`包含以下配置：

    - `equal-width` : 是否启用列等宽(Boolean)
    - `vertical-align` : 垂直对齐方式(String)，支持：
        - `top` : 顶部对齐
        - 'center' : 居中对齐
        - 'bottom' : 底部对齐

    #### `ui-col`：栅格列

    `ui-col`包含以下配置：

    - `span` : 列横跨的栅格数量(Number)
    - `offset` : 列偏移(Number)，[用法](#栅格列偏移)
    - `push` : 列向右位移(Number)，[用法](#栅格列位移)
    - `pull` : 列向左位移(Number)，[用法](#栅格列位移)
    - `xs` / `s` / `m` / `l` / `xl` : 响应式栅格配置(Object)，[用法](#响应式栅格)

    列之间默认具有空隙，两端无空隙，可以通过两个配置来调整空隙：

    - `gutter-size="none"` : 生成不具有空隙的栅格
    - `space-around` : 生成两端包含空隙的栅格

    __注意：当嵌套使用栅格时，需要保证`ui-col`的父级为`ui-row`、`ui-row`的父级为`ui-grid`。__

    :::vue
    @name:使用
    ---
    #demo
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <ui-row>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
        </ui-row>
    </ui-grid>
    :::

    :::vue
    @name:栅格组合
    ---
    #demo
    >desc
    通过`span`配置来标记栅格所占用的列。
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <ui-row>
            <ui-col :span="24" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-24</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="22" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-22</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="8" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-8</ui-col>
            <ui-col :span="16" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-16</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4</ui-col>
            <ui-col :span="7" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-7</ui-col>
            <ui-col :span="13" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-13</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
            <ui-col :span="1" style="background-color: #D6DDE5;padding: 1em 0.6em;font-size:12px;"></ui-col>
        </ui-row>
    </ui-grid>
    :::

    :::vue
    @name:等宽栅格
    ---
    #demo
    >desc
    可以通过`.equal-width`或`equal-width`配置来标记一行等宽栅格。
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <ui-row equal-width>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>
        </ui-row>
        <ui-row equal-width>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>
        </ui-row>
        <ui-row equal-width>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">Equal width</ui-col>
        </ui-row>
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
        <ui-row>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="18" style="background-color:#D6DDE5;">
                <ui-grid>
                    <ui-row>
                        <ui-col :span="9" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-9</ui-col>
                        <ui-col :span="15" style="background-color:#E2E8EE;padding: 1em 0.6em;font-size:12px;">c-15</ui-col>
                    </ui-row>
                </ui-grid>
            </ui-col>
        </ui-row>
    </ui-grid>
    :::
    
    :::vue
    @name:栅格列偏移
    ---
    #demo
    >desc
    通过`offset`配置来标记栅格偏移列数（相对于最左侧，偏移后不占用原位置）。
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <ui-row>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" :offset="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</ui-col>
            <ui-col :span="4" :offset="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-12</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" :offset="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-2</ui-col>
            <ui-col :span="9" :offset="7" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-9 offset-7</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" :offset="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-12</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
        </ui-row>
    </ui-grid>
    :::
    
    :::vue
    @name:栅格列位移
    ---
    #demo
    >desc
    通过`push` / `pull`配置来标记栅格的位移，位移相对于栅格列当前的位置。
    <br>
    其中`push`可以将栅格向右位移，`pull`可以将栅格向左位移。
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <ui-row>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" :push="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 push-6</ui-col>
            <ui-col :span="4" :pull="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 pull-4</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="16" :push="8" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-16 push-8</ui-col>
            <ui-col :span="8" :pull="16" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-8 pull-16</ui-col>
        </ui-row>
    </ui-grid>
    ---
    #demo
    >desc
    `栅格列位移`和`栅格列偏移`的区别为，`栅格列位移`相对于当前列位置偏移，偏移后仍占用原位置(影响后面的栅格)。<br>而`栅格列偏移`则从最左侧开始偏移，且偏移后不占用原位置。
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <ui-row>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" :offset="8" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-4 offset-8</ui-col>
            <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-4</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" :push="8" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-4 push-8</ui-col>
            <ui-col :span="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col-4</ui-col>
        </ui-row>
    </ui-grid>
    :::

    :::vue
    @name:栅格列垂直对齐
    ---
    #demo
    >desc
    在栅格行`<ui-row>`中配置`vertical-align`可以实现行内列的垂直对齐方式：
    <br><br>
    - `vertical-align="top"` : 向上对齐(默认)
    - `vertical-align="bottom"` : 向下对齐
    - `vertical-align="center"` : 居中对齐
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <ui-row equal-width vertical-align="top" style="height:120px;background-color:#EDF1F5">
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 80px;">col</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 120px;">col</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 40px;">col</ui-col>
        </ui-row>
        <ui-row equal-width vertical-align="bottom" style="height:120px;background-color:#EDF1F5">
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 80px;">col</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 120px;">col</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 40px;">col</ui-col>
        </ui-row>
        <ui-row equal-width vertical-align="center" style="height:120px;background-color:#EDF1F5">
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 80px;">col</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 120px;">col</ui-col>
            <ui-col style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;
    height: 40px;">col</ui-col>
        </ui-row>
    </ui-grid>
    :::

    :::vue
    @name:无间隔栅格
    ---
    #demo
    >desc
    `gutter-size="none"`配置可以使栅格之间无间隔。
    >tpl
    <ui-grid gutter-size="none" style="background-color: #EDF1F5">
        <ui-row>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="9" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-9</ui-col>
            <ui-col :span="15" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-15</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" :offset="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</ui-col>
            <ui-col :span="4" :offset="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-12</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" :push="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 push-6</ui-col>
            <ui-col :span="4" :pull="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 pull-4</ui-col>
        </ui-row>
    </ui-grid>
    :::

    :::vue
    @name:两端包含空隙栅格
    ---
    #demo
    >desc
    `space-around`配置可以使栅格两端也有空隙。
    >tpl
    <ui-grid space-around style="background-color: #EDF1F5">
        <ui-row>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="9" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-9</ui-col>
            <ui-col :span="15" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-15</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" :offset="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</ui-col>
            <ui-col :span="4" :offset="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" :push="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 push-6</ui-col>
            <ui-col :span="4" :pull="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 pull-4</ui-col>
        </ui-row>
    </ui-grid>
    :::

    :::vue
    @name:栅格空隙尺寸
    ---
    #demo
    >desc
    栅格支持多种尺寸的空隙，详见：[`gutter-size`配置](#gutter-size)
    >tpl
    <div>
        <ui-grid gutter-size="xs" style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            </ui-row>
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
        </ui-grid>

        <br><br>

        <ui-grid gutter-size="s" style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            </ui-row>
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
        </ui-grid>

        <br><br>

        <ui-grid gutter-size="m" style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            </ui-row>
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
        </ui-grid>

        <br><br>

        <ui-grid gutter-size="l" style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
            <ui-row>
                <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>
                <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>
            </ui-row>
        </ui-grid>

        <br><br>

        <ui-grid gutter-size="xl" style="background-color: #EDF1F5;overflow-y: auto;">
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
            <ui-row>
                <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>
                <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>
            </ui-row>
        </ui-grid>

        <br><br>

        <ui-grid gutter-size="none" style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            </ui-row>
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
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
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
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
    使用时通过`xs`、`s`、`m`、`l`、`xl`配置来设置对应的`span`、`offset`、`push`、`pull`。
    >tpl
    <ui-grid style="background-color: #EDF1F5">
        <ui-row>
            <ui-col :xs="{span:2}" :s="{span:4}" :m="{span:6}" :l="{span:8}" :xl="{span:10}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>
            <ui-col :s="{span:16}" :m="{span:12}" :l="{span:8}" :xl="{span:4}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>
            <ui-col :xs="{span:2}" :s="{span:4}" :m="{span:6}" :l="{span:8}" :xl="{span:10}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>
        </ui-row>
    </ui-grid>
    ---
    #demo
    >desc
    `col`、`offset`、`push`、`pull`配置配合使用。
    >tpl
    <div>
        <ui-grid style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :xs="{span:2}" :s="{span:4}" :m="{span:6}" :l="{span:8}" :xl="{span:10}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>
                <ui-col :xs="{span:20}" :s="{span:16}" :m="{span:12}" :l="{span:8}" :xl="{span:4}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>
                <ui-col :xs="{span:2}" :s="{span:4}" :m="{span:6}" :l="{span:8}" :xl="{span:10}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>
            </ui-row>
        </ui-grid>

        <br>

        <ui-grid style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :xs="{span:20, offset:2}" :s="{span:16, offset:4}" :m="{span:12, offset:6}" :l="{span:8, offset:8}" :xl="{span:4, offset:10}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>
            </ui-row>
        </ui-grid>

        <br>

        <ui-grid style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :xs="{span:20, push:2}" :s="{span:16, push:4}" :m="{span:12, push:6}" :l="{span:8, push:8}" :xl="{span:4, push:10}" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">col</ui-col>
            </ui-row>
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

    <a href="/guide/status.html">查看形态文档</a> / <a href="/design/color.html">查看色彩文档</a>

    [[[配置]]]

    :::vue
    @name:space-around
    ---
    #config
    >conf-desc
    栅格的两端是否有空隙。
    >conf-accept
    `true`<br>`false`
    >conf-type
    Boolean
    >conf-default
    `false`
    ---
    #demo
    >desc
    `space-around`配置可以使栅格两端也有空隙。
    >tpl
    <ui-grid space-around style="background-color: #EDF1F5">
        <ui-row>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="9" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-9</ui-col>
            <ui-col :span="15" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-15</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" :offset="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</ui-col>
            <ui-col :span="4" :offset="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 offset-4</ui-col>
        </ui-row>
        <ui-row>
            <ui-col :span="4" :push="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 push-6</ui-col>
            <ui-col :span="4" :pull="4" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-4 pull-4</ui-col>
        </ui-row>
    </ui-grid>
    :::

    :::vue
    @name:gutter-size
    ---
    #config
    >conf-desc
    栅格空隙的尺寸。
    <br><br>
    - `xs` : `4px`的水平和垂直空隙(默认)
    - `s` : `8px`的水平和垂直空隙
    - `m` : `16px`的水平和垂直空隙
    - `l` : `24px`的水平和垂直空隙
    - `xl` : `36px`的水平和垂直空隙
    - `none` : 无水平和垂直空隙
    >conf-accept
    `'xs'`<br>`'s'`<br>`'m'`<br>`'l'`<br>`'xl'`
    >conf-type
    String
    >conf-default
    `'m'`
    ---
    #demo
    >tpl
    <div>
        <ui-grid gutter-size="xs" style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            </ui-row>
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
        </ui-grid>

        <br><br>

        <ui-grid gutter-size="s" style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            </ui-row>
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
        </ui-grid>

        <br><br>

        <ui-grid gutter-size="m" style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            </ui-row>
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
        </ui-grid>

        <br><br>

        <ui-grid gutter-size="l" style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
            <ui-row>
                <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>
                <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>
            </ui-row>
        </ui-grid>

        <br><br>

        <ui-grid gutter-size="xl" style="background-color: #EDF1F5;overflow-y: auto;">
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
            <ui-row>
                <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>
                <ui-col :span="12" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-12</ui-col>
            </ui-row>
        </ui-grid>

        <br><br>

        <ui-grid gutter-size="none" style="background-color: #EDF1F5">
            <ui-row>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
                <ui-col :span="2" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-2</ui-col>
            </ui-row>
            <ui-row>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
                <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
            </ui-row>
        </ui-grid>
    </div>
    :::
    
    [[[方法]]]
    
    <h1>暂无</h1>

    [[[事件]]]

    :::vue
    @layout:lifecycle-event
    ---
    grid
    栅格
    <ui-row>
        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">c-6</ui-col>
        <ui-col :span="6" style="background-color:#D6DDE5;padding: 1em 0.6em;font-size:12px;">{*text*}</ui-col>
    </ui-row>
    :::

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
