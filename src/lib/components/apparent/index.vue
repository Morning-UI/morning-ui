<template>
    <mor-apparent
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </mor-apparent>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'apparent'
};
</script>

<style lang="less" src="./index.less"></style>
