import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import h                            from '../../../src/lib/components/h/index.vue';

test.only('h : base : init component', async t => {

    const vm = new Vue(h).$mount();

    t.plan(2);

    t.is(vm.uiid, 1);
    snapshot(t, vm);

});
