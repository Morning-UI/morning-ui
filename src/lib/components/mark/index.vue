<template>
    <i-mark
        :_uiid="uiid"
        :class="[styleClass, stateClass]"
    >
        <slot></slot>
    </i-mark>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'mark'
};
</script>

<style lang="less" src="./index.less"></style>
