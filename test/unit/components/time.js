import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import time                         from '../../../src/lib/components/time/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(time),
    name : 'time',
    attrs : ``,
    uiid : 2,
    delVmEl : false,
    _baseTestHookCustomMount : async vm => {

        // fixed date
        vm.time = new Date('2018-03-23 13:00:00');
        
        await new Promise(resolve => {

            vm.Vue.nextTick(() => {
            
                vm.$mount();
            
            });
            
            resolve();

        });

        return vm;

    },
    _baseTestHookBeforeSnapshot : async vm => {

        vm.$el = {
            outerHTML : vm.$el.outerHTML.replace('GMT+0000 (UTC)', 'GMT+0800 (GMT+08:00)')
        };

        return vm;

    }
};

commonTest.componentBase(testOptions);
