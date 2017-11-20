<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    
    # 提交代码

    Morning UI的协作开发基于Git的分支。

    ### Git分支

    Morning UI的分支分为：

    - `master` : 正式版本发布的分支。
    - `dev` : 主开发分支，所有开发完毕但未发布的功能都会先合并至此。
    - `issue_[id]` : Issue开发分支，所有正在开发中的功能代码都会被提交至此分支。

    当你从一个issue开始，开发代码，提交代码到版本发布分为以下几个步骤：

    1. 标记Issue : 找到Issue，将Assignees指向你，并添加`in progress`标签，表示你正在开发中。
    2. 新建分支 : 从`dev`分支切出一个新的分支`issue_[id]`，其中id是issue的编号。
    3. 提交代码 : 将开发代码提交到这个分支上。
    4. Pull Request : 当所有开发完成之后，发起一个新的Pull Request来将代码合并到`dev`。
    5. 合入主开发分支 : 当Pull Request完成后，代码会被自动合入主开发分支`dev`。
    6. 版本发布 : 当一个版本下的所有Issue代码都被合入`dev`后，这些改动会被合入master，并添加版本tag，代码被正式发布。

    下面的内容将会进一步说明提交代码每一步需要做什么及注意的事项。

    ### 标记Issue

    找到你想要处理的Issue，在标记之前请先确保此Issue未处于以下任何一个状态：

    - `need repro` : 需要提供更多信息复现内容，以确认问题
    - `pending` : 处于待定的Issue
    - `wont solve` : 暂时不回解决的Issue
    - `in progress` : 已经有人在处理
    - `in review` : 正在Code Review的Issue
    - `launched` : 已解决并发布的Issue
    - `discussion` : 这是一个讨论

    一般你可以选择处于下面这些状态切没有指定Assignees的Issue：

    - `bug confirmed` : 已经确认的Bug
    - `intend to solve` : 计划解决
    - `feature request` : 功能请求
    - `bug report` : BUG报告

    若一个Issue被指定了Assignees，请先和那个人商量到底由谁来处理。

    针对上面四个标签的Issue，在开始着手处理前，你需要添加一些额外的标记来告示别人你开始处理了：

    1. 首先将Assignees指向你自己
    2. 根据不同的标签做不同的处理：
        - `bug confirmed` : 添加`in progress`
        - `intend to solve` : 添加`in progress`，并移除`intend to solve`
        - `feature request` : 添加`in progress`/`feature`，并移除`feature request`
        - `bug report` : 首先先确认BUG是存在的：
            - 复现条件不足：请添加`need repro`标签
            - 确认不是BUG：关闭Issue
            - 可被复现：添加`bug confirmed`/`in progress`/`fix`，并移除`bug report`。若你只想确认这个BUG不想修复，也可以不添加`in progress`/`fix`。

    完成上面的操作后，你需要创建一个新的分支来处理Issue。

    > 注意：目前新增功能、优化代码、更新逻辑等处理都被认为是`feature`。

    ### 新建分支

    在你的本地项目中切换到`dev`分支：`git checkout dev`，然后执行`git pull`确保代码库是最新的。

    接下来为要处理的Issue新建一个名为`issue-[Issue ID]`的分支，其中`[Issue ID]`替换成Git上的Issue ID，你可以在下面的地方找到：

    <img src="https://h0.hucdn.com/open/201743/9498878cf00b0e68_922x180.png" width="300" alt="">

    注意不需要加上`#`，比如上图中的Issue你需要执行：`git checkout -b issue-1`。

    接下来就可以正式编码了。

    ### 提交代码

    当你完成改动后，使用`git add`和`git commit`命令提交你的改动，请在提交前确保处在正确的分支上。

    `git commit`的信息请确保是可以描述你改动的一句话，避免使用无意义的提交信息，比如：`update`等。

    然后通过`git push`将代码推送到Github，首次推送新分支时需要使用`git push --set-upstream origin [分支名]`。

    ### Pull Request
    
    当你完成了所有的编码工作，前往：`https://github.com/Morning-UI/morning-ui/pulls`，点击`New pull request`：

    <img src="https://h0.hucdn.com/open/201743/7e973819a866761f_2010x240.png" alt="" width="700">

    然后`base`选择`dev`，`compare`选择你的分支，然后你可以看到：

    <img src="https://h0.hucdn.com/open/201743/5e4e7f5309fbc627_1708x456.png" alt="" width="600">

    > 若显示无法自动合并分支，请先在本地处理完冲突的改动。

    点击`Create pull request`：

    <img src="https://h0.hucdn.com/open/201743/7ad9a3006740642f_1988x828.png" alt="" width="600">
    
    按照上面的示例，写清楚你改动的内容及注意事项，指定贡献者为你Code Review。或者也可以添加`Request Review`标签让其他贡献者为你Code Review。

    若Review中存在问题你们可在`pull request`下面进行讨论，当进行Code Review的贡献者通过后，会增加`Accept Pull Request`的标签，接下来项目管理员会对代码进行合并。

    关于Reviwe详见：[指出问题及沟通](/guide/review.html#指出问题及沟通)

    ### 合入主开发分支
    
    当你的`pull request`满足下面的条件：

    - 可被自动合并
    - 通过Code Review并有`Accept Pull Request`标签
    - 通过持续集成

    项目管理员会将你的代码合并至主开发分支。

    ### 版本发布

    当项目管理员合并完版本中的所有`pull request`之后，会将主开发分支代码合入`master`。然后发布版本。

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'commitcode'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
