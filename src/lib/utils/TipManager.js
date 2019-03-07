import extend                       from 'extend';
import Tether                       from 'Npm/tether/dist/js/tether.min.js';
import Popper                       from 'Npm/popper.js/dist/popper.min.js';
import PopupManager                 from 'Utils/PopupManager';
import IndexManager                 from 'Utils/IndexManager';

let TipManager = {
    mixins : [PopupManager, IndexManager],
    data : function () {

        return {
            Tip : {
                // attachmentMap : {
                //     top : 'bottom center',
                //     right : 'middle left',
                //     bottom : 'top center',
                //     left : 'middle right'
                // },
                popper : null,
                // placement : 'top',
                // align : 'middle',
                options : {},
                data : {}
                // autoReverse : true,
                // autoFixPlacement : null,
                // autoOffset : true,
                // autoFixOffset : [0, 0],
                // overranger : [false, false, false, false]
            },
            // tipClass : {}
        };

    },
    methods : {
        _tipOptionsHandler : function (options) {

            options = extend(true, {
                reference : null,
                popper : null,
                options : {
                    placement : 'top',
                    offset : '0 0',
                    onCreate : data => {
                        this.Tip.data = data;
                        this._tipShow();
                    },
                    onUpdate : data => {
                        console.log(51, data);
                    },
                    modifiers : {
                        flip : {
                            enabled : false
                        },
                        preventOverflow : {
                            enabled : false,
                            boundariesElement : 'viewport'
                        },
                        arrow : {
                            enabled : true,
                            element : this.$el.querySelector('.arrow'),
                            fn : data => {

                                console.log(data);

                                // 8 is 5(margin-left) + 3(border-radius)
                                if (data.offsets.arrow.left < 8) {

                                    data.offsets.arrow.left = 8;

                                }

                                if (data.offsets.arrow.left > (data.offsets.popper.width - 8)) {

                                    data.offsets.arrow.left = (data.offsets.popper.width - 8);

                                }

                                return data;

                            }
                        },
                        offset : {
                            enabled : true,
                            offset : '0, 0'
                        }
                    }
                }
            }, this.Tip.options, options);

            if (options.options.modifiers.flip.enabled) {

                options.options.modifiers.preventOverflow.enabled = true;

            }

            // options = extend({
            //     placement : this.Tip.placement,
            //     element : null,
            //     target : null,
            //     targetOffset : '0 0',
            //     classPrefix : 'mor-tet',
            //     offset : '0 0',
            //     classes : {
            //         'element-attached' : 'tet-ea'
            //     }
            // }, this.Tip.options, options);

            // this._tipAlignSet(options, options.placement, this.Tip.attachmentMap[options.placement]);

            this.Tip.options = options;

            return options;

        },
        // _tipAutoPos : function () {

        //     const blank = 5;

        //     let options = this.Tip.options;
        //     let rect = options.element.getBoundingClientRect();
        //     let placement = options.placement;
        //     let overranger = [false, false, false, false];

        //     if (placement === 'bottom' ||
        //         placement === 'top') {

        //         // overleft
        //         if (this.Tip.autoOffset && (rect.left - blank) < 0) {

        //             this.Tip.autoFixOffset[1] = rect.left - blank;
        //             overranger[3] = true;

        //         }

        //         // overright
        //         if (this.Tip.autoOffset && (rect.left + rect.width + blank) > document.documentElement.clientWidth) {

        //             this.Tip.autoFixOffset[1] = rect.left + rect.width + blank - document.documentElement.clientWidth;
        //             overranger[1] = true;

        //         }

        //         // overtop
        //         if (this.Tip.autoReverse && (rect.top - blank) < 0) {

        //             this.Tip.autoFixPlacement = 'bottom';
        //             overranger[0] = true;

        //         }

        //         // overbottom
        //         if (this.Tip.autoReverse && (rect.top + rect.height + blank) > document.documentElement.clientHeight) {

        //             this.Tip.autoFixPlacement = 'top';
        //             overranger[2] = true;

        //         }

        //     } else if (placement === 'left' ||
        //                placement === 'right') {

        //         // overleft
        //         if (this.Tip.autoReverse && (rect.left - blank) < 0) {

        //             this.Tip.autoFixPlacement = 'right';
        //             overranger[3] = true;

        //         }

        //         // overright
        //         if (this.Tip.autoReverse && (rect.left + rect.width + blank) > document.documentElement.clientWidth) {

        //             this.Tip.autoFixPlacement = 'left';
        //             overranger[1] = true;
                       
        //         }

        //         // overtop
        //         if (this.Tip.autoOffset && (rect.top - blank) < 0) {

        //             this.Tip.autoFixOffset[0] = rect.top - blank;
        //             overranger[0] = true;

        //         }

        //         // overbottom
        //         if (this.Tip.autoOffset && (rect.top + rect.height + blank) > document.documentElement.clientHeight) {

        //             this.Tip.autoFixOffset[0] = rect.top + rect.height + blank - document.documentElement.clientHeight;
        //             overranger[2] = true;

        //         }

        //     }

        //     this.Tip.overranger = overranger;
            
        // },
        _tipCreate : function (options) {

            if (this.Tip.popper) {

                this._tipUpdate();

                return;

            }

            this._tipOptionsHandler(options);
            this.Popup.$target = this.Tip.options.popper;
            this._popupShow();
            this.Tip.options.placement = 'top';
            this._tipHide();

            console.log(9, this.Tip.options.options);

            this.Vue.nextTick(() => {
                this.Tip.popper = new Popper(
                    this.Tip.options.reference,
                    this.Tip.options.popper,
                    this.Tip.options.options
                );

                // this._tipShow();

            });

        },
        _tipShow : function () {

            // this.Tip.autoFixOffset = [0, 0];
            // this.Tip.autoFixPlacement = null;
            // this.Tip.overranger = [false, false, false, false];
            this.Tip.options.popper.style.zIndex = this._indexMax();
            this.Tip.options.popper.style.opacity = 1;
            this.Tip.options.popper.style['pointer-events'] = 'auto';
            this.Tip.options.popper.classList.add(`popper-placement-${this.Tip.data.placement}`);
            this._tipUpdate();
            // this._tipUpdate();
            // this._tipAutoPos();
            // this._tipUpdate();

        },
        _tipUpdate : function () {

            this.Tip.popper.update();

        },
        _tipHide : function () {

            this.Tip.options.popper.style.zIndex = -1;
            this.Tip.options.popper.style.opacity = 0;
            this.Tip.options.popper.style['pointer-events'] = 'none';
            this._tipRemoveClasses(this.Tip.options.popper, 'popper-placement-');

        },
        _tipDestroy : function () {

            if (this.Tip.popper) {

                this._tipHide();
                this.Tip.popper.destroy();
                this.Tip.popper = null;

            }

        },
        _tipUpdateOptions : function (options) {

            this._tipOptionsHandler(options);
            this._tipDestroy();
            this._tipCreate();

        },
        _tipRemoveClasses : function ($ele, className) {

            let classes = $ele.classList.value.split(' ');

            for (let cls of classes) {

                let reg = new RegExp(className, 'g');

                if (reg.test(cls)) {

                    $ele.classList.remove(cls);

                }

            }

        },
        // _tipAlignSet : function (options, placement, attachment) {

        //     if (this.Tip.align === 'start') {

        //         options.attachment = attachment.replace(/center/, 'left').replace(/middle/, 'top');

        //     } else if (this.Tip.align === 'end') {

        //         options.attachment = attachment.replace(/center/, 'right').replace(/middle/, 'bottom');

        //     } else {

        //         options.attachment = attachment;

        //     }

        //     if (this.Tip.align !== 'middle') {

        //         if (placement === 'top') {

        //             options.targetAttachment = options.attachment.replace(/bottom/, 'top');
                
        //         } else if (placement === 'bottom') {

        //             options.targetAttachment = options.attachment.replace(/top/, 'bottom');
                
        //         } else if (placement === 'left') {

        //             options.targetAttachment = options.attachment.replace(/right/, 'left');
                
        //         } else if (placement === 'right') {

        //             options.targetAttachment = options.attachment.replace(/left/, 'right');
                
        //         }

        //     }

        // }
    },
    beforeDestroy : function () {

        this._tipDestroy();

    }
};

export default TipManager;
