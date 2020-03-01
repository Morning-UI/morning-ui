import {PLACEHOLDER_EDGE_STYLE}     from '../const/nodeStyle';

export default () => ({
    getCustomConfig : function () {

        return {
            style : {
                lineWidth : PLACEHOLDER_EDGE_STYLE.borderWidth,
                stroke : PLACEHOLDER_EDGE_STYLE.borderColor,
                radius : PLACEHOLDER_EDGE_STYLE.radius
            }
        };
    
    }
});
