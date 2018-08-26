<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="customize" style="width:1130px">
        </div>
        <doc-footer></doc-footer>
    </div>
</template>
 
<script>
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocFooter                    from 'Docs/common/DocFooter.vue';

export default {
    data : function () {

        return {
            category : 'customize'
        };

    },
    components : {
        'doc-header' : DocHeader,
        'doc-footer' : DocFooter
    },
    methods : {},
    mounted : function () {
    }
};
</script>

<style lang="less">
@import '~Docs/common/common.less';

</style>
