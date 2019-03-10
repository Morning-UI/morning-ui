<template>
    <mor-badge
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass, moreClass]"

        :type="type"
        :count="count"
        :max-show="maxShow"
    >
        <slot v-if="conf.type === 'normal'"></slot>
        <span v-else-if="conf.type === 'counter'">
            <template v-if="conf.count <= conf.maxShow">
                {{conf.count}}
            </template>
            <template v-else>
                {{conf.maxShow}}+
            </template>
        </span>
        <span v-else-if="conf.type === 'point'"></span>
    </mor-badge>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'badge',
    props : {
        type : {
            type : String,
            default : 'normal',
            validator : (value => ['normal', 'counter', 'point'].indexOf(value) !== -1)
        },
        count : {
            type : Number,
            default : 0
        },
        maxShow : {
            type : Number,
            default : 99
        }
    },
    computed : {
        _conf : function () {

            return {
                type : this.type,
                count : this.count,
                maxShow : this.maxShow
            };

        },
        moreClass : function () {

            let classes = {
                'badge-point' : (this.conf.type === 'point')
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
