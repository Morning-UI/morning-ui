<template>
    <i-textright
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-textright>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'textright'
};
</script>

<style lang="less" src="./index.less"></style>
