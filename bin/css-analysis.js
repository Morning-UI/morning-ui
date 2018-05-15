// 此工具用于分析dist/morning-ui.min.css文件中各个组件CSS占比

const fs                            = require('fs');
const CleanCSS                      = require('clean-css');
const sortby                        = require('lodash.sortby');

const num100 = 100;
const num10k = 10000;

let css = fs.readFileSync('./dist/morning-ui.min.css');
let map = [];
let totalSize = 0;
let originSize = 0;

new CleanCSS({
    format : 'keep-breaks'
}).minify(css, (error, output) => {

    if (error) {

        throw error;

    }

    css = output.styles;
    css = css.toString();
    originSize = css.length;
    css = css.split('\n');

    for (let line of css) {

        if (line.search(/^mor-[a-z-]+/) === 0) {

            let component = line.match(/^mor-[a-z-]+/);
            
            if (component) {

                component = component[0];

                if (map[component] === undefined) {

                    map[component] = {
                        key : component,
                        count : 0,
                        size : 0
                    };

                }

                map[component].count++;
                map[component].size += line.length;
                totalSize += line.length;

            }

        }

    }

    for (let component of Object.values(map)) {

        component.percentage = Math.round(component.size / totalSize * num10k) / num100;

    }

    map = sortby(Object.values(map), v => (-v.percentage));

    /* eslint-disable no-console */
    console.log('========= Morning UI CSS Analysis =========');
    console.log(`total size : ~${originSize}`);
    console.log(`components size : ~${totalSize}`);
    console.log(`component num : ${Object.keys(map).length}`);
    console.log('\nDetail:\n');
    /* eslint-enable no-console */

    for (let component of map) {

        /* eslint-disable no-console */
        console.log(`${component.key} | count line: ${component.count} | size: ${component.size} | size percentage: ${component.percentage}%`);
        /* eslint-enable no-console */

    }

    /* eslint-disable no-console */
    console.log(`Other size: ${originSize - totalSize}`);
    console.log('\n========= END (hope help to u) :)=========');
    /* eslint-enable no-console */

});
