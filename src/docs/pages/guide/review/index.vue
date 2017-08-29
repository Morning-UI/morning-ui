<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 检视代码(Review)

    Review其他开发者贡献的代码也是一项非常重要的工作，带来的价值和贡献代码是一致的。

    ### 标记请求Review

    当你开发并提交需要贡献的代码后，请在`Merge Request`中发起一个新的合并请求，合并的源分支是你的贡献分支，目标分支是`dev`。

    在你的合并请求创建时，请添加`Request Review`标签。这个标签表示你的合并请求需要Review，你可以在`Assignee`中指定特定的人来为你Review，否则将由第一个申请的贡献者为你Review代码。

    > `dev`是项目的主开发分支，所有的贡献最终都会合并至此。最终由项目管理员通过版本发布的形式将代码提交至`master`分支。

    ### 申请Review

    打开`Merge Request`页面，筛选出包含`Request Review`标签的合并请求，然后：

    - 如果这个请求指定了`Assignee`，并且不是你：请交给指定的人来Review，跳过这个合并请求
    - 如果这个请求指定了`Assignee`，并且是你：请打开这个合并请求，然后开始Review
    - 如果这个请求没有指定`Assignee`：打开它，然后将`Assignee`改成你，然后开始Review

    > 一个合并请求的`Assignee`表明了当前正在Review的人是谁。

    ### Review代码注意事项

    Review代码需要一定的耐心和经验，我们为你整理了一份注意事项：
    
    - class中正确的绑定了支持的声明
    - 支持slot的组件，代码中加入了slot
    - 组件`i-*`标签正确
    - 从上至下template、script、style三个区域
    - style注明了`lang="less"`
    - 引入了正确的基类(UI/Form)
    - 组件name正确
    - 引入了`common.less`
    - 支持声明的情况下，加入了声明的样式
    - 设置了默认声明样式
    - 通过ESLint

    请务必逐条确认以上的事项，经过你Review的代码未来将会构建成千上完的应用。

    ### Review文档注意事项

    文档的重要性和代码一样，一份糟糕的文档会浪费使用者不必要的时间，我们为你整理了一份关于文档的注意事项：

    - 组件标题及tag正确
    - 组件介绍跟在基础后面，清晰明白
    - “使用”示例最简单，如需要可补充示例说明
    - 声明注明支持情况
    - 支持的声明均有每一种值的示例，且示例遵循最小化原则，如需要可补充示例说明
    - 文档page正确

    ### 持续集成

    持续集成中包含了很多自动化的检查，如果一个合并请求未通过持续集成，请通知代码贡献者。在持续集成通过后再开始Review。

    ### 指出问题及沟通

    你可以在有问题的代码上开启一个`Discussion`，指出你的疑问或纠正错误。代码贡献者需要会在这个`Discussion`上和你沟通，当你们达成一致后，请点击`Resolve discussion`，这表示这个`Discussion`已经被解决。

    ### 允许合并

    当所有的`Discussion`都被解决后，且通过持续集成，这个合并请求可被合并。点击绿色的`Accept Merge Request`按钮合并代码，恭喜你完成了一次代码Review贡献。

    > 合并前请务必确认目标分支是`dev`，否则通知代码贡献者修改合并请求。
    
    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'review'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
