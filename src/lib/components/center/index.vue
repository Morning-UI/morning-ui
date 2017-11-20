<template>
    <i-center
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-center>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'center'
};
</script>

<style lang="less" src="./index.less"></style>
