<template>
    <i-apparent
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-apparent>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'apparent'
});
</script>

<style lang="less" src="./index.less"></style>
