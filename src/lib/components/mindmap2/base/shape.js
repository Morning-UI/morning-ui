import G6                           from '@antv/g6';
import {
    OUTLINE_SHAPE_INDEX,
    CON_SHAPE_INDEX,
    TEXT_SHAPE_INDEX,
    PLACEHOLDER_SHAPE_INDEX,
    BOTTOMLINE_SHAPE_INDEX,
    MARK_CON_GROUP_INDEX,
    APPEND_CON_GROUP_INDEX,
    EXPAND_BTN_GROUP_INDEX
}                                   from '../const/shapeIndex';
import {
    OUTLINE_PADDING,
    ANNEXR_PADDING,
    MIND_NODE_STYLE,
    ANNEX_MARGIN,
}                                   from '../const/nodeStyle';

// const _getNodeStyles = (nodeStyle, model) => {

//     if (model.shapeStyle === undefined) {

//         if (model.depth < 2) {

//             model.shapeStyle = 'round-rect';

//         } else {

//             model.shapeStyle = 'line';

//         }

//     }

//     if (model.shapeStyle === 'line') {
        
//         model.anchorPoints = [[0, 1], [1, 1]];

//     }

//     return G6.Util.deepMix({}, nodeStyle, nodeStyle._shapePresets[model.shapeStyle], model.style);

// };

// const _getAppends = model => {

//     let style = _getNodeStyles(MIND_NODE_STYLE, model);
//     let appends = [];

//     if (model.link) {

//         appends.push({
//             fontFamily : 'morningicon',
//             fontSize : style.fontSize,
//             genText : () => String.fromCharCode(parseInt('e704;', 16))
//         });

//     }

//     if (model.note) {

//         appends.push({
//             fontFamily : 'morningicon',
//             fontSize : style.fontSize,
//             fill : 'transparent',
//             genText : () => String.fromCharCode(parseInt('e605;', 16))
//         });

//     }

//     if (model.tag) {
        
//         for (let tag of model.tag) {

//             appends.push({
//                 fontFamily : undefined,
//                 fontSize : style.fontSize,
//                 fill : tag.background || '#E0E0E0',
//                 textFill : tag.color || '#000000',
//                 genText : () => tag.text || tag
//             });

//         }

//     }

//     return appends;

// };

// const _refreshAppendConGroupPosition = (groupShapes, model) => {

//     let {
//         text,
//         markConGroup,
//         appendConGroup
//     } = groupShapes;
//     let style = _getNodeStyles(MIND_NODE_STYLE, model);
//     let conPaddingX = style.fontSize * 1.5;
//     let conPaddingY = style.fontSize * 0.75;
//     let appends = _getAppends(model);
//     let textBbox = text.getBBox();
//     let markConGroupBbox = markConGroup.getBBox();

//     if (appends && appends.length > 0) {

//         let appendWidthTotal = 0;

//         for (let index in appends) {

//             let appendCon = appendConGroup.getChildByIndex(index * 2);
//             let appendText = appendConGroup.getChildByIndex((index * 2) + 1);
//             let appendConBbox = appendCon.getBBox();
//             let appendTextBbox = appendText.getBBox();
//             let appendConX = textBbox.width + markConGroupBbox.width + conPaddingX + ANNEX_MARGIN.left;
//             let x = appendConX + appendWidthTotal;

//             appendCon.attr({
//                 x,
//                 y : (-appendTextBbox.height / 2) + conPaddingY + ANNEXR_PADDING.y
//             });
//             appendText.attr({
//                 x : x + (appendTextBbox.width / 2) + ANNEXR_PADDING.x,
//                 y : (appendTextBbox.height / 2) + conPaddingY
//             });

//             appendWidthTotal += appendConBbox.width + ANNEX_MARGIN.left;

//         }

//     }
    
// };

// const _toggleAllChildren = (node, type, callback) => {

//     let outEdges = node.getOutEdges();

//     for (let edge of outEdges) {

//         let child = edge.getTarget();
//         let model = child.getModel();
        
//         edge[type]();
//         child[type]();

//         if (typeof callback === 'function') {

//             callback(type, model);

//         }

//         if (child.getOutEdges().length > 0) {

//             _toggleAllChildren(child, type, callback);

//         }

//     }

// };

