<template>
    <mor-formgroup
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-formgroup>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'formgroup'
};
</script>

<style lang="less" src="./index.less"></style>
