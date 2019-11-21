<template>
    <mor-grid
        :_uiid="uiid"
        :class="[moreClass]"

        :space-around="spaceAround"
        :gutter-size="gutterSize"
    >
        <slot></slot>
    </mor-grid>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'grid',
    props : {
        spaceAround : {
            type : Boolean,
            default : false
        },
        gutterSize : {
            type : String,
            default : 'm',
            validator : (value => ['xl', 'l', 'm', 's', 'xs', 'none'].indexOf(value) !== -1)
        }
    },
    computed : {
        _conf : function () {

            return {
                spaceAround : this.spaceAround,
                gutterSize : this.gutterSize
            };

        },
        moreClass : function () {

            let classes = {};

            classes[`gutter-${this.conf.gutterSize}`] = true;

            if (this.conf.spaceAround) {

                classes[`space-around`] = true;

            }

            return classes;

        }
    },
};
</script>
