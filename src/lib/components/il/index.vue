<template>
    <mor-il
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </mor-il>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'il'
};
</script>
