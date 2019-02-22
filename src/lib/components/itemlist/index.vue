<template>
    <mor-itemlist
        :_uiid="uiid"
        :class="[sizeClass]"
    >
        <slot></slot>
    </mor-itemlist>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'itemlist'
};
</script>
