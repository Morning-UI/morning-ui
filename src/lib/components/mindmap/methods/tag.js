import difference                   from 'lodash.difference';
import arrayUniq                    from 'array-uniq';
import {
    fillNodeIds,
}                                   from '../base/utils';

export default {
    methods : {
        _saveTag : function () {

            this.setAllTag(this.data.currentEditTagNodeIds, this.data.currentEditTagValue);
            this.cancelEditTag();

            return this;

        },
        editTag : function (nodeIds) {

            nodeIds = fillNodeIds(nodeIds);

            let node = this.data.graph.findById(nodeIds[0]);
            let model = node.getModel();
            let tags = [];

            for (let tag of (model.tag || [])) {

                tags.push(tag.text || tag);

            }

            this.data.currentEditTagNodeIds = nodeIds;
            this.data.currentEditTagValue = tags;
            this.data.$editTagDialog.toggle(true);
            this.data.mouseOnCanvas = false;

            return this;

        },
        cancelEditTag : function () {

            this.data.currentEditTagNodeIds = [];
            this.data.currentEditTagValue = '';
            this.data.$editTagDialog.toggle(false);
            this.data.mouseOnCanvas = true;

            return this;

        },
        addTag : function (nodeIds, tags) {

            // eslint-disable-next-line no-console
            console.warn('[warn] `addTag` method is deprecated, will be remove at version 0.13.0, replace with `tag` method.');

            return this.tag(nodeIds, tags);

        },
        removeTag : function (nodeIds, tags) {

            // eslint-disable-next-line no-console
            console.warn('[warn] `removeTag` method is deprecated, will be remove at version 0.13.0, replace with `untag` method.');

            return this.untag(nodeIds, tags);

        },
        setAllTag : function (nodeIds, tags) {

            nodeIds = fillNodeIds(nodeIds);
            tags = arrayUniq(tags);

            for (let nodeId of nodeIds) {

                let addTags = [];
                let removeTags = [];
                let currentTags = this.getNodeDetail(nodeId).tag;

                if (currentTags === undefined) {

                    currentTags = [];

                }

                addTags = difference(tags, currentTags);
                removeTags = difference(currentTags, tags);
                this.tag(nodeId, addTags);
                this.untag(nodeId, removeTags);

            }

            return this;

        },
        tag : function (nodeIds, tags) {

            // tag object is:
            // tag.text : 内容
            // tag.background : 背景颜色
            // tag.color : 字体颜色

            nodeIds = fillNodeIds(nodeIds);

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

                model.tag = Object.values(tagMap);
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
        untag : function (nodeIds, tags) {

            nodeIds = fillNodeIds(nodeIds);

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

                model.tag = Object.values(tagMap);
                node.draw();

            }

            this.data.graph.refreshLayout();

        },
    }
};
