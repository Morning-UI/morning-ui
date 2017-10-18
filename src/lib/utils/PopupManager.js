let PopupManager = {
    data : function () {

        const popupIndex = 1000;

        return {
            Popup : {
                index : popupIndex,
                keepDiv : null,
                oldIndex : undefined
                // popupDiv : null
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

            keepDiv.setAttribute('popup-id', id);
            keepDiv.style.display = 'none';
            this.$el.before(keepDiv);
            this.Popup.oldIndex = this.$el.style.zIndex;
            this.$el.style.zIndex = this.Popup.index + id;
            document.body.append(this.$el);
            this.Popup.keepDiv = keepDiv;

        },
        _popupHide : function () {

            if (!this.Popup.keepDiv) {

                return;

            }

            this.$el.style.zIndex = this.Popup.oldIndex;
            this.Popup.keepDiv.before(this.$el);
            this.Popup.keepDiv.remove();
            this.Popup.keepDiv = null;

        }
    }
};

export default PopupManager;
