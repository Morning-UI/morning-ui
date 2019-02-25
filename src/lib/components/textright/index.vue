<template>
    <mor-textright
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-textright>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'textright'
};
</script>
