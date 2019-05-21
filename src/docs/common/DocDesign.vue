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
        hasPadding : Boolean
    },
    data : function () {

        return {
            category : 'design'
        };

    },
    components : {
        'doc-body' : DocBody
    }
};
</script>

<style lang="less">
.example{
    font-size: 0;

    > p{
        font-size: 14px;
        display: inline-block;
        vertical-align: top;
        width: 10%;
    }

    > img{
        padding: 15px;
        border-radius: 3px;
    }
}

img{
    padding: 15px;
    border-radius: 3px;
}
</style>
