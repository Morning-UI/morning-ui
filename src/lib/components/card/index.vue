<template>
    <i-card
        :_uiid="uiid"
        :class="[styleClass]"
    >
        <slot></slot>
    </i-card>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'card'
});
</script>

<style lang="less" src="./index.less"></style>
