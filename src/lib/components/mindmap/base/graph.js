import G6                           from '@antv/g6';
import getMindNode                  from '../nodes/mindNode';
import getPlaceholderNode           from '../nodes/placeholderNode';
import getMindEdge                  from '../nodes/mindEdge';

export const register = vm => {

    // G6.registerNode('mor-root-mind-node', getMindNodeRootConfig(this), 'single-shape');
    G6.registerNode('mor-root-mind-node', getMindNode(vm), 'single-shape');
    G6.registerNode('mor-mind-node', getMindNode(vm), 'single-shape');
    G6.registerNode('mor-placeholder-node', getPlaceholderNode(this), 'single-shape');
    G6.registerEdge('mor-mind-edge', getMindEdge(this), 'polyline');
    G6.registerEdge('mor-placeholder-edge', getPlaceholderEdgeConfig(this), 'mor-mind-edge');
    // G6.registerBehavior('mor-brush-select', getBrushSelectConfig(this));
    // G6.registerBehavior('mor-drag-node', getDragNodeConfig(this));

};

export const create = vm => {

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
        defaultNode : {
            shape : 'mor-mind-node'
        },
        defaultEdge : {
            shape : 'mor-mind-edge'
        },
        layout : {
            getHeight : data => {

                let node = this.data.graph.findById(data.id);

                if (
                    !node ||
                    (node && node.destroyed) ||
                    (node && node.getModel().isDragging)
                ) {

                    return 0;

                }

                let model = node.getModel();

                if (model.style && model.style.computedRadius) {

                    // TODO : CON_SHAPE_INDEX
                    node.get('group').getChildByIndex(CON_SHAPE_INDEX)
                        .attr({
                            radius : node.getBBox().height * model.style.computedRadius
                        });
                    node.get('group').set('radius', node.getBBox().height * model.style.computedRadius);

                }

                return node.getBBox().height;

            },
            getWidth : data => {

                let node = this.data.graph.findById(data.id);

                if (
                    !node ||
                    (node && node.destroyed) ||
                    (node && node.getModel().isDragging)
                ) {

                    return 0;

                }

                return node.getBBox().width;

            },
            getVGap : data => {

                let node = this.data.graph.findById(data.id);

                if (node && node.getModel().isDragging) {

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
    vm.G6 = G6;

};
