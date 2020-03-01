export default {
    methods : {
        addTag : function (nodeIds, tags) {

            // eslint-disable-next-line no-console
            console.warn('[Morning UI warn] `addTag` method is deprecated, will be remove at version 0.13.0, replace with `tag` method.');

            return this.tag(nodeIds, tags);

        },
        removeTag : function (nodeIds, tags) {

            // eslint-disable-next-line no-console
            console.warn('[Morning UI warn] `removeTag` method is deprecated, will be remove at version 0.13.0, replace with `untag` method.');

            return this.untag(nodeIds, tags);

        },
        tag : function (nodeIds, tags) {

            nodeIds = this._fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();
                let tag = model.tag || [];
                let tagMap = {};

                for (let oneTag of tag) {

                    let key = oneTag.text || oneTag;

                    tagMap[key] = oneTag;

                }

                for (let oneTag of tags) {

                    let key = oneTag.text || oneTag;

                    tagMap[key] = oneTag;

                }

                // tag = tag.concat(tags);
                // tag = arrayUniq(tag);

                model.tag = Object.values(tagMap);
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
        untag : function (nodeIds, tags) {

            nodeIds = this._fillNodeIds(nodeIds);

            for (let nodeId of nodeIds) {

                let node = this.data.graph.findById(nodeId);
                let model = node.getModel();
                let tag = model.tag || [];
                let tagMap = {};

                for (let oneTag of tag) {

                    let key = oneTag.text || oneTag;

                    tagMap[key] = oneTag;

                }

                for (let oneTag of tags) {

                    let key = oneTag.text || oneTag;

                    delete tagMap[key];

                }

                // tag = difference(tag, tags);

                model.tag = Object.values(tagMap);
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
    }
};
