// import {MIND_EDGE_STYLE}            from '../const/nodeStyle';

// const PolylineUtil = require('@antv/g6/lib/shape/edges/polyline-util');

// const _getPathWithBorderRadiusByPolyline = (points, borderRadius) => {

//     let pathSegments = [];
//     let startPoint = points[0];

//     pathSegments.push(`M ${startPoint.x} ${startPoint.y}`);

//     points.forEach((point, i) => {

//         let p1 = points[i + 1];
//         let p2 = points[i + 2];

//         if (p1 && p2 && i === 1) {

//             if (PolylineUtil.isBending(point, p1, p2)) {

//                 let _getBorderRadiusPoint = PolylineUtil.getBorderRadiusPoints(point, p1, p2, borderRadius);
//                 let ps = _getBorderRadiusPoint[0];
//                 let pt = _getBorderRadiusPoint[1];

//                 pathSegments.push(`L ${ps.x} ${ps.y}`);
//                 pathSegments.push(`Q ${p1.x} ${p1.y} ${pt.x} ${pt.y}`);
//                 pathSegments.push(`L ${pt.x} ${pt.y}`);
            
//             } else {

//                 pathSegments.push(`L ${p1.x} ${p1.y}`);
            
//             }

//         } else if (p1) {

//             pathSegments.push(`L ${p1.x} ${p1.y}`);
        
//         }

//     });

//     return pathSegments.join('');

// };

// export default vm => ({
//     getPath : function (points, routeCfg) {
        
//         return _getPathWithBorderRadiusByPolyline(points, routeCfg.radius);
    
//     },
//     getShapeStyle : function (cfg) {

//         cfg = this.getPathPoints(cfg);

//         let offset = 5;
//         let startPoint = cfg.startPoint;
//         let endPoint = cfg.endPoint;
//         // let controlPoints = this.getControlPoints(cfg);
//         let points = [startPoint];
//         let sourceNode = cfg.source;
//         let targetNode = cfg.target;
//         let customOptions = this.getCustomConfig(cfg) || {};
//         let controlPoints = [];

//         if (sourceNode.getModel().shapeStyle === 'line') {

//             controlPoints.push({
//                 anchorIndex : 0,
//                 index : 0,
//                 x : (sourceNode.getBBox().maxX + targetNode.getBBox().minX) / 2,
//                 y : sourceNode.getBBox().maxY
//             });

//         } else {

//             controlPoints.push({
//                 anchorIndex : 0,
//                 index : 0,
//                 x : (sourceNode.getBBox().maxX + targetNode.getBBox().minX) / 2,
//                 y : sourceNode.getBBox().centerY
//             });

//         }

//         if (targetNode.getModel().shapeStyle === 'line') {

//             controlPoints.push({
//                 anchorIndex : 0,
//                 index : 0,
//                 x : (sourceNode.getBBox().maxX + targetNode.getBBox().minX) / 2,
//                 y : targetNode.getBBox().maxY
//             });

//         } else {

//             controlPoints.push({
//                 anchorIndex : 0,
//                 index : 0,
//                 x : (sourceNode.getBBox().maxX + targetNode.getBBox().minX) / 2,
//                 y : targetNode.getBBox().centerY
//             });

//         }

//         // 添加控制点
//         if (controlPoints) {
            
//             points = points.concat(controlPoints);
        
//         }
        
//         // 添加结束点
//         points.push(endPoint);

//         let source = cfg.sourceNode;
//         let target = cfg.targetNode;
        
//         let routeCfg = {
//             radius : MIND_EDGE_STYLE.radius
//         };
        
//         if (!controlPoints) {
            
//             routeCfg = {
//                 source,
//                 target,
//                 offset,
//                 radius : MIND_EDGE_STYLE.radius
//             };
        
//         }

//         let path = this.getPath(points, routeCfg);

//         return vm.G6.Util.deepMix({}, vm.G6.Global.defaultEdge.style, {
//             lineWidth : MIND_EDGE_STYLE.borderWidth,
//             stroke : MIND_EDGE_STYLE.borderColor,
//             radius : MIND_EDGE_STYLE.radius
//         }, customOptions.style, {
//             path
//         });

//     }
// });
