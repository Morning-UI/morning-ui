import extend                       from 'extend';
import Tether                       from 'Npm/tether/dist/js/tether.min.js';
import PopupManager                 from 'Utils/PopupManager';
import IndexManager                 from 'Utils/IndexManager';

let TipManager = {
    mixins : [PopupManager, IndexManager],
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
                align : 'middle',
                options : {},
                autoReverse : true,
                autoFixPlacement : null,
                autoOffset : true,
                autoFixOffset : [0, 0],
                overranger : [false, false, false, false]
            },
            tipClass : {}
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

            this._tipAlignSet(options, options.placement, this.Tip.attachmentMap[options.placement]);
            this.Tip.options = options;

            return options;

        },
        _tipAutoPos : function () {

            const blank = 5;

            let options = this.Tip.options;
            let rect = options.element.getBoundingClientRect();
            let placement = options.placement;
            let overranger = [false, false, false, false];

            if (placement === 'bottom' ||
                placement === 'top') {

                // overleft
                if (this.Tip.autoOffset && (rect.left - blank) < 0) {

                    this.Tip.autoFixOffset[1] = rect.left - blank;
                    overranger[3] = true;

                }

                // overright
                if (this.Tip.autoOffset && (rect.left + rect.width + blank) > document.documentElement.clientWidth) {

                    this.Tip.autoFixOffset[1] = rect.left + rect.width + blank - document.documentElement.clientWidth;
                    overranger[1] = true;

                }

                // overtop
                if (this.Tip.autoReverse && (rect.top - blank) < 0) {

                    this.Tip.autoFixPlacement = 'bottom';
                    overranger[0] = true;

                }

                // overbottom
                if (this.Tip.autoReverse && (rect.top + rect.height + blank) > document.documentElement.clientHeight) {

                    this.Tip.autoFixPlacement = 'top';
                    overranger[2] = true;

                }

            } else if (placement === 'left' ||
                       placement === 'right') {

                // overleft
                if (this.Tip.autoReverse && (rect.left - blank) < 0) {

                    this.Tip.autoFixPlacement = 'right';
                    overranger[3] = true;

                }

                // overright
                if (this.Tip.autoReverse && (rect.left + rect.width + blank) > document.documentElement.clientWidth) {

                    this.Tip.autoFixPlacement = 'left';
                    overranger[1] = true;
                       
                }

                // overtop
                if (this.Tip.autoOffset && (rect.top - blank) < 0) {

                    this.Tip.autoFixOffset[0] = rect.top - blank;
                    overranger[0] = true;

                }

                // overbottom
                if (this.Tip.autoOffset && (rect.top + rect.height + blank) > document.documentElement.clientHeight) {

                    this.Tip.autoFixOffset[0] = rect.top + rect.height + blank - document.documentElement.clientHeight;
                    overranger[2] = true;

                }

            }

            this.Tip.overranger = overranger;
            
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
            this.Tip.options.element.style.zIndex = this._indexMax();
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
            
            this._tipAlignSet(options, options.placement, options.attachment);

            if (offset) {

                offset = offset.split(' ');
                offset[0] = (+offset[0].replace(/px/g, '')) + this.Tip.autoFixOffset[0];
                offset[1] = (+offset[1].replace(/px/g, '')) + this.Tip.autoFixOffset[1];
                offset = offset.join(' ');

            }

            if (this.Tip.autoFixPlacement) {
                
                this._tipAlignSet(options, this.Tip.autoFixPlacement, this.Tip.attachmentMap[this.Tip.autoFixPlacement]);

            }

            this.Tip.tether.setOptions(extend({}, options, {
                offset
            }));
            this.Tip.tether.position();
            this.tipClass = {};
            this.tipClass[`tip-placement-${this.Tip.autoFixPlacement || options.placement}`] = true;

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

        },
        _tipAlignSet : function (options, placement, attachment) {

            if (this.Tip.align === 'start') {

                options.attachment = attachment.replace(/center/, 'left').replace(/middle/, 'top');

            } else if (this.Tip.align === 'end') {

                options.attachment = attachment.replace(/center/, 'right').replace(/middle/, 'bottom');

            } else {

                options.attachment = attachment;

            }

            if (this.Tip.align !== 'middle') {

                if (placement === 'top') {

                    options.targetAttachment = options.attachment.replace(/bottom/, 'top');
                
                } else if (placement === 'bottom') {

                    options.targetAttachment = options.attachment.replace(/top/, 'bottom');
                
                } else if (placement === 'left') {

                    options.targetAttachment = options.attachment.replace(/right/, 'left');
                
                } else if (placement === 'right') {

                    options.targetAttachment = options.attachment.replace(/left/, 'right');
                
                }

            }

        }
    },
    beforeDestroy : function () {

        this._tipDestroy();

    }
};

export default TipManager;
