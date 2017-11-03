<template>
    <i-uppercase
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-uppercase>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'uppercase'
};
</script>

<style lang="less" src="./index.less"></style>
