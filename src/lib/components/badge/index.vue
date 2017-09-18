<template>
    <i-badge
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"
    >
        <slot></slot>
    </i-badge>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'badge'
});
</script>

<style lang="less" src="index.less"></style>
