<template>
    <mor-badge
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass]"
    >
        <slot></slot>
    </mor-badge>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'badge'
};
</script>
