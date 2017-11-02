import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import statistic                    from '../../../src/lib/components/statistic/index.vue';

const name = 'statistic';

test('base : component snapshot', async t => {

    const vm = new Vue(statistic).$mount();

    t.plan(1);
    
    snapshot(t, vm);

});

test('base : init component', async t => {

    const vm = new Vue(statistic).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(statistic.options.name, name);

});

test('base : component tag name is t-*', async t => {

    const vm = new Vue(statistic).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `i-${name}`.toUpperCase());

});
