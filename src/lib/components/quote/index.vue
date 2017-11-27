<template>
    <mor-quote
        :_uiid="uiid"
        :class="[colorClass]"
    >
        <slot></slot>
    </mor-quote>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'quote'
};
</script>

<style lang="less" src="./index.less"></style>
