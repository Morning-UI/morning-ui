import {NODE_SHAPE_INDEX}           from '../nodes/mindNode';

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
