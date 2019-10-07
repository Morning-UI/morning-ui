<template>
    <mor-label
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass]"

        :closable="closable"
    >
        <slot></slot>
        <i
            class="mo-icon mo-icon-close close-icon"
            v-if="conf.closable"
            @click="close(index)"
        ></i>
    </mor-label>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'label',
    props : {
        closable : {
            type : Boolean,
            default : false
        }
    },
    computed : {
        _conf : function () {

            return {
                closable : this.closable
            };

        }
    },
    data : function () {

        return {
            data : {}
        };

    },
    methods : {
        close : function () {

            this.$emit('closed');
            this.$destroy();

            return this;

        }
    },
    mounted : function () {

    }
};
</script>
