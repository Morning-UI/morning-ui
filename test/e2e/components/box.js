import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'box';
let docUrl = `${common.TEST_HOST}/component/${tagName}.html`;
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

test.serial('margin', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            margin : window.getComputedStyle($('[name="开始"] .margin')[0])
        }));

    t.plan(1);

    cleanstyle(result.margin);
    t.snapshot(result);

});

test.serial('fill', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            fill : window.getComputedStyle($('[name="开始"] .fill')[0])
        }));

    t.plan(1);

    cleanstyle(result.fill);
    t.snapshot(result);

});
