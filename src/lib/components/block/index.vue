<template>
    <i-block
        :_uiid="uiid"
        :class="[styleClass]"
    >
        <slot></slot>
    </i-block>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'block'
});
</script>

<style lang="less" src="index.less"></style>
