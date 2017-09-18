<template>
    <i-center
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-center>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'center'
});
</script>

<style lang="less" src="index.less"></style>
