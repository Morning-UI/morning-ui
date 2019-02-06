import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import tab                          from '../../../src/lib/components/tab/index.vue';
import commonTest                   from '../../common/unit';

const testOptions = {
    test,
    Vue,
    snapshot,
    component : window.morning._origin.Form.extend(tab),
    name : 'tab',
    attrs : `:slot="scope.name"`,
    uiid : 2,
    delVmEl : false,
    _baseTestHookCustomMount : false
};

commonTest.componentBase(testOptions);
commonTest.componentDynamicSlot(testOptions, {
    testNum : 3,
    firstCheck : (t, vm) => {

        t.is(vm.$el.innerHTML, `<ul><li name="first" class="current">first</li><li name="second" class="">second</li><li name="third" class="">third</li></ul><div class="contents" style="width: 100%; min-height: 0;"><div name="first" class="item mor-tab-item current"><div>
        CONTENT : first
    </div></div><div name="second" class="item mor-tab-item"><div>
        CONTENT : second
    </div></div><div name="third" class="item mor-tab-item"><div>
        CONTENT : third
    </div></div></div>`);

    },
    secondCheck : (t, vm) => {

        t.is(vm.$children[0].$el.innerHTML, `<ul><li name="4th" class="current">4th</li><li name="5th" class="">5th</li></ul><div class="contents" style="width: 100%; min-height: 0;"><div name="4th" class="item mor-tab-item current"><div>
        CONTENT : 4th
    </div></div><div name="5th" class="item mor-tab-item"><div>
        CONTENT : 5th
    </div></div></div>`);

    },
    thirdCheck : (t, vm) => {
            
        t.is(vm.$el.innerHTML, `<ul><li name="6th" class="current">6th</li></ul><div class="contents" style="width: 100%; min-height: 0;"><div name="6th" class="item mor-tab-item current"><div>
        CONTENT : 6th
    </div></div></div>`);
        
    }
});
