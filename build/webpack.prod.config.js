const merge                         = require('webpack-merge');
const common                        = require('./webpack.common.config.js');

module.exports = [
    merge(common.devVerConfig, {
        mode : 'production'
    }),
    merge(common.prodVerConfig, {
        mode : 'production'
    }),
    merge(common.docsConfig, {
        mode : 'production'
    })
];
