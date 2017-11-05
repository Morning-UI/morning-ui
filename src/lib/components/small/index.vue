<template>
    <i-small
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-small>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'small'
};
</script>

<style lang="less" src="./index.less"></style>
