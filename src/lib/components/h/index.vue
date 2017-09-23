<template>
    <i-h
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"
    >
        <slot></slot>
    </i-h>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'h'
});
</script>

<style lang="less" src="./index.less"></style>
