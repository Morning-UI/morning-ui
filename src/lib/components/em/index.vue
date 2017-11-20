<template>
    <i-em
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-em>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'em'
};
</script>

<style lang="less" src="./index.less"></style>