export default {
    // getGroupShapes : item => {

    //     let box = item.getKeyShape();
    //     let group = box.getParent();
    //     let con = group.getChildByIndex(CON_SHAPE_INDEX);
    //     let outline = group.getChildByIndex(OUTLINE_SHAPE_INDEX);
    //     let text = group.getChildByIndex(TEXT_SHAPE_INDEX);
    //     let placeholder = group.getChildByIndex(PLACEHOLDER_SHAPE_INDEX);
    //     let bottomline = group.getChildByIndex(BOTTOMLINE_SHAPE_INDEX);
    //     let markConGroup = group.getChildByIndex(MARK_CON_GROUP_INDEX);
    //     let appendConGroup = group.getChildByIndex(APPEND_CON_GROUP_INDEX);
    //     let expantBtn = group.getChildByIndex(EXPAND_BTN_GROUP_INDEX);

    //     return {
    //         con,
    //         box,
    //         text,
    //         outline,
    //         placeholder,
    //         bottomline,
    //         markConGroup,
    //         appendConGroup,
    //         expantBtn
    //     };

    // },
    refreshMindNode : (groupShapes, model) => {

        let {
            box,
            outline,
            con,
            text,
            placeholder,
            bottomline,
            markConGroup,
            appendConGroup,
            expantBtn
        } = groupShapes;
        let textBbox = text.getBBox();
        let conPaddingX = box.get('conPaddingX');
        let conPaddingY = box.get('conPaddingY');

        // when text is empty use placeholder
        if (textBbox.width === 0) {
            
            textBbox = groupShapes.placeholder.getBBox();

        }

        let conWidth = textBbox.width + (conPaddingX * 2);
        let conHeight = textBbox.height + (conPaddingY * 2);
        let markConGroupBbox = markConGroup.getBBox();
        let appendConGroupBbox = appendConGroup.getBBox();

        if (model.note || model.link) {

            conWidth += conPaddingX / 2;

        }

        if (model._mark && model._mark.length > 0) {

            conWidth += markConGroupBbox.width;

        }

        if (model.link || model.note || (model.tag && model.tag.length > 0)) {

            conWidth += appendConGroupBbox.width;

        }

        con.attr({
            width : conWidth,
            height : conHeight
        });

        let conBbox = con.getBBox();
        
        outline.attr({
            width : conBbox.width + (OUTLINE_PADDING * 2),
            height : conBbox.height + (OUTLINE_PADDING * 2)
        });

        box.attr({
            width : conBbox.width,
            height : conBbox.height
        });

        placeholder.attr({
            y : (textBbox.height / 2) + conPaddingY
        });

        text.attr({
            y : (textBbox.height / 2) + conPaddingY
        });

        let boxBbox = box.getBBox();

        bottomline.attr({
            x : boxBbox.minX - 1,
            y : boxBbox.maxY - 0.5,
            width : boxBbox.width + 2
        });

        expantBtn.attr({
            x : boxBbox.maxX,
            y : (textBbox.height / 2) + conPaddingY
        });
        
        _refreshAppendConGroupPosition(groupShapes, model);

    },
    // toggleNodeBox : (node, type = 'show', callback) => {

    //     // 隐藏边
    //     node.getInEdges()[0][type]();

    //     // 隐藏文本和主容器
    //     node
    //         .get('group')
    //         .getChildByIndex(TEXT_SHAPE_INDEX)[
    //             type
    //         ]();
    //     node
    //         .get('group')
    //         .getChildByIndex(CON_SHAPE_INDEX)[
    //             type
    //         ]();
    //     node
    //         .get('group')
    //         .getChildByIndex(BOTTOMLINE_SHAPE_INDEX)[
    //             type
    //         ]();
    //     node
    //         .get('group')
    //         .getChildByIndex(MARK_CON_GROUP_INDEX)[
    //             type
    //         ]();
    //     node
    //         .get('group')
    //         .getChildByIndex(APPEND_CON_GROUP_INDEX)[
    //             type
    //         ]();
    //     node
    //         .get('group')
    //         .getChildByIndex(EXPAND_BTN_GROUP_INDEX)[
    //             type
    //         ]();
        
    //     // 隐藏所有子项
    //     _toggleAllChildren(node, type, callback);

    // },
    getNodeStyles : _getNodeStyles,
    refreshAppendConGroupPosition : _refreshAppendConGroupPosition,
    getAppends : _getAppends
};
