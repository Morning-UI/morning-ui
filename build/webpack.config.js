const path                          = require('path');
const extend                        = require('extend');
const webpack                       = require('webpack');
const walk                          = require('walk');
const CleanWebpackPlugin            = require('clean-webpack-plugin');
const ExtractTextPlugin             = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin             = require('html-webpack-plugin');

let pathProjectRoot = path.resolve(__dirname, '../');
let pathNpm = path.resolve(pathProjectRoot, 'node_modules');
let pathDist = path.resolve(pathProjectRoot, 'dist');
let pathSrc = path.resolve(pathProjectRoot, 'src');
let pathDocs = path.resolve(pathProjectRoot, 'docs');
let pathSrcCommon = path.resolve(pathSrc, 'common');
let pathSrcDocs = path.resolve(pathSrc, 'docs');
let pathSrcDocsPages = path.resolve(pathSrcDocs, 'pages');

let commonConfig = {};
let devVerConfig = {};
let prodVerConfig = {};
let docsConfig = {};

let extractDevCss = new ExtractTextPlugin('morning-ui.css');
let extractProdCss = new ExtractTextPlugin('morning-ui.min.css');
let extractDocsCss = new ExtractTextPlugin('[name].css');

let getDocsEntry = async docsConfig => {

    walk.walkSync(pathSrcDocsPages, {
        listeners : {
            file : (root, fileStats, next) => {

                if (fileStats.name === 'index.js') {

                    let urlPath = root.replace(`${pathSrcDocsPages}/`, '');
                    let entryFile = `${root}/index.js`;

                    docsConfig.entry[urlPath] = entryFile;

                }

                next();

            }
        }
    });

};

let getDocsHtmlPlugin = async docsConfig => {

    for (let urlPath of Object.keys(docsConfig.entry)) {

        docsConfig.plugins.push(new HtmlWebpackPlugin({
            chunks: [urlPath],
            filename : `${urlPath}.html`,
            template : path.resolve(pathSrcDocs, 'tpl.html')
        }));

    }

};

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
    entry : {},
    plugins : [
        new CleanWebpackPlugin([pathDocs], {
            root : pathProjectRoot
        }),
        extractDocsCss
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

getDocsEntry(docsConfig);
getDocsHtmlPlugin(docsConfig);

module.exports = [
    // devVerConfig,
    // prodVerConfig,
    docsConfig
];
