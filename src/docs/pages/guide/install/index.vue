<template>
    <doc-guide
        :page="page"
    >
        install
    </doc-guide>
</template>
 
<script>
import DocGuide                    from 'Docs/common/DocGuide.vue';

export default {
    data : function () {

        return {
            page : 'install'
        };

    },
    components : {
        'doc-guide' : DocGuide
    }
};
</script>

<style lang="less">
</style>
