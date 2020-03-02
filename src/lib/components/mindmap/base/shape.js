import G6                           from '@antv/g6';
import {
    MIND_NODE_STYLE,
    APPENDS_PADDING,
    APPENDS_MARGIN,
}                                   from '../const/style';
import {NODE_SHAPE_INDEX}           from '../nodes/mindNode';

const _getNodeStyles = (nodeStyle, model) => {

    if (model.shapeStyle === undefined) {

        if (model.depth < 2) {

            model.shapeStyle = 'round-rect';

        } else {

            model.shapeStyle = 'line';

        }

    }

    if (model.shapeStyle === 'line') {
        
        model.anchorPoints = [[0, 1], [1, 1]];

    }

    return G6.Util.deepMix(
        {},
        nodeStyle,
        nodeStyle._shapePresets[model.shapeStyle],
        model.style
    );

};

const _getAppends = model => {

    let style = _getNodeStyles(MIND_NODE_STYLE, model);
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

const _refreshAppendConGroupPosition = (shapes, model) => {

    let style = _getNodeStyles(MIND_NODE_STYLE, model);
    let conPaddingX = style.fontSize * 1.5;
    let conPaddingY = style.fontSize * 0.75;
    let appends = _getAppends(model);
    let textBbox = shapes.text.getBBox();
    let markConGroupBbox = shapes.markConGroup.getBBox();

    if (appends && appends.length > 0) {

        let appendWidthTotal = 0;

        for (let index in appends) {

            let appendCon = shapes.appendConGroup.getChildByIndex(index * 2);
            let appendText = shapes.appendConGroup.getChildByIndex((index * 2) + 1);
            let appendConBbox = appendCon.getBBox();
            let appendTextBbox = appendText.getBBox();
            let appendConX = textBbox.width + markConGroupBbox.width + conPaddingX + APPENDS_MARGIN.left;
            let x = appendConX + appendWidthTotal;

            appendCon.attr({
                x,
                y : (-appendTextBbox.height / 2) + conPaddingY + APPENDS_PADDING.y
            });
            appendText.attr({
                x : x + (appendTextBbox.width / 2) + APPENDS_PADDING.x,
                y : (appendTextBbox.height / 2) + conPaddingY
            });

            appendWidthTotal += appendConBbox.width + APPENDS_PADDING.left;

        }

    }
    
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
    getNodeStyles : _getNodeStyles,
    getAppends : _getAppends,
    refreshAppendConGroupPosition : _refreshAppendConGroupPosition,
};
