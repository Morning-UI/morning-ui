<template>
    <mor-tree
        :_uiid="uiid"
        :class="[]"
    >
    </mor-tree>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'tree',
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
    created : function () {},
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>
