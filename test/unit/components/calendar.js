import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import calendar                     from '../../../src/lib/components/calendar/index.vue';

const name = 'calendar';
const component = window.morning._origin.UI.extend(calendar);

test('base : component snapshot', async t => {
    
    const vm = new Vue(component);

    // fixed date
    vm.date = +new Date('2018-03-23');
    vm.$mount();

    t.plan(1);

    snapshot(t, vm);

});

test('base : init component', async t => {

    const vm = new Vue(component).$mount();

    t.plan(2);

    t.is(vm.uiid, 3);
    t.is(component.options.name, `morning-${name}`);

});

test('base : component tag name is t-*', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `mor-${name}`.toUpperCase());

});
