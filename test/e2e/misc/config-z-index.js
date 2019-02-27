import fs                           from 'fs';
import fse                          from 'fs-extra';
import path                         from 'path';
import test                         from 'ava';
import nightmare                    from 'nightmare';

const runner = nightmare({
    show : false
});

test.serial('config-z-index', async t => {

    t.plan(2);

    const zIndex = 9001;

    let pathProjectRoot = path.resolve(__dirname, '../../../');
    let pathMroningJs = path.resolve(pathProjectRoot, 'dist/morning-ui.js');
    let pathMroningCss = path.resolve(pathProjectRoot, 'dist/morning-ui.css');
    let pathTmp = path.resolve(pathProjectRoot, '.tmp');
    let pathDir = path.resolve(pathTmp, 'import-use-tag/');
    let pathHtml = path.resolve(pathDir, 'index.html');
    let pathJs = path.resolve(pathDir, 'morning-ui.js');
    let pathCss = path.resolve(pathDir, 'morning-ui.css');

    fse.emptyDirSync(pathDir);

    fs.writeFileSync(pathHtml, `
    <html>
        <head>
            <title>e2e test : import-use-tag</title>
            <link rel="stylesheet" href="./morning-ui.css" />
        </head>
        <body>
            <div id="vue"></div>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.22"></script>
        <script src="./morning-ui.js"></script>
        <script>
        Vue.use(morning, {
            zIndex : 8000
        });
        new Vue({
            el : '#vue',
            template : '<ui-dialog>test</ui-dialog>'
        });
        </script>
        </body>
    </html>
    `);
    fse.copySync(pathMroningJs, pathJs);
    fse.copySync(pathMroningCss, pathCss);

    const result = await runner
        .goto(`file://${pathHtml}`)
        .wait('mor-dialog')
        .evaluate(() => ({
            morning : window.morning,
            zindex : +window.getComputedStyle(document.querySelector('mor-dialog')).zIndex
        }));

    t.is(result.morning.isMorning, true);
    t.is(result.zindex, zIndex);

});
