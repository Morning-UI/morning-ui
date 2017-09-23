<template>
    <i-strong
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-strong>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'strong'
});
</script>

<style lang="less" src="./index.less"></style>
