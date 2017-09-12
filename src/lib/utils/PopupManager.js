let PopupManager = {
    data : function () {

        return {
            Popup : {
                index : 1000,
                keepDiv : null,
                popupDiv : null
            }
        };

    },
    methods : {
        _popupShow : function () {

            if (this.Popup.keepDiv || this.Popup.popupDiv) {

                return;

            } 

            let id = this.morning._popupId++;
            let keepDiv = document.createElement('div');
            let popupDiv = document.createElement('div');

            keepDiv.setAttribute('popup-id', id);

            this.$el.before(keepDiv);
            popupDiv.append(this.$el);
            popupDiv.style.zIndex = this.Popup.index + id;

            document.body.append(popupDiv);

            this.Popup.keepDiv = keepDiv;
            this.Popup.popupDiv = popupDiv;

        },
        _popupHide : function () {

            if (!this.Popup.keepDiv || !this.Popup.popupDiv) {

                return;

            }

            this.Popup.keepDiv.before(this.Popup.popupDiv.children[0]);
            this.Popup.keepDiv.remove();
            this.Popup.popupDiv.remove();
            this.Popup.keepDiv = null;
            this.Popup.popupDiv = null;

        }
    }
};

export default PopupManager;
