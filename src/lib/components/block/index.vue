<template>
    <mor-block
        :_uiid="uiid"
        :class="[colorClass, moreClass]"

        :no-padding="noPadding"
    >
        <slot></slot>
    </mor-block>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'block',
    props : {
        noPadding : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                noPadding : this.noPadding
            };

        },
        moreClass : function () {

            return {
                full : this.conf.noPadding
            }

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
