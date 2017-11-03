<template>
    <i-article
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-article>
</template>
 
<script>
export default {
    origin : 'UI',
    name : 'article'
};
</script>

<style lang="less" src="./index.less"></style>
