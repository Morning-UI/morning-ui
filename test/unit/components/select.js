import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import select                       from '../../../src/lib/components/select/index.vue';

const name = 'select';
const component = window.morning._origin.Form.extend(select);

Vue.component(`ui-${name}`, component);

test('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);
    
    snapshot(t, vm);

});

test('base : init component', async t => {

    const vm = new Vue(component).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(component.options.name, name);

});

test('base : component tag name is t-*', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `mor-${name}`.toUpperCase());

});

test('config : default-value : with v-for slot : value exist', async t => {

    const vm = new Vue({
        template : `
        <div>
        <ui-select :default-value="['Tim']">
            <li :value="value" v-for="(name, value) in list">{{name}}</li>
        </ui-select>
        </div>
        `,
        data : {
            list : {
                Tim : 'Tim',
                Andrew : 'Andrew',
                Gustavo : 'Gustavo'
            }
        }
    });

    vm.$mount();

    let uiid = vm.$el.querySelector('mor-select').getAttribute('_uiid');

    t.plan(1);
    t.is(window.morning.map[uiid].get()[0], 'Tim');

});

test('config : default-value : with v-for slot : value not exist', async t => {

    const vm = new Vue({
        template : `
        <div>
        <ui-select :default-value="['not exist']">
            <li :value="value" v-for="(name, value) in list">{{name}}</li>
        </ui-select>
        </div>
        `,
        data : {
            list : {
                Tim : 'Tim',
                Andrew : 'Andrew',
                Gustavo : 'Gustavo'
            }
        }
    });

    vm.$mount();

    let uiid = vm.$el.querySelector('mor-select').getAttribute('_uiid');

    t.plan(1);
    t.is(window.morning.map[uiid].get().length, 0);

});
