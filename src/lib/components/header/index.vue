<template>
    <i-header
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"
    >
        <slot></slot>
    </i-header>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'header'
});
</script>

<style lang="less" src="index.less"></style>
