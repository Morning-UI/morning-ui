<template>
    <mor-center
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-center>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'center'
};
</script>
