<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 反馈问题

    MorningUI采用Github Issue管理反馈的问题，如果你在使用过程中发现Bug或希望支持新的功能，可以通过[Github Issue](https://github.com/Morning-UI/morning-ui/issues)提出。

    点击`New Issue`按钮，你可以根据诉求选择对应的Issue预设模板：

    <img src="http://h0.hucdn.com/open/201820/42e498c6beb2478f_1590x444.png" alt="" width="600">

    也可以点击`Open a regular issue`来创建一个无模板的Issue。
    
    ## Issue模板

    为了便于开发者快速了解你的诉求，我们建议Issue请按照以下模板填写：

    #### BUG报告

    ```
    __问题__

    一个清楚简洁的问题描述。

    __环境__

    - Morning UI版本：填写你使用的Morning UI版本
    - 浏览器：填写你使用的浏览器及版本
    - 你也可以填写更多环境特征

    __重现步骤__

    1. Go to '...'
    2. Click on '....'
    3. Scroll down to '....'
    4. See error

    __期望的结果__

    清晰和简洁的描述你预期会发生什么，如果可以请添加屏幕截图。

    __实际的结果__

    清晰和简洁的描述实际发生了什么，如果可以请添加屏幕截图。

    __其他__

    填写更多你想阐述的内容。
    ```
        
    #### 功能请求

    ```
    __解决了什么__

    清晰简洁的说明这个功能解决了什么问题。

    __你的解决方案__

    如果你已经有一个解决思路了，清晰简洁地描述一下。

    __你考虑过的选择__

    你已经考虑的任何替代解决方案或功能的清晰简洁的描述。

    __其他__

    填写更多你想阐述的内容。
    ```

    填写完毕后，请根据问题的类型添加对应的标签：

    - bug report : BUG报告
    - feature request : 功能请求

    ## 跟踪进展

    当你通过Issue反馈问题后，MorningUI的开发者会对Issue添加标签，你可以根据标签的情况了解进展：

    - need repro : 需要提供更多的复现内容
    - pending : 待定
    - wont solve : 暂时不会解决
    - bug confirmed : 报告的bug被开发者确认
    - intend to solve : 计划解决
    - in progress : 解决中
    - in review : 审查中
    - launched : 已解决并发布

    ## 其他

    除了反馈问题外，还会有一些讨论或开发性质的Issue：

    - important : 重要
    - discussion : 讨论
    - document : 文档相关
    - feature : 新功能开发
    - fix : 修复开发

    </script>
    </doc-guide>
</template>
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'report'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
