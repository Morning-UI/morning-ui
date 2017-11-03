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
        <script src="https://cdn.bootcss.com/vue/2.4.2/vue.js"></script>
        <script src="./morning-ui.js"></script>
        <script>
        morning.init();
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
        .wait('i-link')
        .evaluate(() => ({
            morning : window.morning,
            style : window.getComputedStyle(document.querySelector('i-link'))
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

test.serial.only('import-use-webpack', async t => {

    t.plan(2);

    let pathProjectRoot = path.resolve(__dirname, '../../../');
    // let pathMroningJs = path.resolve(pathProjectRoot, 'dist/morning-ui.js');
    // let pathMroningCss = path.resolve(pathProjectRoot, 'dist/morning-ui.css');
    let pathTmp = path.resolve(pathProjectRoot, '.tmp');
    let pathDir = path.resolve(pathTmp, 'import-use-webpack/');
    let pathPackage = path.resolve(pathDir, 'package.json');
    let pathWebpack = path.resolve(pathDir, 'webpack.config.js');
    let pathSrc = path.resolve(pathDir, 'src/');
    let pathDist = path.resolve(pathDir, 'dist/');
    let pathHtml = path.resolve(pathDist, 'index.html');
    let pathJs = path.resolve(pathSrc, 'index.js');
    // let pathHtml = path.resolve(pathSrc, 'index.html');
    // let pathJs = path.resolve(pathDir, 'morning-ui.js');
    // let pathCss = path.resolve(pathDir, 'morning-ui.css');

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
        }
    };
    `);

    fs.writeFileSync(pathJs, `
    import vue from 'vue';
    import morning from 'morning-ui';

    morning.init(vue);
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

        exec(`cd ${pathDir} && npm install morning-ui webpack vue`, () => {

            resolve();
        
        });

    });

    await new Promise(resolve => {

        exec(`cd ${pathDir} && node_modules/.bin/webpack webpack.config.js`, resolve);

    });

    // fse.copySync(pathMroningJs, pathJs);
    // fse.copySync(pathMroningCss, pathCss);

    // const result = await runner
    //     .goto(`file://${pathHtml}`)
    //     .wait('i-link')
    //     .evaluate(() => ({
    //         morning : window.morning,
    //         style : window.getComputedStyle(document.querySelector('i-link'))
    //     }));

    // // circleci
    // delete result.style.inlineSize;
    // delete result.style.perspectiveOrigin;
    // delete result.style.transformOrigin;
    // delete result.style.webkitLogicalWidth;
    // delete result.style.webkitTapHighlightColor;
    // delete result.style.width;

    // t.is(result.morning.isMorning, true);
    // t.snapshot(result.style);

});
