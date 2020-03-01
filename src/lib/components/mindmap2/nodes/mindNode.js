// import {
//     MIND_NODE_STYLE,
//     ANNEXR_PADDING,
//     OUTLINE_PADDING,
//     ANNEX_LIST,
//     EXPAND_BTN_STYLE,
// }                                   from '../const/nodeStyle';
// import {
//     OUTLINE_SHAPE_INDEX,
//     MARK_CON_GROUP_INDEX,
//     APPEND_CON_GROUP_INDEX,
//     EXPAND_BTN_GROUP_INDEX,
// }                                   from '../const/shapeIndex';
// import {MARKS}                      from '../const/marks';
// import shapeBase                    from '../base/shape';

// export default vm => ({
//     drawShape : (cfg, group) => {

//         let cursor = 'move';
//         let style = shapeBase.getNodeStyles(MIND_NODE_STYLE, cfg);
//         let nodeData = vm.data.graph.findDataById(cfg.id);
//         let conPaddingX = style.fontSize * 1.5;
//         let conPaddingY = style.fontSize * 0.75;

//         let box = group.addShape('rect', {
//             attrs : {
//                 x : 0,
//                 y : 0,
//                 fill : 'transparent',
//                 cursor
//             }
//         });
//         let outline = group.addShape('rect', {
//             attrs : {
//                 fill : 'transparent',
//                 radius : style.outlineRadius,
//                 cursor,
//                 stroke : 'transparent',
//                 lineWidth : 3
//             }
//         });
//         let con = group.addShape('rect', {
//             attrs : {
//                 fill : style.bgColor,
//                 radius : style.radius,
//                 cursor,
//                 lineWidth : style.borderWidth,
//                 stroke : style.borderColor
//             }
//         });
//         let text = group.addShape('text', {
//             attrs : {
//                 x : 0,
//                 y : 0,
//                 text : cfg.text,
//                 textAlign : 'left',
//                 textBaseline : 'middle',
//                 fill : style.fontColor,
//                 fontSize : style.fontSize,
//                 fontWeight : style.fontWeight,
//                 fontStyle : style.fontStyle,
//                 cursor
//             }
//         });
//         let placeholder = group.addShape('text', {
//             attrs : {
//                 text : ' ',
//                 x : 0,
//                 y : 0,
//                 textAlign : 'left',
//                 textBaseline : 'middle',
//                 fill : style.fontColor,
//                 fontSize : style.fontSize,
//                 cursor
//             }
//         });
//         let bottomline = group.addShape('rect', {
//             attrs : {
//                 fill : style.bottomlineBg
//             }
//         });
//         let markConGroup = group.addGroup({
//             id : `node-${cfg.id}-mark-box`,
//             attrs : {
//                 x : 0,
//                 y : 0
//             }
//         });
//         let appendConGroup = group.addGroup({
//             id : `node-${cfg.id}-append-box`,
//             attrs : {
//                 x : 0,
//                 y : 0
//             }
//         });
//         let expandBtnGroup = group.addGroup({
//             id : `node-${cfg.id}-expand-btn`,
//             attrs : {
//                 x : 0,
//                 y : 0
//             }
//         });
//         let appends = shapeBase.getAppends(cfg);

//         expandBtnGroup.addShape('circle', {
//             attrs : {
//                 r : EXPAND_BTN_STYLE.size,
//                 fill : EXPAND_BTN_STYLE.bgColor,
//                 fillOpacity : (nodeData.children && nodeData.children.length > 0) ? 1 : 0,
//                 stroke : EXPAND_BTN_STYLE.borderColor,
//                 strokeOpacity : (nodeData.children && nodeData.children.length > 0) ? 1 : 0,
//             }
//         });
//         expandBtnGroup.addShape('text', {
//             attrs : {
//                 x : 0,
//                 y : 0,
//                 fill : EXPAND_BTN_STYLE.fontColor,
//                 fillOpacity : (nodeData.children && nodeData.children.length > 0) ? 1 : 0,
//                 fontFamily : 'morningicon',
//                 fontSize : 12,
//                 textAlign : 'center',
//                 textBaseline : 'middle',
//                 text : String.fromCharCode(parseInt(`e673;`, 16))
//             }
//         });

