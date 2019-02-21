<template>
    <mor-lead
        :_uiid="uiid"
        :class="[colorClass, stateClass]"
    >
        <slot></slot>
    </mor-lead>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'lead'
};
</script>
