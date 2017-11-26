<template>
    <mor-textleft
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-textleft>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'textleft'
};
</script>

<style lang="less" src="./index.less"></style>
