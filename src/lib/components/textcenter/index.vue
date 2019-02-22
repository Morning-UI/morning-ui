<template>
    <mor-textcenter
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-textcenter>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'textcenter'
};
</script>
