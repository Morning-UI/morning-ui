import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'dl';
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

test.serial('horizontal', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            dt : window.getComputedStyle($('[name="开始"] .horizontal > dt')[0]),
            dd : window.getComputedStyle($('[name="开始"] .horizontal > dd')[0])
        }));

    t.plan(1);

    cleanstyle(result.dt);
    cleanstyle(result.dd);

    t.snapshot(result);

});

test.serial('underline', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            dt : window.getComputedStyle($('[name="开始"] .underline > dt')[0]),
            dd : window.getComputedStyle($('[name="开始"] .underline > dd')[0])
        }));

    t.plan(1);

    cleanstyle(result.dt);
    cleanstyle(result.dd);

    t.snapshot(result);

});
