<template>
    <i-action
        :_uiid="uiid"
        :class="[sizeClass, styleClass]"
    >
        <slot></slot>
    </i-action>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'action'
};
</script>

<style lang="less" src="./index.less"></style>
