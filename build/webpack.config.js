const path                          = require('path');
const extend                        = require('extend');
const webpack                       = require('webpack');
const walk                          = require('walk');
const CleanWebpackPlugin            = require('clean-webpack-plugin');
const CopyWebpackPlugin             = require('copy-webpack-plugin');
const ExtractTextPlugin             = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin             = require('html-webpack-plugin');
// const UglifyJsPlugin                = require('uglifyjs-webpack-plugin');

let pathProjectRoot = path.resolve(__dirname, '../');
let pathPackage = path.resolve(pathProjectRoot, 'package.json');
let pathNpm = path.resolve(pathProjectRoot, 'node_modules');
let pathBuild = path.resolve(pathProjectRoot, 'build');
let pathDist = path.resolve(pathProjectRoot, 'dist');
let pathSrc = path.resolve(pathProjectRoot, 'src');
let pathDocs = path.resolve(pathProjectRoot, 'docs');
let pathFavicon = path.resolve(pathDocs, 'favicon.ico');
// let pathDocsCommon = path.resolve(pathDocs, 'common');
let pathReport = path.resolve(pathProjectRoot, 'report');
// let pathCoverage = path.resolve(pathReport, 'coverage');
let pathLib = path.resolve(pathSrc, 'lib');
let pathLibCommon = path.resolve(pathLib, 'common');
let pathLibUtils = path.resolve(pathLib, 'utils');
let pathSrcDocs = path.resolve(pathSrc, 'docs');
let pathSrcDocsPages = path.resolve(pathSrcDocs, 'pages');

let commonConfig = {};
let devVerConfig = {};
let prodVerConfig = {};
let docsConfig = {};

let extractDevCss = new ExtractTextPlugin({
    filename : 'morning-ui.css',
    allChunks : true
});
let extractProdCss = new ExtractTextPlugin('morning-ui.min.css');
let extractDocsCss = new ExtractTextPlugin('[name].css');
// let extractLibHighlightHopscotch = new ExtractTextPlugin('highlight.style.hopscotch.css');

let getDocsEntry = async docsConf => {

    walk.walkSync(pathSrcDocsPages, {
        listeners : {
            file : (root, fileStats, next) => {

                if (fileStats.name === 'index.js') {

                    let urlPath = root.replace(`${pathSrcDocsPages}/`, '');
                    let entryFile = `${root}/index.js`;

                    docsConf.entry[urlPath] = entryFile;

                }

                next();

            }
        }
    });

};

let getDocsHtmlPlugin = async docsConf => {

    for (let urlPath of Object.keys(docsConf.entry)) {

        if (['doc-common'].indexOf(urlPath) === -1) {

            docsConf.plugins.push(new HtmlWebpackPlugin({
                chunks : [urlPath],
                filename : `${urlPath}.html`,
                template : path.resolve(pathSrcDocs, 'tpl.html')
            }));

        }

    }

};

commonConfig = {
    entry : './src/lib/index.js',
    plugins : [],
    resolve : {
        alias : {
            Common : pathLibCommon,
            Utils : pathLibUtils,
            Npm : pathNpm
        }
    },
    externals : {
        vue : 'Vue'
    },
    output : {
        path : pathDist,
        library : 'morning',
        libraryTarget : 'umd'
    }
};

devVerConfig = extend(
    true,
    {},
    commonConfig,
    {
        plugins : [
            new CleanWebpackPlugin([pathDist], {
                root : pathProjectRoot
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV' : process.env.NODE_ENV
            }),
            extractDevCss
        ],
        module : {
            rules : [
                {
                    test : /\.less$/,
                    use : extractDevCss.extract({
                        fallback : 'vue-style-loader',
                        use : [{
                            loader : 'css-loader',
                            options : {
                                importLoaders : 2
                            }
                        }, {
                            loader : 'less-loader'
                        }, {
                            loader : 'postcss-loader',
                            options : {
                                config : {
                                    path : path.resolve(pathBuild, 'postcss.config.js')
                                }
                            }
                        }]
                    })
                },
                {
                    test : /\.woff$/,
                    exclude : /node_modules/,
                    use : [{
                        loader : 'url-loader'
                    }]
                },
                {
                    test : /\.vue$/,
                    loader : 'vue-loader',
                    options : {
                        loaders : {
                            js : 'babel-loader',
                            less : extractDevCss.extract({
                                fallback : 'vue-style-loader',
                                use : [{
                                    loader : 'css-loader',
                                    options : {
                                        importLoaders : 2
                                    }
                                }, {
                                    loader : 'less-loader'
                                }, {
                                    loader : 'postcss-loader',
                                    options : {
                                        config : {
                                            path : path.resolve(pathBuild, 'postcss.config.js')
                                        }
                                    }
                                }]
                            })
                        }
                    }
                },
                {
                    test : /\.js$/,
                    exclude : /node_modules/,
                    use : {
                        loader : 'babel-loader'
                    }
                }
            ]
        },
        output : {
            filename : 'morning-ui.js',
            publicPath : '/dist'
        },
        optimization : {
            minimize : false
        }
    }
);

