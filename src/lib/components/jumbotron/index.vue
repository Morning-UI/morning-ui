<template>
    <mor-jumbotron
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-jumbotron>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'jumbotron'
};
</script>

<style lang="less" src="./index.less"></style>
