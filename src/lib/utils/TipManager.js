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
                options : {}
            }
        };

    },
    methods : {
        _tipOptionsHandler : function (options) {

            this.Tip.options = extend({
                placement : this.Tip.placement,
                element : null,
                target : null,
                targetOffset : '0 0',
                classPrefix : 'morning-tether',
                offset : '0 0'
            }, this.Tip.options, options);

            this.Tip.options.attachment = this.Tip.attachmentMap[this.Tip.options.placement];

            return this.Tip.options;

        },
        _tipCreate : function (options) {

            options = this._tipOptionsHandler(options);
            this.Popup.$target = options.element;

            this._popupShow();
            this.Tip.tether = new Tether(options);

            this._tipUpdate();

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

                let reg = new RegExp(`^(${this.Tip.options.classPrefix}|tether)\\-`, 'g');

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
