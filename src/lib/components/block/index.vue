<template>
    <i-block
        :_uiid="uiid"
        :class="[styleClass]"
    >
        <slot></slot>
    </i-block>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'block'
};
</script>

<style lang="less" src="./index.less"></style>
