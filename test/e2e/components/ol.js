import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'ol';
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

test.serial('list style type', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            lv1 : $('[name="开始"] mor-ol').css('list-style-type'),
            lv2 : $('[name="开始"] mor-ol > mor-ol').css('list-style-type'),
            lv3 : $('[name="开始"] mor-ol > mor-ol > mor-ol').css('list-style-type'),
            lv4 : $('[name="开始"] mor-ol > mor-ol > mor-ol > mor-ol').css('list-style-type')
        }));

    t.plan(1);

    t.snapshot(result);

});
