<template>
    <mor-grid
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-grid>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'grid'
};
</script>
