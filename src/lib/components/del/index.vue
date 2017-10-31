<template>
    <i-del
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-del>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'del'
});
</script>

<style lang="less" src="./index.less"></style>
