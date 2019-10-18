const common                        = require('./webpack.common.config.js');

module.exports = [
    common.genDevVerConfig('development'),
    common.genDocsConfig('development')
];
