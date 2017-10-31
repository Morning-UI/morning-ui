<template>
    <i-lead
        :_uiid="uiid"
        :class="[styleClass, stateClass]"
    >
        <slot></slot>
    </i-lead>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'lead'
});
</script>

<style lang="less" src="./index.less"></style>
