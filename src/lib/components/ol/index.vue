<template>
    <i-ol
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-ol>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'ol'
};
</script>

<style lang="less" src="./index.less"></style>
