<template>
    <mor-ul
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </mor-ul>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'ul'
};
</script>

<style lang="less" src="./index.less"></style>
