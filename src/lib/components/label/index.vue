<template>
    <mor-label
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass]"
    >
        <slot></slot>
    </mor-label>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'label'
};
</script>

<style lang="less" src="./index.less"></style>
