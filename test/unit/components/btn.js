import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import btn                          from '../../../src/lib/components/btn/index.vue';

const name = 'btn';

test('base : component snapshot', async t => {

    const vm = new Vue(btn).$mount();

    t.plan(1);

    snapshot(t, vm);

});

test('base : init component', async t => {

    const vm = new Vue(btn).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(btn.options.name, name);

});

test('base : component tag name is t-*', async t => {

    const vm = new Vue(btn).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `i-${name}`.toUpperCase());

});

test('config : link', async t => {

    const vm = new Vue({
        template : '<ui-btn :link="link">按钮</ui-btn>',
        data : {
            link : 'http://www.google.com'
        },
        components : {
            'ui-btn' : btn
        }
    });

    vm.$mount();

    t.plan(2);

    t.is(vm.$children[0].conf.link, 'http://www.google.com');
    snapshot(t, vm);

});
