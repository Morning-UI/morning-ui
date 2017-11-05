import test                         from 'ava';
import nightmare                    from 'nightmare';

const runner = nightmare({
    show : false
});

test.serial('e2e test is ready', async t => {

    const result = await runner
        .goto('https://www.apple.com')
        .wait('body')
        .evaluate(() => true);

    t.is(result, true);

});
