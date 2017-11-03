<template>
    <i-il
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-il>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'il'
};
</script>

<style lang="less" src="./index.less"></style>
