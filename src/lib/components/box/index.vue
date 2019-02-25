<template>
    <mor-box
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-box>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'box'
};
</script>
