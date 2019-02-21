<template>
    <mor-textleft
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-textleft>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'textleft'
};
</script>
