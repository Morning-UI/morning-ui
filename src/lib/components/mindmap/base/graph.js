import SHAPE_INDEX                  from '../const/shapeIndex';

export default {
    methods : {
        _createGraph : function () {

            let width = this.conf.width;
            let height = this.conf.height;

            if (/px$/.test(width)) {

                width = width.replace(/px$/, '');

            }

            if (/%$/.test(width)) {

                this.$el.style.width = width;
                width = this.$el.clientWidth;

            }

            if (/px$/.test(height)) {

                height = height.replace(/px$/, '');

            }

            if (/%$/.test(height)) {

                this.$el.style.height = height;
                height = this.$el.clientHeight;

            }

            let graphOtions = {
                container : this.data.$canvas,
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
                    type : 'mor-mind-node'
                },
                defaultEdge : {
                    type : 'mor-mind-edge'
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

                            node.get('group').getChildren()[SHAPE_INDEX.CON]
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
                    /* eslint-disable no-magic-numbers */
                    getHGap : () => 30
                }
            };

            if (this.conf.layout === 'LR') {

                graphOtions.layout.direction = 'LR';
                graphOtions.layout.type = 'compactBox';

            } else if (this.conf.layout === 'RL') {

                graphOtions.layout.direction = 'RL';
                graphOtions.layout.type = 'compactBox';

            }
            
            // else if (this.conf.layout === 'RL') {

            //     graphOtions.layout.direction = 'LR';
            //     graphOtions.layout.type = 'indented';

            // }

            this.data.graph = new this.G6.TreeGraph(graphOtions);

        }
    }
};
