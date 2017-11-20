<template>
    <i-statistic
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass]"
    >
        <slot></slot>
    </i-statistic>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'statistic'
};
</script>

<style lang="less" src="./index.less"></style>
