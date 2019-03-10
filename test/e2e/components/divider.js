import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'divider';
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

test.serial('vertical', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            vertical : window.getComputedStyle($(`[name="开始"] .vertical`)[0])
        }));

    t.plan(1);

    cleanstyle(result.vertical);
    t.snapshot(result);

});

test.serial('no content', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            nocontent : window.getComputedStyle($(`[name="开始"] [_uiid="25"]`)[0])
        }));

    t.plan(1);

    cleanstyle(result.nocontent);
    t.snapshot(result);

});
