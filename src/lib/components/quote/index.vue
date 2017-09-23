<template>
    <i-quote
        :_uiid="uiid"
        :class="[styleClass]"
    >
        <slot></slot>
    </i-quote>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'quote'
});
</script>

<style lang="less" src="./index.less"></style>
