import extend                       from 'extend';
import Tether                       from 'Npm/tether/dist/js/tether.min.js';
import PopupManager                 from 'Utils/PopupManager';

let TipManager = {
    mixins : [PopupManager],
    data : function () {

        return {
            Tip : {
                attachmentMap : {
                    top : 'bottom center',
                    right : 'middle left',
                    bottom : 'top center',
                    left : 'middle right'
                },
                tether : null,
                placement : 'top',
                options : {},
                autoReverse : true,
                autoOffset : true
            }
        };

    },
    methods : {
        _tipOptionsHandler : function (options) {

            options = extend({
                placement : this.Tip.placement,
                element : null,
                target : null,
                targetOffset : '0 0',
                classPrefix : 'mor-tet',
                offset : '0 0',
                classes : {
                    'element-attached' : 'tet-ea'
                }
            }, this.Tip.options, options);

            options.attachment = this.Tip.attachmentMap[options.placement];
            this.Tip.options = options;

            return options;

        },
        _tipCreate : function (options) {

            if (this.Tip.tether) {

                return;

            }

            options = this._tipOptionsHandler(options);
            this.Popup.$target = options.element;

            this._popupShow();
            this.Tip.tether = new Tether(options);
            this._tipUpdate();

            const blank = 5;

            let rect = options.element.getBoundingClientRect();
            let offset = options.offset;
            let placement = options.placement;

            if (placement === 'bottom' ||
                placement === 'top') {

                // overleft
                if (this.Tip.autoOffset && (rect.x - blank) < 0) {

                    offset = offset.split(' ');
                    offset[1] = (+offset[1]) + rect.x - blank;
                    offset = offset.join(' ');

                }

                // overright
                if (this.Tip.autoOffset && (rect.x + rect.width + blank) > document.documentElement.clientWidth) {

                    offset = offset.split(' ');
                    offset[1] = (+offset[1]) + (rect.x + rect.width + blank - document.documentElement.clientWidth);
                    offset = offset.join(' ');
                       
                }

                // overtop
                if (this.Tip.autoReverse && (rect.y - blank) < 0) {

                    placement = 'bottom';

                }

                // overbottom
                if (this.Tip.autoReverse && (rect.y + rect.height + blank) > document.documentElement.clientHeight) {

                    placement = 'top';

                }

            } else if (placement === 'left' ||
                       placement === 'right') {

                // overleft
                if (this.Tip.autoReverse && (rect.x - blank) < 0) {

                    placement = 'right';

                }

                // overright
                if (this.Tip.autoReverse && (rect.x + rect.width + blank) > document.documentElement.clientWidth) {

                    placement = 'left';
                       
                }

                // overtop
                if (this.Tip.autoOffset && (rect.y - blank) < 0) {

                    offset = offset.split(' ');
                    offset[0] = (+offset[0]) + rect.y - blank;
                    offset = offset.join(' ');

                }

                // overbottom
                if (this.Tip.autoOffset && (rect.y + rect.height + blank) > document.documentElement.clientHeight) {

                    offset = offset.split(' ');
                    offset[0] = (+offset[0]) + (rect.y + rect.height + blank - document.documentElement.clientHeight);
                    offset = offset.join(' ');

                }

            }
            
            this._tipUpdate({
                offset,
                placement
            });

        },
        _tipUpdate : function (options) {

            if (!this.Tip.tether) {

                return;

            }

            options = this._tipOptionsHandler(options);
            this.Tip.tether.setOptions(options);
            this.Tip.tether.position();

        },
        _tipDestroy : function () {

            if (this.Tip.tether) {

                this._popupHide();

                this.Tip.tether.destroy();
                this.Tip.tether = null;

                this.Tip.options.element.removeAttribute('style');

                this._tipRemoveTetherClasses(this.Tip.options.element);
                this._tipRemoveTetherClasses(this.Tip.options.target);

            }

        },
        _tipRemoveTetherClasses : function ($ele) {

            let classes = $ele.classList.value.split(' ');

            for (let cls of classes) {

                let reg = new RegExp(`^(${this.Tip.options.classPrefix}|tether|tet)\\-`, 'g');

                if (reg.test(cls)) {

                    $ele.classList.remove(cls);

                }

            }

        }
    },
    beforeDestroy : function () {

        this._tipDestroy();

    }
};

export default TipManager;
