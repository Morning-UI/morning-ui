<template>
    <i-header
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass]"
    >
        <slot></slot>
    </i-header>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'header'
};
</script>

<style lang="less" src="./index.less"></style>
