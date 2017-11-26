<template>
    <mor-block
        :_uiid="uiid"
        :class="[colorClass]"
    >
        <slot></slot>
    </mor-block>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'block'
};
</script>

<style lang="less" src="./index.less"></style>
