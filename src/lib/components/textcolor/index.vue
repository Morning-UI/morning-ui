<template>
    <i-textcolor
        :_uiid="uiid"
        :class="[styleClass]"
    >
        <slot></slot>
    </i-textcolor>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'textcolor'
};
</script>

<style lang="less" src="./index.less"></style>
