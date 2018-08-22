<template>
    <mor-h
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass]"
    >
        <slot></slot>
    </mor-h>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'h'
};
</script>

<style lang="less" src="./index.less"></style>
