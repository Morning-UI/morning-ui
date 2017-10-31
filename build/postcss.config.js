module.exports = {
    plugins : {
        'postcss-normalize' : {
            browsers : 'Chrome > 52'
        },
        autoprefixer : {
            browsers : 'Chrome > 52'
        }
    },
    syntax : require('postcss-less')
};
