import IndexManager                 from './IndexManager';

let PopupManager = {
    mixins : [IndexManager],
    data : function () {

        return {
            Popup : {
                $target : null,
                keepDiv : null,
                oldIndex : undefined
            }
        };

    },
    methods : {
        _popupShow : function () {

            if (this.Popup.keepDiv) {

                return;

            }

            let id = this.morning._popupId++;
            let keepDiv = document.createElement('div');

            keepDiv.setAttribute('popup-id', id);
            keepDiv.style.display = 'none';
            this.Popup.$target.before(keepDiv);
            this.Popup.oldIndex = this.Popup.$target.style.zIndex;
            this.Popup.$target.style.zIndex = this._indexGet('Popup', id);
            document.body.append(this.Popup.$target);
            this.Popup.keepDiv = keepDiv;

        },
        _popupHide : function () {

            if (!this.Popup.keepDiv) {

                return;

            }

            this.Popup.$target.style.zIndex = this.Popup.oldIndex;
            this.Popup.keepDiv.before(this.Popup.$target);
            this.Popup.keepDiv.remove();
            this.Popup.keepDiv = null;

        }
    },
    created : function () {

        const popupIndex = 1000;

        this._indexReg('Popup', popupIndex);

    },
    mounted : function () {

        this.Popup.$target = this.$el;

    }
};

export default PopupManager;
