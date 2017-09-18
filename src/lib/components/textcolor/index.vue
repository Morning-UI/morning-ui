<template>
    <i-textcolor
        :_uiid="uiid"
        :class="[styleClass]"
    >
        <slot></slot>
    </i-textcolor>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'textcolor'
});
</script>

<style lang="less" src="index.less"></style>
