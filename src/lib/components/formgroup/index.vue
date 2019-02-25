<template>
    <mor-formgroup
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-formgroup>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'formgroup'
};
</script>
