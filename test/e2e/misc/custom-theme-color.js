import {exec}                       from 'child_process';
import fs                           from 'fs';
import fse                          from 'fs-extra';
import path                         from 'path';
import test                         from 'ava';
import nightmare                    from 'nightmare';

const runner = nightmare({
    show : false
});

test.serial('custom-theme-color', async t => {

    t.plan(2);

    const maxBuffer = 1024000;

    let pathProjectRoot = path.resolve(__dirname, '../../../');
    let pathTmp = path.resolve(pathProjectRoot, '.tmp');
    let pathDir = path.resolve(pathTmp, 'custom-theme-color/');
    let pathPackage = path.resolve(pathDir, 'package.json');
    let pathWebpack = path.resolve(pathDir, 'webpack.config.js');
    let pathSrc = path.resolve(pathDir, 'src/');
    let pathDist = path.resolve(pathDir, 'dist/');
    let pathHtml = path.resolve(pathDist, 'index.html');
    let pathJs = path.resolve(pathSrc, 'index.js');
    let pathTheme = path.resolve(pathSrc, 'theme.less');

    fse.emptyDirSync(pathDir);
    fse.emptyDirSync(pathSrc);
    fse.emptyDirSync(pathDist);

    fs.writeFileSync(pathPackage, `{}`);

    fs.writeFileSync(pathWebpack, `
    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: '${pathDist}'
        },
        mode : 'production',
        module: {
            rules: [
                {
                    test: /\\.css$/,
                    use: [
                       'style-loader',
                       'css-loader'
                    ]
                },
                {
                    test: /\\.less$/,
                    use: [
                       'style-loader',
                       'css-loader',
                       'less-loader'
                    ]
                },
                {
                    test : /\\.woff$/,
                    exclude : /node_modules/,
                    use : [{
                        loader : 'url-loader'
                    }]
                }
            ]
        }
    };
    `);

    fs.writeFileSync(pathTheme, `
@import '~morning-ui/src/lib/styles/index.less';

// 覆写主题色
@colorTheme : #2890DA;
@colorLightTheme : #3594D8;
@colorDarkTheme : #0672BF;
    `);

    fs.writeFileSync(pathJs, `
    import Vue from 'vue/dist/vue.esm.js';
    import morning from 'morning-ui';
    import './theme.less';

    window.morning = morning;
    Vue.use(morning);
    new Vue({
        el : '#vue',
        template : '<ui-link>link</ui-link>'
    });
    `);

    fs.writeFileSync(pathHtml, `
    <html>
        <head>
            <title>e2e test : custom-theme-color</title>
        </head>
        <body>
            <div id="vue"></div>
            <script src="./bundle.js"></script>
        </body>
    </html>
    `);

    await new Promise((resolve, reject) => {

        exec(
            `cd ${pathDir} && npm install morning-ui && npm install webpack@4.29.0 style-loader css-loader less-loader url-loader vue@2.5.22`,
            {
                maxBuffer : maxBuffer
            },
            error => {

                if (error) {

                    reject(error);

                }

                resolve();

            }
        );

    });

    await new Promise((resolve, reject) => {

        exec(
            `cd ${pathDir} && node_modules/.bin/webpack --config webpack.config.js`,
            {
                maxBuffer : maxBuffer
            },
            error => {

                if (error) {

                    reject(error);

                }

                resolve();

            }
        );

    });

    const result = await runner
        .goto(`file://${pathHtml}`)
        .wait('mor-link')
        .evaluate(() => ({
            morning : window.morning.isMorning,
            style : window.getComputedStyle(document.querySelector('mor-link')).color
        }));

    // circleci
    delete result.style.inlineSize;
    delete result.style.perspectiveOrigin;
    delete result.style.transformOrigin;
    delete result.style.webkitLogicalWidth;
    delete result.style.webkitTapHighlightColor;
    delete result.style.width;

    t.is(result.morning, true);
    t.snapshot(result.style, 'rgb(40, 144, 218)');

});
