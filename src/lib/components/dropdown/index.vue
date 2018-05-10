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
import Tether                       from 'Npm/tether/dist/js/tether.min.js';
import GlobalEvent                  from 'Utils/GlobalEvent';
import IndexManager                 from 'Utils/IndexManager';

export default {
    origin : 'UI',
    name : 'dropdown',
    mixins : [GlobalEvent, IndexManager],
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
                classPrefix : 'morning-tether',
                $element : null,
                attachmentMap : {
                    top : 'bottom center',
                    right : 'middle left',
                    bottom : 'top center',
                    left : 'middle right'
                },
                tether : null
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
        _setTether : function () {

            if (!this.data.tether) {

                return;

            }

            let targetOffset = '0 0',
                options = {};

            options = {
                attachment : this.data.attachmentMap.bottom,
                element : this.data.$element,
                target : this.$el,
                targetOffset,
                // classes : this.tetherClass,
                classPrefix : this.data.classPrefix,
                offset : '0 0'
            };

            this.data.tether.setOptions(options);
            this.data.tether.position();

        },
        _cleanupTether : function () {

            if (this.data.tether) {

                this.data.tether.destroy();
                this.data.tether = null;

                this.$el.removeAttribute('style');

                this._removeTetherClasses(this.$el);
                this._removeTetherClasses(this.data.$element);

            }

        },
        _removeTetherClasses : function (ele) {

            let classes = ele.classList.value.split(' ');

            for (let cls of classes) {

                let reg = new RegExp(`^(${this.data.classPrefix}|tether)\\-`, 'g');

                if (reg.test(cls)) {

                    ele.classList.remove(cls);

                }

            }

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

                this.data.tether = new Tether({
                    attachment : this.data.attachmentMap.bottom,
                    element : this.data.$element,
                    target : this.$el
                });
                this._setTether();

                this.$emit('show');

            } else {

                this.$emit('hide');

            }

            return this;

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

        this.data.$element = this.$el.querySelector('.ui-dropdown-wrap');

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
};
</script>

<style lang="less" src="./index.less"></style>
