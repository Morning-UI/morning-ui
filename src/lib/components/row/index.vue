<template>
    <div
        :_uiid="uiid"

        class="row"
    >
        <slot></slot>
    </div>
</template>
 
<script>
export default {
    origin : 'Element',
    name : 'row',
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
    mounted : function () {},
    destroyed : function () {}
};
</script>
