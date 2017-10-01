<template>
    <i-formgroup
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-formgroup>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'formgroup'
});
</script>

<style lang="less" src="./index.less"></style>
