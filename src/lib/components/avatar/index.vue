<template>
    <mor-avatar
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass]"
    >      
        <div class="wrap">
            <slot></slot> 
        </div>
    </mor-avatar>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'avatar',
    props : {},
    computed : {
        _conf : function () {

            return {};

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
