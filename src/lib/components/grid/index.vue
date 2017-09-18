<template>
    <i-grid
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-grid>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'grid'
});
</script>

<style lang="less" src="index.less"></style>
