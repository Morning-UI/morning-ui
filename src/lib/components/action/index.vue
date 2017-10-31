<template>
    <i-action
        :_uiid="uiid"
        :class="[sizeClass, styleClass]"
    >
        <slot></slot>
    </i-action>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'action'
});
</script>

<style lang="less" src="./index.less"></style>
