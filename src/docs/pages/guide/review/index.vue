<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 检视代码(Review)

    Review其他开发者贡献的代码也是一项非常重要的工作，带来的价值和贡献代码是一致的。

    ### 成为一名Code Reviewer

    请发送邮件至`earlyhe0@gmail.com`。

    ### 请求Review

    当你开发并提交需要贡献的代码后，请在`Pull Request`中发起一个新的合并请求，合并的源分支是你的贡献分支，目标分支是`dev`。

    在你的合并请求创建时，请添加`Request Review`标签。这个标签表示你的合并请求需要Review，你可以在`Reviewers`中指定特定的人来为你Review，否则将由任意贡献者为你Review代码。

    详见：[Requesting a pull request review](https://help.github.com/articles/requesting-a-pull-request-review/)

    > `dev`是项目的主开发分支，所有的贡献最终都会合并至此。最终由项目管理员通过版本发布的形式将代码提交至`master`分支。

    ### 申请Review别人的代码

    打开`Pull Request`页面，筛选出包含`Request Review`标签的合并请求，然后：

    - 如果这个请求指定了`Reviewers`，并且不是你：请交给指定的人来Review，跳过这个合并请求
    - 如果这个请求指定了`Reviewers`，并且是你：请打开这个合并请求，然后开始Review
    - 如果这个请求没有指定`Reviewers`：打开它，然后将`Reviewers`改成你，然后开始Review

    > 一个合并请求的`Reviewers`表明了当前正在Review的人是谁。

    请务必逐条确认以上的事项，经过你Review的文档未来将会开发者指明方向。

    ### 检视变更

    Review需要耐心和细心，除了代码内容外，提交的文档、测试等内容也是Review的重点。

    请务必确保`Pull Request`中的变更符合[开发规范](/guide/devrule.html)，经过你Review的代码未来将会构建成千上万的应用。

    ### 指出问题及沟通

    你可以在有问题的代码上开启一个`Review`，指出你的疑问或纠正错误。代码贡献者需要会在这个`Review`上和你沟通，直到达成一致。
    
    详见：
    
    - [About pull request reviews](https://help.github.com/articles/about-pull-request-reviews/)
    - [Reviewing proposed changes in a pull request](https://help.github.com/articles/reviewing-proposed-changes-in-a-pull-request/)
    - [Viewing a pull request review](https://help.github.com/articles/viewing-a-pull-request-review/)
    - [Approving a pull request with required reviews](https://help.github.com/articles/approving-a-pull-request-with-required-reviews/)
    - [Dismissing a pull request review](https://help.github.com/articles/dismissing-a-pull-request-review/)
    - [Checking out pull requests locally](https://help.github.com/articles/checking-out-pull-requests-locally/)

    ### 持续集成

    持续集成中包含了很多自动化的检查，如果一个合并请求未通过持续集成，请通知代码贡献者。在持续集成通过后再开始Review。

    ### 允许合并

    当所有的`Review`都达成一致后，且通过持续集成，这个合并请求可被合并。添加`Accept Pull Request`标签并移除`Request Review
 `标签，恭喜你完成了一次代码Review贡献。后续会有项目管理员对代码进行合并。

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
