<template>
    <i-quote
        :_uiid="uiid"
        :class="[styleClass]"
    >
        <slot></slot>
    </i-quote>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'quote'
};
</script>

<style lang="less" src="./index.less"></style>
