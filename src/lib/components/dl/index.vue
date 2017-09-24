<template>
    <i-dl
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-dl>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'dl'
});
</script>

<style lang="less" src="./index.less"></style>
