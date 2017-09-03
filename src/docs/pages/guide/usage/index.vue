<template>
    <doc-guide
        :page="page"
    >
        usage
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'usage'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
