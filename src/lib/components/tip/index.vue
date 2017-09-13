<template>
    <i-tip
        :_uiid="uiid"
        :class="[styleClass]"

        :target="target"
        :placement="placement"
        :offset="offset"
        :trigger="trigger"
    >
    
    <div class="tipArrow"></div>
    <div class="tipContent"><slot></slot></div>
        
    </i-tip>
</template>
 
<script>
import UI                           from 'Common/ui';
import PopupManager                 from 'Utils/PopupManager';

export default UI.extend({
    name : 'tip',
    mixins : [PopupManager],
    props : {
        target : {
            type : [String, Object],
            default : null
        },
        placement : {
            type : String,
            default : 'top'
        },
        offset : {
            type : String,
            default : '0 0'
        },
        trigger : {
            type : String,
            default : 'hover'
        }
    },
    data : function () {

        return {
            conf : {
                target : this.target,
                placement : this.placement,
                offset : this.offset,
                trigger : this.trigger
            },
            data : {
                $target : null,
                // trigger : {
                //     click : 'click',
                //     hover : 'hover',
                //     foucs : 'foucs'
                // }
            }
        };

    },
    methods : {
        _setListeners : function () {

            let triggers = this.conf.trigger.split(' ');

            for (let trigger of triggers) {

                if (trigger === 'click') {

                    this.data.$target.addEventListener('click', this.toggle);

                } else if (trigger === 'hover') {

                    this.data.$target.addEventListener('mouseenter', this._enter);
                    this.data.$target.addEventListener('mouseleave', this._leave);

                } else if (trigger === 'foucs') {

                    this.data.$target.addEventListener('focusin', this._enter);
                    this.data.$target.addEventListener('focusout', this._leave);

                }

            }

        },
        _enter : function (ev) {

            // if (self._isEventObj(ev)){
            //     self._activeTrigger[ev.type === 'focusin' ? self.trigger.focus : self.trigger.hover] = true;
            // }

            // if (self.$tip.hasClass(self.classNames.in) || (self._hoverState === self.hoverState.in)) {
            //     self._hoverState = self.hoverState.in;
            //     return;
            // }

            // clearTimeout(self._timeout);
            // self._hoverState = self.hoverState.in;

            // self._timeout = setTimeout(() => {
            //     if (self._hoverState === self.hoverState.in) {
            //         self.show();
            //     }
            // }, self.delay.show);

        }
    },
    mounted : function () {

        let $target;

        try {

            $target = document.querySelector(this.conf.target);
        
        } catch (e) {}

        if (!$target) {

            return;

        }

        this.data.$target = $target;

        this._setListeners();

    }
});
</script>

<style lang="less">
@import '~Common/var.less';

@tipArrowWidth : 5px;

.tipStyle(@background; @color; @style) {
    &.sy-@{style} {
        .tipContent {
            color: @color;
            background-color: @background;
        }

        &.sy-@{style}.tipBottom {
            .tipArrow {
                border-top-color: @background;
            }
        }

        &.sy-@{style}.tipTop {
            .tipArrow {
                border-bottom-color: @background;
            }
        }   

        &.sy-@{style}.tipLeft {
            .tipArrow {
                border-right-color: @background;
            }
        }

        &.sy-@{style}.tipRight {
            .tipArrow {
                border-left-color: @background;
            }
        }
    }
}

i-tip{
    // cursor: pointer;
    position: absolute;
    // z-index: @tipIndex;
    display: block;
    font-size: 0.75*@fontSize;
    opacity: 0;

    &.in { 
        opacity: 1; 
    }

    &.tipTop{
        padding: @tipArrowWidth 0;
        margin-top: -0.1875*@fontSize;

        .tipArrow {
            bottom: 0;
            left: 50%;
            margin-left: -@tipArrowWidth;
            border-width: @tipArrowWidth @tipArrowWidth 0;
            // border-top-color: @tipArrowColor;
        }
    }

    &.tipRight{
        padding: 0 @tipArrowWidth;
        margin-left: 0.1875*@fontSize;

        .tipArrow {
            top: 50%;
            left: 0;
            margin-top: -@tipArrowWidth;
            border-width: @tipArrowWidth @tipArrowWidth @tipArrowWidth 0;
            // border-right-color: @tipArrowColor;
        }
    }

    &.tipBottom{
        padding: @tipArrowWidth 0;
        margin-top: 0.1875*@fontSize;

        .tipArrow {
            top: 0;
            left: 50%;
            margin-left: -@tipArrowWidth;
            border-width: 0 @tipArrowWidth @tipArrowWidth;
            // border-bottom-color: @tipArrowColor;
        }
    }

    &.tipLeft{
        padding: 0 @tipArrowWidth;
        margin-left: -0.1875*@fontSize;

        .tipArrow {
            top: 50%;
            right: 0;
            margin-top: -@tipArrowWidth;
            border-width: @tipArrowWidth 0 @tipArrowWidth @tipArrowWidth;
            // border-left-color: @tipArrowColor;
        }
    }

    .tipContent {
        max-width: 12.5*@fontSize;
        padding: 0.1875*@fontSize 0.5*@fontSize;
        // color: @colorWhite;
        text-align: center;
        // background-color: @tipBg;
        border-radius: @borderRadius;
    }

    .tipArrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .tipStyle(@colorTheme, @colorWhite, 'theme');
    .tipStyle(@colorLightTheme, @colorWhite, 'lightTheme');
    .tipStyle(@colorDarkTheme, @colorWhite, 'darkTheme');

    .tipStyle(@colorSuccess, @colorWhite, 'success');
    .tipStyle(@colorWarning, @colorWhite, 'warning');
    .tipStyle(@colorDanger, @colorWhite, 'danger');
    .tipStyle(@colorPrimary, @colorWhite, 'primary');
    .tipStyle(@colorMinor, @colorWhite, 'minor');
    .tipStyle(@colorInfo, @colorWhite, 'info');

    .tipStyle(@colorBlack, @colorWhite, 'black');
    .tipStyle(@colorLightBlack, @colorWhite, 'lightBlack');
    .tipStyle(@colorExtraLightBlack, @colorWhite, 'extraLightBlack');
    .tipStyle(@colorBlue, @colorWhite, 'blue');
    .tipStyle(@colorLightBlue, @colorWhite, 'lightBlue');
    .tipStyle(@colorExtraLightBlue, @colorWhite, 'extraLightBlue');
    .tipStyle(@colorSilver, @colorLightBlack, 'silver');
    .tipStyle(@colorLightSilver, @colorLightBlack, 'lightSilver');
    .tipStyle(@colorExtraLightSilver, @colorLightBlack, 'extraLightSilver');
    .tipStyle(@colorGray, @colorLightBlack, 'gray');
    .tipStyle(@colorLightGray, @colorLightBlack, 'lightGray');
    .tipStyle(@colorWhite, @colorLightBlack, 'white');

    // default statement
    &{
        .sy-theme;
    }

}
</style>
