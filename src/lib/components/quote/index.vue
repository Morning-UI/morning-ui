<template>
    <i-quote
        :_uiid="uiid"
        :class="[styleClass]"
    >
        <slot></slot>
    </i-quote>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'quote'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-quote{
    display:block;
    padding: 0 1em;
    border-left-style: solid;
    border-left-width: 4px;
    
    .setup-font-color-theme();
    .setup-font-color-feature();
    .setup-font-color-misc();

    &{
        .sy-lightBlue;
    }

}
</style>
