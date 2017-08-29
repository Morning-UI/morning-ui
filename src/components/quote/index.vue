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
@import '~Common/common.less';

i-quote{
    display:block;
    padding: 0 1em;
    border-left-style: solid;
    border-left-width: 4px;
    
    .setup-font-color-thmem();
    .setup-font-color-feature();
    .setup-font-color-misc();

    &{
        .sy-light-blue;
    }

}
</style>
