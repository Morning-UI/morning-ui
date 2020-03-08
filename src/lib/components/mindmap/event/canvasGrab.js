import G6                           from '@antv/g6';

export default {
    mousedown : (evt, options) => {

        G6.Util.modifyCSS(evt.currentTarget.get('canvas').get('canvasDOM'), {
            cursor : 'grabbing'
        });

        // 拖拽画布时禁用minimap绘制，提升性能
        options.vm.data.minimap.disableRefresh();

    },
    mouseenter : (evt, options) => {
        
        G6.Util.modifyCSS(evt.currentTarget.get('canvas').get('canvasDOM'), {
            cursor : 'grab'
        });

        options.vm.data.minimap.enableRefresh();

    },
    mouseup : (evt, options) => {
        
        G6.Util.modifyCSS(evt.currentTarget.get('canvas').get('canvasDOM'), {
            cursor : 'grab'
        });

        options.vm.data.minimap.enableRefresh();

    }
};
