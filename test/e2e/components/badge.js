import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'badge';
let docUrl = common.getE2eDocUrl(tagName);
let basicDemo = `[name="开始"] mor-${tagName}`;

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

    delete result.style.inlineSize;
    delete result.style.perspectiveOrigin;
    delete result.style.webkitLogicalWidth;
    delete result.style.width;

    cleanstyle(result.style);
    t.snapshot(result);

});

test.serial('size', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'size',
            [
                'font-size',
                'border-radius',
                'padding',
                'margin'
            ]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.size.m), JSON.stringify(result.default));

});

test.serial('color', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'color',
            [
                'background-color',
                'color'
            ]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.color.theme), JSON.stringify(result.default));

});

test.serial('state', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'state_na',
            [
                'animation-name'
            ]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.state_na.normal), JSON.stringify(result.default));

});

test.serial('flat', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            flat : window.getComputedStyle($('[name="开始"] .flat')[0])
        }));

    t.plan(1);

    delete result.flat.inlineSize;
    delete result.flat.perspectiveOrigin;
    delete result.flat.webkitLogicalWidth;
    delete result.flat.width;

    cleanstyle(result.flat);
    t.snapshot(result);

});

test.serial('circle', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            circle : window.getComputedStyle($('[name="开始"] .circle')[0])
        }));

    t.plan(1);

    delete result.circle.inlineSize;
    delete result.circle.perspectiveOrigin;
    delete result.circle.webkitLogicalWidth;
    delete result.circle.width;

    cleanstyle(result.circle);
    t.snapshot(result);

});

test.serial('no content', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            nocontent : window.getComputedStyle($('[name="开始"] [_uiid="6"]')[0])
        }));

    t.plan(1);

    cleanstyle(result.nocontent);
    t.snapshot(result);

});
