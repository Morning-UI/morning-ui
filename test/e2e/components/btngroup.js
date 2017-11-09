import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'btngroup';
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

test.serial('vertical', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            vertical : window.getComputedStyle($('[name="开始"] .vertical')[0])
        }));

    t.plan(1);

    cleanstyle(result.vertical);
    t.snapshot(result);

});

test.serial('nogap', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            nogap : window.getComputedStyle($('[name="开始"] .nogap')[0])
        }));

    t.plan(1);

    cleanstyle(result.nogap);
    t.snapshot(result);

});

test.serial('split', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            split : window.getComputedStyle($('[name="开始"] .split')[0])
        }));

    t.plan(1);

    cleanstyle(result.split);
    t.snapshot(result);

});
