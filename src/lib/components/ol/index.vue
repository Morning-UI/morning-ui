<template>
    <i-ol
        :_uiid="uiid"
        :class="[stateClass]"
    >
        <slot></slot>
    </i-ol>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'ol'
});
</script>

<style lang="less" src="./index.less"></style>
