export default {
    methods : {
        addTag : function (nodeIds, tags) {

            // eslint-disable-next-line no-console
            console.warn('`addTag` will deprecated in morning-ui version 0.13.0, please use `tag` instead');

            return this.tag(nodeIds, tags);

        },
        removeTag : function (nodeIds, tags) {

            // eslint-disable-next-line no-console
            console.warn('`removeTag` will deprecated in morning-ui version 0.13.0, please use `untag` instead');

            return this.untag(nodeIds, tags);

        },
        tag : function (nodeIds, tags) {

            nodeIds = this._fillNodeIds(nodeIds);

            if (typeof tags === 'string') {

                tags = [tags];

            }

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

            this.data.graph.layout();

        },
        untag : function (nodeIds, tags) {

            nodeIds = this._fillNodeIds(nodeIds);

            if (typeof tags === 'string') {

                tags = [tags];

            }

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

            this.data.graph.layout();

        }
    }
};
