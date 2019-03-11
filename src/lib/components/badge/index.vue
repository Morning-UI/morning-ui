<template>
    <mor-badge
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass, moreClass]"

        :type="type"
        :count="count"
        :max-show="maxShow"
        :attach="attach"
    >
        <slot v-if="conf.type === 'normal' || conf.type === 'icon'"></slot>
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
const maxShowDefault = 99;

export default {
    origin : 'UI',
    name : 'badge',
    props : {
        type : {
            type : String,
            default : 'normal',
            validator : (value => ['normal', 'counter', 'point', 'icon'].indexOf(value) !== -1)
        },
        count : {
            type : Number,
            default : 0
        },
        maxShow : {
            type : Number,
            default : maxShowDefault
        },
        attach : {
            type : [Boolean, String],
            default : false,
            validator : (value => (value === false || ['left-top', 'left-bottom', 'right-top', 'right-bottom'].indexOf(value) !== -1))
        }
    },
    computed : {
        _conf : function () {

            return {
                type : this.type,
                count : this.count,
                maxShow : this.maxShow,
                attach : this.attach
            };

        },
        moreClass : function () {

            let classes = {
                'badge-point' : (this.conf.type === 'point'),
                'badge-icon' : (this.conf.type === 'icon')
            };

            if (this.conf.attach) {

                classes[`badge-attach-${this.conf.attach}`] = true;

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
    mounted : function () {}
};
</script>
