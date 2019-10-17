const common                        = require('./webpack.common.config.js');

module.exports = [
    common.genDevVerConfig('production'),
    common.genProdVerConfig('production'),
    common.genDocsConfig('production')
];
