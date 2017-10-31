<template>
    <i-divider
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-divider>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'divider'
});
</script>

<style lang="less" src="./index.less"></style>
