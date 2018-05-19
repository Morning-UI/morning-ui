import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import datetimepicker               from '../../../src/lib/components/datetimepicker/index.vue';

const name = 'datetimepicker';
const component = window.morning._origin.Form.extend(datetimepicker);

test.serial('base : component snapshot', async t => {

    const vm = new Vue(component);

    // fixed date
    vm.date = +new Date('2018-03-23');
    
    await new Promise(resolve => {

        vm.Vue.nextTick(() => {
        
            vm.$mount();
        
        });
        
        resolve();

    });

    t.plan(1);

    snapshot(t, vm);

});

test.serial('base : init component', async t => {

    const vm = new Vue(component).$mount();

    t.plan(2);

    t.is(vm.uiid, 10);
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
            value1 : "2018-03-23 12:15:30"
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get(), '2018-03-23 12:15:30');

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
            value1 : "2018-03-23 12:15:30",
            value2 : "2017-02-12 15:12:20"
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get(), '2018-03-23 12:15:30');

    });

});
