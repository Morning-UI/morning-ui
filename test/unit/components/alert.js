import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import alert                          from '../../../src/lib/components/alert/index.vue';

const name = 'alert';
const component = window.morning._origin.UI.extend(alert);

test.serial('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    snapshot(t, vm);

});

test.serial('base : init component', async t => {

    const vm = new Vue(component).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(component.options.name, `morning-${name}`);

});

test.serial('base : component tag name is t-*', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `mor-${name}`.toUpperCase());

});
