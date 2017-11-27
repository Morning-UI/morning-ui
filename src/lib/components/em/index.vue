<template>
    <mor-em
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-em>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'em'
};
</script>

<style lang="less" src="./index.less"></style>
