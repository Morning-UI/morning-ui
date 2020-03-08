import G6                           from '@antv/g6';
import Minimap                      from '@antv/g6/build/minimap';
import {
    default as getMindNode,
    NODE_SHAPE_INDEX,
}                                   from '../nodes/mindNode';
import getPlaceholderNode           from '../nodes/placeholderNode';
import getMindEdge                  from '../edges/mindEdge';
import getPlaceholderEdge           from '../edges/placeholderEdge';
import getBrushSelect               from '../behavior/brushSelect';
import getDragNode                  from '../behavior/dragNode';
import bindCanvasGrab               from '../event/canvasGrab';
import bindNodeHover                from '../event/nodeHover';
import bindNodeSelect               from '../event/nodeSelect';
import bindNodeEdit                 from '../event/nodeEdit';
import bindNodeDrag                 from '../event/nodeDrag';
import bindAppendsHover             from '../event/appendsHover';
import bindAppendsClick             from '../event/appendsClick';
import bindCollapseBtnHover         from '../event/collapseBtnHover';
import bindCollapseBtnClick         from '../event/collapseBtnClick';
import bindContextMenu              from '../event/contextMenu';
import bindHotKey                   from '../event/hotkey';
import bindMouseOnCanvas            from '../event/mouseOnCanvas';
import {
    traverseOneNode,
}                                   from '../base/utils';

const _nodeEventShouldEmit = evt => {

    if (evt.item && evt.item.destroyed) {

        return true;

    }

    let model = evt.item.getModel();

    if (model.collapse || model.isDragging) {

        return false;

    }

    return true;

};

const register = vm => {

    // G6.registerNode('mor-root-mind-node', getMindNodeRootConfig(this), 'single-shape');
    // G6.registerNode('mor-root-mind-node', getMindNode(vm), 'single-shape');
    G6.registerNode('mor-mind-node', getMindNode(vm), 'single-shape');
    G6.registerNode('mor-placeholder-node', getPlaceholderNode(vm), 'single-shape');
    G6.registerEdge('mor-mind-edge', getMindEdge(vm), 'polyline');
    G6.registerEdge('mor-placeholder-edge', getPlaceholderEdge(vm), 'mor-mind-edge');
    G6.registerBehavior('mor-brush-select', getBrushSelect(vm));
    G6.registerBehavior('mor-drag-node', getDragNode(vm));

};

const create = vm => {

    let width = vm.conf.width;
    let height = vm.conf.height;
    let $canvas = vm.data.$canvas;

    if (/px$/.test(width)) {

        width = width.replace(/px$/, '');

    }

    if (/%$/.test(width)) {

        vm.$el.style.width = width;
        width = vm.$el.clientWidth;

    }

    if (/px$/.test(height)) {

        height = height.replace(/px$/, '');

    }

    if (/%$/.test(height)) {

        vm.$el.style.height = height;
        height = vm.$el.clientHeight;

    }

    let minimap = new Minimap({
        size : [200, (height / 5)],
        className : 'minimap',
        type : 'delegate'
    });

    let graphOtions = {
        container : $canvas,
        width : width,
        height : height,
        pixelRatio : 2,
        animate : false,
        modes : {
            default : [
                'drag-canvas',
                // 'zoom-canvas',
                'mor-brush-select',
                'mor-drag-node'
            ]
        },
        plugins : [minimap],
        defaultNode : {
            shape : 'mor-mind-node'
        },
        defaultEdge : {
            shape : 'mor-mind-edge'
        },
        layout : {
            getHeight : data => {

                let node = vm.data.graph.findById(data.id);

                if (
                    !node ||
                    (node && node.destroyed) ||
                    (node && node.getModel()._isDragging)
                ) {

                    return 0;

                }

                let model = node.getModel();

                if (model.style && model.style.computedRadius) {

                    node.get('group').getChildByIndex(NODE_SHAPE_INDEX.con)
                        .attr({
                            radius : node.getBBox().height * model.style.computedRadius
                        });
                    node.get('group').set('radius', node.getBBox().height * model.style.computedRadius);

                }

                return node.getBBox().height;

            },
            getWidth : data => {

                let node = vm.data.graph.findById(data.id);

                if (
                    !node ||
                    (node && node.destroyed) ||
                    (node && node.getModel()._isDragging)
                ) {

                    return 0;

                }

                return node.getBBox().width;

            },
            getVGap : data => {

                let node = vm.data.graph.findById(data.id);

                if (node && node.getModel()._isDragging) {

                    return 0;

                }

                return 5;

            },
            getHGap : () => 30
        }
    };

    if (vm.conf.layout === 'LR') {

        graphOtions.layout.direction = 'LR';
        graphOtions.layout.type = 'compactBox';

    }

    vm.data.graph = new G6.TreeGraph(graphOtions);
    vm.data.minimap = minimap;
    vm.G6 = G6;

};