prodVerConfig = extend(
    true,
    {},
    commonConfig,
    {
        plugins : [
            new CleanWebpackPlugin([pathDist], {
                root : pathProjectRoot
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV' : process.env.NODE_ENV
            }),
            // new UglifyJsPlugin(),
            extractProdCss
        ],
        module : {
            rules : [
                {
                    test : /\.less$/,
                    use : extractProdCss.extract({
                        fallback : 'vue-style-loader',
                        use : [{
                            loader : 'css-loader',
                            options : {
                                importLoaders : 3,
                                minimize : true
                            }
                        }, {
                            loader : 'clean-css-loader'
                        }, {
                            loader : 'less-loader'
                        }, {
                            loader : 'postcss-loader',
                            options : {
                                config : {
                                    path : path.resolve(pathBuild, 'postcss.config.js')
                                }
                            }
                        }]
                    })
                },
                {
                    test : /\.woff/,
                    exclude : /node_modules/,
                    use : [{
                        loader : 'url-loader'
                    }]
                },
                {
                    test : /\.vue$/,
                    loader : 'vue-loader',
                    options : {
                        loaders : {
                            js : 'babel-loader',
                            less : extractProdCss.extract({
                                fallback : 'vue-style-loader',
                                use : [{
                                    loader : 'css-loader',
                                    options : {
                                        importLoaders : 3,
                                        minimize : true
                                    }
                                }, {
                                    loader : 'clean-css-loader'
                                }, {
                                    loader : 'less-loader'
                                }, {
                                    loader : 'postcss-loader',
                                    options : {
                                        config : {
                                            path : path.resolve(pathBuild, 'postcss.config.js')
                                        }
                                    }
                                }]
                            })
                        }
                    }
                },
                {
                    test : /\.js$/,
                    exclude : /node_modules/,
                    use : {
                        loader : 'babel-loader'
                    }
                }
            ]
        },
        output : {
            filename : 'morning-ui.min.js',
            publicPath : '/dist'
        }
    }
);

docsConfig = {
    entry : {},
    plugins : [
        new CleanWebpackPlugin([pathDocs], {
            root : pathProjectRoot
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : process.env.NODE_ENV
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name : 'doc-common',
        //     minChunks : Infinity
        // }),
        extractDocsCss,
        new CopyWebpackPlugin([
            {
                from : path.resolve(pathSrcDocs, 'favicon.ico'),
                to : path.resolve(pathDocs, 'favicon.ico')
            }
        ])
    ],
    resolve : {
        alias : {
            Docs : pathSrcDocs,
            Npm : pathNpm
        }
    },
    externals : {
        vue : 'Vue'
    },
    devServer : {
        contentBase : [
            pathDocs,
            pathDist,
            pathReport,
            pathPackage,
            pathFavicon
        ],
        compress : true,
        hot : false
    },
    module : {
        rules : [
            {
                test : /\.woff$/,
                exclude : /node_modules/,
                use : [{
                    loader : 'file-loader',
                    options : {
                        name : '[name].[ext]'
                    }
                }]
            },
            {
                test : /\.vue$/,
                loader : 'vue-loader',
                options : {
                    loaders : {
                        js : 'babel-loader',
                        less : extractDocsCss.extract({
                            fallback : 'vue-style-loader',
                            use : ['css-loader', 'less-loader']
                        })
                    }
                }
            },
            {
                test : /\.js$/,
                exclude : /(node_modules|libs)/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ]
    },
    optimization : {
        splitChunks : {
            cacheGroups : {
                commons : {
                    name : 'doc-common',
                    chunks : 'initial',
                    minChunks : 2
                }
            }
        }
    },
    output : {
        path : pathDocs,
        filename : '[name].js',
        publicPath : '/'
    }
};

getDocsEntry(docsConfig);
getDocsHtmlPlugin(docsConfig);

module.exports = [
    devVerConfig,
    prodVerConfig,
    docsConfig
];
