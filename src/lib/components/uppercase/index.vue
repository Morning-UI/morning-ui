<template>
    <i-uppercase
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-uppercase>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'uppercase'
});
</script>

<style lang="less" src="./index.less"></style>
