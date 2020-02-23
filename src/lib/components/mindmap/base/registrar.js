import SHAPE_INDEX                  from '../const/shapeIndex';
import ANNEX_LIST                   from '../const/annexList';
import ANNEX_PADDING                from '../const/annexPadding';
import MARKS                        from '../const/marks';

// same as : 'index.vue : lineColor'
const lineColor = 'rgba(51, 51, 51, 1)';

// same as : 'index.vue : outlinePadding'
const outlinePadding = 3;

// same as : 'index.vue : mindNodeStyle'
const mindNodeStyle = {
    bgColor : '#e8e8e8',
    fontColor : 'rgba(0, 0, 0, 1)',
    fontSize : 16,
    fontWeight : 400,
    fontStyle : 'normal',
    borderWidth : 1,
    borderColor : lineColor,
    outlineColor : '#8cdcf5',
    outlineActiveColor : '#27befc',
    outlineRadius : 6,
    _shapePresets : {
        'round-rect' : {
            radius : 6
        },
        rect : {
            radius : 0
        },
        'half-round-rect' : {
            // 动态计算
            computedRadius : 0.5,
            radius : 0
        },
        line : {
            bgColor : 'transparent',
            borderColor : 'transparent',
            borderWidth : 0,
            bottomlineBg : lineColor,
            bottomlineHeight : 2
        }
    }
};

const rootMindNodeStyle = {
    bgColor : 'rgba(35, 123, 191, 1)',
    fontColor : 'rgba(255, 255, 255, 1)',
    fontSize : 24,
    fontWeight : 400,
    fontStyle : 'normal',
    borderWidth : 0,
    borderColor : lineColor,
    outlineColor : '#8cdcf5',
    outlineActiveColor : '#27befc',
    outlineRadius : 6,
    _shapePresets : {
        'round-rect' : {
            radius : 6
        },
        rect : {
            radius : 0
        },
        'half-round-rect' : {
            // 动态计算
            computedRadius : 0.5,
            radius : 0
        },
        line : {
            fontColor : 'rgba(0, 0, 0, 1)',
            bgColor : 'transparent',
            borderColor : 'transparent',
            borderWidth : 0,
            bottomlineBg : lineColor,
            bottomlineHeight : 2
        }
    }
};

