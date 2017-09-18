<template>
    <i-mark
        :_uiid="uiid"
        :class="[styleClass, stateClass]"
    >
        <slot></slot>
    </i-mark>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'mark'
});
</script>

<style lang="less" src="index.less"></style>
