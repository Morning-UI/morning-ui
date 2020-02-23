import copy                         from 'clipboard-copy';

export default {
    methods : {
        _updateClipboard : function (evt) {

            if (evt.clipboardData) {

                this.morning._mindmapClipboard = evt.clipboardData.getData('text');

            }

        },
        copyNode : function (nodeId) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let data = this._pluckDataFromNodes([model]);

            return data[0];

        },
        copyNodeToClipboard : function (nodeId) {

            let data = this.copyNode(nodeId);

            data = JSON.stringify(data);
            this.morning._mindmapClipboard = data;
            copy(data);

            return data;

        },
        getClipboard : function () {

            return this.morning._mindmapClipboard;

        },
    },
    mounted : function () {

        this._globalEventAdd('paste', '_updateClipboard');

    },
    beforeDestroy : function () {

        this._globalEventRemove('paste', '_updateClipboard');

    }
};
