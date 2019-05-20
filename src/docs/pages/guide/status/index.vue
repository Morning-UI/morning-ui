<template>

    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">

    # 形态

    形态是一种通用的组件属性，用来改变组件的外观，有一套全局的规范。所有组件都可以支持形态，不同的组件会根据实际情况支持。

    目前形态包含三类：`尺寸`、`色彩`、`状态`。

    每一个形态都是配置，你可以像下面这样使用：

    ```html
    <!-- 使用XL尺寸的ui-btn组件 -->
    <ui-btn size="xl"></ui-btn>
    ```

    不同类型的形态可以在同一组件上使用：

    ```html
    <!-- 使用XL尺寸，危险色彩，加载状态的ui-btn组件 -->
    <ui-btn size="xl" color="danger" state="loading"></ui-btn>
    ```

    但是同一类型的形态只能使用一个。

    ## 尺寸

    组件的大小，包含：
    
    - `xxl` : 超大
    - `xl` : 大
    - `l` : 较大
    - `m` : 中
    - `s` : 较小
    - `xs` : 小
    - `xxs` : 超小

    组件会根据实际情况支持其中的部分尺寸(至少支持一种)，大部分组件的默认尺寸都是`m`。

    ## 色彩

    色彩指定了组件采用的配色，常见的色彩包含：`主题色`、`功能色`、`辅助色`，完整的色彩名称及色值可在[设计/色彩](/design/color.html)中查看。

    在组件文档的`形态`标签中可查看组件支持的色彩，对于支持的色彩可通过组件的`color`配置来设置，比如：

    :::vue
    @name:通过`color`设置组件的色彩
    ---
    #demo
    >tpl
    <div>
        <ui-btn color="black">设置黑色的按钮</ui-btn>
        <ui-btn color="neutral-6">设置中性色6的按钮</ui-btn>
    </div>
    :::

    在非组件的样式中也建议使用Morning UI的配色来达到视觉效果的一致。在组件外使用这些颜色，可以使用以下方式：

    - 通过CSS类，请查看：[配色](/component/uniformcolor.html)
    - 使用色值，请查看：[设计/色彩](/design/color.html)

    ## 状态

    组件当前的状态，包括：

    - `normal` : 正常状态 
    - `hover` : Hover状态
    - `active` : 激活状态
    - `disabled` : 禁用状态
    - `readonly` : 只读状态
    - `apparent` : 醒目状态

    组件会根据实际情况支持其中的部分状态(至少支持一种)，大部分组件的默认状态都是`normal`。

    #### `disabled`和`readonly`的区别
    
    组件`disabled`后无法在UI层面修改表单值，也无法通过`set`方法设置表单值。但`readonly`仅在UI层面无法修改表单值，仍可以通过`set`或组件其他方法设置表单值。

    </script>
    </doc-guide>

</template>

<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'status'
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
        color: #FFF;
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
