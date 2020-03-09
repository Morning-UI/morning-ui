import G6                           from '@antv/g6';
import {
    MIND_NODE_STYLE,
    ROOT_MIND_NODE_STYLE,
    COLLAPSE_BTN_STYLE,
    APPENDS_PADDING,
    APPENDS_MARGIN,
    MARKS_PADDING,
    MARKS_MARGIN,
    OUTLINE_PADDING,
    APPENDS_LIST,
}                                   from '../const/style';
import {
    MARKS
}                                   from '../const/marks';
import {
    refreshAppendConGroupPosition,
    getAppends,
    getNodeStyles,
}                                   from '../base/utils';

let nodeShapeIndex = 0;

const DEBUG_BOX_SIZING = false;
const _NODE_SHAPE_INDEX = {};

const addShape = (group, shapes, name, type, attrs) => {

    if (_NODE_SHAPE_INDEX[name] === undefined) {
    
        _NODE_SHAPE_INDEX[name] = nodeShapeIndex++;

    }

    shapes[name] = group.addShape(type, {
        attrs
    });

    return shapes[name];

};

const addGroup = (group, shapes, name, id) => {

    if (_NODE_SHAPE_INDEX[name] === undefined) {
    
        _NODE_SHAPE_INDEX[name] = nodeShapeIndex++;

    }

    shapes[name] = group.addGroup({
        id,
        attrs : {
            x : 0,
            y : 0
        }
    });

    return shapes[name];

};

const initNodeShapes = (shapes, vm, cfg, group, style) => {

    let cursor = cfg._isRoot ? 'default' : 'move';
    let nodeData = vm.data.graph.findDataById(cfg.id);

    // 最外层容器(不可见)
    addShape(group, shapes, 'box', 'rect', {
        x : 0,
        y : 0,
        fill : 'transparent',
        cursor
    });
    // hover时的外框
    addShape(group, shapes, 'outline', 'rect', {
        fill : DEBUG_BOX_SIZING ? '#efefef' : 'transparent',
        radius : style.outlineRadius,
        cursor,
        stroke : 'transparent',
        lineWidth : 3
    });
    // 容器(可见)
    addShape(group, shapes, 'con', 'rect', {
        fill : DEBUG_BOX_SIZING ? '#ccc' : style.bgColor,
        radius : style.radius,
        cursor,
        lineWidth : style.borderWidth,
        stroke : style.borderColor
    });
    // 文本
    addShape(group, shapes, 'text', 'text', {
        x : 0,
        y : 0,
        text : cfg.text,
        textAlign : 'left',
        textBaseline : 'middle',
        fill : DEBUG_BOX_SIZING ? '#f00' : style.fontColor,
        fontSize : style.fontSize,
        fontWeight : style.fontWeight,
        fontStyle : style.fontStyle,
        cursor
    });
    // 文本占位符
    addShape(group, shapes, 'placeholder', 'text', {
        text : ' ',
        x : 0,
        y : 0,
        textAlign : 'left',
        textBaseline : 'middle',
        fill : DEBUG_BOX_SIZING ? '#d22343' : style.fontColor,
        fontSize : style.fontSize,
        cursor
    });
    addShape(group, shapes, 'bottomline', 'rect', {
        fill : DEBUG_BOX_SIZING ? '#a6a6a6' : style.bottomlineBg
    });
    addGroup(group, shapes, 'markConGroup', `node-${cfg.id}-mark-box`);
    addGroup(group, shapes, 'appendConGroup', `node-${cfg.id}-append-box`);
    addGroup(group, shapes, 'collapseBtnGroup', `node-${cfg.id}-collapse-btn`);

    shapes['collapseBtnGroup.circle'] = shapes.collapseBtnGroup.addShape('circle', {
        attrs : {
            r : COLLAPSE_BTN_STYLE.r,
            fill : COLLAPSE_BTN_STYLE.bgColor,
            stroke : COLLAPSE_BTN_STYLE.borderColor,
        }
    });
    shapes['collapseBtnGroup.icon'] = shapes.collapseBtnGroup.addShape('text', {
        attrs : {
            x : 0,
            y : 0,
            fill : COLLAPSE_BTN_STYLE.fontColor,
            fontFamily : 'morningicon',
            fontSize : 12,
            textAlign : 'center',
            textBaseline : 'middle',
            text : String.fromCharCode(parseInt(`e673;`, 16))
        }
    });

    // 如果没有子节点不显示按钮
    let children = nodeData._collapsed ? nodeData._collapsedChildren : nodeData.children;

    if (!children || children.length === 0) {

        shapes['collapseBtnGroup.circle'].attr({
            fillOpacity : 0,
            strokeOpacity : 0
        });
        shapes['collapseBtnGroup.icon'].attr({
            fillOpacity : 0,
        });

    }

};
const initNodeAppends = (shapes, appends, style) => {
    
    if (appends && appends.length > 0) {

        for (let index in appends) {

            let append = appends[index];
            let appendCon = shapes.appendConGroup.addShape('rect', {
                attrs : {
                    x : 0,
                    y : 0,
                    fill : DEBUG_BOX_SIZING ? '#d8c566' : append.fill,
                    fillOpacity : 0.7,
                    stroke : DEBUG_BOX_SIZING ? '#b39e37' : 'transparent',
                    radius : 3
                },
                zIndex : 99
            });

            let appendText = shapes.appendConGroup.addShape('text', {
                attrs : {
                    x : 0,
                    y : 0,
                    fill : append.textFill || style.fontColor,
                    fillOpacity : 0.6,
                    fontFamily : append.fontFamily,
                    fontSize : append.fontSize,
                    textAlign : 'center',
                    textBaseline : 'middle'
                }
            });

            appendText.attr({
                text : append.genText()
            });

            let appendTextBbox = appendText.getBBox();

            appendCon.attr({
                width : appendTextBbox.width + (APPENDS_PADDING.x * 2),
                height : appendTextBbox.height + (APPENDS_PADDING.y * 2)
            });

        }

    }

};
const initNodeMarks = (shapes, vm, marks, style) => {

    if (marks && marks.length > 0) {

        for (let index in marks) {

            let markName = marks[index];
            let markCon = shapes.markConGroup.addShape('rect', {
                attrs : {
                    x : 0,
                    y : 0,
                    fill : DEBUG_BOX_SIZING ? '#6da5ff' : 'transparent',
                    fillOpacity : 0.7,
                    stroke : DEBUG_BOX_SIZING ? '#2c60b3' : 'transparent',
                    radius : 3
                },
                zIndex : 99
            });

            let mark = shapes.markConGroup.addShape('text', {
                attrs : {
                    x : 0,
                    y : 0,
                    fontFamily : 'morningicon',
                    fontSize : style.fontSize,
                    textAlign : 'center',
                    textBaseline : 'middle',
                    fill : DEBUG_BOX_SIZING ? '#998fea' : MARKS[markName].color,
                    text : String.fromCharCode(parseInt(`${MARKS[markName].iconfont};`, 16))
                }
            });

            let markBbox = mark.getBBox();

            markCon.attr({
                width : markBbox.width + (MARKS_PADDING.x * 2),
                height : markBbox.height + (MARKS_PADDING.y * 2)
            });

        }

    }

};

