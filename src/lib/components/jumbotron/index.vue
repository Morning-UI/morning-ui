<template>
    <i-jumbotron
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-jumbotron>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'jumbotron'
});
</script>

<style lang="less">
@import '~Common/var.less';

i-jumbotron{
    display: block;
    padding: @fontSize*1.3;
    border-radius: @borderRadius;
    overflow: hidden;
    background-color:#FFF;

    h1{
        font-size: @fontSize*3.6 !important;
        margin: 0 0 0.4em !important;
        padding: 0 !important;
        border-bottom: 0 none !important;
    }
    p{
        color: lighten(@colorBlack, 50%) !important;
        font-size: @fontSize !important;
        margin: @fontSize*0.9 0 @fontSize*1.3 0;
    }

    // default statement
    &{}

}
</style>
