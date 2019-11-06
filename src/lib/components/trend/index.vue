<template>
    <mor-trend
        :_uiid="uiid"
        :class="[sizeClass, moreClass]"

        :trend="trend"
        :text-color="textColor"
        :reverse="reverse"
    >
        <div class="trend-wrap">
            <slot></slot>
            <i class="mo-icon mo-icon-arrow-up" v-if="conf.trend === '+'"></i>
            <i class="mo-icon mo-icon-arrow-down" v-if="conf.trend === '-'"></i>
        </div>
    </mor-trend>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'trend',
    props : {
        trend : {
            type : String,
            default : '+',
            validator : (value => ['+', '-'].indexOf(value) !== -1)
        },
        textColor : {
            type : Boolean,
            default : false
        },
        reverse : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                trend : this.trend,
                textColor : this.textColor,
                reverse : this.reverse
            };

        },
        moreClass : function () {

            let classes = {
                'trend-up' : (this.conf.trend === '+'),
                'trend-down' : (this.conf.trend === '-'),
                'text-color' : this.conf.textColor,
                'reverse-color' : this.conf.reverse
            };

            return classes;

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
