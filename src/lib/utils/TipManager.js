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
                autoFixPlacement : null,
                autoOffset : true,
                autoFixOffset : [0, 0],
                overranger : [false, false, false, false]
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
        _tipAutoPos : function () {

            const blank = 5;

            let options = this.Tip.options;
            let rect = options.element.getBoundingClientRect();
            let placement = options.placement;

            if (placement === 'bottom' ||
                placement === 'top') {

                // overleft
                if (this.Tip.autoOffset && (rect.x - blank) < 0) {

                    this.Tip.autoFixOffset[1] = rect.x - blank;
                    this.Tip.overranger[3] = true;

                }

                // overright
                if (this.Tip.autoOffset && (rect.x + rect.width + blank) > document.documentElement.clientWidth) {

                    this.Tip.autoFixOffset[1] = rect.x + rect.width + blank - document.documentElement.clientWidth;
                    this.Tip.overranger[1] = true;

                }

                // overtop
                if (this.Tip.autoReverse && (rect.y - blank) < 0) {

                    this.Tip.autoFixPlacement = 'bottom';
                    this.Tip.overranger[0] = true;

                }

                // overbottom
                if (this.Tip.autoReverse && (rect.y + rect.height + blank) > document.documentElement.clientHeight) {

                    this.Tip.autoFixPlacement = 'top';
                    this.Tip.overranger[2] = true;

                }

            } else if (placement === 'left' ||
                       placement === 'right') {

                // overleft
                if (this.Tip.autoReverse && (rect.x - blank) < 0) {

                    this.Tip.autoFixPlacement = 'right';
                    this.Tip.overranger[3] = true;

                }

                // overright
                if (this.Tip.autoReverse && (rect.x + rect.width + blank) > document.documentElement.clientWidth) {

                    this.Tip.autoFixPlacement = 'left';
                    this.Tip.overranger[1] = true;
                       
                }

                // overtop
                if (this.Tip.autoOffset && (rect.y - blank) < 0) {

                    this.Tip.autoFixOffset[0] = rect.y - blank;
                    this.Tip.overranger[0] = true;

                }

                // overbottom
                if (this.Tip.autoOffset && (rect.y + rect.height + blank) > document.documentElement.clientHeight) {

                    this.Tip.autoFixOffset[0] = rect.y + rect.height + blank - document.documentElement.clientHeight;
                    this.Tip.overranger[2] = true;

                }

            }
            
        },
        _tipCreate : function (options) {

            if (this.Tip.tether) {

                this._tipShow();

                return;

            }

            options = this._tipOptionsHandler(options);
            this.Popup.$target = options.element;

            this._popupShow();
            this.Tip.tether = new Tether(options);
            this._tipShow();

        },
        _tipShow : function () {

            this.Tip.autoFixOffset = [0, 0];
            this.Tip.autoFixPlacement = null;
            this.Tip.overranger = [false, false, false, false];
            this._tipUpdate();
            this._tipAutoPos();
            this._tipUpdate();

        },
        _tipUpdate : function (options) {

            if (!this.Tip.tether) {

                return;

            }

            options = this._tipOptionsHandler(options);

            let offset = options.offset;
            let attachment = options.attachment;

            if (offset) {

                offset = offset.split(' ');
                offset[0] = (+offset[0].replace(/px/g, '')) + this.Tip.autoFixOffset[0];
                offset[1] = (+offset[1].replace(/px/g, '')) + this.Tip.autoFixOffset[1];
                offset = offset.join(' ');

            }

            if (this.Tip.autoFixPlacement) {
                
                attachment = this.Tip.attachmentMap[this.Tip.autoFixPlacement];
            
            }

            this.Tip.tether.setOptions(extend({}, options, {
                attachment,
                offset
            }));
            this.Tip.tether.position();

        },
        _tipDestroy : function () {

            if (this.Tip.tether) {

                this._popupHide();

                let tether = this.Tip.tether;

                this.Tip.tether = null;
                tether.destroy();
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
