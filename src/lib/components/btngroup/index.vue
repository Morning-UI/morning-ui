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

<style lang="less">
@import '~Common/var.less';

@btnGap: 2px;

i-btngroup{

    display: inline-block;
    font-size: 0;
    vertical-align: middle;
    position: relative;

    i-btn{
        &:not(:first-child):not(:last-child){ border-radius: 0; }
    }

    &.vertical{
        >i-btn{
            display: block;
            float: none;

            margin-bottom:1px;
        }

        :first-child{
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        :last-child{
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            margin-bottom: 0;
        }
    }
    
    &:not(.vertical),&.horizontal{
        >i-btn{
            margin-right: 1px;
        }

        :first-child{
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        :last-child{
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            margin-right: 0;
        }
    }

    >span {
          display: inline-block;
          position: absolute;
          z-index:3;
          background-color: #fff;
          border-radius: 100%;
          text-align: center;
          // position: relative;
          // left: 50%;
          // top: 50%;
          color: @colorExtraLightBlue;
          // transform: translateX(-50%) translateY(-50%);
    }

    i-btn.si-xxl {
        +span {
            font-size: 1.25*@fontSize;
            width: 2*@fontSize;
            height: 2*@fontSize;
            line-height: 2*@fontSize;
            margin-left: -2*@fontSize/2;
            margin-top: 0.68067*@fontSize;
        }
    }

    i-btn.si-xl {
        +span {
            font-size: 1.125*@fontSize;
            width: 1.8*@fontSize;
            height: 1.8*@fontSize;
            line-height: 1.8*@fontSize;
            margin-left: -1.8*@fontSize/2;
            margin-top: 0.5249*@fontSize;
        }
    }
    
    i-btn.si-l {
        +span {
            font-size: @fontSize;
            width: 1.6*@fontSize;
            height: 1.6*@fontSize;
            line-height: 1.6*@fontSize;
            margin-left: -1.6*@fontSize/2;
            margin-top: 0.48144*@fontSize;
        }
    }

    i-btn, i-btn.si-m {
        +span {
            font-size: 0.75*@fontSize;
            width: 2em;
            height: 2em;
            line-height: 2em;
            margin-left: ~"calc(-1em - " @btnGap  ~")";
            margin-top: -1em;
            top: 50%;
        }
    }

    i-btn.si-s {
        +span {
            font-size: 0.625*@fontSize;
            width: 1.2*@fontSize;
            height: 1.2*@fontSize;
            margin-left: -1.2*@fontSize/2;
            line-height: 1.2*@fontSize;
            margin-top: 0.25*@fontSize;
        }
    }

    i-btn.si-xs {
        +span {
            font-size: 0.625*@fontSize;
            width: 1*@fontSize;
            height: 1*@fontSize;
            line-height: 1*@fontSize;
            margin-left: -1*@fontSize/2;
            margin-top: 0.1875*@fontSize;
        }
    }

    i-btn.si-xxs {
        +span {
            font-size: 0.625*@fontSize;
            width: 1*@fontSize;
            height: 1*@fontSize;
            line-height: 1*@fontSize;
            margin-left: -1*@fontSize/2;
            margin-top: 0.125*@fontSize;
        }
    }

    &.split {
        >i-btn{
            padding-right: 1.5em;
            padding-left: 1.5em;
            margin-right: 2*@btnGap;
        }
    }

    &.nogap{
        >i-btn{ margin-right: 0; }

        &.vertical>i-btn{
            margin-bottom: 0;
        }
    }

    // default statement
    &{}

}
</style>
