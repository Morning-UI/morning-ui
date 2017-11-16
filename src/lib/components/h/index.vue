<template>
    <i-h
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass]"
    >
        <slot></slot>
    </i-h>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'h'
};
</script>

<style lang="less" src="./index.less"></style>