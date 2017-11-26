<template>
    <mor-card
        :_uiid="uiid"
        :class="[colorClass]"
    >
        <slot></slot>
    </mor-card>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'card'
};
</script>

<style lang="less" src="./index.less"></style>
