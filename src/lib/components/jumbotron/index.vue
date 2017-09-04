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
    padding: 1.3*@fontSize;
    border-radius: @borderRadius;
    overflow: hidden;
    background-color:#fff;

    h1{
        font-size: 3.6*@fontSize !important;
        margin: 0 0 0.4em 0 !important;
        padding: 0 !important;
        border-bottom: 0 none !important;
    }
    p{
        color: lighten(@colorBlack, 50%) !important;
        font-size: @fontSize !important;
        margin: 0.9*@fontSize 0 1.3*@fontSize 0;
    }

    // default statement
    &{}

}
</style>
