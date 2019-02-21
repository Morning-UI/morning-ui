import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import cascader                     from '../../../src/lib/components/cascader/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(cascader),
    name : 'cascader',
    formValue1 : ['zj', 'hz', 'jgq'],
    formValue2 : ['zj', 'wz'],
    formValueInvalid1 : ['asd'],
    formValueInvalid2 : ['sdf'],
    attrs : `:list="{'zj':{name:'浙江省',children:{'hz':{name:'杭州',children:{'xcq':'下城区','xhq':'西湖区','jgq':'江干区'}},'nb':{name:'宁波',children:{'jbq':'江北区','zhq':'镇海区'}},'wz':'温州'}},'js':{name:'江苏省',children:{'nj':{name:'南京',children:{'xwq':'玄武区','jnq':'江宁区'}},'sz':'苏州'}},'gd':{name:'广东省',children:{'gz':'广州','sz':'深圳','fs':'佛山'}}}"`,
    uiid : 3,
    delVmEl : false,
    _baseTestHookCustomMount : false,
    _formValueChangeSkipInvalidValueEmitTest : false,
    _formValueChangeSkipValueFilterEmitTest : false
};

commonTest.componentBase(testOptions);
commonTest.formBase(testOptions);
commonTest.formValueChange(testOptions);
