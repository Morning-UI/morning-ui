<template>
    <mor-center
        :_uiid="uiid"
        :class="[moreClass]"

        :height-fill="heightFill"
    >
        <slot></slot>
    </mor-center>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'center',
    props : {
        heightFill : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                heightFill : this.heightFill
            };

        },
        moreClass : function () {

            return {
                fill : this.conf.heightFill
            };

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
