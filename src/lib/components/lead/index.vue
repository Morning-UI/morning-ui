<template>
    <mor-lead
        :_uiid="uiid"
        :class="[colorClass, stateClass]"
    >
        <slot></slot>
    </mor-lead>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'lead'
};
</script>

<style lang="less" src="./index.less"></style>
