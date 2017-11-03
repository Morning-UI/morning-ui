<template>
    <i-label
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"
    >
        <slot></slot>
    </i-label>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'label'
};
</script>

<style lang="less" src="./index.less"></style>
