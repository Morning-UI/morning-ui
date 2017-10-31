<template>
    <i-ul
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-ul>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'ul'
});
</script>

<style lang="less" src="./index.less"></style>
