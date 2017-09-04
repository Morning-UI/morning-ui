<template>
    <i-textcolor
        :_uiid="uiid"
        :class="[styleClass]"
    >
        <slot></slot>
    </i-textcolor>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'textcolor'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-textcolor{
    display: inline;

    .setup-font-color-theme();
    .setup-font-color-feature();
    .setup-font-color-misc();

    // default statement
    &{
        .sy-theme;
    }

}
</style>