const bindEvent = vm => {

    let graph = vm.data.graph;

    graph.on('canvas:mousedown', evt => {
    
        bindCanvasGrab.mousedown(evt, {
            vm
        });
        bindNodeEdit.cancel(evt, {
            vm,
        });

    });

    graph.on('canvas:mouseenter', evt => {
    
        bindCanvasGrab.mouseenter(evt, {
            vm
        });

    });

    graph.on('canvas:mouseover', evt => {
        
        bindMouseOnCanvas.in(evt, {
            vm
        });

    });

    graph.on('canvas:mouseleave', evt => {
        
        bindMouseOnCanvas.out(evt, {
            vm
        });

    });

    graph.on('canvas:mouseup', evt => {
    
        bindCanvasGrab.mouseup(evt, {
            vm
        });

    });

    graph.on('canvas:mousemove', evt => {

        bindAppendsHover.stop(evt, {
            graph
        });

        bindCollapseBtnHover.stop(evt, {
            vm,
            graph
        });

    });

    graph.on('canvas:click', evt => {

        bindAppendsClick.stop(evt, {
            vm,
            graph
        });

    });

    graph.on('node:mousemove', evt => {

        if (_nodeEventShouldEmit(evt)) {

            bindAppendsHover.move(evt, {
                graph,
                vm
            });

            bindCollapseBtnHover.move(evt, {
                graph,
                vm
            });

        }

    });

    graph.on('node:mouseenter', evt => {

        if (_nodeEventShouldEmit(evt)) {

            bindNodeHover.in(evt, {
                graph
            });

        }
    
    });

    graph.on('node:mouseleave', evt => {

        if (_nodeEventShouldEmit(evt)) {

            bindNodeHover.out(evt, {
                graph
            });

            bindContextMenu.hide(evt, {
                vm,
                graph
            });

        }

    });

    graph.on('node:click', evt => {

        if (_nodeEventShouldEmit(evt)) {

            bindNodeSelect(evt, {
                vm,
                graph
            });

            bindAppendsClick.click(evt, {
                vm,
                graph
            });

            bindCollapseBtnClick.click(evt, {
                vm,
                graph
            });

        }

    });

    graph.on('node:dblclick', evt => {

        if (_nodeEventShouldEmit(evt)) {

            bindNodeEdit.edit(evt, {
                vm
            });

        }

    });

    graph.on('node:dragstart', evt => {

        if (_nodeEventShouldEmit(evt)) {

            bindNodeDrag.start(evt, {
                graph
            });

        }

    });

    graph.on('node:dragend', evt => {

        if (_nodeEventShouldEmit(evt)) {

            bindNodeDrag.end(evt, {
                graph
            });

        }

    });

    graph.on('node:contextmenu', evt => {

        if (_nodeEventShouldEmit(evt)) {

            bindContextMenu.show(evt, {
                vm,
                graph
            });

        }

    });

    graph.on('wheelzoom', evt => {

        bindNodeEdit.refresh(evt, {
            vm
        });

        bindAppendsClick.stop(evt, {
            vm,
            graph
        });

    });

    graph.on('click', evt => {

        bindNodeEdit.cancel(evt, {
            vm
        });

    });

    graph.on('keydown', evt => {

        bindHotKey(evt, {
            vm,
            graph
        });

    });

    vm.$watch('data.editZoom', () => {

        bindNodeEdit.zoom(null, {
            vm
        });

    });

    vm.$watch('data.nodeNoteZoom', () => {

        bindAppendsClick.resize(null, {
            vm
        });

    });

    vm.$watch('data.nodeNoteShow', () => {

        bindAppendsClick.noteShow(null, {
            vm
        });

    });

};

const readData = (vm, data) => {

    G6.Util.traverseTree(data, traverseOneNode.bind(vm));
    vm.data.graph.read(data);

    setTimeout(() => {

        vm.data.graph.refreshLayout(true);
        vm.$refs['mor-mindmap-zoomslider'].set(vm.getZoom() * 100);

    });

};

const manualPaint = (vm, paintCallback) => {
    
    let autoPaint = vm.data.graph.get('autoPaint');

    paintCallback();

    vm.data.graph.paint();
    vm.data.graph.setAutoPaint(autoPaint);

};

export default {
    register,
    create,
    bindEvent,
    readData,
    manualPaint,
};