const adjustPosition = (shapes, cfg) => {

    let style = (cfg._isRoot ? getNodeStyles(ROOT_MIND_NODE_STYLE, cfg) : getNodeStyles(MIND_NODE_STYLE, cfg));
    let markConGroupBbox = shapes.markConGroup.getBBox();
    let appendConGroupBbox = shapes.appendConGroup.getBBox();
    let textX = 0;
    let appends = getAppends(cfg);
    let conPaddingX = style.fontSize * 1.5;
    let conPaddingY = style.fontSize * 0.75;
    let textBbox = shapes.text.getBBox();
    let conWidth = textBbox.width + (conPaddingX * 2);
    let conHeight = textBbox.height + (conPaddingY * 2);

    if (cfg._mark && cfg._mark.length > 0) {

        for (let index in cfg._mark) {

            let markCon = shapes.markConGroup.getChildByIndex(index * 2);
            let mark = shapes.markConGroup.getChildByIndex((index * 2) + 1);
            let markBbox = mark.getBBox();
            let markConBbox = markCon.getBBox();

            markCon.attr({
                x : (markConBbox.width * index) + conPaddingX,
                y : conPaddingY
            });
            mark.attr({
                x : (markConBbox.width * index) + (markConBbox.width / 2) + conPaddingX,
                y : (markConBbox.height / 2) + conPaddingY
            });

        }

        markConGroupBbox = shapes.markConGroup.getBBox();

    }

    if (cfg._mark && cfg._mark.length > 0) {

        conWidth += markConGroupBbox.width;
        conWidth += MARKS_MARGIN.right;
        textX += markConGroupBbox.width;
        textX += MARKS_MARGIN.right;

    }

    if (appends && appends.length > 0) {

        refreshAppendConGroupPosition({
            text : shapes.text,
            markConGroup : shapes.markConGroup,
            appendConGroup : shapes.appendConGroup
        }, cfg);
        appendConGroupBbox = shapes.appendConGroup.getBBox();

    }

    if (appends && appends.length > 0) {

        conWidth += appendConGroupBbox.width;
        conWidth += APPENDS_MARGIN.left;

    }

    shapes.con.attr({
        x : 0,
        y : 0,
        width : conWidth,
        height : conHeight
    });

    let conBbox = shapes.con.getBBox();
    
    shapes.box.attr({
        width : conBbox.width,
        height : conBbox.height
    });
    shapes.box.set('conPaddingX', conPaddingX);
    shapes.box.set('conPaddingY', conPaddingY);

    let boxBbox = shapes.con.getBBox();

    shapes.outline.attr({
        x : boxBbox.minX - OUTLINE_PADDING,
        y : boxBbox.minY - OUTLINE_PADDING,
        width : boxBbox.width + (OUTLINE_PADDING * 2),
        height : boxBbox.height + (OUTLINE_PADDING * 2)
    });

    shapes.text.attr({
        x : textX + conPaddingX,
        y : (textBbox.height / 2) + conPaddingY
    });

    shapes.placeholder.attr({
        x : textX + conPaddingX,
        y : (textBbox.height / 2) + conPaddingY
    });

    shapes.bottomline.attr({
        x : boxBbox.minX - 1,
        y : boxBbox.maxY - 0.5,
        height : style.bottomlineHeight,
        width : boxBbox.width + 2
    });

    shapes.collapseBtnGroup.getChildByIndex(0).attr({
        x : boxBbox.maxX,
        y : (textBbox.height / 2) + conPaddingY
    });

    let collapseBtnBbox = shapes.collapseBtnGroup.getChildByIndex(0).getBBox();

    shapes.collapseBtnGroup.getChildByIndex(1).attr({
        x : collapseBtnBbox.maxX - (collapseBtnBbox.width / 2),
        y : collapseBtnBbox.maxY - (collapseBtnBbox.height / 2)
    });

};

