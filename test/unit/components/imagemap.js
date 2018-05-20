import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import imagemap                     from '../../../src/lib/components/imagemap/index.vue';

const name = 'imagemap';
const component = window.morning._origin.Form.extend(imagemap);
const num361 = 361;

test.serial('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    snapshot(t, vm);

});

test.serial('base : init component', async t => {

    const vm = new Vue(component).$mount();
    const num29 = 29;

    t.plan(2);

    t.is(vm.uiid, num29);
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
            value1 : {
                images : [{
                    name : '151244303389249797.png',
                    path : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
                }],
                zones : [{
                    x : 361,
                    y : 117,
                    h : 180,
                    w : 274
                }],
                w : 722,
                h : 725
            }
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(2);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get().images[0].path, 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png');
        t.is(vm.$children[0].get().zones[0].x, num361);

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
            value1 : {
                images : [{
                    name : '151244303389249797.png',
                    path : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png'
                }],
                zones : [{
                    x : 361,
                    y : 117,
                    h : 180,
                    w : 274
                }],
                w : 722,
                h : 725
            },
            value2 : {
                images : [{
                    name : '151244303389249797.png',
                    path : 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249798.png'
                }],
                zones : [{
                    x : 20,
                    y : 50,
                    h : 90,
                    w : 137
                }],
                w : 361,
                h : 362.5
            }
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(2);

    Vue.nextTick(() => {

        t.is(vm.$children[0].get().images[0].path, 'http://morning-ui-image.test.upcdn.net/uploaddemo/17505/151244303389249797.png');
        t.is(vm.$children[0].get().zones[0].x, num361);

    });

});