//         if (appends && appends.length > 0) {

//             for (let index in appends) {

//                 let append = appends[index];
//                 let appendCon = appendConGroup.addShape('rect', {
//                     attrs : {
//                         x : 0,
//                         y : 0,
//                         fill : append.fill,
//                         fillOpacity : 0.7,
//                         stroke : 'transparent',
//                         radius : 3
//                     },
//                     zIndex : 99
//                 });

//                 let appendText = appendConGroup.addShape('text', {
//                     attrs : {
//                         x : 0,
//                         y : 0,
//                         fill : append.textFill || style.fontColor,
//                         fillOpacity : 0.6,
//                         fontFamily : append.fontFamily,
//                         fontSize : append.fontSize,
//                         textAlign : 'center',
//                         textBaseline : 'middle'
//                     }
//                 });

//                 appendText.attr({
//                     text : append.genText()
//                 });

//                 let appendTextBbox = appendText.getBBox();

//                 appendCon.attr({
//                     width : appendTextBbox.width + (ANNEXR_PADDING.x * 2),
//                     height : appendTextBbox.height + (ANNEXR_PADDING.y * 2)
//                 });

//             }

//         }
        
//         if (cfg._mark && cfg._mark.length > 0) {

//             for (let index in cfg._mark) {

//                 let markName = cfg._mark[index];
//                 let markCon = markConGroup.addShape('rect', {
//                     attrs : {
//                         x : 0,
//                         y : 0,
//                         fill : 'transparent',
//                         fillOpacity : 0.7,
//                         stroke : 'transparent',
//                         radius : 3
//                     },
//                     zIndex : 99
//                 });

//                 let mark = markConGroup.addShape('text', {
//                     attrs : {
//                         x : 0,
//                         y : 0,
//                         fontFamily : 'morningicon',
//                         fontSize : style.fontSize,
//                         textAlign : 'center',
//                         textBaseline : 'middle',
//                         fill : MARKS[markName].color,
//                         text : String.fromCharCode(parseInt(`${MARKS[markName].iconfont};`, 16))
//                     }
//                 });

//                 let markBbox = mark.getBBox();
                
//                 markCon.attr({
//                     // x : (-markBbox.width / 2) - ANNEXR_PADDING + (markBbox.width * index),
//                     // y : (-markBbox.height / 2) - ANNEXR_PADDING,
//                     width : markBbox.width,
//                     height : markBbox.height + (ANNEXR_PADDING * 2)
//                 });

//             }

//         }

//         let markConGroupBbox = markConGroup.getBBox();
//         let appendConGroupBbox = appendConGroup.getBBox();
//         let textBbox = text.getBBox();
//         let conWidth = textBbox.width + (conPaddingX * 2);
//         let conHeight = textBbox.height + (conPaddingY * 2);
//         let textX = 0;

//         if (cfg._mark && cfg._mark.length > 0) {

//             for (let index in cfg._mark) {

//                 let markCon = markConGroup.getChildByIndex(index * 2);
//                 let mark = markConGroup.getChildByIndex((index * 2) + 1);
//                 let markBbox = mark.getBBox();
//                 let markConBbox = markCon.getBBox();

//                 markCon.attr({
//                     x : (-markBbox.width / 2) + (markConBbox.width * index),
//                     y : (-markBbox.height / 2) + conPaddingY + ANNEXR_PADDING
//                 });
//                 mark.attr({
//                     x : (markBbox.width / 4) + (markConBbox.width * index) + conPaddingX,
//                     y : (markBbox.height / 2) + conPaddingY
//                 });

