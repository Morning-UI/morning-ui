import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import textleft                     from '../../../src/lib/components/textleft/index.vue';

const name = 'textleft';

test('base : component snapshot', async t => {

    const vm = new Vue(textleft).$mount();

    t.plan(1);
    
    snapshot(t, vm);

});

test('base : init component', async t => {

    const vm = new Vue(textleft).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(textleft.options.name, name);

});

test('base : component tag name is t-*', async t => {

    const vm = new Vue(textleft).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `i-${name}`.toUpperCase());

});
