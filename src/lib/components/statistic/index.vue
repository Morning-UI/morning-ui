<template>
    <i-statistic
        :_uiid="uiid"
        :class="[sizeClass, styleClass, stateClass]"
    >
        <slot></slot>
    </i-statistic>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'statistic'
});
</script>

<style lang="less" src="./index.less"></style>
