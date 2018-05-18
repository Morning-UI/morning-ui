import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import textarea                    from '../../../src/lib/components/textarea/index.vue';

const name = 'textarea';
const component = window.morning._origin.Form.extend(textarea);

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

test('set json string value', async t => {

    const vm = new Vue({
        template : '<ui-textarea v-model="value"></ui-textarea>',
        data : {
            value : ''
        },
        components : {
            'ui-textarea' : component
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
