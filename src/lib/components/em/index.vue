<template>
    <mor-em
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-em>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'em'
};
</script>
