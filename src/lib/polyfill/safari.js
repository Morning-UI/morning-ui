let evtButtons = () => {

    if (!('buttons' in Event.prototype)) {

        Object.defineProperty(Event.prototype, 'buttons', {
            get : function () {

                return this.which;

            }
        });

    }

};

export default {
    evtButtons
};
