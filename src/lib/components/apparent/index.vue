<template>
    <i-apparent
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-apparent>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'apparent'
};
</script>

<style lang="less" src="./index.less"></style>
