export default {
    show : (evt, options) => {

        let {
            x : canvasX,
            y : canvasY
        } = options.graph.getCanvasByPoint(evt.x, evt.y);

        if (evt.item) {

            let model = evt.item.getModel();

            if (model._isMindNode) {

                options.vm.showContextMenu(model.id, canvasX, canvasY);

            }

        }

    },
    hide : () => {

        options.vm.hideContextMenu();

    }
};
