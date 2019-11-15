const path                          = require('path');
const extend                        = require('extend');
const walk                          = require('walk');
const {CleanWebpackPlugin}          = require('clean-webpack-plugin');
const CopyWebpackPlugin             = require('copy-webpack-plugin');
const MiniCssExtractPlugin          = require('mini-css-extract-plugin');
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
let docsConfig = {};

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
        libraryTarget : 'umd',
        libraryExport : 'default'
    }
};

let genDevVerConfig = mode => (
    extend(
        true,
        {},
        commonConfig,
        {
            mode,
            plugins : [
                new CleanWebpackPlugin({
                    cleanOnceBeforeBuildPatterns : ['morning-ui.js', 'morning-ui.css', 'morning-ui.emoji.png']
                }),
                new MiniCssExtractPlugin({
                    filename : 'morning-ui.css',
                    options : {
                        hmr : mode === 'development'
                    }
                }),
                new VueLoaderPlugin()
            ],
            module : {
                rules : [
                    {
                        test : /\.less$/,
                        use : [
                            {
                                loader : MiniCssExtractPlugin.loader,
                                options : {
                                    hmr : mode === 'development'
                                }
                            },
                            {
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
                            }
                        ]
                    },
                    // for quill-emoji start
                    {
                        test : /\.scss$/,
                        use : [
                            {
                                loader : MiniCssExtractPlugin.loader,
                                options : {
                                    hmr : mode === 'development'
                                }
                            },
                            {
                                loader : 'css-loader',
                            }, {
                                loader : 'resolve-url-loader'
                            }, {
                                loader : 'sass-loader',
                                options : {
                                    sourceMap : true,
                                    sourceMapContents : false
                                }
                            }
                        ]
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
                        use : [
                            {
                                loader : MiniCssExtractPlugin.loader,
                                options : {
                                    hmr : mode === 'development'
                                }
                            },
                            {
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
                            }
                        ]
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
                            /node_modules\/(?!(quill))/.test(file) && !/\.vue\.js/.test(file)
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
                minimize : false,
                sideEffects : true,
                splitChunks : {
                    cacheGroups : {
                        styles : {
                            name : 'main',
                            test : /\.css$/,
                            chunks : 'all',
                            enforce : true
                        }
                    }
                }
            }
        }
    )
);

let genProdVerConfig = mode => (
    extend(
        true,
        {},
        commonConfig,
        {
            mode,
            plugins : [
                new CleanWebpackPlugin({
                    cleanOnceBeforeBuildPatterns : ['morning-ui.min.js', 'morning-ui.min.css', 'morning-ui.emoji.png']
                }),
                new MiniCssExtractPlugin({
                    filename : 'morning-ui.min.css'
                }),
                new VueLoaderPlugin()
            ],
            module : {
                rules : [
                    {
                        test : /\.less$/,
                        use : [
                            {
                                loader : MiniCssExtractPlugin.loader,
                                options : {
                                    hmr : mode === 'development'
                                }
                            },
                            {
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
                                loader : 'less-loader'
                            }, {
                                loader : 'postcss-loader',
                                options : {
                                    config : {
                                        path : path.resolve(pathBuild, 'postcss.config.js')
                                    }
                                }
                            }
                        ]
                    },
                    // for quill-emoji start
                    {
                        test : /\.scss$/,
                        use : [
                            {
                                loader : MiniCssExtractPlugin.loader,
                                options : {
                                    hmr : mode === 'development'
                                }
                            },
                            {
                                loader : 'css-loader',
                            }, {
                                loader : 'resolve-url-loader'
                            }, {
                                loader : 'sass-loader',
                                options : {
                                    sourceMap : true,
                                    sourceMapContents : false
                                }
                            }
                        ]
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
                        use : [
                            {
                                loader : MiniCssExtractPlugin.loader,
                                options : {
                                    hmr : mode === 'development'
                                }
                            },
                            {
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
                            }
                        ]
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
            },
            optimization : {
                minimize : true,
                sideEffects : true,
                splitChunks : {
                    cacheGroups : {
                        styles : {
                            name : 'main',
                            test : /\.css$/,
                            chunks : 'all',
                            enforce : true
                        }
                    }
                }
            }
        }
    )
);

docsConfig = {
    entry : {},
    plugins : [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename : '[name].css'
        }),
        new CopyWebpackPlugin([
            {
                from : path.resolve(pathSrcDocs, 'favicon.ico'),
                to : path.resolve(pathDocs, 'favicon.ico')
            }
        ]),
        new VueLoaderPlugin()
    ]
};

getDocsEntry(docsConfig);
getDocsHtmlPlugin(docsConfig);

let genDocsConfig = mode => (
    extend(
        true,
        {},
        docsConfig,
        {
            mode,
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
                        use : [
                            {
                                loader : MiniCssExtractPlugin.loader,
                                options : {
                                    hmr : mode === 'development'
                                }
                            },
                            {
                                loader : 'css-loader',
                            }, {
                                loader : 'less-loader'
                            }
                        ]
                    },
                    {
                        test : /\.css$/,
                        use : [
                            {
                                loader : MiniCssExtractPlugin.loader,
                                options : {
                                    hmr : mode === 'development'
                                }
                            },
                            {
                                loader : 'css-loader'
                            }
                        ]
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
                        styles : {
                            name : 'main',
                            test : /\.css$/,
                            chunks : 'all',
                            enforce : true
                        },
                        common : {
                            name : 'doc-common',
                            chunks : 'all',
                            minChunks : 2,
                            minSize : 0
                        }
                    }
                }
            },
            output : {
                path : pathDocs,
                filename : '[name].js',
                publicPath : '/'
            }
        }
    )
);

module.exports = {
    genDevVerConfig,
    genProdVerConfig,
    genDocsConfig
};
