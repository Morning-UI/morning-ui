<template>
    <i-lowercase
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-lowercase>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'lowercase'
});
</script>

<style lang="less" src="./index.less"></style>
