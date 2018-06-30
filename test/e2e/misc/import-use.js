import {exec}                       from 'child_process';
import fs                           from 'fs';
import fse                          from 'fs-extra';
import path                         from 'path';
import test                         from 'ava';
import nightmare                    from 'nightmare';

const runner = nightmare({
    show : false
});

test.serial('import-use-tag', async t => {

    t.plan(2);

    let pathProjectRoot = path.resolve(__dirname, '../../../');
    let pathMroningJs = path.resolve(pathProjectRoot, 'dist/morning-ui.js');
    let pathMroningCss = path.resolve(pathProjectRoot, 'dist/morning-ui.css');
    let pathTmp = path.resolve(pathProjectRoot, '.tmp');
    let pathDir = path.resolve(pathTmp, 'import-use-tag/');
    let pathHtml = path.resolve(pathDir, 'index.html');
    let pathJs = path.resolve(pathDir, 'morning-ui.js');
    let pathCss = path.resolve(pathDir, 'morning-ui.css');

    fse.emptyDirSync(pathTmp);
    fse.emptyDirSync(pathDir);

    fs.writeFileSync(pathHtml, `
    <html>
        <head>
            <title>e2e test : import-use-tag</title>
            <link rel="stylesheet" href="./morning-ui.css" />
        </head>
        <body>
            <div id="vue"></div>
        <script src="https://cdn.bootcss.com/vue/2.5.3/vue.js"></script>
        <script src="./morning-ui.js"></script>
        <script>
        Vue.use(morning);
        new Vue({
            el : '#vue',
            template : '<ui-link>link</ui-link>'
        });
        </script>
        </body>
    </html>
    `);
    fse.copySync(pathMroningJs, pathJs);
    fse.copySync(pathMroningCss, pathCss);

    const result = await runner
        .goto(`file://${pathHtml}`)
        .wait('mor-link')
        .evaluate(() => ({
            morning : window.morning,
            style : window.getComputedStyle(document.querySelector('mor-link'))
        }));

    // circleci
    delete result.style.inlineSize;
    delete result.style.perspectiveOrigin;
    delete result.style.transformOrigin;
    delete result.style.webkitLogicalWidth;
    delete result.style.webkitTapHighlightColor;
    delete result.style.width;

    t.is(result.morning.isMorning, true);
    t.snapshot(result.style);

});

test.serial('import-use-webpack', async t => {

    t.plan(2);

    const maxBuffer = 1024000;

    let pathProjectRoot = path.resolve(__dirname, '../../../');
    let pathTmp = path.resolve(pathProjectRoot, '.tmp');
    let pathDir = path.resolve(pathTmp, 'import-use-webpack/');
    let pathPackage = path.resolve(pathDir, 'package.json');
    let pathWebpack = path.resolve(pathDir, 'webpack.config.js');
    let pathSrc = path.resolve(pathDir, 'src/');
    let pathDist = path.resolve(pathDir, 'dist/');
    let pathHtml = path.resolve(pathDist, 'index.html');
    let pathJs = path.resolve(pathSrc, 'index.js');

    fse.emptyDirSync(pathTmp);
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
        module: {
            rules: [
                {
                    test: /\\.css$/,
                    use: [
                       'style-loader',
                       'css-loader'
                    ]
                }
            ]
        }
    };
    `);

    fs.writeFileSync(pathJs, `
    import Vue from 'vue/dist/vue.esm.js';
    import morning from 'morning-ui';
    import 'morning-ui/dist/morning-ui.css';
    
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
            <title>e2e test : import-use-webpack</title>
        </head>
        <body>
            <div id="vue"></div>
            <script src="./bundle.js"></script>
        </body>
    </html>
    `);

    await new Promise(resolve => {

        exec(
            `cd ${pathDir} && npm install morning-ui webpack@4.6.0 style-loader css-loader vue`,
            {
                maxBuffer : maxBuffer
            },
            (error, stdout) => {

                if (error) {

                    console.log(error);

                    throw error;

                }

                resolve();

            }
        );

    });

    await new Promise(resolve => {

        exec(
            `cd ${pathDir} && node_modules/.bin/webpack webpack.config.js`,
            {
                maxBuffer : maxBuffer
            },
            (error, stdout) => {

                if (error) {

                    console.log(error);

                    throw error;

                }

                resolve();

            }
        );

    });

    const result = await runner
        .goto(`file://${pathHtml}`)
        .wait('mor-link')
        .evaluate(() => ({
            morning : window.morning,
            style : window.getComputedStyle(document.querySelector('mor-link'))
        }));

    // circleci
    delete result.style.inlineSize;
    delete result.style.perspectiveOrigin;
    delete result.style.transformOrigin;
    delete result.style.webkitLogicalWidth;
    delete result.style.webkitTapHighlightColor;
    delete result.style.width;

    t.is(result.morning.isMorning, true);
    t.snapshot(result.style);

});
