<template>
    <mor-textcolor
        :_uiid="uiid"
        :class="[colorClass]"
    >
        <slot></slot>
    </mor-textcolor>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'textcolor'
};
</script>

<style lang="less" src="./index.less"></style>
