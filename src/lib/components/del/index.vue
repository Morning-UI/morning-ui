<template>
    <mor-del
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-del>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'del'
};
</script>

<style lang="less" src="./index.less"></style>
