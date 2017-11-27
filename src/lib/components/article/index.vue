<template>
    <mor-article
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </mor-article>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'article'
};
</script>

<style lang="less" src="./index.less"></style>
