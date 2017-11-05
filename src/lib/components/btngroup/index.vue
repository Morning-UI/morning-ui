<template>
    <i-btngroup
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-btngroup>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'btngroup'
};
</script>

<style lang="less" src="./index.less"></style>
