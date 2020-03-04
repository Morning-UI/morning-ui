import G6                           from '@antv/g6';
import {NODE_SHAPE_INDEX}           from '../nodes/mindNode';
import {
    MARKS
}                                   from '../const/marks';

export const fillNodeIds = nodeIds => {

    if (typeof nodeIds === 'number') {

        return [nodeIds];

    }

    return nodeIds;

};

export const inNodeShape = (vm, evt, shape) => {

    let zoom = vm.data.graph.getZoom();
    let itemBbox = evt.item.getBBox();
    let itemCanvasXY = vm.data.graph.getCanvasByPoint(itemBbox.x, itemBbox.y);
    let x = (evt.canvasX - itemCanvasXY.x) / zoom;
    let y = (evt.canvasY - itemCanvasXY.y) / zoom;
    let shapeBbox = shape.getBBox();

    if (x > shapeBbox.minX &&
        x < shapeBbox.maxX &&
        y > shapeBbox.minY &&
        y < shapeBbox.maxY) {

        return true;

    }

    return false;

};

export const inAnnex = (vm, evt, shapeIndex) => (
    inNodeShape(
        vm,
        evt,
        evt.item.get('group')
            .getChildByIndex(NODE_SHAPE_INDEX.appendConGroup)
            .getChildByIndex(shapeIndex)
    )
);

export const getNodeShapes = item => {

    let box = item.getKeyShape();
    let group = box.getParent();
    let shapes = {};

    for (let key in NODE_SHAPE_INDEX) {

        shapes[key] = group.getChildByIndex(NODE_SHAPE_INDEX[key]);

    }

    return shapes;

};

export const refreshNodeEdges = edges => {

    for (let edge of edges) {

        edge.refresh();

    }

};

export const pluckDataFromNodes = children => {

    let cleanData = [];

    for (let item of children) {

        let cleanItem = {
            text : item.text,
            note : item.note,
            mark : item.mark,
            link : item.link,
            tag : item.tag
        };

        if (item.children) {

            cleanItem.children = this.pluckDataFromNodes(item.children);

        }

        cleanData.push(cleanItem);

    }

    return cleanData;

};

export const traverseNodeUpdateMark = item => {

    if (item.mark && item.mark.length > 0) {

        let mark = {};

        for (let index in item.mark) {

            let name = item.mark[index];
            let group = name.split(':')[0];

            if (MARKS[name]) {
                
                mark[group] = name;

            }

        }

        item._mark = Object.values(mark);

    } else {

        item._mark = [];

    }

};

export const traverseOneNode = function (item) {

    // item includes:
    // id : node id
    // text : 文案
    // children : 子节点
    // link : 链接
    // mark : 标记(用户设置)
    // tag : 标签
    // note : 备注
    // shape : 使用的图形
    // shapeStyle : 使用的图形样式
    // _isRoot : 根节点
    // _anchorPoints : 锚点
    // _isMindNode
    // _style : 样式
    // _collapsed : 子节点折叠状态
    // _collapsedChildren : 用于存放被折叠的子节点
    // _mark : 标记(经过转换后)

    item.id = this.data.globalId++;
    item.shapeStyle = item.shapeStyle;
    item._anchorPoints = [[0, 0.5], [1, 0.5]];
    item._isMindNode = true;
    item._style = {};
    // item._shape = item.shape;
    item._collapsed = item._collapsed || false;
    item._collapsedChildren = [];
    this.data.dataMap[item.id] = item;

    if (item._isRoot) {

        item.shape = 'mor-root-mind-node';

    } else {
        
        item.shape = 'mor-mind-node';

    }

    traverseNodeUpdateMark(item);

};

export const traverseNode = (vm, items) => {

    let root = {
        text : 'root',
        children : items
    };

    G6.Util.traverseTree(root, traverseOneNode.bind(vm));

    return root.children;

};
