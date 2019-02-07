import {exec}                       from 'child_process';
import fs                           from 'fs';
import fse                          from 'fs-extra';
import path                         from 'path';
import test                         from 'ava';
import nightmare                    from 'nightmare';

const testVer = [
    '2.5.3',
    '2.5.5',
    '2.5.7',
    '2.5.9',
    '2.5.10',
    '2.5.12',
    '2.5.14',
    '2.5.16',
    '2.5.17',
    '2.5.18',
    '2.5.21',
    '2.5.22'
];

for (let ver of testVer) {

    let vueVer = ver;

    test(`vue-compatibility : v${ver}`, async t => {
        
        const runner = nightmare({
            show : false
        });

        t.plan(4);

        const maxBuffer = 1024000;

        let pathProjectRoot = path.resolve(__dirname, '../../../');
        let pathTmp = path.resolve(pathProjectRoot, '.tmp');
        let pathDir = path.resolve(pathTmp, `vue-compatibility-${vueVer}/`);
        let pathPackage = path.resolve(pathDir, 'package.json');
        let pathWebpack = path.resolve(pathDir, 'webpack.config.js');
        let pathSrc = path.resolve(pathDir, 'src/');
        let pathDist = path.resolve(pathDir, 'dist/');
        let pathHtml = path.resolve(pathDist, 'index.html');
        let pathJs = path.resolve(pathSrc, 'index.js');

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
            template : '<div><ui-link>link</ui-link><br><ui-calendar></ui-calendar><br><ui-colorpicker></ui-colorpicker></div>'
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

        await new Promise((resolve, reject) => {

            exec(
                `cd ${pathDir} && npm install ../../ && npm install webpack@4.29.0 style-loader css-loader vue@${vueVer}`,
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
            .wait('mor-calendar')
            .wait('mor-colorpicker')
            .evaluate(() => ({
                morning : window.morning.isMorning,
                styleOfLink : window.getComputedStyle(document.querySelector('mor-link')),
                styleOfCalendar : window.getComputedStyle(document.querySelector('mor-calendar')),
                styleOfColorpicker : window.getComputedStyle(document.querySelector('mor-colorpicker'))
            }));

        // circleci
        delete result.styleOfLink.inlineSize;
        delete result.styleOfLink.perspectiveOrigin;
        delete result.styleOfLink.transformOrigin;
        delete result.styleOfLink.webkitLogicalWidth;
        delete result.styleOfLink.webkitTapHighlightColor;
        delete result.styleOfLink.width;

        delete result.styleOfCalendar.inlineSize;
        delete result.styleOfCalendar.perspectiveOrigin;
        delete result.styleOfCalendar.transformOrigin;
        delete result.styleOfCalendar.webkitLogicalWidth;
        delete result.styleOfCalendar.webkitTapHighlightColor;
        delete result.styleOfCalendar.width;

        delete result.styleOfColorpicker.inlineSize;
        delete result.styleOfColorpicker.perspectiveOrigin;
        delete result.styleOfColorpicker.transformOrigin;
        delete result.styleOfColorpicker.webkitLogicalWidth;
        delete result.styleOfColorpicker.webkitTapHighlightColor;
        delete result.styleOfColorpicker.width;

        t.is(result.morning, true);
        t.snapshot(result.styleOfLink);
        t.snapshot(result.styleOfCalendar);
        t.snapshot(result.styleOfColorpicker);

    });

}
