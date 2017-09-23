<template>
    <i-article
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-article>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'article'
});
</script>

<style lang="less" src="./index.less"></style>
