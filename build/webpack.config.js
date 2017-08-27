const path                          = require('path');
const extend                        = require('extend');
const webpack                       = require('webpack');
const CleanWebpackPlugin            = require('clean-webpack-plugin');
const ExtractTextPlugin             = require('extract-text-webpack-plugin');

let pathProjectRoot = path.resolve(__dirname, '../');
let pathDist = path.resolve(pathProjectRoot, 'dist');
let pathSrc = path.resolve(pathProjectRoot, 'src');
let pathSrcCommon = path.resolve(pathSrc, 'common');

let commonConfig = {};
let devVerConfig = {};
let prodVerConfig = {};

let extractDevCss = new ExtractTextPlugin('morning-ui.css');
let extractProdCss = new ExtractTextPlugin('morning-ui.min.css');

commonConfig = {
    entry : './src/index.js',
    plugins : [
        new CleanWebpackPlugin([pathDist], {
            root : pathProjectRoot
        })
    ],
    resolve : {
        alias : {
            Common : pathSrcCommon
        }
    },
    externals : {
        vue : 'Vue'
    },
    output : {
        path : pathDist
    }
};

devVerConfig = extend(
    true,
    {},
    commonConfig,
    {
        plugins : [
            extractDevCss
        ],
        module : {
            rules : [
                {
                    test : /\.vue$/,
                    loader : 'vue-loader',
                    options : {
                        loaders : {
                            js : 'babel-loader',
                            less : extractDevCss.extract({
                                fallback : 'style-loader',
                                use : ['css-loader', 'less-loader']
                            })
                        }
                    }
                },
                {
                    test : /\.js$/,
                    exclude : /node_modules/,
                    use : {
                        loader : 'babel-loader',
                        options : {
                            presets : ['env']
                        }
                    }
                }
            ]
        },
        output : {
            filename : 'morning-ui.js'
        }
    }
);

prodVerConfig = extend(
    true,
    {},
    commonConfig,
    {
        plugins : [
            new webpack.optimize.UglifyJsPlugin(),
            extractProdCss
        ],
        module : {
            rules : [
                {
                    test : /\.vue$/,
                    loader : 'vue-loader',
                    options : {
                        loaders : {
                            js : 'babel-loader',
                            less : extractProdCss.extract({
                                fallback : 'style-loader',
                                use : ['css-loader', 'clean-css-loader', 'less-loader']
                            })
                        }
                    }
                },
                {
                    test : /\.js$/,
                    exclude : /node_modules/,
                    use : {
                        loader : 'babel-loader',
                        options : {
                            presets : ['env']
                        }
                    }
                }
                // {
                //     test : /\.less$/,
                //     use : extractProdCss.extract(['style-loader', 'css-loader', 'less-loader'])
                // }
            ]
        },
        output : {
            filename : 'morning-ui.min.js'
        }
    }
);

module.exports = [
    devVerConfig,
    prodVerConfig
];
