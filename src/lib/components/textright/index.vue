<template>
    <i-textright
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-textright>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'textright'
});
</script>

<style lang="less" src="index.less"></style>
