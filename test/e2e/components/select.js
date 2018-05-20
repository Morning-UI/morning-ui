import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'select';
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
            'state_ndr',
            [{
                child : '.wrap',
                attrs : [
                    'border-color',
                    'background-color',
                    'cursor',
                    '-webkit-user-select'
                ]
            }, {
                child : '.wrap > .morningicon',
                attrs : [
                    'display'
                ]
            }, {
                child : '.wrap > mor-multiinput',
                attrs : [
                    'background'
                ]
            }, {
                child : '.wrap > mor-textinput',
                attrs : [
                    'display'
                ]
            }]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.state_ndr.normal), JSON.stringify(result.default));

});
