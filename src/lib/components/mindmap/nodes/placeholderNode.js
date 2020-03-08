import G6                           from '@antv/g6';
import {
    PLACEHOLDER_NODE_STYLE,
}                                   from '../const/style';

export default () => ({
    drawShape : (cfg, group) => {

        let options = G6.Util.deepMix(PLACEHOLDER_NODE_STYLE, cfg.style);
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
});
