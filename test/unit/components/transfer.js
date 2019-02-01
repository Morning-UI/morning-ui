import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import transfer                     from '../../../src/lib/components/transfer/index.vue';

const name = 'transfer';
const component = window.morning._origin.Form.extend(transfer);
const formList = {
    item1 : '备选项-1',
    item2 : '备选项-2',
    item3 : '备选项-3',
    item4 : '备选项-4',
    item5 : '备选项-5',
    item6 : '备选项-6',
    item7 : '备选项-7',
    item8 : '备选项-8',
    item9 : '备选项-9'
};
const formValue1 = {
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
};
const formValue2 = {
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
};

test.serial('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    snapshot(t, vm);

});

test.serial('base : init component', async t => {

    const vm = new Vue(component).$mount();

    t.plan(2);

    t.is(vm.uiid, 8);
    t.is(component.options.name, `morning-${name}`);

});

test.serial('base : component tag name is t-*', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `mor-${name}`.toUpperCase());

});

test.serial('form base : init component value is right when use v-model', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} :list="list" v-model="value1"></ui-${name}>
            </div>
        `,
        data : {
            list : formList,
            value1 : formValue1
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(JSON.stringify(vm.$children[0].get()), JSON.stringify(formValue1));

    });

});

test.serial('form base : init component value is right when both use v-model and default-value', async t => {

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} :list="list" v-model="value1" :default-value="value2"></ui-${name}>
            </div>
        `,
        data : {
            list : formList,
            value1 : formValue1,
            value2 : formValue2
        },
        components : {
            [`ui-${name}`] : component
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(JSON.stringify(vm.$children[0].get()), JSON.stringify(formValue1));

    });

});

test.serial('form value-change : default value not emit event', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} :list="list" :default-value="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            list : formList,
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        }
    });

    vm.$mount();

    t.plan(1);

    Vue.nextTick(() => {

        t.is(count, 0);

    });

});

test.serial('form value-change : set value emit event once', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} :list="list" ref="test" :default-value="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            list : formList,
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        },
        mounted : function () {

            Vue.nextTick(() => {

                t.is(count, 0);
                this.$refs.test.set(formValue2);

                Vue.nextTick(() => {

                    t.is(count, 1);

                });

            });

        }
    });

    vm.$mount();

    t.plan(2);

});

test.serial('form value-change : set same value not emit event', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} :list="list" ref="test" :default-value="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            list : formList,
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        },
        mounted : function () {

            this.$refs.test.set(formValue2);

            Vue.nextTick(() => {

                t.is(count, 1);

                this.$refs.test.set(formValue2);

                Vue.nextTick(() => {

                    t.is(count, 1);

                });

            });

        }
    });

    vm.$mount();

    t.plan(2);

});

test.serial('form value-change : set invalid value not emit event', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} :list="list" ref="test" :default-value="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            list : formList,
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        },
        mounted : function () {

            this.$refs.test.set(['asd']);

            Vue.nextTick(() => {

                t.is(count, 1);
                this.$refs.test.set(['sdf']);

                Vue.nextTick(() => {

                    t.is(count, 1);
                    
                });
                
            });

        }
    });

    vm.$mount();

    t.plan(2);

});

test.serial('form value-change : value pass filter emit event once', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} :list="list" ref="test" :default-value="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            list : formList,
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        },
        mounted : function () {

            this.$refs.test.set(null);

            Vue.nextTick(() => {

                t.is(count, 1);
                
            });

        }
    });

    vm.$mount();

    t.plan(1);

});

test.serial('form value-change : v-model not emit event', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} :list="list" ref="test" v-model="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            list : formList,
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        },
        mounted : function () {

            Vue.nextTick(() => {

                t.is(count, 0);
                
            });

        }
    });

    vm.$mount();

    t.plan(1);

});

test.serial('form value-change : v-model change emit event once', async t => {

    let count = 0;

    const vm = new Vue({
        template : `
            <div style="width:300px;">
                <ui-${name} :list="list" ref="test" v-model="value" @value-change="echo"></ui-${name}>
            </div>
        `,
        data : {
            list : formList,
            value : formValue1
        },
        components : {
            [`ui-${name}`] : component
        },
        methods : {
            echo : function () {

                count++;

            }
        },
        mounted : function () {

            Vue.nextTick(() => {

                t.is(count, 0);

                this.value = formValue2;

                Vue.nextTick(() => {

                    t.is(count, 1);
                    
                });
                
            });

        }
    });

    vm.$mount();

    t.plan(2);

});