export default {
    methods : {
        /* eslint-disable no-magic-numbers */
        _regRootMindNode : function () {

            this.G6.registerNode('mor-root-mind-node', {
                drawShape : (cfg, group) => {

                    let cursor = 'default';
                    let style = this._getNodeStyles(rootMindNodeStyle, cfg);
                    let conPaddingX = style.fontSize * 1.5;
                    let conPaddingY = style.fontSize * 0.75;
                    let box = group.addShape('rect', {
                        attrs : {
                            x : 0,
                            y : 0,
                            fill : 'transparent',
                            cursor
                        }
                    });
                    let outline = group.addShape('rect', {
                        attrs : {
                            fill : 'transparent',
                            radius : style.outlineRadius,
                            cursor,
                            stroke : 'transparent',
                            lineWidth : 3
                        }
                    });
                    let con = group.addShape('rect', {
                        attrs : {
                            fill : style.bgColor,
                            radius : style.radius,
                            cursor,
                            lineWidth : style.borderWidth,
                            stroke : style.borderColor
                        }
                    });
                    let text = group.addShape('text', {
                        attrs : {
                            x : 0,
                            y : 0,
                            text : cfg.text,
                            textAlign : 'left',
                            textBaseline : 'middle',
                            fill : style.fontColor,
                            fontSize : style.fontSize,
                            fontWeight : style.fontWeight,
                            fontStyle : style.fontStyle,
                            cursor
                        }
                    });
                    let placeholder = group.addShape('text', {
                        attrs : {
                            text : ' ',
                            x : 0,
                            y : 0,
                            textAlign : 'left',
                            textBaseline : 'middle',
                            fill : style.fontColor,
                            fontSize : style.fontSize,
                            cursor
                        }
                    });
                    let bottomline = group.addShape('rect', {
                        attrs : {
                            fill : style.bottomlineBg
                        }
                    });
                    let markConGroup = group.addGroup({
                        id : `node-${cfg.id}-mark-box`,
                        attrs : {
                            x : 0,
                            y : 0
                        }
                    });
                    let appendConGroup = group.addGroup({
                        id : `node-${cfg.id}-append-box`,
                        attrs : {
                            x : 0,
                            y : 0
                        }
                    });
                    let appends = this._getAppends(cfg);

                    if (appends && appends.length > 0) {
    
                        for (let index in appends) {

                            let append = appends[index];
                            let appendCon = appendConGroup.addShape('rect', {
                                attrs : {
                                    x : 0,
                                    y : 0,
                                    fill : append.fill,
                                    fillOpacity : 0.7,
                                    stroke : 'transparent',
                                    radius : 3
                                },
                                zIndex : 99
                            });

                            let appendText = appendConGroup.addShape('text', {
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
                                width : appendTextBbox.width + (ANNEX_PADDING.X * 2),
                                height : appendTextBbox.height + (ANNEX_PADDING.Y * 2)
                            });

                        }

                    }
                    
                    if (cfg._mark && cfg._mark.length > 0) {
    
                        for (let index in cfg._mark) {

                            let markName = cfg._mark[index];
                            let markCon = markConGroup.addShape('rect', {
                                attrs : {
                                    x : 0,
                                    y : 0,
                                    fill : 'transparent',
                                    fillOpacity : 0.7,
                                    stroke : 'transparent',
                                    radius : 3
                                },
                                zIndex : 99
                            });

                            let mark = markConGroup.addShape('text', {
                                attrs : {
                                    x : 0,
                                    y : 0,
                                    fontFamily : 'morningicon',
                                    fontSize : style.fontSize,
                                    textAlign : 'center',
                                    textBaseline : 'middle',
                                    fill : MARKS[markName].color,
                                    text : String.fromCharCode(parseInt(`${MARKS[markName].iconfont};`, 16))
                                }
                            });

                            let markBbox = mark.getBBox();
                            
                            markCon.attr({
                                // x : (-markBbox.width / 2) - annexPadding + (markBbox.width * index),
                                // y : (-markBbox.height / 2) - annexPadding,
                                width : markBbox.width,
                                height : markBbox.height + (ANNEX_PADDING.Y * 2)
                            });

                        }

                    }   

                    let markConGroupBbox = markConGroup.getBBox();
                    let appendConGroupBbox = appendConGroup.getBBox();
                    let textBbox = text.getBBox();
                    let conWidth = textBbox.width + (conPaddingX * 2);
                    let conHeight = textBbox.height + (conPaddingY * 2);
                    let textX = 0;

                    if (cfg._mark && cfg._mark.length > 0) {

                        for (let index in cfg._mark) {

                            let markCon = markConGroup.getChildren()[index * 2];
                            let mark = markConGroup.getChildren()[(index * 2) + 1];
                            let markBbox = mark.getBBox();
                            let markConBbox = markCon.getBBox();

                            markCon.attr({
                                x : (-markBbox.width / 2) + (markConBbox.width * index),
                                y : (-markBbox.height / 2) + conPaddingY + ANNEX_PADDING.Y
                            });
                            mark.attr({
                                x : (markBbox.width / 4) + (markConBbox.width * index) + conPaddingX,
                                y : (markBbox.height / 2) + conPaddingY
                            });

                        }

                        markConGroupBbox = markConGroup.getBBox();

                    }

                    if (appends && appends.length > 0) {

                        this._refreshAppendConGroupPosition({
                            text,
                            markConGroup,
                            appendConGroup
                        }, cfg);
                        appendConGroupBbox = appendConGroup.getBBox();

                    }

                    if (cfg._mark && cfg._mark.length > 0) {

                        conWidth += markConGroupBbox.width;
                        textX = markConGroupBbox.width;

                    }

                    if (appends && appends.length > 0) {

                        conWidth += appendConGroupBbox.width;

                    }

                    con.attr({
                        x : 0,
                        y : 0,
                        width : conWidth,
                        height : conHeight
                    });

                    let conBbox = con.getBBox();

                    box.attr({
                        width : conBbox.width,
                        height : conBbox.height
                    });
                    box.set('conPaddingX', conPaddingX);
                    box.set('conPaddingY', conPaddingY);

                    let boxBbox = con.getBBox();

                    outline.attr({
                        x : boxBbox.minX - outlinePadding,
                        y : boxBbox.minY - outlinePadding,
                        width : boxBbox.width + (outlinePadding * 2),
                        height : boxBbox.height + (outlinePadding * 2)
                    });

                    text.attr({
                        x : textX + conPaddingX,
                        y : (textBbox.height / 2) + conPaddingY
                    });

                    placeholder.attr({
                        x : textX + conPaddingX,
                        y : (textBbox.height / 2) + conPaddingY
                    });

                    bottomline.attr({
                        x : boxBbox.minX - 1,
                        y : boxBbox.maxY - 0.5,
                        height : style.bottomlineHeight,
                        width : boxBbox.width + 2
                    });

                    return box;

                },
                setState : (name, value, item) => {

                    let model = item.getModel();
                    let style = this._getNodeStyles(rootMindNodeStyle, model);
                    let states = item.getStates();
                    let box = item.get('keyShape');
                    let group = box.getParent();
                    let outline = group.getChildren()[SHAPE_INDEX.OUTLINE];
                    let markConGroup = group.getChildren()[SHAPE_INDEX.MARKCON_GROUPINDEX];
                    let appendConGroup = group.getChildren()[SHAPE_INDEX.APPENDCON_GROUPINDEX];
                    let linkIndex = ANNEX_LIST.LINK.index;
                    let noteIndex = ANNEX_LIST.NOTE.index;

                    if (!model.link) {

                        noteIndex = linkIndex;

                    }

                    let linkCon = appendConGroup.getChildren()[linkIndex];
                    let link = appendConGroup.getChildren()[linkIndex + 1];
                    let noteCon = appendConGroup.getChildren()[noteIndex];
                    let note = appendConGroup.getChildren()[noteIndex + 1];

                    if (states.indexOf('drag') !== -1) {

                        outline.attr({
                            fillOpacity : 0,
                            strokeOpacity : 0
                        });

                    } else {

                        outline.attr({
                            fillOpacity : 1,
                            strokeOpacity : 1
                        });

                    }

                    if (model.link) {

                        if (states.indexOf('link-hover') !== -1) {

                            linkCon.attr({
                                fill : style.outlineColor,
                                stroke : style.outlineActiveColor,
                                cursor : 'pointer'
                            });
                            link.attr({
                                fillOpacity : 1,
                                cursor : 'pointer'
                            });

                        } else {

                            linkCon.attr({
                                fill : 'transparent',
                                stroke : 'transparent',
                                cursor : 'default'
                            });
                            link.attr({
                                fillOpacity : 0.6,
                                cursor : 'default'
                            });

                        }

                    }

                    if (model.note) {

                        if (states.indexOf('note-hover') !== -1) {

                            noteCon.attr({
                                fill : style.outlineColor,
                                stroke : style.outlineActiveColor,
                                cursor : 'pointer'
                            });
                            note.attr({
                                fillOpacity : 1,
                                cursor : 'pointer'
                            });

                        } else {

                            noteCon.attr({
                                fill : 'transparent',
                                stroke : 'transparent',
                                cursor : 'default'
                            });
                            note.attr({
                                fillOpacity : 0.6,
                                cursor : 'default'
                            });

                        }

                    }

                    if (model._mark && model._mark.length > 0) {

                        for (let index in model._mark) {

                            let markCon = markConGroup.getChildren()[index * 2];
                            let mark = markConGroup.getChildren()[(index * 2) + 1];

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

                    if (
                        this.data.dragging === false &&
                        (
                            states.indexOf('selected') !== -1 ||
                            states.indexOf('editing') !== -1
                        )
                    ) {

                        outline.attr({
                            stroke : style.outlineActiveColor,
                            lineWidth : 3
                        });
                        group.set('zIndex', 9);

                    } else if (
                        this.data.dragging === false &&
                        states.indexOf('hover') !== -1
                    ) {

                        outline.attr({
                            stroke : style.outlineColor,
                            lineWidth : 3
                        });
                        group.set('zIndex', 3);

                    } else {

                        outline.attr({
                            stroke : 'transparent',
                            lineWidth : 3
                        });
                        group.set('zIndex', 1);

                    }

                }
            }, 'single-shape');

        },
        _regMindNode : function () {

            this.G6.registerNode('mor-mind-node', {
                drawShape : (cfg, group) => {

                    let cursor = 'move';
                    let style = this._getNodeStyles(mindNodeStyle, cfg);
                    let conPaddingX = style.fontSize * 1.5;
                    let conPaddingY = style.fontSize * 0.75;
                    let box = group.addShape('rect', {
                        attrs : {
                            x : 0,
                            y : 0,
                            fill : 'transparent',
                            cursor
                        }
                    });
                    let outline = group.addShape('rect', {
                        attrs : {
                            fill : 'transparent',
                            radius : style.outlineRadius,
                            cursor,
                            stroke : 'transparent',
                            lineWidth : 3
                        }
                    });
                    let con = group.addShape('rect', {
                        attrs : {
                            fill : style.bgColor,
                            radius : style.radius,
                            cursor,
                            lineWidth : style.borderWidth,
                            stroke : style.borderColor
                        }
                    });
                    let text = group.addShape('text', {
                        attrs : {
                            x : 0,
                            y : 0,
                            text : cfg.text,
                            textAlign : 'left',
                            textBaseline : 'middle',
                            fill : style.fontColor,
                            fontSize : style.fontSize,
                            fontWeight : style.fontWeight,
                            fontStyle : style.fontStyle,
                            cursor
                        }
                    });
                    let placeholder = group.addShape('text', {
                        attrs : {
                            text : ' ',
                            x : 0,
                            y : 0,
                            textAlign : 'left',
                            textBaseline : 'middle',
                            fill : style.fontColor,
                            fontSize : style.fontSize,
                            cursor
                        }
                    });
                    let bottomline = group.addShape('rect', {
                        attrs : {
                            fill : style.bottomlineBg
                        }
                    });
                    let markConGroup = group.addGroup({
                        id : `node-${cfg.id}-mark-box`,
                        attrs : {
                            x : 0,
                            y : 0
                        }
                    });
                    let appendConGroup = group.addGroup({
                        id : `node-${cfg.id}-append-box`,
                        attrs : {
                            x : 0,
                            y : 0
                        }
                    });
                    let appends = this._getAppends(cfg);

                    if (appends && appends.length > 0) {
    
                        for (let index in appends) {

                            let append = appends[index];
                            let appendCon = appendConGroup.addShape('rect', {
                                attrs : {
                                    x : 0,
                                    y : 0,
                                    fill : append.fill,
                                    fillOpacity : 0.7,
                                    stroke : 'transparent',
                                    radius : 3
                                },
                                zIndex : 99
                            });

                            let appendText = appendConGroup.addShape('text', {
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
                                width : appendTextBbox.width + (ANNEX_PADDING.X * 2),
                                height : appendTextBbox.height + (ANNEX_PADDING.Y * 2)
                            });

                        }

                    }
                    
                    if (cfg._mark && cfg._mark.length > 0) {
    
                        for (let index in cfg._mark) {

                            let markName = cfg._mark[index];
                            let markCon = markConGroup.addShape('rect', {
                                attrs : {
                                    x : 0,
                                    y : 0,
                                    fill : 'transparent',
                                    fillOpacity : 0.7,
                                    stroke : 'transparent',
                                    radius : 3
                                },
                                zIndex : 99
                            });

                            let mark = markConGroup.addShape('text', {
                                attrs : {
                                    x : 0,
                                    y : 0,
                                    fontFamily : 'morningicon',
                                    fontSize : style.fontSize,
                                    textAlign : 'center',
                                    textBaseline : 'middle',
                                    fill : MARKS[markName].color,
                                    text : String.fromCharCode(parseInt(`${MARKS[markName].iconfont};`, 16))
                                }
                            });

                            let markBbox = mark.getBBox();
                            
                            markCon.attr({
                                // x : (-markBbox.width / 2) - annexPadding + (markBbox.width * index),
                                // y : (-markBbox.height / 2) - annexPadding,
                                width : markBbox.width,
                                height : markBbox.height + (ANNEX_PADDING.Y * 2)
                            });

                        }

                    }

                    let markConGroupBbox = markConGroup.getBBox();
                    let appendConGroupBbox = appendConGroup.getBBox();
                    let textBbox = text.getBBox();
                    let conWidth = textBbox.width + (conPaddingX * 2);
                    let conHeight = textBbox.height + (conPaddingY * 2);
                    let textX = 0;

                    if (cfg._mark && cfg._mark.length > 0) {

                        for (let index in cfg._mark) {

                            let markCon = markConGroup.getChildren()[index * 2];
                            let mark = markConGroup.getChildren()[(index * 2) + 1];
                            let markBbox = mark.getBBox();
                            let markConBbox = markCon.getBBox();

                            markCon.attr({
                                x : (-markBbox.width / 2) + (markConBbox.width * index),
                                y : (-markBbox.height / 2) + conPaddingY + ANNEX_PADDING.Y
                            });
                            mark.attr({
                                x : (markBbox.width / 4) + (markConBbox.width * index) + conPaddingX,
                                y : (markBbox.height / 2) + conPaddingY
                            });

                        }

                        markConGroupBbox = markConGroup.getBBox();

                    }

                    if (appends && appends.length > 0) {

                        this._refreshAppendConGroupPosition({
                            text,
                            markConGroup,
                            appendConGroup
                        }, cfg);
                        appendConGroupBbox = appendConGroup.getBBox();

                    }

                    if (cfg._mark && cfg._mark.length > 0) {

                        conWidth += markConGroupBbox.width;
                        textX = markConGroupBbox.width;

                    }

                    if (appends && appends.length > 0) {

                        conWidth += appendConGroupBbox.width;

                    }

                    con.attr({
                        x : 0,
                        y : 0,
                        width : conWidth,
                        height : conHeight
                    });

                    let conBbox = con.getBBox();

                    box.attr({
                        width : conBbox.width,
                        height : conBbox.height
                    });
                    box.set('conPaddingX', conPaddingX);
                    box.set('conPaddingY', conPaddingY);

                    let boxBbox = con.getBBox();

                    outline.attr({
                        x : boxBbox.minX - outlinePadding,
                        y : boxBbox.minY - outlinePadding,
                        width : boxBbox.width + (outlinePadding * 2),
                        height : boxBbox.height + (outlinePadding * 2)
                    });

                    text.attr({
                        x : textX + conPaddingX,
                        y : (textBbox.height / 2) + conPaddingY
                    });

                    placeholder.attr({
                        x : textX + conPaddingX,
                        y : (textBbox.height / 2) + conPaddingY
                    });

                    bottomline.attr({
                        x : boxBbox.minX - 1,
                        y : boxBbox.maxY - 0.5,
                        height : style.bottomlineHeight,
                        width : boxBbox.width + 2
                    });

                    return box;

                },
                setState : (name, value, item) => {

                    let model = item.getModel();
                    let style = this._getNodeStyles(mindNodeStyle, model);
                    let states = item.getStates();
                    let box = item.get('keyShape');
                    let group = box.getParent();
                    let outline = group.getChildren()[SHAPE_INDEX.OUTLINE];
                    let markConGroup = group.getChildren()[SHAPE_INDEX.MARKCON_GROUPINDEX];
                    let appendConGroup = group.getChildren()[SHAPE_INDEX.APPENDCON_GROUPINDEX];
                    let linkIndex = ANNEX_LIST.LINK.index;
                    let noteIndex = ANNEX_LIST.NOTE.index;

                    if (!model.link) {

                        noteIndex = linkIndex;

                    }

                    let linkCon = appendConGroup.getChildren()[linkIndex];
                    let link = appendConGroup.getChildren()[linkIndex + 1];
                    let noteCon = appendConGroup.getChildren()[noteIndex];
                    let note = appendConGroup.getChildren()[noteIndex + 1];

                    if (states.indexOf('drag') !== -1) {

                        outline.attr({
                            fillOpacity : 0,
                            strokeOpacity : 0
                        });

                    } else {

                        outline.attr({
                            fillOpacity : 1,
                            strokeOpacity : 1
                        });

                    }

                    if (model.link) {

                        if (states.indexOf('link-hover') !== -1) {

                            linkCon.attr({
                                fill : style.outlineColor,
                                stroke : style.outlineActiveColor,
                                cursor : 'pointer'
                            });
                            link.attr({
                                fillOpacity : 1,
                                cursor : 'pointer'
                            });

                        } else {

                            linkCon.attr({
                                fill : 'transparent',
                                stroke : 'transparent',
                                cursor : 'default'
                            });
                            link.attr({
                                fillOpacity : 0.6,
                                cursor : 'default'
                            });

                        }

                    }

                    if (model.note) {

                        if (states.indexOf('note-hover') !== -1) {

                            noteCon.attr({
                                fill : style.outlineColor,
                                stroke : style.outlineActiveColor,
                                cursor : 'pointer'
                            });
                            note.attr({
                                fillOpacity : 1,
                                cursor : 'pointer'
                            });

                        } else {

                            noteCon.attr({
                                fill : 'transparent',
                                stroke : 'transparent',
                                cursor : 'default'
                            });
                            note.attr({
                                fillOpacity : 0.6,
                                cursor : 'default'
                            });

                        }

                    }

                    if (model._mark && model._mark.length > 0) {

                        for (let index in model._mark) {

                            let markCon = markConGroup.getChildren()[index * 2];
                            let mark = markConGroup.getChildren()[(index * 2) + 1];

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

                    if (
                        this.data.dragging === false &&
                        (
                            states.indexOf('selected') !== -1 ||
                            states.indexOf('editing') !== -1
                        )
                    ) {

                        outline.attr({
                            stroke : style.outlineActiveColor,
                            lineWidth : 3
                        });
                        group.set('zIndex', 9);

                    } else if (
                        this.data.dragging === false &&
                        states.indexOf('hover') !== -1
                    ) {

                        outline.attr({
                            stroke : style.outlineColor,
                            lineWidth : 3
                        });
                        group.set('zIndex', 3);

                    } else {

                        outline.attr({
                            stroke : 'transparent',
                            lineWidth : 3
                        });
                        group.set('zIndex', 1);

                    }

                }
            }, 'single-shape');

        },
        _regPlaceholderNode : function () {

            this.G6.registerNode('mor-placeholder-node', {
                drawShape : (cfg, group) => {

                    let options = G6.Util.deepMix(placeholderNodeStyle, cfg.style);
                    let key = group.addShape('rect', {
                        attrs : {
                            fill : options.bgColor,
                            cursor : 'default',
                            width : 80,
                            height : 28,
                            x : 0,
                            y : 0,
                            radius : options.radius,
                        }
                    });

                    return key;

                }
            }, 'single-shape');

        },
        /* eslint-enable no-magic-numbers */
    }
};
