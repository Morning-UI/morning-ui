export default {
    methods : {
        stylingNode : function (nodeId, style) {

            // style included : fontSize / fontWeight / fontColor / fontStyle

            let node = this.data.graph.findById(nodeId);
            let model = node.getModel();

            model.style = this.G6.Util.deepMix(model.style, style);
            node.draw();
            this.data.graph.layout();

        }
    }
};
