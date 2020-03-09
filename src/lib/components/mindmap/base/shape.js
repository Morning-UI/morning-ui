import {NODE_SHAPE_INDEX}           from '../nodes/mindNode';
import {
    getNodeShapes,
}                                   from './utils';

const _refreshNodeNotePosition = (vm, node, noteConIndex) => {

    let shapes = getNodeShapes(node);
    let noteConBbox = shapes.appendConGroup.getChildByIndex(noteConIndex).getBBox();
    let nodeBbox = node.getBBox();
    let zoom = vm.data.graph.getZoom();
    let {
        x : nodeX,
        y : nodeY
    } = vm.data.graph.getCanvasByPoint(nodeBbox.x, nodeBbox.y);

    vm.data.$nodeNote.style.display = 'block';
    vm.data.$nodeNote.style.left = `${nodeX + (noteConBbox.x * zoom)}px`;
    vm.data.$nodeNote.style.top = `${nodeY + noteConBbox.y}px`;
    vm.data.$nodeNote.style.width = `${noteConBbox.width}px`;
    vm.data.$nodeNote.style.height = `${noteConBbox.height}px`;
    vm.data.nodeNoteZoom = zoom;

};

const _toggleAllChildrenVisibility = (node, type, callback) => {

    let outEdges = node.getOutEdges();

    for (let edge of outEdges) {

        let child = edge.getTarget();
        let model = child.getModel();
        
        edge[type]();
        child[type]();

        if (typeof callback === 'function') {

            callback(type, model);

        }

        if (child.getOutEdges().length > 0) {

            _toggleAllChildrenVisibility(child, type, callback);

        }

    }

};

// const _refreshMindNode = (shapes, model) => {

//     let {
//         box,
//         outline,
//         con,
//         text,
//         placeholder,
//         bottomline,
//         markConGroup,
//         appendConGroup
//     } = shapes;
//     let textBbox = text.getBBox();
//     let conPaddingX = box.get('conPaddingX');
//     let conPaddingY = box.get('conPaddingY');

//     // when text is empty use placeholder
//     if (textBbox.width === 0) {
        
//         textBbox = shapes.placeholder.getBBox();

//     }

//     let conWidth = textBbox.width + (conPaddingX * 2);
//     let conHeight = textBbox.height + (conPaddingY * 2);
//     let markConGroupBbox = markConGroup.getBBox();
//     let appendConGroupBbox = appendConGroup.getBBox();

//     if (model.note || model.link) {

//         conWidth += conPaddingX / 2;

//     }

//     if (model._mark && model._mark.length > 0) {

//         conWidth += markConGroupBbox.width;

//     }

//     if (model.link || model.note || (model.tag && model.tag.length > 0)) {

//         conWidth += appendConGroupBbox.width;

//     }

//     con.attr({
//         width : conWidth,
//         height : conHeight
//     });

//     let conBbox = con.getBBox();
    
//     outline.attr({
//         width : conBbox.width + (OUTLINE_PADDING * 2),
//         height : conBbox.height + (OUTLINE_PADDING * 2)
//     });

//     box.attr({
//         width : conBbox.width,
//         height : conBbox.height
//     });

//     placeholder.attr({
//         y : (textBbox.height / 2) + conPaddingY
//     });

//     text.attr({
//         y : (textBbox.height / 2) + conPaddingY
//     });

//     let boxBbox = box.getBBox();

//     bottomline.attr({
//         x : boxBbox.minX - 1,
//         y : boxBbox.maxY - 0.5,
//         width : boxBbox.width + 2
//     });

//     // TODO 位置是否对标nodes
//     shapes['collapseBtnGroup.circle'].attr({
//         x : boxBbox.maxX,
//         y : (textBbox.height / 2) + conPaddingY
//     });

//     let collapseBtnBbox = shapes['collapseBtnGroup.circle'].getBBox();

//     shapes['collapseBtnGroup.icon'].attr({
//         x : collapseBtnBbox.maxX - (collapseBtnBbox.width / 2),
//         y : collapseBtnBbox.maxY - (collapseBtnBbox.height / 2)
//     });
    
//     refreshAppendConGroupPosition(shapes, model);

// };

export default {
    toggleNodeVisibility : (node, type = 'show', callback) => {

        // 隐藏边
        node.getInEdges()[0][type]();

        // 隐藏文本和主容器
        node
            .get('group')
            .getChildByIndex(NODE_SHAPE_INDEX.text)[
                type
            ]();
        node
            .get('group')
            .getChildByIndex(NODE_SHAPE_INDEX.con)[
                type
            ]();
        node
            .get('group')
            .getChildByIndex(NODE_SHAPE_INDEX.bottomline)[
                type
            ]();
        node
            .get('group')
            .getChildByIndex(NODE_SHAPE_INDEX.markConGroup)[
                type
            ]();
        node
            .get('group')
            .getChildByIndex(NODE_SHAPE_INDEX.appendConGroup)[
                type
            ]();
        node
            .get('group')
            .getChildByIndex(NODE_SHAPE_INDEX.collapseBtnGroup)[
                type
            ]();
        
        // 隐藏所有子项
        _toggleAllChildrenVisibility(node, type, callback);

    },
    refreshNodeNotePosition : _refreshNodeNotePosition,
    // refreshMindNode : _refreshMindNode,
};
