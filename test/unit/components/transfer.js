import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import transfer                     from '../../../src/lib/components/transfer/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(transfer),
    name : 'transfer',
    formValue1 : {
        source : [
            'item2',
            'item3',
            'item4',
            'item5',
            'item6',
            'item7',
            'item8',
            'item9'
        ],
        target : [
            'item1'
        ]
    },
    formValue2 : {
        source : [
            'item3',
            'item4',
            'item5',
            'item6',
            'item7',
            'item8',
            'item9'
        ],
        target : [
            'item1',
            'item2'
        ]
    },
    formValueInvalid1 : ['asd'],
    formValueInvalid2 : ['sdf'],
    attrs : `:list="{
        item1 : '备选项-1',
        item2 : '备选项-2',
        item3 : '备选项-3',
        item4 : '备选项-4',
        item5 : '备选项-5',
        item6 : '备选项-6',
        item7 : '备选项-7',
        item8 : '备选项-8',
        item9 : '备选项-9'
    }"`,
    uiid : 12,
    delVmEl : false,
    _baseTestHookCustomMount : false,
    _formValueChangeSkipInvalidValueEmitTest : false,
    _formValueChangeSkipValueFilterEmitTest : false
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
