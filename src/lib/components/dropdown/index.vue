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
import GlobalEvent                  from 'Utils/GlobalEvent';
import IndexManager                 from 'Utils/IndexManager';

export default UI.extend({
    name : 'dropdown',
    mixins : [GlobalEvent, IndexManager],
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
    created : function () {

        this._indexReg('list.show', 2);
        this._indexReg('list.hide', 1);

    },
    mounted : function () {

        const timeout = 200;

        let $emitbtn = this.$el.querySelector(`[emitbtn]`);
        
        if ($emitbtn) {

            $emitbtn.addEventListener('click', this._toggle);

        }

        this.$on('show', () => {

            this.data.first = false;
            this.data.show = true;
            this.$el.style.zIndex = this._indexGet('list.show');

            setTimeout(() => {

                this._globalEventAdd('click', '_checkArea');

            });
            
            this.$emit('emit');

        });

        this.$on('hide', () => {

            this.data.first = false;
            this.data.show = false;
            this._globalEventRemove('click', '_checkArea');
            this.$emit('emit');

            setTimeout(() => {

                this.$el.style.zIndex = this._indexGet('list.hide');

            }, timeout);

        });

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');

    }
});
</script>

<style lang="less" src="./index.less"></style>
