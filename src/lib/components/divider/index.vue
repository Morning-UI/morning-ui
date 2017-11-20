<template>
    <i-divider
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-divider>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'divider'
};
</script>

<style lang="less" src="./index.less"></style>
