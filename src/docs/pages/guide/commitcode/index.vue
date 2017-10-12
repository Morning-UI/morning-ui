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

    ### 新建分支

    ### 提交代码

    ### Pull Request

    ### 合入主开发分支

    ### 版本发布


    当一个版本中的所有功能都完成，会将此分支合并到master，并打上tag发布。
    当你需要根据某个issue开发时，需要切换到此分支。


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
