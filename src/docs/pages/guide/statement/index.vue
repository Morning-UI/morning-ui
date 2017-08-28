<template>

    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">

    # 声明

    声明是一种通用的组件属性，有一套全局的规范，组件必须支持所有类型的声明，但是组件可以根据实际情况支持声明中部分值（至少一个）。

    目前声明包含三类：`尺寸`、`色彩`、`状态`。

    每一个声明都是HTML标签的一种属性，你可以像下面这样使用：

    ```html
    <!-- 使用XL尺寸的ui-btn组件 -->
    <ui-btn xl></ui-btn>
    ```

    不同类型的声明可以在同一组件上使用：

    ```html
    <!-- 使用XL尺寸，危险色彩，加载状态的ui-btn组件 -->
    <ui-btn xl danger loading></ui-btn>
    ```

    但是同一类型的声明只能使用一个，如果同时使用只会生效一个：

    ```html
    <!-- 同时定义两种尺寸，只有一种尺寸会生效 -->
    <ui-btn xxs xxl></ui-btn>

    <!-- 同时定义两种色彩，只有一种色彩会生效 -->
    <ui-btn danger success></ui-btn>
    ```

    ### 尺寸

    尺寸声明了组件的大小，包含：
    
    - `xxl` : 超大
    - `xl` : 大
    - `l` : 较大
    - `m` : 中
    - `s` : 较小
    - `xs` : 小
    - `xxs` : 超小

    组件会根据实际情况支持其中的部分尺寸(至少支持一种)，大部分组件的默认尺寸都是`m`。

    ### 颜色

    颜色声明了组件的配色，包含：`主题色`、`功能色`、`辅助色`。

    #### 主题色

    UI的主色彩，Morning默认采用红色，使用者可以自己定义主题色。

    <div class="colorFlex">
        <div class="item w3" style="background:#f86f88;">
            <p class="key">light-theme</p>
            <p class="name">浅主题色</p>
            <p class="color">#f86f88</p>
        </div>
        <div class="item w3" style="background:#f33d5d;">
            <p class="key">theme</p>
            <p class="name">主题色</p>
            <p class="color">#f33d5d</p>
        </div>
        <div class="item w3" style="background:#d22343;">
            <p class="key">dark-theme</p>
            <p class="name">深主题色</p>
            <p class="color">#d22343</p>
        </div>
    </div>

    #### 功能色

    功能色具有一定的含义，可以用在特定的场景，比如绿色表示成功，黄色表示警告。

    <div class="colorFlex">
        <div class="item w3" style="background:#23c455;">
            <p class="key">success</p>
            <p class="name">成功/正确</p>
            <p class="color">#23c455</p>
        </div>
        <div class="item w3" style="background:#f1a437;">
            <p class="key">warning</p>
            <p class="name">警告/注意</p>
            <p class="color">#f1a437</p>
        </div>
        <div class="item w3" style="background:#eb0e23;">
            <p class="key">danger</p>
            <p class="name">错误/危险</p>
            <p class="color">#eb0e23</p>
        </div>
    </div>
    
    <div class="colorFlex">
        <div class="item w3" style="background:#2185d0;">
            <p class="key">primary</p>
            <p class="name">主要/关键</p>
            <p class="color">#2185d0</p>
        </div>
        <div class="item w3" style="background:#a9a9a9;">
            <p class="key">minor</p>
            <p class="name">次要/不醒目</p>
            <p class="color">#a9a9a9</p>
        </div>
        <div class="item w3" style="background:#03a6b9;">
            <p class="key">info</p>
            <p class="name">信息/额外</p>
            <p class="color">#03a6b9</p>
        </div>
    </div>

    #### 辅助色

    用于边框、背景、文本等场景。辅助色具有一定色阶，可用来表现层次。

    <div class="colorFlex">
        <div class="item w4 group">
            <div class="item" style="background:#17212d">
                <p class="key">black</p>
                <p class="name">黑色</p>
                <p class="color">#17212d</p>
            </div>
            <div class="item" style="background:#303c4b">
                <p class="key">light-black</p>
                <p class="name">浅黑色</p>
                <p class="color">#303c4b</p>
            </div>
            <div class="item" style="background:#45505c">
                <p class="key">extra-light-black</p>
                <p class="name">超浅黑色</p>
                <p class="color">#45505c</p>
            </div>
        </div>
        <div class="item w4 group">
            <div class="item" style="background:#7c8ba0">
                <p class="key">blue</p>
                <p class="name">青色</p>
                <p class="color">#7c8ba0</p>
            </div>
            <div class="item" style="background:#8e9caf">
                <p class="key">light-blue</p>
                <p class="name">浅青色</p>
                <p class="color">#8e9caf</p>
            </div>
            <div class="item" style="background:#a8b3c2">
                <p class="key">extra-light-blue</p>
                <p class="name">超浅青色</p>
                <p class="color">#a8b3c2</p>
            </div>
        </div>
        <div class="item w4 group colorDark">
            <div class="item" style="background:#d6dde5">
                <p class="key">silver</p>
                <p class="name">银色</p>
                <p class="color">#d6dde5</p>
            </div>
            <div class="item" style="background:#e2e8ee">
                <p class="key">light-silver</p>
                <p class="name">浅银色</p>
                <p class="color">#e2e8ee</p>
            </div>
            <div class="item" style="background:#edf1f5">
                <p class="key">extra-light-silver</p>
                <p class="name">超浅银色</p>
                <p class="color">#edf1f5</p>
            </div>
        </div>
        <div class="item w4 group colorDark">
            <div class="item" style="background:#e6e6e6">
                <p class="key">gray</p>
                <p class="name">灰色</p>
                <p class="color">#e6e6e6</p>
            </div>
            <div class="item" style="background:#f0f0f0">
                <p class="key">light-gray</p>
                <p class="name">浅灰色</p>
                <p class="color">#f0f0f0</p>
            </div>
            <div class="item" style="background:#fff">
                <p class="key">white</p>
                <p class="name">白色</p>
                <p class="color">#ffffff</p>
            </div>
        </div>
    </div>

    ### 状态

    声明了组件当前的状态，包括：

    - `normal` : 正常状态 
    - `hover` : Hover状态
    - `active` : 激活状态
    - `disabled` : 禁用状态
    - `apparent` : 明显状态
    - `loading` : 载入中
    - `processing` : 处理中
    
    `loading`和`processing`的区别是，`loading`在等待远程处理的状态，`processing`一般用于本地处理。

    组件会根据实际情况支持其中的部分状态(至少支持一种)，大部分组件的默认状态都是`normal`。

    </script>
    </doc-guide>

</template>

<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'statement'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
.colorFlex{
    display: flex;
    justify-content: space-evenly;
    margin: 5px 0;

    .item{
        color: #fff;
        padding: 20px;
        box-sizing: border-box;

        &.colorDark{
            color: #000;
        }

        p{
            margin: 2px 0;
            font-size: 13px;

            &.color{
                text-transform: uppercase;
            }
        }
    }

    .group{
        padding: 0;

        &.colorDark{
            .item {
                color: #000;
            }
        }
    }

    .w3{
        width: 31%;
    }

    .w4{
        width: 23%;
    }
}
</style>
