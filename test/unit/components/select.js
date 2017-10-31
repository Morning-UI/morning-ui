import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import select                       from '../../../src/lib/components/select/index.vue';

Vue.component(`ui-select`, select);

test('base : init component', async t => {

    const vm = new Vue(select).$mount();

    t.plan(3);

    t.is(vm.uiid, 1);
    t.is(select.options.name, 'select');
    snapshot(t, vm);

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

    let uiid = vm.$el.querySelector('i-select').getAttribute('_uiid');

    t.plan(1);
    t.is(window.morning.map[uiid].get(false)[0], 'Tim');

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

    let uiid = vm.$el.querySelector('i-select').getAttribute('_uiid');

    t.plan(1);
    t.is(window.morning.map[uiid].get(false).length, 0);

});