const linkStateChange = (appends, model, states, style) => {

    if (model.link) {

        if (states.indexOf('link-hover') !== -1) {

            appends.linkCon.attr({
                fill : style.outlineColor,
                stroke : style.outlineActiveColor,
                cursor : 'pointer'
            });
            appends.link.attr({
                fillOpacity : 1,
                cursor : 'pointer'
            });

        } else {

            appends.linkCon.attr({
                fill : 'transparent',
                stroke : 'transparent',
                cursor : 'default'
            });
            appends.link.attr({
                fillOpacity : 0.6,
                cursor : 'default'
            });

        }

    }

};

const noteStateChange = (appends, model, states, style) => {

    if (model.note) {

        if (states.indexOf('note-hover') !== -1) {

            appends.noteCon.attr({
                fill : style.outlineColor,
                stroke : style.outlineActiveColor,
                cursor : 'pointer'
            });
            appends.note.attr({
                fillOpacity : 1,
                cursor : 'pointer'
            });

        } else {

            appends.noteCon.attr({
                fill : 'transparent',
                stroke : 'transparent',
                cursor : 'default'
            });
            appends.note.attr({
                fillOpacity : 0.6,
                cursor : 'default'
            });

        }

    }

};

const markStateChange = (shapes, model, states, style) => {

    if (model._mark && model._mark.length > 0) {

        for (let index in model._mark) {

            let markCon = shapes.markConGroup.getChildByIndex(index * 2);
            let mark = shapes.markConGroup.getChildByIndex((index * 2) + 1);

            if (states.indexOf(`mark-${index}-hover`) !== -1) {

                markCon.attr({
                    // fill : style.outlineColor,
                    stroke : style.outlineActiveColor,
                    cursor : 'pointer'
                });
                mark.attr({
                    cursor : 'pointer'
                });

            } else {

                markCon.attr({
                    // fill : 'transparent',
                    stroke : 'transparent',
                    cursor : 'default'
                });
                mark.attr({
                    cursor : 'default'
                });

            }
            
        }

    }

};

