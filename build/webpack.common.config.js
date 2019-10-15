const path                          = require('path');
const extend                        = require('extend');
const webpack                       = require('webpack');
const walk                          = require('walk');
const {CleanWebpackPlugin}          = require('clean-webpack-plugin');
const CopyWebpackPlugin             = require('copy-webpack-plugin');
const ExtractTextPlugin             = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin             = require('html-webpack-plugin');
const VueLoaderPlugin               = require('vue-loader/lib/plugin');

let pathProjectRoot = path.resolve(__dirname, '../');
let pathPackage = path.resolve(pathProjectRoot, 'package.json');
let pathNpm = path.resolve(pathProjectRoot, 'node_modules');
let pathBuild = path.resolve(pathProjectRoot, 'build');
let pathDist = path.resolve(pathProjectRoot, 'dist');
let pathSrc = path.resolve(pathProjectRoot, 'src');
let pathDocs = path.resolve(pathProjectRoot, 'docs');
let pathFavicon = path.resolve(pathDocs, 'favicon.ico');
let pathReport = path.resolve(pathProjectRoot, 'report');
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
            Npm : pathNpm,
            quill$ : path.resolve(pathNpm, 'quill/core')
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
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns : ['morning-ui.js', 'morning-ui.css', 'morning-ui.emoji.png']
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV' : process.env.NODE_ENV
            }),
            extractDevCss,
            new VueLoaderPlugin()
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
                            loader : 'less-loader',
                            options : {
                                // strictMath : true
                            }
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
                // for quill-emoji start
                {
                    test : /\.scss$/,
                    use : extractDevCss.extract({
                        fallback : 'vue-style-loader',
                        use : [{
                            loader : 'css-loader',
                        }, {
                            loader : 'resolve-url-loader'
                        }, {
                            loader : 'sass-loader',
                            options : {
                                sourceMap : true,
                                sourceMapContents : false
                            }
                        }]
                    })
                },
                {
                    test : /\.png$/,
                    use : [
                        {
                            loader : 'file-loader',
                            options : {
                                name : '/morning-ui.emoji.png'
                            }
                        }
                    ]
                },
                // for quill-emoji end
                {
                    test : /\.css$/,
                    use : extractDevCss.extract({
                        fallback : 'vue-style-loader',
                        use : [{
                            loader : 'css-loader',
                            options : {
                                importLoaders : 1
                            }
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
                    use : [
                        {
                            loader : 'vue-loader'
                        }
                    ]
                },
                {
                    test : /\.js$/,
                    exclude : file => (
                        /node_modules\/(?!(quill))/.test(file) &&
                        !/\.vue\.js/.test(file)
                    ),
                    use : [
                        'babel-loader'
                    ]
                },
                {
                    test : /\.svg$/,
                    use : {
                        loader : 'html-loader',
                        options : {
                            minimize : true
                        }
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
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns : ['morning-ui.min.js', 'morning-ui.min.css', 'morning-ui.emoji.png']
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV' : process.env.NODE_ENV
            }),
            extractProdCss,
            new VueLoaderPlugin()
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
                                importLoaders : 3
                            }
                        }, {
                            loader : 'clean-css-loader',
                            options : {
                                inline : false
                            }
                        }, {
                            loader : 'less-loader',
                            options : {
                                // strictMath : true
                            }
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
                // for quill-emoji start
                {
                    test : /\.scss$/,
                    use : extractDevCss.extract({
                        fallback : 'vue-style-loader',
                        use : [{
                            loader : 'css-loader',
                        }, {
                            loader : 'resolve-url-loader'
                        }, {
                            loader : 'sass-loader',
                            options : {
                                sourceMap : true,
                                sourceMapContents : false
                            }
                        }]
                    })
                },
                {
                    test : /\.png$/,
                    use : [
                        {
                            loader : 'file-loader',
                            options : {
                                name : '/morning-ui.emoji.png'
                            }
                        }
                    ]
                },
                // for quill-emoji end
                {
                    test : /\.css$/,
                    use : extractProdCss.extract({
                        fallback : 'vue-style-loader',
                        use : [{
                            loader : 'css-loader',
                            options : {
                                importLoaders : 2
                            }
                        }, {
                            loader : 'clean-css-loader'
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
                    use : [
                        {
                            loader : 'vue-loader'
                        }
                    ]
                },
                {
                    test : /\.js$/,
                    exclude : file => (
                        /node_modules\/(?!(quill))/.test(file) &&
                        !/\.vue\.js/.test(file)
                    ),
                    use : [
                        'babel-loader'
                    ]
                },
                {
                    test : /\.svg$/,
                    use : {
                        loader : 'html-loader',
                        options : {
                            minimize : true
                        }
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
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : process.env.NODE_ENV
        }),
        extractDocsCss,
        new CopyWebpackPlugin([
            {
                from : path.resolve(pathSrcDocs, 'favicon.ico'),
                to : path.resolve(pathDocs, 'favicon.ico')
            }
        ]),
        new VueLoaderPlugin()
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
                test : /\.less$/,
                use : extractDocsCss.extract({
                    fallback : 'vue-style-loader',
                    use : [{
                        loader : 'css-loader',
                    }, {
                        loader : 'less-loader',
                        options : {
                            // strictMath : true
                        }
                    }]
                })
            },
            {
                test : /\.css$/,
                use : extractDocsCss.extract({
                    fallback : 'vue-style-loader',
                    use : [{
                        loader : 'css-loader'
                    }]
                })
            },
            {
                test : /\.woff$/,
                exclude : /node_modules/,
                use : {
                    loader : 'file-loader',
                    options : {
                        name : '[name].[ext]'
                    }
                }
            },
            {
                test : /\.vue$/,
                use : [
                    {
                        loader : 'vue-loader'
                    }
                ]
            },
            {
                test : /\.js$/,
                exclude : file => (
                    /(node_modules|libs)/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
                use : [
                    'babel-loader'
                ]
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

module.exports = {
    devVerConfig,
    prodVerConfig,
    docsConfig
};
