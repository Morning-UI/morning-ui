<template>
    <i-label
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"
    >
        <slot></slot>
    </i-label>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'label'
});
</script>

<style lang="less" src="./index.less"></style>
