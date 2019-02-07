import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import calendar                     from '../../../src/lib/components/calendar/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(calendar),
    name : 'calendar',
    attrs : ``,
    uiid : 3,
    delVmEl : false,
    _baseTestHookCustomMount : async vm => {

        // fixed date
        vm.date = +new Date('2018-03-23');
        vm.highlightNow = false;
        
        await new Promise(resolve => {

            vm.Vue.nextTick(() => {
            
                vm.$mount();
            
            });
            
            resolve();

        });

        return vm;

    }
};

commonTest.componentBase(testOptions);
