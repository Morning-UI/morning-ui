<template>
    <div>
        <doc-header :menu="name"></doc-header>
    </div>
</template>
 
<script>
import DocHeader                    from 'Docs/common/DocHeader.vue';

export default {
    data : function () {

        console.log(1);

        return {
            name : 'home'
        };

    },
    components : {
        'doc-header' : DocHeader
    }
};
</script>

<style lang="less">
</style>
