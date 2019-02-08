import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import imagemap                     from '../../../src/lib/components/imagemap/index.vue';
import commonTest                   from '../../common/unit';

const uiid = 28;
/* eslint-disable no-magic-numbers */
const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(imagemap),
    name : 'imagemap',
    formValue1 : {
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
    formValue2 : {
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
    },
    formValueInvalid1 : 'asd',
    formValueInvalid2 : 'sdf',
    attrs : ``,
    uiid,
    // cause :npm run test and npm run cover has different result, so not diff vm.$el for now.
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
    _formValueChangeSkipInvalidValueEmitTest : false,
    _formValueChangeSkipValueFilterEmitTest : false
};
/* eslint-enable no-magic-numbers */

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
