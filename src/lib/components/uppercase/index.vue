<template>
    <mor-uppercase
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-uppercase>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'uppercase'
};
</script>

<style lang="less" src="./index.less"></style>
