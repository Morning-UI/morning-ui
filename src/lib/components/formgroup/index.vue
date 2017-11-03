<template>
    <i-formgroup
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-formgroup>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'formgroup'
};
</script>

<style lang="less" src="./index.less"></style>
