<template>
    <mor-box
        :_uiid="uiid"
        :class="[moreClass]"

        :margin="margin"
        :height-fill="heightFill"
    >
        <slot></slot>
    </mor-box>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'box',
    props : {
        margin : {
            type : Boolean,
            default : false
        },
        heightFill : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                margin : this.margin,
                heightFill : this.heightFill
            };

        },
        moreClass : function () {

            return {
                margin : this.conf.margin,
                fill : this.conf.heightFill
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
