import test                         from 'ava';
import nightmare                    from 'nightmare';

const runner = nightmare({
    show : true
});

test.serial('e2e test is ready', async t => {

    const result = await runner
        .goto('http://baidu.com')
        .wait('#wrapper')
        .evaluate(() => document.querySelector('#wrapper').id);

    t.is(result, 'wrapper');

});
