import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import textinput                    from '../../../src/lib/components/textinput/index.vue';

const name = 'textinput';
const component = window.morning._origin.Form.extend(textinput);

test('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    snapshot(t, vm);

});

test('base : init component', async t => {

    const vm = new Vue(component).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(component.options.name, `morning-${name}`);

});

test('base : component tag name is t-*', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `mor-${name}`.toUpperCase());

});

test('form base : init component value is right when use v-model', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} v-model="value1"></ui-${name}>
            </div>
        `,
        data : {
            value1 : 'test 123'
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get(), 'test 123');

    });

});

test('form base : init component value is right when both use v-model and default-value', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} v-model="value1" :default-value="value2"></ui-${name}>
            </div>
        `,
        data : {
            value1 : 'test 123',
            value2 : 'test 234'
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get(), 'test 123');

    });

});

test('set json string value', async t => {

    const vm = new Vue({
        template : `<ui-${name} v-model="value"></ui-${name}>`,
        data : {
            value : ''
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();
    vm.value = '{"a":"a"}';

    t.plan(2);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get(), '{"a":"a"}');

        vm.value = '[1, 2]';

        Vue.nextTick(() => {

            t.is(vm.$children[0].get(), '[1,2]');

        });

    });

});