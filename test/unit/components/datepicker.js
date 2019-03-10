import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import datepicker                   from '../../../src/lib/components/datepicker/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(datepicker),
    name : 'datepicker',
    formValue1 : '2018-03-23',
    formValue2 : '2017-02-12',
    formValueInvalid1 : undefined,
    formValueInvalid2 : undefined,
    attrs : ``,
    uiid : 7,
    // cause : ui-calendar will highlight today.
    // but ui-datepicker no config can disabled this config.for test eveyday snapshot is different.
    delVmEl : true,
    _baseTestHookCustomMount : async vm => {

        // fixed date
        vm.date = +new Date(testOptions.formValue1);

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
