import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import block                        from '../../../src/lib/components/block/index.vue';

const name = 'block';

test('base : component snapshot', async t => {

    const vm = new Vue(block).$mount();

    t.plan(1);
    
    snapshot(t, vm);

});

test('base : init component', async t => {

    const vm = new Vue(block).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(block.options.name, name);

});

test('base : component tag name is t-*', async t => {

    const vm = new Vue(block).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `i-${name}`.toUpperCase());

});
