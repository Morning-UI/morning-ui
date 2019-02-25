<template>
    <mor-capitalize
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-capitalize>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'capitalize'
};
</script>