//             }

//             markConGroupBbox = markConGroup.getBBox();

//         }

//         if (appends && appends.length > 0) {

//             shapeBase.refreshAppendConGroupPosition({
//                 text,
//                 markConGroup,
//                 appendConGroup
//             }, cfg);
//             appendConGroupBbox = appendConGroup.getBBox();

//         }

//         if (cfg._mark && cfg._mark.length > 0) {

//             conWidth += markConGroupBbox.width;
//             textX = markConGroupBbox.width;

//         }

//         if (appends && appends.length > 0) {

//             conWidth += appendConGroupBbox.width;

//         }

//         con.attr({
//             x : 0,
//             y : 0,
//             width : conWidth,
//             height : conHeight
//         });

//         let conBbox = con.getBBox();

//         box.attr({
//             width : conBbox.width,
//             height : conBbox.height
//         });
//         box.set('conPaddingX', conPaddingX);
//         box.set('conPaddingY', conPaddingY);

//         let boxBbox = con.getBBox();

//         outline.attr({
//             x : boxBbox.minX - OUTLINE_PADDING,
//             y : boxBbox.minY - OUTLINE_PADDING,
//             width : boxBbox.width + (OUTLINE_PADDING * 2),
//             height : boxBbox.height + (OUTLINE_PADDING * 2)
//         });

//         text.attr({
//             x : textX + conPaddingX,
//             y : (textBbox.height / 2) + conPaddingY
//         });

//         placeholder.attr({
//             x : textX + conPaddingX,
//             y : (textBbox.height / 2) + conPaddingY
//         });

//         bottomline.attr({
//             x : boxBbox.minX - 1,
//             y : boxBbox.maxY - 0.5,
//             height : style.bottomlineHeight,
//             width : boxBbox.width + 2
//         });

//         expandBtnGroup.getChildByIndex(0).attr({
//             x : boxBbox.maxX,
//             y : (textBbox.height / 2) + conPaddingY
//         });

//         let expandBtnBbox = expandBtnGroup.getChildByIndex(0).getBBox();
//         let expandBtnTextBbox = expandBtnGroup.getChildByIndex(1).getBBox();

//         expandBtnGroup.getChildByIndex(1).attr({
//             x : expandBtnBbox.maxX - (expandBtnBbox.width / 2),
//             y : expandBtnBbox.maxY - (expandBtnBbox.height / 2)
//         });

//         return box;

//     },
//     setState : (name, value, item) => {

//         let model = item.getModel();
//         let style = shapeBase.getNodeStyles(MIND_NODE_STYLE, model);
//         let states = item.getStates();
//         let box = item.get('keyShape');
//         let group = box.getParent();
//         let outline = group.getChildByIndex(OUTLINE_SHAPE_INDEX);
//         let markConGroup = group.getChildByIndex(MARK_CON_GROUP_INDEX);
//         let appendConGroup = group.getChildByIndex(APPEND_CON_GROUP_INDEX);
//         let expandBtnGroup = group.getChildByIndex(EXPAND_BTN_GROUP_INDEX);
//         let linkIndex = ANNEX_LIST.link.index;
//         let noteIndex = ANNEX_LIST.note.index;

//         if (!model.link) {

//             noteIndex = linkIndex;

//         }

//         let linkCon = appendConGroup.getChildByIndex(linkIndex);
//         let link = appendConGroup.getChildByIndex(linkIndex + 1);
//         let noteCon = appendConGroup.getChildByIndex(noteIndex);
//         let note = appendConGroup.getChildByIndex(noteIndex + 1);

//         if (states.indexOf('drag') !== -1) {

//             outline.attr({
//                 fillOpacity : 0,
//                 strokeOpacity : 0
//             });

//         } else {

//             outline.attr({
//                 fillOpacity : 1,
//                 strokeOpacity : 1
//             });

//         }

//         if (model.link) {

