
<template>
    <i-u
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-u>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'u'
};
</script>

<style lang="less" src="./index.less"></style>
