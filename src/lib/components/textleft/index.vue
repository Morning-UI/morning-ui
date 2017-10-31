<template>
    <i-textleft
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-textleft>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'textleft'
});
</script>

<style lang="less" src="./index.less"></style>
