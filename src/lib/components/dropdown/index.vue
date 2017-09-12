<template>
    <i-dropdown
        :_uiid="uiid"
        :class="[showClass]"
        
        :auto-close="autoClose"
    >
    
    <slot name="showbtn"></slot>
    <div class="btnlist"><slot></slot></div>
        
    </i-dropdown>
</template>
 
<script>
import UI                           from 'Common/ui';

export default UI.extend({
    name : 'dropdown',
    props : {
        autoClose : {
            type : Boolean,
            default : true
        }
    },
    computed : {
        showClass : function () {

            return {
                show : this.data.show,
                hide : !this.data.show && !this.data.first
            };

        }
    },
    data : function () {

        return {
            conf : {
                autoClose : this.autoClose
            },
            data : {
                show : false,
                first : true
            }
        };

    },
    methods : {
        _checkArea : function (evt) {

            const notFound = -1;

            let $emitbtn = this.$el.querySelector('[emitbtn]');

            if ((this.conf.autoClose && (evt.path.indexOf($emitbtn) === notFound)) ||
                (!this.conf.autoClose && (evt.path.indexOf(this.$el) === notFound))) {

                this.toggle();

            }

        },
        _toggle : function () {

            this.toggle();

        },
        toggle : function (show) {

        console.log(show);

            if (show === undefined) {

                show = !this.data.show;

            }

            show = !!show;

            if (show === this.data.show) {

                return;

            }

            this.data.show = show;

            if (this.data.show) {

                this.$emit('show');

            } else {

                this.$emit('hide');

            }

        }
        
    },
    mounted : function () {

        let $emitbtn = this.$el.querySelector(`[emitbtn]`);
        
        if ($emitbtn) {

            $emitbtn.addEventListener('click', this._toggle);

        }

        this.$on('show', () => {

            this.data.first = false;
            this.data.show = true;

            setTimeout(() => {

                document.addEventListener('click', this._checkArea);

            });
            
            this.$emit('emit');

        });

        this.$on('hide', () => {

            this.data.first = false;
            this.data.show = false;
            document.removeEventListener('click', this._checkArea);
            this.$emit('emit');

        });

    },
    beforeDestroy : function () {

        document.removeEventListener('click', this._checkArea);

    }
});
</script>

<style lang="less">
@import '~Common/var.less';

@-webkit-keyframes dropdown_popup{
    from {
        transform: translateX(-50%) scale(0);
    }
    52%{
        transform: translateX(-50%) scale(1);
    }
    76%{
        transform: translateX(-50%) scale(1.12);
    }
    to { 
        transform: translateX(-50%) scale(1);
    }
}

@-webkit-keyframes dropdown_popin{
    from {
        transform: translateX(-50%) scale(1);
    }
    to { 
        transform: translateX(-50%) scale(0);
    }
}

i-dropdown{
    display: inline-block;
    position: relative;

    i-btn{
        .iconfont{
            vertical-align: middle;
            font-size: inherit;
        }
    }

    .btnlist{
        font-size: 0;
        position: absolute;
        top: 110%;
        min-width: 80px;
        left: 50%;
        transform: translateX(-50%) scale(0);
        transform-origin: top center;
        border-radius: @borderRadius;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);

        i-btn{
            white-space: nowrap;
            display: block;
            margin: 0;
            text-align: center;

            &:not(:first-child){
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }

            &:not(:last-child){
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }

    &.show .btnlist{
        animation-name: dropdown_popup;
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
    }

    &.hide .btnlist{
        animation-name: dropdown_popin;
        animation-duration: 0.18s;
        animation-fill-mode: forwards;
    }

    // default statement
    &{}

}
</style>
