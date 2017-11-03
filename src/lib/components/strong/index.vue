<template>
    <i-strong
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-strong>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'strong'
};
</script>

<style lang="less" src="./index.less"></style>
