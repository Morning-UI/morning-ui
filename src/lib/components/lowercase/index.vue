<template>
    <i-lowercase
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-lowercase>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'lowercase'
};
</script>

<style lang="less" src="./index.less"></style>
