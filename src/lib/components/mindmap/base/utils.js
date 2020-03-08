import G6                           from '@antv/g6';
import cloneDeep                    from 'lodash.clonedeep';
import {NODE_SHAPE_INDEX}           from '../nodes/mindNode';
import {
    MARKS
}                                   from '../const/marks';
import {
    MIND_NODE_STYLE,
    APPENDS_MARGIN,
    APPENDS_PADDING,
}                                   from '../const/style';

let dataGetter = {
    text : item => (item.text),
    link : item => (item.link),
    mark : item => (item.mark),
    note : item => (item.note),
    tag : item => (item.tag),
    children : (item, callback) => {

        let children = item._collapsed ? item._collapsedChildren : item.children;

        if (!children) {

            return;

        }

        return callback(children);
    
    },
};

let detailGetter = Object.assign({

}, dataGetter);

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

export const getNodeStyles = (nodeStyle, model) => {

    if (model.depth < 2) {

        model._shapeStyle = 'round-rect';

    } else {

        model._shapeStyle = 'line';

    }

    if (model._shapeStyle === 'line') {
        
        model.anchorPoints = [[0, 1], [1, 1]];

    } else {
        
        model.anchorPoints = [[0, 0.5], [1, 0.5]];

    }

    return G6.Util.deepMix(
        {},
        nodeStyle,
        nodeStyle._shapePresets[model._shapeStyle],
        model.style
    );

};

export const getAppends = model => {

    let style = getNodeStyles(MIND_NODE_STYLE, model);
    let appends = [];

    if (model.link) {

        appends.push({
            fontFamily : 'morningicon',
            fontSize : style.fontSize,
            genText : () => String.fromCharCode(parseInt('e704;', 16))
        });

    }

    if (model.note) {

        appends.push({
            fontFamily : 'morningicon',
            fontSize : style.fontSize,
            fill : 'transparent',
            genText : () => String.fromCharCode(parseInt('e605;', 16))
        });

    }

    if (model.tag) {
        
        for (let tag of model.tag) {

            appends.push({
                fontFamily : undefined,
                fontSize : style.fontSize,
                fill : tag.background || '#E0E0E0',
                textFill : tag.color || '#000000',
                genText : () => tag.text || tag
            });

        }

    }

    return appends;

};

export const refreshAppendConGroupPosition = (shapes, model) => {

    let style = getNodeStyles(MIND_NODE_STYLE, model);
    let conPaddingX = style.fontSize * 1.5;
    let conPaddingY = style.fontSize * 0.75;
    let appends = getAppends(model);
    let textBbox = shapes.text.getBBox();
    let markConGroupBbox = shapes.markConGroup.getBBox();

    if (appends && appends.length > 0) {

        let appendWidthTotal = 0;
        let appendConX = textBbox.width + markConGroupBbox.width + conPaddingX + APPENDS_MARGIN.left;

        for (let index in appends) {

            let appendCon = shapes.appendConGroup.getChildByIndex(index * 2);
            let appendText = shapes.appendConGroup.getChildByIndex((index * 2) + 1);
            let appendConBbox = appendCon.getBBox();
            let appendTextBbox = appendText.getBBox();
            let x = appendConX + appendWidthTotal + ((appendConBbox.width - appendTextBbox.width) / 2);

            appendCon.attr({
                x,
                y : (-appendTextBbox.height / 2) + conPaddingY + APPENDS_PADDING.y
            });
            appendText.attr({
                x : x + (appendTextBbox.width / 2) + APPENDS_PADDING.x,
                y : (appendTextBbox.height / 2) + conPaddingY
            });

            appendWidthTotal += appendConBbox.width;

        }

    }
    
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

export const pluckDataFromNodes = children => {

    let cleanData = [];

    if (!(children instanceof Array)) {

        children = [children];

    }

    for (let item of children) {

        let cleanItem = {};

        for (let key in dataGetter) {

            cleanItem[key] = dataGetter[key](item, pluckDataFromNodes);

        }

        cleanData.push(cleanItem);

    }

    return cleanData;

};

export const pluckDetailFromNode = children => {

    let details = [];

    if (!(children instanceof Array)) {

        children = [children];

    }

    for (let item of children) {

        let cleanItem = {};

        for (let key in detailGetter) {

            cleanItem[key] = detailGetter[key](item, pluckDetailFromNode);

        }

        details.push(cleanItem);

    }

    return details;

};

export const traverseOneNode = function (item) {

    // ITEM INCLUEDS:

    // just data >>>
    // text : 文案
    // children : 子节点
    // link : 链接
    // tag : 标签
    // note : 备注
    // mark : 标记(用户设置)

    // for G6 >>>
    // id : node id
    // shape : 使用的图形
    // style : 样式
    // anchorPoints : 锚点

    // for custom >>>

    // for inside >>>
    // _isRoot : 根节点
    // _isMindNode
    // _isDragging : 正在拖拽
    // _shapeStyle : 计算完的图形样式
    // _origin : 原始数据
    // _mark : 标记(经过转换后)
    // _collapsed : 子节点折叠状态
    // _collapsedChildren : 用于存放被折叠的子节点

    // for TODO :
    // shapeStyle : 使用的图形样式（用户设置）；未启用；

    if (item._origin === undefined) {
    
        item._origin = pluckDataFromNodes(item)[0];

    }

    item.id = item.id || this.data.globalId++;
    item.anchorPoints = item.anchorPoints || [[0, 0.5], [1, 0.5]];
    item.shape = 'mor-mind-node';
    item.style = {};

    if (item.id === 1) {

        item._isRoot = true;

    }

    item._isMindNode = true;
    item._shapeStyle = item._shapeStyle || undefined;
    item._collapsed = item._collapsed || false;
    item._collapsedChildren = item._collapsedChildren || [];
    // item.shapeStyle = item.shapeStyle;
    // item._shape = item.shape;
    
    this.data.dataMap[item.id] = item;
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
