<template>
    <doc-guide
        :page="page"
        :hasPadding="true" 
    >
    <script type="text/markdown">
    # 致谢

    ## 开源项目

    MorningUI受到以下优秀开源项目的启发：
    
    - Semantic UI [https://semantic-ui.com/](https://semantic-ui.com/)
    - Bootstrap [http://getbootstrap.com/](http://getbootstrap.com/)
    - Element [http://element.eleme.io/](http://element.eleme.io/)
    - Material-UI [https://material-ui-next.com/](https://material-ui-next.com/)
    - Ant Design [https://ant.design/](https://ant.design/)
    - iView [https://www.iviewui.com/](https://www.iviewui.com/)

    在此向这些项目致敬。

    ## Vue.js

    MorningUI基于[Vue.js](https://vuejs.org/)开发，在此感谢。

    ## HmpUI贡献者

    MorningUI的诞生离不开HmpUI，在此感谢曾为HmpUI付出贡献的开发者：

    - 冯春艳(chunyan.feng@husor.com)
    - 杜金金(jinjin.du@husor.com)
    - 赵朋(peng.zhao@husor.com)
    - 干有银(youyin.gan@husor.com)
    - 张桠鑫(yaxin.zhang@husor.com)
    - 段俊杰(junjie.duan@husor.com)
    - 童颖(ying.tong@husor.com)
    - 朱双龙(shuanglong.zhu@husor.com)

    ## MorningUI贡献者

    - Early(earlyhe0@gmail.com) <ui-textcolor color="minor"><ui-small>Coding/Review</ui-small></ui-textcolor>
    - pwq309(pwq309@126.com) <ui-textcolor color="minor"><ui-small>Coding</ui-small></ui-textcolor>
    - echoZQ <ui-textcolor color="minor"><ui-small>Document</ui-small></ui-textcolor>
    - CFDylan <ui-textcolor color="minor"><ui-small>Document</ui-small></ui-textcolor>
    - 青蛙kimo(49420671@qq.com) <ui-textcolor color="minor"><ui-small>Designer</ui-small></ui-textcolor>
    - 仉长娟(changjuan.zhang@beibei.com) <ui-textcolor color="minor"><ui-small>Designer</ui-small></ui-textcolor>

    如果你感兴趣，欢迎加入我们，查看[如何成为一名贡献者](/guide/becontributor.html)

    </script>
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'thank'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
