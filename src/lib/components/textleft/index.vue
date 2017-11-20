<template>
    <i-textleft
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-textleft>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'textleft'
};
</script>

<style lang="less" src="./index.less"></style>
