<template>
    <i-article
        :_uiid="uiid"
        :class="[]"
    >
        <slot></slot>
    </i-article>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'article'
});
</script>

<style lang="less">
@import '~Common/common.less';

i-article{
    display: block;
    line-height: 1.8em;

    .title{
        font-size: 2*@fontSize;
        font-weight: bold;
        margin-bottom: 0.3em;
        line-height: 1.2em;
    }

    .meta{
        font-size: 0.8*@fontSize;
        color: @colorExtraLightBlue;
        margin-bottom: 0.7em;
        line-height: 1.6em;

        &.underline{
            padding-bottom: 0.7em;
            margin-top: -0.2em;
            border-bottom: 1px @colorGray solid;
        }
    }

    .lead{
        font-size: 1.4*@fontSize;
        line-height: 1.4em;
        margin-bottom: 0.4em;
    }

    .body{
        font-size: 0.875*@fontSize;
        line-height: 1.4em;
        color: @colorLightBlack; //lighten(@colorLightBlack, 30%);

        p{
            margin: 0.5em 0;
        }
    }

    // default statement
    &{}

}
</style>
