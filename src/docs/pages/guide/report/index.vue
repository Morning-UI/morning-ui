<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 反馈问题

    MorningUI采用Github Issue管理反馈的问题，如果你在使用过程中发现Bug或希望支持新的功能，可以通过[Github Issue](https://github.com/EarlyH/morning-ui/issues)提出。

    为了便于开发者快速了解你的诉求，Issue请按照以下模板填写：

    #### BUG报告

    ```
    ### 问题类型

    BUG报告
    
    ### 版本

    (如果是BUG报告需要填写出现问题的版本)

    ### 问题

    (如果是BUG报告需要填写)
    
    ### 复现环境及步骤

    (如果是BUG报告需要填写)

    ### 期望的时间

    (填写BUG解决或功能支持的期望时间)

    ### 其他

    (填写更多你想阐述的内容)

    ```
        
    #### 功能请求

    ```
    ### 问题类型

    功能请求
    
    ### 功能描述

    (如果是功能请求需要填写)

    ### 解决了什么问题

    (如果是功能请求需要填写)

    ### 期望的时间

    (填写BUG解决或功能支持的期望时间)

    ### 其他

    (填写更多你想阐述的内容)

    ```

    填写完毕后，请根据问题的类型添加对应的标签：

    - bug report : BUG报告
    - feature request : 功能请求

    ### 跟踪进展

    当你通过Issue反馈问题后，MorningUI的开发者会对Issue添加标签，你可以根据标签的情况了解进展：

    - need repro : 需要提供更多的复现内容
    - pending : 待定
    - wont solve : 暂时不会解决
    - bug confirmed : 报告的bug被开发者确认
    - intend to solve : 计划解决
    - in progress : 解决中
    - in review : 审查中
    - launched : 已解决并发布

    ### 其他

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
