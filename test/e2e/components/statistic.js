import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'statistic';
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
            [{
                child : ' .value',
                attrs : [
                    'font-size'
                ]
            }, {
                child : ' .label',
                attrs : [
                    'font-size'
                ]
            }]
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
            [{
                child : ' .value',
                attrs : [
                    'color'
                ]
            }, {
                child : ' .label',
                attrs : [
                    'color'
                ]
            }]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.color.black), JSON.stringify(result.default));

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

test.serial('image', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            image : window.getComputedStyle($('[name="开始"] [_uiid="46"] img')[0])
        }));

    t.plan(1);

    cleanstyle(result.image);
    t.snapshot(result);

});

test.serial('iconfont', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            iconfont : window.getComputedStyle($('[name="开始"] [_uiid="47"] .mo-icon')[0])
        }));

    t.plan(1);

    cleanstyle(result.iconfont);
    t.snapshot(result);

});

test.serial('horizontal left', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            horizontal : window.getComputedStyle($('[name="开始"] [_uiid="48"]')[0])
        }));

    t.plan(1);

    delete result.horizontal.inlineSize;
    delete result.horizontal.perspectiveOrigin;
    delete result.horizontal.webkitLogicalWidth;
    delete result.horizontal.width;

    cleanstyle(result.horizontal);
    t.snapshot(result);

});

test.serial('horizontal right', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            horizontal : window.getComputedStyle($('[name="开始"] [_uiid="49"]')[0])
        }));

    t.plan(1);

    delete result.horizontal.inlineSize;
    delete result.horizontal.perspectiveOrigin;
    delete result.horizontal.webkitLogicalWidth;
    delete result.horizontal.width;

    cleanstyle(result.horizontal);
    t.snapshot(result);

});

test.serial('top name', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            topname : window.getComputedStyle($('[name="开始"] [_uiid="50"]')[0])
        }));

    t.plan(1);

    delete result.topname.inlineSize;
    delete result.topname.perspectiveOrigin;
    delete result.topname.webkitLogicalWidth;
    delete result.topname.width;

    cleanstyle(result.topname);
    t.snapshot(result);

});
