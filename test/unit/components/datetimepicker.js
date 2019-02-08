import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import datetimepicker               from '../../../src/lib/components/datetimepicker/index.vue';
import commonTest                   from '../../common/unit';

const uiid = 10;
const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(datetimepicker),
    name : 'datetimepicker',
    formValue1 : '2018-03-23 12:15:30',
    formValue2 : '2017-02-12 15:12:20',
    formValueInvalid1 : undefined,
    formValueInvalid2 : undefined,
    attrs : ``,
    uiid,
    // cause : ui-calendar will highlight today.
    // but ui-datetimepicker no config can disabled this config.for test eveyday snapshot is different.
    delVmEl : true,
    _baseTestHookCustomMount : async vm => {

        // fixed date
        vm.date = +new Date('2018-03-23');
        
        await new Promise(resolve => {

            vm.Vue.nextTick(() => {
            
                vm.$mount();
            
            });
            
            resolve();

        });

        return vm;

    },
    // this component allow emit event more than once.
    _formValueChangeSkipInvalidValueEmitTest : true,
    _formValueChangeSkipValueFilterEmitTest : true
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
