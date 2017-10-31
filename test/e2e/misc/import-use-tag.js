import fs                           from 'fs';
import fse                          from 'fs-extra';
import path                         from 'path';
import test                         from 'ava';
import nightmare                    from 'nightmare';

const runner = nightmare({
    show : false
});

test.only.serial('import-use-tag', async t => {

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
