import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'card';
let docUrl = `${common.TEST_HOST}/component/${tagName}.html`;
let basicDemo = `[name="开始"] i-${tagName}`;

let context = {
    tagName,
    basicDemo,
    common
};

test.serial('basic style', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eBasicFnString})`),
            context
        );

    t.plan(1);

    cleanstyle(result.style);
    t.snapshot(result);

});

test.serial('color', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'color',
            [{
                child : ' header',
                attrs : [
                    'background-color',
                    'color'
                ]
            }]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.color.theme), JSON.stringify(result.default));

});

test.serial('full', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            full : window.getComputedStyle($('[name="开始"] .full')[0])
        }));

    t.plan(1);

    cleanstyle(result.full);
    t.snapshot(result);

});

test.serial('full with header', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            full : window.getComputedStyle($('[name="开始"] .full')[1])
        }));

    t.plan(1);

    cleanstyle(result.full);
    t.snapshot(result);

});
