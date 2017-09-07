const path                          = require('path');
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
let pathSrcDocs = path.resolve(pathSrc, 'docs');
let pathSrcDocsPages = path.resolve(pathSrcDocs, 'pages');

let docsConfig = {};

let extractDocsCss = new ExtractTextPlugin('[name].css');
let extractIconfont = new ExtractTextPlugin('iconfont.woff');

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

        docsConf.plugins.push(new HtmlWebpackPlugin({
            chunks : [urlPath],
            filename : `${urlPath}.html`,
            template : path.resolve(pathSrcDocs, 'tpl.html')
        }));

    }

};

docsConfig = {
    entry : {},
    plugins : [
        new CleanWebpackPlugin([pathDocs], {
            root : pathProjectRoot
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : process.env.NODE_ENV
        }),
        extractDocsCss,
        extractIconfont
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
            pathDist
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
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ]
    },
    output : {
        path : pathDocs,
        filename : '[name].js',
        publicPath : '/'
    }
};

getDocsEntry(docsConfig);
getDocsHtmlPlugin(docsConfig);

module.exports = docsConfig;
