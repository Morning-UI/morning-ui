<template>
    <i-badge
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass]"
    >
        <slot></slot>
    </i-badge>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'badge'
};
</script>

<style lang="less" src="./index.less"></style>
