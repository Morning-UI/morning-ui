<template>
    <i-itemlist
        :_uiid="uiid"
        :class="[sizeClass]"
    >
        <slot></slot>
    </i-itemlist>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'itemlist'
});
</script>

<style lang="less" src="index.less"></style>
