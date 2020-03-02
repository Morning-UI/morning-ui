import G6                           from '@antv/g6';

export default {
    mousedown : evt => {

        G6.Util.modifyCSS(evt.currentTarget.get('canvas').get('canvasDOM'), {
            cursor : 'grabbing'
        });

    },
    mouseenter : evt => {
        
        G6.Util.modifyCSS(evt.currentTarget.get('canvas').get('canvasDOM'), {
            cursor : 'grab'
        });

    },
    mouseup : evt => {
        
        G6.Util.modifyCSS(evt.currentTarget.get('canvas').get('canvasDOM'), {
            cursor : 'grab'
        });

    }
};
