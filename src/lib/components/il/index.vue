<template>
    <i-il
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-il>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'il'
});
</script>

<style lang="less" src="./index.less"></style>
