import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import link                         from '../../../src/lib/components/link/index.vue';

const name = 'link';
const component = window.morning._origin.UI.extend(link);

test.serial('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    snapshot(t, vm);

});

test.serial('base : init component', async t => {

    const vm = new Vue(component).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(component.options.name, `morning-${name}`);

});

test.serial('base : component tag name is t-*', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `mor-${name}`.toUpperCase());

});

test.serial('config : link', async t => {

    const vm = new Vue({
        template : '<ui-link :link="link">链接</ui-link>',
        data : {
            link : 'https://www.google.com'
        },
        components : {
            'ui-link' : component
        }
    });

    vm.$mount();

    t.plan(2);

    t.is(vm.$children[0].conf.link, 'https://www.google.com');
    snapshot(t, vm);

});
