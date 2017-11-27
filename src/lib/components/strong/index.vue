<template>
    <mor-strong
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-strong>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'strong'
};
</script>

<style lang="less" src="./index.less"></style>
