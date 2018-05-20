import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import upload                       from '../../../src/lib/components/upload/index.vue';

const name = 'upload';
const component = window.morning._origin.Form.extend(upload);

test.serial('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    snapshot(t, vm);

});

test.serial('base : init component', async t => {

    const vm = new Vue(component).$mount();

    t.plan(2);

    t.is(vm.uiid, 3);

    // cause :npm run test and npm run cover has different result, so not diff vm.$el for now.
    delete vm.$el;

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
            value1 : [{
                path : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png',
                name : '1511259398095810608.png'
            }]
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(2);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get()[0].path, 'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png');
        t.is(vm.$children[0].get()[0].name, '1511259398095810608.png');

    });

});

test.serial('form base : init component value is right when both use v-model and default-value', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} v-model="value1" :default-value="value2" :list="{Tim:'Tim Boelaars',Andrew:'Andrew Colin Beck',Victor:'Victor Erixon'}"></ui-${name}>
            </div>
        `,
        data : {
            value1 : [{
                path : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png',
                name : '1511259398095810608.png'
            }],
            value2 : [{
                path : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17492/1511259398095810606.png',
                name : '1511259398095810606.png'
            }]
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(2);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get()[0].path, 'http://morning-ui-image.test.upcdn.net/uploaddemo/17491/1511259398095810608.png');
        t.is(vm.$children[0].get()[0].name, '1511259398095810608.png');

    });

});
