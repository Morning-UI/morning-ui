<template>
    <mor-dropdown
        :_uiid="uiid"
        :auto-close="autoClose"
    >
    
    <slot name="showbtn"></slot>

    <div 
        class="ui-dropdown-wrap"
        :class="[showClass]"
    >
        <div class="btnlist" ><slot></slot></div>
    </div>
        
    </mor-dropdown>
</template>
 
<script>
import GlobalEvent                  from 'Utils/GlobalEvent';
import TipManager                   from 'Utils/TipManager';

export default {
    origin : 'UI',
    name : 'dropdown',
    mixins : [GlobalEvent, TipManager],
    props : {
        autoClose : {
            type : Boolean,
            default : true
        }
    },
    computed : {
        _conf : function () {

            return {
                autoClose : this.autoClose
            };

        },
        showClass : function () {

            return {
                show : this.data.show,
                hide : !this.data.show && !this.data.first
            };

        }
    },
    data : function () {

        return {
            data : {
                show : false,
                first : true,
                $warp : null
            }
        };

    },
    methods : {
        _checkArea : function (evt) {

            const notFound = -1;

            let $emitbtn = this.$el.querySelector('[emitbtn]');

            if ((this.conf.autoClose && (evt.path.indexOf($emitbtn) === notFound)) ||
                (!this.conf.autoClose && (evt.path.indexOf(this.data.$warp) === notFound))) {

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

                return this;

            }

            this.data.show = show;

            if (this.data.show) {

                this._tipCreate({
                    placement : 'bottom',
                    element : this.data.$warp,
                    target : this.$el,
                    offset : '-5px 0'
                });

                this.$emit('show');

            } else {

                this._tipDestroy();
                this.$emit('hide');

            }

            return this;

        }
        
    },
    mounted : function () {

        let $emitbtn = this.$el.querySelector(`[emitbtn]`);
        
        if ($emitbtn) {

            $emitbtn.addEventListener('click', this._toggle);

        }

        this.data.$warp = this.$el.querySelector('.ui-dropdown-wrap');

        this.$on('show', () => {

            this.data.first = false;
            this.data.show = true;

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

        });

    },
    beforeDestroy : function () {

        this._globalEventRemove('click', '_checkArea');
        this._tipDestroy();

    }
};
</script>

<style lang="less" src="./index.less"></style>
