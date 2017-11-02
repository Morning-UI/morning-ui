import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import textcenter                   from '../../../src/lib/components/textcenter/index.vue';

const name = 'textcenter';

test('base : component snapshot', async t => {

    const vm = new Vue(textcenter).$mount();

    t.plan(1);
    
    snapshot(t, vm);

});

test('base : init component', async t => {

    const vm = new Vue(textcenter).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(textcenter.options.name, name);

});

test('base : component tag name is t-*', async t => {

    const vm = new Vue(textcenter).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `i-${name}`.toUpperCase());

});
