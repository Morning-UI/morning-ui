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

            if (!this.Popup.keepDiv) {

                let id = this.morning._popupId++;
                let keepDiv = document.createElement('div');

                keepDiv.setAttribute('popup-id', id);
                keepDiv.style.display = 'none';
                this.Popup.$target.before(keepDiv);
                this.Popup.oldIndex = this.Popup.$target.style.zIndex;
                this.Popup.$target.style.zIndex = this._indexInc('Popup');
                document.body.append(this.Popup.$target);
                this.Popup.keepDiv = keepDiv;

            } else {

                this.Popup.$target.style.zIndex = this._indexInc('Popup');

            }

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
