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

<style lang="less" src="./index.less"></style>
