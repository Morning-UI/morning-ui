<template>
    <mor-action
        :_uiid="uiid"
        :class="[sizeClass, colorClass]"
    >
        <slot></slot>
    </mor-action>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'action'
};
</script>
