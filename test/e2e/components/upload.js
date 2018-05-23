import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'upload';
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
                attrs : [
                    '-webkit-user-select',
                    'cursor',
                    'background-color'
                ]
            }, {
                child : '.fl',
                attrs : [
                    'border-color',
                    'background-color'
                ]
            }, {
                child : '.filewrap > .file',
                attrs : [
                    'background-color'
                ]
            }, {
                child : '.filewrap > .file .mo-icon',
                attrs : [
                    'display'
                ]
            }, {
                child : '.fl-name',
                attrs : [
                    'background-color',
                    'color'
                ]
            }]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.state_ndr.normal), JSON.stringify(result.default));

});
