<template>
    <i-box
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-box>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'box'
});
</script>

<style lang="less" src="index.less"></style>
