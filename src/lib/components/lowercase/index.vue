<template>
    <mor-lowercase
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-lowercase>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'lowercase'
};
</script>
