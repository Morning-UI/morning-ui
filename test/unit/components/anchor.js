import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import anchor                       from '../../../src/lib/components/anchor/index.vue';

const name = 'anchor';
const component = window.morning._origin.UI.extend(anchor);

test.serial('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);
    
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

test.serial('slot is dynamic', async t => {

    let vm = new Vue({
        template : `
<ui-anchor>
    <div :id="scope.name" :title="scope.name" is-anchor v-for="scope in scopes">
        CONTENT : {{scope.name}}
    </div>
</ui-anchor>
        `,
        data : {
            scopes : [{
                name : 'first'
            }, {
                name : 'second'
            }, {
                name : 'third'
            }]
        },
        components : {
            'ui-anchor' : component
        }
    });

    vm.$mount();

    t.plan(8);

    await new Promise(resolve => {

        Vue.nextTick(() => {

            t.is(vm.$children[0].data.list[0].title, 'first');
            t.is(vm.$children[0].data.list[2].title, 'third');
            t.is(vm.$children[0].data.list[2].anchor, 'third');

            vm.scopes = [{
                name : '4th'
            }, {
                name : '5th'
            }];

            resolve();

        });

    });

    await new Promise(resolve => {

        vm.$children[0].$mount();

        Vue.nextTick(() => {
            
            t.is(vm.$children[0].data.list[0].title, '4th');
            t.is(vm.$children[0].data.list[1].title, '5th');
            t.is(vm.$children[0].data.list[1].anchor, '5th');

            vm.scopes.pop();
            vm.scopes.pop();
            vm.scopes.push({
                name : '6th'
            });

            resolve();

        });

    });

    await new Promise(resolve => {

        vm.$children[0].$mount();

        Vue.nextTick(() => {
            
            t.is(vm.$children[0].data.list[0].title, '6th');
            t.is(vm.$children[0].data.list[0].anchor, '6th');

            resolve();

        });

    });

});
