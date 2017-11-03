<template>
    <i-ul
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-ul>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'ul'
};
</script>

<style lang="less" src="./index.less"></style>
