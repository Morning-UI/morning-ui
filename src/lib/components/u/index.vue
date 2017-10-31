
<template>
    <i-u
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-u>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'u'
});
</script>

<style lang="less" src="./index.less"></style>
