<template>
    <i-itemlist
        :_uiid="uiid"
        :class="[sizeClass]"
    >
        <slot></slot>
    </i-itemlist>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'itemlist'
};
</script>

<style lang="less" src="./index.less"></style>
