<template>
    <i-img
        :_uiid="uiid"
        :class="[]"
    >
    <img
        :src="src"
        :width="width"
        :height="height"
        :alt="alt"
        :title="title"
    />
    <p class="note">
        <slot></slot>
    </p>
    </i-img>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'img',
    props : {
        src : String,
        width : String,
        height : String,
        alt : String,
        title : String
    }
});
</script>

<style lang="less">
@import '~Common/common.less';

i-img{
    display: inline-block;
    position: relative;

    img{
        border: 0 none;
        vertical-align: middle;
    }

    .note{
        margin: 0 !important;
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        padding: 5px;
        font-size: 0.75*@fontSize;
        background-color: rgba(0, 0, 0, .6);
        color: #ddd;
        box-sizing: border-box;
        line-height: 1.4em;
        &:empty{
            display: none;
        }
    }

    &.rounded{
        border-radius: @borderRadius;
        overflow: hidden;
    }
    &.circle{
        border-radius: 50%;
        overflow: hidden;
    }
    &.thumbnail{
        border-radius: @borderRadius;
        padding: 0.4*@fontSize;
        overflow: hidden;
        border: 1px solid @colorGray;
    }

    // default statement
    &{}

}
</style>
