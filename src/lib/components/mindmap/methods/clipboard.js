import copy                         from 'clipboard-copy';
import {
    pluckDataFromNodes,
}                                   from '../base/utils';

export default {
    methods : {
        copyNodeToClipboard : function (nodeId) {

            let data = this.copyNode(nodeId);

            data = JSON.stringify(data);
            this.morning._mindmapClipboard = data;
            copy(data);

            return data;

        },
        copyNode : function (nodeId) {

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();
            let data = pluckDataFromNodes([model]);

            return data[0];

        },
        getClipboard : function () {

            return this.morning._mindmapClipboard;

        },
    }
};
