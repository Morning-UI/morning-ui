<template>
    <mor-statistic
        :_uiid="uiid"
        :class="[sizeClass, colorClass, stateClass]"
    >
        <slot></slot>
    </mor-statistic>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'statistic'
};
</script>

<style lang="less" src="./index.less"></style>
