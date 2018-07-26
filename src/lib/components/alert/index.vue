<template>
    <mor-alert
        :_uiid="uiid"
        :class="[]"
    >
        
    </mor-alert>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'alert',
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