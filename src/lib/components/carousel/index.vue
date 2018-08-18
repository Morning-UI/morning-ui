<template>
    <mor-carousel
        :_uiid="uiid"
        :class="[]"
    >
        
    </mor-carousel>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'carousel',
    props : {},
    computed : {
        _conf : function () {

            return {};

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {},
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>