//             if (states.indexOf('link-hover') !== -1) {

//                 linkCon.attr({
//                     fill : style.outlineColor,
//                     stroke : style.outlineActiveColor,
//                     cursor : 'pointer'
//                 });
//                 link.attr({
//                     fillOpacity : 1,
//                     cursor : 'pointer'
//                 });

//             } else {

//                 linkCon.attr({
//                     fill : 'transparent',
//                     stroke : 'transparent',
//                     cursor : 'default'
//                 });
//                 link.attr({
//                     fillOpacity : 0.6,
//                     cursor : 'default'
//                 });

//             }

//         }

//         if (model.note) {

//             if (states.indexOf('note-hover') !== -1) {

//                 noteCon.attr({
//                     fill : style.outlineColor,
//                     stroke : style.outlineActiveColor,
//                     cursor : 'pointer'
//                 });
//                 note.attr({
//                     fillOpacity : 1,
//                     cursor : 'pointer'
//                 });

//             } else {

//                 noteCon.attr({
//                     fill : 'transparent',
//                     stroke : 'transparent',
//                     cursor : 'default'
//                 });
//                 note.attr({
//                     fillOpacity : 0.6,
//                     cursor : 'default'
//                 });

//             }

//         }

//         if (states.indexOf('expand-btn-hover') !== -1) {

//             expandBtnGroup.getChildByIndex(0).attr({
//                 fill : EXPAND_BTN_STYLE.bgHoverColor,
//                 cursor : 'pointer'
//             });
//             expandBtnGroup.getChildByIndex(1).attr({
//                 cursor : 'pointer'
//             });

//         } else {

//             expandBtnGroup.getChildByIndex(0).attr({
//                 fill : EXPAND_BTN_STYLE.bgColor,
//                 cursor : 'default'
//             });
//             expandBtnGroup.getChildByIndex(1).attr({
//                 cursor : 'default'
//             });

//         }

//         if (states.indexOf('children-collapse') !== -1) {

//             expandBtnGroup.getChildByIndex(1).attr({
//                 text : String.fromCharCode(parseInt(`e685;`, 16))
//             });

//         } else {

//             expandBtnGroup.getChildByIndex(1).attr({
//                 text : String.fromCharCode(parseInt(`e673;`, 16))
//             });

//         }

//         if (model._mark && model._mark.length > 0) {

//             for (let index in model._mark) {

//                 let markCon = markConGroup.getChildByIndex(index * 2);
//                 let mark = markConGroup.getChildByIndex((index * 2) + 1);

//                 if (states.indexOf(`mark-${index}-hover`) !== -1) {

//                     markCon.attr({
//                         // fill : style.outlineColor,
//                         stroke : style.outlineActiveColor,
//                         cursor : 'pointer'
//                     });
//                     mark.attr({
//                         cursor : 'pointer'
//                     });

//                 } else {

//                     markCon.attr({
//                         // fill : 'transparent',
//                         stroke : 'transparent',
//                         cursor : 'default'
//                     });
//                     mark.attr({
//                         cursor : 'default'
//                     });

//                 }
                
//             }

//         }

//         if (
//             vm.data.dragging === false &&
//             (
//                 states.indexOf('selected') !== -1 ||
//                 states.indexOf('editing') !== -1
//             )
//         ) {

//             outline.attr({
//                 stroke : style.outlineActiveColor,
//                 lineWidth : 3
//             });
//             group.set('zIndex', 9);

//         } else if (
//             vm.data.dragging === false &&
//             states.indexOf('hover') !== -1
//         ) {

//             outline.attr({
//                 stroke : style.outlineColor,
//                 lineWidth : 3
//             });
//             group.set('zIndex', 3);

//         } else {

//             outline.attr({
//                 stroke : 'transparent',
//                 lineWidth : 3
//             });
//             group.set('zIndex', 1);

//         }

//     }
// });
