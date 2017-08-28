<template>
    <doc-body
        :category="category"
        v-bind="$props"
    >
        <slot></slot>
    </doc-body>
</template>
 
<script>
import DocBody                      from 'Docs/common/DocBody.vue';

export default {
    props : {
        page : String,
        hasPadding : Boolean,
        content : String
    },
    data : function () {

        return {
            category : 'component'
        };

    },
    components : {
        'doc-body' : DocBody
    }
};
</script>

<style lang="less">
</style>
