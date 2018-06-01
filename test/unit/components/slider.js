import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import slider                       from '../../../src/lib/components/slider/index.vue';

const name = 'slider';
const component = window.morning._origin.Form.extend(slider);
const num40 = 40;

test.serial('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    // cause : tip-formatter is a function, when run coverage test, the function always different.
    delete vm.$el;

    snapshot(t, vm);

});

test.serial('base : init component', async t => {

    const vm = new Vue(component).$mount();

    t.plan(2);

    t.is(vm.uiid, 3);
    t.is(component.options.name, `morning-${name}`);

});

test.serial('base : component tag name is t-*', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `mor-${name}`.toUpperCase());

});

test.serial('form base : init component value is right when use v-model', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} v-model="value1"></ui-${name}>
            </div>
        `,
        data : {
            value1 : num40
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get(), num40);

    });

});

test.serial('form base : init component value is right when both use v-model and default-value', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} v-model="value1" :default-value="value2"></ui-${name}>
            </div>
        `,
        data : {
            value1 : num40,
            value2 : 60
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get(), num40);

    });

});
