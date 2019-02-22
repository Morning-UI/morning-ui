<template>
    <mor-mark
        :_uiid="uiid"
        :class="[colorClass, stateClass]"
    >
        <slot></slot>
    </mor-mark>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'mark'
};
</script>
