<template>
    <mor-small
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-small>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'small'
};
</script>

<style lang="less" src="./index.less"></style>
