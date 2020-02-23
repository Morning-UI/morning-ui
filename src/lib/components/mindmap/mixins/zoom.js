export default {
    methods : {
        zoom : function (zoom) {

            this.data.graph.zoomTo(zoom);

            return this;

        },
        getZoom : function () {

            return this.data.graph.getZoom();

        },
        fitView : function () {

            this.data.graph.fitView();

            // eslint-disable-next-line no-magic-numbers
            this.$refs['mor-mindmap-zoomslider'].set(this.getZoom() * 100);

        }
    }
};
