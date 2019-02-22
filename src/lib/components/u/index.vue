<template>
    <mor-u
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-u>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'u'
};
</script>
