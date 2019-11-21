<template>
    <div
        :_uiid="uiid"
        :class="[moreClass]"
        class="row"

        :equal-width="equalWidth"
        :vertical-align="verticalAlign"
    >
        <slot></slot>
    </div>
</template>
 
<script>
export default {
    origin : 'Element',
    name : 'row',
    props : {
        equalWidth : {
            type : Boolean,
            default : false
        },
        verticalAlign : {
            type : String,
            default : 'top',
            validator : (value => ['top', 'bottom', 'center'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                equalWidth : this.equalWidth,
                verticalAlign : this.verticalAlign
            };

        },
        moreClass : function () {

            let classes = {};

            if (this.conf.equalWidth > 0) {

                classes['equal-width'] = true;
                classes[`vertical-${this.conf.verticalAlign}`] = true;

            }

            return classes;

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