const outlineStateChange = (shapes, group, states, style, vm) => {

    if (
        vm.data.dragging === false &&
        (
            states.indexOf('selected') !== -1 ||
            states.indexOf('editing') !== -1
        )
    ) {

        shapes.outline.attr({
            stroke : style.outlineActiveColor,
            lineWidth : 3
        });
        group.set('zIndex', 9);

    } else if (
        vm.data.dragging === false &&
        states.indexOf('hover') !== -1
    ) {

        shapes.outline.attr({
            stroke : style.outlineColor,
            lineWidth : 3
        });
        group.set('zIndex', 3);

    } else {

        shapes.outline.attr({
            stroke : 'transparent',
            lineWidth : 3
        });
        group.set('zIndex', 1);

    }

};

const dragStateChange = (shapes, states) => {

    if (states.indexOf('drag') !== -1) {

        shapes.outline.attr({
            fillOpacity : 0,
            strokeOpacity : 0
        });

    } else {

        shapes.outline.attr({
            fillOpacity : 1,
            strokeOpacity : 1
        });

    }

};

const collapseStateChange = (shapes, states) => {

    if (states.indexOf('collapse-btn-hover') !== -1) {

        shapes.collapseBtnGroup.getChildByIndex(0).attr({
            fill : COLLAPSE_BTN_STYLE.bgHoverColor,
            cursor : 'pointer'
        });
        shapes.collapseBtnGroup.getChildByIndex(1).attr({
            cursor : 'pointer'
        });

    } else {

        shapes.collapseBtnGroup.getChildByIndex(0).attr({
            fill : COLLAPSE_BTN_STYLE.bgColor,
            cursor : 'default'
        });
        shapes.collapseBtnGroup.getChildByIndex(1).attr({
            cursor : 'default'
        });

    }

    if (states.indexOf('children-collapse') !== -1) {

        shapes.collapseBtnGroup.getChildByIndex(1).attr({
            text : String.fromCharCode(parseInt(`e685;`, 16))
        });

    } else {

        shapes.collapseBtnGroup.getChildByIndex(1).attr({
            text : String.fromCharCode(parseInt(`e673;`, 16))
        });

    }

};

export default vm => ({
    drawShape : (cfg, group) => {

        let style;
        let appends = getAppends(cfg);
        let shapes = {};

        if (cfg._isRoot) {

            style = getNodeStyles(ROOT_MIND_NODE_STYLE, cfg);

        } else {

            style = getNodeStyles(MIND_NODE_STYLE, cfg);

        }

        initNodeShapes(shapes, vm, cfg, group, style);
        initNodeAppends(shapes, appends, style);
        initNodeMarks(shapes, vm, cfg._mark, style);
        adjustPosition(shapes, cfg);

        if (cfg._collapsed) {

            vm.collapseChildren(cfg.id, true);

        }

        return shapes.box;

    },
    setState : (name, value, item) => {

        let model = item.getModel();
        let style;

        if (model._isRoot) {

            style = getNodeStyles(ROOT_MIND_NODE_STYLE, model);

        } else {

            style = getNodeStyles(MIND_NODE_STYLE, model);

        }

        let states = item.getStates();
        let box = item.get('keyShape');
        let group = box.getParent();
        let shapes = {
            outline : group.getChildByIndex(_NODE_SHAPE_INDEX.outline),
            markConGroup : group.getChildByIndex(_NODE_SHAPE_INDEX.markConGroup),
            appendConGroup : group.getChildByIndex(_NODE_SHAPE_INDEX.appendConGroup),
            collapseBtnGroup : group.getChildByIndex(_NODE_SHAPE_INDEX.collapseBtnGroup),
        };

        let linkIndex = APPENDS_LIST.link.index;
        let noteIndex = APPENDS_LIST.note.index;

        if (!model.link) {

            noteIndex = linkIndex;

        }

        let appends = {
            linkCon : shapes.appendConGroup.getChildByIndex(linkIndex),
            link : shapes.appendConGroup.getChildByIndex(linkIndex + 1),
            noteCon : shapes.appendConGroup.getChildByIndex(noteIndex),
            note : shapes.appendConGroup.getChildByIndex(noteIndex + 1)
        };

        dragStateChange(shapes, states);
        linkStateChange(appends, model, states, style);
        noteStateChange(appends, model, states, style);
        markStateChange(shapes, model, states, style);
        outlineStateChange(shapes, group, states, style, vm);
        collapseStateChange(shapes, states);

    }
});

export const NODE_SHAPE_INDEX = _NODE_SHAPE_INDEX;
export const mindNodeAdjustPosition = adjustPosition;
