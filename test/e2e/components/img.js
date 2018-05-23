import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'img';
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

    cleanstyle(result.style);
    t.snapshot(result);

});

test.serial('hastext', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            hastext : window.getComputedStyle($('[name="开始"] [_uiid="4"]')[0])
        }));

    t.plan(1);

    cleanstyle(result.hastext);
    t.snapshot(result);

});

test.serial('round', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            round : window.getComputedStyle($('[name="开始"] .round')[0])
        }));

    t.plan(1);

    cleanstyle(result.round);
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

    cleanstyle(result.circle);
    t.snapshot(result);

});

test.serial('thumbnail', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            thumbnail : window.getComputedStyle($('[name="开始"] .thumbnail')[0])
        }));

    t.plan(1);

    cleanstyle(result.thumbnail);
    t.snapshot(result);

});

test.serial('width', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            width : window.getComputedStyle($('[name="开始"] [width]')[0])
        }));

    t.plan(1);

    cleanstyle(result.width);
    t.snapshot(result);

});

test.serial('height', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            height : window.getComputedStyle($('[name="开始"] [height]')[0])
        }));

    t.plan(1);

    cleanstyle(result.height);
    t.snapshot(result);

});
