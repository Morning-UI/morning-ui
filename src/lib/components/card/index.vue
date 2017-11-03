<template>
    <i-card
        :_uiid="uiid"
        :class="[styleClass]"
    >
        <slot></slot>
    </i-card>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'card'
};
</script>

<style lang="less" src="./index.less"></style>
