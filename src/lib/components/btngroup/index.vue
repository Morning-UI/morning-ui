<template>
    <i-btngroup
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-btngroup>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'btngroup'
});
</script>

<style lang="less" src="./index.less"></style>
