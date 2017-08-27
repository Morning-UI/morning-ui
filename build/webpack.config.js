const path                          = require('path');
const extend                        = require('extend');
const webpack                       = require('webpack');
const CleanWebpackPlugin            = require('clean-webpack-plugin');
const ExtractTextPlugin             = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin             = require('html-webpack-plugin');

let pathProjectRoot = path.resolve(__dirname, '../');
let pathDist = path.resolve(pathProjectRoot, 'dist');
let pathSrc = path.resolve(pathProjectRoot, 'src');
let pathDocs = path.resolve(pathProjectRoot, 'docs');
let pathSrcCommon = path.resolve(pathSrc, 'common');
let pathSrcDocs = path.resolve(pathSrc, 'docs');

let commonConfig = {};
let devVerConfig = {};
let prodVerConfig = {};
let docsConfig = {};

let extractDevCss = new ExtractTextPlugin('morning-ui.css');
let extractProdCss = new ExtractTextPlugin('morning-ui.min.css');
let extractDocsCss = new ExtractTextPlugin('[name].css');

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

docsConfig = {
    entry : {
        index : './src/docs/pages/index/index.js',
        guide : './src/docs/pages/guide/index.js',
        component : './src/docs/pages/component/index.js'
    },
    plugins : [
        new CleanWebpackPlugin([pathDocs], {
            root : pathProjectRoot
        }),
        extractDocsCss,
        new HtmlWebpackPlugin({
            chunks: ['index'],
            template : path.resolve(pathSrcDocs, 'tpl.html')
        }),
        new HtmlWebpackPlugin({
            chunks: ['guide'],
            filename : 'guide.html',
            template : path.resolve(pathSrcDocs, 'tpl.html')
        }),
        new HtmlWebpackPlugin({
            chunks: ['component'],
            filename : 'component.html',
            template : path.resolve(pathSrcDocs, 'tpl.html')
        })
    ],
    resolve : {
        alias : {
            Docs : pathSrcDocs
        }
    },
    externals : {
        vue : 'Vue'
    },
    devServer : {
        contentBase : pathDocs
    },
    module : {
        rules : [
            {
                test : /\.vue$/,
                loader : 'vue-loader',
                options : {
                    loaders : {
                        js : 'babel-loader',
                        less : extractDocsCss.extract({
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
        path : pathDocs,
        filename : '[name].js'
    }
};

module.exports = [
    // devVerConfig,
    // prodVerConfig,
    docsConfig
];
