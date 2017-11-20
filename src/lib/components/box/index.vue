<template>
    <i-box
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-box>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'box'
};
</script>

<style lang="less" src="./index.less"></style>
