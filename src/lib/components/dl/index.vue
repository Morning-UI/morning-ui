<template>
    <i-dl
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-dl>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'dl'
};
</script>

<style lang="less" src="./index.less"></style>
