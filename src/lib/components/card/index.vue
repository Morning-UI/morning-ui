<template>
    <mor-card
        :_uiid="uiid"
        :class="[colorClass, moreClass]"

        :no-padding="noPadding"
        :inside-padding="insidePadding"
    >
        <div class="card-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
        <div class="card-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </mor-card>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'card',
    props : {
        noPadding : {
            type : Boolean,
            default : false
        },
        insidePadding : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                noPadding : this.noPadding,
                insidePadding : this.insidePadding
            };

        },
        moreClass : function () {

            return {
                full : this.conf.noPadding,
                'inside-padding' : this.conf.insidePadding
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
